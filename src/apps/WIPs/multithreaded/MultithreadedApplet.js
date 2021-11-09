import {DOMFragment} from '../../../utils/DOMFragment'
import { WorkerManager } from '../../../utils/workers/WorkerManager.js';
import { ThreadedCanvas } from '../../../utils/workers/ThreadedCanvas.js'
import {DynamicParticles} from '../../../utils/graphics/DynamicParticles.js'
import { initElementProxy } from '../../../utils/workers/ProxyElement.js';

//WIP WIP WIP WIP WIP WIP WIP
export class MultithreadedApplet {

    constructor(
        parent=document.body,
        bci=new brainastplay.Session(),
        settings=[]
    ) {
    
        //-------Keep these------- 
        this.session = bci; //Reference to the Session to access data and subscribe
        this.parentNode = parent;
        this.settings = settings;
        this.AppletHTML = null;
        //------------------------

        this.props = { //Changes to this can be used to auto-update the HTML and track important UI values 
            id: `${'applet'}${Math.floor(Math.random()*1000000)}`, //Keep random ID
            //Add whatever else
        };

        //etc..
        this.loop = null;
        this.looping = false;
   
        this.canvas = null;
        this.ctx = null;
        this.angle = 0;
        this.angleChange = 0.001;
        this.bgColor = 'black';
        this.cColor = 'red';

        this.worker1Id;
        this.worker1Waiting = false;
        this.worker2Id;
        this.worker2Waiting = false;
        this.canvasWorkerId;
        this.pushedUpdateToThreads = false;
        this.origin;

        this.thread1lastoutput = 1;
        this.increment = 0;
        this.res = 0;
        this.score = 0;
    }

    //---------------------------------
    //---Required template functions---
    //---------------------------------

