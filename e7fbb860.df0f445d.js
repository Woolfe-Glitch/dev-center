/*! For license information please see e7fbb860.df0f445d.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{245:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return f})),n.d(t,"default",(function(){return l}));var r=n(1),o=n(9),c=(n(0),n(263)),i=n(282),a=n(281),s={title:"Events",description:"Geocortex Web - Learn about event concepts"},u={id:"web/concepts-events",title:"Events",description:"Geocortex Web - Learn about event concepts",source:"@site/docs/web/concepts-events.mdx",permalink:"/docs/web/concepts-events",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/concepts-events.mdx",sidebar:"web",previous:{title:"Components and Services",permalink:"/docs/web/concepts-components-services"},next:{title:"Advanced Layout",permalink:"/docs/web/concepts-advanced-layout"}},f=[{value:"Usage",id:"usage",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],p={rightToc:f};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Events")," are distinct, discrete messaging about a change or update that occurs in the viewer. They can be published or subscribed to by any ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/web/concepts-components-services"}),"component or service"),", and can be used to initiate behaviors, communicate data changes, and more. Events themselves do not execute behavior, but merely provide messaging so subscribers can act on changes."),Object(c.b)("p",null,"The full list of existing events available in Geocortex Web can be ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/web/api-commands-operations-events#events"}),"found in the API documentation"),"."),Object(c.b)("p",null,"Events in Geocortex Web are grouped by categories, such as ",Object(c.b)("inlineCode",{parentName:"p"},"ui")," or ",Object(c.b)("inlineCode",{parentName:"p"},"viewer"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"ui.activated\ncoordinates.coordinate-systems-changed\nviewer.layout-changed\nauth.sign-in-failed\n")),Object(c.b)("p",null,"Events can publish custom arguments with information about the change they are communicating."),Object(c.b)("h2",{id:"usage"},"Usage"),Object(c.b)("p",null,"Events are internal to Geocortex Web, so they can only be consumed by custom code. Custom components can access events through the ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/web/sdk-ui-context"}),"UIContext")," or through ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/web/concepts-components-services#component-models-and-configuration"}),"their models"),". Custom services can publish or subscribe to built-in or custom events through the ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/web/api-message-bus"}),"MessageBus"),"."),Object(c.b)("h2",{id:"next-steps"},"Next Steps"),Object(c.b)(a.a,{mdxType:"UseCaseContainer"},Object(c.b)(i.a,{title:"Subscribing to Existing Events",description:"Learn how to subscribe to an existing event",link:"usecases-implement-event#subscribing-to-existing-events",mdxType:"UseCaseCard"}),Object(c.b)(i.a,{title:"Events API",description:"Check out the full list of Events available in Geocortex Web",link:"api-commands-operations-events#events",mdxType:"UseCaseCard"}),Object(c.b)(i.a,{title:"Implementing Custom Events",description:"Learn how to implement a custom Event.",link:"usecases-implement-event",mdxType:"UseCaseCard"})))}l.isMDXComponent=!0},263:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),f=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a({},t,{},e)),n},p=function(e){var t=f(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=f(n),b=r,m=p["".concat(i,".").concat(b)]||p[b]||l[b]||c;return n?o.a.createElement(m,a({ref:t},u,{components:n})):o.a.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=b;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var u=2;u<c;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},264:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var c=typeof r;if("string"===c||"number"===c)e.push(r);else if(Array.isArray(r)&&r.length){var i=o.apply(null,r);i&&e.push(i)}else if("object"===c)for(var a in r)n.call(r,a)&&r[a]&&e.push(a)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},265:function(e,t,n){var r=n(81),o=n(54).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},266:function(e,t,n){t.f=n(2)},267:function(e,t,n){"use strict";var r=n(12),o=n(30),c=n(268),i="".startsWith;r(r.P+r.F*n(269)("startsWith"),"String",{startsWith:function(e){var t=c(this,e,"startsWith"),n=o(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return i?i.call(t,r,n):t.slice(n,n+r.length)===r}})},268:function(e,t,n){var r=n(79),o=n(29);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(e))}},269:function(e,t,n){var r=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(o){}}return!0}},270:function(e,t,n){"use strict";n(53),n(267),n(274);var r=n(0),o=n.n(r),c=n(41),i=n(271),a=n(17),s=n.n(a),u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};t.a=function(e){var t,n=e.isNavLink,a=u(e,["isNavLink"]),f=a.to,p=a.href,l=f||p,b=Object(i.a)(l),m=Object(r.useRef)(!1),d=n?c.c:c.b,v=s.a.canUseIntersectionObserver;return Object(r.useEffect)((function(){return!v&&b&&window.docusaurus.prefetch(l),function(){v&&t&&t.disconnect()}}),[l,v,b]),l&&b&&!l.startsWith("#")?o.a.createElement(d,Object.assign({},a,{onMouseEnter:function(){m.current||(window.docusaurus.preload(l),m.current=!0)},innerRef:function(e){var n,r;v&&e&&b&&(n=e,r=function(){window.docusaurus.prefetch(l)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),r())}))}))).observe(n))},to:l})):o.a.createElement("a",Object.assign({},a,{href:l}))}},271:function(e,t,n){"use strict";function r(e){return/^\/(?!\/)/.test(e)}n.d(t,"a",(function(){return r}))},272:function(e,t,n){var r=n(22);e.exports=Array.isArray||function(e){return"Array"==r(e)}},273:function(e,t,n){var r=n(51),o=n(52),c=n(28),i=n(77),a=n(27),s=n(80),u=Object.getOwnPropertyDescriptor;t.f=n(10)?u:function(e,t){if(e=c(e),t=i(t,!0),s)try{return u(e,t)}catch(n){}if(a(e,t))return o(!r.f.call(e,t),e[t])}},274:function(e,t,n){"use strict";var r=n(5),o=n(27),c=n(10),i=n(12),a=n(15),s=n(275).KEY,u=n(13),f=n(42),p=n(43),l=n(39),b=n(2),m=n(266),d=n(276),v=n(277),h=n(272),y=n(8),g=n(14),O=n(31),w=n(28),j=n(77),E=n(52),x=n(82),S=n(278),P=n(273),N=n(78),C=n(26),k=n(21),T=P.f,W=C.f,I=S.f,D=r.Symbol,F=r.JSON,A=F&&F.stringify,_=b("_hidden"),L=b("toPrimitive"),M={}.propertyIsEnumerable,U=f("symbol-registry"),G=f("symbols"),J=f("op-symbols"),R=Object.prototype,K="function"==typeof D&&!!N.f,X=r.QObject,Y=!X||!X.prototype||!X.prototype.findChild,q=c&&u((function(){return 7!=x(W({},"a",{get:function(){return W(this,"a",{value:7}).a}})).a}))?function(e,t,n){var r=T(R,t);r&&delete R[t],W(e,t,n),r&&e!==R&&W(R,t,r)}:W,z=function(e){var t=G[e]=x(D.prototype);return t._k=e,t},B=K&&"symbol"==typeof D.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof D},Q=function(e,t,n){return e===R&&Q(J,t,n),y(e),t=j(t,!0),y(n),o(G,t)?(n.enumerable?(o(e,_)&&e[_][t]&&(e[_][t]=!1),n=x(n,{enumerable:E(0,!1)})):(o(e,_)||W(e,_,E(1,{})),e[_][t]=!0),q(e,t,n)):W(e,t,n)},H=function(e,t){y(e);for(var n,r=v(t=w(t)),o=0,c=r.length;c>o;)Q(e,n=r[o++],t[n]);return e},V=function(e){var t=M.call(this,e=j(e,!0));return!(this===R&&o(G,e)&&!o(J,e))&&(!(t||!o(this,e)||!o(G,e)||o(this,_)&&this[_][e])||t)},Z=function(e,t){if(e=w(e),t=j(t,!0),e!==R||!o(G,t)||o(J,t)){var n=T(e,t);return!n||!o(G,t)||o(e,_)&&e[_][t]||(n.enumerable=!0),n}},$=function(e){for(var t,n=I(w(e)),r=[],c=0;n.length>c;)o(G,t=n[c++])||t==_||t==s||r.push(t);return r},ee=function(e){for(var t,n=e===R,r=I(n?J:w(e)),c=[],i=0;r.length>i;)!o(G,t=r[i++])||n&&!o(R,t)||c.push(G[t]);return c};K||(a((D=function(){if(this instanceof D)throw TypeError("Symbol is not a constructor!");var e=l(arguments.length>0?arguments[0]:void 0),t=function(n){this===R&&t.call(J,n),o(this,_)&&o(this[_],e)&&(this[_][e]=!1),q(this,e,E(1,n))};return c&&Y&&q(R,e,{configurable:!0,set:t}),z(e)}).prototype,"toString",(function(){return this._k})),P.f=Z,C.f=Q,n(265).f=S.f=$,n(51).f=V,N.f=ee,c&&!n(40)&&a(R,"propertyIsEnumerable",V,!0),m.f=function(e){return z(b(e))}),i(i.G+i.W+i.F*!K,{Symbol:D});for(var te="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ne=0;te.length>ne;)b(te[ne++]);for(var re=k(b.store),oe=0;re.length>oe;)d(re[oe++]);i(i.S+i.F*!K,"Symbol",{for:function(e){return o(U,e+="")?U[e]:U[e]=D(e)},keyFor:function(e){if(!B(e))throw TypeError(e+" is not a symbol!");for(var t in U)if(U[t]===e)return t},useSetter:function(){Y=!0},useSimple:function(){Y=!1}}),i(i.S+i.F*!K,"Object",{create:function(e,t){return void 0===t?x(e):H(x(e),t)},defineProperty:Q,defineProperties:H,getOwnPropertyDescriptor:Z,getOwnPropertyNames:$,getOwnPropertySymbols:ee});var ce=u((function(){N.f(1)}));i(i.S+i.F*ce,"Object",{getOwnPropertySymbols:function(e){return N.f(O(e))}}),F&&i(i.S+i.F*(!K||u((function(){var e=D();return"[null]"!=A([e])||"{}"!=A({a:e})||"{}"!=A(Object(e))}))),"JSON",{stringify:function(e){for(var t,n,r=[e],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=t=r[1],(g(t)||void 0!==e)&&!B(e))return h(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!B(t))return t}),r[1]=t,A.apply(F,r)}}),D.prototype[L]||n(11)(D.prototype,L,D.prototype.valueOf),p(D,"Symbol"),p(Math,"Math",!0),p(r.JSON,"JSON",!0)},275:function(e,t,n){var r=n(39)("meta"),o=n(14),c=n(27),i=n(26).f,a=0,s=Object.isExtensible||function(){return!0},u=!n(13)((function(){return s(Object.preventExtensions({}))})),f=function(e){i(e,r,{value:{i:"O"+ ++a,w:{}}})},p=e.exports={KEY:r,NEED:!1,fastKey:function(e,t){if(!o(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!c(e,r)){if(!s(e))return"F";if(!t)return"E";f(e)}return e[r].i},getWeak:function(e,t){if(!c(e,r)){if(!s(e))return!0;if(!t)return!1;f(e)}return e[r].w},onFreeze:function(e){return u&&p.NEED&&s(e)&&!c(e,r)&&f(e),e}}},276:function(e,t,n){var r=n(5),o=n(16),c=n(40),i=n(266),a=n(26).f;e.exports=function(e){var t=o.Symbol||(o.Symbol=c?{}:r.Symbol||{});"_"==e.charAt(0)||e in t||a(t,e,{value:i.f(e)})}},277:function(e,t,n){var r=n(21),o=n(78),c=n(51);e.exports=function(e){var t=r(e),n=o.f;if(n)for(var i,a=n(e),s=c.f,u=0;a.length>u;)s.call(e,i=a[u++])&&t.push(i);return t}},278:function(e,t,n){var r=n(28),o=n(265).f,c={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return i&&"[object Window]"==c.call(e)?function(e){try{return o(e)}catch(t){return i.slice()}}(e):o(r(e))}},279:function(e,t,n){"use strict";n(280)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},280:function(e,t,n){var r=n(12),o=n(13),c=n(29),i=/"/g,a=function(e,t,n,r){var o=String(c(e)),a="<"+t;return""!==n&&(a+=" "+n+'="'+String(r).replace(i,"&quot;")+'"'),a+">"+o+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(a),r(r.P+r.F*o((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},281:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(0),o=n.n(r),c=n(264),i=n.n(c),a=n(130),s=n.n(a);function u(e){var t=e.children;return o.a.createElement("div",{className:i()(s.a.root)},t)}},282:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));n(279);var r=n(270),o=n(0),c=n.n(o),i=n(264),a=n.n(i),s=n(131),u=n.n(s);function f(e){var t=e.title,n=e.description,o=e.link;return c.a.createElement("div",{className:a()("card-demo",u.a.root)},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card__header"},c.a.createElement("h3",null,t)),c.a.createElement("div",{className:"card__body"},c.a.createElement("p",null,n)),c.a.createElement("div",{className:"card__footer"},c.a.createElement(r.a,{className:"button button--secondary button--block",to:o},"Get Started"))))}}}]);