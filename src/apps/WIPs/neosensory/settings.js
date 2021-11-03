
import {UI} from './UI.js'

export const settings = {
    name: "Neosensory Playground",
    devices: ["EEG"],
    author: "Garrett Flynn",
    description: "Work with the Neosensory Buzz.",
    categories: ["WIP"],
    instructions:"Coming soon...",
    display: {
      production: false
    },
    // intro: {
    //   mode: 'single'
    // },
    
    // App Logic
    graph:
      {
      nodes: [
        {name: 'buzz', class: 'Buzz'},
        {name: 'spacebar', class: 'Event', params: {keycode: 'Space'}},
        {name: 'up', class: 'Event', params: {keycode: 'ArrowUp'}},
        {name: 'ui', class: UI, params: {}},
        {name: 'document', class: 'DOM'},   
      ],
      edges: [

        // Light up LEDs with Up Arrow
        {
          source: 'up', 
          target: 'buzz:leds'
        },
        
        // Buzz with Spacebar
        {
          source: 'spacebar', 
          target: 'buzz:motors'
        },

        // Or Buzz with the Button
        {
          source: 'ui:button', 
          target: 'buzz:motors'
        },

        // Show Device State on the UI
        {
          source: 'buzz:status', 
          target: 'ui'
        },

                
        {
          source: 'ui:element', 
          target: 'document:content'
        }
      ]
    },
}