    //Initalize the app with the DOMFragment component for HTML rendering/logic to be used by the UI manager. Customize the app however otherwise.
    init() {

        //HTML render function, can also just be a plain template string, add the random ID to named divs so they don't cause conflicts with other UI elements
        let HTMLtemplate = (props=this.props) => { 
            return `
            <div id=${props.id}>
                <div style='position:absolute;'>
                    <button id='${props.id}input'>Increment</button>
                    <div id='${props.id}res' style='display:none;'>${this.res}</div>
                    <div id='${props.id}score' style='display:none;'>${this.score}</div>
                    <button id='`+props.id+`showhide' style='opacity:0.2; z-index:2;'>Show UI</button><br>
                    <table id='`+props.id+`table' style='z-index:99; display:none;'>
                        <tr><td>
                        Group: 
                        <select id='${props.id}select'>
                            <option value='none'>All</option> 
                            <option value=0>0</option>   
                            <option value=1>1</option>   
                            <option value=2>2</option>             
                        </select></td></tr>
                        <tr><td>Cohesion:</td><td><input type='range' id='`+props.id+`cohesion' min="0" max="0.1" value="0.003" step="0.0001"></td><td><button id='`+props.id+`cohesionreset'>Reset</button></td></tr>
                        <tr><td>Separation:</td><td><input type='range' id='`+props.id+`separation' min="0" max="1" value="0.0001" step="0.0001"></td><td><button id='`+props.id+`separationreset'>Reset</button></td></tr>
                        <tr><td>Alignment:</td><td><input type='range' id='`+props.id+`align' min="0" max="1" value="0.006" step="0.001"></td><td><button id='`+props.id+`alignreset'>Reset</button></td></tr>
                        <tr><td>Swirl:</td><td><input type='range' id='`+props.id+`swirl' min="0" max="0.01" value="0.002" step="0.0001" ></td><td><button id='`+props.id+`swirlreset'>Reset</button></td></tr>
                        <tr><td>Anchor:</td><td><input type='range' id='`+props.id+`anchor' min="0" max="0.05" value="0.003" step="0.001" ></td><td><button id='`+props.id+`anchorreset'>Reset</button></td></tr>
                        <tr><td>Max Speed:</td><td><input type='range' id='`+props.id+`speed' min="0" max="20" value="2" step="0.1" ></td><td><button id='`+props.id+`speedreset'>Reset</button></td></tr>
                        <tr><td>Gravity:</td><td><input type='range' id='`+props.id+`gravity' min="0" max="10" value="0" step="0.1"></td><td><button id='`+props.id+`gravityreset'>Reset</button></td></tr>
                    </table>   
                </div>
                <canvas id='${props.id}canvas' style='z-index:1;width:100%;height:100%;'></canvas>
                         
            </div>
            `;
        }

        //HTML UI logic setup. e.g. buttons, animations, xhr, etc.
        let setupHTML = (props=this.props) => {
            this.canvas = document.getElementById(props.id+"canvas");
            //this.ctx = this.canvas.getContext('2d');

            let showhide = document.getElementById(props.id+'showhide');
            let table = document.getElementById(props.id+'table');
            showhide.onclick = () => {
                if(this.hidden === false) {
                    table.style.display = 'none';
                    showhide.innerHTML = "Show UI";
                    this.hidden = true;
                }
                else {
                    table.style.display = '';
                    showhide.innerHTML = "Hide UI";
                    this.hidden = false;
                }
            }

            showhide.onmouseover = () => {
                showhide.style.opacity = 1.0;
            }
            showhide.onmouseleave = () => {
                showhide.style.opacity = 0.2;
            }

            this.selected = undefined;

            document.getElementById(props.id+'select').onchange = (ev) => {
                if(ev.target.value === 'none') this.selected = undefined;
                else this.selected = ev.target.value
            }

            document.getElementById(props.id+'cohesion').onchange = (ev) => {
                let select = document.getElementById(props.id+'select');
                let value = select.options[select.selectedIndex].value;
                if(value === 'none') value = undefined;
                window.workers.runWorkerFunction(
                    'setGroupProperties',
                    [{cohesion:ev.target.value},'boid',undefined,this.selected],
                    this.origin,
                    this.worker1Id
                );
            }
            document.getElementById(props.id+'cohesionreset').onclick = () => {
                document.getElementById(props.id+'cohesion').value = 0.003;
                window.workers.runWorkerFunction(
                    'setGroupProperties',
                    [{cohesion:0.003},'boid',undefined,this.selected],
                    this.origin,
                    this.worker1Id
                );
            }
            document.getElementById(props.id+'separation').onchange = (ev) => {
                window.workers.runWorkerFunction(
                    'setGroupProperties',
                    [{separation:ev.target.value},'boid',undefined,this.selected],
                    this.origin,
                    this.worker1Id
                );
            }
            document.getElementById(props.id+'separationreset').onclick = () => {
                document.getElementById(props.id+'separation').value = 0.0001;
                window.workers.runWorkerFunction(
                    'setGroupProperties',
                    [{separation:0.0001},'boid',undefined,this.selected],
                    this.origin,
                    this.worker1Id
                );
            }
            document.getElementById(props.id+'align').onchange = (ev) => {
                window.workers.runWorkerFunction(
                    'setGroupProperties',
                    [{alignment:ev.target.value},'boid',undefined,this.selected],
                    this.origin,
                    this.worker1Id
                );
            }
            document.getElementById(props.id+'alignreset').onclick = () => {
                document.getElementById(props.id+'align').value = 0.006;
                window.workers.runWorkerFunction(
                    'setGroupProperties',
                    [{alignment:0.006},'boid',undefined,this.selected],
                    this.origin,
                    this.worker1Id
                );
            }
            document.getElementById(props.id+'swirl').onchange = (ev) => {
                window.workers.runWorkerFunction(
                    'setGroupProperties',
                    [{mul:ev.target.value},'boid','swirl',this.selected],
                    this.origin,
                    this.worker1Id
                );
            }
            document.getElementById(props.id+'swirlreset').onclick = () => {
                document.getElementById(props.id+'swirl').value = 0.002;
                window.workers.runWorkerFunction(
                    'setGroupProperties',
                    [{mul:0.002},'boid','swirl',this.selected],
                    this.origin,
                    this.worker1Id
                );
            }
            document.getElementById(props.id+'anchor').onchange = (ev) => {
                window.workers.runWorkerFunction(
                    'setGroupProperties',
                    [{mul:ev.target.value},'boid','attractor',this.selected],
                    this.origin,
                    this.worker1Id
                );
            }
            document.getElementById(props.id+'anchorreset').onclick = () => {
                document.getElementById(props.id+'anchor').value = 0.003;
                window.workers.runWorkerFunction(
                    'setGroupProperties',
                    [{mul:0.003},'boid','attractor',this.selected],
                    this.origin,
                    this.worker1Id
                )
            }
            document.getElementById(props.id+'speed').onchange = (ev) => {
                window.workers.runWorkerFunction(
                    'setGroupProperties',
                    [{maxSpeed:ev.target.value},undefined,undefined,this.selected],
                    this.origin,
                    this.worker1Id
                );
            }
            document.getElementById(props.id+'speedreset').onclick = () => {
                document.getElementById(props.id+'speed').value = 2;
                window.workers.runWorkerFunction(
                    'setGroupProperties',
                    [{maxSpeed:2},undefined,undefined,this.selected],
                    this.origin,
                    this.worker1Id
                );
            }
            document.getElementById(props.id+'gravity').onchange = (ev) => {
                window.workers.runWorkerFunction(
                    'setGroupProperties',
                    [{gravity:-ev.target.value},undefined,undefined,this.selected],
                    this.origin,
                    this.worker1Id
                );
            }
            document.getElementById(props.id+'gravityreset').onclick = () => {
                document.getElementById(props.id+'gravity').value = 0;
                window.workers.runWorkerFunction(
                    'setGroupProperties',
                    [{gravity:0},undefined,undefined,this.selected],
                    this.origin,
                    this.worker1Id
                );
            }
        }

        this.AppletHTML = new DOMFragment( // Fast HTML rendering container object
            HTMLtemplate,       //Define the html template string or function with properties
            this.parentNode,    //Define where to append to (use the parentNode)
            this.props,         //Reference to the HTML render properties (optional)
            setupHTML,          //The setup functions for buttons and other onclick/onchange/etc functions which won't work inline in the template string
            undefined,          //Can have an onchange function fire when properties change
            "NEVER"             //Changes to props or the template string will automatically rerender the html template if "NEVER" is changed to "FRAMERATE" or another value, otherwise the UI manager handles resizing and reinits when new apps are added/destroyed
        );  

        if(this.settings.length > 0) { this.configure(this.settings); } //You can give the app initialization settings if you want via an array.


        this.setupWorkerStuff();

        //Add whatever else you need to initialize
        this.looping = true;
        this.loop = this.updateLoop();
        
    }

