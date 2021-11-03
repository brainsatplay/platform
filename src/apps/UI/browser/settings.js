import {AppletBrowser} from './AppletBrowser.js'

export const settings = {
    name: "Applet Browser",
    author: "Garrett Flynn",
    devices: ["EEG","HEG"],
    description: "Choose an applet.",
    categories: ["UI"],
    instructions:"Coming soon...",
    display: {
      development: false,
      production: false
    },

    graph: {
      nodes: [
        {name: 'browser', class: AppletBrowser},
        {name: 'ui', class: 'DOM'}
      ],
      edges: [
        {
          source: 'browser:element',
          target: 'ui:content'
        }
      ]
    }
}
