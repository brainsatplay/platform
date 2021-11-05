import vertexSrc from "./shaders/vertex.glsl"
import fragmentSrc from "./shaders/noiseCircle/fragment.glsl"

export class UI{

    static id = String(Math.floor(Math.random()*1000000))

    constructor() {

        this.dependencies = {PIXI: 'https://cdnjs.cloudflare.com/ajax/libs/pixi.js/5.1.3/pixi.min.js'}
        
        // Internal Properties
        this.props = {}

        this.props.container = document.createElement('div')
        this.props.container.style = 'display: flex; align-items: center; justify-content: center; width: 100%; height: 100%'

        this.props.canvas = document.createElement('canvas')
        this.props.container.insertAdjacentElement('beforeend', this.props.canvas)
        this.props.container.onresize = this.responsive

        this.props.brainMetrics = [
            {name:'delta',label: 'Delta', color: [0,0.5,1]}, // Blue-Cyan
            {name:'theta',label: 'Theta',color: [1,0,1]}, // Purple
            {name:'alpha1',label: 'Low Alpha',color:[0,1,0]}, // Green
            {name:'alpha2',label: 'High Alpha',color: [0,1,0]}, // Green
            {name:'beta',label: 'Beta',color: [1,1,0]}, // Yellow
            {name:'lowgamma',label: 'Gamma',color: [1,0,0]} // Red
        ]
        this.props.brainData = []   
        this.props.lastColorSwitch=Date.now() 

        this.props.history = 5


        // Port Definition
        this.ports = {
            element: {
                data: this.props.container,
                input: {type: null},
                output: {type: Element}
            }
        }
    
    }

    init = () => {
        this.app = new this.dependencies.PIXI.Application({view: this.props.canvas});

        this.colorBuffer = Array.from({length: this.props.history}, e => [1.0,1.0,1.0])
        this.timeBuffer = Array.from({length: this.props.history}, e => 0)
        this.noiseBuffer = Array.from({length: this.props.history}, e => 1.0)

        const uniforms = {
            amplitude: 0.75,
            times: this.timeBuffer,
            aspect: this.app.renderer.view.width/this.app.renderer.view.height,  
            colors: this.colorBuffer.flat(1),
            mouse: [0,0], //[this.mouse.x, this.mouse.y],
            noiseIntensity: this.noiseBuffer
        };
        this.shader = this.dependencies.PIXI.Shader.from(vertexSrc, fragmentSrc, uniforms);
        // this.responsive()
        this.generateShaderElements()
        let startTime = Date.now();
        this.app.ticker.add((delta) => {

            console.log(uniforms)

            // Organize Brain Data 
            this.setBrainData(this.session.atlas.data.eeg)

            // Change Color
            let c = this.getColor()
            this.colorBuffer.shift()
            this.colorBuffer.push(c)

            this.timeBuffer.shift()
            this.timeBuffer.push((Date.now() - startTime)/1000)

            this.noiseBuffer.shift()
            let neurofeedback = 1 //this.getNeurofeedback()
            this.noiseBuffer.push(5.0 * neurofeedback)
                
            // Set Uniforms
            this.shaderQuad.shader.uniforms.colors = this.colorBuffer.flat(1) 
            this.shaderQuad.shader.uniforms.times = this.timeBuffer
            this.shaderQuad.shader.uniforms.noiseIntensity = this.noiseBuffer

            // this.shaderQuad.shader.uniforms.mouse = [this.mouse.x,this.mouse.y]

            // Draw
            this.app.renderer.render(this.shaderQuad, this.shaderTexture);
        });
    }

    responsive = () => {
        let w = this.props.container.offsetWidth
        let h = this.props.container.offsetHeight
        this.app.renderer.view.width = w;
        this.app.renderer.view.height = h;
        this.app.renderer.view.style.width = w + 'px';
        this.app.renderer.view.style.height = h + 'px';
        this.app.renderer.resize(w,h)
        this.aspect = this.app.renderer.view.width/this.app.renderer.view.height
        this.shaderQuad.shader.uniforms.aspect = this.aspect
        this.generateShaderElements()
    }

