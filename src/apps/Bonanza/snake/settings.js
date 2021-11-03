
import featureImg from './feature.png'
import {UI} from './UI.js'

export const settings = {
    name: "Snake",
    devices: ["EEG"],
    author: "Christopher Coogan + Garrett Flynn",
    description: "Let's play Snake!",
    categories: ["Play", 'onebitbonanza'],
    // "image":  featureImg,
    instructions:"Coming soon...",
    bonanza: {
      minTime: 60, // s
    },
    image: featureImg,

    // App Logic
    graph:
      {
      nodes: [
        {name: 'up', class: 'Event', params: {keycode: 'ArrowUp'}},
        {name: 'down', class: 'Event', params: {keycode: 'ArrowDown'}},
        {name: 'left', class: 'Event', params: {keycode: 'ArrowLeft'}},
        {name: 'right', class: 'Event', params: {keycode: 'ArrowRight'}},
        {name: 'ui', class: UI, params: {}},
        {name: 'document', class: 'DOM'},      
      ],
      edges: [
        {
          source: 'up', 
          target: 'ui:up'
        },
        {
          source: 'down', 
          target: 'ui:down'
        },
        {
          source: 'left', 
          target: 'ui:left'
        },
        {
          source: 'right', 
          target: 'ui:right'
        },
        
        {
          source: 'ui:element', 
          target: 'document:content'
        }
      ]
    },
}
