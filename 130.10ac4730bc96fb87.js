(self.webpackChunkangular_vanta_app=self.webpackChunkangular_vanta_app||[]).push([[130],{130:function(j){typeof self<"u"&&self,j.exports=function(y){var u={};function a(r){if(u[r])return u[r].exports;var h=u[r]={i:r,l:!1,exports:{}};return y[r].call(h.exports,h,h.exports,a),h.l=!0,h.exports}return a.m=y,a.c=u,a.d=function(r,h,n){a.o(r,h)||Object.defineProperty(r,h,{enumerable:!0,get:n})},a.r=function(r){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},a.t=function(r,h){if(1&h&&(r=a(r)),8&h||4&h&&"object"==typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&h&&"string"!=typeof r)for(var p in r)a.d(n,p,function(f){return r[f]}.bind(null,p));return n},a.n=function(r){var h=r&&r.__esModule?function(){return r.default}:function(){return r};return a.d(h,"a",h),h},a.o=function(r,h){return Object.prototype.hasOwnProperty.call(r,h)},a.p="",a(a.s=12)}({0:function(y,u,a){"use strict";function r(){return typeof navigator<"u"?/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<600:null}a.d(u,"e",function(){return r}),a.d(u,"i",function(){return h}),a.d(u,"h",function(){return n}),a.d(u,"g",function(){return p}),a.d(u,"f",function(){return f}),a.d(u,"b",function(){return t}),a.d(u,"c",function(){return i}),a.d(u,"d",function(){return e}),a.d(u,"a",function(){return s}),Number.prototype.clamp=function(o,l){return Math.min(Math.max(this,o),l)};const h=o=>o[Math.floor(Math.random()*o.length)];function n(o,l){return null==o&&(o=0),null==l&&(l=1),o+Math.random()*(l-o)}function p(o,l){return null==o&&(o=0),null==l&&(l=1),Math.floor(o+Math.random()*(l-o+1))}const f=o=>document.querySelector(o),t=o=>"number"==typeof o?"#"+("00000"+o.toString(16)).slice(-6):o,i=(o,l=1)=>{const M=t(o),g=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(M),d=g?{r:parseInt(g[1],16),g:parseInt(g[2],16),b:parseInt(g[3],16)}:null;return"rgba("+d.r+","+d.g+","+d.b+","+l+")"},e=o=>.299*o.r+.587*o.g+.114*o.b;function s(o){for(;o.children&&o.children.length>0;)s(o.children[0]),o.remove(o.children[0]);o.geometry&&o.geometry.dispose(),o.material&&(Object.keys(o.material).forEach(l=>{o.material[l]&&null!==o.material[l]&&"function"==typeof o.material[l].dispose&&o.material[l].dispose()}),o.material.dispose())}},1:function(y,u,a){"use strict";a.d(u,"a",function(){return p});var r=a(0);const h="object"==typeof window;let n=h&&window.THREE||{};h&&!window.VANTA&&(window.VANTA={});const p=h&&window.VANTA||{};p.register=(t,i)=>p[t]=e=>new i(e),p.version="0.5.22";const f=function(){return Array.prototype.unshift.call(arguments,"[VANTA]"),console.error.apply(this,arguments)};p.VantaBase=class{constructor(t={}){if(!h)return!1;p.current=this,this.windowMouseMoveWrapper=this.windowMouseMoveWrapper.bind(this),this.windowTouchWrapper=this.windowTouchWrapper.bind(this),this.windowGyroWrapper=this.windowGyroWrapper.bind(this),this.resize=this.resize.bind(this),this.animationLoop=this.animationLoop.bind(this),this.restart=this.restart.bind(this);const i="function"==typeof this.getDefaultOptions?this.getDefaultOptions():this.defaultOptions;if(this.options=Object.assign({mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,scale:1,scaleMobile:1},i),(t instanceof HTMLElement||"string"==typeof t)&&(t={el:t}),Object.assign(this.options,t),this.options.THREE&&(n=this.options.THREE),this.el=this.options.el,null==this.el)f('Instance needs "el" param!');else if(!(this.options.el instanceof HTMLElement)){const s=this.el;if(this.el=Object(r.f)(s),!this.el)return void f("Cannot find element",s)}this.prepareEl(),this.initThree(),this.setSize();try{this.init()}catch(s){return f("Init error",s),this.renderer&&this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),void(this.options.backgroundColor&&(console.log("[VANTA] Falling back to backgroundColor"),this.el.style.background=Object(r.b)(this.options.backgroundColor)))}this.initMouse(),this.resize(),this.animationLoop();const e=window.addEventListener;e("resize",this.resize),window.requestAnimationFrame(this.resize),this.options.mouseControls&&(e("scroll",this.windowMouseMoveWrapper),e("mousemove",this.windowMouseMoveWrapper)),this.options.touchControls&&(e("touchstart",this.windowTouchWrapper),e("touchmove",this.windowTouchWrapper)),this.options.gyroControls&&e("deviceorientation",this.windowGyroWrapper)}setOptions(t={}){Object.assign(this.options,t),this.triggerMouseMove()}prepareEl(){let t,i;if(typeof Node<"u"&&Node.TEXT_NODE)for(t=0;t<this.el.childNodes.length;t++){const e=this.el.childNodes[t];if(e.nodeType===Node.TEXT_NODE){const s=document.createElement("span");s.textContent=e.textContent,e.parentElement.insertBefore(s,e),e.remove()}}for(t=0;t<this.el.children.length;t++)i=this.el.children[t],"static"===getComputedStyle(i).position&&(i.style.position="relative"),"auto"===getComputedStyle(i).zIndex&&(i.style.zIndex=1);"static"===getComputedStyle(this.el).position&&(this.el.style.position="relative")}applyCanvasStyles(t,i={}){Object.assign(t.style,{position:"absolute",zIndex:0,top:0,left:0,background:""}),Object.assign(t.style,i),t.classList.add("vanta-canvas")}initThree(){n.WebGLRenderer?(this.renderer=new n.WebGLRenderer({alpha:!0,antialias:!0}),this.el.appendChild(this.renderer.domElement),this.applyCanvasStyles(this.renderer.domElement),isNaN(this.options.backgroundAlpha)&&(this.options.backgroundAlpha=1),this.scene=new n.Scene):console.warn("[VANTA] No THREE defined on window")}getCanvasElement(){return this.renderer?this.renderer.domElement:this.p5renderer?this.p5renderer.canvas:void 0}getCanvasRect(){const t=this.getCanvasElement();return!!t&&t.getBoundingClientRect()}windowMouseMoveWrapper(t){const i=this.getCanvasRect();if(!i)return!1;const e=t.clientX-i.left,s=t.clientY-i.top;e>=0&&s>=0&&e<=i.width&&s<=i.height&&(this.mouseX=e,this.mouseY=s,this.options.mouseEase||this.triggerMouseMove(e,s))}windowTouchWrapper(t){const i=this.getCanvasRect();if(!i)return!1;if(1===t.touches.length){const e=t.touches[0].clientX-i.left,s=t.touches[0].clientY-i.top;e>=0&&s>=0&&e<=i.width&&s<=i.height&&(this.mouseX=e,this.mouseY=s,this.options.mouseEase||this.triggerMouseMove(e,s))}}windowGyroWrapper(t){const i=this.getCanvasRect();if(!i)return!1;const e=Math.round(2*t.alpha)-i.left,s=Math.round(2*t.beta)-i.top;e>=0&&s>=0&&e<=i.width&&s<=i.height&&(this.mouseX=e,this.mouseY=s,this.options.mouseEase||this.triggerMouseMove(e,s))}triggerMouseMove(t,i){void 0===t&&void 0===i&&(this.options.mouseEase?(t=this.mouseEaseX,i=this.mouseEaseY):(t=this.mouseX,i=this.mouseY)),this.uniforms&&(this.uniforms.iMouse.value.x=t/this.scale,this.uniforms.iMouse.value.y=i/this.scale),"function"==typeof this.onMouseMove&&this.onMouseMove(t/this.width,i/this.height)}setSize(){this.scale||(this.scale=1),Object(r.e)()&&this.options.scaleMobile?this.scale=this.options.scaleMobile:this.options.scale&&(this.scale=this.options.scale),this.width=Math.max(this.el.offsetWidth,this.options.minWidth),this.height=Math.max(this.el.offsetHeight,this.options.minHeight)}initMouse(){(!this.mouseX&&!this.mouseY||this.mouseX===this.options.minWidth/2&&this.mouseY===this.options.minHeight/2)&&(this.mouseX=this.width/2,this.mouseY=this.height/2,this.triggerMouseMove(this.mouseX,this.mouseY))}resize(){this.setSize(),this.camera&&(this.camera.aspect=this.width/this.height,"function"==typeof this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix()),this.renderer&&(this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(window.devicePixelRatio/this.scale)),"function"==typeof this.onResize&&this.onResize()}isOnScreen(){const t=this.el.offsetHeight,i=this.el.getBoundingClientRect(),e=window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop,s=i.top+e;return s-window.innerHeight<=e&&e<=s+t}animationLoop(){return this.t||(this.t=0),this.t+=1,this.t2||(this.t2=0),this.t2+=this.options.speed||1,this.uniforms&&(this.uniforms.iTime.value=.016667*this.t2),this.options.mouseEase&&(this.mouseEaseX=this.mouseEaseX||this.mouseX||0,this.mouseEaseY=this.mouseEaseY||this.mouseY||0,Math.abs(this.mouseEaseX-this.mouseX)+Math.abs(this.mouseEaseY-this.mouseY)>.1&&(this.mouseEaseX+=.05*(this.mouseX-this.mouseEaseX),this.mouseEaseY+=.05*(this.mouseY-this.mouseEaseY),this.triggerMouseMove(this.mouseEaseX,this.mouseEaseY))),(this.isOnScreen()||this.options.forceAnimate)&&("function"==typeof this.onUpdate&&this.onUpdate(),this.scene&&this.camera&&(this.renderer.render(this.scene,this.camera),this.renderer.setClearColor(this.options.backgroundColor,this.options.backgroundAlpha)),this.fps&&this.fps.update&&this.fps.update(),"function"==typeof this.afterRender&&this.afterRender()),this.req=window.requestAnimationFrame(this.animationLoop)}restart(){if(this.scene)for(;this.scene.children.length;)this.scene.remove(this.scene.children[0]);"function"==typeof this.onRestart&&this.onRestart(),this.init()}init(){"function"==typeof this.onInit&&this.onInit()}destroy(){"function"==typeof this.onDestroy&&this.onDestroy();const t=window.removeEventListener;t("touchstart",this.windowTouchWrapper),t("touchmove",this.windowTouchWrapper),t("scroll",this.windowMouseMoveWrapper),t("mousemove",this.windowMouseMoveWrapper),t("deviceorientation",this.windowGyroWrapper),t("resize",this.resize),window.cancelAnimationFrame(this.req);const i=this.scene;i&&i.children&&Object(r.a)(i),this.renderer&&(this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),this.renderer=null,this.scene=null),p.current===this&&(p.current=null)}},u.b=p.VantaBase},12:function(y,u,a){"use strict";a.r(u);var r=a(1),h=a(0);let n="object"==typeof window&&window.THREE;class p extends r.b{static initClass(){this.prototype.defaultOptions={color:16727937,backgroundColor:2299196,points:10,maxDistance:20,spacing:15,showDots:!0}}constructor(t){n=t.THREE||n,super(t)}genPoint(t,i,e){let s;if(this.points||(this.points=[]),this.options.showDots){const o=new n.SphereGeometry(.25,12,12),l=new n.MeshLambertMaterial({color:this.options.color});s=new n.Mesh(o,l)}else s=new n.Object3D;return this.cont.add(s),s.ox=t,s.oy=i,s.oz=e,s.position.set(t,i,e),s.r=Object(h.h)(-2,2),this.points.push(s)}onInit(){this.cont=new n.Group,this.cont.position.set(0,0,0),this.scene.add(this.cont);let t=this.options.points,{spacing:i}=this.options;Object(h.e)()&&(t=~~(.75*t),i=~~(.65*i));const e=t*t*2;this.linePositions=new Float32Array(e*e*3),this.lineColors=new Float32Array(e*e*3);const s=Object(h.d)(new n.Color(this.options.color)),o=Object(h.d)(new n.Color(this.options.backgroundColor));this.blending=s>o?"additive":"subtractive";const l=new n.BufferGeometry;l.setAttribute("position",new n.BufferAttribute(this.linePositions,3).setUsage(n.DynamicDrawUsage)),l.setAttribute("color",new n.BufferAttribute(this.lineColors,3).setUsage(n.DynamicDrawUsage)),l.computeBoundingSphere(),l.setDrawRange(0,0);const M=new n.LineBasicMaterial({vertexColors:n.VertexColors,blending:"additive"===this.blending?n.AdditiveBlending:null,transparent:!0});this.linesMesh=new n.LineSegments(l,M),this.cont.add(this.linesMesh);for(let d=0;d<=t;d++)for(let m=0;m<=t;m++){const C=Object(h.g)(-3,3),c=(d-t/2)*i+Object(h.g)(-5,5);let E=(m-t/2)*i+Object(h.g)(-5,5);d%2&&(E+=.5*i),this.genPoint(c,C-Object(h.g)(5,15),E),this.genPoint(c+Object(h.g)(-5,5),C+Object(h.g)(5,15),E+Object(h.g)(-5,5))}this.camera=new n.PerspectiveCamera(25,this.width/this.height,.01,1e4),this.camera.position.set(50,100,150),this.scene.add(this.camera);const g=new n.AmbientLight(16777215,.75);return this.scene.add(g),this.spot=new n.SpotLight(16777215,1),this.spot.position.set(0,200,0),this.spot.distance=400,this.spot.target=this.cont,this.scene.add(this.spot)}onDestroy(){this.scene&&this.scene.remove(this.linesMesh),this.spot=this.points=this.linesMesh=this.lineColors=this.linePositions=null}setOptions(t){super.setOptions(t),t.color&&this.points.forEach(i=>{i.material.color=new n.Color(t.color)})}onUpdate(){let t;const i=this.camera;Math.abs(i.tx-i.position.x)>.01&&(t=i.tx-i.position.x,i.position.x+=.02*t),Math.abs(i.ty-i.position.y)>.01&&(t=i.ty-i.position.y,i.position.y+=.02*t),i.lookAt(new n.Vector3(0,0,0));let e=0,s=0,o=0;const l=new n.Color(this.options.backgroundColor),M=new n.Color(this.options.color),g=M.clone().sub(l);this.rayCaster&&this.rayCaster.setFromCamera(new n.Vector2(this.rcMouseX,this.rcMouseY),this.camera);for(let d=0;d<this.points.length;d++){let m,C;const c=this.points[d];C=this.rayCaster?this.rayCaster.ray.distanceToPoint(c.position):1e3;const E=C.clamp(5,15);if(c.scale.x=c.scale.y=c.scale.z=(.25*(15-E)).clamp(1,100),0!==c.r){let w=Math.atan2(c.position.z,c.position.x);m=Math.sqrt(c.position.z*c.position.z+c.position.x*c.position.x),w+=25e-5*c.r,c.position.x=m*Math.cos(w),c.position.z=m*Math.sin(w)}for(let w=d;w<this.points.length;w++){const v=this.points[w],x=c.position.x-v.position.x,O=c.position.y-v.position.y,z=c.position.z-v.position.z;if(m=Math.sqrt(x*x+O*O+z*z),m<this.options.maxDistance){let b;const T=(2*(1-m/this.options.maxDistance)).clamp(0,1);b="additive"===this.blending?new n.Color(0).lerp(g,T):l.clone().lerp(M,T),this.linePositions[e++]=c.position.x,this.linePositions[e++]=c.position.y,this.linePositions[e++]=c.position.z,this.linePositions[e++]=v.position.x,this.linePositions[e++]=v.position.y,this.linePositions[e++]=v.position.z,this.lineColors[s++]=b.r,this.lineColors[s++]=b.g,this.lineColors[s++]=b.b,this.lineColors[s++]=b.r,this.lineColors[s++]=b.g,this.lineColors[s++]=b.b,o++}}}return this.linesMesh.geometry.setDrawRange(0,2*o),this.linesMesh.geometry.attributes.position.needsUpdate=!0,this.linesMesh.geometry.attributes.color.needsUpdate=!0,.001*this.t}onMouseMove(t,i){const e=this.camera;e.oy||(e.oy=e.position.y,e.ox=e.position.x,e.oz=e.position.z);const s=Math.atan2(e.oz,e.ox),o=Math.sqrt(e.oz*e.oz+e.ox*e.ox),l=s+2*(t-.5)*(this.options.mouseCoeffX||1);e.tz=o*Math.sin(l),e.tx=o*Math.cos(l),e.ty=e.oy+50*(i-.5)*(this.options.mouseCoeffY||1),this.rcMouseX=2*t-1,this.rcMouseY=2*-t+1}onRestart(){this.scene&&this.scene.remove(this.linesMesh),this.points=[]}}p.initClass(),u.default=r.a.register("NET",p)}})}}]);