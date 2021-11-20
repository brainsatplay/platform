import './gpu-browser.min.js'
//By Joshua Brewster, Dovydas Stirpeika (MIT License)

export class gpuUtils {

  static GPU = GPU;
  
  constructor(gpu = undefined) {

    //redundancy is for blob workers
    this.GPU = GPU;
    this.createKernelsandFunctions();

    this.gpu = gpu;
    //console.log(GPU);
    if(!gpu) this.gpu = new this.GPU();
    this.kernels = []; // {name:"",f:foo(){}}
    this.canvaskernels = [];

    this.kernel;
    this.PI = 3.141592653589793;
    this.SQRT1_2 = 0.7071067811865476

    this.addFunctions();

    this.imgkernels = {
      edgeDetection: [
        -1, -1, -1,
        -1,  8, -1,
        -1, -1, -1
      ], boxBlur: [
        1/9, 1/9, 1/9,
        1/9, 1/9, 1/9,
        1/9, 1/9, 1/9
      ], sobelLeft: [
        1,  0, -1,
        2,  0, -2,
        1,  0, -1
      ], sobelRight: [
        -1, 0, 1,
        -2, 0, 2,
        -1, 0, 1
      ], sobelTop: [
        1,  2,  1,
        0,  0,  0,
        -1, -2, -1  
      ], sobelBottom: [
        -1, 2, 1,
        0, 0, 0,
        1, 2, 1
      ], identity: [
        0, 0, 0, 
        0, 1, 0, 
        0, 0, 0
      ], gaussian3x3: [
        1,  2,  1, 
        2,  4,  2, 
        1,  2,  1
      ], guassian7x7: [
        0, 0,  0,   5,   0,   0,  0,
        0, 5,  18,  32,  18,  5,  0,
        0, 18, 64,  100, 64,  18, 0,
        5, 32, 100, 100, 100, 32, 5,
        0, 18, 64,  100, 64,  18, 0,
        0, 5,  18,  32,  18,  5,  0,
        0, 0,  0,   5,   0,   0,  0,
      ], emboss: [
        -2, -1,  0, 
        -1,  1,  1, 
        0,  1,  2
      ], sharpen: [
        0, -1,  0,
        -1,  5, -1,
        0, -1,  0
      ]
    };
  }

  
static makeKrnl(gpu, f, opts = {
  setDynamicOutput: true,
  setDynamicArguments: true,
  setPipeline: true,
  setImmutable: true,
  setGraphical: false
}) {
  const k = gpu.createKernel(f);

  if (opts.setDynamicOutput)    k.setDynamicOutput(true);
  if (opts.setDynamicArguments) k.setDynamicArguments(true);
  if (opts.setPipeline)         k.setPipeline(true);
  if (opts.setImmutable)        k.setImmutable(true);
  if (opts.setGraphical)        k.setGraphical(true);

  //.setOutput([signal.length]) //Call before running the kernel
  //.setLoopMaxIterations(signal.length);

  return k;
}

static makeCanvasKrnl(appendToId, gpu, f, opts = {
  setDynamicOutput: true,
  setDynamicArguments: true,
  setPipeline: true,
  setImmutable: true,
  setGraphical: true
}) {

  const k = makeKrnl(gpu,f,opts);

  //k();

  const canvas = k.canvas; 

  document.getElementById(appendToId).appendChild(canvas);

  return k; //run k() with the input arguments in an animation loop, get graphical output.
}

  dynamicImport = async (url) => {
    let module = await import(url);
    return module;
  }

  //adds math functions to use per-thread
  addFunction(func = function f(){}) {
    this.gpu.addFunction(func);
  }

  //add kernels to run based on input data. Input/Output sizes are dynamically allocated, functions are saved on the gpu to improve runtimes
  addKernel(name="", krnl=function foo(){}) {
    let found = this.kernels.find((o)=> {
      if(o.name === name) {
        return true;
      }
    });
    if(!found) {
      this.kernels.push({name:name, krnl:gpuUtils.makeKrnl(this.gpu,krnl)});
      return true;
    } else { 
      console.error('Kernel already exists'); 
      return false;
    }
    
  }

  addCanvasKernel(name, f, appendToId) {
    let found = this.canvaskernels.find((o)=> {
      if(o.name === name) {
        return true;
      }
    });
    if(!found) {
      this.kernels.push({name:name,krnl:gpuUtils.makeCanvasKrnl(appendToId,this.gpu,f)});
      return true;
    } else { 
      console.error('Kernel already exists'); 
      return false;
    }
    
  }

  //combine two or more kernels into a single function, this lets you run multiple kernels on the GPU (with appropriately varying inputs/output sizes) before returning to the CPU.
  //Discount compute shaders
  combineKernels(name, fs=[], ckrnl=function foo() {}) {
    let found = this.kernels.find((o)=> {
      if(o.name === name) {
        return true;
      }
    });
    if(!found) {
      fs.forEach((f,i)=>{
        if(typeof f === 'string') {
          let found2 = this.krnl.find((o)=> {
            if(o.name === name) {
              return true;
            }
          });
          if(found2) fs[i] = found2.kernel;
          else return false;
        } else if (typeof f === 'function') {
          if(this[f.name]) {
            //cool
          } else {
            this.addKernel(f.name, f);
          }
        }
      });
      this.kernels.push({name:name, krnl:this.gpu.combineKernels(...fs,ckrnl)});
      return true;
    } else { 
      console.error('Kernel already exists'); 
      return false;
    }
  }

  callKernel(name="",args=[]) {
    let result;
    let found = this.customFunctions.find((o)=> {
      if(o.name === name) {
        result = o.krnl(...args);
        return true;
      }
    });
    if(!found) {
      console.error('Kernel not found');
      return false;
    } else return result;
  }

  hasKernel(name="") {
    let found = this.customFunctions.find((o)=> {
      if(o.name === name) {
        return true;
      }
    });
    if(!found) {
      return false;
    } else return true;
  }

