"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const V=require("react");function bt(s,t,e){return Math.max(t,Math.min(s,e))}const u={toVector(s,t){return s===void 0&&(s=t),Array.isArray(s)?s:[s,s]},add(s,t){return[s[0]+t[0],s[1]+t[1]]},sub(s,t){return[s[0]-t[0],s[1]-t[1]]},addTo(s,t){s[0]+=t[0],s[1]+=t[1]},subTo(s,t){s[0]-=t[0],s[1]-=t[1]}};function z(s,t,e){return t===0||Math.abs(t)===1/0?Math.pow(s,e*5):s*t*e/(t+e*s)}function K(s,t,e,i=.15){return i===0?bt(s,t,e):s<t?-z(t-s,e-t,i)+t:s>e?+z(s-e,e-t,i)+e:s}function wt(s,[t,e],[i,n]){const[[r,o],[c,l]]=s;return[K(t,r,o,i),K(e,c,l,n)]}function Et(s,t){if(typeof s!="object"||s===null)return s;var e=s[Symbol.toPrimitive];if(e!==void 0){var i=e.call(s,t||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(s)}function Tt(s){var t=Et(s,"string");return typeof t=="symbol"?t:String(t)}function d(s,t,e){return t=Tt(t),t in s?Object.defineProperty(s,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):s[t]=e,s}function $(s,t){var e=Object.keys(s);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(s);t&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(s,n).enumerable})),e.push.apply(e,i)}return e}function f(s){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?$(Object(e),!0).forEach(function(i){d(s,i,e[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(s,Object.getOwnPropertyDescriptors(e)):$(Object(e)).forEach(function(i){Object.defineProperty(s,i,Object.getOwnPropertyDescriptor(e,i))})}return s}const ot={pointer:{start:"down",change:"move",end:"up"},mouse:{start:"down",change:"move",end:"up"},touch:{start:"start",change:"move",end:"end"},gesture:{start:"start",change:"change",end:"end"}};function q(s){return s?s[0].toUpperCase()+s.slice(1):""}const St=["enter","leave"];function It(s=!1,t){return s&&!St.includes(t)}function Dt(s,t="",e=!1){const i=ot[s],n=i&&i[t]||t;return"on"+q(s)+q(n)+(It(e,n)?"Capture":"")}const At=["gotpointercapture","lostpointercapture"];function kt(s){let t=s.substring(2).toLowerCase();const e=!!~t.indexOf("passive");e&&(t=t.replace("passive",""));const i=At.includes(t)?"capturecapture":"capture",n=!!~t.indexOf(i);return n&&(t=t.replace("capture","")),{device:t,capture:n,passive:e}}function Ot(s,t=""){const e=ot[s],i=e&&e[t]||t;return s+i}function C(s){return"touches"in s}function at(s){return C(s)?"touch":"pointerType"in s?s.pointerType:"mouse"}function xt(s){return Array.from(s.touches).filter(t=>{var e,i;return t.target===s.currentTarget||((e=s.currentTarget)===null||e===void 0||(i=e.contains)===null||i===void 0?void 0:i.call(e,t.target))})}function Pt(s){return s.type==="touchend"||s.type==="touchcancel"?s.changedTouches:s.targetTouches}function ct(s){return C(s)?Pt(s)[0]:s}function U(s,t){try{const e=t.clientX-s.clientX,i=t.clientY-s.clientY,n=(t.clientX+s.clientX)/2,r=(t.clientY+s.clientY)/2,o=Math.hypot(e,i);return{angle:-(Math.atan2(e,i)*180)/Math.PI,distance:o,origin:[n,r]}}catch{}return null}function Mt(s){return xt(s).map(t=>t.identifier)}function F(s,t){const[e,i]=Array.from(s.touches).filter(n=>t.includes(n.identifier));return U(e,i)}function R(s){const t=ct(s);return C(s)?t.identifier:t.pointerId}function T(s){const t=ct(s);return[t.clientX,t.clientY]}const J=40,Q=800;function ut(s){let{deltaX:t,deltaY:e,deltaMode:i}=s;return i===1?(t*=J,e*=J):i===2&&(t*=Q,e*=Q),[t,e]}function Ct(s){var t,e;const{scrollX:i,scrollY:n,scrollLeft:r,scrollTop:o}=s.currentTarget;return[(t=i??r)!==null&&t!==void 0?t:0,(e=n??o)!==null&&e!==void 0?e:0]}function Nt(s){const t={};if("buttons"in s&&(t.buttons=s.buttons),"shiftKey"in s){const{shiftKey:e,altKey:i,metaKey:n,ctrlKey:r}=s;Object.assign(t,{shiftKey:e,altKey:i,metaKey:n,ctrlKey:r})}return t}function P(s,...t){return typeof s=="function"?s(...t):s}function Lt(){}function Vt(...s){return s.length===0?Lt:s.length===1?s[0]:function(){let t;for(const e of s)t=e.apply(this,arguments)||t;return t}}function Z(s,t){return Object.assign({},t,s||{})}const Rt=32;class ht{constructor(t,e,i){this.ctrl=t,this.args=e,this.key=i,this.state||(this.state={},this.computeValues([0,0]),this.computeInitial(),this.init&&this.init(),this.reset())}get state(){return this.ctrl.state[this.key]}set state(t){this.ctrl.state[this.key]=t}get shared(){return this.ctrl.state.shared}get eventStore(){return this.ctrl.gestureEventStores[this.key]}get timeoutStore(){return this.ctrl.gestureTimeoutStores[this.key]}get config(){return this.ctrl.config[this.key]}get sharedConfig(){return this.ctrl.config.shared}get handler(){return this.ctrl.handlers[this.key]}reset(){const{state:t,shared:e,ingKey:i,args:n}=this;e[i]=t._active=t.active=t._blocked=t._force=!1,t._step=[!1,!1],t.intentional=!1,t._movement=[0,0],t._distance=[0,0],t._direction=[0,0],t._delta=[0,0],t._bounds=[[-1/0,1/0],[-1/0,1/0]],t.args=n,t.axis=void 0,t.memo=void 0,t.elapsedTime=t.timeDelta=0,t.direction=[0,0],t.distance=[0,0],t.overflow=[0,0],t._movementBound=[!1,!1],t.velocity=[0,0],t.movement=[0,0],t.delta=[0,0],t.timeStamp=0}start(t){const e=this.state,i=this.config;e._active||(this.reset(),this.computeInitial(),e._active=!0,e.target=t.target,e.currentTarget=t.currentTarget,e.lastOffset=i.from?P(i.from,e):e.offset,e.offset=e.lastOffset,e.startTime=e.timeStamp=t.timeStamp)}computeValues(t){const e=this.state;e._values=t,e.values=this.config.transform(t)}computeInitial(){const t=this.state;t._initial=t._values,t.initial=t.values}compute(t){const{state:e,config:i,shared:n}=this;e.args=this.args;let r=0;if(t&&(e.event=t,i.preventDefault&&t.cancelable&&e.event.preventDefault(),e.type=t.type,n.touches=this.ctrl.pointerIds.size||this.ctrl.touchIds.size,n.locked=!!document.pointerLockElement,Object.assign(n,Nt(t)),n.down=n.pressed=n.buttons%2===1||n.touches>0,r=t.timeStamp-e.timeStamp,e.timeStamp=t.timeStamp,e.elapsedTime=e.timeStamp-e.startTime),e._active){const v=e._delta.map(Math.abs);u.addTo(e._distance,v)}this.axisIntent&&this.axisIntent(t);const[o,c]=e._movement,[l,h]=i.threshold,{_step:a,values:g}=e;if(i.hasCustomTransform?(a[0]===!1&&(a[0]=Math.abs(o)>=l&&g[0]),a[1]===!1&&(a[1]=Math.abs(c)>=h&&g[1])):(a[0]===!1&&(a[0]=Math.abs(o)>=l&&Math.sign(o)*l),a[1]===!1&&(a[1]=Math.abs(c)>=h&&Math.sign(c)*h)),e.intentional=a[0]!==!1||a[1]!==!1,!e.intentional)return;const p=[0,0];if(i.hasCustomTransform){const[v,yt]=g;p[0]=a[0]!==!1?v-a[0]:0,p[1]=a[1]!==!1?yt-a[1]:0}else p[0]=a[0]!==!1?o-a[0]:0,p[1]=a[1]!==!1?c-a[1]:0;this.restrictToAxis&&!e._blocked&&this.restrictToAxis(p);const D=e.offset,A=e._active&&!e._blocked||e.active;A&&(e.first=e._active&&!e.active,e.last=!e._active&&e.active,e.active=n[this.ingKey]=e._active,t&&(e.first&&("bounds"in i&&(e._bounds=P(i.bounds,e)),this.setup&&this.setup()),e.movement=p,this.computeOffset()));const[k,O]=e.offset,[[L,mt],[gt,_t]]=e._bounds;e.overflow=[k<L?-1:k>mt?1:0,O<gt?-1:O>_t?1:0],e._movementBound[0]=e.overflow[0]?e._movementBound[0]===!1?e._movement[0]:e._movementBound[0]:!1,e._movementBound[1]=e.overflow[1]?e._movementBound[1]===!1?e._movement[1]:e._movementBound[1]:!1;const vt=e._active?i.rubberband||[0,0]:[0,0];if(e.offset=wt(e._bounds,e.offset,vt),e.delta=u.sub(e.offset,D),this.computeMovement(),A&&(!e.last||r>Rt)){e.delta=u.sub(e.offset,D);const v=e.delta.map(Math.abs);u.addTo(e.distance,v),e.direction=e.delta.map(Math.sign),e._direction=e._delta.map(Math.sign),!e.first&&r>0&&(e.velocity=[v[0]/r,v[1]/r],e.timeDelta=r)}}emit(){const t=this.state,e=this.shared,i=this.config;if(t._active||this.clean(),(t._blocked||!t.intentional)&&!t._force&&!i.triggerAllEvents)return;const n=this.handler(f(f(f({},e),t),{},{[this.aliasKey]:t.values}));n!==void 0&&(t.memo=n)}clean(){this.eventStore.clean(),this.timeoutStore.clean()}}function Kt([s,t],e){const i=Math.abs(s),n=Math.abs(t);if(i>n&&i>e)return"x";if(n>i&&n>e)return"y"}class S extends ht{constructor(...t){super(...t),d(this,"aliasKey","xy")}reset(){super.reset(),this.state.axis=void 0}init(){this.state.offset=[0,0],this.state.lastOffset=[0,0]}computeOffset(){this.state.offset=u.add(this.state.lastOffset,this.state.movement)}computeMovement(){this.state.movement=u.sub(this.state.offset,this.state.lastOffset)}axisIntent(t){const e=this.state,i=this.config;if(!e.axis&&t){const n=typeof i.axisThreshold=="object"?i.axisThreshold[at(t)]:i.axisThreshold;e.axis=Kt(e._movement,n)}e._blocked=(i.lockDirection||!!i.axis)&&!e.axis||!!i.axis&&i.axis!==e.axis}restrictToAxis(t){if(this.config.axis||this.config.lockDirection)switch(this.state.axis){case"x":t[1]=0;break;case"y":t[0]=0;break}}}const tt=s=>s,et=.15,B={enabled(s=!0){return s},eventOptions(s,t,e){return f(f({},e.shared.eventOptions),s)},preventDefault(s=!1){return s},triggerAllEvents(s=!1){return s},rubberband(s=0){switch(s){case!0:return[et,et];case!1:return[0,0];default:return u.toVector(s)}},from(s){if(typeof s=="function")return s;if(s!=null)return u.toVector(s)},transform(s,t,e){const i=s||e.shared.transform;if(this.hasCustomTransform=!!i,process.env.NODE_ENV==="development"){const n=i||tt;return r=>{const o=n(r);return(!isFinite(o[0])||!isFinite(o[1]))&&console.warn(`[@use-gesture]: config.transform() must produce a valid result, but it was: [${o[0]},${[1]}]`),o}}return i||tt},threshold(s){return u.toVector(s,0)}};process.env.NODE_ENV==="development"&&Object.assign(B,{domTarget(s){if(s!==void 0)throw Error("[@use-gesture]: `domTarget` option has been renamed to `target`.");return NaN},lockDirection(s){if(s!==void 0)throw Error("[@use-gesture]: `lockDirection` option has been merged with `axis`. Use it as in `{ axis: 'lock' }`");return NaN},initial(s){if(s!==void 0)throw Error("[@use-gesture]: `initial` option has been renamed to `from`.");return NaN}});const Ut=0,y=f(f({},B),{},{axis(s,t,{axis:e}){if(this.lockDirection=e==="lock",!this.lockDirection)return e},axisThreshold(s=Ut){return s},bounds(s={}){if(typeof s=="function")return r=>y.bounds(s(r));if("current"in s)return()=>s.current;if(typeof HTMLElement=="function"&&s instanceof HTMLElement)return s;const{left:t=-1/0,right:e=1/0,top:i=-1/0,bottom:n=1/0}=s;return[[t,e],[i,n]]}}),st={ArrowRight:(s,t=1)=>[s*t,0],ArrowLeft:(s,t=1)=>[-1*s*t,0],ArrowUp:(s,t=1)=>[0,-1*s*t],ArrowDown:(s,t=1)=>[0,s*t]};class Bt extends S{constructor(...t){super(...t),d(this,"ingKey","dragging")}reset(){super.reset();const t=this.state;t._pointerId=void 0,t._pointerActive=!1,t._keyboardActive=!1,t._preventScroll=!1,t._delayed=!1,t.swipe=[0,0],t.tap=!1,t.canceled=!1,t.cancel=this.cancel.bind(this)}setup(){const t=this.state;if(t._bounds instanceof HTMLElement){const e=t._bounds.getBoundingClientRect(),i=t.currentTarget.getBoundingClientRect(),n={left:e.left-i.left+t.offset[0],right:e.right-i.right+t.offset[0],top:e.top-i.top+t.offset[1],bottom:e.bottom-i.bottom+t.offset[1]};t._bounds=y.bounds(n)}}cancel(){const t=this.state;t.canceled||(t.canceled=!0,t._active=!1,setTimeout(()=>{this.compute(),this.emit()},0))}setActive(){this.state._active=this.state._pointerActive||this.state._keyboardActive}clean(){this.pointerClean(),this.state._pointerActive=!1,this.state._keyboardActive=!1,super.clean()}pointerDown(t){const e=this.config,i=this.state;if(t.buttons!=null&&(Array.isArray(e.pointerButtons)?!e.pointerButtons.includes(t.buttons):e.pointerButtons!==-1&&e.pointerButtons!==t.buttons))return;const n=this.ctrl.setEventIds(t);e.pointerCapture&&t.target.setPointerCapture(t.pointerId),!(n&&n.size>1&&i._pointerActive)&&(this.start(t),this.setupPointer(t),i._pointerId=R(t),i._pointerActive=!0,this.computeValues(T(t)),this.computeInitial(),e.preventScrollAxis&&at(t)!=="mouse"?(i._active=!1,this.setupScrollPrevention(t)):e.delay>0?(this.setupDelayTrigger(t),e.triggerAllEvents&&(this.compute(t),this.emit())):this.startPointerDrag(t))}startPointerDrag(t){const e=this.state;e._active=!0,e._preventScroll=!0,e._delayed=!1,this.compute(t),this.emit()}pointerMove(t){const e=this.state,i=this.config;if(!e._pointerActive)return;const n=R(t);if(e._pointerId!==void 0&&n!==e._pointerId)return;const r=T(t);if(document.pointerLockElement===t.target?e._delta=[t.movementX,t.movementY]:(e._delta=u.sub(r,e._values),this.computeValues(r)),u.addTo(e._movement,e._delta),this.compute(t),e._delayed&&e.intentional){this.timeoutStore.remove("dragDelay"),e.active=!1,this.startPointerDrag(t);return}if(i.preventScrollAxis&&!e._preventScroll)if(e.axis)if(e.axis===i.preventScrollAxis||i.preventScrollAxis==="xy"){e._active=!1,this.clean();return}else{this.timeoutStore.remove("startPointerDrag"),this.startPointerDrag(t);return}else return;this.emit()}pointerUp(t){this.ctrl.setEventIds(t);try{this.config.pointerCapture&&t.target.hasPointerCapture(t.pointerId)&&t.target.releasePointerCapture(t.pointerId)}catch{process.env.NODE_ENV==="development"&&console.warn("[@use-gesture]: If you see this message, it's likely that you're using an outdated version of `@react-three/fiber`. \n\nPlease upgrade to the latest version.")}const e=this.state,i=this.config;if(!e._active||!e._pointerActive)return;const n=R(t);if(e._pointerId!==void 0&&n!==e._pointerId)return;this.state._pointerActive=!1,this.setActive(),this.compute(t);const[r,o]=e._distance;if(e.tap=r<=i.tapsThreshold&&o<=i.tapsThreshold,e.tap&&i.filterTaps)e._force=!0;else{const[c,l]=e._delta,[h,a]=e._movement,[g,p]=i.swipe.velocity,[D,A]=i.swipe.distance,k=i.swipe.duration;if(e.elapsedTime<k){const O=Math.abs(c/e.timeDelta),L=Math.abs(l/e.timeDelta);O>g&&Math.abs(h)>D&&(e.swipe[0]=Math.sign(c)),L>p&&Math.abs(a)>A&&(e.swipe[1]=Math.sign(l))}}this.emit()}pointerClick(t){!this.state.tap&&t.detail>0&&(t.preventDefault(),t.stopPropagation())}setupPointer(t){const e=this.config,i=e.device;if(process.env.NODE_ENV==="development")try{if(i==="pointer"&&e.preventScrollDelay===void 0){const n="uv"in t?t.sourceEvent.currentTarget:t.currentTarget;window.getComputedStyle(n).touchAction==="auto"&&console.warn("[@use-gesture]: The drag target has its `touch-action` style property set to `auto`. It is recommended to add `touch-action: 'none'` so that the drag gesture behaves correctly on touch-enabled devices. For more information read this: https://use-gesture.netlify.app/docs/extras/#touch-action.\n\nThis message will only show in development mode. It won't appear in production. If this is intended, you can ignore it.",n)}}catch{}e.pointerLock&&t.currentTarget.requestPointerLock(),e.pointerCapture||(this.eventStore.add(this.sharedConfig.window,i,"change",this.pointerMove.bind(this)),this.eventStore.add(this.sharedConfig.window,i,"end",this.pointerUp.bind(this)),this.eventStore.add(this.sharedConfig.window,i,"cancel",this.pointerUp.bind(this)))}pointerClean(){this.config.pointerLock&&document.pointerLockElement===this.state.currentTarget&&document.exitPointerLock()}preventScroll(t){this.state._preventScroll&&t.cancelable&&t.preventDefault()}setupScrollPrevention(t){this.state._preventScroll=!1,jt(t);const e=this.eventStore.add(this.sharedConfig.window,"touch","change",this.preventScroll.bind(this),{passive:!1});this.eventStore.add(this.sharedConfig.window,"touch","end",e),this.eventStore.add(this.sharedConfig.window,"touch","cancel",e),this.timeoutStore.add("startPointerDrag",this.startPointerDrag.bind(this),this.config.preventScrollDelay,t)}setupDelayTrigger(t){this.state._delayed=!0,this.timeoutStore.add("dragDelay",()=>{this.state._step=[0,0],this.startPointerDrag(t)},this.config.delay)}keyDown(t){const e=st[t.key];if(e){const i=this.state,n=t.shiftKey?10:t.altKey?.1:1;this.start(t),i._delta=e(this.config.keyboardDisplacement,n),i._keyboardActive=!0,u.addTo(i._movement,i._delta),this.compute(t),this.emit()}}keyUp(t){t.key in st&&(this.state._keyboardActive=!1,this.setActive(),this.compute(t),this.emit())}bind(t){const e=this.config.device;t(e,"start",this.pointerDown.bind(this)),this.config.pointerCapture&&(t(e,"change",this.pointerMove.bind(this)),t(e,"end",this.pointerUp.bind(this)),t(e,"cancel",this.pointerUp.bind(this)),t("lostPointerCapture","",this.pointerUp.bind(this))),this.config.keys&&(t("key","down",this.keyDown.bind(this)),t("key","up",this.keyUp.bind(this))),this.config.filterTaps&&t("click","",this.pointerClick.bind(this),{capture:!0,passive:!1})}}function jt(s){"persist"in s&&typeof s.persist=="function"&&s.persist()}const I=typeof window<"u"&&window.document&&window.document.createElement;function Ht(){return I&&"ontouchstart"in window}function it(){return Ht()||I&&window.navigator.maxTouchPoints>1}function Yt(){return I&&"onpointerdown"in window}function Gt(){return I&&"exitPointerLock"in window.document}function Wt(){try{return"constructor"in GestureEvent}catch{return!1}}const m={isBrowser:I,gesture:Wt(),touch:it(),touchscreen:it(),pointer:Yt(),pointerLock:Gt()},Xt=250,zt=180,$t=.5,qt=50,Ft=250,Jt=10,nt={mouse:0,touch:0,pen:8},lt=f(f({},y),{},{device(s,t,{pointer:{touch:e=!1,lock:i=!1,mouse:n=!1}={}}){return this.pointerLock=i&&m.pointerLock,m.touch&&e?"touch":this.pointerLock?"mouse":m.pointer&&!n?"pointer":m.touch?"touch":"mouse"},preventScrollAxis(s,t,{preventScroll:e}){if(this.preventScrollDelay=typeof e=="number"?e:e||e===void 0&&s?Xt:void 0,!(!m.touchscreen||e===!1))return s||(e!==void 0?"y":void 0)},pointerCapture(s,t,{pointer:{capture:e=!0,buttons:i=1,keys:n=!0}={}}){return this.pointerButtons=i,this.keys=n,!this.pointerLock&&this.device==="pointer"&&e},threshold(s,t,{filterTaps:e=!1,tapsThreshold:i=3,axis:n=void 0}){const r=u.toVector(s,e?i:n?1:0);return this.filterTaps=e,this.tapsThreshold=i,r},swipe({velocity:s=$t,distance:t=qt,duration:e=Ft}={}){return{velocity:this.transform(u.toVector(s)),distance:this.transform(u.toVector(t)),duration:e}},delay(s=0){switch(s){case!0:return zt;case!1:return 0;default:return s}},axisThreshold(s){return s?f(f({},nt),s):nt},keyboardDisplacement(s=Jt){return s}});process.env.NODE_ENV==="development"&&Object.assign(lt,{useTouch(s){if(s!==void 0)throw Error("[@use-gesture]: `useTouch` option has been renamed to `pointer.touch`. Use it as in `{ pointer: { touch: true } }`.");return NaN},experimental_preventWindowScrollY(s){if(s!==void 0)throw Error("[@use-gesture]: `experimental_preventWindowScrollY` option has been renamed to `preventScroll`.");return NaN},swipeVelocity(s){if(s!==void 0)throw Error("[@use-gesture]: `swipeVelocity` option has been renamed to `swipe.velocity`. Use it as in `{ swipe: { velocity: 0.5 } }`.");return NaN},swipeDistance(s){if(s!==void 0)throw Error("[@use-gesture]: `swipeDistance` option has been renamed to `swipe.distance`. Use it as in `{ swipe: { distance: 50 } }`.");return NaN},swipeDuration(s){if(s!==void 0)throw Error("[@use-gesture]: `swipeDuration` option has been renamed to `swipe.duration`. Use it as in `{ swipe: { duration: 250 } }`.");return NaN}});function ft(s){const[t,e]=s.overflow,[i,n]=s._delta,[r,o]=s._direction;(t<0&&i>0&&r<0||t>0&&i<0&&r>0)&&(s._movement[0]=s._movementBound[0]),(e<0&&n>0&&o<0||e>0&&n<0&&o>0)&&(s._movement[1]=s._movementBound[1])}const Qt=30,Zt=100;class te extends ht{constructor(...t){super(...t),d(this,"ingKey","pinching"),d(this,"aliasKey","da")}init(){this.state.offset=[1,0],this.state.lastOffset=[1,0],this.state._pointerEvents=new Map}reset(){super.reset();const t=this.state;t._touchIds=[],t.canceled=!1,t.cancel=this.cancel.bind(this),t.turns=0}computeOffset(){const{type:t,movement:e,lastOffset:i}=this.state;t==="wheel"?this.state.offset=u.add(e,i):this.state.offset=[(1+e[0])*i[0],e[1]+i[1]]}computeMovement(){const{offset:t,lastOffset:e}=this.state;this.state.movement=[t[0]/e[0],t[1]-e[1]]}axisIntent(){const t=this.state,[e,i]=t._movement;if(!t.axis){const n=Math.abs(e)*Qt-Math.abs(i);n<0?t.axis="angle":n>0&&(t.axis="scale")}}restrictToAxis(t){this.config.lockDirection&&(this.state.axis==="scale"?t[1]=0:this.state.axis==="angle"&&(t[0]=0))}cancel(){const t=this.state;t.canceled||setTimeout(()=>{t.canceled=!0,t._active=!1,this.compute(),this.emit()},0)}touchStart(t){this.ctrl.setEventIds(t);const e=this.state,i=this.ctrl.touchIds;if(e._active&&e._touchIds.every(r=>i.has(r))||i.size<2)return;this.start(t),e._touchIds=Array.from(i).slice(0,2);const n=F(t,e._touchIds);n&&this.pinchStart(t,n)}pointerStart(t){if(t.buttons!=null&&t.buttons%2!==1)return;this.ctrl.setEventIds(t),t.target.setPointerCapture(t.pointerId);const e=this.state,i=e._pointerEvents,n=this.ctrl.pointerIds;if(e._active&&Array.from(i.keys()).every(o=>n.has(o))||(i.size<2&&i.set(t.pointerId,t),e._pointerEvents.size<2))return;this.start(t);const r=U(...Array.from(i.values()));r&&this.pinchStart(t,r)}pinchStart(t,e){const i=this.state;i.origin=e.origin,this.computeValues([e.distance,e.angle]),this.computeInitial(),this.compute(t),this.emit()}touchMove(t){if(!this.state._active)return;const e=F(t,this.state._touchIds);e&&this.pinchMove(t,e)}pointerMove(t){const e=this.state._pointerEvents;if(e.has(t.pointerId)&&e.set(t.pointerId,t),!this.state._active)return;const i=U(...Array.from(e.values()));i&&this.pinchMove(t,i)}pinchMove(t,e){const i=this.state,n=i._values[1],r=e.angle-n;let o=0;Math.abs(r)>270&&(o+=Math.sign(r)),this.computeValues([e.distance,e.angle-360*o]),i.origin=e.origin,i.turns=o,i._movement=[i._values[0]/i._initial[0]-1,i._values[1]-i._initial[1]],this.compute(t),this.emit()}touchEnd(t){this.ctrl.setEventIds(t),this.state._active&&this.state._touchIds.some(e=>!this.ctrl.touchIds.has(e))&&(this.state._active=!1,this.compute(t),this.emit())}pointerEnd(t){const e=this.state;this.ctrl.setEventIds(t);try{t.target.releasePointerCapture(t.pointerId)}catch{}e._pointerEvents.has(t.pointerId)&&e._pointerEvents.delete(t.pointerId),e._active&&e._pointerEvents.size<2&&(e._active=!1,this.compute(t),this.emit())}gestureStart(t){t.cancelable&&t.preventDefault();const e=this.state;e._active||(this.start(t),this.computeValues([t.scale,t.rotation]),e.origin=[t.clientX,t.clientY],this.compute(t),this.emit())}gestureMove(t){if(t.cancelable&&t.preventDefault(),!this.state._active)return;const e=this.state;this.computeValues([t.scale,t.rotation]),e.origin=[t.clientX,t.clientY];const i=e._movement;e._movement=[t.scale-1,t.rotation],e._delta=u.sub(e._movement,i),this.compute(t),this.emit()}gestureEnd(t){this.state._active&&(this.state._active=!1,this.compute(t),this.emit())}wheel(t){const e=this.config.modifierKey;e&&!t[e]||(this.state._active?this.wheelChange(t):this.wheelStart(t),this.timeoutStore.add("wheelEnd",this.wheelEnd.bind(this)))}wheelStart(t){this.start(t),this.wheelChange(t)}wheelChange(t){"uv"in t||(t.cancelable&&t.preventDefault(),process.env.NODE_ENV==="development"&&!t.defaultPrevented&&console.warn("[@use-gesture]: To properly support zoom on trackpads, try using the `target` option.\n\nThis message will only appear in development mode."));const i=this.state;i._delta=[-ut(t)[1]/Zt*i.offset[0],0],u.addTo(i._movement,i._delta),ft(i),this.state.origin=[t.clientX,t.clientY],this.compute(t),this.emit()}wheelEnd(){this.state._active&&(this.state._active=!1,this.compute(),this.emit())}bind(t){const e=this.config.device;e&&(t(e,"start",this[e+"Start"].bind(this)),t(e,"change",this[e+"Move"].bind(this)),t(e,"end",this[e+"End"].bind(this)),t(e,"cancel",this[e+"End"].bind(this)),t("lostPointerCapture","",this[e+"End"].bind(this))),this.config.pinchOnWheel&&t("wheel","",this.wheel.bind(this),{passive:!1})}}const ee=f(f({},B),{},{device(s,t,{shared:e,pointer:{touch:i=!1}={}}){if(e.target&&!m.touch&&m.gesture)return"gesture";if(m.touch&&i)return"touch";if(m.touchscreen){if(m.pointer)return"pointer";if(m.touch)return"touch"}},bounds(s,t,{scaleBounds:e={},angleBounds:i={}}){const n=o=>{const c=Z(P(e,o),{min:-1/0,max:1/0});return[c.min,c.max]},r=o=>{const c=Z(P(i,o),{min:-1/0,max:1/0});return[c.min,c.max]};return typeof e!="function"&&typeof i!="function"?[n(),r()]:o=>[n(o),r(o)]},threshold(s,t,e){return this.lockDirection=e.axis==="lock",u.toVector(s,this.lockDirection?[.1,3]:0)},modifierKey(s){return s===void 0?"ctrlKey":s},pinchOnWheel(s=!0){return s}});class se extends S{constructor(...t){super(...t),d(this,"ingKey","moving")}move(t){this.config.mouseOnly&&t.pointerType!=="mouse"||(this.state._active?this.moveChange(t):this.moveStart(t),this.timeoutStore.add("moveEnd",this.moveEnd.bind(this)))}moveStart(t){this.start(t),this.computeValues(T(t)),this.compute(t),this.computeInitial(),this.emit()}moveChange(t){if(!this.state._active)return;const e=T(t),i=this.state;i._delta=u.sub(e,i._values),u.addTo(i._movement,i._delta),this.computeValues(e),this.compute(t),this.emit()}moveEnd(t){this.state._active&&(this.state._active=!1,this.compute(t),this.emit())}bind(t){t("pointer","change",this.move.bind(this)),t("pointer","leave",this.moveEnd.bind(this))}}const ie=f(f({},y),{},{mouseOnly:(s=!0)=>s});class ne extends S{constructor(...t){super(...t),d(this,"ingKey","scrolling")}scroll(t){this.state._active||this.start(t),this.scrollChange(t),this.timeoutStore.add("scrollEnd",this.scrollEnd.bind(this))}scrollChange(t){t.cancelable&&t.preventDefault();const e=this.state,i=Ct(t);e._delta=u.sub(i,e._values),u.addTo(e._movement,e._delta),this.computeValues(i),this.compute(t),this.emit()}scrollEnd(){this.state._active&&(this.state._active=!1,this.compute(),this.emit())}bind(t){t("scroll","",this.scroll.bind(this))}}const re=y;class oe extends S{constructor(...t){super(...t),d(this,"ingKey","wheeling")}wheel(t){this.state._active||this.start(t),this.wheelChange(t),this.timeoutStore.add("wheelEnd",this.wheelEnd.bind(this))}wheelChange(t){const e=this.state;e._delta=ut(t),u.addTo(e._movement,e._delta),ft(e),this.compute(t),this.emit()}wheelEnd(){this.state._active&&(this.state._active=!1,this.compute(),this.emit())}bind(t){t("wheel","",this.wheel.bind(this))}}const ae=y;class ce extends S{constructor(...t){super(...t),d(this,"ingKey","hovering")}enter(t){this.config.mouseOnly&&t.pointerType!=="mouse"||(this.start(t),this.computeValues(T(t)),this.compute(t),this.emit())}leave(t){if(this.config.mouseOnly&&t.pointerType!=="mouse")return;const e=this.state;if(!e._active)return;e._active=!1;const i=T(t);e._movement=e._delta=u.sub(i,e._values),this.computeValues(i),this.compute(t),e.delta=e.movement,this.emit()}bind(t){t("pointer","enter",this.enter.bind(this)),t("pointer","leave",this.leave.bind(this))}}const ue=f(f({},y),{},{mouseOnly:(s=!0)=>s}),N=new Map,M=new Map;function _(s){N.set(s.key,s.engine),M.set(s.key,s.resolver)}const j={key:"drag",engine:Bt,resolver:lt},H={key:"hover",engine:ce,resolver:ue},Y={key:"move",engine:se,resolver:ie},G={key:"pinch",engine:te,resolver:ee},W={key:"scroll",engine:ne,resolver:re},X={key:"wheel",engine:oe,resolver:ae};function he(s,t){if(s==null)return{};var e={},i=Object.keys(s),n,r;for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&(e[n]=s[n]);return e}function le(s,t){if(s==null)return{};var e=he(s,t),i,n;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(s);for(n=0;n<r.length;n++)i=r[n],!(t.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(s,i)&&(e[i]=s[i])}return e}const fe={target(s){if(s)return()=>"current"in s?s.current:s},enabled(s=!0){return s},window(s=m.isBrowser?window:void 0){return s},eventOptions({passive:s=!0,capture:t=!1}={}){return{passive:s,capture:t}},transform(s){return s}},de=["target","eventOptions","window","enabled","transform"];function x(s={},t){const e={};for(const[i,n]of Object.entries(t))switch(typeof n){case"function":if(process.env.NODE_ENV==="development"){const r=n.call(e,s[i],i,s);Number.isNaN(r)||(e[i]=r)}else e[i]=n.call(e,s[i],i,s);break;case"object":e[i]=x(s[i],n);break;case"boolean":n&&(e[i]=s[i]);break}return e}function pe(s,t,e={}){const i=s,{target:n,eventOptions:r,window:o,enabled:c,transform:l}=i,h=le(i,de);if(e.shared=x({target:n,eventOptions:r,window:o,enabled:c,transform:l},fe),t){const a=M.get(t);e[t]=x(f({shared:e.shared},h),a)}else for(const a in h){const g=M.get(a);if(g)e[a]=x(f({shared:e.shared},h[a]),g);else if(process.env.NODE_ENV==="development"&&!["drag","pinch","scroll","wheel","move","hover"].includes(a)){if(a==="domTarget")throw Error("[@use-gesture]: `domTarget` option has been renamed to `target`.");console.warn(`[@use-gesture]: Unknown config key \`${a}\` was used. Please read the documentation for further information.`)}}return e}class dt{constructor(t,e){d(this,"_listeners",new Set),this._ctrl=t,this._gestureKey=e}add(t,e,i,n,r){const o=this._listeners,c=Ot(e,i),l=this._gestureKey?this._ctrl.config[this._gestureKey].eventOptions:{},h=f(f({},l),r);t.addEventListener(c,n,h);const a=()=>{t.removeEventListener(c,n,h),o.delete(a)};return o.add(a),a}clean(){this._listeners.forEach(t=>t()),this._listeners.clear()}}class me{constructor(){d(this,"_timeouts",new Map)}add(t,e,i=140,...n){this.remove(t),this._timeouts.set(t,window.setTimeout(e,i,...n))}remove(t){const e=this._timeouts.get(t);e&&window.clearTimeout(e)}clean(){this._timeouts.forEach(t=>void window.clearTimeout(t)),this._timeouts.clear()}}class ge{constructor(t){d(this,"gestures",new Set),d(this,"_targetEventStore",new dt(this)),d(this,"gestureEventStores",{}),d(this,"gestureTimeoutStores",{}),d(this,"handlers",{}),d(this,"config",{}),d(this,"pointerIds",new Set),d(this,"touchIds",new Set),d(this,"state",{shared:{shiftKey:!1,metaKey:!1,ctrlKey:!1,altKey:!1}}),_e(this,t)}setEventIds(t){if(C(t))return this.touchIds=new Set(Mt(t)),this.touchIds;if("pointerId"in t)return t.type==="pointerup"||t.type==="pointercancel"?this.pointerIds.delete(t.pointerId):t.type==="pointerdown"&&this.pointerIds.add(t.pointerId),this.pointerIds}applyHandlers(t,e){this.handlers=t,this.nativeHandlers=e}applyConfig(t,e){this.config=pe(t,e,this.config)}clean(){this._targetEventStore.clean();for(const t of this.gestures)this.gestureEventStores[t].clean(),this.gestureTimeoutStores[t].clean()}effect(){return this.config.shared.target&&this.bind(),()=>this._targetEventStore.clean()}bind(...t){const e=this.config.shared,i={};let n;if(!(e.target&&(n=e.target(),!n))){if(e.enabled){for(const o of this.gestures){const c=this.config[o],l=rt(i,c.eventOptions,!!n);if(c.enabled){const h=N.get(o);new h(this,t,o).bind(l)}}const r=rt(i,e.eventOptions,!!n);for(const o in this.nativeHandlers)r(o,"",c=>this.nativeHandlers[o](f(f({},this.state.shared),{},{event:c,args:t})),void 0,!0)}for(const r in i)i[r]=Vt(...i[r]);if(!n)return i;for(const r in i){const{device:o,capture:c,passive:l}=kt(r);this._targetEventStore.add(n,o,"",i[r],{capture:c,passive:l})}}}}function w(s,t){s.gestures.add(t),s.gestureEventStores[t]=new dt(s,t),s.gestureTimeoutStores[t]=new me}function _e(s,t){t.drag&&w(s,"drag"),t.wheel&&w(s,"wheel"),t.scroll&&w(s,"scroll"),t.move&&w(s,"move"),t.pinch&&w(s,"pinch"),t.hover&&w(s,"hover")}const rt=(s,t,e)=>(i,n,r,o={},c=!1)=>{var l,h;const a=(l=o.capture)!==null&&l!==void 0?l:t.capture,g=(h=o.passive)!==null&&h!==void 0?h:t.passive;let p=c?i:Dt(i,n,a);e&&g&&(p+="Passive"),s[p]=s[p]||[],s[p].push(r)},ve=/^on(Drag|Wheel|Scroll|Move|Pinch|Hover)/;function ye(s){const t={},e={},i=new Set;for(let n in s)ve.test(n)?(i.add(RegExp.lastMatch),e[n]=s[n]):t[n]=s[n];return[e,t,i]}function E(s,t,e,i,n,r){if(!s.has(e))return;if(!N.has(i)){process.env.NODE_ENV==="development"&&console.warn(`[@use-gesture]: You've created a custom handler that that uses the \`${i}\` gesture but isn't properly configured.

