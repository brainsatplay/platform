// import Worker from 'web-worker'

import {CallbackManager} from './workerCallbacks' 

// WEBPACK
import worker from './magic.worker.js'

// SNOWPACK
// import * as worker from './magic.worker.js'

import { Events } from './Event';

let defaultWorkerThreads = 0
export class WorkerManager {
    constructor(workerURL= new URL('./magic.worker.js', import.meta.url, defaultWorkerThreads)){
        this.workerURL = workerURL;
        this.workerResponses = [];
        this.workers = [];
        this.workerThreads = defaultWorkerThreads;
        this.workerThreadrot = 0;

        this.events = new Events(this); //window.workers.events.subEvent('abc',(output)=>{do someting})

        for(var i = 0; i < defaultWorkerThreads; i++){
          this.addWorker()
        }
    }

    addWorker = (workerurl=this.workerURL) => {
        console.log('add worker');

        let newWorker;

        // Swapped with webpack and snowpack
        try {
          newWorker = new worker()
        } catch {
          try {
            newWorker = new Worker(workerurl, {name:'eegworker_'+this.workers.length, type: 'module'})
          } catch (err) {
            console.log("Error, creating dummy worker (WARNING: Single Threaded). ERROR:", err);
            newWorker =  new dummyWorker(this.workerResponses)
          }
        } finally {

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

    addWorkerFunction(functionName,fstring,origin,id) {
      if(functionName && fstring) {
        if(typeof fstring === 'function') fstring = fstring.toString();
        let dict = {foo:'addfunc',args:[functionName,fstring],origin:origin}; //post to the specific worker
        if(!id) this.workers.forEach((w) => {this.postToWorker(dict,w.id);}); //post to all of the workers
        else this.postToWorker(dict,id);
      }
    }

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
            foo(result);
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