  addFunctions() { 
    this.addGpuFunctions.forEach(f => this.gpu.addFunction(f));

    this.correlograms =         gpuUtils.makeKrnl(this.gpu, this.krnl.correlogramsKern);
    this.correlogramsPC =       gpuUtils.makeKrnl(this.gpu, this.krnl.correlogramsKern);
    this.dft =                  gpuUtils.makeKrnl(this.gpu, this.krnl.dftKern);
    this.idft =                 gpuUtils.makeKrnl(this.gpu, this.krnl.idftKern);
    this.dft_windowed =         gpuUtils.makeKrnl(this.gpu, this.krnl.dft_windowedKern);
    this.idft_windowed =        gpuUtils.makeKrnl(this.gpu, this.krnl.idft_windowedKern);
    this.fft =                  gpuUtils.makeKrnl(this.gpu, this.krnl.fftKern);
    this.ifft =                 gpuUtils.makeKrnl(this.gpu, this.krnl.ifftKern);
    this.fft_windowed =         gpuUtils.makeKrnl(this.gpu, this.krnl.fft_windowedKern);
    this.ifft_windowed =        gpuUtils.makeKrnl(this.gpu, this.krnl.ifft_windowedKern);
    this.listdft2D =            gpuUtils.makeKrnl(this.gpu, this.krnl.listdft2DKern);
    this.listdft1D =            gpuUtils.makeKrnl(this.gpu, this.krnl.listdft1DKern);
    this.listdft1D_windowed =   gpuUtils.makeKrnl(this.gpu, this.krnl.listdft1D_windowedKern);
    this.listfft1D =            gpuUtils.makeKrnl(this.gpu, this.krnl.listfft1DKern);
    this.listfft1D_windowed =   gpuUtils.makeKrnl(this.gpu, this.krnl.listfft1D_windowedKern);
    this.listidft1D_windowed =  gpuUtils.makeKrnl(this.gpu, this.krnl.listidft1D_windowedKern);
    this.listifft1D_windowed =  gpuUtils.makeKrnl(this.gpu, this.krnl.listifft1D_windowedKern);
    this.bulkArrayMul =         gpuUtils.makeKrnl(this.gpu, this.krnl.bulkArrayMulKern);
    this.multiConv2D =          gpuUtils.makeKrnl(this.gpu, this.krnl.multiImgConv2DKern);

    this.kernels.push(
      {name:"correlograms", krnl:this.correlograms},
      {name:"correlogramsPC", krnl: this.correlogramsPC},
      {name:"dft", krnl:this.dft},
      {name:"idft", krnl:this.idft},
      {name:"dft_windowed", krnl:this.idft_windowed},
      {name:"fft", krnl:this.fft},
      {name:"ifft", krnl:this.ifft},
      {name:"fft_windowed", krnl:this.fft_windowed},
      {name:"ifft_windowed", krnl:this.ifft_windowed},
      {name:"listdft2D", krnl:this.listdft2D},
      {name:"listdft1D", krnl:this.listdft1D},
      {name:"listdft1D_windowed", krnl:this.listdft1D_windowed},
      {name:"listfft1D", krnl:this.listfft1D},
      {name:"listfft1D_windowed", krnl:this.listfft1D_windowed},
      {name:"listidft1D_windowed", krnl:this.listidft1D_windowed},
      {name:"listifft1D_windowed", krnl:this.listifft1D_windowed},
      {name:"bulkArrayMul", krnl:this.bulkArrayMul},
      {name:"multiConv2D", krnl:this.multiConv2D}
      );
    
    //----------------------------------- Easy gpu pipelining
    //------------Combine Kernels-------- gpu.combineKernels(f1,f2,function(a,b,c) { f1(f2(a,b),c); });
    //----------------------------------- TODO: Make this actually work (weird error)

    //Bandpass FFT+iFFT to return a cleaned up waveform
    const signalBandpass = (signal, sampleRate, freqStart, freqEnd, scalar) => { //Returns the signal wave with the bandpass filter applied
      var dft = this.fft_windowed(signal, sampleRate, freqStart, freqEnd, scalar, 0);
      var filtered_signal = this.ifft_windowed(dft, sampleRate, freqStart, freqEnd, scalar); 
      return filtered_signal;
    }

    //this.signalBandpass = this.gpu.combineKernels(this.dft_windowedKern,this.idft_windowedKern, signalBandpass);
    
    const signalBandpassMulti = (signals, sampleRate, freqStart, freqEnd, scalar) => {
      var dfts = this.listdft1D_windowed(signals,sampleRate,freqStart,freqEnd,scalar, new Array(Math.ceil(signals/sampleRate)).fill(0));
      var filtered_signals = this.listifft1D_windowed(dfts,sampleRate,freqStart,freqEnd,scalar);
      return filtered_signals;
    }

    //this.signalBandpassMulti = this.gpu.combineKernels(this.listdft1D_windowed,this.listidft1D_windowed, signalBandpassMulti);

    //TODO: automatic auto/cross correlation and ordering.
    //Input signals like this : [signal1,signal2,autocor1,autocor2,crosscor,...repeat for desired coherence calculations] or any order of that.
    this.gpuCoherence = (signals, sampleRate, freqStart, freqEnd, scalar) => { //Take FFTs of the signals, their autocorrelations, and cross correlation (5 FFTs per coherence), then multiply.
      var xcors = this.correlograms(signals);
      var dfts = this.listfft1D_windowed(xcors, sampleRate, freqStart, freqEnd, scalar, new Array(Math.ceil(signals/sampleRate)).fill(0) );
      var products = this.bulkArrayMul(dfts, sampleRate, 5, 1);
      return products;
    }

    //Need to get this working to be MUCH faster, the above method returns to the CPU each call, the below does not.
    //this.gpuCoherence = this.gpu.combineKernels(this.listdft1D_windowedKern, this.bulkArrayMulKern, this.correlogramsKern, function gpuCoherence(signals,sampleRate,freqStart,freqEnd,scalar) {
    //  var xcors = this.correlograms(signals);
    //  var dfts = this.listdft1D_windowed(xcors, sampleRate, freqStart, freqEnd, scalar, new Array(Math.ceil(signals/sampleRate)).fill(0) );
    //  var products = this.bulkArrayMul(dfts, sampleRate, 5, 1);
    //  return products;
    //});

  }

