

import {SoundJS} from './Sound'
import {WorkerManager} from '../../../utils/workers/WorkerManager'

window.workers = new WorkerManager();

let worker1Id = window.workers.addWorker();
// window.workers.addWorker();
// window.workers.addWorker();

let output;
let origin = 'here';

window.workers.addEvent('multifft',origin,'multifft',worker1Id);


window.workers.subEvent('multifft',(res)=>{
    output = res.output;
    console.log(res.output);

    //output[0] = x axis (frequencies)
    //output[1] = slices of the fft (array of arrays, each array is same length of x axis array, 
    // representing the frequency distributions for each slice)
});

let sound = new SoundJS();


sound.addSounds([url],onReady = (idx,buffer) => {
    sound.playSound(idx);
    let buf = Array.from(buffer.getChannelData()); //this is the actual sound data Float32Array
    //the array of amplitudes

    //[0,1,3,4,22,555,444,222]; 
    let toDispatch = [];
    for(let i = 0; i < buf.length; i+= buffer.samplingRate*0.5) {
        if(i+buffer.samplingRate > buf.length) {
            i = buf.length - buffer.samplingRate;
        }
        toDispatch.push(buf.slice(i,i+buffer.samplingRate));
    }

    window.workers.runWorkerFunction('multifft',[toDispatch,1,1],origin,worker1Id);

    //for each time; do fft(buf.slice(time0,time1), buffer.samplingRate);
    //returns array of fft slices which can then be visualized

}, onBeginDecoding = () => {

});




// sound.decodeLocalAudioFile(onReady = (idx,buffer) => {
//     sound.playSound(idx);
//     let buf = Array.from(buffer);
    
// },onBeginDecoding = () => {

// });
