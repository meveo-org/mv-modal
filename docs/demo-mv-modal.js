/*! For license information please see demo-mv-modal.js.LICENSE.txt */
(()=>{"use strict";const e=window,t=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),n=new WeakMap;class f{constructor(e,t,n){if(this._$cssResult$=!0,n!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const o=this.t;if(t&&void 0===e){const t=void 0!==o&&1===o.length;t&&(e=n.get(o)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&n.set(o,e))}return e}toString(){return this.cssText}}const a=(e,...t)=>{const n=1===e.length?e[0]:t.reduce(((t,o,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[n+1]),e[0]);return new f(n,e,o)},r=t?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return(e=>new f("string"==typeof e?e:e+"",void 0,o))(t)})(e):e;var c;const i=window,s=i.trustedTypes,l=s?s.emptyScript:"",b=i.reactiveElementPolyfillSupport,d={toAttribute(e,t){switch(t){case Boolean:e=e?l:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=null!==e;break;case Number:o=null===e?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch(e){o=null}}return o}},h=(e,t)=>t!==e&&(t==t||e==e),u={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:h};class p extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,o)=>{const n=this._$Ep(o,t);void 0!==n&&(this._$Ev.set(n,o),e.push(n))})),e}static createProperty(e,t=u){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const o="symbol"==typeof e?Symbol():"__"+e,n=this.getPropertyDescriptor(e,o,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,o){return{get(){return this[t]},set(n){const f=this[e];this[t]=n,this.requestUpdate(e,f,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||u}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const o of t)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const e of o)t.unshift(r(e))}else void 0!==e&&t.push(r(e));return t}static _$Ep(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,o;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(o=e.hostConnected)||void 0===o||o.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var o;const n=null!==(o=this.shadowRoot)&&void 0!==o?o:this.attachShadow(this.constructor.shadowRootOptions);return((o,n)=>{t?o.adoptedStyleSheets=n.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):n.forEach((t=>{const n=document.createElement("style"),f=e.litNonce;void 0!==f&&n.setAttribute("nonce",f),n.textContent=t.cssText,o.appendChild(n)}))})(n,this.constructor.elementStyles),n}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t,o=u){var n;const f=this.constructor._$Ep(e,o);if(void 0!==f&&!0===o.reflect){const a=(void 0!==(null===(n=o.converter)||void 0===n?void 0:n.toAttribute)?o.converter:d).toAttribute(t,o.type);this._$El=e,null==a?this.removeAttribute(f):this.setAttribute(f,a),this._$El=null}}_$AK(e,t){var o;const n=this.constructor,f=n._$Ev.get(e);if(void 0!==f&&this._$El!==f){const e=n.getPropertyOptions(f),a="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(o=e.converter)||void 0===o?void 0:o.fromAttribute)?e.converter:d;this._$El=f,this[f]=a.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,o){let n=!0;void 0!==e&&(((o=o||this.constructor.getPropertyOptions(e)).hasChanged||h)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===o.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,o))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(o)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(o)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}var m;p.finalized=!0,p.elementProperties=new Map,p.elementStyles=[],p.shadowRootOptions={mode:"open"},null==b||b({ReactiveElement:p}),(null!==(c=i.reactiveElementVersions)&&void 0!==c?c:i.reactiveElementVersions=[]).push("1.6.1");const g=window,v=g.trustedTypes,w=v?v.createPolicy("lit-html",{createHTML:e=>e}):void 0,y=`lit$${(Math.random()+"").slice(9)}$`,k="?"+y,x=`<${k}>`,$=document,_=(e="")=>$.createComment(e),q=e=>null===e||"object"!=typeof e&&"function"!=typeof e,A=Array.isArray,z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,S=/-->/g,E=/>/g,j=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),C=/'/g,M=/"/g,O=/^(?:script|style|textarea|title)$/i,P=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),U=P(1),T=(P(2),Symbol.for("lit-noChange")),H=Symbol.for("lit-nothing"),B=new WeakMap,I=$.createTreeWalker($,129,null,!1),N=(e,t)=>{const o=e.length-1,n=[];let f,a=2===t?"<svg>":"",r=z;for(let t=0;t<o;t++){const o=e[t];let c,i,s=-1,l=0;for(;l<o.length&&(r.lastIndex=l,i=r.exec(o),null!==i);)l=r.lastIndex,r===z?"!--"===i[1]?r=S:void 0!==i[1]?r=E:void 0!==i[2]?(O.test(i[2])&&(f=RegExp("</"+i[2],"g")),r=j):void 0!==i[3]&&(r=j):r===j?">"===i[0]?(r=null!=f?f:z,s=-1):void 0===i[1]?s=-2:(s=r.lastIndex-i[2].length,c=i[1],r=void 0===i[3]?j:'"'===i[3]?M:C):r===M||r===C?r=j:r===S||r===E?r=z:(r=j,f=void 0);const b=r===j&&e[t+1].startsWith("/>")?" ":"";a+=r===z?o+x:s>=0?(n.push(c),o.slice(0,s)+"$lit$"+o.slice(s)+y+b):o+y+(-2===s?(n.push(void 0),t):b)}const c=a+(e[o]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==w?w.createHTML(c):c,n]};class R{constructor({strings:e,_$litType$:t},o){let n;this.parts=[];let f=0,a=0;const r=e.length-1,c=this.parts,[i,s]=N(e,t);if(this.el=R.createElement(i,o),I.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(n=I.nextNode())&&c.length<r;){if(1===n.nodeType){if(n.hasAttributes()){const e=[];for(const t of n.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(y)){const o=s[a++];if(e.push(t),void 0!==o){const e=n.getAttribute(o.toLowerCase()+"$lit$").split(y),t=/([.?@])?(.*)/.exec(o);c.push({type:1,index:f,name:t[2],strings:e,ctor:"."===t[1]?W:"?"===t[1]?Y:"@"===t[1]?J:V})}else c.push({type:6,index:f})}for(const t of e)n.removeAttribute(t)}if(O.test(n.tagName)){const e=n.textContent.split(y),t=e.length-1;if(t>0){n.textContent=v?v.emptyScript:"";for(let o=0;o<t;o++)n.append(e[o],_()),I.nextNode(),c.push({type:2,index:++f});n.append(e[t],_())}}}else if(8===n.nodeType)if(n.data===k)c.push({type:2,index:f});else{let e=-1;for(;-1!==(e=n.data.indexOf(y,e+1));)c.push({type:7,index:f}),e+=y.length-1}f++}}static createElement(e,t){const o=$.createElement("template");return o.innerHTML=e,o}}function D(e,t,o=e,n){var f,a,r,c;if(t===T)return t;let i=void 0!==n?null===(f=o._$Co)||void 0===f?void 0:f[n]:o._$Cl;const s=q(t)?void 0:t._$litDirective$;return(null==i?void 0:i.constructor)!==s&&(null===(a=null==i?void 0:i._$AO)||void 0===a||a.call(i,!1),void 0===s?i=void 0:(i=new s(e),i._$AT(e,o,n)),void 0!==n?(null!==(r=(c=o)._$Co)&&void 0!==r?r:c._$Co=[])[n]=i:o._$Cl=i),void 0!==i&&(t=D(e,i._$AS(e,t.values),i,n)),t}class L{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:o},parts:n}=this._$AD,f=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:$).importNode(o,!0);I.currentNode=f;let a=I.nextNode(),r=0,c=0,i=n[0];for(;void 0!==i;){if(r===i.index){let t;2===i.type?t=new F(a,a.nextSibling,this,e):1===i.type?t=new i.ctor(a,i.name,i.strings,this,e):6===i.type&&(t=new K(a,this,e)),this.u.push(t),i=n[++c]}r!==(null==i?void 0:i.index)&&(a=I.nextNode(),r++)}return f}p(e){let t=0;for(const o of this.u)void 0!==o&&(void 0!==o.strings?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class F{constructor(e,t,o,n){var f;this.type=2,this._$AH=H,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=n,this._$Cm=null===(f=null==n?void 0:n.isConnected)||void 0===f||f}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=D(this,e,t),q(e)?e===H||null==e||""===e?(this._$AH!==H&&this._$AR(),this._$AH=H):e!==this._$AH&&e!==T&&this.g(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>A(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==H&&q(this._$AH)?this._$AA.nextSibling.data=e:this.T($.createTextNode(e)),this._$AH=e}$(e){var t;const{values:o,_$litType$:n}=e,f="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=R.createElement(n.h,this.options)),n);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===f)this._$AH.p(o);else{const e=new L(f,this),t=e.v(this.options);e.p(o),this.T(t),this._$AH=e}}_$AC(e){let t=B.get(e.strings);return void 0===t&&B.set(e.strings,t=new R(e)),t}k(e){A(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,n=0;for(const f of e)n===t.length?t.push(o=new F(this.O(_()),this.O(_()),this,this.options)):o=t[n],o._$AI(f),n++;n<t.length&&(this._$AR(o&&o._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var o;for(null===(o=this._$AP)||void 0===o||o.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cm=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class V{constructor(e,t,o,n,f){this.type=1,this._$AH=H,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=f,o.length>2||""!==o[0]||""!==o[1]?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=H}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,o,n){const f=this.strings;let a=!1;if(void 0===f)e=D(this,e,t,0),a=!q(e)||e!==this._$AH&&e!==T,a&&(this._$AH=e);else{const n=e;let r,c;for(e=f[0],r=0;r<f.length-1;r++)c=D(this,n[o+r],t,r),c===T&&(c=this._$AH[r]),a||(a=!q(c)||c!==this._$AH[r]),c===H?e=H:e!==H&&(e+=(null!=c?c:"")+f[r+1]),this._$AH[r]=c}a&&!n&&this.j(e)}j(e){e===H?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class W extends V{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===H?void 0:e}}const X=v?v.emptyScript:"";class Y extends V{constructor(){super(...arguments),this.type=4}j(e){e&&e!==H?this.element.setAttribute(this.name,X):this.element.removeAttribute(this.name)}}class J extends V{constructor(e,t,o,n,f){super(e,t,o,n,f),this.type=5}_$AI(e,t=this){var o;if((e=null!==(o=D(this,e,t,0))&&void 0!==o?o:H)===T)return;const n=this._$AH,f=e===H&&n!==H||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,a=e!==H&&(n===H||f);f&&this.element.removeEventListener(this.name,this,n),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,o;"function"==typeof this._$AH?this._$AH.call(null!==(o=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==o?o:this.element,e):this._$AH.handleEvent(e)}}class K{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){D(this,e)}}const Z=g.litHtmlPolyfillSupport;var G,Q;null==Z||Z(R,F),(null!==(m=g.litHtmlVersions)&&void 0!==m?m:g.litHtmlVersions=[]).push("2.6.1");class ee extends p{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const o=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=o.firstChild),o}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,o)=>{var n,f;const a=null!==(n=null==o?void 0:o.renderBefore)&&void 0!==n?n:t;let r=a._$litPart$;if(void 0===r){const e=null!==(f=null==o?void 0:o.renderBefore)&&void 0!==f?f:null;a._$litPart$=r=new F(t.insertBefore(_(),e),e,void 0,null!=o?o:{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return T}}ee.finalized=!0,ee._$litElement$=!0,null===(G=globalThis.litElementHydrateSupport)||void 0===G||G.call(globalThis,{LitElement:ee});const te=globalThis.litElementPolyfillSupport;null==te||te({LitElement:ee}),(null!==(Q=globalThis.litElementVersions)&&void 0!==Q?Q:globalThis.litElementVersions=[]).push("3.2.2"),customElements.define("mv-button",class extends ee{static get properties(){return{visible:{type:Boolean,attribute:!0},selected:{type:Boolean,attribute:!0},disabled:{type:Boolean,attribute:!0},type:{type:String,attribute:!0},"button-style":{type:String,attribute:!0},fill:{type:String,attribute:!0},theme:{type:String,attribute:!0}}}static get styles(){return a`
      :host {
        --font-size: var(--mv-button-font-size, 1rem);
        --circle-button-size: var(--mv-button-circle-button-size, 55px);
        --button-margin: var(--mv-button-margin, 5px);
        --button-padding: var(--mv-button-padding, 10px 30px);
        --button-min-width: var(--mv-button-min-width, 120px);
        --button-max-width: var(--mv-button-max-width);
        --button-width: var(--mv-button-width);
        --rounded-radius: var(--mv-button-rounded-radius, 50px);
        --color: var(--mv-button-color, #ffffff);
        --button-color: var(--mv-button-custom-color);
        --button-hover-color: var(--mv-button-hover-custom-color)
        --hover-color: var(--mv-button-custom-hover-color);
        --circle-button-border: var(--mv-circle-button-border, none);
        --button-disabled-border-color: var(--mv-button-disabled-border-color, #bbbfce !important)
      }
      button {
        font-family: var(--font-family, Arial);
        min-width: var(--button-min-width);
        max-width: var(--button-max-width);
        width: var(--button-width);
        font-size: var(--font-size);
        margin: var(--button-margin);
      }
      button.success:disabled {
        background-color: var(--mv-button-disabled-background, #eaebf0);
        z-index: 100;
        color: #bbbfce !important;
        border-color: --button-disabled-border-color;
      }
      button.error:disabled {
        background-color: var(--mv-button-disabled-background, #eaebf0);
        z-index: 100;
        color: #bbbfce !important;
        border-color: --button-disabled-border-color;
      }
      button.info:disabled {
        background-color: var(--mv-button-disabled-background, #eaebf0);
        z-index: 100;
        color: #bbbfce !important;
        border-color: --button-disabled-border-color;
      }
      button.cancel:disabled {
        background-color: var(--mv-button-disabled-background, #eaebf0);
        z-index: 100;
        color:  #bbbfce !important;
        border-color: --button-disabled-border-color;
      }
      button:focus {
        outline: none;
      }
      button:hover:not([disabled]) {
        cursor: pointer;
      }
      button.circle {
        min-width: var(--circle-button-size);
        max-width: var(--button-max-width);
        width: var(--button-width);
        height: var(--circle-button-size);
        background-color: var(--mv-button-circle-background, #eaebf0);
        color: var(--mv-button-circle-color, #80828c);
        border-radius: 50%;
        box-shadow: unset;
        border: var(--circle-button-border);
      }
      button.circle:hover:not([disabled]) {
        cursor: pointer;
        color: var(--button-hover-color, #1d9bc9);
        border: var(--mv-button-border,1px solid var(--button-color, #1d9bc9));
        background-color: var(--mv-button-custom-hover-color, #ffffff);
        box-shadow: var(--mv-button-box-shadow,
          inset 0px 0px 9px 0px rgba(29, 155, 201, 0.3)
          );
      }
      button.circle.selected,
      button.circle.selected:disabled {
        color: #ffffff;
        background-color: var(--button-color, #008fc3);
        box-shadow: 0px 0px 10px 0px rgba(0, 143, 195, 0.6);
        z-index: 100;
      }
      button.circle:disabled {
        background-color: var(--mv-button-circle-background, #eaebf0);
        color: #cacbd2;
        z-index: 100;
      }
      button.default {
        border-width: 1px;
        border-style: solid;
        border-radius: 5px;
        box-shadow: 0 2px 2px 0 rgba(93, 94, 97, 0.2);
        padding: var(--button-padding);
      }
      button.default.success {
        color: var(--color);
        border-color: var(--button-color, #54ca95);
        background-color: var(--button-color, #54ca95);
      }
      button.default.success:hover:not([disabled]) {
        border-color: var(--hover-color, #0ca361);
        background-color: var(--hover-color, #0ca361);
      }
      button.default.error {
        color: #ffffff;
        border-color: var(--button-color, #dd5c55);
        background-color: var(--button-color, #dd5c55);
      }
      button.default.error:hover:not([disabled]) {
        border-color: var(--hover-color, #e71919);
        background-color: var(--hover-color, #e71919);
      }
      button.default.info {
        color: #ffffff;
        border-color: var(--button-color, #3999c1);
        background-color: var(--button-color, #3999c1);
      }
      button.default.info:hover:not([disabled]) {
        border-color: var(--hover-color, #007fad);
        background-color: var(--hover-color, #007fad);
      }
      button.default.cancel {
        color: #ffffff;
        border-color: var(--button-color, #bbbfce);
        background-color: var(--button-color, #bbbfce);
      }
      button.default.cancel:hover:not([disabled]) {
        border-color: var(--hover-color, #9297a6);
        background-color: var(--hover-color, #9297a6);
      }
      button.outline {
        border-width: 1px;
        border-style: solid;
        border-radius: 5px;
        box-shadow: 0 2px 2px 0 rgba(93, 94, 97, 0.2);
        padding: var(--button-padding);
        background: transparent;
      }
      button.outline.success {
        color: var(--button-color, #54ca95);
        border-color: var(--button-color, #54ca95);
      }
      button.outline.success:hover:not([disabled]) {
        color: #ffffff;
        border-color: var(--hover-color, #0ca361);
        background-color: var(--hover-color, #0ca361);
      }
      button.outline.error {
        color: var(--button-color, #dd5c55);
        border-color: var(--button-color, #dd5c55);
      }
      button.outline.error:hover:not([disabled]) {
        color: #ffffff;
        border-color: var(--hover-color, #e71919);
        background-color: var(--hover-color, #e71919);
      }
      button.outline.info {
        color: var(--button-color, #3999c1);
        border-color: var(--button-color, #3999c1);
      }
      button.outline.info:hover:not([disabled]) {
        color: #ffffff;
        border-color: var(--hover-color, #007fad);
        background-color: var(--hover-color, #007fad);
      }
      button.outline.cancel {
        color: var(--button-color, #bbbfce);
        border-color: var(--button-color, #bbbfce);
      }
      button.outline.cancel:hover:not([disabled]) {
        color: #ffffff;
        border-color: var(--hover-color, #9297a6);
        background-color: var(--hover-color, #9297a6);
      }
      button.outline.success.selected,
      button.outline.success.selected:disabled {
        color: #ffffff;
        background-color: var(--button-color, #0ca361);
      }
      button.outline.error.selected,
      button.outline.error.selected:disabled {
        color: #ffffff;
        background-color: var(--button-color, #e71919);
      }
      button.outline.info.selected,
      button.outline.info.selected:disabled {
        color: #ffffff;
        background-color: var(--button-color, #3999c1);
      }
      button.outline.cancel.selected,
      button.outline.cancel.selected:disabled {
        color: #ffffff;
        background-color: var(--button-color, #9297a6);
      }
      button.rounded {
        border-width: 1px;
        border-style: solid;
        border-radius: var(--rounded-radius);
        box-shadow: 0 2px 2px 0 rgba(93, 94, 97, 0.2);
        padding: var(--button-padding);
        background: transparent;
      }
      button.rounded.success {
        color: var(--button-color, #54ca95);
        border-color: var(--button-color, #54ca95);
      }
      button.rounded.success:hover:not([disabled]) {
        color: #ffffff;
        border-color: var(--hover-color, #0ca361);
        background-color: var(--hover-color, #0ca361);
      }
      button.rounded.error {
        color: var(--button-color, #dd5c55);
        border-color: var(--button-color, #dd5c55);
      }
      button.rounded.error:hover:not([disabled]) {
        color: #ffffff;
        border-color: var(--hover-color, #e71919);
        background-color: var(--hover-color, #e71919);
      }
      button.rounded.info {
        color: var(--button-color, #3999c1);
        border-color: var(--button-color, #3999c1);
      }
      button.rounded.info:hover:not([disabled]) {
        color: #ffffff;
        border-color: var(--hover-color, #007fad);
        background-color: var(--hover-color, #007fad);
      }
      button.rounded.cancel {
        color: var(--button-color, #bbbfce);
        border-color: var(--button-color, #bbbfce);
      }
      button.rounded.cancel:hover:not([disabled]) {
        color: #ffffff;
        border-color: var(--hover-color, #9297a6);
        background-color: var(--hover-color, #9297a6);
      }
    `}constructor(){super(),this.visible=!0,this.selected=!1,this.disabled=!1,this.type="default",this["button-style"]="success",this.theme="light"}render(){const e="round"!==this.type?` ${this["button-style"]}`:"",t=this.selected?" selected":"",o=`${this.type}${e}${t}`;return this.visible?U`
          <button
            class="${o} ${this.theme}"
            @click="${this.handleClick}"
            ?disabled="${this.disabled}"
          >
            <slot> </slot>
          </button>
        `:U``}handleClick=()=>{this.dispatchEvent(new CustomEvent("button-clicked"))}});const oe=["ad","address-book","address-card","adjust","air-freshener","align-center","align-justify","align-left","align-right","allergies","ambulance","american-sign-language-interpreting","anchor","angle-double-down","angle-double-left","angle-double-right","angle-double-up","angle-down","angle-left","angle-right","angle-up","angry","ankh","apple-alt","archive","archway","arrow-alt-circle-down","arrow-alt-circle-left","arrow-alt-circle-right","arrow-alt-circle-up","arrow-circle-down","arrow-circle-left","arrow-circle-right","arrow-circle-up","arrow-down","arrow-left","arrow-right","arrow-up","arrows-alt","arrows-alt-h","arrows-alt-v","assistive-listening-systems","asterisk","at","atlas","atom","audio-description","award","baby","baby-carriage","backspace","backward","bacon","balance-scale","balance-scale-left","balance-scale-right","ban","band-aid","barcode","bars","baseball-ball","basketball-ball","bath","battery-empty","battery-full","battery-half","battery-quarter","battery-three-quarters","bed","beer","bell","bell-slash","bezier-curve","bible","bicycle","biking","binoculars","biohazard","birthday-cake","blender","blender-phone","blind","blog","bold","bolt","bomb","bone","bong","book","book-dead","book-medical","book-open","book-reader","bookmark","border-all","border-none","border-style","bowling-ball","box","box-open","boxes","braille","brain","bread-slice","briefcase","briefcase-medical","broadcast-tower","broom","brush","bug","building","bullhorn","bullseye","burn","bus","bus-alt","business-time","calculator","calendar","calendar-alt","calendar-check","calendar-day","calendar-minus","calendar-plus","calendar-times","calendar-week","camera","camera-retro","campground","candy-cane","cannabis","capsules","car","car-alt","car-battery","car-crash","car-side","caret-down","caret-left","caret-right","caret-square-down","caret-square-left","caret-square-right","caret-square-up","caret-up","carrot","cart-arrow-down","cart-plus","cash-register","cat","certificate","chair","chalkboard","chalkboard-teacher","charging-station","chart-area","chart-bar","chart-line","chart-pie","check","check-circle","check-double","check-square","cheese","chess","chess-bishop","chess-board","chess-king","chess-knight","chess-pawn","chess-queen","chess-rook","chevron-circle-down","chevron-circle-left","chevron-circle-right","chevron-circle-up","chevron-down","chevron-left","chevron-right","chevron-up","child","church","circle","circle-notch","city","clinic-medical","clipboard","clipboard-check","clipboard-list","clock","clone","closed-captioning","cloud","cloud-download-alt","cloud-meatball","cloud-moon","cloud-moon-rain","cloud-rain","cloud-showers-heavy","cloud-sun","cloud-sun-rain","cloud-upload-alt","cocktail","code","code-branch","coffee","cog","cogs","coins","columns","comment","comment-alt","comment-dollar","comment-dots","comment-medical","comment-slash","comments","comments-dollar","compact-disc","compass","compress","compress-arrows-alt","concierge-bell","cookie","cookie-bite","copy","copyright","couch","credit-card","crop","crop-alt","cross","crosshairs","crow","crown","crutch","cube","cubes","cut","database","deaf","democrat","desktop","dharmachakra","diagnoses","dice","dice-d20","dice-d6","dice-five","dice-four","dice-one","dice-six","dice-three","dice-two","digital-tachograph","directions","divide","dizzy","dna","dog","dollar-sign","dolly","dolly-flatbed","donate","door-closed","door-open","dot-circle","dove","download","drafting-compass","dragon","draw-polygon","drum","drum-steelpan","drumstick-bite","dumbbell","dumpster","dumpster-fire","dungeon","edit","egg","eject","ellipsis-h","ellipsis-v","envelope","envelope-open","envelope-open-text","envelope-square","equals","eraser","ethernet","euro-sign","exchange-alt","exclamation","exclamation-circle","exclamation-triangle","expand","expand-arrows-alt","external-link-alt","external-link-square-alt","eye","eye-dropper","eye-slash","fan","fast-backward","fast-forward","fax","feather","feather-alt","female","fighter-jet","file","file-alt","file-archive","file-audio","file-code","file-contract","file-csv","file-download","file-excel","file-export","file-image","file-import","file-invoice","file-invoice-dollar","file-medical","file-medical-alt","file-pdf","file-powerpoint","file-prescription","file-signature","file-upload","file-video","file-word","fill","fill-drip","film","filter","fingerprint","fire","fire-alt","fire-extinguisher","first-aid","fish","fist-raised","flag","flag-checkered","flag-usa","flask","flushed","folder","folder-minus","folder-open","folder-plus","font","football-ball","forward","frog","frown","frown-open","funnel-dollar","futbol","gamepad","gas-pump","gavel","gem","genderless","ghost","gift","gifts","glass-cheers","glass-martini","glass-martini-alt","glass-whiskey","glasses","globe","globe-africa","globe-americas","globe-asia","globe-europe","golf-ball","gopuram","graduation-cap","greater-than","greater-than-equal","grimace","grin","grin-alt","grin-beam","grin-beam-sweat","grin-hearts","grin-squint","grin-squint-tears","grin-stars","grin-tears","grin-tongue","grin-tongue-squint","grin-tongue-wink","grin-wink","grip-horizontal","grip-lines","grip-lines-vertical","grip-vertical","guitar","h-square","hamburger","hammer","hamsa","hand-holding","hand-holding-heart","hand-holding-usd","hand-lizard","hand-middle-finger","hand-paper","hand-peace","hand-point-down","hand-point-left","hand-point-right","hand-point-up","hand-pointer","hand-rock","hand-scissors","hand-spock","hands","hands-helping","handshake","hanukiah","hard-hat","hashtag","hat-cowboy","hat-cowboy-side","hat-wizard","haykal","hdd","heading","headphones","headphones-alt","headset","heart","heart-broken","heartbeat","helicopter","highlighter","hiking","hippo","history","hockey-puck","holly-berry","home","horse","horse-head","hospital","hospital-alt","hospital-symbol","hot-tub","hotdog","hotel","hourglass","hourglass-end","hourglass-half","hourglass-start","house-damage","hryvnia","i-cursor","ice-cream","icicles","icons","id-badge","id-card","id-card-alt","igloo","image","images","inbox","indent","industry","infinity","info","info-circle","italic","jedi","joint","journal-whills","kaaba","key","keyboard","khanda","kiss","kiss-beam","kiss-wink-heart","kiwi-bird","landmark","language","laptop","laptop-code","laptop-medical","laugh","laugh-beam","laugh-squint","laugh-wink","layer-group","leaf","lemon","less-than","less-than-equal","level-down-alt","level-up-alt","life-ring","lightbulb","link","lira-sign","list","list-alt","list-ol","list-ul","location-arrow","lock","lock-open","long-arrow-alt-down","long-arrow-alt-left","long-arrow-alt-right","long-arrow-alt-up","low-vision","luggage-cart","magic","magnet","mail-bulk","male","map","map-marked","map-marked-alt","map-marker","map-marker-alt","map-pin","map-signs","marker","mars","mars-double","mars-stroke","mars-stroke-h","mars-stroke-v","mask","medal","medkit","meh","meh-blank","meh-rolling-eyes","memory","menorah","mercury","meteor","microchip","microphone","microphone-alt","microphone-alt-slash","microphone-slash","microscope","minus","minus-circle","minus-square","mitten","mobile","mobile-alt","money-bill","money-bill-alt","money-bill-wave","money-bill-wave-alt","money-check","money-check-alt","monument","moon","mortar-pestle","mosque","motorcycle","mountain","mouse","mouse-pointer","mug-hot","music","network-wired","neuter","newspaper","not-equal","notes-medical","object-group","object-ungroup","oil-can","om","otter","outdent","pager","paint-brush","paint-roller","palette","pallet","paper-plane","paperclip","parachute-box","paragraph","parking","passport","pastafarianism","paste","pause","pause-circle","paw","peace","pen","pen-alt","pen-fancy","pen-nib","pen-square","pencil-alt","pencil-ruler","people-carry","pepper-hot","percent","percentage","person-booth","phone","phone-alt","phone-slash","phone-square","phone-square-alt","phone-volume","photo-video","piggy-bank","pills","pizza-slice","place-of-worship","plane","plane-arrival","plane-departure","play","play-circle","plug","plus","plus-circle","plus-square","podcast","poll","poll-h","poo","poo-storm","poop","portrait","pound-sign","power-off","pray","praying-hands","prescription","prescription-bottle","prescription-bottle-alt","print","procedures","project-diagram","puzzle-piece","qrcode","question","question-circle","quidditch","quote-left","quote-right","quran","radiation","radiation-alt","rainbow","random","receipt","record-vinyl","recycle","redo","redo-alt","registered","remove-format","reply","reply-all","republican","restroom","retweet","ribbon","ring","road","robot","rocket","route","rss","rss-square","ruble-sign","ruler","ruler-combined","ruler-horizontal","ruler-vertical","running","rupee-sign","sad-cry","sad-tear","satellite","satellite-dish","save","school","screwdriver","scroll","sd-card","search","search-dollar","search-location","search-minus","search-plus","seedling","server","shapes","share","share-alt","share-alt-square","share-square","shekel-sign","shield-alt","ship","shipping-fast","shoe-prints","shopping-bag","shopping-basket","shopping-cart","shower","shuttle-van","sign","sign-in-alt","sign-language","sign-out-alt","signal","signature","sim-card","sitemap","skating","skiing","skiing-nordic","skull","skull-crossbones","slash","sleigh","sliders-h","smile","smile-beam","smile-wink","smog","smoking","smoking-ban","sms","snowboarding","snowflake","snowman","snowplow","socks","solar-panel","sort","sort-alpha-down","sort-alpha-down-alt","sort-alpha-up","sort-alpha-up-alt","sort-amount-down","sort-amount-down-alt","sort-amount-up","sort-amount-up-alt","sort-down","sort-numeric-down","sort-numeric-down-alt","sort-numeric-up","sort-numeric-up-alt","sort-up","spa","space-shuttle","spell-check","spider","spinner","splotch","spray-can","square","square-full","square-root-alt","stamp","star","star-and-crescent","star-half","star-half-alt","star-of-david","star-of-life","step-backward","step-forward","stethoscope","sticky-note","stop","stop-circle","stopwatch","store","store-alt","stream","street-view","strikethrough","stroopwafel","subscript","subway","suitcase","suitcase-rolling","sun","superscript","surprise","swatchbook","swimmer","swimming-pool","synagogue","sync","sync-alt","syringe","table","table-tennis","tablet","tablet-alt","tablets","tachometer-alt","tag","tags","tape","tasks","taxi","teeth","teeth-open","temperature-high","temperature-low","tenge","terminal","text-height","text-width","th","th-large","th-list","theater-masks","thermometer","thermometer-empty","thermometer-full","thermometer-half","thermometer-quarter","thermometer-three-quarters","thumbs-down","thumbs-up","thumbtack","ticket-alt","times","times-circle","tint","tint-slash","tired","toggle-off","toggle-on","toilet","toilet-paper","toolbox","tools","tooth","torah","torii-gate","tractor","trademark","traffic-light","train","tram","transgender","transgender-alt","trash","trash-alt","trash-restore","trash-restore-alt","tree","trophy","truck","truck-loading","truck-monster","truck-moving","truck-pickup","tshirt","tty","tv","umbrella","umbrella-beach","underline","undo","undo-alt","universal-access","university","unlink","unlock","unlock-alt","upload","user","user-alt","user-alt-slash","user-astronaut","user-check","user-circle","user-clock","user-cog","user-edit","user-friends","user-graduate","user-injured","user-lock","user-md","user-minus","user-ninja","user-nurse","user-plus","user-secret","user-shield","user-slash","user-tag","user-tie","user-times","users","users-cog","utensil-spoon","utensils","vector-square","venus","venus-double","venus-mars","vial","vials","video","video-slash","vihara","voicemail","volleyball-ball","volume-down","volume-mute","volume-off","volume-up","vote-yea","vr-cardboard","walking","wallet","warehouse","water","wave-square","weight","weight-hanging","wheelchair","wifi","wind","window-close","window-maximize","window-minimize","window-restore","wine-bottle","wine-glass","wine-glass-alt","won-sign","wrench","x-ray","yen-sign","yin-yang"],ne=["address-book","address-card","angry","arrow-alt-circle-down","arrow-alt-circle-left","arrow-alt-circle-right","arrow-alt-circle-up","bell","bell-slash","bookmark","building","calendar","calendar-alt","calendar-check","calendar-minus","calendar-plus","calendar-times","caret-square-down","caret-square-left","caret-square-right","caret-square-up","chart-bar","check-circle","check-square","circle","clipboard","clock","clone","closed-captioning","comment","comment-alt","comment-dots","comments","compass","copy","copyright","credit-card","dizzy","dot-circle","edit","envelope","envelope-open","eye","eye-slash","file","file-alt","file-archive","file-audio","file-code","file-excel","file-image","file-pdf","file-powerpoint","file-video","file-word","flag","flushed","folder","folder-open","frown","frown-open","futbol","gem","grimace","grin","grin-alt","grin-beam","grin-beam-sweat","grin-hearts","grin-squint","grin-squint-tears","grin-stars","grin-tears","grin-tongue","grin-tongue-squint","grin-tongue-wink","grin-wink","hand-lizard","hand-paper","hand-peace","hand-point-down","hand-point-left","hand-point-right","hand-point-up","hand-pointer","hand-rock","hand-scissors","hand-spock","handshake","hdd","heart","hospital","hourglass","id-badge","id-card","image","images","keyboard","kiss","kiss-beam","kiss-wink-heart","laugh","laugh-beam","laugh-squint","laugh-wink","lemon","life-ring","lightbulb","list-alt","map","meh","meh-blank","meh-rolling-eyes","minus-square","money-bill-alt","moon","newspaper","object-group","object-ungroup","paper-plane","pause-circle","play-circle","plus-square","question-circle","registered","sad-cry","sad-tear","save","share-square","smile","smile-beam","smile-wink","snowflake","square","star","star-half","sticky-note","stop-circle","sun","surprise","thumbs-down","thumbs-up","times-circle","tired","trash-alt","user","user-circle","window-close","window-maximize","window-minimize","window-restore"],fe=["500px","accessible-icon","accusoft","acquisitions-incorporated","adn","adobe","adversal","affiliatetheme","airbnb","algolia","alipay","amazon","amazon-pay","amilia","android","angellist","angrycreative","angular","app-store","app-store-ios","apper","apple","apple-pay","artstation","asymmetrik","atlassian","audible","autoprefixer","avianex","aviato","aws","bandcamp","battle-net","behance","behance-square","bimobject","bitbucket","bitcoin","bity","black-tie","blackberry","blogger","blogger-b","bluetooth","bluetooth-b","bootstrap","btc","buffer","buromobelexperte","buy-n-large","buysellads","canadian-maple-leaf","cc-amazon-pay","cc-amex","cc-apple-pay","cc-diners-club","cc-discover","cc-jcb","cc-mastercard","cc-paypal","cc-stripe","cc-visa","centercode","centos","chrome","chromecast","cloudscale","cloudsmith","cloudversify","codepen","codiepie","confluence","connectdevelop","contao","cotton-bureau","cpanel","creative-commons","creative-commons-by","creative-commons-nc","creative-commons-nc-eu","creative-commons-nc-jp","creative-commons-nd","creative-commons-pd","creative-commons-pd-alt","creative-commons-remix","creative-commons-sa","creative-commons-sampling","creative-commons-sampling-plus","creative-commons-share","creative-commons-zero","critical-role","css3","css3-alt","cuttlefish","d-and-d","d-and-d-beyond","dashcube","delicious","deploydog","deskpro","dev","deviantart","dhl","diaspora","digg","digital-ocean","discord","discourse","dochub","docker","draft2digital","dribbble","dribbble-square","dropbox","drupal","dyalog","earlybirds","ebay","edge","elementor","ello","ember","empire","envira","erlang","ethereum","etsy","evernote","expeditedssl","facebook","facebook-f","facebook-messenger","facebook-square","fantasy-flight-games","fedex","fedora","figma","firefox","first-order","first-order-alt","firstdraft","flickr","flipboard","fly","font-awesome","font-awesome-alt","font-awesome-flag","fonticons","fonticons-fi","fort-awesome","fort-awesome-alt","forumbee","foursquare","free-code-camp","freebsd","fulcrum","galactic-republic","galactic-senate","get-pocket","gg","gg-circle","git","git-alt","git-square","github","github-alt","github-square","gitkraken","gitlab","gitter","glide","glide-g","gofore","goodreads","goodreads-g","google","google-drive","google-play","google-plus","google-plus-g","google-plus-square","google-wallet","gratipay","grav","gripfire","grunt","gulp","hacker-news","hacker-news-square","hackerrank","hips","hire-a-helper","hooli","hornbill","hotjar","houzz","html5","hubspot","imdb","instagram","intercom","internet-explorer","invision","ioxhost","itch-io","itunes","itunes-note","java","jedi-order","jenkins","jira","joget","joomla","js","js-square","jsfiddle","kaggle","keybase","keycdn","kickstarter","kickstarter-k","korvue","laravel","lastfm","lastfm-square","leanpub","less","line","linkedin","linkedin-in","linode","linux","lyft","magento","mailchimp","mandalorian","markdown","mastodon","maxcdn","mdb","medapps","medium","medium-m","medrt","meetup","megaport","mendeley","microsoft","mix","mixcloud","mizuni","modx","monero","napster","neos","nimblr","node","node-js","npm","ns8","nutritionix","odnoklassniki","odnoklassniki-square","old-republic","opencart","openid","opera","optin-monster","orcid","osi","page4","pagelines","palfed","patreon","paypal","penny-arcade","periscope","phabricator","phoenix-framework","phoenix-squadron","php","pied-piper","pied-piper-alt","pied-piper-hat","pied-piper-pp","pinterest","pinterest-p","pinterest-square","playstation","product-hunt","pushed","python","qq","quinscape","quora","r-project","raspberry-pi","ravelry","react","reacteurope","readme","rebel","red-river","reddit","reddit-alien","reddit-square","redhat","renren","replyd","researchgate","resolving","rev","rocketchat","rockrms","safari","salesforce","sass","schlix","scribd","searchengin","sellcast","sellsy","servicestack","shirtsinbulk","shopware","simplybuilt","sistrix","sith","sketch","skyatlas","skype","slack","slack-hash","slideshare","snapchat","snapchat-ghost","snapchat-square","soundcloud","sourcetree","speakap","speaker-deck","spotify","squarespace","stack-exchange","stack-overflow","stackpath","staylinked","steam","steam-square","steam-symbol","sticker-mule","strava","stripe","stripe-s","studiovinari","stumbleupon","stumbleupon-circle","superpowers","supple","suse","swift","symfony","teamspeak","telegram","telegram-plane","tencent-weibo","the-red-yeti","themeco","themeisle","think-peaks","trade-federation","trello","tripadvisor","tumblr","tumblr-square","twitch","twitter","twitter-square","typo3","uber","ubuntu","uikit","umbraco","uniregistry","untappd","ups","usb","usps","ussunnah","vaadin","viacoin","viadeo","viadeo-square","viber","vimeo","vimeo-square","vimeo-v","vine","vk","vnv","vuejs","waze","weebly","weibo","weixin","whatsapp","whatsapp-square","whmcs","wikipedia-w","windows","wix","wizards-of-the-coast","wolf-pack-battalion","wordpress","wordpress-simple","wpbeginner","wpexplorer","wpforms","wpressr","xbox","xing","xing-square","y-combinator","yahoo","yammer","yandex","yandex-international","yarn","yelp","yoast","youtube","youtube-square","zhihu"];customElements.define("mv-fa",class extends ee{static get properties(){return{icon:{type:String},regular:{type:Boolean},prefix:{type:String,attribute:!1},showIcon:{type:Boolean,attribute:!1},iconProps:{type:String,attribute:"icon-props"}}}static get styles(){return a`
      /*!
    * Font Awesome Free 5.11.2 by @fontawesome - https://fontawesome.com
    * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
    */
      .fa,
      .fas,
      .far,
      .fal,
      .fad,
      .fab {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        display: inline-block;
        font-style: normal;
        font-variant: normal;
        text-rendering: auto;
        line-height: 1;
      }

      .fa-lg {
        font-size: 1.33333em;
        line-height: 0.75em;
        vertical-align: -0.0667em;
      }

      .fa-xs {
        font-size: 0.75em;
      }

      .fa-sm {
        font-size: 0.875em;
      }

      .fa-1x {
        font-size: 1em;
      }

      .fa-2x {
        font-size: 2em;
      }

      .fa-3x {
        font-size: 3em;
      }

      .fa-4x {
        font-size: 4em;
      }

      .fa-5x {
        font-size: 5em;
      }

      .fa-6x {
        font-size: 6em;
      }

      .fa-7x {
        font-size: 7em;
      }

      .fa-8x {
        font-size: 8em;
      }

      .fa-9x {
        font-size: 9em;
      }

      .fa-10x {
        font-size: 10em;
      }

      .fa-fw {
        text-align: center;
        width: 1.25em;
      }

      .fa-ul {
        list-style-type: none;
        margin-left: 2.5em;
        padding-left: 0;
      }
      .fa-ul > li {
        position: relative;
      }

      .fa-li {
        left: -2em;
        position: absolute;
        text-align: center;
        width: 2em;
        line-height: inherit;
      }

      .fa-border {
        border: solid 0.08em #eee;
        border-radius: 0.1em;
        padding: 0.2em 0.25em 0.15em;
      }

      .fa-pull-left {
        float: left;
      }

      .fa-pull-right {
        float: right;
      }

      .fa.fa-pull-left,
      .fas.fa-pull-left,
      .far.fa-pull-left,
      .fal.fa-pull-left,
      .fab.fa-pull-left {
        margin-right: 0.3em;
      }

      .fa.fa-pull-right,
      .fas.fa-pull-right,
      .far.fa-pull-right,
      .fal.fa-pull-right,
      .fab.fa-pull-right {
        margin-left: 0.3em;
      }

      .fa-spin {
        -webkit-animation: fa-spin 2s infinite linear;
        animation: fa-spin 2s infinite linear;
      }

      .fa-pulse {
        -webkit-animation: fa-spin 1s infinite steps(8);
        animation: fa-spin 1s infinite steps(8);
      }

      @-webkit-keyframes fa-spin {
        0% {
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }

      @keyframes fa-spin {
        0% {
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }

      .fa-rotate-90 {
        -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
      }

      .fa-rotate-180 {
        -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
        -webkit-transform: rotate(180deg);
        transform: rotate(180deg);
      }

      .fa-rotate-270 {
        -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";
        -webkit-transform: rotate(270deg);
        transform: rotate(270deg);
      }

      .fa-flip-horizontal {
        -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";
        -webkit-transform: scale(-1, 1);
        transform: scale(-1, 1);
      }

      .fa-flip-vertical {
        -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
        -webkit-transform: scale(1, -1);
        transform: scale(1, -1);
      }

      .fa-flip-both,
      .fa-flip-horizontal.fa-flip-vertical {
        -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
        -webkit-transform: scale(-1, -1);
        transform: scale(-1, -1);
      }

      :root .fa-rotate-90,
      :root .fa-rotate-180,
      :root .fa-rotate-270,
      :root .fa-flip-horizontal,
      :root .fa-flip-vertical,
      :root .fa-flip-both {
        -webkit-filter: none;
        filter: none;
      }

      .fa-stack {
        display: inline-block;
        height: 2em;
        line-height: 2em;
        position: relative;
        vertical-align: middle;
        width: 2.5em;
      }

      .fa-stack-1x,
      .fa-stack-2x {
        left: 0;
        position: absolute;
        text-align: center;
        width: 100%;
      }

      .fa-stack-1x {
        line-height: inherit;
      }

      .fa-stack-2x {
        font-size: 2em;
      }

      .fa-inverse {
        color: #fff;
      }

      /* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen
    readers do not read off random characters that represent icons */
      .fa-500px:before {
        content: "\\f26e";
      }

      .fa-accessible-icon:before {
        content: "\\f368";
      }

      .fa-accusoft:before {
        content: "\\f369";
      }

      .fa-acquisitions-incorporated:before {
        content: "\\f6af";
      }

      .fa-ad:before {
        content: "\\f641";
      }

      .fa-address-book:before {
        content: "\\f2b9";
      }

      .fa-address-card:before {
        content: "\\f2bb";
      }

      .fa-adjust:before {
        content: "\\f042";
      }

      .fa-adn:before {
        content: "\\f170";
      }

      .fa-adobe:before {
        content: "\\f778";
      }

      .fa-adversal:before {
        content: "\\f36a";
      }

      .fa-affiliatetheme:before {
        content: "\\f36b";
      }

      .fa-air-freshener:before {
        content: "\\f5d0";
      }

      .fa-airbnb:before {
        content: "\\f834";
      }

      .fa-algolia:before {
        content: "\\f36c";
      }

      .fa-align-center:before {
        content: "\\f037";
      }

      .fa-align-justify:before {
        content: "\\f039";
      }

      .fa-align-left:before {
        content: "\\f036";
      }

      .fa-align-right:before {
        content: "\\f038";
      }

      .fa-alipay:before {
        content: "\\f642";
      }

      .fa-allergies:before {
        content: "\\f461";
      }

      .fa-amazon:before {
        content: "\\f270";
      }

      .fa-amazon-pay:before {
        content: "\\f42c";
      }

      .fa-ambulance:before {
        content: "\\f0f9";
      }

      .fa-american-sign-language-interpreting:before {
        content: "\\f2a3";
      }

      .fa-amilia:before {
        content: "\\f36d";
      }

      .fa-anchor:before {
        content: "\\f13d";
      }

      .fa-android:before {
        content: "\\f17b";
      }

      .fa-angellist:before {
        content: "\\f209";
      }

      .fa-angle-double-down:before {
        content: "\\f103";
      }

      .fa-angle-double-left:before {
        content: "\\f100";
      }

      .fa-angle-double-right:before {
        content: "\\f101";
      }

      .fa-angle-double-up:before {
        content: "\\f102";
      }

      .fa-angle-down:before {
        content: "\\f107";
      }

      .fa-angle-left:before {
        content: "\\f104";
      }

      .fa-angle-right:before {
        content: "\\f105";
      }

      .fa-angle-up:before {
        content: "\\f106";
      }

      .fa-angry:before {
        content: "\\f556";
      }

      .fa-angrycreative:before {
        content: "\\f36e";
      }

      .fa-angular:before {
        content: "\\f420";
      }

      .fa-ankh:before {
        content: "\\f644";
      }

      .fa-app-store:before {
        content: "\\f36f";
      }

      .fa-app-store-ios:before {
        content: "\\f370";
      }

      .fa-apper:before {
        content: "\\f371";
      }

      .fa-apple:before {
        content: "\\f179";
      }

      .fa-apple-alt:before {
        content: "\\f5d1";
      }

      .fa-apple-pay:before {
        content: "\\f415";
      }

      .fa-archive:before {
        content: "\\f187";
      }

      .fa-archway:before {
        content: "\\f557";
      }

      .fa-arrow-alt-circle-down:before {
        content: "\\f358";
      }

      .fa-arrow-alt-circle-left:before {
        content: "\\f359";
      }

      .fa-arrow-alt-circle-right:before {
        content: "\\f35a";
      }

      .fa-arrow-alt-circle-up:before {
        content: "\\f35b";
      }

      .fa-arrow-circle-down:before {
        content: "\\f0ab";
      }

      .fa-arrow-circle-left:before {
        content: "\\f0a8";
      }

      .fa-arrow-circle-right:before {
        content: "\\f0a9";
      }

      .fa-arrow-circle-up:before {
        content: "\\f0aa";
      }

      .fa-arrow-down:before {
        content: "\\f063";
      }

      .fa-arrow-left:before {
        content: "\\f060";
      }

      .fa-arrow-right:before {
        content: "\\f061";
      }

      .fa-arrow-up:before {
        content: "\\f062";
      }

      .fa-arrows-alt:before {
        content: "\\f0b2";
      }

      .fa-arrows-alt-h:before {
        content: "\\f337";
      }

      .fa-arrows-alt-v:before {
        content: "\\f338";
      }

      .fa-artstation:before {
        content: "\\f77a";
      }

      .fa-assistive-listening-systems:before {
        content: "\\f2a2";
      }

      .fa-asterisk:before {
        content: "\\f069";
      }

      .fa-asymmetrik:before {
        content: "\\f372";
      }

      .fa-at:before {
        content: "\\f1fa";
      }

      .fa-atlas:before {
        content: "\\f558";
      }

      .fa-atlassian:before {
        content: "\\f77b";
      }

      .fa-atom:before {
        content: "\\f5d2";
      }

      .fa-audible:before {
        content: "\\f373";
      }

      .fa-audio-description:before {
        content: "\\f29e";
      }

      .fa-autoprefixer:before {
        content: "\\f41c";
      }

      .fa-avianex:before {
        content: "\\f374";
      }

      .fa-aviato:before {
        content: "\\f421";
      }

      .fa-award:before {
        content: "\\f559";
      }

      .fa-aws:before {
        content: "\\f375";
      }

      .fa-baby:before {
        content: "\\f77c";
      }

      .fa-baby-carriage:before {
        content: "\\f77d";
      }

      .fa-backspace:before {
        content: "\\f55a";
      }

      .fa-backward:before {
        content: "\\f04a";
      }

      .fa-bacon:before {
        content: "\\f7e5";
      }

      .fa-balance-scale:before {
        content: "\\f24e";
      }

      .fa-balance-scale-left:before {
        content: "\\f515";
      }

      .fa-balance-scale-right:before {
        content: "\\f516";
      }

      .fa-ban:before {
        content: "\\f05e";
      }

      .fa-band-aid:before {
        content: "\\f462";
      }

      .fa-bandcamp:before {
        content: "\\f2d5";
      }

      .fa-barcode:before {
        content: "\\f02a";
      }

      .fa-bars:before {
        content: "\\f0c9";
      }

      .fa-baseball-ball:before {
        content: "\\f433";
      }

      .fa-basketball-ball:before {
        content: "\\f434";
      }

      .fa-bath:before {
        content: "\\f2cd";
      }

      .fa-battery-empty:before {
        content: "\\f244";
      }

      .fa-battery-full:before {
        content: "\\f240";
      }

      .fa-battery-half:before {
        content: "\\f242";
      }

      .fa-battery-quarter:before {
        content: "\\f243";
      }

      .fa-battery-three-quarters:before {
        content: "\\f241";
      }

      .fa-battle-net:before {
        content: "\\f835";
      }

      .fa-bed:before {
        content: "\\f236";
      }

      .fa-beer:before {
        content: "\\f0fc";
      }

      .fa-behance:before {
        content: "\\f1b4";
      }

      .fa-behance-square:before {
        content: "\\f1b5";
      }

      .fa-bell:before {
        content: "\\f0f3";
      }

      .fa-bell-slash:before {
        content: "\\f1f6";
      }

      .fa-bezier-curve:before {
        content: "\\f55b";
      }

      .fa-bible:before {
        content: "\\f647";
      }

      .fa-bicycle:before {
        content: "\\f206";
      }

      .fa-biking:before {
        content: "\\f84a";
      }

      .fa-bimobject:before {
        content: "\\f378";
      }

      .fa-binoculars:before {
        content: "\\f1e5";
      }

      .fa-biohazard:before {
        content: "\\f780";
      }

      .fa-birthday-cake:before {
        content: "\\f1fd";
      }

      .fa-bitbucket:before {
        content: "\\f171";
      }

      .fa-bitcoin:before {
        content: "\\f379";
      }

      .fa-bity:before {
        content: "\\f37a";
      }

      .fa-black-tie:before {
        content: "\\f27e";
      }

      .fa-blackberry:before {
        content: "\\f37b";
      }

      .fa-blender:before {
        content: "\\f517";
      }

      .fa-blender-phone:before {
        content: "\\f6b6";
      }

      .fa-blind:before {
        content: "\\f29d";
      }

      .fa-blog:before {
        content: "\\f781";
      }

      .fa-blogger:before {
        content: "\\f37c";
      }

      .fa-blogger-b:before {
        content: "\\f37d";
      }

      .fa-bluetooth:before {
        content: "\\f293";
      }

      .fa-bluetooth-b:before {
        content: "\\f294";
      }

      .fa-bold:before {
        content: "\\f032";
      }

      .fa-bolt:before {
        content: "\\f0e7";
      }

      .fa-bomb:before {
        content: "\\f1e2";
      }

      .fa-bone:before {
        content: "\\f5d7";
      }

      .fa-bong:before {
        content: "\\f55c";
      }

      .fa-book:before {
        content: "\\f02d";
      }

      .fa-book-dead:before {
        content: "\\f6b7";
      }

      .fa-book-medical:before {
        content: "\\f7e6";
      }

      .fa-book-open:before {
        content: "\\f518";
      }

      .fa-book-reader:before {
        content: "\\f5da";
      }

      .fa-bookmark:before {
        content: "\\f02e";
      }

      .fa-bootstrap:before {
        content: "\\f836";
      }

      .fa-border-all:before {
        content: "\\f84c";
      }

      .fa-border-none:before {
        content: "\\f850";
      }

      .fa-border-style:before {
        content: "\\f853";
      }

      .fa-bowling-ball:before {
        content: "\\f436";
      }

      .fa-box:before {
        content: "\\f466";
      }

      .fa-box-open:before {
        content: "\\f49e";
      }

      .fa-boxes:before {
        content: "\\f468";
      }

      .fa-braille:before {
        content: "\\f2a1";
      }

      .fa-brain:before {
        content: "\\f5dc";
      }

      .fa-bread-slice:before {
        content: "\\f7ec";
      }

      .fa-briefcase:before {
        content: "\\f0b1";
      }

      .fa-briefcase-medical:before {
        content: "\\f469";
      }

      .fa-broadcast-tower:before {
        content: "\\f519";
      }

      .fa-broom:before {
        content: "\\f51a";
      }

      .fa-brush:before {
        content: "\\f55d";
      }

      .fa-btc:before {
        content: "\\f15a";
      }

      .fa-buffer:before {
        content: "\\f837";
      }

      .fa-bug:before {
        content: "\\f188";
      }

      .fa-building:before {
        content: "\\f1ad";
      }

      .fa-bullhorn:before {
        content: "\\f0a1";
      }

      .fa-bullseye:before {
        content: "\\f140";
      }

      .fa-burn:before {
        content: "\\f46a";
      }

      .fa-buromobelexperte:before {
        content: "\\f37f";
      }

      .fa-bus:before {
        content: "\\f207";
      }

      .fa-bus-alt:before {
        content: "\\f55e";
      }

      .fa-business-time:before {
        content: "\\f64a";
      }

      .fa-buy-n-large:before {
        content: "\\f8a6";
      }

      .fa-buysellads:before {
        content: "\\f20d";
      }

      .fa-calculator:before {
        content: "\\f1ec";
      }

      .fa-calendar:before {
        content: "\\f133";
      }

      .fa-calendar-alt:before {
        content: "\\f073";
      }

      .fa-calendar-check:before {
        content: "\\f274";
      }

      .fa-calendar-day:before {
        content: "\\f783";
      }

      .fa-calendar-minus:before {
        content: "\\f272";
      }

      .fa-calendar-plus:before {
        content: "\\f271";
      }

      .fa-calendar-times:before {
        content: "\\f273";
      }

      .fa-calendar-week:before {
        content: "\\f784";
      }

      .fa-camera:before {
        content: "\\f030";
      }

      .fa-camera-retro:before {
        content: "\\f083";
      }

      .fa-campground:before {
        content: "\\f6bb";
      }

      .fa-canadian-maple-leaf:before {
        content: "\\f785";
      }

      .fa-candy-cane:before {
        content: "\\f786";
      }

      .fa-cannabis:before {
        content: "\\f55f";
      }

      .fa-capsules:before {
        content: "\\f46b";
      }

      .fa-car:before {
        content: "\\f1b9";
      }

      .fa-car-alt:before {
        content: "\\f5de";
      }

      .fa-car-battery:before {
        content: "\\f5df";
      }

      .fa-car-crash:before {
        content: "\\f5e1";
      }

      .fa-car-side:before {
        content: "\\f5e4";
      }

      .fa-caret-down:before {
        content: "\\f0d7";
      }

      .fa-caret-left:before {
        content: "\\f0d9";
      }

      .fa-caret-right:before {
        content: "\\f0da";
      }

      .fa-caret-square-down:before {
        content: "\\f150";
      }

      .fa-caret-square-left:before {
        content: "\\f191";
      }

      .fa-caret-square-right:before {
        content: "\\f152";
      }

      .fa-caret-square-up:before {
        content: "\\f151";
      }

      .fa-caret-up:before {
        content: "\\f0d8";
      }

      .fa-carrot:before {
        content: "\\f787";
      }

      .fa-cart-arrow-down:before {
        content: "\\f218";
      }

      .fa-cart-plus:before {
        content: "\\f217";
      }

      .fa-cash-register:before {
        content: "\\f788";
      }

      .fa-cat:before {
        content: "\\f6be";
      }

      .fa-cc-amazon-pay:before {
        content: "\\f42d";
      }

      .fa-cc-amex:before {
        content: "\\f1f3";
      }

      .fa-cc-apple-pay:before {
        content: "\\f416";
      }

      .fa-cc-diners-club:before {
        content: "\\f24c";
      }

      .fa-cc-discover:before {
        content: "\\f1f2";
      }

      .fa-cc-jcb:before {
        content: "\\f24b";
      }

      .fa-cc-mastercard:before {
        content: "\\f1f1";
      }

      .fa-cc-paypal:before {
        content: "\\f1f4";
      }

      .fa-cc-stripe:before {
        content: "\\f1f5";
      }

      .fa-cc-visa:before {
        content: "\\f1f0";
      }

      .fa-centercode:before {
        content: "\\f380";
      }

      .fa-centos:before {
        content: "\\f789";
      }

      .fa-certificate:before {
        content: "\\f0a3";
      }

      .fa-chair:before {
        content: "\\f6c0";
      }

      .fa-chalkboard:before {
        content: "\\f51b";
      }

      .fa-chalkboard-teacher:before {
        content: "\\f51c";
      }

      .fa-charging-station:before {
        content: "\\f5e7";
      }

      .fa-chart-area:before {
        content: "\\f1fe";
      }

      .fa-chart-bar:before {
        content: "\\f080";
      }

      .fa-chart-line:before {
        content: "\\f201";
      }

      .fa-chart-pie:before {
        content: "\\f200";
      }

      .fa-check:before {
        content: "\\f00c";
      }

      .fa-check-circle:before {
        content: "\\f058";
      }

      .fa-check-double:before {
        content: "\\f560";
      }

      .fa-check-square:before {
        content: "\\f14a";
      }

      .fa-cheese:before {
        content: "\\f7ef";
      }

      .fa-chess:before {
        content: "\\f439";
      }

      .fa-chess-bishop:before {
        content: "\\f43a";
      }

      .fa-chess-board:before {
        content: "\\f43c";
      }

      .fa-chess-king:before {
        content: "\\f43f";
      }

      .fa-chess-knight:before {
        content: "\\f441";
      }

      .fa-chess-pawn:before {
        content: "\\f443";
      }

      .fa-chess-queen:before {
        content: "\\f445";
      }

      .fa-chess-rook:before {
        content: "\\f447";
      }

      .fa-chevron-circle-down:before {
        content: "\\f13a";
      }

      .fa-chevron-circle-left:before {
        content: "\\f137";
      }

      .fa-chevron-circle-right:before {
        content: "\\f138";
      }

      .fa-chevron-circle-up:before {
        content: "\\f139";
      }

      .fa-chevron-down:before {
        content: "\\f078";
      }

      .fa-chevron-left:before {
        content: "\\f053";
      }

      .fa-chevron-right:before {
        content: "\\f054";
      }

      .fa-chevron-up:before {
        content: "\\f077";
      }

      .fa-child:before {
        content: "\\f1ae";
      }

      .fa-chrome:before {
        content: "\\f268";
      }

      .fa-chromecast:before {
        content: "\\f838";
      }

      .fa-church:before {
        content: "\\f51d";
      }

      .fa-circle:before {
        content: "\\f111";
      }

      .fa-circle-notch:before {
        content: "\\f1ce";
      }

      .fa-city:before {
        content: "\\f64f";
      }

      .fa-clinic-medical:before {
        content: "\\f7f2";
      }

      .fa-clipboard:before {
        content: "\\f328";
      }

      .fa-clipboard-check:before {
        content: "\\f46c";
      }

      .fa-clipboard-list:before {
        content: "\\f46d";
      }

      .fa-clock:before {
        content: "\\f017";
      }

      .fa-clone:before {
        content: "\\f24d";
      }

      .fa-closed-captioning:before {
        content: "\\f20a";
      }

      .fa-cloud:before {
        content: "\\f0c2";
      }

      .fa-cloud-download-alt:before {
        content: "\\f381";
      }

      .fa-cloud-meatball:before {
        content: "\\f73b";
      }

      .fa-cloud-moon:before {
        content: "\\f6c3";
      }

      .fa-cloud-moon-rain:before {
        content: "\\f73c";
      }

      .fa-cloud-rain:before {
        content: "\\f73d";
      }

      .fa-cloud-showers-heavy:before {
        content: "\\f740";
      }

      .fa-cloud-sun:before {
        content: "\\f6c4";
      }

      .fa-cloud-sun-rain:before {
        content: "\\f743";
      }

      .fa-cloud-upload-alt:before {
        content: "\\f382";
      }

      .fa-cloudscale:before {
        content: "\\f383";
      }

      .fa-cloudsmith:before {
        content: "\\f384";
      }

      .fa-cloudversify:before {
        content: "\\f385";
      }

      .fa-cocktail:before {
        content: "\\f561";
      }

      .fa-code:before {
        content: "\\f121";
      }

      .fa-code-branch:before {
        content: "\\f126";
      }

      .fa-codepen:before {
        content: "\\f1cb";
      }

      .fa-codiepie:before {
        content: "\\f284";
      }

      .fa-coffee:before {
        content: "\\f0f4";
      }

      .fa-cog:before {
        content: "\\f013";
      }

      .fa-cogs:before {
        content: "\\f085";
      }

      .fa-coins:before {
        content: "\\f51e";
      }

      .fa-columns:before {
        content: "\\f0db";
      }

      .fa-comment:before {
        content: "\\f075";
      }

      .fa-comment-alt:before {
        content: "\\f27a";
      }

      .fa-comment-dollar:before {
        content: "\\f651";
      }

      .fa-comment-dots:before {
        content: "\\f4ad";
      }

      .fa-comment-medical:before {
        content: "\\f7f5";
      }

      .fa-comment-slash:before {
        content: "\\f4b3";
      }

      .fa-comments:before {
        content: "\\f086";
      }

      .fa-comments-dollar:before {
        content: "\\f653";
      }

      .fa-compact-disc:before {
        content: "\\f51f";
      }

      .fa-compass:before {
        content: "\\f14e";
      }

      .fa-compress:before {
        content: "\\f066";
      }

      .fa-compress-arrows-alt:before {
        content: "\\f78c";
      }

      .fa-concierge-bell:before {
        content: "\\f562";
      }

      .fa-confluence:before {
        content: "\\f78d";
      }

      .fa-connectdevelop:before {
        content: "\\f20e";
      }

      .fa-contao:before {
        content: "\\f26d";
      }

      .fa-cookie:before {
        content: "\\f563";
      }

      .fa-cookie-bite:before {
        content: "\\f564";
      }

      .fa-copy:before {
        content: "\\f0c5";
      }

      .fa-copyright:before {
        content: "\\f1f9";
      }

      .fa-cotton-bureau:before {
        content: "\\f89e";
      }

      .fa-couch:before {
        content: "\\f4b8";
      }

      .fa-cpanel:before {
        content: "\\f388";
      }

      .fa-creative-commons:before {
        content: "\\f25e";
      }

      .fa-creative-commons-by:before {
        content: "\\f4e7";
      }

      .fa-creative-commons-nc:before {
        content: "\\f4e8";
      }

      .fa-creative-commons-nc-eu:before {
        content: "\\f4e9";
      }

      .fa-creative-commons-nc-jp:before {
        content: "\\f4ea";
      }

      .fa-creative-commons-nd:before {
        content: "\\f4eb";
      }

      .fa-creative-commons-pd:before {
        content: "\\f4ec";
      }

      .fa-creative-commons-pd-alt:before {
        content: "\\f4ed";
      }

      .fa-creative-commons-remix:before {
        content: "\\f4ee";
      }

      .fa-creative-commons-sa:before {
        content: "\\f4ef";
      }

      .fa-creative-commons-sampling:before {
        content: "\\f4f0";
      }

      .fa-creative-commons-sampling-plus:before {
        content: "\\f4f1";
      }

      .fa-creative-commons-share:before {
        content: "\\f4f2";
      }

      .fa-creative-commons-zero:before {
        content: "\\f4f3";
      }

      .fa-credit-card:before {
        content: "\\f09d";
      }

      .fa-critical-role:before {
        content: "\\f6c9";
      }

      .fa-crop:before {
        content: "\\f125";
      }

      .fa-crop-alt:before {
        content: "\\f565";
      }

      .fa-cross:before {
        content: "\\f654";
      }

      .fa-crosshairs:before {
        content: "\\f05b";
      }

      .fa-crow:before {
        content: "\\f520";
      }

      .fa-crown:before {
        content: "\\f521";
      }

      .fa-crutch:before {
        content: "\\f7f7";
      }

      .fa-css3:before {
        content: "\\f13c";
      }

      .fa-css3-alt:before {
        content: "\\f38b";
      }

      .fa-cube:before {
        content: "\\f1b2";
      }

      .fa-cubes:before {
        content: "\\f1b3";
      }

      .fa-cut:before {
        content: "\\f0c4";
      }

      .fa-cuttlefish:before {
        content: "\\f38c";
      }

      .fa-d-and-d:before {
        content: "\\f38d";
      }

      .fa-d-and-d-beyond:before {
        content: "\\f6ca";
      }

      .fa-dashcube:before {
        content: "\\f210";
      }

      .fa-database:before {
        content: "\\f1c0";
      }

      .fa-deaf:before {
        content: "\\f2a4";
      }

      .fa-delicious:before {
        content: "\\f1a5";
      }

      .fa-democrat:before {
        content: "\\f747";
      }

      .fa-deploydog:before {
        content: "\\f38e";
      }

      .fa-deskpro:before {
        content: "\\f38f";
      }

      .fa-desktop:before {
        content: "\\f108";
      }

      .fa-dev:before {
        content: "\\f6cc";
      }

      .fa-deviantart:before {
        content: "\\f1bd";
      }

      .fa-dharmachakra:before {
        content: "\\f655";
      }

      .fa-dhl:before {
        content: "\\f790";
      }

      .fa-diagnoses:before {
        content: "\\f470";
      }

      .fa-diaspora:before {
        content: "\\f791";
      }

      .fa-dice:before {
        content: "\\f522";
      }

      .fa-dice-d20:before {
        content: "\\f6cf";
      }

      .fa-dice-d6:before {
        content: "\\f6d1";
      }

      .fa-dice-five:before {
        content: "\\f523";
      }

      .fa-dice-four:before {
        content: "\\f524";
      }

      .fa-dice-one:before {
        content: "\\f525";
      }

      .fa-dice-six:before {
        content: "\\f526";
      }

      .fa-dice-three:before {
        content: "\\f527";
      }

      .fa-dice-two:before {
        content: "\\f528";
      }

      .fa-digg:before {
        content: "\\f1a6";
      }

      .fa-digital-ocean:before {
        content: "\\f391";
      }

      .fa-digital-tachograph:before {
        content: "\\f566";
      }

      .fa-directions:before {
        content: "\\f5eb";
      }

      .fa-discord:before {
        content: "\\f392";
      }

      .fa-discourse:before {
        content: "\\f393";
      }

      .fa-divide:before {
        content: "\\f529";
      }

      .fa-dizzy:before {
        content: "\\f567";
      }

      .fa-dna:before {
        content: "\\f471";
      }

      .fa-dochub:before {
        content: "\\f394";
      }

      .fa-docker:before {
        content: "\\f395";
      }

      .fa-dog:before {
        content: "\\f6d3";
      }

      .fa-dollar-sign:before {
        content: "\\f155";
      }

      .fa-dolly:before {
        content: "\\f472";
      }

      .fa-dolly-flatbed:before {
        content: "\\f474";
      }

      .fa-donate:before {
        content: "\\f4b9";
      }

      .fa-door-closed:before {
        content: "\\f52a";
      }

      .fa-door-open:before {
        content: "\\f52b";
      }

      .fa-dot-circle:before {
        content: "\\f192";
      }

      .fa-dove:before {
        content: "\\f4ba";
      }

      .fa-download:before {
        content: "\\f019";
      }

      .fa-draft2digital:before {
        content: "\\f396";
      }

      .fa-drafting-compass:before {
        content: "\\f568";
      }

      .fa-dragon:before {
        content: "\\f6d5";
      }

      .fa-draw-polygon:before {
        content: "\\f5ee";
      }

      .fa-dribbble:before {
        content: "\\f17d";
      }

      .fa-dribbble-square:before {
        content: "\\f397";
      }

      .fa-dropbox:before {
        content: "\\f16b";
      }

      .fa-drum:before {
        content: "\\f569";
      }

      .fa-drum-steelpan:before {
        content: "\\f56a";
      }

      .fa-drumstick-bite:before {
        content: "\\f6d7";
      }

      .fa-drupal:before {
        content: "\\f1a9";
      }

      .fa-dumbbell:before {
        content: "\\f44b";
      }

      .fa-dumpster:before {
        content: "\\f793";
      }

      .fa-dumpster-fire:before {
        content: "\\f794";
      }

      .fa-dungeon:before {
        content: "\\f6d9";
      }

      .fa-dyalog:before {
        content: "\\f399";
      }

      .fa-earlybirds:before {
        content: "\\f39a";
      }

      .fa-ebay:before {
        content: "\\f4f4";
      }

      .fa-edge:before {
        content: "\\f282";
      }

      .fa-edit:before {
        content: "\\f044";
      }

      .fa-egg:before {
        content: "\\f7fb";
      }

      .fa-eject:before {
        content: "\\f052";
      }

      .fa-elementor:before {
        content: "\\f430";
      }

      .fa-ellipsis-h:before {
        content: "\\f141";
      }

      .fa-ellipsis-v:before {
        content: "\\f142";
      }

      .fa-ello:before {
        content: "\\f5f1";
      }

      .fa-ember:before {
        content: "\\f423";
      }

      .fa-empire:before {
        content: "\\f1d1";
      }

      .fa-envelope:before {
        content: "\\f0e0";
      }

      .fa-envelope-open:before {
        content: "\\f2b6";
      }

      .fa-envelope-open-text:before {
        content: "\\f658";
      }

      .fa-envelope-square:before {
        content: "\\f199";
      }

      .fa-envira:before {
        content: "\\f299";
      }

      .fa-equals:before {
        content: "\\f52c";
      }

      .fa-eraser:before {
        content: "\\f12d";
      }

      .fa-erlang:before {
        content: "\\f39d";
      }

      .fa-ethereum:before {
        content: "\\f42e";
      }

      .fa-ethernet:before {
        content: "\\f796";
      }

      .fa-etsy:before {
        content: "\\f2d7";
      }

      .fa-euro-sign:before {
        content: "\\f153";
      }

      .fa-evernote:before {
        content: "\\f839";
      }

      .fa-exchange-alt:before {
        content: "\\f362";
      }

      .fa-exclamation:before {
        content: "\\f12a";
      }

      .fa-exclamation-circle:before {
        content: "\\f06a";
      }

      .fa-exclamation-triangle:before {
        content: "\\f071";
      }

      .fa-expand:before {
        content: "\\f065";
      }

      .fa-expand-arrows-alt:before {
        content: "\\f31e";
      }

      .fa-expeditedssl:before {
        content: "\\f23e";
      }

      .fa-external-link-alt:before {
        content: "\\f35d";
      }

      .fa-external-link-square-alt:before {
        content: "\\f360";
      }

      .fa-eye:before {
        content: "\\f06e";
      }

      .fa-eye-dropper:before {
        content: "\\f1fb";
      }

      .fa-eye-slash:before {
        content: "\\f070";
      }

      .fa-facebook:before {
        content: "\\f09a";
      }

      .fa-facebook-f:before {
        content: "\\f39e";
      }

      .fa-facebook-messenger:before {
        content: "\\f39f";
      }

      .fa-facebook-square:before {
        content: "\\f082";
      }

      .fa-fan:before {
        content: "\\f863";
      }

      .fa-fantasy-flight-games:before {
        content: "\\f6dc";
      }

      .fa-fast-backward:before {
        content: "\\f049";
      }

      .fa-fast-forward:before {
        content: "\\f050";
      }

      .fa-fax:before {
        content: "\\f1ac";
      }

      .fa-feather:before {
        content: "\\f52d";
      }

      .fa-feather-alt:before {
        content: "\\f56b";
      }

      .fa-fedex:before {
        content: "\\f797";
      }

      .fa-fedora:before {
        content: "\\f798";
      }

      .fa-female:before {
        content: "\\f182";
      }

      .fa-fighter-jet:before {
        content: "\\f0fb";
      }

      .fa-figma:before {
        content: "\\f799";
      }

      .fa-file:before {
        content: "\\f15b";
      }

      .fa-file-alt:before {
        content: "\\f15c";
      }

      .fa-file-archive:before {
        content: "\\f1c6";
      }

      .fa-file-audio:before {
        content: "\\f1c7";
      }

      .fa-file-code:before {
        content: "\\f1c9";
      }

      .fa-file-contract:before {
        content: "\\f56c";
      }

      .fa-file-csv:before {
        content: "\\f6dd";
      }

      .fa-file-download:before {
        content: "\\f56d";
      }

      .fa-file-excel:before {
        content: "\\f1c3";
      }

      .fa-file-export:before {
        content: "\\f56e";
      }

      .fa-file-image:before {
        content: "\\f1c5";
      }

      .fa-file-import:before {
        content: "\\f56f";
      }

      .fa-file-invoice:before {
        content: "\\f570";
      }

      .fa-file-invoice-dollar:before {
        content: "\\f571";
      }

      .fa-file-medical:before {
        content: "\\f477";
      }

      .fa-file-medical-alt:before {
        content: "\\f478";
      }

      .fa-file-pdf:before {
        content: "\\f1c1";
      }

      .fa-file-powerpoint:before {
        content: "\\f1c4";
      }

      .fa-file-prescription:before {
        content: "\\f572";
      }

      .fa-file-signature:before {
        content: "\\f573";
      }

      .fa-file-upload:before {
        content: "\\f574";
      }

      .fa-file-video:before {
        content: "\\f1c8";
      }

      .fa-file-word:before {
        content: "\\f1c2";
      }

      .fa-fill:before {
        content: "\\f575";
      }

      .fa-fill-drip:before {
        content: "\\f576";
      }

      .fa-film:before {
        content: "\\f008";
      }

      .fa-filter:before {
        content: "\\f0b0";
      }

      .fa-fingerprint:before {
        content: "\\f577";
      }

      .fa-fire:before {
        content: "\\f06d";
      }

      .fa-fire-alt:before {
        content: "\\f7e4";
      }

      .fa-fire-extinguisher:before {
        content: "\\f134";
      }

      .fa-firefox:before {
        content: "\\f269";
      }

      .fa-first-aid:before {
        content: "\\f479";
      }

      .fa-first-order:before {
        content: "\\f2b0";
      }

      .fa-first-order-alt:before {
        content: "\\f50a";
      }

      .fa-firstdraft:before {
        content: "\\f3a1";
      }

      .fa-fish:before {
        content: "\\f578";
      }

      .fa-fist-raised:before {
        content: "\\f6de";
      }

      .fa-flag:before {
        content: "\\f024";
      }

      .fa-flag-checkered:before {
        content: "\\f11e";
      }

      .fa-flag-usa:before {
        content: "\\f74d";
      }

      .fa-flask:before {
        content: "\\f0c3";
      }

      .fa-flickr:before {
        content: "\\f16e";
      }

      .fa-flipboard:before {
        content: "\\f44d";
      }

      .fa-flushed:before {
        content: "\\f579";
      }

      .fa-fly:before {
        content: "\\f417";
      }

      .fa-folder:before {
        content: "\\f07b";
      }

      .fa-folder-minus:before {
        content: "\\f65d";
      }

      .fa-folder-open:before {
        content: "\\f07c";
      }

      .fa-folder-plus:before {
        content: "\\f65e";
      }

      .fa-font:before {
        content: "\\f031";
      }

      .fa-font-awesome:before {
        content: "\\f2b4";
      }

      .fa-font-awesome-alt:before {
        content: "\\f35c";
      }

      .fa-font-awesome-flag:before {
        content: "\\f425";
      }

      .fa-font-awesome-logo-full:before {
        content: "\\f4e6";
      }

      .fa-fonticons:before {
        content: "\\f280";
      }

      .fa-fonticons-fi:before {
        content: "\\f3a2";
      }

      .fa-football-ball:before {
        content: "\\f44e";
      }

      .fa-fort-awesome:before {
        content: "\\f286";
      }

      .fa-fort-awesome-alt:before {
        content: "\\f3a3";
      }

      .fa-forumbee:before {
        content: "\\f211";
      }

      .fa-forward:before {
        content: "\\f04e";
      }

      .fa-foursquare:before {
        content: "\\f180";
      }

      .fa-free-code-camp:before {
        content: "\\f2c5";
      }

      .fa-freebsd:before {
        content: "\\f3a4";
      }

      .fa-frog:before {
        content: "\\f52e";
      }

      .fa-frown:before {
        content: "\\f119";
      }

      .fa-frown-open:before {
        content: "\\f57a";
      }

      .fa-fulcrum:before {
        content: "\\f50b";
      }

      .fa-funnel-dollar:before {
        content: "\\f662";
      }

      .fa-futbol:before {
        content: "\\f1e3";
      }

      .fa-galactic-republic:before {
        content: "\\f50c";
      }

      .fa-galactic-senate:before {
        content: "\\f50d";
      }

      .fa-gamepad:before {
        content: "\\f11b";
      }

      .fa-gas-pump:before {
        content: "\\f52f";
      }

      .fa-gavel:before {
        content: "\\f0e3";
      }

      .fa-gem:before {
        content: "\\f3a5";
      }

      .fa-genderless:before {
        content: "\\f22d";
      }

      .fa-get-pocket:before {
        content: "\\f265";
      }

      .fa-gg:before {
        content: "\\f260";
      }

      .fa-gg-circle:before {
        content: "\\f261";
      }

      .fa-ghost:before {
        content: "\\f6e2";
      }

      .fa-gift:before {
        content: "\\f06b";
      }

      .fa-gifts:before {
        content: "\\f79c";
      }

      .fa-git:before {
        content: "\\f1d3";
      }

      .fa-git-alt:before {
        content: "\\f841";
      }

      .fa-git-square:before {
        content: "\\f1d2";
      }

      .fa-github:before {
        content: "\\f09b";
      }

      .fa-github-alt:before {
        content: "\\f113";
      }

      .fa-github-square:before {
        content: "\\f092";
      }

      .fa-gitkraken:before {
        content: "\\f3a6";
      }

      .fa-gitlab:before {
        content: "\\f296";
      }

      .fa-gitter:before {
        content: "\\f426";
      }

      .fa-glass-cheers:before {
        content: "\\f79f";
      }

      .fa-glass-martini:before {
        content: "\\f000";
      }

      .fa-glass-martini-alt:before {
        content: "\\f57b";
      }

      .fa-glass-whiskey:before {
        content: "\\f7a0";
      }

      .fa-glasses:before {
        content: "\\f530";
      }

      .fa-glide:before {
        content: "\\f2a5";
      }

      .fa-glide-g:before {
        content: "\\f2a6";
      }

      .fa-globe:before {
        content: "\\f0ac";
      }

      .fa-globe-africa:before {
        content: "\\f57c";
      }

      .fa-globe-americas:before {
        content: "\\f57d";
      }

      .fa-globe-asia:before {
        content: "\\f57e";
      }

      .fa-globe-europe:before {
        content: "\\f7a2";
      }

      .fa-gofore:before {
        content: "\\f3a7";
      }

      .fa-golf-ball:before {
        content: "\\f450";
      }

      .fa-goodreads:before {
        content: "\\f3a8";
      }

      .fa-goodreads-g:before {
        content: "\\f3a9";
      }

      .fa-google:before {
        content: "\\f1a0";
      }

      .fa-google-drive:before {
        content: "\\f3aa";
      }

      .fa-google-play:before {
        content: "\\f3ab";
      }

      .fa-google-plus:before {
        content: "\\f2b3";
      }

      .fa-google-plus-g:before {
        content: "\\f0d5";
      }

      .fa-google-plus-square:before {
        content: "\\f0d4";
      }

      .fa-google-wallet:before {
        content: "\\f1ee";
      }

      .fa-gopuram:before {
        content: "\\f664";
      }

      .fa-graduation-cap:before {
        content: "\\f19d";
      }

      .fa-gratipay:before {
        content: "\\f184";
      }

      .fa-grav:before {
        content: "\\f2d6";
      }

      .fa-greater-than:before {
        content: "\\f531";
      }

      .fa-greater-than-equal:before {
        content: "\\f532";
      }

      .fa-grimace:before {
        content: "\\f57f";
      }

      .fa-grin:before {
        content: "\\f580";
      }

      .fa-grin-alt:before {
        content: "\\f581";
      }

      .fa-grin-beam:before {
        content: "\\f582";
      }

      .fa-grin-beam-sweat:before {
        content: "\\f583";
      }

      .fa-grin-hearts:before {
        content: "\\f584";
      }

      .fa-grin-squint:before {
        content: "\\f585";
      }

      .fa-grin-squint-tears:before {
        content: "\\f586";
      }

      .fa-grin-stars:before {
        content: "\\f587";
      }

      .fa-grin-tears:before {
        content: "\\f588";
      }

      .fa-grin-tongue:before {
        content: "\\f589";
      }

      .fa-grin-tongue-squint:before {
        content: "\\f58a";
      }

      .fa-grin-tongue-wink:before {
        content: "\\f58b";
      }

      .fa-grin-wink:before {
        content: "\\f58c";
      }

      .fa-grip-horizontal:before {
        content: "\\f58d";
      }

      .fa-grip-lines:before {
        content: "\\f7a4";
      }

      .fa-grip-lines-vertical:before {
        content: "\\f7a5";
      }

      .fa-grip-vertical:before {
        content: "\\f58e";
      }

      .fa-gripfire:before {
        content: "\\f3ac";
      }

      .fa-grunt:before {
        content: "\\f3ad";
      }

      .fa-guitar:before {
        content: "\\f7a6";
      }

      .fa-gulp:before {
        content: "\\f3ae";
      }

      .fa-h-square:before {
        content: "\\f0fd";
      }

      .fa-hacker-news:before {
        content: "\\f1d4";
      }

      .fa-hacker-news-square:before {
        content: "\\f3af";
      }

      .fa-hackerrank:before {
        content: "\\f5f7";
      }

      .fa-hamburger:before {
        content: "\\f805";
      }

      .fa-hammer:before {
        content: "\\f6e3";
      }

      .fa-hamsa:before {
        content: "\\f665";
      }

      .fa-hand-holding:before {
        content: "\\f4bd";
      }

      .fa-hand-holding-heart:before {
        content: "\\f4be";
      }

      .fa-hand-holding-usd:before {
        content: "\\f4c0";
      }

      .fa-hand-lizard:before {
        content: "\\f258";
      }

      .fa-hand-middle-finger:before {
        content: "\\f806";
      }

      .fa-hand-paper:before {
        content: "\\f256";
      }

      .fa-hand-peace:before {
        content: "\\f25b";
      }

      .fa-hand-point-down:before {
        content: "\\f0a7";
      }

      .fa-hand-point-left:before {
        content: "\\f0a5";
      }

      .fa-hand-point-right:before {
        content: "\\f0a4";
      }

      .fa-hand-point-up:before {
        content: "\\f0a6";
      }

      .fa-hand-pointer:before {
        content: "\\f25a";
      }

      .fa-hand-rock:before {
        content: "\\f255";
      }

      .fa-hand-scissors:before {
        content: "\\f257";
      }

      .fa-hand-spock:before {
        content: "\\f259";
      }

      .fa-hands:before {
        content: "\\f4c2";
      }

      .fa-hands-helping:before {
        content: "\\f4c4";
      }

      .fa-handshake:before {
        content: "\\f2b5";
      }

      .fa-hanukiah:before {
        content: "\\f6e6";
      }

      .fa-hard-hat:before {
        content: "\\f807";
      }

      .fa-hashtag:before {
        content: "\\f292";
      }

      .fa-hat-cowboy:before {
        content: "\\f8c0";
      }

      .fa-hat-cowboy-side:before {
        content: "\\f8c1";
      }

      .fa-hat-wizard:before {
        content: "\\f6e8";
      }

      .fa-haykal:before {
        content: "\\f666";
      }

      .fa-hdd:before {
        content: "\\f0a0";
      }

      .fa-heading:before {
        content: "\\f1dc";
      }

      .fa-headphones:before {
        content: "\\f025";
      }

      .fa-headphones-alt:before {
        content: "\\f58f";
      }

      .fa-headset:before {
        content: "\\f590";
      }

      .fa-heart:before {
        content: "\\f004";
      }

      .fa-heart-broken:before {
        content: "\\f7a9";
      }

      .fa-heartbeat:before {
        content: "\\f21e";
      }

      .fa-helicopter:before {
        content: "\\f533";
      }

      .fa-highlighter:before {
        content: "\\f591";
      }

      .fa-hiking:before {
        content: "\\f6ec";
      }

      .fa-hippo:before {
        content: "\\f6ed";
      }

      .fa-hips:before {
        content: "\\f452";
      }

      .fa-hire-a-helper:before {
        content: "\\f3b0";
      }

      .fa-history:before {
        content: "\\f1da";
      }

      .fa-hockey-puck:before {
        content: "\\f453";
      }

      .fa-holly-berry:before {
        content: "\\f7aa";
      }

      .fa-home:before {
        content: "\\f015";
      }

      .fa-hooli:before {
        content: "\\f427";
      }

      .fa-hornbill:before {
        content: "\\f592";
      }

      .fa-horse:before {
        content: "\\f6f0";
      }

      .fa-horse-head:before {
        content: "\\f7ab";
      }

      .fa-hospital:before {
        content: "\\f0f8";
      }

      .fa-hospital-alt:before {
        content: "\\f47d";
      }

      .fa-hospital-symbol:before {
        content: "\\f47e";
      }

      .fa-hot-tub:before {
        content: "\\f593";
      }

      .fa-hotdog:before {
        content: "\\f80f";
      }

      .fa-hotel:before {
        content: "\\f594";
      }

      .fa-hotjar:before {
        content: "\\f3b1";
      }

      .fa-hourglass:before {
        content: "\\f254";
      }

      .fa-hourglass-end:before {
        content: "\\f253";
      }

      .fa-hourglass-half:before {
        content: "\\f252";
      }

      .fa-hourglass-start:before {
        content: "\\f251";
      }

      .fa-house-damage:before {
        content: "\\f6f1";
      }

      .fa-houzz:before {
        content: "\\f27c";
      }

      .fa-hryvnia:before {
        content: "\\f6f2";
      }

      .fa-html5:before {
        content: "\\f13b";
      }

      .fa-hubspot:before {
        content: "\\f3b2";
      }

      .fa-i-cursor:before {
        content: "\\f246";
      }

      .fa-ice-cream:before {
        content: "\\f810";
      }

      .fa-icicles:before {
        content: "\\f7ad";
      }

      .fa-icons:before {
        content: "\\f86d";
      }

      .fa-id-badge:before {
        content: "\\f2c1";
      }

      .fa-id-card:before {
        content: "\\f2c2";
      }

      .fa-id-card-alt:before {
        content: "\\f47f";
      }

      .fa-igloo:before {
        content: "\\f7ae";
      }

      .fa-image:before {
        content: "\\f03e";
      }

      .fa-images:before {
        content: "\\f302";
      }

      .fa-imdb:before {
        content: "\\f2d8";
      }

      .fa-inbox:before {
        content: "\\f01c";
      }

      .fa-indent:before {
        content: "\\f03c";
      }

      .fa-industry:before {
        content: "\\f275";
      }

      .fa-infinity:before {
        content: "\\f534";
      }

      .fa-info:before {
        content: "\\f129";
      }

      .fa-info-circle:before {
        content: "\\f05a";
      }

      .fa-instagram:before {
        content: "\\f16d";
      }

      .fa-intercom:before {
        content: "\\f7af";
      }

      .fa-internet-explorer:before {
        content: "\\f26b";
      }

      .fa-invision:before {
        content: "\\f7b0";
      }

      .fa-ioxhost:before {
        content: "\\f208";
      }

      .fa-italic:before {
        content: "\\f033";
      }

      .fa-itch-io:before {
        content: "\\f83a";
      }

      .fa-itunes:before {
        content: "\\f3b4";
      }

      .fa-itunes-note:before {
        content: "\\f3b5";
      }

      .fa-java:before {
        content: "\\f4e4";
      }

      .fa-jedi:before {
        content: "\\f669";
      }

      .fa-jedi-order:before {
        content: "\\f50e";
      }

      .fa-jenkins:before {
        content: "\\f3b6";
      }

      .fa-jira:before {
        content: "\\f7b1";
      }

      .fa-joget:before {
        content: "\\f3b7";
      }

      .fa-joint:before {
        content: "\\f595";
      }

      .fa-joomla:before {
        content: "\\f1aa";
      }

      .fa-journal-whills:before {
        content: "\\f66a";
      }

      .fa-js:before {
        content: "\\f3b8";
      }

      .fa-js-square:before {
        content: "\\f3b9";
      }

      .fa-jsfiddle:before {
        content: "\\f1cc";
      }

      .fa-kaaba:before {
        content: "\\f66b";
      }

      .fa-kaggle:before {
        content: "\\f5fa";
      }

      .fa-key:before {
        content: "\\f084";
      }

      .fa-keybase:before {
        content: "\\f4f5";
      }

      .fa-keyboard:before {
        content: "\\f11c";
      }

      .fa-keycdn:before {
        content: "\\f3ba";
      }

      .fa-khanda:before {
        content: "\\f66d";
      }

      .fa-kickstarter:before {
        content: "\\f3bb";
      }

      .fa-kickstarter-k:before {
        content: "\\f3bc";
      }

      .fa-kiss:before {
        content: "\\f596";
      }

      .fa-kiss-beam:before {
        content: "\\f597";
      }

      .fa-kiss-wink-heart:before {
        content: "\\f598";
      }

      .fa-kiwi-bird:before {
        content: "\\f535";
      }

      .fa-korvue:before {
        content: "\\f42f";
      }

      .fa-landmark:before {
        content: "\\f66f";
      }

      .fa-language:before {
        content: "\\f1ab";
      }

      .fa-laptop:before {
        content: "\\f109";
      }

      .fa-laptop-code:before {
        content: "\\f5fc";
      }

      .fa-laptop-medical:before {
        content: "\\f812";
      }

      .fa-laravel:before {
        content: "\\f3bd";
      }

      .fa-lastfm:before {
        content: "\\f202";
      }

      .fa-lastfm-square:before {
        content: "\\f203";
      }

      .fa-laugh:before {
        content: "\\f599";
      }

      .fa-laugh-beam:before {
        content: "\\f59a";
      }

      .fa-laugh-squint:before {
        content: "\\f59b";
      }

      .fa-laugh-wink:before {
        content: "\\f59c";
      }

      .fa-layer-group:before {
        content: "\\f5fd";
      }

      .fa-leaf:before {
        content: "\\f06c";
      }

      .fa-leanpub:before {
        content: "\\f212";
      }

      .fa-lemon:before {
        content: "\\f094";
      }

      .fa-less:before {
        content: "\\f41d";
      }

      .fa-less-than:before {
        content: "\\f536";
      }

      .fa-less-than-equal:before {
        content: "\\f537";
      }

      .fa-level-down-alt:before {
        content: "\\f3be";
      }

      .fa-level-up-alt:before {
        content: "\\f3bf";
      }

      .fa-life-ring:before {
        content: "\\f1cd";
      }

      .fa-lightbulb:before {
        content: "\\f0eb";
      }

      .fa-line:before {
        content: "\\f3c0";
      }

      .fa-link:before {
        content: "\\f0c1";
      }

      .fa-linkedin:before {
        content: "\\f08c";
      }

      .fa-linkedin-in:before {
        content: "\\f0e1";
      }

      .fa-linode:before {
        content: "\\f2b8";
      }

      .fa-linux:before {
        content: "\\f17c";
      }

      .fa-lira-sign:before {
        content: "\\f195";
      }

      .fa-list:before {
        content: "\\f03a";
      }

      .fa-list-alt:before {
        content: "\\f022";
      }

      .fa-list-ol:before {
        content: "\\f0cb";
      }

      .fa-list-ul:before {
        content: "\\f0ca";
      }

      .fa-location-arrow:before {
        content: "\\f124";
      }

      .fa-lock:before {
        content: "\\f023";
      }

      .fa-lock-open:before {
        content: "\\f3c1";
      }

      .fa-long-arrow-alt-down:before {
        content: "\\f309";
      }

      .fa-long-arrow-alt-left:before {
        content: "\\f30a";
      }

      .fa-long-arrow-alt-right:before {
        content: "\\f30b";
      }

      .fa-long-arrow-alt-up:before {
        content: "\\f30c";
      }

      .fa-low-vision:before {
        content: "\\f2a8";
      }

      .fa-luggage-cart:before {
        content: "\\f59d";
      }

      .fa-lyft:before {
        content: "\\f3c3";
      }

      .fa-magento:before {
        content: "\\f3c4";
      }

      .fa-magic:before {
        content: "\\f0d0";
      }

      .fa-magnet:before {
        content: "\\f076";
      }

      .fa-mail-bulk:before {
        content: "\\f674";
      }

      .fa-mailchimp:before {
        content: "\\f59e";
      }

      .fa-male:before {
        content: "\\f183";
      }

      .fa-mandalorian:before {
        content: "\\f50f";
      }

      .fa-map:before {
        content: "\\f279";
      }

      .fa-map-marked:before {
        content: "\\f59f";
      }

      .fa-map-marked-alt:before {
        content: "\\f5a0";
      }

      .fa-map-marker:before {
        content: "\\f041";
      }

      .fa-map-marker-alt:before {
        content: "\\f3c5";
      }

      .fa-map-pin:before {
        content: "\\f276";
      }

      .fa-map-signs:before {
        content: "\\f277";
      }

      .fa-markdown:before {
        content: "\\f60f";
      }

      .fa-marker:before {
        content: "\\f5a1";
      }

      .fa-mars:before {
        content: "\\f222";
      }

      .fa-mars-double:before {
        content: "\\f227";
      }

      .fa-mars-stroke:before {
        content: "\\f229";
      }

      .fa-mars-stroke-h:before {
        content: "\\f22b";
      }

      .fa-mars-stroke-v:before {
        content: "\\f22a";
      }

      .fa-mask:before {
        content: "\\f6fa";
      }

      .fa-mastodon:before {
        content: "\\f4f6";
      }

      .fa-maxcdn:before {
        content: "\\f136";
      }

      .fa-mdb:before {
        content: "\\f8ca";
      }

      .fa-medal:before {
        content: "\\f5a2";
      }

      .fa-medapps:before {
        content: "\\f3c6";
      }

      .fa-medium:before {
        content: "\\f23a";
      }

      .fa-medium-m:before {
        content: "\\f3c7";
      }

      .fa-medkit:before {
        content: "\\f0fa";
      }

      .fa-medrt:before {
        content: "\\f3c8";
      }

      .fa-meetup:before {
        content: "\\f2e0";
      }

      .fa-megaport:before {
        content: "\\f5a3";
      }

      .fa-meh:before {
        content: "\\f11a";
      }

      .fa-meh-blank:before {
        content: "\\f5a4";
      }

      .fa-meh-rolling-eyes:before {
        content: "\\f5a5";
      }

      .fa-memory:before {
        content: "\\f538";
      }

      .fa-mendeley:before {
        content: "\\f7b3";
      }

      .fa-menorah:before {
        content: "\\f676";
      }

      .fa-mercury:before {
        content: "\\f223";
      }

      .fa-meteor:before {
        content: "\\f753";
      }

      .fa-microchip:before {
        content: "\\f2db";
      }

      .fa-microphone:before {
        content: "\\f130";
      }

      .fa-microphone-alt:before {
        content: "\\f3c9";
      }

      .fa-microphone-alt-slash:before {
        content: "\\f539";
      }

      .fa-microphone-slash:before {
        content: "\\f131";
      }

      .fa-microscope:before {
        content: "\\f610";
      }

      .fa-microsoft:before {
        content: "\\f3ca";
      }

      .fa-minus:before {
        content: "\\f068";
      }

      .fa-minus-circle:before {
        content: "\\f056";
      }

      .fa-minus-square:before {
        content: "\\f146";
      }

      .fa-mitten:before {
        content: "\\f7b5";
      }

      .fa-mix:before {
        content: "\\f3cb";
      }

      .fa-mixcloud:before {
        content: "\\f289";
      }

      .fa-mizuni:before {
        content: "\\f3cc";
      }

      .fa-mobile:before {
        content: "\\f10b";
      }

      .fa-mobile-alt:before {
        content: "\\f3cd";
      }

      .fa-modx:before {
        content: "\\f285";
      }

      .fa-monero:before {
        content: "\\f3d0";
      }

      .fa-money-bill:before {
        content: "\\f0d6";
      }

      .fa-money-bill-alt:before {
        content: "\\f3d1";
      }

      .fa-money-bill-wave:before {
        content: "\\f53a";
      }

      .fa-money-bill-wave-alt:before {
        content: "\\f53b";
      }

      .fa-money-check:before {
        content: "\\f53c";
      }

      .fa-money-check-alt:before {
        content: "\\f53d";
      }

      .fa-monument:before {
        content: "\\f5a6";
      }

      .fa-moon:before {
        content: "\\f186";
      }

      .fa-mortar-pestle:before {
        content: "\\f5a7";
      }

      .fa-mosque:before {
        content: "\\f678";
      }

      .fa-motorcycle:before {
        content: "\\f21c";
      }

      .fa-mountain:before {
        content: "\\f6fc";
      }

      .fa-mouse:before {
        content: "\\f8cc";
      }

      .fa-mouse-pointer:before {
        content: "\\f245";
      }

      .fa-mug-hot:before {
        content: "\\f7b6";
      }

      .fa-music:before {
        content: "\\f001";
      }

      .fa-napster:before {
        content: "\\f3d2";
      }

      .fa-neos:before {
        content: "\\f612";
      }

      .fa-network-wired:before {
        content: "\\f6ff";
      }

      .fa-neuter:before {
        content: "\\f22c";
      }

      .fa-newspaper:before {
        content: "\\f1ea";
      }

      .fa-nimblr:before {
        content: "\\f5a8";
      }

      .fa-node:before {
        content: "\\f419";
      }

      .fa-node-js:before {
        content: "\\f3d3";
      }

      .fa-not-equal:before {
        content: "\\f53e";
      }

      .fa-notes-medical:before {
        content: "\\f481";
      }

      .fa-npm:before {
        content: "\\f3d4";
      }

      .fa-ns8:before {
        content: "\\f3d5";
      }

      .fa-nutritionix:before {
        content: "\\f3d6";
      }

      .fa-object-group:before {
        content: "\\f247";
      }

      .fa-object-ungroup:before {
        content: "\\f248";
      }

      .fa-odnoklassniki:before {
        content: "\\f263";
      }

      .fa-odnoklassniki-square:before {
        content: "\\f264";
      }

      .fa-oil-can:before {
        content: "\\f613";
      }

      .fa-old-republic:before {
        content: "\\f510";
      }

      .fa-om:before {
        content: "\\f679";
      }

      .fa-opencart:before {
        content: "\\f23d";
      }

      .fa-openid:before {
        content: "\\f19b";
      }

      .fa-opera:before {
        content: "\\f26a";
      }

      .fa-optin-monster:before {
        content: "\\f23c";
      }

      .fa-orcid:before {
        content: "\\f8d2";
      }

      .fa-osi:before {
        content: "\\f41a";
      }

      .fa-otter:before {
        content: "\\f700";
      }

      .fa-outdent:before {
        content: "\\f03b";
      }

      .fa-page4:before {
        content: "\\f3d7";
      }

      .fa-pagelines:before {
        content: "\\f18c";
      }

      .fa-pager:before {
        content: "\\f815";
      }

      .fa-paint-brush:before {
        content: "\\f1fc";
      }

      .fa-paint-roller:before {
        content: "\\f5aa";
      }

      .fa-palette:before {
        content: "\\f53f";
      }

      .fa-palfed:before {
        content: "\\f3d8";
      }

      .fa-pallet:before {
        content: "\\f482";
      }

      .fa-paper-plane:before {
        content: "\\f1d8";
      }

      .fa-paperclip:before {
        content: "\\f0c6";
      }

      .fa-parachute-box:before {
        content: "\\f4cd";
      }

      .fa-paragraph:before {
        content: "\\f1dd";
      }

      .fa-parking:before {
        content: "\\f540";
      }

      .fa-passport:before {
        content: "\\f5ab";
      }

      .fa-pastafarianism:before {
        content: "\\f67b";
      }

      .fa-paste:before {
        content: "\\f0ea";
      }

      .fa-patreon:before {
        content: "\\f3d9";
      }

      .fa-pause:before {
        content: "\\f04c";
      }

      .fa-pause-circle:before {
        content: "\\f28b";
      }

      .fa-paw:before {
        content: "\\f1b0";
      }

      .fa-paypal:before {
        content: "\\f1ed";
      }

      .fa-peace:before {
        content: "\\f67c";
      }

      .fa-pen:before {
        content: "\\f304";
      }

      .fa-pen-alt:before {
        content: "\\f305";
      }

      .fa-pen-fancy:before {
        content: "\\f5ac";
      }

      .fa-pen-nib:before {
        content: "\\f5ad";
      }

      .fa-pen-square:before {
        content: "\\f14b";
      }

      .fa-pencil-alt:before {
        content: "\\f303";
      }

      .fa-pencil-ruler:before {
        content: "\\f5ae";
      }

      .fa-penny-arcade:before {
        content: "\\f704";
      }

      .fa-people-carry:before {
        content: "\\f4ce";
      }

      .fa-pepper-hot:before {
        content: "\\f816";
      }

      .fa-percent:before {
        content: "\\f295";
      }

      .fa-percentage:before {
        content: "\\f541";
      }

      .fa-periscope:before {
        content: "\\f3da";
      }

      .fa-person-booth:before {
        content: "\\f756";
      }

      .fa-phabricator:before {
        content: "\\f3db";
      }

      .fa-phoenix-framework:before {
        content: "\\f3dc";
      }

      .fa-phoenix-squadron:before {
        content: "\\f511";
      }

      .fa-phone:before {
        content: "\\f095";
      }

      .fa-phone-alt:before {
        content: "\\f879";
      }

      .fa-phone-slash:before {
        content: "\\f3dd";
      }

      .fa-phone-square:before {
        content: "\\f098";
      }

      .fa-phone-square-alt:before {
        content: "\\f87b";
      }

      .fa-phone-volume:before {
        content: "\\f2a0";
      }

      .fa-photo-video:before {
        content: "\\f87c";
      }

      .fa-php:before {
        content: "\\f457";
      }

      .fa-pied-piper:before {
        content: "\\f2ae";
      }

      .fa-pied-piper-alt:before {
        content: "\\f1a8";
      }

      .fa-pied-piper-hat:before {
        content: "\\f4e5";
      }

      .fa-pied-piper-pp:before {
        content: "\\f1a7";
      }

      .fa-piggy-bank:before {
        content: "\\f4d3";
      }

      .fa-pills:before {
        content: "\\f484";
      }

      .fa-pinterest:before {
        content: "\\f0d2";
      }

      .fa-pinterest-p:before {
        content: "\\f231";
      }

      .fa-pinterest-square:before {
        content: "\\f0d3";
      }

      .fa-pizza-slice:before {
        content: "\\f818";
      }

      .fa-place-of-worship:before {
        content: "\\f67f";
      }

      .fa-plane:before {
        content: "\\f072";
      }

      .fa-plane-arrival:before {
        content: "\\f5af";
      }

      .fa-plane-departure:before {
        content: "\\f5b0";
      }

      .fa-play:before {
        content: "\\f04b";
      }

      .fa-play-circle:before {
        content: "\\f144";
      }

      .fa-playstation:before {
        content: "\\f3df";
      }

      .fa-plug:before {
        content: "\\f1e6";
      }

      .fa-plus:before {
        content: "\\f067";
      }

      .fa-plus-circle:before {
        content: "\\f055";
      }

      .fa-plus-square:before {
        content: "\\f0fe";
      }

      .fa-podcast:before {
        content: "\\f2ce";
      }

      .fa-poll:before {
        content: "\\f681";
      }

      .fa-poll-h:before {
        content: "\\f682";
      }

      .fa-poo:before {
        content: "\\f2fe";
      }

      .fa-poo-storm:before {
        content: "\\f75a";
      }

      .fa-poop:before {
        content: "\\f619";
      }

      .fa-portrait:before {
        content: "\\f3e0";
      }

      .fa-pound-sign:before {
        content: "\\f154";
      }

      .fa-power-off:before {
        content: "\\f011";
      }

      .fa-pray:before {
        content: "\\f683";
      }

      .fa-praying-hands:before {
        content: "\\f684";
      }

      .fa-prescription:before {
        content: "\\f5b1";
      }

      .fa-prescription-bottle:before {
        content: "\\f485";
      }

      .fa-prescription-bottle-alt:before {
        content: "\\f486";
      }

      .fa-print:before {
        content: "\\f02f";
      }

      .fa-procedures:before {
        content: "\\f487";
      }

      .fa-product-hunt:before {
        content: "\\f288";
      }

      .fa-project-diagram:before {
        content: "\\f542";
      }

      .fa-pushed:before {
        content: "\\f3e1";
      }

      .fa-puzzle-piece:before {
        content: "\\f12e";
      }

      .fa-python:before {
        content: "\\f3e2";
      }

      .fa-qq:before {
        content: "\\f1d6";
      }

      .fa-qrcode:before {
        content: "\\f029";
      }

      .fa-question:before {
        content: "\\f128";
      }

      .fa-question-circle:before {
        content: "\\f059";
      }

      .fa-quidditch:before {
        content: "\\f458";
      }

      .fa-quinscape:before {
        content: "\\f459";
      }

      .fa-quora:before {
        content: "\\f2c4";
      }

      .fa-quote-left:before {
        content: "\\f10d";
      }

      .fa-quote-right:before {
        content: "\\f10e";
      }

      .fa-quran:before {
        content: "\\f687";
      }

      .fa-r-project:before {
        content: "\\f4f7";
      }

      .fa-radiation:before {
        content: "\\f7b9";
      }

      .fa-radiation-alt:before {
        content: "\\f7ba";
      }

      .fa-rainbow:before {
        content: "\\f75b";
      }

      .fa-random:before {
        content: "\\f074";
      }

      .fa-raspberry-pi:before {
        content: "\\f7bb";
      }

      .fa-ravelry:before {
        content: "\\f2d9";
      }

      .fa-react:before {
        content: "\\f41b";
      }

      .fa-reacteurope:before {
        content: "\\f75d";
      }

      .fa-readme:before {
        content: "\\f4d5";
      }

      .fa-rebel:before {
        content: "\\f1d0";
      }

      .fa-receipt:before {
        content: "\\f543";
      }

      .fa-record-vinyl:before {
        content: "\\f8d9";
      }

      .fa-recycle:before {
        content: "\\f1b8";
      }

      .fa-red-river:before {
        content: "\\f3e3";
      }

      .fa-reddit:before {
        content: "\\f1a1";
      }

      .fa-reddit-alien:before {
        content: "\\f281";
      }

      .fa-reddit-square:before {
        content: "\\f1a2";
      }

      .fa-redhat:before {
        content: "\\f7bc";
      }

      .fa-redo:before {
        content: "\\f01e";
      }

      .fa-redo-alt:before {
        content: "\\f2f9";
      }

      .fa-registered:before {
        content: "\\f25d";
      }

      .fa-remove-format:before {
        content: "\\f87d";
      }

      .fa-renren:before {
        content: "\\f18b";
      }

      .fa-reply:before {
        content: "\\f3e5";
      }

      .fa-reply-all:before {
        content: "\\f122";
      }

      .fa-replyd:before {
        content: "\\f3e6";
      }

      .fa-republican:before {
        content: "\\f75e";
      }

      .fa-researchgate:before {
        content: "\\f4f8";
      }

      .fa-resolving:before {
        content: "\\f3e7";
      }

      .fa-restroom:before {
        content: "\\f7bd";
      }

      .fa-retweet:before {
        content: "\\f079";
      }

      .fa-rev:before {
        content: "\\f5b2";
      }

      .fa-ribbon:before {
        content: "\\f4d6";
      }

      .fa-ring:before {
        content: "\\f70b";
      }

      .fa-road:before {
        content: "\\f018";
      }

      .fa-robot:before {
        content: "\\f544";
      }

      .fa-rocket:before {
        content: "\\f135";
      }

      .fa-rocketchat:before {
        content: "\\f3e8";
      }

      .fa-rockrms:before {
        content: "\\f3e9";
      }

      .fa-route:before {
        content: "\\f4d7";
      }

      .fa-rss:before {
        content: "\\f09e";
      }

      .fa-rss-square:before {
        content: "\\f143";
      }

      .fa-ruble-sign:before {
        content: "\\f158";
      }

      .fa-ruler:before {
        content: "\\f545";
      }

      .fa-ruler-combined:before {
        content: "\\f546";
      }

      .fa-ruler-horizontal:before {
        content: "\\f547";
      }

      .fa-ruler-vertical:before {
        content: "\\f548";
      }

      .fa-running:before {
        content: "\\f70c";
      }

      .fa-rupee-sign:before {
        content: "\\f156";
      }

      .fa-sad-cry:before {
        content: "\\f5b3";
      }

      .fa-sad-tear:before {
        content: "\\f5b4";
      }

      .fa-safari:before {
        content: "\\f267";
      }

      .fa-salesforce:before {
        content: "\\f83b";
      }

      .fa-sass:before {
        content: "\\f41e";
      }

      .fa-satellite:before {
        content: "\\f7bf";
      }

      .fa-satellite-dish:before {
        content: "\\f7c0";
      }

      .fa-save:before {
        content: "\\f0c7";
      }

      .fa-schlix:before {
        content: "\\f3ea";
      }

      .fa-school:before {
        content: "\\f549";
      }

      .fa-screwdriver:before {
        content: "\\f54a";
      }

      .fa-scribd:before {
        content: "\\f28a";
      }

      .fa-scroll:before {
        content: "\\f70e";
      }

      .fa-sd-card:before {
        content: "\\f7c2";
      }

      .fa-search:before {
        content: "\\f002";
      }

      .fa-search-dollar:before {
        content: "\\f688";
      }

      .fa-search-location:before {
        content: "\\f689";
      }

      .fa-search-minus:before {
        content: "\\f010";
      }

      .fa-search-plus:before {
        content: "\\f00e";
      }

      .fa-searchengin:before {
        content: "\\f3eb";
      }

      .fa-seedling:before {
        content: "\\f4d8";
      }

      .fa-sellcast:before {
        content: "\\f2da";
      }

      .fa-sellsy:before {
        content: "\\f213";
      }

      .fa-server:before {
        content: "\\f233";
      }

      .fa-servicestack:before {
        content: "\\f3ec";
      }

      .fa-shapes:before {
        content: "\\f61f";
      }

      .fa-share:before {
        content: "\\f064";
      }

      .fa-share-alt:before {
        content: "\\f1e0";
      }

      .fa-share-alt-square:before {
        content: "\\f1e1";
      }

      .fa-share-square:before {
        content: "\\f14d";
      }

      .fa-shekel-sign:before {
        content: "\\f20b";
      }

      .fa-shield-alt:before {
        content: "\\f3ed";
      }

      .fa-ship:before {
        content: "\\f21a";
      }

      .fa-shipping-fast:before {
        content: "\\f48b";
      }

      .fa-shirtsinbulk:before {
        content: "\\f214";
      }

      .fa-shoe-prints:before {
        content: "\\f54b";
      }

      .fa-shopping-bag:before {
        content: "\\f290";
      }

      .fa-shopping-basket:before {
        content: "\\f291";
      }

      .fa-shopping-cart:before {
        content: "\\f07a";
      }

      .fa-shopware:before {
        content: "\\f5b5";
      }

      .fa-shower:before {
        content: "\\f2cc";
      }

      .fa-shuttle-van:before {
        content: "\\f5b6";
      }

      .fa-sign:before {
        content: "\\f4d9";
      }

      .fa-sign-in-alt:before {
        content: "\\f2f6";
      }

      .fa-sign-language:before {
        content: "\\f2a7";
      }

      .fa-sign-out-alt:before {
        content: "\\f2f5";
      }

      .fa-signal:before {
        content: "\\f012";
      }

      .fa-signature:before {
        content: "\\f5b7";
      }

      .fa-sim-card:before {
        content: "\\f7c4";
      }

      .fa-simplybuilt:before {
        content: "\\f215";
      }

      .fa-sistrix:before {
        content: "\\f3ee";
      }

      .fa-sitemap:before {
        content: "\\f0e8";
      }

      .fa-sith:before {
        content: "\\f512";
      }

      .fa-skating:before {
        content: "\\f7c5";
      }

      .fa-sketch:before {
        content: "\\f7c6";
      }

      .fa-skiing:before {
        content: "\\f7c9";
      }

      .fa-skiing-nordic:before {
        content: "\\f7ca";
      }

      .fa-skull:before {
        content: "\\f54c";
      }

      .fa-skull-crossbones:before {
        content: "\\f714";
      }

      .fa-skyatlas:before {
        content: "\\f216";
      }

      .fa-skype:before {
        content: "\\f17e";
      }

      .fa-slack:before {
        content: "\\f198";
      }

      .fa-slack-hash:before {
        content: "\\f3ef";
      }

      .fa-slash:before {
        content: "\\f715";
      }

      .fa-sleigh:before {
        content: "\\f7cc";
      }

      .fa-sliders-h:before {
        content: "\\f1de";
      }

      .fa-slideshare:before {
        content: "\\f1e7";
      }

      .fa-smile:before {
        content: "\\f118";
      }

      .fa-smile-beam:before {
        content: "\\f5b8";
      }

      .fa-smile-wink:before {
        content: "\\f4da";
      }

      .fa-smog:before {
        content: "\\f75f";
      }

      .fa-smoking:before {
        content: "\\f48d";
      }

      .fa-smoking-ban:before {
        content: "\\f54d";
      }

      .fa-sms:before {
        content: "\\f7cd";
      }

      .fa-snapchat:before {
        content: "\\f2ab";
      }

      .fa-snapchat-ghost:before {
        content: "\\f2ac";
      }

      .fa-snapchat-square:before {
        content: "\\f2ad";
      }

      .fa-snowboarding:before {
        content: "\\f7ce";
      }

      .fa-snowflake:before {
        content: "\\f2dc";
      }

      .fa-snowman:before {
        content: "\\f7d0";
      }

      .fa-snowplow:before {
        content: "\\f7d2";
      }

      .fa-socks:before {
        content: "\\f696";
      }

      .fa-solar-panel:before {
        content: "\\f5ba";
      }

      .fa-sort:before {
        content: "\\f0dc";
      }

      .fa-sort-alpha-down:before {
        content: "\\f15d";
      }

      .fa-sort-alpha-down-alt:before {
        content: "\\f881";
      }

      .fa-sort-alpha-up:before {
        content: "\\f15e";
      }

      .fa-sort-alpha-up-alt:before {
        content: "\\f882";
      }

      .fa-sort-amount-down:before {
        content: "\\f160";
      }

      .fa-sort-amount-down-alt:before {
        content: "\\f884";
      }

      .fa-sort-amount-up:before {
        content: "\\f161";
      }

      .fa-sort-amount-up-alt:before {
        content: "\\f885";
      }

      .fa-sort-down:before {
        content: "\\f0dd";
      }

      .fa-sort-numeric-down:before {
        content: "\\f162";
      }

      .fa-sort-numeric-down-alt:before {
        content: "\\f886";
      }

      .fa-sort-numeric-up:before {
        content: "\\f163";
      }

      .fa-sort-numeric-up-alt:before {
        content: "\\f887";
      }

      .fa-sort-up:before {
        content: "\\f0de";
      }

      .fa-soundcloud:before {
        content: "\\f1be";
      }

      .fa-sourcetree:before {
        content: "\\f7d3";
      }

      .fa-spa:before {
        content: "\\f5bb";
      }

      .fa-space-shuttle:before {
        content: "\\f197";
      }

      .fa-speakap:before {
        content: "\\f3f3";
      }

      .fa-speaker-deck:before {
        content: "\\f83c";
      }

      .fa-spell-check:before {
        content: "\\f891";
      }

      .fa-spider:before {
        content: "\\f717";
      }

      .fa-spinner:before {
        content: "\\f110";
      }

      .fa-splotch:before {
        content: "\\f5bc";
      }

      .fa-spotify:before {
        content: "\\f1bc";
      }

      .fa-spray-can:before {
        content: "\\f5bd";
      }

      .fa-square:before {
        content: "\\f0c8";
      }

      .fa-square-full:before {
        content: "\\f45c";
      }

      .fa-square-root-alt:before {
        content: "\\f698";
      }

      .fa-squarespace:before {
        content: "\\f5be";
      }

      .fa-stack-exchange:before {
        content: "\\f18d";
      }

      .fa-stack-overflow:before {
        content: "\\f16c";
      }

      .fa-stackpath:before {
        content: "\\f842";
      }

      .fa-stamp:before {
        content: "\\f5bf";
      }

      .fa-star:before {
        content: "\\f005";
      }

      .fa-star-and-crescent:before {
        content: "\\f699";
      }

      .fa-star-half:before {
        content: "\\f089";
      }

      .fa-star-half-alt:before {
        content: "\\f5c0";
      }

      .fa-star-of-david:before {
        content: "\\f69a";
      }

      .fa-star-of-life:before {
        content: "\\f621";
      }

      .fa-staylinked:before {
        content: "\\f3f5";
      }

      .fa-steam:before {
        content: "\\f1b6";
      }

      .fa-steam-square:before {
        content: "\\f1b7";
      }

      .fa-steam-symbol:before {
        content: "\\f3f6";
      }

      .fa-step-backward:before {
        content: "\\f048";
      }

      .fa-step-forward:before {
        content: "\\f051";
      }

      .fa-stethoscope:before {
        content: "\\f0f1";
      }

      .fa-sticker-mule:before {
        content: "\\f3f7";
      }

      .fa-sticky-note:before {
        content: "\\f249";
      }

      .fa-stop:before {
        content: "\\f04d";
      }

      .fa-stop-circle:before {
        content: "\\f28d";
      }

      .fa-stopwatch:before {
        content: "\\f2f2";
      }

      .fa-store:before {
        content: "\\f54e";
      }

      .fa-store-alt:before {
        content: "\\f54f";
      }

      .fa-strava:before {
        content: "\\f428";
      }

      .fa-stream:before {
        content: "\\f550";
      }

      .fa-street-view:before {
        content: "\\f21d";
      }

      .fa-strikethrough:before {
        content: "\\f0cc";
      }

      .fa-stripe:before {
        content: "\\f429";
      }

      .fa-stripe-s:before {
        content: "\\f42a";
      }

      .fa-stroopwafel:before {
        content: "\\f551";
      }

      .fa-studiovinari:before {
        content: "\\f3f8";
      }

      .fa-stumbleupon:before {
        content: "\\f1a4";
      }

      .fa-stumbleupon-circle:before {
        content: "\\f1a3";
      }

      .fa-subscript:before {
        content: "\\f12c";
      }

      .fa-subway:before {
        content: "\\f239";
      }

      .fa-suitcase:before {
        content: "\\f0f2";
      }

      .fa-suitcase-rolling:before {
        content: "\\f5c1";
      }

      .fa-sun:before {
        content: "\\f185";
      }

      .fa-superpowers:before {
        content: "\\f2dd";
      }

      .fa-superscript:before {
        content: "\\f12b";
      }

      .fa-supple:before {
        content: "\\f3f9";
      }

      .fa-surprise:before {
        content: "\\f5c2";
      }

      .fa-suse:before {
        content: "\\f7d6";
      }

      .fa-swatchbook:before {
        content: "\\f5c3";
      }

      .fa-swift:before {
        content: "\\f8e1";
      }

      .fa-swimmer:before {
        content: "\\f5c4";
      }

      .fa-swimming-pool:before {
        content: "\\f5c5";
      }

      .fa-symfony:before {
        content: "\\f83d";
      }

      .fa-synagogue:before {
        content: "\\f69b";
      }

      .fa-sync:before {
        content: "\\f021";
      }

      .fa-sync-alt:before {
        content: "\\f2f1";
      }

      .fa-syringe:before {
        content: "\\f48e";
      }

      .fa-table:before {
        content: "\\f0ce";
      }

      .fa-table-tennis:before {
        content: "\\f45d";
      }

      .fa-tablet:before {
        content: "\\f10a";
      }

      .fa-tablet-alt:before {
        content: "\\f3fa";
      }

      .fa-tablets:before {
        content: "\\f490";
      }

      .fa-tachometer-alt:before {
        content: "\\f3fd";
      }

      .fa-tag:before {
        content: "\\f02b";
      }

      .fa-tags:before {
        content: "\\f02c";
      }

      .fa-tape:before {
        content: "\\f4db";
      }

      .fa-tasks:before {
        content: "\\f0ae";
      }

      .fa-taxi:before {
        content: "\\f1ba";
      }

      .fa-teamspeak:before {
        content: "\\f4f9";
      }

      .fa-teeth:before {
        content: "\\f62e";
      }

      .fa-teeth-open:before {
        content: "\\f62f";
      }

      .fa-telegram:before {
        content: "\\f2c6";
      }

      .fa-telegram-plane:before {
        content: "\\f3fe";
      }

      .fa-temperature-high:before {
        content: "\\f769";
      }

      .fa-temperature-low:before {
        content: "\\f76b";
      }

      .fa-tencent-weibo:before {
        content: "\\f1d5";
      }

      .fa-tenge:before {
        content: "\\f7d7";
      }

      .fa-terminal:before {
        content: "\\f120";
      }

      .fa-text-height:before {
        content: "\\f034";
      }

      .fa-text-width:before {
        content: "\\f035";
      }

      .fa-th:before {
        content: "\\f00a";
      }

      .fa-th-large:before {
        content: "\\f009";
      }

      .fa-th-list:before {
        content: "\\f00b";
      }

      .fa-the-red-yeti:before {
        content: "\\f69d";
      }

      .fa-theater-masks:before {
        content: "\\f630";
      }

      .fa-themeco:before {
        content: "\\f5c6";
      }

      .fa-themeisle:before {
        content: "\\f2b2";
      }

      .fa-thermometer:before {
        content: "\\f491";
      }

      .fa-thermometer-empty:before {
        content: "\\f2cb";
      }

      .fa-thermometer-full:before {
        content: "\\f2c7";
      }

      .fa-thermometer-half:before {
        content: "\\f2c9";
      }

      .fa-thermometer-quarter:before {
        content: "\\f2ca";
      }

      .fa-thermometer-three-quarters:before {
        content: "\\f2c8";
      }

      .fa-think-peaks:before {
        content: "\\f731";
      }

      .fa-thumbs-down:before {
        content: "\\f165";
      }

      .fa-thumbs-up:before {
        content: "\\f164";
      }

      .fa-thumbtack:before {
        content: "\\f08d";
      }

      .fa-ticket-alt:before {
        content: "\\f3ff";
      }

      .fa-times:before {
        content: "\\f00d";
      }

      .fa-times-circle:before {
        content: "\\f057";
      }

      .fa-tint:before {
        content: "\\f043";
      }

      .fa-tint-slash:before {
        content: "\\f5c7";
      }

      .fa-tired:before {
        content: "\\f5c8";
      }

      .fa-toggle-off:before {
        content: "\\f204";
      }

      .fa-toggle-on:before {
        content: "\\f205";
      }

      .fa-toilet:before {
        content: "\\f7d8";
      }

      .fa-toilet-paper:before {
        content: "\\f71e";
      }

      .fa-toolbox:before {
        content: "\\f552";
      }

      .fa-tools:before {
        content: "\\f7d9";
      }

      .fa-tooth:before {
        content: "\\f5c9";
      }

      .fa-torah:before {
        content: "\\f6a0";
      }

      .fa-torii-gate:before {
        content: "\\f6a1";
      }

      .fa-tractor:before {
        content: "\\f722";
      }

      .fa-trade-federation:before {
        content: "\\f513";
      }

      .fa-trademark:before {
        content: "\\f25c";
      }

      .fa-traffic-light:before {
        content: "\\f637";
      }

      .fa-train:before {
        content: "\\f238";
      }

      .fa-tram:before {
        content: "\\f7da";
      }

      .fa-transgender:before {
        content: "\\f224";
      }

      .fa-transgender-alt:before {
        content: "\\f225";
      }

      .fa-trash:before {
        content: "\\f1f8";
      }

      .fa-trash-alt:before {
        content: "\\f2ed";
      }

      .fa-trash-restore:before {
        content: "\\f829";
      }

      .fa-trash-restore-alt:before {
        content: "\\f82a";
      }

      .fa-tree:before {
        content: "\\f1bb";
      }

      .fa-trello:before {
        content: "\\f181";
      }

      .fa-tripadvisor:before {
        content: "\\f262";
      }

      .fa-trophy:before {
        content: "\\f091";
      }

      .fa-truck:before {
        content: "\\f0d1";
      }

      .fa-truck-loading:before {
        content: "\\f4de";
      }

      .fa-truck-monster:before {
        content: "\\f63b";
      }

      .fa-truck-moving:before {
        content: "\\f4df";
      }

      .fa-truck-pickup:before {
        content: "\\f63c";
      }

      .fa-tshirt:before {
        content: "\\f553";
      }

      .fa-tty:before {
        content: "\\f1e4";
      }

      .fa-tumblr:before {
        content: "\\f173";
      }

      .fa-tumblr-square:before {
        content: "\\f174";
      }

      .fa-tv:before {
        content: "\\f26c";
      }

      .fa-twitch:before {
        content: "\\f1e8";
      }

      .fa-twitter:before {
        content: "\\f099";
      }

      .fa-twitter-square:before {
        content: "\\f081";
      }

      .fa-typo3:before {
        content: "\\f42b";
      }

      .fa-uber:before {
        content: "\\f402";
      }

      .fa-ubuntu:before {
        content: "\\f7df";
      }

      .fa-uikit:before {
        content: "\\f403";
      }

      .fa-umbraco:before {
        content: "\\f8e8";
      }

      .fa-umbrella:before {
        content: "\\f0e9";
      }

      .fa-umbrella-beach:before {
        content: "\\f5ca";
      }

      .fa-underline:before {
        content: "\\f0cd";
      }

      .fa-undo:before {
        content: "\\f0e2";
      }

      .fa-undo-alt:before {
        content: "\\f2ea";
      }

      .fa-uniregistry:before {
        content: "\\f404";
      }

      .fa-universal-access:before {
        content: "\\f29a";
      }

      .fa-university:before {
        content: "\\f19c";
      }

      .fa-unlink:before {
        content: "\\f127";
      }

      .fa-unlock:before {
        content: "\\f09c";
      }

      .fa-unlock-alt:before {
        content: "\\f13e";
      }

      .fa-untappd:before {
        content: "\\f405";
      }

      .fa-upload:before {
        content: "\\f093";
      }

      .fa-ups:before {
        content: "\\f7e0";
      }

      .fa-usb:before {
        content: "\\f287";
      }

      .fa-user:before {
        content: "\\f007";
      }

      .fa-user-alt:before {
        content: "\\f406";
      }

      .fa-user-alt-slash:before {
        content: "\\f4fa";
      }

      .fa-user-astronaut:before {
        content: "\\f4fb";
      }

      .fa-user-check:before {
        content: "\\f4fc";
      }

      .fa-user-circle:before {
        content: "\\f2bd";
      }

      .fa-user-clock:before {
        content: "\\f4fd";
      }

      .fa-user-cog:before {
        content: "\\f4fe";
      }

      .fa-user-edit:before {
        content: "\\f4ff";
      }

      .fa-user-friends:before {
        content: "\\f500";
      }

      .fa-user-graduate:before {
        content: "\\f501";
      }

      .fa-user-injured:before {
        content: "\\f728";
      }

      .fa-user-lock:before {
        content: "\\f502";
      }

      .fa-user-md:before {
        content: "\\f0f0";
      }

      .fa-user-minus:before {
        content: "\\f503";
      }

      .fa-user-ninja:before {
        content: "\\f504";
      }

      .fa-user-nurse:before {
        content: "\\f82f";
      }

      .fa-user-plus:before {
        content: "\\f234";
      }

      .fa-user-secret:before {
        content: "\\f21b";
      }

      .fa-user-shield:before {
        content: "\\f505";
      }

      .fa-user-slash:before {
        content: "\\f506";
      }

      .fa-user-tag:before {
        content: "\\f507";
      }

      .fa-user-tie:before {
        content: "\\f508";
      }

      .fa-user-times:before {
        content: "\\f235";
      }

      .fa-users:before {
        content: "\\f0c0";
      }

      .fa-users-cog:before {
        content: "\\f509";
      }

      .fa-usps:before {
        content: "\\f7e1";
      }

      .fa-ussunnah:before {
        content: "\\f407";
      }

      .fa-utensil-spoon:before {
        content: "\\f2e5";
      }

      .fa-utensils:before {
        content: "\\f2e7";
      }

      .fa-vaadin:before {
        content: "\\f408";
      }

      .fa-vector-square:before {
        content: "\\f5cb";
      }

      .fa-venus:before {
        content: "\\f221";
      }

      .fa-venus-double:before {
        content: "\\f226";
      }

      .fa-venus-mars:before {
        content: "\\f228";
      }

      .fa-viacoin:before {
        content: "\\f237";
      }

      .fa-viadeo:before {
        content: "\\f2a9";
      }

      .fa-viadeo-square:before {
        content: "\\f2aa";
      }

      .fa-vial:before {
        content: "\\f492";
      }

      .fa-vials:before {
        content: "\\f493";
      }

      .fa-viber:before {
        content: "\\f409";
      }

      .fa-video:before {
        content: "\\f03d";
      }

      .fa-video-slash:before {
        content: "\\f4e2";
      }

      .fa-vihara:before {
        content: "\\f6a7";
      }

      .fa-vimeo:before {
        content: "\\f40a";
      }

      .fa-vimeo-square:before {
        content: "\\f194";
      }

      .fa-vimeo-v:before {
        content: "\\f27d";
      }

      .fa-vine:before {
        content: "\\f1ca";
      }

      .fa-vk:before {
        content: "\\f189";
      }

      .fa-vnv:before {
        content: "\\f40b";
      }

      .fa-voicemail:before {
        content: "\\f897";
      }

      .fa-volleyball-ball:before {
        content: "\\f45f";
      }

      .fa-volume-down:before {
        content: "\\f027";
      }

      .fa-volume-mute:before {
        content: "\\f6a9";
      }

      .fa-volume-off:before {
        content: "\\f026";
      }

      .fa-volume-up:before {
        content: "\\f028";
      }

      .fa-vote-yea:before {
        content: "\\f772";
      }

      .fa-vr-cardboard:before {
        content: "\\f729";
      }

      .fa-vuejs:before {
        content: "\\f41f";
      }

      .fa-walking:before {
        content: "\\f554";
      }

      .fa-wallet:before {
        content: "\\f555";
      }

      .fa-warehouse:before {
        content: "\\f494";
      }

      .fa-water:before {
        content: "\\f773";
      }

      .fa-wave-square:before {
        content: "\\f83e";
      }

      .fa-waze:before {
        content: "\\f83f";
      }

      .fa-weebly:before {
        content: "\\f5cc";
      }

      .fa-weibo:before {
        content: "\\f18a";
      }

      .fa-weight:before {
        content: "\\f496";
      }

      .fa-weight-hanging:before {
        content: "\\f5cd";
      }

      .fa-weixin:before {
        content: "\\f1d7";
      }

      .fa-whatsapp:before {
        content: "\\f232";
      }

      .fa-whatsapp-square:before {
        content: "\\f40c";
      }

      .fa-wheelchair:before {
        content: "\\f193";
      }

      .fa-whmcs:before {
        content: "\\f40d";
      }

      .fa-wifi:before {
        content: "\\f1eb";
      }

      .fa-wikipedia-w:before {
        content: "\\f266";
      }

      .fa-wind:before {
        content: "\\f72e";
      }

      .fa-window-close:before {
        content: "\\f410";
      }

      .fa-window-maximize:before {
        content: "\\f2d0";
      }

      .fa-window-minimize:before {
        content: "\\f2d1";
      }

      .fa-window-restore:before {
        content: "\\f2d2";
      }

      .fa-windows:before {
        content: "\\f17a";
      }

      .fa-wine-bottle:before {
        content: "\\f72f";
      }

      .fa-wine-glass:before {
        content: "\\f4e3";
      }

      .fa-wine-glass-alt:before {
        content: "\\f5ce";
      }

      .fa-wix:before {
        content: "\\f5cf";
      }

      .fa-wizards-of-the-coast:before {
        content: "\\f730";
      }

      .fa-wolf-pack-battalion:before {
        content: "\\f514";
      }

      .fa-won-sign:before {
        content: "\\f159";
      }

      .fa-wordpress:before {
        content: "\\f19a";
      }

      .fa-wordpress-simple:before {
        content: "\\f411";
      }

      .fa-wpbeginner:before {
        content: "\\f297";
      }

      .fa-wpexplorer:before {
        content: "\\f2de";
      }

      .fa-wpforms:before {
        content: "\\f298";
      }

      .fa-wpressr:before {
        content: "\\f3e4";
      }

      .fa-wrench:before {
        content: "\\f0ad";
      }

      .fa-x-ray:before {
        content: "\\f497";
      }

      .fa-xbox:before {
        content: "\\f412";
      }

      .fa-xing:before {
        content: "\\f168";
      }

      .fa-xing-square:before {
        content: "\\f169";
      }

      .fa-y-combinator:before {
        content: "\\f23b";
      }

      .fa-yahoo:before {
        content: "\\f19e";
      }

      .fa-yammer:before {
        content: "\\f840";
      }

      .fa-yandex:before {
        content: "\\f413";
      }

      .fa-yandex-international:before {
        content: "\\f414";
      }

      .fa-yarn:before {
        content: "\\f7e3";
      }

      .fa-yelp:before {
        content: "\\f1e9";
      }

      .fa-yen-sign:before {
        content: "\\f157";
      }

      .fa-yin-yang:before {
        content: "\\f6ad";
      }

      .fa-yoast:before {
        content: "\\f2b1";
      }

      .fa-youtube:before {
        content: "\\f167";
      }

      .fa-youtube-square:before {
        content: "\\f431";
      }

      .fa-zhihu:before {
        content: "\\f63f";
      }

      .sr-only {
        border: 0;
        clip: rect(0, 0, 0, 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
      }

      .sr-only-focusable:active,
      .sr-only-focusable:focus {
        clip: auto;
        height: auto;
        margin: 0;
        overflow: visible;
        position: static;
        width: auto;
      }

      .fab {
        font-family: "Font Awesome 5 Brands";
      }

      .far {
        font-family: "Font Awesome 5 Free";
        font-weight: 400;
      }

      .fa,
      .fas {
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
      }
    `}constructor(){super(),this.regular=!1,this.prefix="fas",this.showIcon=!1,this.iconProps=null}render(){const{icon:e,prefix:t,showIcon:o,iconProps:n}=this;return o?U` <i class="${t} fa-${e}${n?` ${n}`:""}"></i> `:U``}connectedCallback(){const e=ne.includes(this.icon)&&this.regular,t=!e&&oe.includes(this.icon),o=!e&&!t&&fe.includes(this.icon);this.showIcon=e||t||o,e&&(this.prefix="far"),o&&(this.prefix="fab"),super.connectedCallback()}}),customElements.define("mv-modal",class extends ee{static get properties(){return{open:{type:Boolean,reflect:!0},theme:{type:String,attribute:!0}}}static get styles(){return a`
        :host {
            --mv-modal-font-family: var(--font-family, "Open Sans",MuseoSans);
            --mv-modal-title-font-size: var(--font-size-xl, 12pt);
            --mv-modal-close-icon-font-size: 11px;
            --light-color: var(--mv-modal-color, #02657E);
            --dark-color: var(--mv-modal-dark-color, #02657E);
            --modal-z-index: var(--mv-modal-z-index, 99);
            /**
            ** Modal container
            */
            --light-background: var(--mv-modal-background-color, linear-gradient(359.71deg, #AFCCD2 0.51%, #D4EBF0 99.89%));
            --dark-background: var(--mv-modal-dark-background, linear-gradient(359.71deg, #AFCCD2 0.51%, #D4EBF0 99.89%));
            --width: var(--mv-modal-width, 360px);
            --modal-height: var(--mv-modal-height, 230px);
            --max-height: var(--mv-modal-max-height, 230px);
            --modal-box-shadow: var(--mv-modal-box-shadow, 10.57px 16.07px 20.93px -1.11px rgba(71, 57, 154, 0.3));
            --border-radius: var(--mv-modal-border-radius, 10px);
            --mv-modal-content-font-size: var(--font-size-m, 10pt);
            --box-shadow: 10.57px 16.07px 20.93px -1.11px rgba(71, 57, 154, 0.3);
            
            /**
            ** Modal header
            */
            --header-height: var(--mv-modal-header-height, 42px);
            --header-box-shadow: var(--mv-modal-header-box-shadow, none);
            --header-border-radius: var(--mv-modal-header-border-radius, 10px);
            --header-background: var(--mv-modal-header-background, transparent);

            /**
            ** Modal body
            */
            --modal-body-width: var(--mv-modal-content-width, 315px);
            --modal-body-height-not-slotted: calc(var(--max-height) - 49px);
            --modal-body-height-slotted: calc(var(--max-height) - 62px);
            --body-border-radius: var(--mv-modal-border-radius, 10px);
            --body-background: var(--mv-modal-body-background, #E7F5F8);

            /**
            ** Modal section
            */
            --modal-section-width: var(--mv-modal-section-width, 35px);
            --modal-section-height: var(--mv-modal-section-height, calc(var(--max-height)- 36px));

            /**
            ** Modal footer
            */
            --footer-min-height: var(--mv-modal-min-height, 7px);
            --footer-background: var(--mv-modal-footer-background, transparent);
            --footer-box-shadow: var(--mv-modal-footer-box-shadow, none);
            --modal-footer-height: var(--mv-modal-foot-height, 7px);

            --fa-right-position: var(--mv-modal-fa-right-position, 6px);
            --fa-top-position: var(--mv-modal-fa-top-position, 2px);
            --color-close-icon: var(--mv-modal-color-close-icon, #000000);
            --opacity-close-icon: var(--mv-modal-opacity-close-icon, 0.4);
            --title-font-weight: var(--mv-modal-title-font-weight, 500);
            --title-left-position: var(--mv-modal-title-left-position, 30px);
            --footer-border-top: var(--mv-modal-footer-border-top, 1px solid rgba(0, 0, 0, 0.12));
            --footer-padding: var(--mv-modal-footer-padding, 0 30px 0 30px);
            --modal-body-padding: var(--mv-modal-body-padding, 0 30px 0 30px);
        }

        .modal {
            display: flex;
            flex-flow: row wrap;
            background: var(--background-color);
            width: var(--width);
            height: var(--modal-height);
            max-height: var(--max-height);
            position: fixed;
            box-shadow: var(--box-shadow);
            border-radius: var(--border-radius);
            font-family: var(--mv-modal-font-family);
            font-size: var(--mv-modal-content-font-size);
            color: var(--text-color);
        }
        .header {
            width: 100%;
            height: var(--header-height);
            box-shadow: var(--header-box-shadow);
            border-radius: var(--header-border-radius) var(--header-border-radius) 0 0;
            background: var(--header-background);
            box-sizing: border-box;
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
        }
        .header_container {
            display: block;
            width: 100%;
            position: absolute;
            top: 0px;
            height: 34px;
            max-height: 34px;
        }
        .body {
            overflow-y: inherit;
            width: var(--modal-body-width);
            //height: var(--modal-body-height);
            background: var(--body-background);
            border-radius: var(--body-border-radius) var(--body-border-radius) var(--body-border-radius) var(--body-border-radius);
            box-sizing: border-box;
        }

        .body.slotted {
            height: var(--modal-body-height-slotted)
        }
        .body:not(.slotted) {
            height: var(--modal-body-height-not-slotted)
        }

        .section {
            overflow-y: hidden;
            width: var(--modal-section-width);
            height:var(--modal-section-height);
        }

        .footer {
            width: var(--width);
            min-height: var(--footer-min-height);
            //height: var(--footer-height, 7px);
            background: var(--footer-background);
            box-shadow: var(--footer-box-shadow);
            border-radius: 0 0 var(--border-radius) var(--border-radius);
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: var(--footer-padding);
            box-sizing: border-box;
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
        }

        .separator {
            height: 0px;
            display: inline-block;
            border: 1px solid #FFFFFF;
            width: calc(var(--modal-body-width) - 35px);
            vertical-align: bottom;
            position: absolute;
            right: 25px;
            top: 35px;
        }

        .footer.slotted {
            height: 23px !important;
        }

        .footer:not(.slotted) {
            height: 7px !important;
        }

        .mv-container-modal {
            opacity: 0;
            transition: visibility 0s, opacity 0.25s ease-in;
            z-index: var(--modal-z-index);
        }
        .overlay-modal {
            height: 100%;
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            width: 100%;
            opacity: 0.3;
            background-color: #000000;
        }
        .opened {
            align-items: center;
            display: flex;
            justify-content: center;
            height: 100vh;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            opacity: 1;
            visibility: visible;
        }
        .closed {
            visibility: hidden;
        }
        mv-fa {
            font-size: var(--mv-modal-close-icon-font-size);
            color: var(--color-close-icon);
            opacity: var(--opacity-close-icon);
            position: absolute;
            right: var(--fa-right-position);
            top: var(--fa-top-position);
            cursor: pointer;
        }

        .light {
            --background-color: var(--light-background);
            --text-color: var(--light-color);
        }
        .dark {
            --background-color: var(--dark-background);
            --text-color: var(--dark-color);
        }

    `}constructor(){super(),this.open=!1,this.theme="light",this.isSlotted=!1}render(){let e=this.shadowRoot.querySelector("#footer");e&&(e.assignedNodes().length>0?this.isSlotted=!0:this.isSlotted=!1);const t=this.open?"opened":"closed";return U`
            <div class="mv-container-modal ${t} ${this.theme}">
                <div class="overlay-modal" @click="${this.handleClose}"></div>
                <div class="modal">
                    <div class="header">
                        <div class="header_container">
                            <slot id="header" name="header"></slot>
                            <mv-fa icon="times" @click="${this.handleClose}"></mv-fa>
                        </div>
                        <span class="separator"> </span>
                    </div>
                    <div class="section">
                        <slot name="section"></slot>
                    </div>
                    <div class="body ${this.isSlotted?"slotted":""}">
                        <slot name="body"></slot>
                    </div>
                    <div class="footer ${this.isSlotted?"slotted":""}">
                        <slot id="footer" name="footer">
                            <div style="height: 7px"></div>
                        </slot>
                    </div>
                </div>
            </div>
    `}handleClose(e){e&&e.stopImmediatePropagation(),this.dispatchEvent(new CustomEvent("close-modal"))}}),customElements.define("mv-modal-demo",class extends ee{static get properties(){return{isOpen:{type:Boolean},isOpen2:{type:Boolean},isOpen3:{type:Boolean},theme:{type:String,attribute:!0}}}static get styles(){return a`
            :host {
                font-family: var(--font-family, Arial);
                font-size: var(--font-size-m, 10pt);
            }

            [slot="body"] {
                font-size: 10px;
                text-align: justify;
                padding: 10px 4px;
            }

            [slot="header"] {
                display: inline;
                position: absolute;
                left: 50px;
                font-weight: 900;
                text-align: left;
                padding-left: 6px;
                padding-top: 4px;
            }

            [slot="footer"] {
                font-size: 10px;
                padding: 6px;
            }

            [slot="section"] {
                display: flex;
                flex-direction: column;
                height: 100%;
                justify-content: space-evenly;
                font-size: 14px;
            }

            mv-fa:hover {
                cursor: pointer;
            }

            .container {
                text-align: center;
                width: 100%;
                margin-top: 200px;
                display: flex;
                justify-content: center;
            }
            
            p {
                text-indent: 30px;
                text-align: initial;
            }
            
            mv-fa[icon="times-circle"] {
                font-size: 20px;
                color: #48C5B9;
                position: absolute;
                right: 30px;
                top: 50%;
                transform: translateY(-50%);
                cursor: pointer;
            }

            .title {
                font-size: 20px;
                font-weight: 500;
                position: absolute;
                left: 30px;
                top: 50%;
                transform: translateY(-50%);
                cursor: default;
            }

            .left-button {
                position: absolute;
                left: 30px;
                top: 50%;
                transform: translateY(-50%);
            }

            .right-button {
                position: absolute;
                right: 30px;
                top: 50%;
                transform: translateY(-50%);
            }

            .custom-size {
                --mv-modal-width: 500px;
                --mv-modal-max-height: 300px;
            }

            fieldset > label, label > input {
                cursor: pointer;
            }

            fieldset {
                width: 120px;
                margin-left: 10px;
                border:2px solid red;
                -moz-border-radius:8px;
                -webkit-border-radius:8px;	
                border-radius:8px;
                color: #818181;
            }

            legend {
                font-weight: 500;
                color: red;
            }
        `}constructor(){super(),this.isOpen=!1,this.isOpen2=!1,this.isOpen3=!1,this.theme="light"}render(){const{theme:e}=this;return U`
        <fieldset>
            <legend>Theme</legend>
            <label><input type="radio" name="theme" value="light" checked @change="${this.changeTheme}" />Light</label>
            <label><input type="radio" name="theme" value="dark" @change="${this.changeTheme}" />Dark</label>
        </fieldset>
        <div class="container">
            <mv-button @button-clicked="${this.openModal}" button-style="info" .theme="${e}">Modal</mv-button>
            <mv-modal
                ?open="${this.isOpen}"
                @close-modal="${this.closeModal}"
                closeable
                .theme="${e}"
            >
                <div slot="header">
                    Lorem ipsum !
                </div>
                <p slot="body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nulla eu malesuada aliquet, metus lorem interdum ipsum, id congue purus enim id ipsum. Donec euismod tincidunt ipsum, id ullamcorper neque pellentesque a. Sed vel velit vel velit iaculis congue.
                </p>
            </mv-modal>

            <mv-button @button-clicked="${this.openModal2}" button-style="info" .theme="${e}">Modal with footer</mv-button>
            <mv-modal
                ?open="${this.isOpen2}"
                @close-modal="${this.closeModal2}"
                closeable
                .theme="${e}"
            >
                <div slot="header">
                    Lorem ipsum !
                </div>
                <p slot="body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nulla eu malesuada aliquet, metus lorem interdum ipsum, id congue purus enim id ipsum. Donec euismod tincidunt ipsum, id ullamcorper neque pellentesque a. Sed vel velit vel velit iaculis congue.
                </p>
                <p slot="footer">
                    Sed vel velit vel velit iaculis congue.
                </p>
            </mv-modal>

            <mv-button @button-clicked="${this.openModal3}" button-style="info" .theme="${e}">Modal with menu</mv-button>
            <mv-modal
                ?open="${this.isOpen3}"
                @close-modal="${this.closeModal3}"
                .theme="${e}"
            >
                <div slot="header">
                    Lorem ipsum !
                </div>
                <div slot="section">
                    <mv-fa icon="home" regular></mv-fa>
                    <mv-fa icon="chevron-left" regular></mv-fa>
                    <mv-fa icon="beer" regular></mv-fa>
                    <mv-fa icon="envelope" regular></mv-fa>
                </div>
                <p slot="body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nulla eu malesuada aliquet, metus lorem interdum ipsum, id congue purus enim id ipsum. Donec euismod tincidunt ipsum, id ullamcorper neque pellentesque a. Sed vel velit vel velit iaculis congue.
                </p>
                <p slot="footer">
                    Sed vel velit vel velit iaculis congue.
                </p>
            </mv-modal>
        </div>`}openModal(){this.isOpen=!0}closeModal(){this.isOpen=!1}openModal2(){this.isOpen2=!0}closeModal2(){this.isOpen2=!1}openModal3(){this.isOpen3=!0}closeModal3(){this.isOpen3=!1}changeTheme=e=>{const{target:{value:t}}=e;this.theme=t}})})();