  gpuXCors(arrays, precompute=false, texOut = false) { //gpu implementation for bulk cross/auto correlations, outputs [[0:0],[0:1],...,[1:1],...[n:n]]
 
    var outputTex;
   
    if(precompute === true) { //Precompute the means and estimators rather than in every single thread
      var means = [];
      var ests = [];
      arrays.forEach((arr,i) => {
        means.push(arr.reduce((prev,curr)=> curr += prev)/arr.length);
        ests.push(Math.sqrt(means[i].reduce((sum,item) => sum += Math.pow(item-mean1,2))));
      });

      var meansbuf = [];
      var estsbuf = [];
      var buffer = [];
      for(var i = 0; i < arrays.length; i++) {
        for(var j = i; j < arrays.length; j++){
          buffer.push(...arrays[i],...arrays[j]);
          meansbuf.push(means[i],means[j]);
          estsbuf.push(ests[i],ests[j]);
        }
      }

      this.correlogramsPC.setOutput([buffer.length]);
      this.correlogramsPC.setLoopMaxIterations(arrays[0].length*2);
      outputTex = this.correlogramsPC(buffer, arrays[0].length, meansbuf, estsbuf)
    }
    else{
      var buffer = [];
      for(var i = 0; i < arrays.length; i++) {
        for(var j = i; j < arrays.length; j++){
          buffer.push(...arrays[i],...arrays[j]);
        }
      }

      this.correlograms.setOutput([buffer.length]);
      this.correlograms.setLoopMaxIterations(arrays[0].length*2);

      outputTex = this.correlograms(buffer, arrays[0].length);
    }

    if(texOut === true) { return outputTex; }
    var outputbuf = outputTex.toArray();
    outputTex.delete();
    var outputarrs = [];

    for(var i = 0; i < arrays.length; i++){
      outputarrs.push(outputbuf.splice(0, arrays[0].length));
    }

    return outputarrs;

  } 

  //Input array buffer and the number of seconds of data
  gpuDFT(signalBuffer, nSeconds, scalar=1, texOut = false){

    var nSamples = signalBuffer.length;
    var sampleRate = nSamples/nSeconds;

    this.dft.setOutput([signalBuffer.length]);
    this.dft.setLoopMaxIterations(nSamples);

    var outputTex = this.dft(signalBuffer, nSamples, scalar, DCoffset);
    var output = null;
    if(texOut === false){
      var freqDist = this.makeFrequencyDistribution(nSamples, sampleRate);
      var signalBufferProcessed = outputTex.toArray();
      //console.log(signalBufferProcessed);
      outputTex.delete();
      return [freqDist,this.orderMagnitudes(signalBufferProcessed)]; //Returns x (frequencies) and y axis (magnitudes)
    }
    else {
      var tex = outputTex; 
      outputTex.delete(); 
      return tex;
    }
  }

  //Input array of array buffers of the same length and the number of seconds recorded
  MultiChannelDFT(signalBuffer, nSeconds, scalar=1, texOut=false) {
    
    var signalBufferProcessed = [];
      
    signalBuffer.forEach((row) => {
      signalBufferProcessed.push(...row);
    });
    //console.log(signalBufferProcessed);
  
    var nSamplesPerChannel = signalBuffer[0].length;
    var sampleRate = nSamplesPerChannel/nSeconds

    this.listdft1D.setOutput([signalBufferProcessed.length]); //Set output to length of list of signals
    this.listdft1D.setLoopMaxIterations(nSamplesPerChannel); //Set loop size to the length of one signal (assuming all are uniform length)
        
    var outputTex = this.listdft1D(signalBufferProcessed,nSamplesPerChannel, scalar);
    if(texOut === false){
      var orderedMagsList = [];

      var freqDist = this.makeFrequencyDistribution(nSamplesPerChannel, sampleRate);
      signalBufferProcessed = outputTex.toArray();
      //console.log(signalBufferProcessed);

      for(var i = 0; i < signalBufferProcessed.length; i+=nSamplesPerChannel){
        orderedMagsList.push(this.orderMagnitudes([...signalBufferProcessed.slice(i,i+nSamplesPerChannel)]));
      }
      //Now slice up the big buffer into individual arrays for each signal

      outputTex.delete();
      return [freqDist,orderedMagsList]; //Returns x (frequencies) and y axis (magnitudes)
    }
    else {
      var tex = outputTex; 
      outputTex.delete(); 
      return tex;
    }
  }

      
  //Input buffer of signals [[channel 0],[channel 1],...,[channel n]] with the same number of samples for each signal. Returns arrays of the positive DFT results in the given window.
  MultiChannelDFT_Bandpass(signalBuffer=[],nSeconds,freqStart,freqEnd, scalar=1, texOut = false) {

    var signalBufferProcessed = [];
      
    signalBuffer.forEach((row) => {
      signalBufferProcessed.push(...row);
    });
    //console.log(signalBufferProcessed);

    var freqEnd_nyquist = freqEnd*2;
    var nSamplesPerChannel = signalBuffer[0].length;
    var sampleRate = nSamplesPerChannel/nSeconds;
    
    this.listdft1D_windowed.setOutput([signalBufferProcessed.length]); //Set output to length of list of signals
    this.listdft1D_windowed.setLoopMaxIterations(nSamplesPerChannel); //Set loop size to the length of one signal (assuming all are uniform length)
        
    var outputTex = this.listdft1D_windowed(signalBufferProcessed,sampleRate,freqStart,freqEnd_nyquist, scalar);
    if(texOut === true) { return outputTex; }
    
    signalBufferProcessed = outputTex.toArray();
    outputTex.delete();

    //console.log(signalBufferProcessed)
    //TODO: Optimize for SPEEEEEEED.. or just pass it str8 to a shader
    var freqDist = this.bandPassWindow(freqStart,freqEnd,sampleRate);
    return [freqDist, this.orderBPMagnitudes(signalBufferProcessed,nSeconds,sampleRate,nSamplesPerChannel)]; //Returns x (frequencies) and y axis (magnitudes)
  
  }

  
  //Input array buffer and the number of seconds of data
  gpuFFT(signalBuffer, nSeconds, scalar=1, texOut = false){

    var nSamples = signalBuffer.length;
    var sampleRate = nSamples/nSeconds;

    this.fft.setOutput([signalBuffer.length]);
    this.fft.setLoopMaxIterations(nSamples);

    var outputTex = this.fft(signalBuffer, nSamples, scalar, DCoffset);
    var output = null;
    if(texOut === false){
      var freqDist = this.makeFrequencyDistribution(nSamples, sampleRate);
      var signalBufferProcessed = outputTex.toArray();
      //console.log(signalBufferProcessed);
      outputTex.delete();
      return [freqDist,this.orderMagnitudes(signalBufferProcessed)]; //Returns x (frequencies) and y axis (magnitudes)
    }
    else {
      var tex = outputTex; 
      outputTex.delete(); 
      return tex;
    }
  }

