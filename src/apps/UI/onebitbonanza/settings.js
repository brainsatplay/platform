
import {UI} from './UI.js'
import feature from './feature.jpg'

export const settings = {
    name: "One Bit Bonanza",
    author: "Garrett Flynn",
    devices: ["EEG","HEG"],
    description: "Play a new low-bandwidth game every few seconds!",
    categories: ["UI"],
    instructions:"Coming soon...",
    display: {
      development: false,
      production: false
    },
    image: feature,
    
    // App Logic
    graph:
      {
      nodes: [
        {name: 'ui', class: UI, params: {}},
        {name: 'dom', class: 'DOM', params: {}}
      ],
      edges: [
        // {
        //   source: 'signal', 
        //   target: 'neurofeedback'
        // },
        {
          source: 'ui:element', 
          target: 'dom:content'
        }
      ]
    },
}
