import { gpuUtils } from '../gpu/gpuUtils';
import { Math2 } from '../Math2';
import { Events } from './Event.js';
import { ProxyManager } from './ProxyElement.js';

let dynamicImport = async (url) => {
  let module = await import(url);
  return module;
}

//Get the text inside of a function (regular or arrow);
function getFunctionBody(methodString) {
  return methodString.toString().replace(/^\W*(function[^{]+\{([\s\S]*)\}|[^=]+=>[^{]*\{([\s\S]*)\}|[^=]+=>(.+))/i, '$2$3$4');
}

function getFunctionHead(methodString) {
  let fnstring = methodString.toString();
  return fnstring.slice(0, fnstring.indexOf('{') + 1);
}

function buildNewFunction(head, body) {
  let newFunc = eval(head + body + '}');
  return newFunc;
}

function isFunction(string) {
  let regex = new RegExp('(|[a-zA-Z]\w*|\([a-zA-Z]\w*(,\s*[a-zA-Z]\w*)*\))\s*=>')
  let func = (typeof string === 'string') ? string.substring(0,10).includes('function') : false;
  let arrow = (typeof string === 'string') ? regex.test(string) : false;
  if(func || arrow) return true;
  else return false;
}

function parseFunctionFromText(method) {
  //Get the text inside of a function (regular or arrow);
  let getFunctionBody = (methodString) => {
    return methodString.replace(/^\W*(function[^{]+\{([\s\S]*)\}|[^=]+=>[^{]*\{([\s\S]*)\}|[^=]+=>(.+))/i, '$2$3$4');
  }

  let getFunctionHead = (methodString) => {
    let startindex = methodString.indexOf(')');
    return methodString.slice(0, methodString.indexOf('{',startindex) + 1);
  }

  let newFuncHead = getFunctionHead(method);
  let newFuncBody = getFunctionBody(method);

  let newFunc;
  if (newFuncHead.includes('function ')) {
    let varName = newFuncHead.split('(')[1].split(')')[0]
    newFunc = new Function(varName, newFuncBody);
  } else {
    //console.log(newFuncHead,newFuncBody);
    newFunc = eval(newFuncHead + newFuncBody + "}");
  }

  return newFunc;

}


export class CallbackManager {
  constructor() {

    try {
      window.gpu = new gpuUtils();
      this.gpu = window.gpu;
    } catch {
      let gpu = new gpuUtils();
      this.gpu = gpu;
    }

    this.EVENTS = new Events();
    this.EVENTSETTINGS = [];

    this.canvas = new OffscreenCanvas(512, 512); //can add fnctions and refer to this.offscreen 
    this.ctx; this.context;
    this.ANIMATION = undefined;
    this.ANIMATIONFUNC = undefined;
    this.ANIMATING = false;
    this.ANIMFRAMETIME = performance.now(); //ms based on UTC stamps
    this.threeUtil = undefined;

    //args = array of expected arguments
    //origin = optional tag on input object
    //self = this. scope for variables within the callbackmanager (including values set)

    this.callbacks = [
      { //ping pong, just validates responsiveness
        case: 'ping', callback: (args,origin,self) => {
          return 'pong';
        }
      },
      { //return a list of function calls available on the worker
        case: 'list', callback: (args,origin,self) => {
          let list = [];
          this.callbacks.forEach((obj) => {
            list.push(obj.case);
          });
          return list;
        }
      },
      { //add a local function, can implement whole algorithm pipelines on-the-fly
        case: 'addfunc', callback: (args, origin, self) => { //arg0 = name, arg1 = function string (arrow or normal)
          let newFunc = parseFunctionFromText(args[1]);

          let newCallback = { case: args[0], callback: newFunc };

          let found = this.callbacks.findIndex(c => { if (c.case === newCallback.case) return c });
          if (found != -1) this.callbacks[found] = newCallback;
          else this.callbacks.push(newCallback);
          return true;
        }
      },
      { //set locally accessible values, just make sure not to overwrite the defaults in the callbackManager
        case: 'setValues', callback: (args, origin, self) => {
          if (typeof args === 'object') {
            Object.keys(args).forEach((key) => {
              self[key] = args[key]; //variables will be accessible in functions as this.x or this['x']
              if (self.threeUtil) self.threeUtil[key] = args[key];
            });
            return true;
          } else return false;
        }
      },
      { //parses a stringified class prototype (class x{}.toString()) containing function methods for use on the worker
        case: 'transferClassObject', callback: (args,origin,self) => {
          if (typeof args === 'object') {
            Object.keys(args).forEach((key) => {
              if(typeof args[key] === 'string') {
                let obj = args[key];
                if(args[key].indexOf('class') === 0) obj = eval('('+args[key]+')');
                self[key] = obj; //variables will be accessible in functions as this.x or this['x']
                //console.log(self,key,obj);
                if (self.threeUtil) self.threeUtil[key] = obj;
              }
            });
            return true;
          } else return false;
        }
      },
      { //add a gpu function call usable in kernels, follow gpujs's tutorials and pass stringified functions using their format
        case: 'addgpufunc', callback: (args, origin, self) => { //arg0 = gpu in-thread function string
          return this.gpu.addFunction(parseFunctionFromText(args[0]));
        }
      },
      { //add a gpu kernels, follow gpujs's tutorials and pass stringified functions using their format
        case: 'addkernel', callback: (args, origin, self) => { //arg0 = kernel name, arg1 = kernel function string
          return this.gpu.addKernel(args[0], parseFunctionFromText(args[1]));
        }
      },
      { //call a custom gpu kernel
        case: 'callkernel', callback: (args, origin, self) => { //arg0 = kernel name, args.slice(1) = kernel input arguments
          return this.gpu.callKernel(args[0], args.slice(1)); //generalized gpu kernel calls
        }
      },
      { //add an event to the event manager, this helps building automated pipelines between threads
        case: 'addevent', callback: (args, origin, self) => { //args[0] = eventName, args[1] = case, only fires event if from specific same origin
          this.EVENTSETTINGS.push({ eventName: args[0], case: args[1], origin: origin });
          return true;
        }
      },
      { //internal event subscription, look at Event.js for usage, its essentially a function trigger manager for creating algorithms
        case: 'subevent', callback: (args, origin, self) => { //args[0] = eventName, args[1] = case, only fires event if from specific same origin
          return this.EVENTS.subEvent(args[0], parseFunctionFromText(args[1]))
        }
      },
      { //internal event unsubscribe
        case: 'unsubevent', callback: (args, origin, self) => { //args[0] = eventName, args[1] = case, only fires event if from specific same origin
          return this.EVENTS.unsubEvent(args[0], args[1]);
        }
      },
      { //resize an offscreen canvas
        case: 'resizecanvas', callback: (args, origin, self) => {
          this.canvas.width = args[0];
          this.canvas.height = args[1];
          return true;
        }
      }, 
      { //this creates an event dispatcher to replicate input events on targeted elements
        case:'startProxy', callback: (args, origin, self) => {
          //pass element proxy and element id
          const pmgr = new ProxyManager();
          if(args.element === 'offscreen' || args.element === 'canvas') args.element = self.canvas;
          self[args.proxyId] = args.element; //local reference to input element proxy self[proxyId] = elementProxy;
          const proxy = pmgr.getProxy(args.proxyId); 
          proxy.ownerDocument = proxy; // HACK!
          self.document = {};  // HACK!
          
          let makeProxy = (data) => {
            pmgr.makeProxy(data);
          }
          
          const handlers = {
              makeProxy,
              event: pmgr.handleEvent,
          };
          
          self[pmgr.id] = {
            proxyManager:pmgr, 
            handlers:handlers
          };

          return pmgr.id;
        }
      },
      { //args[0] = ProxyManager Id returned from startProxy, args[1] = event object
        case:'proxyHandler', callback: (args, origin, self) => {

          const fn = self[args[0]]?.handlers[args[1].type];

          if(!fn) {
            return false;
          }

          fn(args[1]);
          return true;
        }
      },
      {
        case: 'initThree', callback: async (args, origin, self) => {
          if (this.ANIMATING) {
            this.ANIMATING = false;
            cancelAnimationFrame(this.ANIMATION);
          }
          // if (!this.threeUtil) {
          //   let module = await dynamicImport('./_dist_/utils/workers/workerThreeUtils.js');
          //   this.threeUtil = new module.threeUtil(this.canvas);
          // }
          // if (args[0]) { //first is the setup function
          //   this.threeUtil.setup = parseFunctionFromText(args[0]);
          // }
          // if (args[1]) { //next is the draw function (for 1 frame)
          //   this.threeUtil.draw = parseFunctionFromText(args[1]);
          // }
          // if (args[2]) {
          //   this.threeUtil.clear = parseFunctionFromText(args[2]);
          // }
          // this.threeUtil.setup();
          return true;
        }
      },
      {
        case: 'startThree', callback: async (args, origin, self) => { //run the setup to start the three animation
          if (this.ANIMATING) {
            this.ANIMATING = false;
            cancelAnimationFrame(this.ANIMATION);
          }
          if (!this.threeUtil) {
            let module = await dynamicImport('./_dist_/utils/workers/workerThreeUtils.js');
            console.log(module);
            this.threeUtil = new module.threeUtil(self.canvas, self);
          }
          if (this.threeUtil) {
            this.threeUtil.setup(args,origin,self);
          }
          return true;
        }
      },
      {
        case: 'clearThree', callback: (args, origin, self) => { //run the clear function to stop three
          if (this.threeUtil) {
            this.threeUtil.clear(args,origin,self);
          }
          return true;
        }
      },
      {case: 'setAnimation', callback: (args, origin, self) => { //pass a draw function to be run on an animation loop. Reference this.canvas and this.context or canvas and context. Reference values with this.x etc. and use setValues to set the values from another thread
          this.animationFunc = parseFunctionFromText(args[0]);
          return true;
        }
      },
      {
        case: 'startAnimation', callback: (args, origin, self) => {
          //console.log(this.animationFunc.toString(), this.canvas, this.angle, this.angleChange, this.bgColor)
          let anim = () => {
            if (this.ANIMATING) {
              this.animationFunc(this);
              this.ANIMFRAMETIME = performance.now() - this.ANIMFRAMETIME;
              let emitevent = this.checkEvents('render', origin);
              let dict = { foo: 'render', output: this.ANIMFRAMETIME, id: self.id, origin: origin };
              this.ANIMFRAMETIME = performance.now();
              if (emitevent) {
                this.EVENTS.emit('render', dict);
              }
              else {
                postMessage(dict);
              }
              requestAnimationFrame(anim);
            }
          }

          if (this.ANIMATING) {
            this.ANIMATING = false;
            cancelAnimationFrame(this.ANIMATION);
            setTimeout(() => {
              this.ANIMATING = true;
              this.ANIMATION = requestAnimationFrame(anim);
            }, 300);
          } else {
            this.ANIMATING = true;
            console.log('begin animation')
            this.ANIMATION = requestAnimationFrame(anim);
          }
          return true;
        }
      },
      {
        case: 'stopAnimation', callback: (args, origin, self) => {
          if (this.ANIMATING) {
            this.ANIMATING = false;
            cancelAnimationFrame(this.ANIMATION);
            return true;
          } else return false;
        }
      },
      {
        case: 'render', callback: (args, origin, self) => { //runs the animation function
          this.animationFunc();
          let time = performance.now() - this.ANIMFRAMETIME
          this.ANIMFRAMETIME = performance.now();
          return time;
        }
      },
      { 
        case: 'xcor', callback: (args, origin, self) => { 
          return Math2.crosscorrelation(...args); 
        } 
      },
      { 
        case: 'autocor', callback: (args, origin, self) => { 
          return Math2.autocorrelation(args); 
        } 
      },
      { 
        case: 'cov1d', callback: (args, origin, self) => { 
          return Math2.cov1d(...args); } 
        },
      { 
        case: 'cov2d', callback: (args, origin, self) => { 
          return Math2.cov2d(args); } 
        },
      { 
        case: 'sma', callback: (args, origin, self) => { 
          return Math2.sma(...args); } 
        },
      {
        case: 'dft', callback: (args, origin, self) => {
          if (args[2] == undefined) args[2] = 1;
          return this.gpu.gpuDFT(...args);
        }
      },
      {
        case: 'multidft', callback: (args, origin, self) => {
          if (args[2] == undefined) args[2] = 1;
          return this.gpu.MultiChannelDFT(...args);
        }
      },
      {
        case: 'multidftbandpass', callback: (args, origin, self) => {
          if (args[4] == undefined) args[4] = 1;
          return this.gpu.MultiChannelDFT_Bandpass(...args);
        }
      },
      {
        case: 'fft', callback: (args, origin, self) => {
          if (args[2] == undefined) args[2] = 1;
          return this.gpu.gpuFFT(...args);
        }
      },
      {
        case: 'multifft', callback: (args, origin, self) => {
          if (args[2] == undefined) args[2] = 1;
          return this.gpu.MultiChannelFFT(...args);
        }
      },
      {
        case: 'multifftbandpass', callback: (args, origin, self) => {
          if (args[4] == undefined) args[4] = 1;
          return this.gpu.MultiChannelFFT_Bandpass(...args);
        }
      },
      { 
        case: 'gpucoh', callback: (args, origin, self) => { 
          return this.gpu.gpuCoherence(...args); } 
        },
      {
        case: 'coherence', callback: (args, origin, self) => {
          const correlograms = Math2.correlograms(args[0]);
          const buffer = [...args[0], ...correlograms];
          var dfts;

          var scalar = 1;
          //console.log(mins)
          //console.log(buffer);
          dfts = this.gpu.MultiChannelDFT_Bandpass(buffer, args[1], args[2], args[3], scalar);
          //console.log(dfts)
          const cordfts = dfts[1].splice(args[0].length, buffer.length - args[0].length);
          //console.log(cordfts)

          const coherenceResults = [];
          const nChannels = args[0].length;

          //cross-correlation dfts arranged like e.g. for 4 channels: [0:0, 0:1, 0:2, 0:3, 1:1, 1:2, 1:3, 2:2, 2:3, 3:3] etc.
          var k = 0;
          var l = 0;
          cordfts.forEach((row, i) => { //move autocorrelation results to front to save brain power
            if (l + k === nChannels) {
              var temp = cordfts.splice(i, 1);
              k++;
              cordfts.splice(k, 0, ...temp);
              l = 0;
              //console.log(i);
            }
            l++;
          });
          //Now arranged like [0:0,1:1,2:2,3:3,0:1,0:2,0:3,1:2,1:3,2:3]

          //Outputs FFT coherence data in order of channel data inputted e.g. for 4 channels resulting DFTs = [0:1,0:2,0:3,1:2,1:3,2:3];

          var autoFFTproducts = [];
          k = 0;
          l = 1;
          cordfts.forEach((dft, i) => {
            var newdft = new Array(dft.length).fill(0);
            if (i < nChannels) { //sort out autocorrelogram FFTs
              dft.forEach((amp, j) => {
                newdft[j] = amp//*dfts[1][i][j];
              });
              autoFFTproducts.push(newdft);
            }
            else { //now multiply cross correlogram ffts and divide by autocorrelogram ffts (magnitude squared coherence)
              dft.forEach((amp, j) => {
                newdft[j] = amp * amp / (autoFFTproducts[k][j] * autoFFTproducts[k + l][j]);//Magnitude squared coherence;
                if (newdft[j] > 1) { newdft[j] = 1; } //caps the values at 1
                //newdft[j] = Math.pow(newdft[j],.125)
              });
              l++;
              if ((l + k) === nChannels) {
                k++;
                l = 1;
              }
              coherenceResults.push(newdft);
            }
          });
          return [dfts[0], dfts[1], coherenceResults];
        }
      }
    ];
  }

  async runCallback(foo,input=[],origin) {
    let output = 'function not defined';
    await Promise.all(this.callbacks.find(async (o,i) => {
      if (o.case === foo) {
        if (input) output = await o.callback(input, origin, this);
        return true;
      }
    }));
    return output;
  }

  checkEvents(foo, origin) {
    let found = this.EVENTSETTINGS.find((o) => {
      if ((o.origin && origin)) {
        if (o.case && foo) {
          if (o.origin === origin && o.case === foo) return true;
        } else if (o.origin === origin) return true;
        else return;
      } else if (o.case && foo) {
        if (o.case === foo) return true;
        else return;
      }
      else return;
    });
    return found;
  }

  async checkCallbacks(event) {
    let output = 'function not defined';
    if(!event.data) return output;
    await Promise.all(this.callbacks.find(async (o,i) => {
      if (o.case === event.data.foo || o.case === event.data.case) {
        if (event.data.input) output = await o.callback(event.data.input, event.data.origin, this);
        else if (event.data.args) output = await o.callback(event.data.args, event.data.origin, this);
        return true;
      }
    }));
    return output;
  }
}