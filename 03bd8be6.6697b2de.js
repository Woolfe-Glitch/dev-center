/*! For license information please see 03bd8be6.6697b2de.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4,103],{140:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return l}));var o=n(1),r=n(9),a=(n(0),n(252)),i={},c={id:"web/snippets/prereqs-layout-config-editing",title:"prereqs-layout-config-editing",description:"-   Follow along by setting up the [Geocortex Web SDK](../sdk-overview.mdx) and editing the minimal layout and app config provided.",source:"@site/docs/web/snippets/prereqs-layout-config-editing.mdx",permalink:"/docs/web/snippets/prereqs-layout-config-editing",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/snippets/prereqs-layout-config-editing.mdx"},u=[],s={rightToc:u};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Follow along by setting up the ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/web/sdk-overview"}),"Geocortex Web SDK")," and editing the minimal layout and app config provided."),Object(a.b)("li",{parentName:"ul"},"Check out the ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/web/sdk-deployment#modifying-layout-and-app-config-using-the-geocortex-web-designer"}),"deployment instructions")," to learn about how to deploy layout and app config to an application.")))}l.isMDXComponent=!0},158:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return f})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return d}));var o=n(1),r=n(9),a=(n(0),n(252)),i=n(276),c=n(275),u=n(270),s=n(271),l=n(140),p={title:"Change Default Application Behavior",description:"Geocortex Web - Learn how to configure Geocortex Web to change default application behavior"},f={id:"web/usecases-change-default-behavior",title:"Change Default Application Behavior",description:"Geocortex Web - Learn how to configure Geocortex Web to change default application behavior",source:"@site/docs/web/usecases-change-default-behavior.mdx",permalink:"/docs/web/usecases-change-default-behavior",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/usecases-change-default-behavior.mdx",sidebar:"web",previous:{title:"Advanced App Config",permalink:"/docs/web/concepts-advanced-app-config"},next:{title:"Customize the Look and Feel",permalink:"/docs/web/usecases-look-and-feel"}},b=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Custom Behavior of Built-in Components",id:"custom-behavior-of-built-in-components",children:[]},{value:"Using Workflows to Customize Behavior",id:"using-workflows-to-customize-behavior",children:[]},{value:"Discovering Configurable Properties",id:"discovering-configurable-properties",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],m={rightToc:b};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Many of the behaviors of Geocortex Web's built-in ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/concepts-components-services"}),"components")," are configurable through the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/concepts-app-config"}),"app config"),"."),Object(a.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(a.b)(l.default,{mdxType:"PrereqsLayoutConfigSnippet"}),Object(a.b)("h2",{id:"custom-behavior-of-built-in-components"},"Custom Behavior of Built-in Components"),Object(a.b)("p",null,"The following example overrides the default behavior for a map click by modifying the ",Object(a.b)("inlineCode",{parentName:"p"},"onClick")," property in the app config for the map component."),Object(a.b)(i.a,{defaultValue:"config",values:[{label:"App Config",value:"config"},{label:"Layout",value:"layout"}],mdxType:"Tabs"},Object(a.b)(c.a,{value:"config",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n    "schemaVersion": "1.0",\n    "items": [\n        ...\n        {\n            "$type": "map-extension",\n            "id": "map-1",\n            "onClick": [ "tasks.identify", "highlights.pulse", "results.display" ]\n        },\n        ...\n    ]\n}\n'))),Object(a.b)(c.a,{value:"layout",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="UTF-8"?>\n<layout xmlns="https://geocortex.com/layout/v1">\n    <map config="map-1"/>\n</layout>\n')))),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"onClick")," property for the ",Object(a.b)("inlineCode",{parentName:"p"},"<map>")," has been configured to run a series of ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/concepts-commands-operations"}),"commands and operations"),". These commands and operations will be executed on a map click instead of the default map click behavior."),Object(a.b)("h2",{id:"using-workflows-to-customize-behavior"},"Using Workflows to Customize Behavior"),Object(a.b)("p",null,"By using the ",Object(a.b)("inlineCode",{parentName:"p"},"workflow.run")," command, you can even execute a ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/geocortex-workflow.htm#Introduction_to_Geocortex_Workflow%3FTocPath%3D%250A%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520%2520Introduction%2520to%2520Geocortex%2520Workflow%7C_____0"}),"workflow")," with completely configurable behavior."),Object(a.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(a.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"For a more in depth example, check out the use case on ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/usecases-change-default-map-click-behavior"}),"overriding default map click behavior with a workflow"),"."))),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n    "schemaVersion": "1.0",\n    "items": [\n        ...\n        {\n            "$type": "workflow",\n            "id": "custom-click-workflow",\n            "title": "Custom Map Click Workflow",\n            "commandArgumentInput": "context",\n            "target": "#taskbar",\n            "portalItem": "<your-workflow-id-here>"\n        },\n        {\n            "$type": "map-extension",\n            "id": "map-1",\n            "onClick": [\n                {\n                    "name": "workflow.run",\n                    "arguments": {\n                        "id": "custom-click-workflow"\n                    }\n                }\n            ]\n        },\n        ...\n    ]\n}\n')),Object(a.b)("h2",{id:"discovering-configurable-properties"},"Discovering Configurable Properties"),Object(a.b)("p",null,"You can view the configurable properties for a given component in the API documentation. For example, ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/api-components#map"}),"here's the documentation")," for the ",Object(a.b)("inlineCode",{parentName:"p"},"<map>")," component with the ",Object(a.b)("inlineCode",{parentName:"p"},"onClick")," property."),Object(a.b)("p",null,"By using commands and operations to customize default behavior and using ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/concepts-layout"}),"layout principles")," to modify the UI, you can customize a Geocortex Web Application without having to write custom code."),Object(a.b)("h2",{id:"next-steps"},"Next Steps"),Object(a.b)("p",null,"Geocortex Web comes with many built-in commands and operations to help you accomplish your goal. If these are not enough, Geocortex Workflow can help you implement custom behaviors without writing custom code. If you cannot create the behavior you want with Geocortex Workflow, it might be time to look into using the Geocortex Web SDK to implement a custom command or operation."),Object(a.b)(u.a,{mdxType:"UseCaseContainer"},Object(a.b)(s.a,{title:"Commands and Operations",description:"Learn more about commands and operations",link:"concepts-commands-operations",mdxType:"UseCaseCard"}),Object(a.b)(s.a,{title:"Geocortex Workflow",description:"Learn more about Geocortex Workflow",link:"../workflow/overview",mdxType:"UseCaseCard"}),Object(a.b)(s.a,{title:"Change Geocortex Web's Default Map Click Behavior",description:"Learn how to Geocortex Workflow to override Geocortex Web's default map click behavior",link:"usecases-change-default-map-click-behavior",mdxType:"UseCaseCard"}),Object(a.b)(s.a,{title:"Implement Custom Command/Operation",description:"Implement a custom Command/Operation with the Geocortex Web SDK",link:"usecases-implement-command-operation",mdxType:"UseCaseCard"})))}d.isMDXComponent=!0},252:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),b=o,m=p["".concat(i,".").concat(b)]||p[b]||f[b]||a;return n?r.a.createElement(m,c({ref:t},s,{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},253:function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var a=typeof o;if("string"===a||"number"===a)e.push(o);else if(Array.isArray(o)&&o.length){var i=r.apply(null,o);i&&e.push(i)}else if("object"===a)for(var c in o)n.call(o,c)&&o[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},254:function(e,t,n){"use strict";var o=n(12),r=n(30),a=n(257),i="".startsWith;o(o.P+o.F*n(258)("startsWith"),"String",{startsWith:function(e){var t=a(this,e,"startsWith"),n=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),o=String(e);return i?i.call(t,o,n):t.slice(n,n+o.length)===o}})},255:function(e,t,n){var o=n(81),r=n(54).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return o(e,r)}},256:function(e,t,n){t.f=n(2)},257:function(e,t,n){var o=n(79),r=n(29);e.exports=function(e,t,n){if(o(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(r(e))}},258:function(e,t,n){var o=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[o]=!1,!"/./"[e](t)}catch(r){}}return!0}},259:function(e,t,n){"use strict";n(53),n(254),n(263);var o=n(0),r=n.n(o),a=n(41),i=n(260),c=n(17),u=n.n(c),s=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(n[o[r]]=e[o[r]])}return n};t.a=function(e){var t,n=e.isNavLink,c=s(e,["isNavLink"]),l=c.to,p=c.href,f=l||p,b=Object(i.a)(f),m=Object(o.useRef)(!1),d=n?a.c:a.b,h=u.a.canUseIntersectionObserver;return Object(o.useEffect)((function(){return!h&&b&&window.docusaurus.prefetch(f),function(){h&&t&&t.disconnect()}}),[f,h,b]),f&&b&&!f.startsWith("#")?r.a.createElement(d,Object.assign({},c,{onMouseEnter:function(){m.current||(window.docusaurus.preload(f),m.current=!0)},innerRef:function(e){var n,o;h&&e&&b&&(n=e,o=function(){window.docusaurus.prefetch(f)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),o())}))}))).observe(n))},to:f})):r.a.createElement("a",Object.assign({},c,{href:f}))}},260:function(e,t,n){"use strict";function o(e){return/^\/(?!\/)/.test(e)}n.d(t,"a",(function(){return o}))},261:function(e,t,n){var o=n(22);e.exports=Array.isArray||function(e){return"Array"==o(e)}},262:function(e,t,n){var o=n(51),r=n(52),a=n(28),i=n(77),c=n(27),u=n(80),s=Object.getOwnPropertyDescriptor;t.f=n(10)?s:function(e,t){if(e=a(e),t=i(t,!0),u)try{return s(e,t)}catch(n){}if(c(e,t))return r(!o.f.call(e,t),e[t])}},263:function(e,t,n){"use strict";var o=n(5),r=n(27),a=n(10),i=n(12),c=n(15),u=n(264).KEY,s=n(13),l=n(42),p=n(43),f=n(39),b=n(2),m=n(256),d=n(265),h=n(266),v=n(261),g=n(8),y=n(14),O=n(31),w=n(28),j=n(77),x=n(52),k=n(82),C=n(267),N=n(262),S=n(78),E=n(26),P=n(21),T=N.f,W=E.f,G=C.f,D=o.Symbol,I=o.JSON,F=I&&I.stringify,_=b("_hidden"),A=b("toPrimitive"),M={}.propertyIsEnumerable,L=l("symbol-registry"),z=l("symbols"),B=l("op-symbols"),U=Object.prototype,q="function"==typeof D&&!!S.f,K=o.QObject,J=!K||!K.prototype||!K.prototype.findChild,R=a&&s((function(){return 7!=k(W({},"a",{get:function(){return W(this,"a",{value:7}).a}})).a}))?function(e,t,n){var o=T(U,t);o&&delete U[t],W(e,t,n),o&&e!==U&&W(U,t,o)}:W,X=function(e){var t=z[e]=k(D.prototype);return t._k=e,t},V=q&&"symbol"==typeof D.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof D},Y=function(e,t,n){return e===U&&Y(B,t,n),g(e),t=j(t,!0),g(n),r(z,t)?(n.enumerable?(r(e,_)&&e[_][t]&&(e[_][t]=!1),n=k(n,{enumerable:x(0,!1)})):(r(e,_)||W(e,_,x(1,{})),e[_][t]=!0),R(e,t,n)):W(e,t,n)},$=function(e,t){g(e);for(var n,o=h(t=w(t)),r=0,a=o.length;a>r;)Y(e,n=o[r++],t[n]);return e},H=function(e){var t=M.call(this,e=j(e,!0));return!(this===U&&r(z,e)&&!r(B,e))&&(!(t||!r(this,e)||!r(z,e)||r(this,_)&&this[_][e])||t)},Q=function(e,t){if(e=w(e),t=j(t,!0),e!==U||!r(z,t)||r(B,t)){var n=T(e,t);return!n||!r(z,t)||r(e,_)&&e[_][t]||(n.enumerable=!0),n}},Z=function(e){for(var t,n=G(w(e)),o=[],a=0;n.length>a;)r(z,t=n[a++])||t==_||t==u||o.push(t);return o},ee=function(e){for(var t,n=e===U,o=G(n?B:w(e)),a=[],i=0;o.length>i;)!r(z,t=o[i++])||n&&!r(U,t)||a.push(z[t]);return a};q||(c((D=function(){if(this instanceof D)throw TypeError("Symbol is not a constructor!");var e=f(arguments.length>0?arguments[0]:void 0),t=function(n){this===U&&t.call(B,n),r(this,_)&&r(this[_],e)&&(this[_][e]=!1),R(this,e,x(1,n))};return a&&J&&R(U,e,{configurable:!0,set:t}),X(e)}).prototype,"toString",(function(){return this._k})),N.f=Q,E.f=Y,n(255).f=C.f=Z,n(51).f=H,S.f=ee,a&&!n(40)&&c(U,"propertyIsEnumerable",H,!0),m.f=function(e){return X(b(e))}),i(i.G+i.W+i.F*!q,{Symbol:D});for(var te="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ne=0;te.length>ne;)b(te[ne++]);for(var oe=P(b.store),re=0;oe.length>re;)d(oe[re++]);i(i.S+i.F*!q,"Symbol",{for:function(e){return r(L,e+="")?L[e]:L[e]=D(e)},keyFor:function(e){if(!V(e))throw TypeError(e+" is not a symbol!");for(var t in L)if(L[t]===e)return t},useSetter:function(){J=!0},useSimple:function(){J=!1}}),i(i.S+i.F*!q,"Object",{create:function(e,t){return void 0===t?k(e):$(k(e),t)},defineProperty:Y,defineProperties:$,getOwnPropertyDescriptor:Q,getOwnPropertyNames:Z,getOwnPropertySymbols:ee});var ae=s((function(){S.f(1)}));i(i.S+i.F*ae,"Object",{getOwnPropertySymbols:function(e){return S.f(O(e))}}),I&&i(i.S+i.F*(!q||s((function(){var e=D();return"[null]"!=F([e])||"{}"!=F({a:e})||"{}"!=F(Object(e))}))),"JSON",{stringify:function(e){for(var t,n,o=[e],r=1;arguments.length>r;)o.push(arguments[r++]);if(n=t=o[1],(y(t)||void 0!==e)&&!V(e))return v(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!V(t))return t}),o[1]=t,F.apply(I,o)}}),D.prototype[A]||n(11)(D.prototype,A,D.prototype.valueOf),p(D,"Symbol"),p(Math,"Math",!0),p(o.JSON,"JSON",!0)},264:function(e,t,n){var o=n(39)("meta"),r=n(14),a=n(27),i=n(26).f,c=0,u=Object.isExtensible||function(){return!0},s=!n(13)((function(){return u(Object.preventExtensions({}))})),l=function(e){i(e,o,{value:{i:"O"+ ++c,w:{}}})},p=e.exports={KEY:o,NEED:!1,fastKey:function(e,t){if(!r(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!a(e,o)){if(!u(e))return"F";if(!t)return"E";l(e)}return e[o].i},getWeak:function(e,t){if(!a(e,o)){if(!u(e))return!0;if(!t)return!1;l(e)}return e[o].w},onFreeze:function(e){return s&&p.NEED&&u(e)&&!a(e,o)&&l(e),e}}},265:function(e,t,n){var o=n(5),r=n(16),a=n(40),i=n(256),c=n(26).f;e.exports=function(e){var t=r.Symbol||(r.Symbol=a?{}:o.Symbol||{});"_"==e.charAt(0)||e in t||c(t,e,{value:i.f(e)})}},266:function(e,t,n){var o=n(21),r=n(78),a=n(51);e.exports=function(e){var t=o(e),n=r.f;if(n)for(var i,c=n(e),u=a.f,s=0;c.length>s;)u.call(e,i=c[s++])&&t.push(i);return t}},267:function(e,t,n){var o=n(28),r=n(255).f,a={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return i&&"[object Window]"==a.call(e)?function(e){try{return r(e)}catch(t){return i.slice()}}(e):r(o(e))}},268:function(e,t,n){"use strict";n(269)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},269:function(e,t,n){var o=n(12),r=n(13),a=n(29),i=/"/g,c=function(e,t,n,o){var r=String(a(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(o).replace(i,"&quot;")+'"'),c+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),o(o.P+o.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},270:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var o=n(0),r=n.n(o),a=n(253),i=n.n(a),c=n(130),u=n.n(c);function s(e){var t=e.children;return r.a.createElement("div",{className:i()(u.a.root)},t)}},271:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n(268);var o=n(259),r=n(0),a=n.n(r),i=n(253),c=n.n(i),u=n(131),s=n.n(u);function l(e){var t=e.title,n=e.description,r=e.link;return a.a.createElement("div",{className:c()("card-demo",s.a.root)},a.a.createElement("div",{className:"card"},a.a.createElement("div",{className:"card__header"},a.a.createElement("h3",null,t)),a.a.createElement("div",{className:"card__body"},a.a.createElement("p",null,n)),a.a.createElement("div",{className:"card__footer"},a.a.createElement(o.a,{className:"button button--secondary button--block",to:r},"Get Started"))))}},274:function(e,t,n){"use strict";var o=n(0),r=Object(o.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=r},275:function(e,t,n){"use strict";var o=n(0),r=n.n(o);t.a=function(e){return r.a.createElement("div",null,e.children)}},276:function(e,t,n){"use strict";n(32),n(23),n(24);var o=n(0),r=n.n(o),a=n(274);var i=function(){return Object(o.useContext)(a.a)},c=n(253),u=n.n(c),s=n(132),l=n.n(s),p=37,f=39;t.a=function(e){var t=e.block,n=e.children,a=e.defaultValue,c=e.values,s=e.groupId,b=i(),m=b.tabGroupChoices,d=b.setTabGroupChoices,h=Object(o.useState)(a),v=h[0],g=h[1];if(null!=s){var y=m[s];null!=y&&y!==v&&g(y)}var O=function(e){g(e),null!=s&&d(s,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:u()("tabs",{"tabs--block":t})},c.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":v===t,className:u()("tab-item",l.a.tabItem,{"tab-item--active":v===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case f:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return O(t)},onClick:function(){return O(t)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},o.Children.toArray(n).filter((function(e){return e.props.value===v}))[0]))}}}]);