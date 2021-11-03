

export const settings = {
    name: "BCI Mouse",
    devices: ["EEG"],
    author: "Christopher Coogan + Garrett Flynn",
    description: "Control a mouse with your brain",
    categories: ["UI", 'extension'],
    // "image":  featureImg,
    instructions:"Coming soon...",
    display: {
      production: false
    },
    // App Logic
    graph:
      {
      nodes: [
        {name: 'up', class: 'Event', params: {keycode: 'ArrowUp'}},
        {name: 'down', class: 'Event', params: {keycode: 'ArrowDown'}},
        {name: 'left', class: 'Event', params: {keycode: 'ArrowLeft'}},
        {name: 'right', class: 'Event', params: {keycode: 'ArrowRight'}},
        {name: 'click', class: 'Event', params: {keycode: 'Space'}},
        {name: 'move', class: 'Move'},
        {name: 'cursor', class: 'Cursor', params: {}},
      ],
      edges: [

        // Up
        {
          source: 'up', 
          target: 'move:up'
        },

        // Down
        {
          source: 'down', 
          target: 'move:down'
        },

        // Left
        {
          source: 'left', 
          target: 'move:left'
        },

        // Right
        {
          source: 'right', 
          target: 'move:right'
        },

        // X and Y
        {
          source: 'move:dx', 
          target: 'cursor:dx'
        },

        {
          source: 'move:dy', 
          target: 'cursor:dy'
        },

        {
          source: 'click', 
          target: 'cursor:click'
        },
      ]
    },
}