    //Delete all event listeners and loops here and delete the HTML block
    deinit() {
        this.looping = false;
        cancelAnimationFrame(this.loop);
        if(window.audio){
            if(window.audio.osc[0] != undefined) {
                window.audio.osc[0].stop(0);
            }
        }

        this.cleanupWorkers();

        this.AppletHTML.deleteNode();
        //Be sure to unsubscribe from state if using it and remove any extra event listeners
    }

    //Responsive UI update, for resizing and responding to new connections detected by the UI manager
    responsive() {
        //window.workers?.postToWorker({foo:'resizecanvas',input:[this.AppletHTML.node.clientWidth,this.AppletHTML.node.clientHeight],origin:this.props.id},this.canvasWorkerId);
        // this.canvas.width = this.AppletHTML.node.clientWidth;
        // this.canvas.height = this.AppletHTML.node.clientHeight;
        // this.canvas.style.width = this.AppletHTML.node.clientWidth;
        // this.canvas.style.height = this.AppletHTML.node.clientHeight;

        //this.draw();
    }

    configure(settings=[]) { //For configuring from the address bar or saved settings. Expects an array of arguments [a,b,c] to do whatever with for setup
        settings.forEach((cmd,i) => {
            //if(cmd === 'x'){//doSomething;}
        });
    }

    //--------------------------------------------
    //--Add anything else for internal use below--
    //--------------------------------------------

    mean(arr){
		let sum = arr.reduce((prev,curr)=> curr += prev);
		return sum / arr.length;
	}

    updateLoop = () => {
        if(this.looping){
            if(this.session.atlas.settings.heg && this.session.atlas.settings.deviceConnected) {
                let ct = this.session.atlas.data.heg[0].count;
                if(ct >= 2) {
                    let avg = 40; if(ct < avg) { avg = ct; }
                    let slice = this.session.atlas.data.heg[0].ratio.slice(ct-avg);
                    let score = this.session.atlas.data.heg[0].ratio[ct-1] - this.mean(slice);
                    this.angleChange = score; this.score += score;
                    this.runWorkerFunction('setGroupProperties',[{maxSpeed:this.score*2}],this.origin,this.canvasWorkerId);
                    this.runWorkerFunction('setGroupProperties',[{alignment:this.score},'boid'],this.origin,this.canvasWorkerId);
                    this.runWorkerFunction('setGroupProperties',[{mul:this.score*0.1},'boid','swirl'],this.origin,this.canvasWorkerId);
                    //this.canvasWorker.setValues({angleChange:this.angleChange});
                    document.getElementById(this.props.id+'score').innerHTML = this.score.toFixed(3);
                }
            }
            // this.draw();
            setTimeout(() => { this.loop = requestAnimationFrame(this.updateLoop); },16);
        }
    }

