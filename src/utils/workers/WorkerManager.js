// import Worker from 'web-worker'

import {CallbackManager} from './workerCallbacks' 

import worker from './magic.worker.js' // works when exporting self

import { Events } from './Event';

export class WorkerManager {
    constructor(workerURL= new URL('./magic.worker.js', import.meta.url), defaultWorkerThreads=0){
        this.workerURL = workerURL;
        this.workerResponses = [];
        this.workers = [];
        this.workerThreads = defaultWorkerThreads;
        this.workerThreadrot = 0;

        this.events = new Events(this); //window.workers.events.subEvent('abc',(output)=>{do someting})
        this.subEvent = (eventName, result=(res)=>{})=>{this.events.subEvent(eventName,result);}
        this.unsubEvent = (eventName, sub) => {this.events.unsubEvent(eventName,sub)};
        this.addEvent = (eventName, origin, foo, workerId) => {this.events.addEvent(eventName, origin, foo, workerId)};

        for(var i = 0; i < defaultWorkerThreads; i++){
          this.addWorker()
        }
    }
    
    dynamicImport = async (url) => {
      let module = await import(url);
      return module;
    }

    addWorker = async (workerurl=this.workerURL,includeThree=false) => {
        console.log('add worker');

        let newWorker;
        // Swapped with webpack and snowpack
        // try { //webpack
        //   newWorker = new worker()
        // } catch {
        //   try { //snowpack
        //     newWorker = new Worker(workerurl, {name:'eegworker_'+this.workers.length, type: 'module'})
        //   } catch (err) {
            try { //blob worker

              let threeUtil;
              if(includeThree) {
                await new Promise(async (resolve)=>{
                  let module = await this.dynamicImport('./workerThreeUtils.js');
                  resolve(module);
                }).then((module) => {
                  threeUtil = new module.threeUtil();
                });
              }

              let mgr = CallbackManager;

              if(!document.getElementById('blobworker')) {
                document.head.insertAdjacentHTML('beforeend',`
                  <script id='blobworker' type='javascript/worker'>
                    //gotta handle imports
                    const GPU = ${mgr.GPUUTILSCLASS.GPU.toString()};
                    console.log(GPU, GPU.__proto__.constructor.name);
                    const gpuUtils = ${mgr.GPUUTILSCLASS.toString()};
                    const Math2 = ${mgr.MATH2.toString()};
                    const ProxyManager = ${mgr.PROXYMANAGERCLASS.toString()};
                    const StateManager = ${mgr.EVENTSCLASS.STATEMANAGERCLASS.toString()};
                    const Events = ${mgr.EVENTSCLASS.toString()};
                    
                    ${CallbackManager.toString()}

                    let manager = new CallbackManager();
                    manager.threeUtil = ${threeUtil?.toString()}
                    let canvas = manager.canvas; 
                    let ctx = manager.canvas.context;
                    let context = ctx; //another common reference
                    let counter = 0;

                    self.onmessage = ${worker.onmessage.toString()}
                  </script>
                `);
              }
              let blob = new Blob([
                document.querySelector('#blobworker').textContent
              ], {type:"text/javascript"});

              console.log("Blob worker!");
              newWorker = new Worker(window.URL.createObjectURL(blob));
            } catch (err2) { //dummy worker (single threaded)
              try{
                console.error("Error, creating dummy worker (WARNING: Single Threaded). ERROR:", err2);
                newWorker =  new dummyWorker(this.workerResponses)
              } catch(err3) {
                console.error("No worker created:", err3);
              }
          //   }

          // }
        } finally {
          if(!newWorker) return;
          let id = "worker_"+Math.floor(Math.random()*10000000000);
            
          this.workers.push({worker:newWorker, id:id});
          newWorker.onmessage = (ev) => {

              var msg = ev.data;
              this.workerResponses.forEach((foo,i) => {
                if(typeof foo === 'object') foo.callback(msg);
                else if (typeof foo === 'function') foo(msg);
              });
          };

          newWorker.onerror = (e) => {
            console.error(e)
          }

          console.log("worker threads: ", this.workers.length)
          return id; //worker id
        }
    }

    addCallback(name='',callback=(args)=>{}) {
      if(name.length > 0 && !this.workerResponses.find((o)=>{if(typeof o === 'object') {if(o.name === name) return true;}})) {
        this.workerResponses.push({name:'',callback:callback});
      }
    }