  //Input array of array buffers of the same length and the number of seconds recorded
  MultiChannelFFT(signalBuffer, nSeconds, scalar=1, texOut=false) {
    
    var signalBufferProcessed = [];
      
    signalBuffer.forEach((row) => {
      signalBufferProcessed.push(...row);
    });
    //console.log(signalBufferProcessed);
  
    var nSamplesPerChannel = signalBuffer[0].length;
    var sampleRate = nSamplesPerChannel/nSeconds

    this.listfft1D.setOutput([signalBufferProcessed.length]); //Set output to length of list of signals
    this.listfft1D.setLoopMaxIterations(nSamplesPerChannel); //Set loop size to the length of one signal (assuming all are uniform length)
        
    var outputTex = this.listfft1D(signalBufferProcessed,nSamplesPerChannel, scalar);
    if(texOut === false){
      var orderedMagsList = [];

      var freqDist = this.makeFrequencyDistribution(nSamplesPerChannel, sampleRate);
      signalBufferProcessed = outputTex.toArray();
      //console.log(signalBufferProcessed);

      for(var i = 0; i < signalBufferProcessed.length; i+=nSamplesPerChannel){
        orderedMagsList.push(this.orderMagnitudes([...signalBufferProcessed.slice(i,i+nSamplesPerChannel)]));
      }
      //Now slice up the big buffer into individual arrays for each signal

      outputTex.delete();
      return [freqDist,orderedMagsList]; //Returns x (frequencies) and y axis (magnitudes)
    }
    else {
      var tex = outputTex; 
      outputTex.delete(); 
      return tex;
    }
  }

      
  //Input buffer of signals [[channel 0],[channel 1],...,[channel n]] with the same number of samples for each signal. Returns arrays of the positive DFT results in the given window.
  MultiChannelFFT_Bandpass(signalBuffer=[],nSeconds,freqStart,freqEnd, scalar=1, texOut = false) {

    var signalBufferProcessed = [];
      
    signalBuffer.forEach((row) => {
      signalBufferProcessed.push(...row);
    });
    //console.log(signalBufferProcessed);

    var freqEnd_nyquist = freqEnd*2;
    var nSamplesPerChannel = signalBuffer[0].length;
    var sampleRate = nSamplesPerChannel/nSeconds;
    
    this.listfft1D_windowed.setOutput([signalBufferProcessed.length]); //Set output to length of list of signals
    this.listfft1D_windowed.setLoopMaxIterations(nSamplesPerChannel); //Set loop size to the length of one signal (assuming all are uniform length)
        
    var outputTex = this.listfft1D_windowed(signalBufferProcessed,sampleRate,freqStart,freqEnd_nyquist, scalar);
    if(texOut === true) { return outputTex; }
    
    signalBufferProcessed = outputTex.toArray();
    outputTex.delete();

    //console.log(signalBufferProcessed)
    //TODO: Optimize for SPEEEEEEED.. or just pass it str8 to a shader
    var freqDist = this.bandPassWindow(freqStart,freqEnd,sampleRate);
    return [freqDist, this.orderBPMagnitudes(signalBufferProcessed,nSeconds,sampleRate,nSamplesPerChannel)]; //Returns x (frequencies) and y axis (magnitudes)
  
  }

  orderMagnitudes(unorderedMags){
    return [...unorderedMags.slice(Math.ceil(unorderedMags.length*.5),unorderedMags.length),...unorderedMags.slice(0,Math.ceil(unorderedMags.length*.5))];  
  }

  makeFrequencyDistribution(FFTlength, sampleRate) {
    var N = FFTlength; // FFT size
    var df = sampleRate/N; // frequency resolution
    
    var freqDist = [];
    for(var i=(-N/2); i<(N/2); i++) {
      var freq = i*df;
      freqDist.push(freq);
    }
    return freqDist;
  }

  //Order and sum positive magnitudes from bandpass DFT
  orderBPMagnitudes(signalBufferProcessed,nSeconds,sampleRate,nSamplesPerChannel) {
    var magList = [];

      for(var i = 0; i < signalBufferProcessed.length; i+=nSamplesPerChannel){
        magList.push([...signalBufferProcessed.slice(i,Math.ceil(nSamplesPerChannel*.5+i))]);
      }


    var summedMags = [];
    var _sampleRate = 1/sampleRate;
    if(nSeconds > 1) { //Need to sum results when sample time > 1 sec
      magList.forEach((row, k) => {
        summedMags.push([]);
        var _max = 1/Math.max(...row); //uhh
        for(var i = 0; i < row.length; i++ ){
          if(i == 0){
              summedMags[k]=row.slice(i,Math.floor(sampleRate));
              i = Math.floor(sampleRate);
          }
          else {
              var j = i-Math.floor(Math.floor(i*_sampleRate)*sampleRate)-1; //console.log(j);
              summedMags[k][j] = summedMags[k][j] * row[i-1]*_max; 
          }
        }
        summedMags[k] = [...summedMags[k].slice(0,Math.ceil(summedMags[k].length*0.5))]

      });
      //console.log(summedMags);
      return summedMags;  
    }
    
    else {return magList;}
  }

