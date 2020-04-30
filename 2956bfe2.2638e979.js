/*! For license information please see 2956bfe2.2638e979.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{180:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(9),i=(n(0),n(252)),o=n(270),c=n(271),s={title:"Getting Started with the Web Applications SDK",sidebar_label:"Getting Started",description:"Geocortex Workflow - Get started with extending workflow for web applications"},l={id:"workflow/sdk-web-getting-started",title:"Getting Started with the Web Applications SDK",description:"Geocortex Workflow - Get started with extending workflow for web applications",source:"@site/docs/workflow/sdk-web-getting-started.mdx",permalink:"/docs/workflow/sdk-web-getting-started",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/sdk-web-getting-started.mdx",sidebar_label:"Getting Started",sidebar:"workflow",previous:{title:"SDK Overview",permalink:"/docs/workflow/sdk-overview"},next:{title:"Integrating the ArcGIS API for JavaScript",permalink:"/docs/workflow/sdk-web-integrating-the-arcgis-api"}},p=[{value:"Download",id:"download",children:[]},{value:"Requirements",id:"requirements",children:[]},{value:"Setup",id:"setup",children:[]},{value:"Building",id:"building",children:[]},{value:"Deployment",id:"deployment",children:[{value:"Host the Activity Pack",id:"host-the-activity-pack",children:[]},{value:"Register the Activity Pack",id:"register-the-activity-pack",children:[]},{value:"Sharing the Activity Pack",id:"sharing-the-activity-pack",children:[]}]},{value:"Next Steps",id:"next-steps",children:[]}],b={rightToc:p};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The Geocortex Workflow for Web Applications SDK consists of a TypeScript project that eases development of Workflow activities and custom form elements. It produces a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/workflow/concepts-key-concepts#activity-packs"}),"Workflow activity pack")," that can be consumed by ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/workflow/concepts-key-concepts#geocortex-workflow-hosts"}),"web applications that use Workflow"),"."),Object(i.b)("h2",{id:"download"},"Download"),Object(i.b)("p",null,"You can download the Workflow Activity SDK for TypeScript ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://apps.geocortex.com/workflow/latest/activity-sdk.zip"}),"here"),"."),Object(i.b)("h2",{id:"requirements"},"Requirements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The latest LTS version of ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://nodejs.org/en/"}),"Node.js"),".",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Run ",Object(i.b)("inlineCode",{parentName:"li"},"node -v")," in the terminal to confirm the version."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.npmjs.com/get-npm"}),"npm")," which is included with Node.")),Object(i.b)("h2",{id:"setup"},"Setup"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Open the ",Object(i.b)("inlineCode",{parentName:"li"},"activity-sdk")," folder found in the SDK in your favorite IDE. We recommend using Visual Studio Code for the best experience."),Object(i.b)("li",{parentName:"ol"},"Run ",Object(i.b)("inlineCode",{parentName:"li"},"npm install")," in the terminal of this folder to install the project's dependencies.")),Object(i.b)("h2",{id:"building"},"Building"),Object(i.b)("p",null,"Run ",Object(i.b)("inlineCode",{parentName:"p"},"npm run build")," in the terminal to compile the TypeScript project."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"dist")," folder will contain the compiled activity pack output.")),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Check out ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/workflow/usecases-web-implement-custom-activity"}),"Implement Custom Activities for Web Applications")," to learn how to make activities for your activity pack."))),Object(i.b)("h2",{id:"deployment"},"Deployment"),Object(i.b)("p",null,"Deploying Workflow activities consists of two steps:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Hosting the Workflow activity pack on a server accessible to the Geocortex Workflow Designer"),Object(i.b)("li",{parentName:"ol"},"Making the Workflow activity pack known to Geocortex Workflow Designer and Workflow Applications by registering it as an ArcGIS item.")),Object(i.b)("h3",{id:"host-the-activity-pack"},"Host the Activity Pack"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"dist")," folder produced by running ",Object(i.b)("inlineCode",{parentName:"p"},"npm run build")," can be directly hosted with the web server technology that is most appropriate for your use case, such as ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.iis.net/"}),"IIS"),".\nActivity packs must be hosted by a web server that supports SSL and CORS."),Object(i.b)("h4",{id:"server-requirements"},"Server Requirements"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The server must have a valid SSL certificate."),Object(i.b)("li",{parentName:"ul"},"The server must support ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Cross-origin_resource_sharing"}),"Cross-Origin Resource Sharing (CORS)")," and allow CORS requests from the ",Object(i.b)("inlineCode",{parentName:"li"},"https://apps.geocortex.com")," origin.")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"If you sign in to Workflow Designer using Portal for ArcGIS your server will need to allow CORS requests from your custom origin. For example, ",Object(i.b)("inlineCode",{parentName:"p"},"https://acme.apps.geocortex.com"),"."))),Object(i.b)("p",null,"Hosting Workflow activity packs in this manner allows Workflow Designer to read the list of custom activities and their metadata from the source files."),Object(i.b)("h4",{id:"development-web-server"},"Development Web Server"),Object(i.b)("p",null,"For ease of development, this project includes an ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/express"}),"Express")," web server that supports SSL and is suitable for most development purposes."),Object(i.b)("p",null,"To start the development web server and enable a compile-on-save watch task:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Run ",Object(i.b)("inlineCode",{parentName:"li"},"npm start")," in the terminal to start the build and the development web server.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Note: You can press ",Object(i.b)("inlineCode",{parentName:"li"},"CTRL+C")," in the terminal to stop the watch and the development web server."),Object(i.b)("li",{parentName:"ul"},"The development web server is only available while the ",Object(i.b)("inlineCode",{parentName:"li"},"start")," task is running."),Object(i.b)("li",{parentName:"ul"},"The development web server is available at https://localhost:57999/ by default.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"You can change the port by modifying ",Object(i.b)("inlineCode",{parentName:"li"},".build/tsc.js"),". Edit the first line:",Object(i.b)("br",{parentName:"li"}),Object(i.b)("inlineCode",{parentName:"li"},"var PORT = 57999;")))),Object(i.b)("li",{parentName:"ul"},"The development web server serves the content of the ",Object(i.b)("inlineCode",{parentName:"li"},"dist")," directory."),Object(i.b)("li",{parentName:"ul"},"The SSL certificate of the development web server is not valid. To work around this, do one of the following:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Open https://localhost:57999/ in a web browser and allow the invalid certificate as an exception."),Object(i.b)("li",{parentName:"ul"},"Trust the ",Object(i.b)("inlineCode",{parentName:"li"},".build/ca.crt")," file (add it to your Trusted Root Authority store)."),Object(i.b)("li",{parentName:"ul"},"Replace the ",Object(i.b)("inlineCode",{parentName:"li"},".build/localhost.crt")," and ",Object(i.b)("inlineCode",{parentName:"li"},".build/localhost.key")," files with a known valid certificate."))),Object(i.b)("li",{parentName:"ul"},"The development web server supports CORS requests from any origin by default.")))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"As ",Object(i.b)("inlineCode",{parentName:"p"},"localhost")," is only accessible to your host machine, activity packs hosted in this manner will not be accessible when running Geocortex Workflow Designer on a different machine."))),Object(i.b)("h3",{id:"register-the-activity-pack"},"Register the Activity Pack"),Object(i.b)("p",null,"To make an activity pack available to workflow authors in Workflow Designer you must create a special item in ArcGIS Online or Portal for ArcGIS that references it."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Sign in to ArcGIS Online or Portal for ArcGIS."),Object(i.b)("li",{parentName:"ol"},"Go to ",Object(i.b)("strong",{parentName:"li"},"My Content"),"."),Object(i.b)("li",{parentName:"ol"},"Select ",Object(i.b)("strong",{parentName:"li"},"Add Item")," > ",Object(i.b)("strong",{parentName:"li"},"An application"),".",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Type: ",Object(i.b)("inlineCode",{parentName:"li"},"Web Mapping"),"."),Object(i.b)("li",{parentName:"ul"},"Purpose: ",Object(i.b)("inlineCode",{parentName:"li"},"Ready To Use"),"."),Object(i.b)("li",{parentName:"ul"},"API: ",Object(i.b)("inlineCode",{parentName:"li"},"JavaScript"),"."),Object(i.b)("li",{parentName:"ul"},"URL: The URL to your activity pack.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Use https://localhost:57999/ for the development server."))),Object(i.b)("li",{parentName:"ul"},"Title: Your desired title."),Object(i.b)("li",{parentName:"ul"},"Tags: ",Object(i.b)("strong",{parentName:"li"},"Must")," include ",Object(i.b)("inlineCode",{parentName:"li"},"geocortex-workflow-activity-pack"),".")))),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The activity pack will ",Object(i.b)("strong",{parentName:"p"},"not")," be registered unless it includes the tag ",Object(i.b)("inlineCode",{parentName:"p"},"geocortex-workflow-activity-pack"),"."))),Object(i.b)("h3",{id:"sharing-the-activity-pack"},"Sharing the Activity Pack"),Object(i.b)("p",null,"As a workflow author, you will see custom activities in Workflow Designer from the activity packs you have registered. You will also see activity packs that have been shared with you via groups you are a member of."),Object(i.b)("p",null,"To share an activity pack with other workflow authors in your organization share the ArcGIS item that represents the activity pack with a group that contains the target users."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"You do not need to share activity packs with the end users of your applications that run workflows containing custom activities."))),Object(i.b)("h2",{id:"next-steps"},"Next Steps"),Object(i.b)(o.a,{mdxType:"UseCaseContainer"},Object(i.b)(c.a,{title:"Implement a Custom Activity",description:"Implement a custom activity for web applications",link:"usecases-web-implement-custom-activity",mdxType:"UseCaseCard"}),Object(i.b)(c.a,{title:"Implement a Custom Form Element",description:"Implement a custom form element for web applications",link:"usecases-web-implement-custom-form-elements",mdxType:"UseCaseCard"}),Object(i.b)(c.a,{title:"Reference a Third Party Library",description:"Reference a third party library in web applications",link:"usecases-web-reference-third-party-library",mdxType:"UseCaseCard"}),Object(i.b)(c.a,{title:"Integrate the ArcGIS API for JavaScript into custom activities",description:"Integrate the ArcGIS API for JavaScript into custom code",link:"sdk-web-integrating-the-arcgis-api",mdxType:"UseCaseCard"})))}u.isMDXComponent=!0},252:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,m=b["".concat(o,".").concat(d)]||b[d]||u[d]||i;return n?a.a.createElement(m,c({ref:t},l,{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},253:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===i)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},254:function(e,t,n){"use strict";var r=n(12),a=n(30),i=n(257),o="".startsWith;r(r.P+r.F*n(258)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),n=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return o?o.call(t,r,n):t.slice(n,n+r.length)===r}})},255:function(e,t,n){var r=n(81),a=n(54).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,a)}},256:function(e,t,n){t.f=n(2)},257:function(e,t,n){var r=n(79),a=n(29);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(e))}},258:function(e,t,n){var r=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(a){}}return!0}},259:function(e,t,n){"use strict";n(53),n(254),n(263);var r=n(0),a=n.n(r),i=n(41),o=n(260),c=n(17),s=n.n(c),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){var t,n=e.isNavLink,c=l(e,["isNavLink"]),p=c.to,b=c.href,u=p||b,d=Object(o.a)(u),m=Object(r.useRef)(!1),f=n?i.c:i.b,h=s.a.canUseIntersectionObserver;return Object(r.useEffect)((function(){return!h&&d&&window.docusaurus.prefetch(u),function(){h&&t&&t.disconnect()}}),[u,h,d]),u&&d&&!u.startsWith("#")?a.a.createElement(f,Object.assign({},c,{onMouseEnter:function(){m.current||(window.docusaurus.preload(u),m.current=!0)},innerRef:function(e){var n,r;h&&e&&d&&(n=e,r=function(){window.docusaurus.prefetch(u)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),r())}))}))).observe(n))},to:u})):a.a.createElement("a",Object.assign({},c,{href:u}))}},260:function(e,t,n){"use strict";function r(e){return/^\/(?!\/)/.test(e)}n.d(t,"a",(function(){return r}))},261:function(e,t,n){var r=n(22);e.exports=Array.isArray||function(e){return"Array"==r(e)}},262:function(e,t,n){var r=n(51),a=n(52),i=n(28),o=n(77),c=n(27),s=n(80),l=Object.getOwnPropertyDescriptor;t.f=n(10)?l:function(e,t){if(e=i(e),t=o(t,!0),s)try{return l(e,t)}catch(n){}if(c(e,t))return a(!r.f.call(e,t),e[t])}},263:function(e,t,n){"use strict";var r=n(5),a=n(27),i=n(10),o=n(12),c=n(15),s=n(264).KEY,l=n(13),p=n(42),b=n(43),u=n(39),d=n(2),m=n(256),f=n(265),h=n(266),v=n(261),O=n(8),j=n(14),w=n(31),y=n(28),g=n(77),N=n(52),k=n(82),S=n(267),x=n(262),C=n(78),T=n(26),P=n(21),E=x.f,A=T.f,I=S.f,W=r.Symbol,R=r.JSON,D=R&&R.stringify,M=d("_hidden"),G=d("toPrimitive"),z={}.propertyIsEnumerable,F=p("symbol-registry"),_=p("symbols"),H=p("op-symbols"),L=Object.prototype,U="function"==typeof W&&!!C.f,q=r.QObject,J=!q||!q.prototype||!q.prototype.findChild,K=i&&l((function(){return 7!=k(A({},"a",{get:function(){return A(this,"a",{value:7}).a}})).a}))?function(e,t,n){var r=E(L,t);r&&delete L[t],A(e,t,n),r&&e!==L&&A(L,t,r)}:A,Y=function(e){var t=_[e]=k(W.prototype);return t._k=e,t},B=U&&"symbol"==typeof W.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof W},V=function(e,t,n){return e===L&&V(H,t,n),O(e),t=g(t,!0),O(n),a(_,t)?(n.enumerable?(a(e,M)&&e[M][t]&&(e[M][t]=!1),n=k(n,{enumerable:N(0,!1)})):(a(e,M)||A(e,M,N(1,{})),e[M][t]=!0),K(e,t,n)):A(e,t,n)},X=function(e,t){O(e);for(var n,r=h(t=y(t)),a=0,i=r.length;i>a;)V(e,n=r[a++],t[n]);return e},Q=function(e){var t=z.call(this,e=g(e,!0));return!(this===L&&a(_,e)&&!a(H,e))&&(!(t||!a(this,e)||!a(_,e)||a(this,M)&&this[M][e])||t)},Z=function(e,t){if(e=y(e),t=g(t,!0),e!==L||!a(_,t)||a(H,t)){var n=E(e,t);return!n||!a(_,t)||a(e,M)&&e[M][t]||(n.enumerable=!0),n}},$=function(e){for(var t,n=I(y(e)),r=[],i=0;n.length>i;)a(_,t=n[i++])||t==M||t==s||r.push(t);return r},ee=function(e){for(var t,n=e===L,r=I(n?H:y(e)),i=[],o=0;r.length>o;)!a(_,t=r[o++])||n&&!a(L,t)||i.push(_[t]);return i};U||(c((W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor!");var e=u(arguments.length>0?arguments[0]:void 0),t=function(n){this===L&&t.call(H,n),a(this,M)&&a(this[M],e)&&(this[M][e]=!1),K(this,e,N(1,n))};return i&&J&&K(L,e,{configurable:!0,set:t}),Y(e)}).prototype,"toString",(function(){return this._k})),x.f=Z,T.f=V,n(255).f=S.f=$,n(51).f=Q,C.f=ee,i&&!n(40)&&c(L,"propertyIsEnumerable",Q,!0),m.f=function(e){return Y(d(e))}),o(o.G+o.W+o.F*!U,{Symbol:W});for(var te="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ne=0;te.length>ne;)d(te[ne++]);for(var re=P(d.store),ae=0;re.length>ae;)f(re[ae++]);o(o.S+o.F*!U,"Symbol",{for:function(e){return a(F,e+="")?F[e]:F[e]=W(e)},keyFor:function(e){if(!B(e))throw TypeError(e+" is not a symbol!");for(var t in F)if(F[t]===e)return t},useSetter:function(){J=!0},useSimple:function(){J=!1}}),o(o.S+o.F*!U,"Object",{create:function(e,t){return void 0===t?k(e):X(k(e),t)},defineProperty:V,defineProperties:X,getOwnPropertyDescriptor:Z,getOwnPropertyNames:$,getOwnPropertySymbols:ee});var ie=l((function(){C.f(1)}));o(o.S+o.F*ie,"Object",{getOwnPropertySymbols:function(e){return C.f(w(e))}}),R&&o(o.S+o.F*(!U||l((function(){var e=W();return"[null]"!=D([e])||"{}"!=D({a:e})||"{}"!=D(Object(e))}))),"JSON",{stringify:function(e){for(var t,n,r=[e],a=1;arguments.length>a;)r.push(arguments[a++]);if(n=t=r[1],(j(t)||void 0!==e)&&!B(e))return v(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!B(t))return t}),r[1]=t,D.apply(R,r)}}),W.prototype[G]||n(11)(W.prototype,G,W.prototype.valueOf),b(W,"Symbol"),b(Math,"Math",!0),b(r.JSON,"JSON",!0)},264:function(e,t,n){var r=n(39)("meta"),a=n(14),i=n(27),o=n(26).f,c=0,s=Object.isExtensible||function(){return!0},l=!n(13)((function(){return s(Object.preventExtensions({}))})),p=function(e){o(e,r,{value:{i:"O"+ ++c,w:{}}})},b=e.exports={KEY:r,NEED:!1,fastKey:function(e,t){if(!a(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!i(e,r)){if(!s(e))return"F";if(!t)return"E";p(e)}return e[r].i},getWeak:function(e,t){if(!i(e,r)){if(!s(e))return!0;if(!t)return!1;p(e)}return e[r].w},onFreeze:function(e){return l&&b.NEED&&s(e)&&!i(e,r)&&p(e),e}}},265:function(e,t,n){var r=n(5),a=n(16),i=n(40),o=n(256),c=n(26).f;e.exports=function(e){var t=a.Symbol||(a.Symbol=i?{}:r.Symbol||{});"_"==e.charAt(0)||e in t||c(t,e,{value:o.f(e)})}},266:function(e,t,n){var r=n(21),a=n(78),i=n(51);e.exports=function(e){var t=r(e),n=a.f;if(n)for(var o,c=n(e),s=i.f,l=0;c.length>l;)s.call(e,o=c[l++])&&t.push(o);return t}},267:function(e,t,n){var r=n(28),a=n(255).f,i={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return o&&"[object Window]"==i.call(e)?function(e){try{return a(e)}catch(t){return o.slice()}}(e):a(r(e))}},268:function(e,t,n){"use strict";n(269)("link",(function(e){return function(t){return e(this,"a","href",t)}}))},269:function(e,t,n){var r=n(12),a=n(13),i=n(29),o=/"/g,c=function(e,t,n,r){var a=String(i(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(r).replace(o,"&quot;")+'"'),c+">"+a+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),r(r.P+r.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},270:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(0),a=n.n(r),i=n(253),o=n.n(i),c=n(130),s=n.n(c);function l(e){var t=e.children;return a.a.createElement("div",{className:o()(s.a.root)},t)}},271:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));n(268);var r=n(259),a=n(0),i=n.n(a),o=n(253),c=n.n(o),s=n(131),l=n.n(s);function p(e){var t=e.title,n=e.description,a=e.link;return i.a.createElement("div",{className:c()("card-demo",l.a.root)},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card__header"},i.a.createElement("h3",null,t)),i.a.createElement("div",{className:"card__body"},i.a.createElement("p",null,n)),i.a.createElement("div",{className:"card__footer"},i.a.createElement(r.a,{className:"button button--secondary button--block",to:a},"Get Started"))))}}}]);