    removeCallback(nameOrIdx='') {
      if(nameOrIdx.length > 0) {
        let idx;
        if(this.workerResponses.find((o,i)=>{if(typeof o === 'object') {if(o.name === nameOrIdx) { idx = i; return true;}}})) {
          this.workerResponses.splice(idx,1);
        }
      } else if (typeof nameOrIdx === 'number') {
        this.workerResponses.splice(nameOrIdx,1);
      }
    }

    //add a callback to a worker
    addWorkerFunction(functionName,fstring,origin,id) {
      if(functionName && fstring) {
        if(typeof fstring === 'function') fstring = fstring.toString();
        let dict = {foo:'addfunc',args:[functionName,fstring],origin:origin}; //post to the specific worker
        if(!id) this.workers.forEach((w) => {this.postToWorker(dict,w.id);}); //post to all of the workers
        else this.postToWorker(dict,id);
      }
    }

    //run from the list of callbacks on an available worker
    runWorkerFunction(functionName,args=[],origin,id,transfer=undefined) {
        if(functionName) {
          if(functionName === 'transferClassObject') {
            if(typeof args === 'object' && !Array.isArray(args)) {
              for(const prop in args) {
                if(typeof args[prop] === 'object' && !Array.isArray(args[prop])) args[prop] = args[prop].toString();
              }
            }
          }
          let dict = {foo:functionName, args:args, origin:origin};
          this.postToWorker(dict,id,transfer);
        }
    }

    //a way to set variables on a thread
    setValues(values={},origin,id,transfer=undefined) {
      this.runWorkerFunction('setValues',values,origin,id,transfer);
    }

    //this creates a message port so particular event outputs can directly message another worker and save overhead on the main thread
    establishMessageChannel(
      eventName,
      worker1Id,
      worker2Id,
      worker2Response=undefined, //onEvent=(self,args,origin)=>{} //args will be the output
      foo,
      origin) {
      let channel = new MessageChannel();
      let port1 = channel.port1;
      let port2 = channel.port2;

      this.runWorkerFunction(
        'addevent',
        [
          eventName,
          foo,
          port1
        ],
        origin,
        worker1Id,
        [port1]
      );

      this.runWorkerFunction(
        'addevent',
        [
          eventName,
          eventName,
          port2
        ],
        origin,
        worker2Id,
        [port2]
      );

      if(typeof worker2Response === 'function')
        this.runWorkerFunction(
          'subevent',
          [
            eventName,
            worker2Response.toString()
          ],
          origin,
          worker2Id
        );

    }

    postToWorker = (input, id = null, transfer=undefined) => {
        //console.log('posting',input,id);
        if (Array.isArray(input.input)){
        input.input = input.input.map(v => {
          if (typeof v === 'function') return v.toString();
          else return v;
        })} 

        if(id === null) {
            this.workers[this.workerThreadrot].worker.postMessage(input,transfer);
            if(this.workerThreads > 1){
                this.workerThreadrot++;
                if(this.workerThreadrot >= this.workerThreads){
                    this.workerThreadrot = 0;
                }
            }
        }
        else{
            this.workers.find((o)=>{
                if(o.id === id) {
                    o.worker.postMessage(input,transfer); 
                    return true;
                  }
            })
        }
    }

    terminate(id) {
        let idx;
        let found = this.workers.find((o,i)=>{
            if(o.id === id) {
                idx=i;
                o.worker.terminate();
                return true;
            }
        });
        if(found) {
            this.workers.splice(idx,1);
            return true;
        } else return false;
    }
}




//for single threaded applications

class dummyWorker {
    constructor(workerResponses) {
        this.workerResponses = workerResponses;

        this.manager = new CallbackManager()

    }

    postMessage=(input)=>{
        let result = this.onMessage({data:input}); 
        this.workerResponses.forEach((foo,i) => {
            foo.callback(result);
        });
    }

    terminate(){}

    onMessage = (event) => {
      // define gpu instance
      //console.log("worker executing...")
      console.time("worker");
      let output = "function not defined";
    
      this.manager.callbacks.find((o,i)=>{
        if(o.case === event.data.foo) {
          output = o.callback(event.data.input);
          return true;
        }
      });

      // output some results!
      console.timeEnd("worker");
    
      return {output: output, foo: event.data.foo, origin: event.data.origin};
    
    }
  }