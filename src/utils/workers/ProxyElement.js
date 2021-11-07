
/////////////https://threejsfundamentals.org/threejs/lessons/threejs-offscreencanvas.html
import { WorkerManager } from "./WorkerManager";
  

function noop() {
}

export class ElementProxy {
  constructor(element, origin, workerId, eventHandlers) {
    this.id = 'proxy'+Math.floor(Math.random()*10000);
    this.eventHandlers = eventHandlers;
    this.origin = origin;
    this.workerId = workerId;

    if(!window.workers) window.workers = new WorkerManager();

    const sendEvent = (data) => {
        window.workers.runWorkerFunction(
            'proxyHandler',
            {type:'event',id:this.id,data:data},
            this.origin,
            this.workerId
        );
    };

    // register an id
    window.workers.runWorkerFunction(
        'proxyHandler',
        {type:'makeProxy',id:this.id},
        this.origin,
        this.workerId
    );


    for (const [eventName, handler] of Object.entries(this.eventHandlers)) {
      element.addEventListener(eventName, function(event) {
        handler(event, sendEvent);
      });
    }

    const sendSize = () => {
        const rect = element.getBoundingClientRect();
        sendEvent({
          type: 'size',
          left: rect.left,
          top: rect.top,
          width: element.clientWidth,
          height: element.clientHeight,
        });
    }

    sendSize();
    // really need to use ResizeObserver
    window.addEventListener('resize', sendSize);
  }
}

const mouseEventHandler = makeSendPropertiesHandler([
    'ctrlKey',
    'metaKey',
    'shiftKey',
    'button',
    'pointerType',
    'clientX',
    'clientY',
    'pageX',
    'pageY',
  ]);
  const wheelEventHandlerImpl = makeSendPropertiesHandler([
    'deltaX',
    'deltaY',
  ]);
  const keydownEventHandler = makeSendPropertiesHandler([
    'ctrlKey',
    'metaKey',
    'shiftKey',
    'keyCode',
  ]);
  
  function wheelEventHandler(event, sendFn) {
    event.preventDefault();
    wheelEventHandlerImpl(event, sendFn);
  }
  
  function preventDefaultHandler(event) {
    event.preventDefault();
  }
  
  function copyProperties(src, properties, dst) {
    for (const name of properties) {
        dst[name] = src[name];
    }
  }
  
  function makeSendPropertiesHandler(properties) {
    return function sendProperties(event, sendFn) {
      const data = {type: event.type};
      copyProperties(event, properties, data);
      sendFn(data);
    };
  }
  
  function touchEventHandler(event, sendFn) {
    const touches = [];
    const data = {type: event.type, touches};
    for (let i = 0; i < event.touches.length; ++i) {
      const touch = event.touches[i];
      touches.push({
        pageX: touch.pageX,
        pageY: touch.pageY,
      });
    }
    sendFn(data);
  }
  
  // The four arrow keys
  const orbitKeys = {
    '37': true,  // left
    '38': true,  // up
    '39': true,  // right
    '40': true,  // down
  };

  function filteredKeydownEventHandler(event, sendFn) {
    const {keyCode} = event;
    if (orbitKeys[keyCode]) {
      event.preventDefault();
      keydownEventHandler(event, sendFn);
    }
  }

  //do this on main thread
  export const initElementProxy = (element, workerId, origin) => {

    const eventHandlers = {
        contextmenu: preventDefaultHandler,
        mousedown: mouseEventHandler,
        mousemove: mouseEventHandler,
        mouseup: mouseEventHandler,
        pointerdown: mouseEventHandler,
        pointermove: mouseEventHandler,
        pointerup: mouseEventHandler,
        touchstart: touchEventHandler,
        touchmove: touchEventHandler,
        touchend: touchEventHandler,
        wheel: wheelEventHandler,
        keydown: filteredKeydownEventHandler,
    };
    
    const proxy = new ElementProxy(
      element, origin, workerId, eventHandlers
    );

    return proxy;

  }





/////////////https://threejsfundamentals.org/threejs/lessons/threejs-offscreencanvas.html