    deinit = () => {
        
    }

    generateShaderElements() {
        const w = this.props.container.offsetWidth
        const h = this.props.container.offsetHeight
        

        this.geometry = new this.dependencies.PIXI.Geometry()
                .addAttribute('aVertexPosition', // the attribute name
                    [0, 0, // x, y
                        w, 0, // x, y
                        w, h,
                        0, h], // x, y
                    2) // the size of the attribute
                .addAttribute('aUvs', // the attribute name
                    [-1, -1, // u, v
                        1, -1, // u, v
                        1, 1,
                        -1, 1], // u, v
                    2) // the size of the attribute
                .addIndex([0, 1, 2, 0, 2, 3]);

        // if (this.shaderContainer == null) 
        this.shaderTexture = this.dependencies.PIXI.RenderTexture.create(w,h);
        // if (this.shaderQuad == null)  
        this.shaderQuad = new this.dependencies.PIXI.Mesh(this.geometry, this.shader);

        if (this.shaderContainer != null) this.app.stage.removeChild(this.shaderContainer)
        this.shaderContainer = new this.dependencies.PIXI.Container();
        this.shaderContainer.addChild(this.shaderQuad);
        this.app.stage.addChild(this.shaderContainer);

        // Final combination pass
        // const combineUniforms = {
        //     texNoise: noiseTexture,
        //     texWave: waveTexture,
        // };
        // const combineShader = this.dependencies.PIXI.Shader.from(vertexSrc, fragmentCombineSrc, combineUniforms);
        // const combineQuad = new this.dependencies.PIXI.Mesh(this.geometry, combineShader);

        // this.shaderContainer.position.set((containerElement.offsetWidth - Math.min(w,h))/2, (containerElement.offsetHeight - Math.min(w,h))/2);
    }

    setBrainData(eeg_data){
        this.props.brainData = []
        this.props.brainMetrics.forEach((dict,i) => {
            this.props.brainData.push([])
            eeg_data.forEach((data) => {
                this.props.brainData[i] = data.means[dict.name].slice(data.means[dict.name].length-20)
            })
        })
        this.props.brainData = this.props.brainData.map(data => {
            if (data.length > 0) return data.reduce((tot,curr) => tot + curr)
            else return 1
        })  
  }

  getColor(){
    let currentColor = [0,0,0]
    let distances = this.props.brainData
    let maxDist = Math.max(...distances)
    if (distances.every(d => d == maxDist)) {
        currentColor = [0.25 + 0.75*(0.5 + 0.5*Math.sin(Date.now()/1000)),0.25 + 0.75*(0.5 + 0.5*Math.sin(Date.now()/500)),0.25 + 0.75*(0.5 + 0.5*Math.sin(Date.now()/200))]
    } else {
        // let ind = this.indexOfMax(distances)
        // if (this.currentColors == null) this.currentColors = [{ind: ind, color: this.props.brainMetrics[ind].color},{ind: ind, color: this.props.brainMetrics[ind].color}]
        // if (ind != this.currentColors[1].ind) {this.currentColors.shift(); this.currentColors.push({ind: ind, color: this.props.brainMetrics[ind].color}); this.props.lastColorSwitch=Date.now()}
        // for (let i = 0; i < 3; i++){
        //     currentColor[i] = this.currentColors[0].color[i] + (this.currentColors[1].color[i] + this.currentColors[0].color[i]) * Math.min(1,(Date.now() - this.props.lastColorSwitch)/100000)
        // }
        for (let i = 0; i < 3; i++){
            this.props.brainMetrics.forEach((dict,ind) => {
                currentColor[i] += (dict.color[i] * distances[ind]/maxDist)
            })
        }
    }
    return currentColor
}

indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}
}