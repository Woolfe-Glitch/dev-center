(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{244:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return d}));var o=n(1),a=n(9),i=(n(0),n(252)),r={title:"Deployment",description:"Geocortex Web - Deploy a Geocortex Web Application"},c={id:"web/sdk-deployment",title:"Deployment",description:"Geocortex Web - Deploy a Geocortex Web Application",source:"@site/docs/web/sdk-deployment.mdx",permalink:"/docs/web/sdk-deployment",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/sdk-deployment.mdx",sidebar:"web",previous:{title:"Create a Service",permalink:"/docs/web/sdk-create-service"},next:{title:"Injecting Services",permalink:"/docs/web/sdk-service-injection"}},p=[{value:"Deploying your library using Geocortex Web Designer",id:"deploying-your-library-using-geocortex-web-designer",children:[{value:"Modifying Layout and App Config using the Geocortex Web Designer",id:"modifying-layout-and-app-config-using-the-geocortex-web-designer",children:[]},{value:"Uploading Custom Code to an App",id:"uploading-custom-code-to-an-app",children:[]},{value:"Deploy the app",id:"deploy-the-app",children:[]}]}],l={rightToc:p};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"deploying-your-library-using-geocortex-web-designer"},"Deploying your library using Geocortex Web Designer"),Object(i.b)("p",null,"The easiest way to deploy your custom library built using the SDK is to upload it to an application using the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://apps.geocortex.com/webviewer/designer/"}),"Geocortex Web Designer"),"."),Object(i.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"This is a temporary deployment pattern for the preview release. We're actively improving this pattern, and as such it will change during the preview phase."))),Object(i.b)("h3",{id:"modifying-layout-and-app-config-using-the-geocortex-web-designer"},"Modifying Layout and App Config using the Geocortex Web Designer"),Object(i.b)("p",null,"Geocortex Web Designer provides a powerful interface for editing the layout and configuration of built-in components, but if you need to add a custom component to your application, you will need to upload custom layout and app JSON."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Type ",Object(i.b)("inlineCode",{parentName:"li"},"Ctrl + Shift + E")," while focused in the Geocortex Web Designer to open up the experimental development editing interface."),Object(i.b)("li",{parentName:"ol"},"Copy and paste the ",Object(i.b)("inlineCode",{parentName:"li"},"app.json")," and ",Object(i.b)("inlineCode",{parentName:"li"},"layout.xml")," from your local SDK project to the Geocortex Web Designer Interface.")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"You may need to add an app item for the referenced layout file to the app config in the Designer Interface."))),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  "schemaVersion": "1.0",\n  "items": [\n    ...\n    {\n      "$type":"layout",\n      "id":"desktop-landscape",\n      "title":"Desktop Landscape",\n      "url":"./desktop-landscape.xml"\n    }\n    ...\n  ]\n}\n')),Object(i.b)("h3",{id:"uploading-custom-code-to-an-app"},"Uploading Custom Code to an App"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Run ",Object(i.b)("inlineCode",{parentName:"li"},"npm run build")," in the root of your project to create a production build of your library",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"This creates an optimized production build that is output to the ",Object(i.b)("inlineCode",{parentName:"li"},"build")," folder of your project. This build is designed for use in production"))),Object(i.b)("li",{parentName:"ol"},"Open the application in Geocortex Web Designer (on premise or ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://apps.geocortex.com/webviewer/designer/"}),"SaaS"),", depending on your production environment) that you want to upload your custom code to"),Object(i.b)("li",{parentName:"ol"},"Type ",Object(i.b)("inlineCode",{parentName:"li"},"Ctrl + Shift + E")," while focused in the Geocortex Web Designer to open up the experimental development editing interface",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"This interface is for debugging and development purposes only, and is not intended for general configuration of your application.[]"))),Object(i.b)("li",{parentName:"ol"},"Upload the production build of your custom library located in the ",Object(i.b)("inlineCode",{parentName:"li"},"build")," folder to the ",Object(i.b)("inlineCode",{parentName:"li"},"Custom Code")," section of the development editing interface"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"#modifying-layout-and-app-config-using-the-geocortex-web-designer"}),"Copy and paste")," the custom layout and app config.")),Object(i.b)("h3",{id:"deploy-the-app"},"Deploy the app"),Object(i.b)("p",null,"After you've uploaded your custom library to your application, you can push the application through the configured deployment stages using the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.geocortex.com/webviewer/latest/admin-help/Default.htm#gwv/deploy-an-app.htm%3FTocPath%3DApps%7CDeploy%2520an%2520App%7C_____0"}),"deployment pipeline in the Designer"),". Your library code will be copied through the deployment stages, so you can be confident that changes to your library code in the development stage won't affect your production app until you explicitly deploy to the production stage."))}d.isMDXComponent=!0},252:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=d(n),u=o,m=b["".concat(r,".").concat(u)]||b[u]||s[u]||i;return n?a.a.createElement(m,c({ref:t},l,{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);