
import featureImg from './img/feature.png'
import {UI} from './UI.js'

export const settings = {
    "name": "Pixi",
    "author": "Garrett Flynn",
    "devices": ["EEG"],
    "description": "Control a shader with your brain.",
    "categories": ["train"],
    "image":  featureImg,
    "instructions":"Coming soon...",
    
    graphs: [
      {
        nodes: [
          {name: 'ui', class: UI},
          {name: 'dom', class: 'DOM'},
        ],
        edges: [{
          source: 'ui:element',
          target: 'dom:content'
        }]
    }

    ]
}