(window.webpackJsonp=window.webpackJsonp||[]).push([[9,60],{133:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(1),i=n(9),o=(n(0),n(252)),r={},l={id:"mobile/snippets/prereqs",title:"prereqs",description:"Download the [Quickstart](../sdk-quick-start.mdx) application and open it in Visual Studio.",source:"@site/docs/mobile/snippets/prereqs.mdx",permalink:"/docs/mobile/snippets/prereqs",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/snippets/prereqs.mdx"},c=[],s={rightToc:c};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Download the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/sdk-quick-start"}),"Quickstart")," application and open it in Visual Studio."))}d.isMDXComponent=!0},163:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(1),i=n(9),o=(n(0),n(252)),r=n(133),l={title:"Add a Medium Layout",description:"Geocortex Mobile - Learn how to add a medium layout definition for tablets."},c={id:"mobile/usecases-add-medium-layout",title:"Add a Medium Layout",description:"Geocortex Mobile - Learn how to add a medium layout definition for tablets.",source:"@site/docs/mobile/usecases-add-medium-layout.mdx",permalink:"/docs/mobile/usecases-add-medium-layout",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/usecases-add-medium-layout.mdx",sidebar:"mobile",previous:{title:"Customize the Look and Feel",permalink:"/docs/mobile/usecases-look-and-feel"},next:{title:"Internationalization",permalink:"/docs/mobile/usecases-internationalization"}},s=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Create the Layout File",id:"create-the-layout-file",children:[]},{value:"Include the Layout File in each project",id:"include-the-layout-file-in-each-project",children:[{value:"Android",id:"android",children:[]},{value:"iOS",id:"ios",children:[]},{value:"UWP",id:"uwp",children:[]}]},{value:"Reference the Medium Layout in the <code>app.json</code>",id:"reference-the-medium-layout-in-the-appjson",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],d={rightToc:s};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The Geocortex Mobile ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/sdk-quick-start"}),"Quickstart")," comes with a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/concepts-layout#device-form-factors"}),"small and large layout"),". This use case will walk you through creating a medium form factor layout."),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)(r.default,{mdxType:"PrereqsSnippet"}),Object(o.b)("h2",{id:"create-the-layout-file"},"Create the Layout File"),Object(o.b)("p",null,"Add a new file ",Object(o.b)("inlineCode",{parentName:"p"},"layout-medium.xml")," to the platform agnostic project."),Object(o.b)("p",null,"Copy the content from ",Object(o.b)("inlineCode",{parentName:"p"},"layout-large.xml")," into the ",Object(o.b)("inlineCode",{parentName:"p"},"layout-medium.xml"),"."),Object(o.b)("h2",{id:"include-the-layout-file-in-each-project"},"Include the Layout File in each project"),Object(o.b)("p",null,"Add the ",Object(o.b)("inlineCode",{parentName:"p"},"layout-medium.xml")," file as an asset to each project."),Object(o.b)("h3",{id:"android"},"Android"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Add the existing file ",Object(o.b)("inlineCode",{parentName:"li"},"layout-medium.xml")," ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://jeremybytes.blogspot.com/2019/07/linking-files-in-visual-studio.html"}),"as an link")," to the ",Object(o.b)("inlineCode",{parentName:"li"},"Assets")," folder."),Object(o.b)("li",{parentName:"ol"},"Ensure the build action for the file is ",Object(o.b)("inlineCode",{parentName:"li"},"AndroidAsset"))),Object(o.b)("h3",{id:"ios"},"iOS"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Add the existing file ",Object(o.b)("inlineCode",{parentName:"li"},"layout-medium.xml")," ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://jeremybytes.blogspot.com/2019/07/linking-files-in-visual-studio.html"}),"as an link")," to the ",Object(o.b)("inlineCode",{parentName:"li"},"Resources")," folder."),Object(o.b)("li",{parentName:"ol"},"Ensure the build action for the file is ",Object(o.b)("inlineCode",{parentName:"li"},"BundleResource"))),Object(o.b)("h3",{id:"uwp"},"UWP"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Add the existing file ",Object(o.b)("inlineCode",{parentName:"li"},"layout-medium.xml")," ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://jeremybytes.blogspot.com/2019/07/linking-files-in-visual-studio.html"}),"as an link")," to the ",Object(o.b)("inlineCode",{parentName:"li"},"Assets")," folder."),Object(o.b)("li",{parentName:"ol"},"Ensure the build action for the file is ",Object(o.b)("inlineCode",{parentName:"li"},"Content"))),Object(o.b)("h2",{id:"reference-the-medium-layout-in-the-appjson"},"Reference the Medium Layout in the ",Object(o.b)("inlineCode",{parentName:"h2"},"app.json")),Object(o.b)("p",null,"Add the new layout as an ",Object(o.b)("strong",{parentName:"p"},"app item")," to the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/sdk-quick-start#editing-the-layout-and-app-config"}),Object(o.b)("inlineCode",{parentName:"a"},"app.json"))," that references the medium layout."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        ...\n        {\n            "$type": "layout",\n            "id": "tablet-layout",\n            "url": "resource://layout-medium.xml",\n            "tags": [ "mobile", "medium" ]\n        },\n        ...\n    ]\n}\n')),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"An easy way to test your new layout when developing on a Windows Device is to temporarily remove the small and large layouts from your ",Object(o.b)("inlineCode",{parentName:"p"},"app.json"),"."))),Object(o.b)("h2",{id:"next-steps"},"Next Steps"),Object(o.b)("p",null,"You now have a medium layout defined for your application. Learn more about how ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/concepts-layout"}),"layout")," works and customize this new layout to be optimized for a tablet screen size."))}u.isMDXComponent=!0},252:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),d=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=d(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(n),b=a,m=u["".concat(r,".").concat(b)]||u[b]||p[b]||o;return n?i.a.createElement(m,l({ref:t},s,{components:n})):i.a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);