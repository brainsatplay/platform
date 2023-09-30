/**
 * Module for creating BCI application in Javascript.
 * @module brainsatplay
 */

import 'regenerator-runtime/runtime' 

// Plugins
import * as plugins from './src/plugins/plugins'
// import {pluginManifest} from './src/plugins/pluginManifest'
// export {pluginManifest}

// Session Manager
import  {Session } from './src/Session.js'

// App
import { App } from './src/App.js'

globalThis.brainsatplay = { App, Session, plugins }
export { App, Session, plugins  }

// export * from './src/analysis/Math2'

// CommonJS Exports Not Working for Node.js Utilities
// import * as brainstorm from './src/brainstorm/Brainstorm'
// export {brainstorm}