  //Returns the x axis (frequencies) for the bandpass filter amplitudes. The window gets stretched or squeezed between the chosen frequencies based on the sample rate in my implementation.
  bandPassWindow(freqStart,freqEnd,nSteps,posOnly=true) {
 
    var freqEnd_nyquist = freqEnd*2;
    let increment = (freqEnd_nyquist - freqStart)/nSteps;

    var fftwindow = [];
    if(posOnly === true){
      for (var i = 0; i < Math.ceil(0.5*nSteps); i+=increment){
          fftwindow.push(freqStart + (freqEnd_nyquist-freqStart)*i/(nSteps));
      }
    }
    else{
      for (var i = -Math.ceil(0.5*nSteps); i < Math.ceil(0.5*nSteps); i+=increment){
        fftwindow.push(freqStart + (freqEnd_nyquist-freqStart)*i/(nSteps));
      }
    }
    return fftwindow;
  }


  createKernelsandFunctions() {
    //By Joshua Brewster, Dovydas Stirpeika (AGPLv3 License)
    //------------------------------------
    //---------GPU Utility Funcs---------- (gpu.addFunction())
    //------------------------------------

    function add(a, b) { return a + b; }
    function sub(a, b) { return a - b; }
    function mul(a, b) { return a * b; }
    function div(a, b) { return a / b; }

    function cadd(a_real, a_imag, b_real, b_imag) {
        return [a_real + b_real, a_imag + b_imag];
    }

    function csub(a_real, a_imag, b_real, b_imag) {
        return [a_real - b_real, a_imag - b_imag];
    }

    function cmul(a_real, a_imag, b_real, b_imag) {
        return [a_real*b_real - a_imag*b_imag, a_real*b_imag + a_imag*b_real];
    }

    function cexp(a_real, a_imag) {
        const er = Math.exp(a_real);
        return [er * Math.cos(a_imag), er * Math.sin(a_imag)];
    }

    function mag(a, b) { // Returns magnitude
        return Math.sqrt(a*a + b*b);
    }

    function conj(imag) { //Complex conjugate of x + iy is x - iy
        return 0 - imag;
    }

    function lof(n) { //Lowest odd factor
        const sqrt_n = Math.sqrt(n);
        var factor = 3;

        while(factor <= sqrt_n) {
            if (n % factor === 0) return factor;
            factor += 2;
        }
    }

    function mean(arr, len) {
        var mean = 0;
        for (var i = 0; i < len; i++) {
            mean += arr[i];
        }
        return mean/len;
    }

    function est(arr, mean, len) {
        var est = 0;
        for (var i=0; i<len;i++){
            est += (arr[i]-mean)*(arr[i]-mean);
        }
        return Math.sqrt(est);
    }

    function mse(arr, mean, len) { //mean squared error
        var est = 0;
        var vari = 0;
        for (var i = 0; i < len; i++) {
            vari = arr[i]-mean;
            est += vari*vari;
        }
        return est/len;
    }

    function rms(arr, mean, len) { //root mean square error
        var est = 0;
        var vari = 0;
        for (var i = 0; i < len; i++) {
            vari = arr[i]-mean;
            est += vari*vari;
        }
        return Math.sqrt(est/len);
    }

    function xcor(arr1, arr1mean, arr1Est, arr2, arr2mean, arr2Est, len, delay) { //performs a single pass of a cross correlation equation, see correlogramsKern
        var correlation = 0;
        for (var i = 0; i < len; i++)  {
            var j = i+delay;
            var k = 0;
            if(j < len) { k = arr2[j]; }
            correlation += (arr1[i]-arr1mean)*(k-arr2mean);
        }
        return correlation/(arr1Est*arr2Est);
    }

    function softmax(array, len, i) { // Returns a single array value for a 1d softmax function.
        var esum = 0;
        for(var j = 0; j < len; j++){
            esum+= Math.exp(array[j]);
        }
        return Math.exp(array[i])/esum;
    }

    function DFT(signal, len, freq){ //Extract a particular frequency
        var real = 0;
        var imag = 0;
        var _len = 1/len;
        var shared = 6.28318530718*freq*_len;

        for(var i = 0; i<len; i++){
          var sharedi = shared*i; //this.thread.x is the target frequency
          real = real+signal[i]*Math.cos(sharedi);
          imag = imag-signal[i]*Math.sin(sharedi);
        }
        //var mag = Math.sqrt(real[k]*real[k]+imag[k]*imag[k]);
        return [real*_len,imag*_len]; //mag(real,imag)
    }

    function DFTlist(signals, len, freq, n) { //Extract a particular frequency
        var real = 0;
        var imag = 0;
        var _len = 1/len;
        var shared = 6.28318530718*freq*_len;
        for(var i = 0; i<len; i++){
          var sharedi = shared*i; //this.thread.x is the target frequency
          real = real+signals[i+(len-1)*n]*Math.cos(sharedi);
          imag = imag-signals[i+(len-1)*n]*Math.sin(sharedi);  
        }
        //var mag = Math.sqrt(real[k]*real[k]+imag[k]*imag[k]);
        return [real*_len,imag*_len]; //mag(real,imag)
    }

    //FFT, simply implements a nyquist frequency based index skip for frequencies <= sampleRate*.25.
    //Other optimization: could do 4 loops per thread and return a vec4, this is what you see in some other ultrafast libs
    function FFT(signal, len, freq, sr){ //Extract a particular frequency
        var real = 0;
        var imag = 0;
        var _len = 1/len;
        var shared = 6.28318530718*freq*_len;

        var skip = 1;
        var N = 0;
        var factor = sr*.25;
        if(freq <= factor){
            while(freq <= factor){
                factor=factor*.5;
                skip+=1;
            }
        }

        for(var i = 0; i<len; i+=skip){
          var j = i;
          if(j > len) { j = len; }
          var sharedi = shared*j; //this.thread.x is the target frequency
          real = real+signal[j]*Math.cos(sharedi);
          imag = imag-signal[j]*Math.sin(sharedi);
          N += 1;
        }
        //var mag = Math.sqrt(real[k]*real[k]+imag[k]*imag[k]);
        return [real/N,imag/N]; //mag(real,imag)
    }

    function FFTlist(signals, len, freq, n, sr) { //Extract a particular frequency from a 1D list of equal sized signal arrays. Uses less samples for lower frequencies closer to nyquist threshold
        var real = 0;
        var imag = 0;
        var _len = 1/len;
        var shared = 6.28318530718*freq*_len;

        var skip = 1;
        var N = 0;
        var factor = sr*.25;
        if(freq <= factor){
            while(freq <= factor){
                factor=factor*.5;
                skip+=1;
            }
        }

        for(var i = 0; i<len; i+=skip){
            var j = i;
          if(j > len) { j = len; }
          var sharedi = shared*j; //this.thread.x is the target frequency
          real = real+signals[j+(len-1)*n]*Math.cos(sharedi);
          imag = imag-signals[j+(len-1)*n]*Math.sin(sharedi);
          N += 1;  
        }
        //var mag = Math.sqrt(real[k]*real[k]+imag[k]*imag[k]);
        return [real/N,imag/N]; //mag(real,imag)
    }

    //Conjugated real and imaginary parts for iDFT (need to test still)
    function iDFT(fft, len, freq){ //inverse DFT to return time domain
        var real = 0;
        var imag = 0;
        var _len = 1/len;
        var shared = 6.28318530718*freq*_len;

        for(var i = 0; i<len; i++){
          var sharedi = shared*i; //this.thread.x is the target frequency
          real = real+fft[i]*Math.cos(sharedi);
          imag = fft[i]*Math.sin(sharedi)-imag;  
        }
        //var mag = Math.sqrt(real[k]*real[k]+imag[k]*imag[k]);
        return [real*_len,imag*_len]; //mag(real,imag)
    }

    function iDFTlist(fft,len,freq,n){ //inverse DFT to return time domain 
        var real = 0;
        var imag = 0;
        var _len = 1/len;
        var shared = 6.28318530718*freq*_len
        for (var i = 0; i<len; i++) {
          var sharedi = shared*i; //this.thread.x is the target frequency
          real = real+fft[i+(len-1)*n]*Math.cos(sharedi);
          imag = fft[i+(len-1)*n]*Math.sin(sharedi)-imag;  
        }
        //var mag = Math.sqrt(real[k]*real[k]+imag[k]*imag[k]);
        return [real*_len,imag*_len]; //mag(real,imag)
    }

    function iFFT(fft, len, freq, sr){ //inverse FFT to return time domain
        var real = 0;
        var imag = 0;
        var _len = 1/len;
        var shared = 6.28318530718*freq*_len;

        var skip = 1;
        var N = 0;
        var factor = sr*.25;
        if(freq <= factor){
            while(freq <= factor){
                factor=factor*.5;
                skip+=1;
            }
        }

        for(var i = 0; i<len; i+=skip){
          var j = i;
          if(j > len) { j = len; }
          var sharedi = shared*j; //this.thread.x is the target frequency
          real = real+fft[j]*Math.cos(sharedi);
          imag = fft[j]*Math.sin(sharedi)-imag;  
          N += 1;
        }
        //var mag = Math.sqrt(real[k]*real[k]+imag[k]*imag[k]);
        return [real/N,imag/N]; //mag(real,imag)
    }

    function iFFTlist(signals, len, freq, n, sr) { //Extract a particular frequency from a 1D list of equal sized signal arrays. Uses less samples for lower frequencies closer to nyquist threshold
        var real = 0;
        var imag = 0;
        var _len = 1/len;
        var shared = 6.28318530718*freq*_len;

        var skip = 1;
        var N = 0;
        var factor = sr*.25;
        if(freq <= factor){
            while(freq <= factor){
                factor=factor*.5;
                skip+=1;
            }
        }

        for(var i = 0; i<len; i+=skip){
            var j = i;
          if(j > len) { j = len; }
          var sharedi = shared*j; //this.thread.x is the target frequency
          real = real+signals[j+(len-1)*n]*Math.cos(sharedi);
          imag = signals[j+(len-1)*n]*Math.sin(sharedi)-imag;
          N += 1;  
        }
        //var mag = Math.sqrt(real[k]*real[k]+imag[k]*imag[k]);
        return [real/N,imag/N]; //mag(real,imag)
    }


    function conv2D(src, width, height, kernel, kernelRadius) {
        const kSize = 2 * kernelRadius + 1;
        let r = 0, g = 0, b = 0;

        let i = -kernelRadius;
        let imgOffset = 0, kernelOffset = 0;
        while (i <= kernelRadius) {
        if (this.thread.x + i < 0 || this.thread.x + i >= width) {
            i++;
            continue;
        }

        let j = -kernelRadius;
        while (j <= kernelRadius) {
            if (this.thread.y + j < 0 || this.thread.y + j >= height) {
            j++;
            continue;
            }

            kernelOffset = (j + kernelRadius) * kSize + i + kernelRadius;
            const weights = kernel[kernelOffset];
            const pixel = src[this.thread.y + i][this.thread.x + j];
            r += pixel.r * weights;
            g += pixel.g * weights;
            b += pixel.b * weights;
            j++;
        }
        i++;
        }
        this.color(r, g, b);
    }




    //------------------------------------
    //---------Kernel functions----------- (gpu.createKernel(func))
    //------------------------------------


    function correlogramsKern(arrays, len) { //Computes cross correlations of each pair of arrays given to the function. so xcor[0,1],xcor[2,3],etc

        var k = Math.floor(this.thread.x/len)*2;
        var delay = this.thread.x - Math.floor(this.thread.x/len)*len;
        var arr1mean = mean(arrays[k],len);
        var arr2mean = mean(arrays[k+1],len);
        var arr1Est = est(arrays[k],arr1mean,len);
        var arr2Est = est(arrays[k+1],arr2mean,len);

        var y_x = xcor(arrays[k],arr1mean,arr1Est,arrays[k+1],arr2mean,arr2Est,len,delay);

        return y_x;
    }

    //Computes cross correlations of each pair of arrays given to the function. so xcor[0,1],xcor[2,3],etc
    //Takes precomputed averages and estimators for each array for efficiency
    function correlogramsPCKern(arrays, len, means, estimators) { 
        var k = Math.floor(this.thread.x/len)*2;
        var delay = this.thread.x - Math.floor(this.thread.x/len)*len;
        var arr1mean = means[k];
        var arr2mean = means[k+1];
        var arr1Est = estimators[k];
        var arr2Est = estimators[k+1];

        var y_x = xcor(arrays[k],arr1mean,arr1Est,arrays[k+1],arr2mean,arr2Est,len,delay);

        return y_x;
    }


    //Return frequency domain based on DFT
    function dftKern(signal, len, scalar) {
        var result = DFT(signal,len, this.thread.x);
        return mag(result[0], result[1])*scalar;
    }

    function idftKern(amplitudes, len, scalar) {
        var result = iDFT(amplitudes, len, this.thread.x);
        return mag(result[0], result[1])*scalar;
    }

    function fftKern(signal, len, scalar, sampleRate) {
        var result = FFT(signal,len, this.thread.x, sampleRate);
        return mag(result[0], result[1])*scalar;
    }

    function ifftKern(amplitudes, len, scalar, sampleRate) {
        var result = iFFT(amplitudes, len, this.thread.x, sampleRate);
        return mag(result[0], result[1])*scalar;
    }

    // Takes a 2D array input [signal1[],signal2[],signal3[]]; does not work atm
    function listdft2DKern(signals, scalar) {
        var len = this.output.x;
        var result = DFT(signals[this.thread.y],len,this.thread.x);
        //var mag = Math.sqrt(real[k]*real[k]+imag[k]*imag[k]);
        return mag(result[0],result[1])*scalar; //mag(real,imag)
    }

    // [[signals1][signals2]]

    // More like a vertex buffer list to chunk through lists of signals
    function listdft1DKern(signals, len, scalar) {
        var result = [0, 0];
        if (this.thread.x <= len) {
          result = DFT(signals,len,this.thread.x);
        } else {
          var n = Math.floor(this.thread.x/len);
          result = DFTlist(signals,len,this.thread.x-n*len,n);
        }

        return mag(result[0],result[1])*scalar;
    } // [signals1,signasl2]

    // More like a vertex buffer list to chunk through lists of signals
    function listfft1DKern(signals, len, scalar, sps) {
        var result = [0, 0];
        if (this.thread.x <= len) {
          result = FFT(signals,len,this.thread.x,sps);
        } else {
          var n = Math.floor(this.thread.x/len);
          result = FFTlist(signals,len,this.thread.x-n*len,n,sps);
        }

        return mag(result[0],result[1])*scalar;
    } // [signals1,signasl2]

    function dft_windowedKern(signal, sampleRate, freqStart, freqEnd, scalar) {
        var result = [0,0];
        var freq = ( (this.thread.x/sampleRate) * ( freqEnd - freqStart ) ) + freqStart;
        result = DFT(signal,sampleRate,freq);

        return mag(result[0],result[1])*scalar;
    } 


    //windowed functions should use a 1 second window for these hacky DFTs/FFTs to work right.

    function fft_windowedKern(signal, sampleRate, freqStart, freqEnd, scalar) {
        var result = [0,0];
        var freq = ( (this.thread.x/sampleRate) * ( freqEnd - freqStart ) ) + freqStart;
        result = FFT(signal,sampleRate,freq);

        return mag(result[0],result[1])*scalar;
    }

    function idft_windowedKern(amplitudes, sampleRate, freqStart, freqEnd, scalar) {
        var result = [0,0];
        var freq = ( (this.thread.x/sampleRate) * ( freqEnd - freqStart ) ) + freqStart;
        result = iDFT(amplitudes,sampleRate,freq);

        return mag(result[0],result[1])*scalar;
    }

    function ifft_windowedKern(amplitudes, sampleRate, freqStart, freqEnd, scalar) {
        var result = [0,0];
        var freq = ( (this.thread.x/sampleRate) * ( freqEnd - freqStart ) ) + freqStart;
        result = iFFT(amplitudes,sampleRate,freq);

        return mag(result[0],result[1])*scalar;
    }

    function listdft1D_windowedKern(signals, sampleRate, freqStart, freqEnd, scalar) { //Will make a higher resolution DFT for a smaller frequency window.
        var result = [0, 0];
        if (this.thread.x < sampleRate) {
          var freq = ( (this.thread.x/sampleRate) * ( freqEnd - freqStart ) ) + freqStart;
          result = DFT(signals,sampleRate,freq);
        } else {
          var n = Math.floor(this.thread.x/sampleRate);
          var freq = ( ( ( this.thread.x - n * sampleRate) / sampleRate ) * ( freqEnd - freqStart ) ) + freqStart;
          result = DFTlist(signals,sampleRate,freq-n*sampleRate,n);
        }
        //var mags = mag(result[0],result[1]);

        return mag(result[0],result[1])*scalar; 
    }

    function listfft1D_windowedKern(signals, sampleRate, freqStart, freqEnd, scalar) { //Will make a higher resolution DFT for a smaller frequency window.
        var result = [0, 0];
        if (this.thread.x < sampleRate) {
          var freq = ( (this.thread.x/sampleRate) * ( freqEnd - freqStart ) ) + freqStart;
          result = FFT(signals,sampleRate,freq,sampleRate);
        } else {
          var n = Math.floor(this.thread.x/sampleRate);
          var freq = ( ( ( this.thread.x - n * sampleRate) / sampleRate ) * ( freqEnd - freqStart ) ) + freqStart;
          result = FFTlist(signals,sampleRate,freq-n*sampleRate,n,sampleRate);
        }
        //var mags = mag(result[0],result[1]);

        return mag(result[0],result[1])*scalar; 
    }

    function listidft1D_windowedKern(ffts, sampleRate, freqStart, freqEnd, scalar) { //Will make a higher resolution DFT for a smaller frequency window.
        var result = [0, 0];
        if (this.thread.x < sampleRate) {
          var freq = ( (this.thread.x/sampleRate) * ( freqEnd - freqStart ) ) + freqStart;
          result = iDFT(ffts,sampleRate,freq);
        } else {
          var n = Math.floor(this.thread.x/sampleRate);
          var freq = ( ( ( this.thread.x - n * sampleRate) / sampleRate ) * ( freqEnd - freqStart ) ) + freqStart;
          result = iDFTlist(ffts,sampleRate,freq-n*sampleRate,n);
        }
        //var mags = mag(result[0],result[1]);

        return mag(result[0]*2,result[1]*2)*scalar; //Multiply result by 2 since we are only getting the positive results and want to estimate the actual amplitudes (positive = half power, reflected in the negative axis)
    }

    function listifft1D_windowedKern(ffts, sampleRate, freqStart, freqEnd, scalar) { //Will make a higher resolution DFT for a smaller frequency window.
        var result = [0, 0];
        if (this.thread.x < sampleRate) {
          var freq = ( (this.thread.x/sampleRate) * ( freqEnd - freqStart ) ) + freqStart;
          result = iFFT(ffts,sampleRate,freq);
        } else {
          var n = Math.floor(this.thread.x/sampleRate);
          var freq = ( ( ( this.thread.x - n * sampleRate) / sampleRate ) * ( freqEnd - freqStart ) ) + freqStart;
          result = iFFTlist(ffts,sampleRate,freq-n*sampleRate,n);
        }
        //var mags = mag(result[0],result[1]);

        return mag(result[0]*2,result[1]*2)*scalar; //Multiply result by 2 since we are only getting the positive results and want to estimate the actual amplitudes (positive = half power, reflected in the negative axis)
    }

    //e.g. arrays = [[arr1],[arr2],[arr3],[arr4],[arr5],[arr6]], len = 10, n = 2, scalar=1... return results of [arr1*arr2], [arr3*arr4], [arr5*arr6] as one long array that needs to be split
    function bulkArrayMulKern(arrays, len, n, scalar) {
        var i = n*Math.floor(this.thread.x/len); //Jump forward in array buffer
        var product = arrays[i][this.thread.x];
        for (var j = 0; j < n; j++) {
          product *= arrays[j][this.thread.x];
        }
        return product*scalar;
    }

    function multiImgConv2DKern(img, width, height, kernels, kernelLengths, nKernels, graphical) {
        for(var i = 0; i < nKernels; i++){
            var kernelLength = kernelLengths[i];            
            var kernelRadius = (Math.sqrt(kernelLength) - 1) / 2;
            conv2D(img, width, height, kernels[i], kernelRadius);
        }
        if(graphical === 0){ return [this.color.r,this.color.g,this.color.b]; }
    }

    function transpose2DKern(mat2) { //Transpose a 2D matrix, meant to be combined
        return mat2[this.thread.y][this.thread.x];
    }


    //function deferredPass(vPos, vNorm, vAlbedo, vDepth, vSpec) {  } //project geometry, light geometry

    /*
    Scene drawing:
    (With depth testing enabled)
    1. Project object local spaces to world space based on geometry and world coordinates
    1.5 do some occlusion culling for which texture data to send to the gpu, requires last camera matrix
    2. Now send to lighting pass, with coloring properties defined by different texture maps. 
    3. Project result to camera space based on camera position and aperture.
    4. Draw result
    */


    //Note on pixel operations in gpujs: create kernel with setGraphical(true), render() to offscreencanvas, get render.getPixels() on each frame for pixel values which can be stored math operations


    //Exports

    this.krnl = {
        correlogramsKern, correlogramsPCKern, dftKern, idftKern, fftKern, ifftKern,
        dft_windowedKern, idft_windowedKern, fft_windowedKern, ifft_windowedKern, 
        listdft2DKern, listdft1DKern, listfft1DKern, listfft1D_windowedKern, listdft1D_windowedKern, listidft1D_windowedKern, listifft1D_windowedKern,
        bulkArrayMulKern, fftKern, ifftKern, multiImgConv2DKern, transpose2DKern
    }

    this.addGpuFunctions = [
        add, sub, mul, div, cadd, csub,
        cmul, cexp, mag, conj, lof, mean, est,
        mse, rms, xcor, softmax, DFT, DFTlist,
        iDFT, iDFTlist, FFT, iFFT, iFFTlist, 
        conv2D
    ];
  }




}










