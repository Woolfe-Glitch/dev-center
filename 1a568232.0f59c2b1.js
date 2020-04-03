/*! For license information please see 1a568232.0f59c2b1.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{158:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return m}));var n=r(1),o=r(9),a=(r(0),r(214)),i=r(221),c=r(220),s={title:"Geocortex Mobile",description:"Geocortex Workflow - Get started with developing workflow on Geocortex Mobile"},l={id:"workflow/getting-started-mobile",title:"Geocortex Mobile",description:"Geocortex Workflow - Get started with developing workflow on Geocortex Mobile",source:"@site/docs/workflow/getting-started-mobile.mdx",permalink:"/docs/workflow/getting-started-mobile",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/getting-started-mobile.mdx",sidebar:"workflow",previous:{title:"TypeScript Activity Block Tags",permalink:"/docs/workflow/typescript-activity-block-tags"},next:{title:"Geocortex Workflow Server",permalink:"/docs/workflow/getting-started-server"}},u=[{value:"SDK Samples",id:"sdk-samples",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],p={rightToc:u};function m(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The Geocortex Mobile SDK is used to extend Geocortex Workflow functionality for Geocortex Mobile. Follow the instructions in the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/mobile/quick-start"}),"quick start")," project to get set up for Geocortex Mobile + Geocortex Workflow custom development."),Object(a.b)("div",{className:"admonition admonition-important alert alert--info"},Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"Creating custom workflow activities for Geocortex Mobile requires the development and deployment of a custom Geocortex Mobile application."))),Object(a.b)("h2",{id:"sdk-samples"},"SDK Samples"),Object(a.b)("p",null,"The Geocortex Mobile SDK includes various ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/mobile/samples"}),"SDK Samples")," for development, including ones like ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/geocortex/sdk-samples/workflow/custom-activity"}),"this one")," which demonstrate custom workflow functionality."),Object(a.b)("h2",{id:"next-steps"},"Next Steps"),Object(a.b)(i.a,{mdxType:"UseCaseContainer"},Object(a.b)(c.a,{title:"Implement a Custom Activity",description:"Implement a custom activity for Geocortex Mobile",link:"implement-custom-activity-server",mdxType:"UseCaseCard"}),Object(a.b)(c.a,{title:"Implement a Custom Form Element",description:"Implement a custom form element for Geocortex Mobile",link:"implement-custom-form-elements-mobile",mdxType:"UseCaseCard"}),Object(a.b)(c.a,{title:"Reference a Third Party library",description:"Reference a third party library in Geocortex Mobile",link:"reference-third-party-library-mobile",mdxType:"UseCaseCard"})))}m.isMDXComponent=!0},214:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),f=n,d=p["".concat(i,".").concat(f)]||p[f]||m[f]||a;return r?o.a.createElement(d,c({ref:t},l,{components:r})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},215:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)&&n.length){var i=o.apply(null,n);i&&e.push(i)}else if("object"===a)for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},216:function(e,t,r){"use strict";var n=r(1),o=r(0),a=r.n(o),i=r(39),c=r(217),s=r(25),l=r.n(s);t.a=function(e){var t,r=e.to,s=e.href,u=r||s,p=Object(c.a)(u),m=Object(o.useRef)(!1),f=l.a.canUseIntersectionObserver;return Object(o.useEffect)((function(){return!f&&p&&window.docusaurus.prefetch(u),function(){f&&t&&t.disconnect()}}),[u,f,p]),u&&p?a.a.createElement(i.b,Object(n.a)({},e,{onMouseEnter:function(){m.current||(window.docusaurus.preload(u),m.current=!0)},innerRef:function(e){var r,n;f&&e&&p&&(r=e,n=function(){window.docusaurus.prefetch(u)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){r===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(r),t.disconnect(),n())}))}))).observe(r))},to:u})):a.a.createElement("a",Object(n.a)({},e,{href:u}))}},217:function(e,t,r){"use strict";function n(e){return!1===/^(https?:|\/\/)/.test(e)}r.d(t,"a",(function(){return n}))},218:function(e,t,r){"use strict";r(219)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},219:function(e,t,r){var n=r(12),o=r(13),a=r(24),i=/"/g,c=function(e,t,r,n){var o=String(a(e)),c="<"+t;return""!==r&&(c+=" "+r+'="'+String(n).replace(i,"&quot;")+'"'),c+">"+o+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(c),n(n.P+n.F*o((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}},220:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));r(218);var n=r(216),o=r(0),a=r.n(o),i=r(215),c=r.n(i),s=r(129),l=r.n(s);function u(e){var t=e.title,r=e.description,o=e.link;return a.a.createElement("div",{className:c()("card-demo",l.a.root)},a.a.createElement("div",{className:"card"},a.a.createElement("div",{className:"card__header"},a.a.createElement("h3",null,t)),a.a.createElement("div",{className:"card__body"},a.a.createElement("p",null,r)),a.a.createElement("div",{className:"card__footer"},a.a.createElement(n.a,{className:"button button--secondary button--block",to:o},"Get Started"))))}},221:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var n=r(0),o=r.n(n),a=r(215),i=r.n(a),c=r(130),s=r.n(c);function l(e){var t=e.children;return o.a.createElement("div",{className:i()(s.a.root)},t)}}}]);