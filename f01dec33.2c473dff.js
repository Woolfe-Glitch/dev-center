(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{205:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(1),o=n(9),i=(n(0),n(214)),r={title:"Advanced Layout",description:"Geocortex Mobile - Learn about Geocortex Mobile's advanced layout configuration options"},c={id:"mobile/concepts-advanced-layout",title:"Advanced Layout",description:"Geocortex Mobile - Learn about Geocortex Mobile's advanced layout configuration options",source:"@site/docs/mobile/concepts-advanced-layout.mdx",permalink:"/docs/mobile/concepts-advanced-layout",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/concepts-advanced-layout.mdx",sidebar:"mobile",previous:{title:"Components and Services",permalink:"/docs/mobile/concepts-components-services"},next:{title:"Advanced Config",permalink:"/docs/mobile/concepts-advanced-config"}},l=[{value:"Autocomplete Properties",id:"autocomplete-properties",children:[]},{value:"Implicit Binding",id:"implicit-binding",children:[{value:"Implicit Config Binding",id:"implicit-config-binding",children:[]}]},{value:"Presentation Attributes",id:"presentation-attributes",children:[{value:"Margin",id:"margin",children:[]},{value:"Padding",id:"padding",children:[]},{value:"Width and Height",id:"width-and-height",children:[]},{value:"Grow",id:"grow",children:[]},{value:"Alignment",id:"alignment",children:[]}]}],p={rightToc:l};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"autocomplete-properties"},"Autocomplete Properties"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"layout.xml")," that comes with the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/quick-start"}),"Quick Start")," references a xml schema. This XML schema allows Visual Studio to autocomplete property names and provide linting for types. Two attributes on the layout, ",Object(i.b)("inlineCode",{parentName:"p"},"xmlns:xsi"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"xsi:schemaLocation")," allow this to happen. If you move the ",Object(i.b)("inlineCode",{parentName:"p"},"layout.xml")," files, you will need to adjust the relative reference to the layout schema for autocomplete to still function."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerFramework/layout/layout-mobile.xsd">\n    ...\n</layout>\n')),Object(i.b)("h2",{id:"implicit-binding"},"Implicit Binding"),Object(i.b)("p",null,"In previous layout examples, layouts were shown where components related to a map, such a a compass, were nested within a map. It was assumed that the component would bind to the map it was placed in, but why?"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'    <map config="map1" slot="main">\n      <stack margin="0.5" slot="bottom-right" halign="end">\n        <compass id="compass" margin="0.5"/>\n        <geolocate id="geolocator" margin="0.5" config="geolocate" />\n      </stack>\n    </map>\n')),Object(i.b)("p",null,"Certain components, such as ",Object(i.b)("inlineCode",{parentName:"p"},"<compass/>")," or ",Object(i.b)("inlineCode",{parentName:"p"},"<geolocate/>"),", require a ",Object(i.b)("inlineCode",{parentName:"p"},"<map/>")," to function properly. To locate a ",Object(i.b)("inlineCode",{parentName:"p"},"<map/>"),", the component will crawl up the layout tree looking for a ",Object(i.b)("inlineCode",{parentName:"p"},"<map/>")," element. If none are found, then it will start a breadth first search at the root of the tree for the first ",Object(i.b)("inlineCode",{parentName:"p"},"<map/>")," component it finds."),Object(i.b)("p",null,"Take this more complicated layout for example."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../../../../ViewerFramework/layout/layout-mobile.xsd\n      https://geocortex.com/layout/v1 ../../../layout-custom.xsd">\n  <gxm:taskbar id="taskbar" orientation="vertical">\n\n    \x3c!-- Taskbar main content --\x3e\n    <map id="page1-map1" config="map1" slot="main">\n      <gxm:geometry-toolbar slot="top-center-visible" id="geometry-toolbar" config="geometry" margin="0.8" style="map-widget" active="false" />\n      <search-new-extent config="search" margin="0.8" slot="top-center-visible" active="false" />\n      <stack margin="0.8" slot="top-right" halign="end">\n        <iwtm config="iwtm" id="IWTM">\n          <user slot="bottom"/>\n        </iwtm>\n      </stack>\n      <stack margin="0.5" slot="bottom-right" halign="end">\n        <compass id="compass" margin="0.5"/>\n        <button config="measureAction" icon="measure" style="map-widget" margin="0.5"/>\n        <geolocate id="geolocator" margin="0.5" config="geolocate" />\n      </stack>\n      <zoom margin="0.8" slot="top-left"/>\n      <gxm:version slot="bottom-left" margin="0.8"/>\n    </map>\n\n    \x3c!-- Taskbar / search --\x3e\n    <panel id="search-panel">\n      <stack id="search">\n        <search config="search"/>\n        <results-list config="results" active="false" />\n      </stack>\n      <feature-details config="feature-details"/>\n      <gxm:update-feature/>\n      <gxm:add-related-feature />\n    </panel>\n\n    \x3c!-- Taskbar / layers --\x3e\n    <panel id="layers">\n      <layer-list />\n    </panel>\n\n    \x3c!-- Taskbar / add feature --\x3e\n    <panel>\n      <gxm:add-feature-select-layer config="edit"/>\n      <gxm:add-feature/>\n    </panel>\n</layout>\n')),Object(i.b)("p",null,"This layout has components such as ",Object(i.b)("inlineCode",{parentName:"p"},"<search/>")," or ",Object(i.b)("inlineCode",{parentName:"p"},"<gxm:add-feature/>")," which require the context of a specific map to function. However, these components are ",Object(i.b)("strong",{parentName:"p"},"not")," nested within the one ",Object(i.b)("inlineCode",{parentName:"p"},"<map/>")," component in the app. Therefore, they will start a breadth first search to discover a map component and bind to it."),Object(i.b)("h3",{id:"implicit-config-binding"},"Implicit Config Binding"),Object(i.b)("p",null,"Most components support the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/concepts-app-config#linking-layout-to-app-config"}),Object(i.b)("inlineCode",{parentName:"a"},"config")," attribute"),", which links a component to configuration in the ",Object(i.b)("inlineCode",{parentName:"p"},"app.json"),". However, some configuration types have a ",Object(i.b)("strong",{parentName:"p"},"default")," value. This means that if you omit the ",Object(i.b)("inlineCode",{parentName:"p"},"config")," property for a component of that type, the component will attempt to create default config for the type. An example of defining default config can be seen in the ",Object(i.b)("inlineCode",{parentName:"p"},"CreateDefault")," method of the configuration created for ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/implement-component-participate-app-config#create-a-skeleton-app-config-definition"}),"this use case"),". It's the mechanism that powers the default map for this layout."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="utf-8" ?>\n<layout xmlns="https://geocortex.com/layout/v1">\n    <map id="myMap">\n        <compass padding="0.5"/>\n    </map>\n</layout>\n')),Object(i.b)("h2",{id:"presentation-attributes"},"Presentation Attributes"),Object(i.b)("p",null,"Components support a number of presentation attributes to adjust their positioning and styling in the application after slotting. These presentation attributes are all accessible through ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://apps.geocortex.com/mobileviewer/designer/"}),"Geocortex Mobile Designer"),", but can also be configured through layout."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Most components also support the core attribute ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/concepts-app-config#linking-layout-to-app-config"}),Object(i.b)("inlineCode",{parentName:"a"},"config"))," and all components support the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/concepts-app-config#targeting-components-with-by-id"}),Object(i.b)("inlineCode",{parentName:"a"},"id"))," attribute, as well as any custom attributes the component defines."))),Object(i.b)("p",null,"Several different presentations attributes are available. All attributes apply to all components unless otherwise stated."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Margin"),Object(i.b)("li",{parentName:"ul"},"Padding"),Object(i.b)("li",{parentName:"ul"},"Width"),Object(i.b)("li",{parentName:"ul"},"Height"),Object(i.b)("li",{parentName:"ul"},"Grow"),Object(i.b)("li",{parentName:"ul"},"Horizontal alignment"),Object(i.b)("li",{parentName:"ul"},"Vertical alignment")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"All dimensional units are expressed in 'em's, unless specified otherwise, where 1 em is equal to the current font size."))),Object(i.b)("h3",{id:"margin"},"Margin"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Attribute name"),': "margin".',Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Expected value"),": Either 0 or a positive number (integer or floating point).",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Description"),": Sets the size of the white space outside of the component."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'<map margin="1.5"/> \x3c!-- Sets the margin on a map to be equal to 1.5x the current font size --\x3e\n')),Object(i.b)("h3",{id:"padding"},"Padding"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Attribute name"),': "padding".',Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Expected value"),": Either 0 or a positive number (integer or floating point).",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Description"),": Sets the size of the white space between a component and its content.",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Applies to"),": This attribute will only apply to components with children, due to technical restrictions."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'<stack padding="0.5"/> \x3c!-- Sets the padding on a stack to be equal to 0.5x the current font size --\x3e\n')),Object(i.b)("h3",{id:"width-and-height"},"Width and Height"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Attribute name"),': "width".',Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Expected value"),": Em units: Either 0 or a positive number (integer or floating point). Example: 12."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Default value"),": If a width is not set, then the width shall be the natural width of the component (however much space it needs).",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Description"),": Sets the width of a component. If em units, then the width is a literal value."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Attribute name"),': "height".',Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Expected value"),": Em units: Either 0 or a positive number (integer or floating point). Example: 12."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Description"),": Sets the height of a component. If em units, then the height is a literal value."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'\x3c!-- Sets the width of a map to 30em, and the height to 20em. --\x3e\n<map width="30em" height="20"/>\n')),Object(i.b)("h3",{id:"grow"},"Grow"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Attribute name"),': "grow".',Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Expected value"),": Either 0 or a positive number (integer or floating point).",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Description"),": Sets whether or not a component's width or height will grow over its parents primary axis. Components with a grow of 0 will fill to their natural or requested height. Components with a specified grow will fill up a percentage of the remaining space equal to their grow value divided by the total grow of all sibling components (including the component in question).",Object(i.b)("br",{parentName:"p"}),"\n",'The default value for a component varies by component. For most components, if no grow value is specified, they will default to a grow value of "0". The following components however will have a default grow value of "1":'),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Map"),Object(i.b)("li",{parentName:"ul"},"Stack"),Object(i.b)("li",{parentName:"ul"},"Split")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Applies to"),": All components may specify this value, but it will only take effect if the component is a child of a split or a stack. For stacks, grow indicates how the child grows along the vertical axis. For splits, grow indicates how the child grows along the horizontal axis."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Example"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'<stack>\n    \x3c!-- Heading will take up whatever vertical space it requires, and will occupy its natural width. --\x3e\n    <text content="Heading"/>\n    \x3c!-- The first map will occupy 1/3 of the remaining vertical space, and will occupy the full width available. --\x3e\n    <map grow="1"/>\n    \x3c!-- The first map will occupy 2/3 of the remaining vertical space, and will occupy the full width available. --\x3e\n    <map grow="2"/>\n</stack>\n')),Object(i.b)("h3",{id:"alignment"},"Alignment"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Attribute name"),': "halign".',Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Expected value"),': One of: "start", "center", or "end"',Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Description"),": Describes how the content of a component is aligned. For stacks and splits, the content is the child components. For a component like text, the content is the text itself."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Attribute name"),': "valign".',Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Expected value"),': One of: "start", "center", or "end"',Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("strong",{parentName:"p"},"Description"),": Describes how the content of a component is aligned. For stacks and splits, the content is the child components. For a component like text, the content is the text itself."),Object(i.b)("h4",{id:"effect-on-cross-axis-stretching"},"Effect on cross-axis stretching"),Object(i.b)("p",null,"All components will stretch across the cross-axis if the corresponding alignment attribute (halign for stacks, valign for splits) is not set on the parent of that componet. But if a cross-axis alignment is set, then they will no longer stretch across the cross axis (otherwise the effect of alignment would not be observed).",Object(i.b)("br",{parentName:"p"}),"\n","Some components will stretch across the cross-axis even if the cross-axis alignment is set on the parent: map, stack, split."))}s.isMDXComponent=!0},214:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),s=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=s(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(n),d=a,u=b["".concat(r,".").concat(d)]||b[d]||m[d]||i;return n?o.a.createElement(u,c({ref:t},p,{components:n})):o.a.createElement(u,c({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var p=2;p<i;p++)r[p]=n[p];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);