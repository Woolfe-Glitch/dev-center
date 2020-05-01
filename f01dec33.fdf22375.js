(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{250:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(1),o=n(9),r=(n(0),n(263)),i={title:"Advanced Layout",description:"Geocortex Mobile - Learn about Geocortex Mobile's advanced layout configuration options"},c={id:"mobile/concepts-advanced-layout",title:"Advanced Layout",description:"Geocortex Mobile - Learn about Geocortex Mobile's advanced layout configuration options",source:"@site/docs/mobile/concepts-advanced-layout.mdx",permalink:"/docs/mobile/concepts-advanced-layout",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/concepts-advanced-layout.mdx",sidebar:"mobile",previous:{title:"Events",permalink:"/docs/mobile/concepts-events"},next:{title:"Advanced App Config",permalink:"/docs/mobile/concepts-advanced-app-config"}},l=[{value:"Autocomplete Properties",id:"autocomplete-properties",children:[]},{value:"Nested Model Imports",id:"nested-model-imports",children:[]},{value:"Component Defaults",id:"component-defaults",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"autocomplete-properties"},"Autocomplete Properties"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"layout-*.xml")," files that come with the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/sdk-getting-started"}),"Quickstart")," reference an xml schema. This XML schema allows Visual Studio to autocomplete property names and provide linting for types. Two attributes on the layout, ",Object(r.b)("inlineCode",{parentName:"p"},"xmlns:xsi"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"xsi:schemaLocation")," allow this to happen. If you move the ",Object(r.b)("inlineCode",{parentName:"p"},"layout-*.xml")," files, you will need to adjust the relative reference to the layout schema for autocomplete to still function."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"The ",Object(r.b)("inlineCode",{parentName:"p"},"ViewerFramework")," folder containing the schema will not be created until an initial build has been run."))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerFramework/layout/layout-mobile.xsd">\n    ...\n</layout>\n')),Object(r.b)("h2",{id:"nested-model-imports"},"Nested Model Imports"),Object(r.b)("p",null,"In previous layout examples, layouts were shown where components related to a map, such as zoom buttons, were nested within a map. It was assumed that the component would bind to the map it was placed in, but why?"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'    <map config="map-1" slot="main">\n      <stack margin="0.5" slot="bottom-right" halign="end">\n        <zoom margin="0.8"/>\n        <geolocate margin="0.5" config="geolocate" />\n      </stack>\n    </map>\n')),Object(r.b)("p",null,"Certain components, such as ",Object(r.b)("inlineCode",{parentName:"p"},"<zoom/>")," or ",Object(r.b)("inlineCode",{parentName:"p"},"<geolocate/>"),", require a ",Object(r.b)("inlineCode",{parentName:"p"},"Map Model")," to function. To locate a ",Object(r.b)("inlineCode",{parentName:"p"},"Map Model"),", the layout tree hierarchy will be searched upwards, starting at the requesting component. When a element in the layout is found that provides the required model, (in this case, the ",Object(r.b)("inlineCode",{parentName:"p"},"<map/>")," component provides a Map Model), the requesting component will import the model. If the correct model is not found on an upwards search, a breadth first search will be performed from the root of the layout tree."),Object(r.b)("p",null,"Take this more complicated layout for example."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../../../../ViewerFramework/layout/layout-mobile.xsd\n      https://geocortex.com/layout/v1 ../../../layout-custom.xsd">\n  <gxm:taskbar id="taskbar" orientation="vertical">\n\n    \x3c!-- Taskbar main content --\x3e\n    <map config="map1" slot="main">\n      <gxm:geometry-toolbar slot="top-center-visible" config="geometry" margin="0.8" style="map-widget" active="false" />\n      <search-new-extent config="search" margin="0.8" slot="top-center-visible" active="false" />\n      <stack margin="0.8" slot="top-right" halign="end">\n        <iwtm config="iwtm">\n          <user slot="bottom"/>\n        </iwtm>\n      </stack>\n      <stack margin="0.5" slot="bottom-right" halign="end">\n        <zoom margin="0.5"/>\n        <button config="measure-action" icon="measure" style="map-widget" margin="0.5"/>\n        <geolocate margin="0.5" config="geolocate" />\n      </stack>\n      <gxm:version slot="bottom-left" margin="0.8"/>\n    </map>\n\n    \x3c!-- Taskbar / search --\x3e\n    <panel>\n      <stack >\n        <search config="search"/>\n        <results-list config="results" active="false" />\n      </stack>\n      <feature-details config="feature-details"/>\n      <gxm:update-feature/>\n      <gxm:add-related-feature />\n    </panel>\n\n    \x3c!-- Taskbar / layers --\x3e\n    <panel>\n      <layer-list />\n    </panel>\n\n    \x3c!-- Taskbar / add feature --\x3e\n    <panel>\n      <gxm:add-feature-select-layer config="edit"/>\n      <gxm:add-feature/>\n    </panel>\n</layout>\n')),Object(r.b)("p",null,"This layout has components such as ",Object(r.b)("inlineCode",{parentName:"p"},"<search/>")," or ",Object(r.b)("inlineCode",{parentName:"p"},"<gxm:add-feature/>")," which require the context of a specific map to function. However, these components are ",Object(r.b)("strong",{parentName:"p"},"not")," nested within the ",Object(r.b)("inlineCode",{parentName:"p"},"<map/>")," component in the app. Therefore, they will start a breadth first search to discover a map model import it."),Object(r.b)("h2",{id:"component-defaults"},"Component Defaults"),Object(r.b)("p",null,"Most components support the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/concepts-app-config#linking-layout-to-app-config"}),Object(r.b)("inlineCode",{parentName:"a"},"config")," attribute"),", which links a component to configuration in the ",Object(r.b)("inlineCode",{parentName:"p"},"app.json"),". However, many components have default values they can supply for initialization instead of relying on configuration. This means that if you omit the ",Object(r.b)("inlineCode",{parentName:"p"},"config")," property for certain components, the component will attempt to create itself with its default values. An example of defining default values can be seen in the ",Object(r.b)("inlineCode",{parentName:"p"},"CreateDefault")," method of the configuration created for ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/usecases-implement-component-participate-app-config#create-a-skeleton-app-config-definition"}),"this use case"),". It's also the mechanism that powers the default map for this layout."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="utf-8" ?>\n<layout xmlns="https://geocortex.com/layout/v1">\n    <map>\n        <zoom padding="0.5" slot="top-left"/>\n    </map>\n</layout>\n')))}p.isMDXComponent=!0},263:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},m=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,b=m["".concat(i,".").concat(d)]||m[d]||u[d]||r;return n?o.a.createElement(b,c({ref:t},s,{components:n})):o.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);