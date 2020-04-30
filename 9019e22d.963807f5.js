/*! For license information please see 9019e22d.963807f5.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{208:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(1),o=r(9),i=(r(0),r(252)),a=r(270),c=r(271),s={title:"Geocortex Mobile",description:"Geocortex Workflow - Get started with developing workflow on Geocortex Mobile"},u={id:"workflow/sdk-net-getting-started-mobile",title:"Geocortex Mobile",description:"Geocortex Workflow - Get started with developing workflow on Geocortex Mobile",source:"@site/docs/workflow/sdk-net-getting-started-mobile.mdx",permalink:"/docs/workflow/sdk-net-getting-started-mobile",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/sdk-net-getting-started-mobile.mdx",sidebar:"workflow",previous:{title:"Activity Block Tags",permalink:"/docs/workflow/sdk-web-activity-block-tags"},next:{title:"Geocortex Workflow Server",permalink:"/docs/workflow/sdk-net-getting-started-server"}},l=[{value:"SDK Samples",id:"sdk-samples",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],f={rightToc:l};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},f,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Geocortex Mobile SDK is used to extend Geocortex Workflow functionality for Geocortex Mobile. Follow the instructions in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/mobile/sdk-quick-start"}),"Quickstart")," project to get set up for Geocortex Mobile + Geocortex Workflow custom development."),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Creating custom workflow activities for Geocortex Mobile requires the development and deployment of a custom Geocortex Mobile application."))),Object(i.b)("h2",{id:"sdk-samples"},"SDK Samples"),Object(i.b)("p",null,"The Geocortex Mobile SDK includes various ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/mobile/sdk-samples"}),"SDK Samples")," for development, including ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Workflow/CustomActivity"}),"a sample which demonstrate custom workflow functionality")," ."),Object(i.b)("h2",{id:"next-steps"},"Next Steps"),Object(i.b)(a.a,{mdxType:"UseCaseContainer"},Object(i.b)(c.a,{title:"Implement a Custom Activity",description:"Implement a custom activity for Geocortex Mobile",link:"usecases-mobile-implement-custom-activity",mdxType:"UseCaseCard"}),Object(i.b)(c.a,{title:"Implement a Custom Form Element",description:"Implement a custom form element for Geocortex Mobile",link:"usecases-mobile-implement-custom-form-elements",mdxType:"UseCaseCard"}),Object(i.b)(c.a,{title:"Reference a Third Party library",description:"Reference a third party library in Geocortex Mobile",link:"usecases-mobile-reference-third-party-library",mdxType:"UseCaseCard"})))}p.isMDXComponent=!0},252:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},f=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(r),m=n,b=f["".concat(a,".").concat(m)]||f[m]||p[m]||i;return r?o.a.createElement(b,c({ref:t},u,{components:r})):o.a.createElement(b,c({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},253:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)&&n.length){var a=o.apply(null,n);a&&e.push(a)}else if("object"===i)for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},254:function(e,t,r){"use strict";var n=r(12),o=r(30),i=r(257),a="".startsWith;n(n.P+n.F*r(258)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),r=o(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return a?a.call(t,n,r):t.slice(r,r+n.length)===n}})},255:function(e,t,r){var n=r(81),o=r(54).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,o)}},256:function(e,t,r){t.f=r(2)},257:function(e,t,r){var n=r(79),o=r(29);e.exports=function(e,t,r){if(n(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(o(e))}},258:function(e,t,r){var n=r(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,!"/./"[e](t)}catch(o){}}return!0}},259:function(e,t,r){"use strict";r(53),r(254),r(263);var n=r(0),o=r.n(n),i=r(41),a=r(260),c=r(17),s=r.n(c),u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};t.a=function(e){var t,r=e.isNavLink,c=u(e,["isNavLink"]),l=c.to,f=c.href,p=l||f,m=Object(a.a)(p),b=Object(n.useRef)(!1),d=r?i.c:i.b,v=s.a.canUseIntersectionObserver;return Object(n.useEffect)((function(){return!v&&m&&window.docusaurus.prefetch(p),function(){v&&t&&t.disconnect()}}),[p,v,m]),p&&m&&!p.startsWith("#")?o.a.createElement(d,Object.assign({},c,{onMouseEnter:function(){b.current||(window.docusaurus.preload(p),b.current=!0)},innerRef:function(e){var r,n;v&&e&&m&&(r=e,n=function(){window.docusaurus.prefetch(p)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){r===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(r),t.disconnect(),n())}))}))).observe(r))},to:p})):o.a.createElement("a",Object.assign({},c,{href:p}))}},260:function(e,t,r){"use strict";function n(e){return/^\/(?!\/)/.test(e)}r.d(t,"a",(function(){return n}))},261:function(e,t,r){var n=r(22);e.exports=Array.isArray||function(e){return"Array"==n(e)}},262:function(e,t,r){var n=r(51),o=r(52),i=r(28),a=r(77),c=r(27),s=r(80),u=Object.getOwnPropertyDescriptor;t.f=r(10)?u:function(e,t){if(e=i(e),t=a(t,!0),s)try{return u(e,t)}catch(r){}if(c(e,t))return o(!n.f.call(e,t),e[t])}},263:function(e,t,r){"use strict";var n=r(5),o=r(27),i=r(10),a=r(12),c=r(15),s=r(264).KEY,u=r(13),l=r(42),f=r(43),p=r(39),m=r(2),b=r(256),d=r(265),v=r(266),y=r(261),h=r(8),g=r(14),O=r(31),w=r(28),j=r(77),x=r(52),S=r(82),k=r(267),E=r(262),N=r(78),P=r(26),M=r(21),G=E.f,T=P.f,C=k.f,D=n.Symbol,W=n.JSON,F=W&&W.stringify,I=m("_hidden"),A=m("toPrimitive"),_={}.propertyIsEnumerable,K=l("symbol-registry"),R=l("symbols"),J=l("op-symbols"),U=Object.prototype,z="function"==typeof D&&!!N.f,L=n.QObject,q=!L||!L.prototype||!L.prototype.findChild,X=i&&u((function(){return 7!=S(T({},"a",{get:function(){return T(this,"a",{value:7}).a}})).a}))?function(e,t,r){var n=G(U,t);n&&delete U[t],T(e,t,r),n&&e!==U&&T(U,t,n)}:T,B=function(e){var t=R[e]=S(D.prototype);return t._k=e,t},H=z&&"symbol"==typeof D.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof D},Q=function(e,t,r){return e===U&&Q(J,t,r),h(e),t=j(t,!0),h(r),o(R,t)?(r.enumerable?(o(e,I)&&e[I][t]&&(e[I][t]=!1),r=S(r,{enumerable:x(0,!1)})):(o(e,I)||T(e,I,x(1,{})),e[I][t]=!0),X(e,t,r)):T(e,t,r)},Y=function(e,t){h(e);for(var r,n=v(t=w(t)),o=0,i=n.length;i>o;)Q(e,r=n[o++],t[r]);return e},V=function(e){var t=_.call(this,e=j(e,!0));return!(this===U&&o(R,e)&&!o(J,e))&&(!(t||!o(this,e)||!o(R,e)||o(this,I)&&this[I][e])||t)},Z=function(e,t){if(e=w(e),t=j(t,!0),e!==U||!o(R,t)||o(J,t)){var r=G(e,t);return!r||!o(R,t)||o(e,I)&&e[I][t]||(r.enumerable=!0),r}},$=function(e){for(var t,r=C(w(e)),n=[],i=0;r.length>i;)o(R,t=r[i++])||t==I||t==s||n.push(t);return n},ee=function(e){for(var t,r=e===U,n=C(r?J:w(e)),i=[],a=0;n.length>a;)!o(R,t=n[a++])||r&&!o(U,t)||i.push(R[t]);return i};z||(c((D=function(){if(this instanceof D)throw TypeError("Symbol is not a constructor!");var e=p(arguments.length>0?arguments[0]:void 0),t=function(r){this===U&&t.call(J,r),o(this,I)&&o(this[I],e)&&(this[I][e]=!1),X(this,e,x(1,r))};return i&&q&&X(U,e,{configurable:!0,set:t}),B(e)}).prototype,"toString",(function(){return this._k})),E.f=Z,P.f=Q,r(255).f=k.f=$,r(51).f=V,N.f=ee,i&&!r(40)&&c(U,"propertyIsEnumerable",V,!0),b.f=function(e){return B(m(e))}),a(a.G+a.W+a.F*!z,{Symbol:D});for(var te="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),re=0;te.length>re;)m(te[re++]);for(var ne=M(m.store),oe=0;ne.length>oe;)d(ne[oe++]);a(a.S+a.F*!z,"Symbol",{for:function(e){return o(K,e+="")?K[e]:K[e]=D(e)},keyFor:function(e){if(!H(e))throw TypeError(e+" is not a symbol!");for(var t in K)if(K[t]===e)return t},useSetter:function(){q=!0},useSimple:function(){q=!1}}),a(a.S+a.F*!z,"Object",{create:function(e,t){return void 0===t?S(e):Y(S(e),t)},defineProperty:Q,defineProperties:Y,getOwnPropertyDescriptor:Z,getOwnPropertyNames:$,getOwnPropertySymbols:ee});var ie=u((function(){N.f(1)}));a(a.S+a.F*ie,"Object",{getOwnPropertySymbols:function(e){return N.f(O(e))}}),W&&a(a.S+a.F*(!z||u((function(){var e=D();return"[null]"!=F([e])||"{}"!=F({a:e})||"{}"!=F(Object(e))}))),"JSON",{stringify:function(e){for(var t,r,n=[e],o=1;arguments.length>o;)n.push(arguments[o++]);if(r=t=n[1],(g(t)||void 0!==e)&&!H(e))return y(t)||(t=function(e,t){if("function"==typeof r&&(t=r.call(this,e,t)),!H(t))return t}),n[1]=t,F.apply(W,n)}}),D.prototype[A]||r(11)(D.prototype,A,D.prototype.valueOf),f(D,"Symbol"),f(Math,"Math",!0),f(n.JSON,"JSON",!0)},264:function(e,t,r){var n=r(39)("meta"),o=r(14),i=r(27),a=r(26).f,c=0,s=Object.isExtensible||function(){return!0},u=!r(13)((function(){return s(Object.preventExtensions({}))})),l=function(e){a(e,n,{value:{i:"O"+ ++c,w:{}}})},f=e.exports={KEY:n,NEED:!1,fastKey:function(e,t){if(!o(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!i(e,n)){if(!s(e))return"F";if(!t)return"E";l(e)}return e[n].i},getWeak:function(e,t){if(!i(e,n)){if(!s(e))return!0;if(!t)return!1;l(e)}return e[n].w},onFreeze:function(e){return u&&f.NEED&&s(e)&&!i(e,n)&&l(e),e}}},265:function(e,t,r){var n=r(5),o=r(16),i=r(40),a=r(256),c=r(26).f;e.exports=function(e){var t=o.Symbol||(o.Symbol=i?{}:n.Symbol||{});"_"==e.charAt(0)||e in t||c(t,e,{value:a.f(e)})}},266:function(e,t,r){var n=r(21),o=r(78),i=r(51);e.exports=function(e){var t=n(e),r=o.f;if(r)for(var a,c=r(e),s=i.f,u=0;c.length>u;)s.call(e,a=c[u++])&&t.push(a);return t}},267:function(e,t,r){var n=r(28),o=r(255).f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return a&&"[object Window]"==i.call(e)?function(e){try{return o(e)}catch(t){return a.slice()}}(e):o(n(e))}},268:function(e,t,r){"use strict";r(269)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},269:function(e,t,r){var n=r(12),o=r(13),i=r(29),a=/"/g,c=function(e,t,r,n){var o=String(i(e)),c="<"+t;return""!==r&&(c+=" "+r+'="'+String(n).replace(a,"&quot;")+'"'),c+">"+o+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(c),n(n.P+n.F*o((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}},270:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(0),o=r.n(n),i=r(253),a=r.n(i),c=r(130),s=r.n(c);function u(e){var t=e.children;return o.a.createElement("div",{className:a()(s.a.root)},t)}},271:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));r(268);var n=r(259),o=r(0),i=r.n(o),a=r(253),c=r.n(a),s=r(131),u=r.n(s);function l(e){var t=e.title,r=e.description,o=e.link;return i.a.createElement("div",{className:c()("card-demo",u.a.root)},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card__header"},i.a.createElement("h3",null,t)),i.a.createElement("div",{className:"card__body"},i.a.createElement("p",null,r)),i.a.createElement("div",{className:"card__footer"},i.a.createElement(n.a,{className:"button button--secondary button--block",to:o},"Get Started"))))}}}]);