export class EventDispatcher {
	addEventListener( type, listener ) {
		if ( this._listeners === undefined ) this._listeners = {};
		const listeners = this._listeners;
		if ( listeners[ type ] === undefined ) {
			listeners[ type ] = [];
		}

		if ( listeners[ type ].indexOf( listener ) === - 1 ) {
			listeners[ type ].push( listener );
		}

	}

	hasEventListener( type, listener ) {
		if ( this._listeners === undefined ) return false;
		const listeners = this._listeners;
		return listeners[ type ] !== undefined && listeners[ type ].indexOf( listener ) !== - 1;
	}

	removeEventListener( type, listener ) {
		if ( this._listeners === undefined ) return;
		const listeners = this._listeners;
		const listenerArray = listeners[ type ];
		if ( listenerArray !== undefined ) {
			const index = listenerArray.indexOf( listener );
			if ( index !== - 1 ) {
				listenerArray.splice( index, 1 );
			}
		}
	}

	dispatchEvent( event ) {
		if ( this._listeners === undefined ) return;
		const listeners = this._listeners;
		const listenerArray = listeners[ event.type ];
		if ( listenerArray !== undefined ) {
			event.target = this;
			// Make a copy, in case listeners are removed while iterating.
			const array = listenerArray.slice( 0 );
			for ( let i = 0, l = array.length; i < l; i ++ ) {
				array[ i ].call( this, event );
			}
			event.target = null;
		}
	}
}

/////////////https://threejsfundamentals.org/threejs/lessons/threejs-offscreencanvas.html
export class ElementProxyReceiver extends EventDispatcher {
    constructor() {
        super();
        // because OrbitControls try to set style.touchAction;
        this.style = {};
    }
    get clientWidth() {
        return this.width;
    }
    get clientHeight() {
        return this.height;
    }
    // OrbitControls call these as of r132. Maybe we should implement them
    setPointerCapture() {}

    releasePointerCapture() {}

    getBoundingClientRect() {
        return {
            left: this.left,
            top: this.top,
            width: this.width,
            height: this.height,
            right: this.left + this.width,
            bottom: this.top + this.height,
        };
    }

    handleEvent(data) {
        if (data.type === 'size') {
            this.left = data.left;
            this.top = data.top;
            this.width = data.width;
            this.height = data.height;
            return;
        }
        data.preventDefault = noop;
        data.stopPropagation = noop;
        this.dispatchEvent(data);
    }

    focus() {}
}

/////////////https://threejsfundamentals.org/threejs/lessons/threejs-offscreencanvas.html
export class ProxyManager {
    constructor() {
      this.id = 'proxy'+Math.floor(Math.random()*10000);
      this.targets = {};
      this.handleEvent = this.handleEvent.bind(this);
    }

    makeProxy(data) {        
      const {id} = data;
      const proxy = new ElementProxyReceiver();
      this.targets[id] = proxy;
    }

    getProxy(id) {
      return this.targets[id];
    }

    handleEvent(data) {
      this.targets[data.id].handleEvent(data.data);
    }
}






