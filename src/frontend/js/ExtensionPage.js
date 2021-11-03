
import { Page } from './Page';
import { appletManifest } from '../../apps/apps'
import { ExtensionCard } from './ui/ExtensionCard'

export class ExtensionPage extends Page{
    constructor(parentNode, toggle, session){
        super(parentNode, toggle)

        this.header.innerHTML = `Extensions`

        this.session = session

        this.content.style = 'display: flex; flex-wrap: wrap;'
        let applets = Object.keys(appletManifest)
        let extensions = []
        applets.forEach(name => {
            if (appletManifest[name].categories.includes('extension')) extensions.push(appletManifest[name])
        })

        let init = async () => {

            extensions.forEach(o => {
                if (o.display?.extensions !== false){
                    let card = new ExtensionCard(o, this.session)
                    this.content.insertAdjacentElement('beforeend', card.element)
                }
            })
        }

        init()
        
    }
}