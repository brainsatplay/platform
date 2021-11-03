
import {Manager} from './Manager'

export const settings = {
    name: "Neurofeedback Studio",
    devices: ["EEG", 'HEG'],
    author: "Garrett Flynn",
    description: "A production-ready neurofeedback application.",
    categories: ["train"],
    instructions:"Coming soon...",
    display: {
      production: false,
      development: true
    },

    // intro: {
    //   title:false
    // },

    // App Logic
    graph:
    {
      nodes: [
        {name: 'eeg', class: 'EEG'},
        {name: 'heg', class: 'HEG'},
        {name: 'manager', class: Manager, params: {}},
        {name: 'ui', class: 'DOM', params: {}},

      ],

      edges: [
        {
          source: 'eeg:atlas', 
          target: 'manager'
        },
        {
          source: 'heg:atlas', 
          target: 'manager'
        },
        {
          source: 'manager:element', 
          target: 'ui:content'
        }
      ]
    },
}