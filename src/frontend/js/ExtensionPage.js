
import { Page } from './Page';
import { apps } from '../../apps/apps.manifest'
import { ExtensionCard } from './ui/ExtensionCard'

export class ExtensionPage extends Page{
    constructor(parentNode, toggle, session){
        super(parentNode, toggle)

        this.header.innerHTML = `Extensions`

        this.session = session

        this.content.style = 'display: flex; flex-wrap: wrap;'
        let applets = Object.keys(apps)
        let extensions = []
        applets.forEach(name => {
            if (apps[name].categories.includes('extension')) extensions.push(apps[name])
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