var mandebrotFrag = 
`
uniform sampler1D tex;
uniform vec2 center;
uniform float scale;
uniform int iter;

void main() {
    vec2 z, c;

    c.x = 1.3333 * (gl_TexCoord[0].x - 0.5) * scale - center.x;
    c.y = (gl_TexCoord[0].y - 0.5) * scale - center.y;

    int i;
    z = c;
    for(i=0; i<iter; i++) {
        float x = (z.x * z.x - z.y * z.y) + c.x;
        float y = (z.y * z.x + z.x * z.y) + c.y;

        if((x * x + y * y) > 4.0) break;
        z.x = x;
        z.y = y;
    }

    gl_FragColor = texture1D(tex, (i == iter ? 0.0 : float(i)) / 100.0);
}
`;

var juliaSetFrag =
`
uniform sampler1D tex;
uniform vec2 c;
uniform int iter;

void main() {
    vec2 z;
    z.x = 3.0 * (gl_TexCoord[0].x - 0.5);
    z.y = 2.0 * (gl_TexCoord[0].y - 0.5);

    int i;
    for(i=0; i<iter; i++) {
        float x = (z.x * z.x - z.y * z.y) + c.x;
        float y = (z.y * z.x + z.x * z.y) + c.y;

        if((x * x + y * y) > 4.0) break;
        z.x = x;
        z.y = y;
    }

    gl_FragColor = texture1D(tex, (i == iter ? 0.0 : float(i)) / 100.0);
}
`;