/////////////https://threejsfundamentals.org/threejs/lessons/threejs-offscreencanvas.html
export function init(data) {   /* eslint-disable-line no-unused-vars */
    const {canvas, inputElement} = data;
    const renderer = new THREE.WebGLRenderer({canvas});
  
    const fov = 75;
    const aspect = 2; // the canvas default
    const near = 0.1;
    const far = 100;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 4;
  
    const controls = new OrbitControls(camera, inputElement);
    controls.target.set(0, 0, 0);
    controls.update();
  
    const scene = new THREE.Scene();
  
    {
      const color = 0xFFFFFF;
      const intensity = 1;
      const light = new THREE.DirectionalLight(color, intensity);
      light.position.set(-1, 2, 4);
      scene.add(light);
    }
  
    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
  
    function makeInstance(geometry, color, x) {
      const material = new THREE.MeshPhongMaterial({
        color,
      });
  
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);
  
      cube.position.x = x;
  
      return cube;
    }
  
    const cubes = [
      makeInstance(geometry, 0x44aa88, 0),
      makeInstance(geometry, 0x8844aa, -2),
      makeInstance(geometry, 0xaa8844, 2),
    ];
  
    class PickHelper {
      constructor() {
        this.raycaster = new THREE.Raycaster();
        this.pickedObject = null;
        this.pickedObjectSavedColor = 0;
      }
      pick(normalizedPosition, scene, camera, time) {
        // restore the color if there is a picked object
        if (this.pickedObject) {
          this.pickedObject.material.emissive.setHex(this.pickedObjectSavedColor);
          this.pickedObject = undefined;
        }
  
        // cast a ray through the frustum
        this.raycaster.setFromCamera(normalizedPosition, camera);
        // get the list of objects the ray intersected
        const intersectedObjects = this.raycaster.intersectObjects(scene.children);
        if (intersectedObjects.length) {
          // pick the first object. It's the closest one
          this.pickedObject = intersectedObjects[0].object;
          // save its color
          this.pickedObjectSavedColor = this.pickedObject.material.emissive.getHex();
          // set its emissive color to flashing red/yellow
          this.pickedObject.material.emissive.setHex((time * 8) % 2 > 1 ? 0xFFFF00 : 0xFF0000);
        }
      }
    }
  
    const pickPosition = {x: -2, y: -2};
    const pickHelper = new PickHelper();
    clearPickPosition();
  
    function resizeRendererToDisplaySize(renderer) {
      const canvas = renderer.domElement;
      const width = inputElement.clientWidth;
      const height = inputElement.clientHeight;
      const needResize = canvas.width !== width || canvas.height !== height;
      if (needResize) {
        renderer.setSize(width, height, false);
      }
      return needResize;
    }
  
    function render(time) {
      time *= 0.001;
  
      if (resizeRendererToDisplaySize(renderer)) {
        camera.aspect = inputElement.clientWidth / inputElement.clientHeight;
        camera.updateProjectionMatrix();
      }
  
      cubes.forEach((cube, ndx) => {
        const speed = 1 + ndx * .1;
        const rot = time * speed;
        cube.rotation.x = rot;
        cube.rotation.y = rot;
      });
  
      pickHelper.pick(pickPosition, scene, camera, time);
  
      renderer.render(scene, camera);
  
      requestAnimationFrame(render);
    }
  
    requestAnimationFrame(render);
  
    function getCanvasRelativePosition(event) {
      const rect = inputElement.getBoundingClientRect();
      return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    }
  
    function setPickPosition(event) {
      const pos = getCanvasRelativePosition(event);
      pickPosition.x = (pos.x / inputElement.clientWidth ) *  2 - 1;
      pickPosition.y = (pos.y / inputElement.clientHeight) * -2 + 1;  // note we flip Y
    }
  
    function clearPickPosition() {
      // unlike the mouse which always has a position
      // if the user stops touching the screen we want
      // to stop picking. For now we just pick a value
      // unlikely to pick something
      pickPosition.x = -100000;
      pickPosition.y = -100000;
    }
  
    inputElement.addEventListener('mousemove', setPickPosition);
    inputElement.addEventListener('mouseout', clearPickPosition);
    inputElement.addEventListener('mouseleave', clearPickPosition);
  
    inputElement.addEventListener('touchstart', (event) => {
      // prevent the window from scrolling
      event.preventDefault();
      setPickPosition(event.touches[0]);
    }, {passive: false});
  
    inputElement.addEventListener('touchmove', (event) => {
      setPickPosition(event.touches[0]);
    });
  
    inputElement.addEventListener('touchend', clearPickPosition);
  }
  


//some other rips from three.module
function smoothstep( x, min, max ) {
	if ( x <= min ) return 0;
	if ( x >= max ) return 1;
	x = ( x - min ) / ( max - min );
	return x * x * ( 3 - 2 * x );
}

function smootherstep( x, min, max ) {
	if ( x <= min ) return 0;
	if ( x >= max ) return 1;
	x = ( x - min ) / ( max - min );
	return x * x * x * ( x * ( x * 6 - 15 ) + 10 );

}