    draw = (self, args, origin) => {
        let cWidth = self.canvas.width;
        let cHeight = self.canvas.height;
           // style the background
        let gradient = self.ctx.createRadialGradient(cWidth*0.5,cHeight*0.5,2,cWidth*0.5,cHeight*0.5,100*self.angle*self.angle);
        gradient.addColorStop(0,"purple");
        gradient.addColorStop(0.25,"dodgerblue");
        gradient.addColorStop(0.32,"skyblue");
        gradient.addColorStop(1,self.bgColor ?? 'black');
        self.ctx.fillStyle = gradient;
        self.ctx.fillRect(0,0,cWidth,cHeight);
        
        // draw the circle
        self.ctx.beginPath();

        self.angle += self.angleChange;

        let radius = cHeight*0.04 + (cHeight*0.46) * Math.abs(Math.cos(self.angle));
        self.ctx.arc(cWidth*0.5, cHeight*0.5, radius, 0, Math.PI * 2, false);
        self.ctx.closePath();
        
        // color in the circle
        self.ctx.fillStyle = self.cColor;
        self.ctx.fill();
        //console.log(this.ctx, this.cColor, this.bgColor)
        
    }

    boidsSetup = (self, args, origin) => {
        if(!self.boids) {console.error('need to add boids to the worker first setValues({boids:[[{x,y,z}],[etc.]]')}
        let three = self.threeUtil;
        const THREE = self.THREE;

        if(three.ANIMATING) {
            three.clear(self, args, origin);
        }

        three.scene = new THREE.Scene();
        three.camera = new THREE.PerspectiveCamera(75, three.proxy.clientWidth / three.proxy.clientHeight, 0.01, 1000);
        three.camera.position.z = 5
        
        three.renderer = new THREE.WebGLRenderer({canvas:self.canvas, antialias: true });
        three.renderer.setPixelRatio(Math.min(three.proxy.clientWidth / three.proxy.clientHeight,2));
        three.renderer.shadowMap.enabled = true;

        three.resizeRendererToDisplaySize(three.renderer,three.proxy,three.camera);
        // three.renderer.domElement.style.width = '100%';
        // three.renderer.domElement.style.height = '100%';
        // three.renderer.domElement.id = `canvas`;
        // three.renderer.domElement.style.opacity = '0';
        // three.renderer.domElement.style.transition = 'opacity 1s';

        //use proxy instead of domElement
        three.controls = new three.OrbitControls(three.camera, three.proxy);
        three.controls.enablePan = true
        three.controls.enableDamping = true
        three.controls.enabled = true;
        // three.controls.minPolarAngle = 2*Math.PI/6; // radians
        // three.controls.maxPolarAngle = 4*Math.PI/6; // radians
        // three.controls.minDistance = 0; // radians
        // three.controls.maxDistance = 1000; // radians

        three.nBoids = 0;

        //array of position arrays input
        self.boids.forEach((group) => {
            three.nBoids += group.length;
        });
    
        let vertices = [];

        let color = new THREE.Color();
        let colors = [];
        self.boids.forEach((group,i)=> {

            group.forEach((boid)=>{

                let x = boid[0];
                let y = boid[1];
                let z = -boid[2];

                vertices.push( x, y, z );

                let roll = Math.random();
                if(i==0){
                    if(roll <= 0.3){
                        color.set('lightseagreen');
                    } else if (roll <= 0.85){
                        color.set('blue');
                    } else {
                        color.set('turquoise');
                    }
                    colors.push(color.r,color.g,color.b);
                }
                else if (i==1) {
                    if(roll <= 0.3){
                        color.set('pink');
                    } else if (roll <= 0.85){
                        color.set('red');
                    } else {
                        color.set('orange');
                    }
                    colors.push(color.r,color.g,color.b);
                }
                else {
                    color.setRGB(Math.random(),Math.random(),Math.random());
                    colors.push(color.r,color.g,color.b);
                }
            });
        });

        let geometry = new THREE.BufferGeometry();
        geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );
        
