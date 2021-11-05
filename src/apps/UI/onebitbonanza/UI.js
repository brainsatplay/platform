import logo from '../../../frontend/assets/logo_and_sub(v3).png'
import nasa from '../../../frontend/assets/nasa.jpg'
import {apps} from '../../apps.manifest'

let bonanzaApps = Object.assign({},apps)
Object.keys(bonanzaApps).forEach(k => {
    if(!bonanzaApps[k].categories.includes('onebitbonanza')) delete bonanzaApps[k]
})

console.log(bonanzaApps)

class UI{

    static id = String(Math.floor(Math.random()*1000000))

    constructor() {
        // UI Identifier
        this.props = {
            id: String(Math.floor(Math.random()*1000000)),
            currentApplet: null,
            animation: null,
            mode: 'timer', // or button
            ui: null,
            countdown: null,
            container: document.createElement('div')
        }

        // Port Definition
        this.ports = {
            default: {},
            timeLimit: {
                data: 60, // 60 Seconds
                options: null,
                min: 0,
                max: 60*10, // 10 Minutes
                step: 0.5
            },
            element: {
                data: this.props.container
            }
        }

        this.props.container.style = 'height:100%; width:100%; position: relative;'
    }

    init = () => {

        this.ports.element.data.innerHTML = `
            <div id='${this.props.id}-ui' style='position: absolute; top: 0; left: 0; height:100%; width:100%; z-index: 1; pointer-events:none;'>
                <div id='${this.props.id}-mask' style="position:absolute; top: 0; left: 0; width: 100%; height: 100%; background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${nasa}); background-position: center; background-repeat: no-repeat; background-size: cover; pointer-events: none;opacity: 0; pointer-events: none; display: flex; align-items: center; justify-content: center;">
                    <img src='${logo}' style="width: 50%;">
                </div>
            </div>
            <div id='${this.props.id}-applet' style='position: absolute; top: 0; left: 0; height:100%; width:100%; z-index: 0'></div>
            `



            this.props.ui = this.props.container.querySelector(`[id="${this.props.id}-ui"]`)

            if (this.props.mode == 'button'){
                this.props.ui.innerHTML +=   `<button id='${this.props.id}-randomize' style="pointer-events:auto;position:absolute; top: 25px; right: 25px;">Randomize</button>`
                document.getElementById(`${props.id}-randomize`).onclick = () => {
                    this._setNewApplet()
                };   
            } else if (this.props.mode == 'timer'){
                this.props.ui.innerHTML += `<h2 id='${this.props.id}-countdown' style="pointer-events:auto;position:absolute; top: 25px; right: 25px; margin: 0px;">0:00</h2>`
                this.props.countdown = this.props.container.querySelector(`[id="${this.props.id}-countdown"]`)
            }

            this._setNewApplet()

            this._animate = () => {
                if (this.props.currentApplet != null && this.props.mode == 'timer'){

                    let actualLimit = Math.max(this.ports.timeLimit.data, this.props.currentApplet.settings.bonanza.minTime)

                    let timeLeft = actualLimit - (Date.now() - this.props.currentApplet.tInit)/1000
                    if (this.props.currentApplet.tUp == false){
                        this.props.countdown.innerHTML = Math.max(0, timeLeft).toFixed(2)
                        if (timeLeft <= 0){
                            this.props.currentApplet.tUp = true
                            this._setNewApplet()
                        } 
                    } else {
                        this.props.countdown.innerHTML = (0).toFixed(2)
                    }
                }
                this.props.animation = requestAnimationFrame(this._animate)
            }
    
            this._animate()
    }

    deinit = () => {

        if (this.props.urrentApplet != null) this.props.currentApplet.instance.deinit();
        cancelAnimationFrame(this.props.animation);
    }

    // Ports

    default = (user) => {
        return user
    }

    // Helper Function

    _setNewApplet = () => {

        let mask = this.props.container.querySelector(`[id="${this.props.id}-mask"]`)
        // Transition
        mask.style.opacity = 1;
        mask.style.pointerEvents = 'none';
        let transitionLength = 500
        mask.style.transition = `opacity ${transitionLength/1000}s`;

        // Reset
        setTimeout(async ()=>{
            let [applet,settings] = await this._getNewApplet()
            if (this.props.currentApplet != null) this.props.currentApplet.instance.deinit()
            
            let parentNode = this.props.container.querySelector(`[id="${this.props.id}-applet"]`)
            let instance
            if (applet && settings.module){
                instance = new applet(parentNode, this.session, [])
            } else {
                delete settings.intro // Never show intro
                instance = new brainsatplay.App(settings, parentNode, this.session, [])
            }
            
            this.props.currentApplet = {
                tInit: Date.now(),
                instance,
                settings,
                tUp: false
            }
            this.props.currentApplet.instance.init()
            this.props.currentApplet.instance.responsive();
        },transitionLength);

        // Display
        setTimeout(()=>{
            mask.style.opacity = 0;
            mask.style.auto = 'auto';
        },transitionLength+500);

    }

    _getNewApplet = async () => {
        let appletKeys = Object.keys(bonanzaApps)
        let module = await import(bonanzaApps[appletKeys[Math.floor(Math.random() * appletKeys.length)]].folderUrl + '/settings.js')
        console.log(module)
        let settings = Object.assign({}, module.settings)
        // Check that the chosen applet is not prohibited, compatible with current devices, and not the same applet as last time
        let compatible = true
        let instance;
        if (this.props.currentApplet != null) instance = this.props.currentApplet.instance
        this.session.deviceStreams.forEach((device) => {
            if (!settings.devices.includes(device.info.deviceType) && !settings.devices.includes(device.info.deviceName) && instance instanceof applet) compatible = false
        })
        let applet;
        if (!compatible) applet = await this._getNewApplet()
        else {
            if (settings.module){
                let module = await import(bonanzaApps[settings.name].folderUrl+"/"+settings.module + '.js')
                console.log(module, settings.module)
                applet = module[settings.module]
            }
        }
        console.log(applet)

        return [applet,settings]
    }
}

export {UI}