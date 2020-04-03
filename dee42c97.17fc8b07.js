/*! For license information please see dee42c97.17fc8b07.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{198:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(1),o=n(9),a=(n(0),n(214)),c=n(220),i=n(221),s={title:"Events",description:"Geocortex Mobile - Learn about event concepts"},u={id:"mobile/concepts-events",title:"Events",description:"Geocortex Mobile - Learn about event concepts",source:"@site/docs/mobile/concepts-events.mdx",permalink:"/docs/mobile/concepts-events",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/concepts-events.mdx",sidebar:"mobile",previous:{title:"Commands and Operations",permalink:"/docs/mobile/concepts-commands-operations"},next:{title:"Components and Services",permalink:"/docs/mobile/concepts-components-services"}},l=[{value:"Usage",id:"usage",children:[]}],p={rightToc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Events")," are distinct, discrete messaging about a change or update that occurs in the viewer. They can be published or subscribed to by any ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/mobile/concepts-components-services"}),"component, service")," or ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/mobile/implement-component-with-ui#use-xaml-to-define-your-ui"}),"view")," registered with Mobile, and can be used to initiate behaviours, communicate data changes, and more. Events themselves do not execute behaviour, but merely provide messaging so subscribers can act on changes."),Object(a.b)("p",null,"Events in Geocortex Mobile are grouped by category"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"app.activated\napp.backgrounded\ngeolocation.position-changed\ngeolocation.position-lost\n")),Object(a.b)("p",null,"Events can publish custom arguments with information about the change they are communicating. The full list of existing events available in Geocortex Mobile can be ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/mobile/api-events"}),"found in the API"),"."),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("p",null,"Events are internal to the Geocortex Mobile SDK, so they can only be consumed by custom code. Any ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/mobile/implement-component-with-ui"}),"Custom Component")," or ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/mobile/implement-service"}),"Custom Service")," can publish or subscribe to built in or custom events."),Object(a.b)(i.a,{mdxType:"UseCaseContainer"},Object(a.b)(c.a,{title:"Implementing Custom Events",description:"Learn how to implement a custom Event.",link:"implement-event",mdxType:"UseCaseCard"}),Object(a.b)(c.a,{title:"Events API",description:"Check out the full list of Events available in Mobile.",link:"api-events",mdxType:"UseCaseCard"})))}b.isMDXComponent=!0},214:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,d=p["".concat(c,".").concat(m)]||p[m]||b[m]||a;return n?o.a.createElement(d,i({ref:t},u,{components:n})):o.a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},215:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)&&r.length){var c=o.apply(null,r);c&&e.push(c)}else if("object"===a)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},216:function(e,t,n){"use strict";var r=n(1),o=n(0),a=n.n(o),c=n(39),i=n(217),s=n(25),u=n.n(s);t.a=function(e){var t,n=e.to,s=e.href,l=n||s,p=Object(i.a)(l),b=Object(o.useRef)(!1),m=u.a.canUseIntersectionObserver;return Object(o.useEffect)((function(){return!m&&p&&window.docusaurus.prefetch(l),function(){m&&t&&t.disconnect()}}),[l,m,p]),l&&p?a.a.createElement(c.b,Object(r.a)({},e,{onMouseEnter:function(){b.current||(window.docusaurus.preload(l),b.current=!0)},innerRef:function(e){var n,r;m&&e&&p&&(n=e,r=function(){window.docusaurus.prefetch(l)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),r())}))}))).observe(n))},to:l})):a.a.createElement("a",Object(r.a)({},e,{href:l}))}},217:function(e,t,n){"use strict";function r(e){return!1===/^(https?:|\/\/)/.test(e)}n.d(t,"a",(function(){return r}))},218:function(e,t,n){"use strict";n(219)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},219:function(e,t,n){var r=n(12),o=n(13),a=n(24),c=/"/g,i=function(e,t,n,r){var o=String(a(e)),i="<"+t;return""!==n&&(i+=" "+n+'="'+String(r).replace(c,"&quot;")+'"'),i+">"+o+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(i),r(r.P+r.F*o((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},220:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n(218);var r=n(216),o=n(0),a=n.n(o),c=n(215),i=n.n(c),s=n(129),u=n.n(s);function l(e){var t=e.title,n=e.description,o=e.link;return a.a.createElement("div",{className:i()("card-demo",u.a.root)},a.a.createElement("div",{className:"card"},a.a.createElement("div",{className:"card__header"},a.a.createElement("h3",null,t)),a.a.createElement("div",{className:"card__body"},a.a.createElement("p",null,n)),a.a.createElement("div",{className:"card__footer"},a.a.createElement(r.a,{className:"button button--secondary button--block",to:o},"Get Started"))))}},221:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(0),o=n.n(r),a=n(215),c=n.n(a),i=n(130),s=n.n(i);function u(e){var t=e.children;return o.a.createElement("div",{className:c()(s.a.root)},t)}}}]);