(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{161:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return d})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return u})),a.d(t,"default",(function(){return j}));var n=a(1),o=a(9),i=(a(0),a(263)),s=a(285),c=a(287),r=a(286),p=a(289),m=a(282),l=a(281),d={title:"Commands and Operations",description:"Geocortex Mobile - Learn about commands and operations"},b={id:"mobile/concepts-commands-operations",title:"Commands and Operations",description:"Geocortex Mobile - Learn about commands and operations",source:"@site/docs/mobile/concepts-commands-operations.mdx",permalink:"/docs/mobile/concepts-commands-operations",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/concepts-commands-operations.mdx",sidebar:"mobile",previous:{title:"App Config",permalink:"/docs/mobile/concepts-app-config"},next:{title:"Components and Services",permalink:"/docs/mobile/concepts-components-services"}},u=[{value:"Passing Arguments",id:"passing-arguments",children:[{value:"Explicit Named Arguments",id:"explicit-named-arguments",children:[]},{value:"Implicit Arguments",id:"implicit-arguments",children:[]}]},{value:"Command Chains",id:"command-chains",children:[]},{value:"Example: Configured Map and I Want To Menu",id:"example-configured-map-and-i-want-to-menu",children:[]},{value:"Relevant SDK Samples",id:"relevant-sdk-samples",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],h={rightToc:u};function j(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},h,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Before learning about commands and operations...")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Check out the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/mobile/concepts-key-concepts"}),"Key Concepts"),"."))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Commands and operations")," are runnable, independent units of work within Geocortex Mobile. Using the Geocortex Mobile SDK, it's possible to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/mobile/usecases-implement-command-operation"}),"define custom commands and operations")," for use throughout the application. In Geocortex Mobile, commands and operations are compatible extensions of the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/windows/uwp/design/controls-and-patterns/commanding"}),"ICommand interface")," with strongly typed arguments and return values. Operations are implementations of ",Object(i.b)("inlineCode",{parentName:"p"},"ICommand")," that have been extended to have an ",Object(i.b)("inlineCode",{parentName:"p"},"ExecuteAsync")," method, which allows the operation to run asynchronously and return a value. Commands and Operations are registered with the globally available service ",Object(i.b)("inlineCode",{parentName:"p"},"IOperationRegistry"),", in which they can be looked up by their ",Object(i.b)("inlineCode",{parentName:"p"},"name"),". Commands and Operations are grouped by namespaces, such as ",Object(i.b)("inlineCode",{parentName:"p"},"auth")," or ",Object(i.b)("inlineCode",{parentName:"p"},"edit"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"auth.sign-in\nauth.sign-out\nedit.add-feature\nedit.delete-features\n")),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"The full list of existing commands and operations available in Geocortex Mobile can be ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/mobile/api-commands-operations-events"}),"found in the API documentation"),"."))),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/mobile/concepts-components-services"}),"Components or Services")," are usually responsible for registering a command or operation implementation with Geocortex Mobile. Once a command or operation has been registered, it can be used from anywhere in the application. ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/mobile/usecases-implement-command-operation"}),"Custom Commands and Operations")," can be registered with ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/mobile/usecases-implement-service"}),"Custom Services")," or ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/mobile/usecases-implement-component-with-ui"}),"Custom Components")," in this manner."),Object(i.b)("h2",{id:"passing-arguments"},"Passing Arguments"),Object(i.b)("p",null,"Commands and operations can receive arguments that affect their behavior. A command or operation can either be configured with no explicit arguments, in which case it receives an argument from the context it is run in, or it can be configured with explicit, named, arguments."),Object(i.b)("h3",{id:"explicit-named-arguments"},"Explicit Named Arguments"),Object(i.b)("p",null,"You can pass arguments to a command or operation by providing the ",Object(i.b)("inlineCode",{parentName:"p"},"arguments")," property."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "$type": "menu",\n    "id": "iwtm",\n    "items": [\n        {\n            "title": "Rotate by 45 Degrees",\n            "isEnabled": true,\n            "iconId": "sync",\n            "action": {\n                "name": "map.rotate-by",\n                "arguments": {\n                    "rotation": 45\n                }\n            }\n        }\n    ]\n}\n')),Object(i.b)("p",null,"Each command has typed arguments that will ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/mobile/concepts-advanced-app-config#schema-properties"}),"autocomplete in the app.json"),". For example, ",Object(i.b)("inlineCode",{parentName:"p"},"map.rotate-by")," takes a object of type ",Object(i.b)("inlineCode",{parentName:"p"},"MapRotateArgs"),", which has the property ",Object(i.b)("inlineCode",{parentName:"p"},"Rotation")," of type ",Object(i.b)("inlineCode",{parentName:"p"},"double"),". In the app config, the ",Object(i.b)("inlineCode",{parentName:"p"},"Rotation")," property can be camelCased instead of PascalCased."),Object(i.b)("h3",{id:"implicit-arguments"},"Implicit Arguments"),Object(i.b)("p",null,"If you configure an action with only a command name, this will cause arguments to be passed implicitly. In this example, ",Object(i.b)("inlineCode",{parentName:"p"},"highlights.add-focus")," has been configured as the command that runs ",Object(i.b)("inlineCode",{parentName:"p"},"onFeatureShow"),", but it is not passed any arguments explicitly. Instead, the command receives arguments from the ",Object(i.b)("strong",{parentName:"p"},"context")," it is run in."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "$type": "feature-details",\n    "id": "feature-details",\n    "onFeatureShow": "highlights.add-focus"\n}\n')),Object(i.b)("p",null,"In this example, the context is the feature details menu, so ",Object(i.b)("inlineCode",{parentName:"p"},"highlights.add-focus")," will receive an argument with a ",Object(i.b)("inlineCode",{parentName:"p"},"Features")," property, which is the shape of argument it needs."),Object(i.b)("p",null,"Arguments are also passed implicitly if you create a command chain, which runs operations one after the other."),Object(i.b)("h2",{id:"command-chains"},"Command Chains"),Object(i.b)("p",null,"App config properties that accept a command or operation can take a single operation (such as with ",Object(i.b)("inlineCode",{parentName:"p"},"onFeatureHide"),") or they can take a ",Object(i.b)("strong",{parentName:"p"},"command chain")," (such as with ",Object(i.b)("inlineCode",{parentName:"p"},"onFeatureDelete"),"). Command chains are arrays of commands and operations which are executed sequentially. The output of previous operations is passed along the chain to future operations, allowing for complex chains of behavior."),Object(i.b)("p",null,"For example, here's configuration for the various behaviors of a ",Object(i.b)("inlineCode",{parentName:"p"},"<feature-details>")," component."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "$type": "feature-details",\n    "id": "feature-details",\n    "onFeatureShow": "highlights.add-focus",\n    "onFeatureDelete": [\n        "highlights.remove-focus",\n        "highlights.remove",\n        "edit.delete-features",\n        "results.hide-details",\n        "results.remove"\n    ]\n}\n')),Object(i.b)("p",null,"In this example, when a feature is deleted,"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The focus and highlights are removed,"),Object(i.b)("li",{parentName:"ul"},"The feature is deleted from the layer,"),Object(i.b)("li",{parentName:"ul"},"The results details are hidden,"),Object(i.b)("li",{parentName:"ul"},"The feature is removed from the results list.")),Object(i.b)("p",null,"Since these commands and operations are running from the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.geocortex.com/webviewer/latest/admin-help/Default.htm#gwv/add-a-workflow-to-an-app.htm#use-the-menu-context-as-a-workflow-input"}),"context")," of a ",Object(i.b)("inlineCode",{parentName:"p"},"<feature-details>")," component, the first command or operation will receive the relevant feature as its input. If the property is a command chain, the next step in line will receive one of two possible inputs."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"If the previous step was a command (which doesn't produce output), then the original input is passed on to the next step."),Object(i.b)("li",{parentName:"ol"},"If the previous step was an operation (which produces an output), then the output of that operation is passed onto the next step.")),Object(i.b)("p",null,"In this way, you can run multiple commands in a row that receive a feature as input, as seen in the ",Object(i.b)("inlineCode",{parentName:"p"},"onFeatureDelete")," command chain in the example."),Object(i.b)("h2",{id:"example-configured-map-and-i-want-to-menu"},"Example: Configured Map and I Want To Menu"),Object(i.b)(c.a,{defaultValue:"app",values:[{label:"App Config",value:"app"},{label:"Layout",value:"layout"},{label:"User Interface",value:"ui"}],mdxType:"Tabs"},Object(i.b)(r.a,{value:"app",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json",metastring:'title="App1/App1/app.json"',title:'"App1/App1/app.json"'}),'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "layout",\n            "id": "desktop-layout",\n            "url": "resource://layout-large.xml",\n            "tags": ["mobile", "large"]\n        },\n        {\n            "$type": "map-extension",\n            "id": "demo-map",\n            "onClick": [\n                "tasks.identify",\n                "highlights.add-focus",\n                "highlights.pulse"\n            ]\n        },\n        {\n            "$type": "menu",\n            "id": "iwtm",\n            "items": [\n                {\n                    "title": "Return to Default Map View",\n                    "isEnabled": true,\n                    "iconId": "zoom_initial",\n                    "action": [\n                        {\n                            "name": "map.zoom-to-initial-viewpoint",\n                            "arguments": {\n                                "maps": "item://map-extension/demo-map"\n                            }\n                        }\n                    ]\n                }\n            ]\n        }\n    ]\n}\n'))),Object(i.b)(r.a,{value:"layout",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-xml",metastring:'title="App1/App1/layout-large.xml"',title:'"App1/App1/layout-large.xml"'}),'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n  xmlns="https://geocortex.com/layout/v1"\n  xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n  xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerFramework/layout/layout-mobile.xsd">\n  <gxm:taskbar id="taskbar" orientation="vertical">\n    <map config="demo-map" slot="main">\n    <stack margin="0.8" slot="top-right" halign="end">\n      <iwtm config="iwtm" />\n    </stack>\n    </map>\n  </gxm:taskbar>\n</layout>\n'))),Object(i.b)(r.a,{value:"ui",mdxType:"TabItem"},Object(i.b)(p.a,{src:Object(s.a)("video/commands-operations-demo.webm"),mdxType:"DemoVideo"}))),Object(i.b)("p",null,"This example demonstrates two different types of argument passing behavior. The first action in the app config is a command chain defined on the ",Object(i.b)("inlineCode",{parentName:"p"},"onClick")," property of a map. This chain consists of three operations and commands:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"task.identify"),","),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"highlights.add-focus")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"highlights.pulse"))),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"tasks.identify")," does not have any named arguments defined, so it will take arguments passed into it from its current ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.geocortex.com/webviewer/latest/admin-help/Default.htm#gwv/add-a-workflow-to-an-app.htm#use-the-menu-context-as-a-workflow-input"}),"context"),". Since this chain is run on a map click, the context argument passed in has the shape:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "geometry": "Esri.Point(<map-click-location>)",\n  ... <other props>\n}\n')),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"tasks.identify")," receives this argument, and since it is an operation, produces an output. Looking at the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/mobile/api-commands-operations-events"}),"Commands and Operations Documentation"),", ",Object(i.b)("inlineCode",{parentName:"p"},"tasks.identify")," has output with the shape:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "features": [<feature1>, <feature2>, ...],\n  "results": [<Result(feature1)>, <Result(feature2)>, ...],\n  ... <other props>\n}\n')),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"highlights.add-focus")," and ",Object(i.b)("inlineCode",{parentName:"p"},"highlights.pulse"),' both take an input object with a "features" property, so the output of ',Object(i.b)("inlineCode",{parentName:"p"},"tasks.identify")," will work nicely. ",Object(i.b)("inlineCode",{parentName:"p"},"highlights.add-focus")," is immediately after ",Object(i.b)("inlineCode",{parentName:"p"},"tasks.identify"),", so it receives the output of identify. Since ",Object(i.b)("inlineCode",{parentName:"p"},"highlights.add-focus")," is a command, it does not produce any output. ",Object(i.b)("inlineCode",{parentName:"p"},"highlights.pulse")," will receive the output of the last operation, ",Object(i.b)("inlineCode",{parentName:"p"},"tasks.identify"),". In this way, you can pass the output of an operation to multiple commands."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Check out ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/mobile/usecases-change-default-behavior"}),"Change Default Behavior")," for more ways to override default behavior like a Map's on click event."))),Object(i.b)("p",null,"The second command/operation in this application is a ",Object(i.b)("inlineCode",{parentName:"p"},"map.zoom-to-initial-viewpoint")," command on the I Want To Menu. This command takes a MapExtensionArgs, which is provided as a named argument. The ",Object(i.b)("inlineCode",{parentName:"p"},"maps")," property in the argument references the ",Object(i.b)("inlineCode",{parentName:"p"},"demo-map")," in the config through an ",Object(i.b)("strong",{parentName:"p"},"Item Uri"),". Item URIs are a way of referencing other items within the app config. See ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/mobile/concepts-advanced-app-config#item-uris-and-resource-uris"}),"Item URIs")," for more details."),Object(i.b)("h2",{id:"relevant-sdk-samples"},"Relevant SDK Samples"),Object(i.b)("p",null,"Check out the relevant Geocortex Mobile SDK Samples:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/AppConfiguration/Commands"}),"Commands"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/AppConfiguration/MapAndFeatureCommands"}),"Map and Feature Commands")))),Object(i.b)("h2",{id:"next-steps"},"Next Steps"),Object(i.b)("p",null,"Geocortex Mobile has a large array of built-in command and operations that you can chain to power custom behavior. Custom commands and operations can also be implemented with the SDK."),Object(i.b)(l.a,{mdxType:"UseCaseContainer"},Object(i.b)(m.a,{title:"Commands and Operations Schema",description:"Check out the available commands and operations",link:"api-commands-operations",mdxType:"UseCaseCard"}),Object(i.b)(m.a,{title:"Configure Commands and Operations",description:"Change built-in behavior or add new behavior using app config and layout",link:"usecases-change-default-behavior",mdxType:"UseCaseCard"}),Object(i.b)(m.a,{title:"Build your own Commands and Operations",description:"Use the SDK to implement custom commands and operations",link:"usecases-implement-command-operation",mdxType:"UseCaseCard"}),Object(i.b)(m.a,{title:"Learn about Events built into Geocortex Mobile",description:"Learn about the global event infrastructure in Geocortex Mobile",link:"concepts-events",mdxType:"UseCaseCard"})))}j.isMDXComponent=!0},281:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(0),o=a.n(n),i=a(264),s=a.n(i),c=a(130),r=a.n(c);function p(e){var t=e.children;return o.a.createElement("div",{className:s()(r.a.root)},t)}},282:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));a(279);var n=a(270),o=a(0),i=a.n(o),s=a(264),c=a.n(s),r=a(131),p=a.n(r);function m(e){var t=e.title,a=e.description,o=e.link;return i.a.createElement("div",{className:c()("card-demo",p.a.root)},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card__header"},i.a.createElement("h3",null,t)),i.a.createElement("div",{className:"card__body"},i.a.createElement("p",null,a)),i.a.createElement("div",{className:"card__footer"},i.a.createElement(n.a,{className:"button button--secondary button--block",to:o},"Get Started"))))}},289:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(0),o=a.n(n);function i(e){var t=e.src;return o.a.createElement("video",{autoPlay:!0,loop:!0,muted:!0},o.a.createElement("source",{src:t,type:"video/webm"}),"Your browser does not support the video tag.")}}}]);