        // for (let i = 0; i < three.nBoids; i++) {     
        // }

        geometry.setAttribute('color', new THREE.Float32BufferAttribute( colors, 3));

        let pointmat = new THREE.PointsMaterial( 
            // { color: 0xffffff },
            { 
                vertexColors: THREE.VertexColors,
                opacity:0.99
            });

        /*
        var spriteUrl = 'https://i.ibb.co/NsRgxZc/star.png';

        var textureLoader = new THREE.TextureLoader()
        textureLoader.crossOrigin = "Anonymous"
        var myTexture = textureLoader.load(spriteUrl);
        pointmat.map = myTexture;
        */
        three.points = new THREE.Points( geometry, pointmat );

        three.points.position.y -=225;
        three.points.position.x -=225
        three.points.position.z +=75;

        three.scene.add( three.points );
        
        if(!three.ANIMATING) {
            three.ANIMATING = true;
            three.animate(self, args, origin);
        }
        
    }

    boidsRender = (self, args, origin) => {

            let three = self.threeUtil;

            three.resizeRendererToDisplaySize(three.renderer,three.proxy,three.camera);
            
            if(self.boids.__proto__?.__proto__.constructor.name === 'TypedArray') {
            
                let positions = three.points.geometry.attributes.position.array;
                let count = 0;
            
                //console.log(self.boids);
                let positionArray = Array.from(self.boids); //convert float32array

                //updated with setValues
                for(let count = 0; count< positionArray.length; count+=3 ) {
                    positions[count]   =  positionArray[count];
                    positions[count+1] =  positionArray[count+1];
                    positions[count+2] = -positionArray[count+2];
                }

                three.points.geometry.attributes.position.needsUpdate = true; 
            }   

            three.controls.update();
            three.renderer.render(three.scene, three.camera);
    }

    //  threeWorkerDefaultDraw(self, args, origin){
    //     let three = self.threeUtil;
    //     three.time += three.ANIMFRAMETIME*0.001;
    //     if (three.resizeRendererToDisplaySize(three.renderer)) {
    //         three.camera.aspect = three.proxy.clientWidth / three.proxy.clientHeight;
    //         three.camera.updateProjectionMatrix();
    //     }
    
    //     three.cubes.forEach((cube, ndx) => {
    //         const speed = 1 + ndx * .1;
    //         const rot = three.time * speed;
    //         cube.rotation.x = rot;
    //         cube.rotation.y = rot;
    //     });
    
        
    //     three.pickHelper.pick(three.pickPosition, three.scene, three.camera, three.time);
    //     //console.log(this.pickPosition);
    //     three.renderer.render(three.scene, three.camera);
    // }.toString(), //CONVERT TO STRING
    // function clear(args,origin,self){
    
    // }.toString(), //CONVERT TO STRING

    setupWorkerStuff = () => {

        //add the worker manager if it's not on window
        window.workers = new WorkerManager();
        this.origin = this.props.id;

        //add workers
        this.worker1Id      = window.workers.addWorker(); // Thread 1
        this.worker2Id      = window.workers.addWorker(); // Thread 2
        this.canvasWorkerId = window.workers.addWorker(); // Thread 3 - render thread
        
        this.canvas.width = this.AppletHTML.node.clientWidth;
        this.canvas.height = this.AppletHTML.node.clientHeight;
        
        //quick setup canvas worker with initial settings
        this.canvasWorker = new ThreadedCanvas(
            this.origin,                                              //name given for the worker origin tag 
            this.canvas,                                              //canvas element to transfer to offscreencanvas
            undefined,                                                //canvas context setting
            undefined,//this.draw,                                    //pass the custom draw function
            undefined,//{angle:0,angleChange:0.000,bgColor:'black',cColor:'red'}, //'this' values, canvas and context/ctx are also available under 'self' for now, these can be mutated like uniforms with the 'setValues' command
            this.canvasWorkerId                                       //optional worker id to use, otherwise it sets up its own worker
        );    // This also makes a worker if no workerId is supplied


        //create a proxy for the canvas on the worker thread to mirror key inputs 
        let proxy = initElementProxy(
            this.canvas,
            this.canvasWorkerId,
            this.origin
        );
        
        //add some events to listen to thread results
        window.workers.addEvent('thread1process',this.origin,'add',this.worker1Id);
        //window.workers.addEvent('particle1Step',this.origin,'particleStep',this.worker1Id);
        window.workers.addEvent('particle1Setup',this.origin,'particleSetup',this.worker1Id);
        window.workers.addEvent('thread2process',this.origin,'mul',this.worker2Id);
        window.workers.addEvent('render',this.origin,'render',this.canvasWorkerId);

        //add some custom functions to the threads
        window.workers.addWorkerFunction( 
            'add',
            function add(self,args,origin){return args[0]+args[1];}.toString(),
            this.origin,
            this.worker1Id
        );

        window.workers.addWorkerFunction(
            'mul',
            function mul(self,args,origin){return args[0]*args[1];}.toString(),
            this.origin,
            this.worker2Id
        );
        
        //list all functions on a thread
        window.workers.runWorkerFunction('list',undefined,this.origin,this.worker1Id);
        
        //add a particle system
        window.workers.runWorkerFunction('transferClassObject',{particleClass:DynamicParticles.toString()},this.origin,this.worker1Id);
        
        // //add some custom functions to the threads
        window.workers.addWorkerFunction(
            'particleSetup',
            function particleSetup(self, args, origin){
                //console.log(self);
                self.particleObj = new self.particleClass(undefined,undefined,false,false);
                self.particleObj.setupRules([
                    ['boids',4000,[450,450,450]],
                    ['boids',5000,[450,450,450]],
                    ['boids',1000,[450,450,450]]]
                );

                if(typeof args[0] === 'object') self.particleObj.updateGroupProperties(args[3],args[0],args[1],args[2]); //can set some initial properties
                //TODO: use an arraybuffer system for MUCH FASTER transfers
                //https://developer.mozilla.org/en-US/docs/Glossary/Transferable_objects
                //https://developers.google.com/web/updates/2011/12/Transferable-Objects-Lightning-Fast

                let groups = [];
                let positionbuffer = [];
                let bufferidx = -1;
                let p = 0;
                self.particleObj.particles.map((group,j) => {
                    // if(j > bufferidx) {
                    //     positionbuffer.push(...new Array(group.particles.length*3));
                    //     bufferidx = j;
                    // }
                    groups.push(new Array(group.length));
                    group.particles.map((particle, k) => {
                        groups[j][k]=[particle.position.x,particle.position.y,particle.position.z];
                        // positionbuffer[p]=particle.position.x;
                        // positionbuffer[p+1]=particle.position.y;
                        // groups[p+2]=particle.position.z;
                        // p+=3;
                    });
                });
                //console.log(output)
                return groups;
                //return Float32Array.from(positionbuffer);
            }.toString(),
            this.origin,
            this.worker1Id
        );

        //add some custom functions to the threads
        window.workers.addWorkerFunction(
            'particleStep',
            function particleStep(self, args, origin){
                self.particleObj.frame(args[0]);
                //TODO: use an arraybuffer system for MUCH FASTER transfers
                //https://developer.mozilla.org/en-US/docs/Glossary/Transferable_objects
                //https://developers.google.com/web/updates/2011/12/Transferable-Objects-Lightning-Fast
                //let groups = [];
                let positionbuffer = [];
                let bufferidx = -1;
                let p = 0;
                self.particleObj.particles.map((group,j) => {
                    if(j > bufferidx) {
                        positionbuffer.push(...new Array(group.particles.length*3));
                        bufferidx = j;
                    }
                    group.particles.map((particle, k) => {
                        positionbuffer[p]=particle.position.x;
                        positionbuffer[p+1]=particle.position.y;
                        positionbuffer[p+2]=particle.position.z;
                        p+=3;
                    });
                });

                return Float32Array.from(positionbuffer);
            }.toString(),
            this.origin,
            this.worker1Id
        );

        //add some custom functions to the threads
        window.workers.addWorkerFunction(
            'setGroupProperties',
            function particleStep(self, args, origin){
                if(typeof args[0] === 'object') {
                    if(!args[3]) {
                        self.particleObj.particles.forEach((p,i) => {
                            self.particleObj.updateGroupProperties(i,args[0],args[1],args[2]);
                        });
                    } else {
                        self.particleObj.updateGroupProperties(args[3],args[0],args[1],args[2]);
                    }
                    return true;
                }
                return false;
            }.toString(),
            this.origin,
            this.worker1Id
        );

        let renderThreadWaiting = false;
        let renderThreadSetup = false;
        

        window.workers.subEvent('particle1Setup',(res) => {
            if(Array.isArray(res.output)) {
                
                window.workers.runWorkerFunction('initThree',
                    [
                        proxy.id,
                        {boids:res.output},
                        this.boidsSetup.toString(), //CONVERT TO STRING
                        //undefined,
                        this.boidsRender.toString(),
                        undefined
                    ],
                    this.origin,
                    this.canvasWorkerId
                );
                renderThreadSetup = true;
            }
            window.workers.runWorkerFunction('particleStep',[performance.now()*0.001],this.origin,this.worker1Id);
        });


        //direct communication channel between particle and render threads
        window.workers.establishMessageChannel(
            'particleStep',
            this.worker1Id,
            this.canvasWorkerId,
            function worker2Response(self,args,origin,port){
                //args = [float32array] from particle1Step output
                self.boids = args.output;
                if(port) 
                requestAnimationFrame( //let the particle thread know that the render thread is ready for more data (throttled by framerate)
                    ()=>{
                        port.postMessage({foo:'particleStep',input:[performance.now()*0.001],origin:origin});
                    }
                ); 
            },
            'particleStep',
            this.origin
        );

        //using above instead of this 
        // window.workers.subEvent('particle1Step',(res) => {
        //     //console.log(res.output)
        //     if(!renderThreadWaiting) { //don't overwhelm the renderthread
        //         this.canvasWorker.setValues({boids:res.output},[res.output.buffer]);
        //         renderThreadWaiting = true;
        //     }

        //     //console.log(res.output);
        //     window.workers.runWorkerFunction('particleStep',[performance.now()*0.001],this.origin,this.worker1Id);
        
        // });



        
        //once the render completes release the input
        window.workers.subEvent('render',(res)=>{
            //console.log('render thread event',res,Date.now());
            renderThreadWaiting = false;

        });


        
        //thread 1 process initiated by button press
        window.workers.subEvent('thread1process',(res) => { //send thread1 result to thread 2
            if(typeof res.output === 'number')
            {
                this.increment = res.output;
                window.workers.runWorkerFunction('mul',[this.increment,2],this.origin,this.worker2Id);
                console.log('multiply by 2 on thread 2')
            } else if (Array.isArray(res.output) && Array.isArray(res.output[0])) {
                //console.log('thread1 event',res.output,Date.now());
                console.log(res)

            }
        });

        let element = document.getElementById(this.props.id+'res');
        //send thread2 result to canvas thread to update visual settings
        window.workers.subEvent('thread2process',(res) => { 
            //console.log('thread2 event',res,Date.now());
            console.log('thread2 event',res);
            if(typeof res.output === 'number')
            {
                window.workers.runWorkerFunction('setValues',{angleChange:res.output},this.origin,this.canvasWorkerId);
                element.innerHTML = res.output.toFixed(3);
                this.pushedUpdateToThreads = false;
                console.log('set new angle change speed on render thread (3)')
            }
        });

        //on input event send to thread 1
        document.getElementById(this.props.id+'input').onclick = () => {
            //console.log('clicked', this.pushedUpdateToThreads); 
            if(this.pushedUpdateToThreads === false) {
                window.workers.runWorkerFunction('add',[this.increment,0.001],this.origin,this.worker1Id);
                console.log('add 0.001 on thread 1')
                this.pushedUpdateToThreads = true;
            }
        };

        //let particlesettings = [{maxSpeed:5}]; //see updateGroupProperties on the DynamicParticles class (or just the slider settings here in the applet)
        let particlesettings = undefined;
        window.workers.runWorkerFunction('particleSetup',particlesettings,this.origin,this.worker1Id);
        

        //this.canvasWorker.startAnimation(); //run animationFrame loop on the worker
    }

    stop() {
        this.canvasWorker.stopAnimation(); //stop the worker animation loop
    }

    cleanupWorkers() {
        this.stop();
        window.workers.terminate(this.worker1Id);
        window.workers.terminate(this.worker2Id);
        window.workers.terminate(this.canvasWorkerId);
    }

} 

