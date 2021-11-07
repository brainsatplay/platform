import{Ramchurn} from './Ramchurn'


export const settings = {
    name: "NeuroCinema",
    devices: ["EEG", "HEG"],
    author: "Garrett Flynn",
    description: "Cut movies together based on brain data",
    categories: ["WIP"],
    instructions: "",
    display: {
      production: true,
      development: true
    },
    // App Logic
    graph:
    {
      nodes: [ 

        // Manual Control
        {name:'event', class: 'Event', params: {keycode: 'Space'}},

        // Data-Based Controls
        {name:'eeg', class: 'EEG'},
        {name:'neurofeedback', class: 'Neurofeedback', metric: 'Focus'},

        {name:'buffer', class: Buffer},
        {name:'arithmetic', class: 'Arithmetic'},

        {name:'peakDetector', class: 'Peak'},

        // File Manager
        {name:'manager', class: Ramchurn},

        // Video Player
        {name:'video', class: 'Video', params: {cut: true, files: [], ui: false}},

        // Audio
        // {name:'audio', class: Audio},
        {name:'mixer', class: 'Mixer'},

        // UI
        {name:'ui', class: 'DOM', params: {
          html: `<div id="vidContainer" class="video-container"></div><div id="filmSelection"></div>`,
          style: `
          .brainsatplay-ui-container {
            width: 100%;
            height: 100%;
          }

          #filmSelection {
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 1;
          }
          
          .video-container {
            width: 100%;
            height: 100%;
          }
          `
        }}

      ],
      edges: [

        // Insert Video Player to UI
        {
          source: 'video:element',
          target: 'ui:vidContainer'
        },

        {
          source: 'manager:element',
          target: 'ui:filmSelection'
        },

        // Pass Videos
        {
          source: 'manager:controlVideo',
          target: 'video:files'
        },

        // Pass Audio
        {
          source: 'manager:setAudio',
          target: 'mixer:files'
        },
        {
          source: 'manager:controlAudio',
          target: 'mixer:control'
        },

        // Data-Based Control
        {
          source: 'eeg:atlas',
          target: 'neurofeedback'
        },
        {
          source: 'neurofeedback',
          target: 'buffer'
        },
        {
          source: 'buffer',
          target: 'arithmetic:mean'
        },
        {
          source: 'arithmetic:mean',
          target: 'peakDetector'
        },
        {
          source: 'peakDetector',
          target: 'event'
        },


        // Manual Control
        {
          source: 'event',
          target: 'manager:cut'
        },

        // Event Routing
        {
          source: 'manager:cut',
          target: 'video:change'
        },
        {
          source: 'mixer:files',
          target: 'manager:start'
        },
        // {
        //   source: 'manager:cut',
        //   target: 'audio:track1'
        // },
      ]
    },

    // graph: {
    //   nodes: [
    //     {name:'eeg', class: EEG},
    //     {name:'neurofeedback', class: Neurofeedback, metric: 'Focus'},

    //     {name:'buffer', class: Buffer},
    //     {name:'arithmetic', class: Arithmetic},

    //     {name:'peakDetector', class: Peak},

    //     {name:'changeView', class: Event, params: {keycode: 'Space'}},
    //     {name:'player', class: Video, params: {
    //       cut: true,
    //       ramchurn: true
    //     }},
    //     {name:'ui', class: DOM, params: {
    //       html: `<div id="vidContainer" class="video-container"></div>`,
    //       style: `
    //       .brainsatplay-ui-container {
    //         width: 100%;
    //         height: 100%;
    //       }
          
    //       .video-container {
    //         width: 100%;
    //         height: 100%;
    //       }
    //       `
    //     }}

    //   ],
    //   edges: [
    //     // Insert Video Player to UI
    //     {
    //       source: 'player:element',
    //       target: 'ui:vidContainer'
    //     },

    //     // Neurofeedback Controls
    //     {
    //       source: 'eeg:atlas',
    //       target: 'neurofeedback'
    //     },
    //     {
    //       source: 'neurofeedback',
    //       target: 'buffer'
    //     },
    //     {
    //       source: 'buffer',
    //       target: 'arithmetic:input'
    //     },
    //     {
    //       source: 'arithmetic:mean',
    //       target: 'peakDetector'
    //     },
    //     {
    //       source: 'peakDetector',
    //       target: 'changeView'
    //     },


    //     // Manual Controls
    //     {
    //     source: 'changeView',
    //     target: 'player:change'
    //   }
    // ]
    // },
}