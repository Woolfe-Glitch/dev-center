/*! For license information please see ce430d7a.2249bff2.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{236:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return f})),r.d(t,"default",(function(){return p}));var n=r(1),o=r(9),i=(r(0),r(263)),c=r(282),a=r(281),s={title:"SDK Samples",description:"Geocortex Mobile - Learn about the Geocortex Mobile SDK Samples project"},u={id:"mobile/sdk-samples",title:"SDK Samples",description:"Geocortex Mobile - Learn about the Geocortex Mobile SDK Samples project",source:"@site/docs/mobile/sdk-samples.mdx",permalink:"/docs/mobile/sdk-samples",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/sdk-samples.mdx",sidebar:"mobile",previous:{title:"Advanced",permalink:"/docs/mobile/sdk-advanced-quickstart"},next:{title:"Dependency Injection",permalink:"/docs/mobile/sdk-dependency-injection"}},f=[],l={rightToc:f};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Alongside the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-quickstart"}),"Quickstart Project"),", a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples"}),"SDK Samples project")," has been created which demonstrates using the SDK to extend Geocortex Mobile with custom components, operations and services. The samples project also demonstrates configurations, conceptual ideas, and the use and extension of ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/workflow/overview"}),"Geocortex Workflow"),". Running the project displays a selector which lets you explore the live samples."),Object(i.b)(a.a,{mdxType:"UseCaseContainer"},Object(i.b)(c.a,{title:"Quickstart",description:"Check out the Geocortex Mobile SDK Quickstart Project.",link:"https://github.com/geocortex/vertigis-mobile-quickstart",mdxType:"UseCaseCard"}),Object(i.b)(c.a,{title:"SDK Samples",description:"Check out the Geocortex Mobile SDK Samples Project.",link:"https://github.com/geocortex/vertigis-mobile-samples",mdxType:"UseCaseCard"})))}p.isMDXComponent=!0},263:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),f=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a({},t,{},e)),r},l=function(e){var t=f(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=f(r),b=n,m=l["".concat(c,".").concat(b)]||l[b]||p[b]||i;return r?o.a.createElement(m,a({ref:t},u,{components:r})):o.a.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=b;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var u=2;u<i;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},264:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var c=o.apply(null,n);c&&e.push(c)}else if("object"===i)for(var a in n)r.call(n,a)&&n[a]&&e.push(a)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},265:function(e,t,r){var n=r(81),o=r(54).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,o)}},266:function(e,t,r){t.f=r(2)},267:function(e,t,r){"use strict";var n=r(12),o=r(30),i=r(268),c="".startsWith;n(n.P+n.F*r(269)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),r=o(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return c?c.call(t,n,r):t.slice(r,r+n.length)===n}})},268:function(e,t,r){var n=r(79),o=r(29);e.exports=function(e,t,r){if(n(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(o(e))}},269:function(e,t,r){var n=r(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,!"/./"[e](t)}catch(o){}}return!0}},270:function(e,t,r){"use strict";r(53),r(267),r(274);var n=r(0),o=r.n(n),i=r(41),c=r(271),a=r(17),s=r.n(a),u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};t.a=function(e){var t,r=e.isNavLink,a=u(e,["isNavLink"]),f=a.to,l=a.href,p=f||l,b=Object(c.a)(p),m=Object(n.useRef)(!1),d=r?i.c:i.b,y=s.a.canUseIntersectionObserver;return Object(n.useEffect)((function(){return!y&&b&&window.docusaurus.prefetch(p),function(){y&&t&&t.disconnect()}}),[p,y,b]),p&&b&&!p.startsWith("#")?o.a.createElement(d,Object.assign({},a,{onMouseEnter:function(){m.current||(window.docusaurus.preload(p),m.current=!0)},innerRef:function(e){var r,n;y&&e&&b&&(r=e,n=function(){window.docusaurus.prefetch(p)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){r===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(r),t.disconnect(),n())}))}))).observe(r))},to:p})):o.a.createElement("a",Object.assign({},a,{href:p}))}},271:function(e,t,r){"use strict";function n(e){return/^\/(?!\/)/.test(e)}r.d(t,"a",(function(){return n}))},272:function(e,t,r){var n=r(22);e.exports=Array.isArray||function(e){return"Array"==n(e)}},273:function(e,t,r){var n=r(51),o=r(52),i=r(28),c=r(77),a=r(27),s=r(80),u=Object.getOwnPropertyDescriptor;t.f=r(10)?u:function(e,t){if(e=i(e),t=c(t,!0),s)try{return u(e,t)}catch(r){}if(a(e,t))return o(!n.f.call(e,t),e[t])}},274:function(e,t,r){"use strict";var n=r(5),o=r(27),i=r(10),c=r(12),a=r(15),s=r(275).KEY,u=r(13),f=r(42),l=r(43),p=r(39),b=r(2),m=r(266),d=r(276),y=r(277),h=r(272),v=r(8),g=r(14),O=r(31),j=r(28),w=r(77),S=r(52),x=r(82),E=r(278),P=r(273),k=r(78),N=r(26),D=r(21),T=P.f,C=N.f,M=E.f,K=n.Symbol,F=n.JSON,G=F&&F.stringify,_=b("_hidden"),A=b("toPrimitive"),I={}.propertyIsEnumerable,W=f("symbol-registry"),J=f("symbols"),L=f("op-symbols"),R=Object.prototype,U="function"==typeof K&&!!k.f,q=n.QObject,Q=!q||!q.prototype||!q.prototype.findChild,X=i&&u((function(){return 7!=x(C({},"a",{get:function(){return C(this,"a",{value:7}).a}})).a}))?function(e,t,r){var n=T(R,t);n&&delete R[t],C(e,t,r),n&&e!==R&&C(R,t,n)}:C,Y=function(e){var t=J[e]=x(K.prototype);return t._k=e,t},z=U&&"symbol"==typeof K.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof K},B=function(e,t,r){return e===R&&B(L,t,r),v(e),t=w(t,!0),v(r),o(J,t)?(r.enumerable?(o(e,_)&&e[_][t]&&(e[_][t]=!1),r=x(r,{enumerable:S(0,!1)})):(o(e,_)||C(e,_,S(1,{})),e[_][t]=!0),X(e,t,r)):C(e,t,r)},H=function(e,t){v(e);for(var r,n=y(t=j(t)),o=0,i=n.length;i>o;)B(e,r=n[o++],t[r]);return e},V=function(e){var t=I.call(this,e=w(e,!0));return!(this===R&&o(J,e)&&!o(L,e))&&(!(t||!o(this,e)||!o(J,e)||o(this,_)&&this[_][e])||t)},Z=function(e,t){if(e=j(e),t=w(t,!0),e!==R||!o(J,t)||o(L,t)){var r=T(e,t);return!r||!o(J,t)||o(e,_)&&e[_][t]||(r.enumerable=!0),r}},$=function(e){for(var t,r=M(j(e)),n=[],i=0;r.length>i;)o(J,t=r[i++])||t==_||t==s||n.push(t);return n},ee=function(e){for(var t,r=e===R,n=M(r?L:j(e)),i=[],c=0;n.length>c;)!o(J,t=n[c++])||r&&!o(R,t)||i.push(J[t]);return i};U||(a((K=function(){if(this instanceof K)throw TypeError("Symbol is not a constructor!");var e=p(arguments.length>0?arguments[0]:void 0),t=function(r){this===R&&t.call(L,r),o(this,_)&&o(this[_],e)&&(this[_][e]=!1),X(this,e,S(1,r))};return i&&Q&&X(R,e,{configurable:!0,set:t}),Y(e)}).prototype,"toString",(function(){return this._k})),P.f=Z,N.f=B,r(265).f=E.f=$,r(51).f=V,k.f=ee,i&&!r(40)&&a(R,"propertyIsEnumerable",V,!0),m.f=function(e){return Y(b(e))}),c(c.G+c.W+c.F*!U,{Symbol:K});for(var te="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),re=0;te.length>re;)b(te[re++]);for(var ne=D(b.store),oe=0;ne.length>oe;)d(ne[oe++]);c(c.S+c.F*!U,"Symbol",{for:function(e){return o(W,e+="")?W[e]:W[e]=K(e)},keyFor:function(e){if(!z(e))throw TypeError(e+" is not a symbol!");for(var t in W)if(W[t]===e)return t},useSetter:function(){Q=!0},useSimple:function(){Q=!1}}),c(c.S+c.F*!U,"Object",{create:function(e,t){return void 0===t?x(e):H(x(e),t)},defineProperty:B,defineProperties:H,getOwnPropertyDescriptor:Z,getOwnPropertyNames:$,getOwnPropertySymbols:ee});var ie=u((function(){k.f(1)}));c(c.S+c.F*ie,"Object",{getOwnPropertySymbols:function(e){return k.f(O(e))}}),F&&c(c.S+c.F*(!U||u((function(){var e=K();return"[null]"!=G([e])||"{}"!=G({a:e})||"{}"!=G(Object(e))}))),"JSON",{stringify:function(e){for(var t,r,n=[e],o=1;arguments.length>o;)n.push(arguments[o++]);if(r=t=n[1],(g(t)||void 0!==e)&&!z(e))return h(t)||(t=function(e,t){if("function"==typeof r&&(t=r.call(this,e,t)),!z(t))return t}),n[1]=t,G.apply(F,n)}}),K.prototype[A]||r(11)(K.prototype,A,K.prototype.valueOf),l(K,"Symbol"),l(Math,"Math",!0),l(n.JSON,"JSON",!0)},275:function(e,t,r){var n=r(39)("meta"),o=r(14),i=r(27),c=r(26).f,a=0,s=Object.isExtensible||function(){return!0},u=!r(13)((function(){return s(Object.preventExtensions({}))})),f=function(e){c(e,n,{value:{i:"O"+ ++a,w:{}}})},l=e.exports={KEY:n,NEED:!1,fastKey:function(e,t){if(!o(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!i(e,n)){if(!s(e))return"F";if(!t)return"E";f(e)}return e[n].i},getWeak:function(e,t){if(!i(e,n)){if(!s(e))return!0;if(!t)return!1;f(e)}return e[n].w},onFreeze:function(e){return u&&l.NEED&&s(e)&&!i(e,n)&&f(e),e}}},276:function(e,t,r){var n=r(5),o=r(16),i=r(40),c=r(266),a=r(26).f;e.exports=function(e){var t=o.Symbol||(o.Symbol=i?{}:n.Symbol||{});"_"==e.charAt(0)||e in t||a(t,e,{value:c.f(e)})}},277:function(e,t,r){var n=r(21),o=r(78),i=r(51);e.exports=function(e){var t=n(e),r=o.f;if(r)for(var c,a=r(e),s=i.f,u=0;a.length>u;)s.call(e,c=a[u++])&&t.push(c);return t}},278:function(e,t,r){var n=r(28),o=r(265).f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return c&&"[object Window]"==i.call(e)?function(e){try{return o(e)}catch(t){return c.slice()}}(e):o(n(e))}},279:function(e,t,r){"use strict";r(280)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},280:function(e,t,r){var n=r(12),o=r(13),i=r(29),c=/"/g,a=function(e,t,r,n){var o=String(i(e)),a="<"+t;return""!==r&&(a+=" "+r+'="'+String(n).replace(c,"&quot;")+'"'),a+">"+o+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(a),n(n.P+n.F*o((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}},281:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(0),o=r.n(n),i=r(264),c=r.n(i),a=r(130),s=r.n(a);function u(e){var t=e.children;return o.a.createElement("div",{className:c()(s.a.root)},t)}},282:function(e,t,r){"use strict";r.d(t,"a",(function(){return f}));r(279);var n=r(270),o=r(0),i=r.n(o),c=r(264),a=r.n(c),s=r(131),u=r.n(s);function f(e){var t=e.title,r=e.description,o=e.link;return i.a.createElement("div",{className:a()("card-demo",u.a.root)},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card__header"},i.a.createElement("h3",null,t)),i.a.createElement("div",{className:"card__body"},i.a.createElement("p",null,r)),i.a.createElement("div",{className:"card__footer"},i.a.createElement(n.a,{className:"button button--secondary button--block",to:o},"Get Started"))))}}}]);