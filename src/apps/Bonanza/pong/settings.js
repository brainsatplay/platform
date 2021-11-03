
import featureImg from './feature.png'
import {UI} from './UI.js'

export const settings = {
    name: "MindPong",
    devices: ["EEG"],
    author: "Garrett Flynn",
    description: "Let's play Pong with our minds!",
    categories: ["Train", 'onebitbonanza'],
    // "image":  featureImg,
    instructions:"Coming soon...",
    bonanza: {
      minTime: 60, // s
    },
    image: featureImg,

    canTrain: true,

    // App Logic
    graph:
      {
      nodes: [
        {name: 'up', class: 'Event', params: {keycode: 'ArrowUp'}},
        {name: 'down', class: 'Event', params: {keycode: 'ArrowDown'}},
        {name: 'move', class: 'Move'},
        {name: 'ui', class: UI, params: {}},
        {name: 'document', class: 'DOM'},

        {name: 'performance', class: 'Performance', params: {method: 'accuracy'}},
        {name: 'debug', class: 'Debug'},

      ],
      edges: [

        // Paddle Position
        {
          source: 'up', 
          target: 'move:up'
        },
        {
          source: 'down', 
          target: 'move:down'
        },

        // Y Movement
        {
          source: 'move:dy', 
          target: 'ui:dy'
        },

        {
          source: 'ui:error', 
          target: 'performance:error'
        },

        {
          source: 'performance', 
          target: 'debug'
        },
        
        {
          source: 'ui:element', 
          target: 'document:content'
        }
      ]
    },
}