Please add \`${i}Action\` when creating your handler.`);return}const o=e+"Start",c=e+"End",l=h=>{let a;return h.first&&o in t&&t[o](h),e in t&&(a=t[e](h)),h.last&&c in t&&t[c](h),a};n[i]=l,r[i]=r[i]||{}}function be(s,t){const[e,i,n]=ye(s),r={};return E(n,e,"onDrag","drag",r,t),E(n,e,"onWheel","wheel",r,t),E(n,e,"onScroll","scroll",r,t),E(n,e,"onPinch","pinch",r,t),E(n,e,"onMove","move",r,t),E(n,e,"onHover","hover",r,t),{handlers:r,config:t,nativeHandlers:i}}function b(s,t={},e,i){const n=V.useMemo(()=>new ge(s),[]);if(n.applyHandlers(s,i),n.applyConfig(t,e),V.useEffect(n.effect.bind(n)),V.useEffect(()=>n.clean.bind(n),[]),t.target===void 0)return n.bind.bind(n)}function we(s,t){return _(j),b({drag:s},t||{},"drag")}function Ee(s,t){return _(G),b({pinch:s},t||{},"pinch")}function Te(s,t){return _(X),b({wheel:s},t||{},"wheel")}function Se(s,t){return _(W),b({scroll:s},t||{},"scroll")}function Ie(s,t){return _(Y),b({move:s},t||{},"move")}function De(s,t){return _(H),b({hover:s},t||{},"hover")}function pt(s){return s.forEach(_),function(e,i){const{handlers:n,nativeHandlers:r,config:o}=be(e,i||{});return b(n,o,void 0,r)}}function Ae(s,t){return pt([j,G,W,X,Y,H])(s,t||{})}exports.ConfigResolverMap=M;exports.EngineMap=N;exports.createUseGesture=pt;exports.dragAction=j;exports.hoverAction=H;exports.moveAction=Y;exports.pinchAction=G;exports.registerAction=_;exports.rubberbandIfOutOfBounds=K;exports.scrollAction=W;exports.useDrag=we;exports.useGesture=Ae;exports.useHover=De;exports.useMove=Ie;exports.usePinch=Ee;exports.useScroll=Se;exports.useWheel=Te;exports.wheelAction=X;