
import {Manager} from './Manager'

export const settings = {
    name: "EEG",
    devices: ["EEG"],
    author: "Garrett Flynn",
    description: "Get started working with real-time EEG data!",
    categories: ["learn", 'templates'],
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
        {name: 'manager', class: Manager, params: {}},
      ],

      edges: [
        {
          source: 'eeg:atlas', 
          target: 'manager:data'
        },
      ]
    },
}