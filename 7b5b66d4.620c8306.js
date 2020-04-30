(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(1),i=n(9),o=(n(0),n(252)),r={},c={id:"web/snippets/prereqs-custom-code",title:"prereqs-custom-code",description:"-   Download and setup the [Geocortex Web SDK](../sdk-overview.mdx).",source:"@site/docs/web/snippets/prereqs-custom-code.mdx",permalink:"/docs/web/snippets/prereqs-custom-code",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/snippets/prereqs-custom-code.mdx"},s=[],m={rightToc:s};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Download and setup the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/web/sdk-overview"}),"Geocortex Web SDK"),"."),Object(o.b)("li",{parentName:"ul"},"Check out the ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/web/sdk-deployment#uploading-custom-code-to-an-app"}),"deployment instructions")," to learn more about deploying custom code to a Geocortex Web App.")))}d.isMDXComponent=!0},200:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return v}));var a=n(1),i=n(9),o=(n(0),n(252)),r=n(134),c=n(273),s=n(276),m=n(275),d=n(271),p=n(270),l={title:"Custom Commands and Operations",description:"Geocortex Web - Learn how to implement a custom command or operation"},u={id:"web/usecases-implement-command-operation",title:"Custom Commands and Operations",description:"Geocortex Web - Learn how to implement a custom command or operation",source:"@site/docs/web/usecases-implement-command-operation.mdx",permalink:"/docs/web/usecases-implement-command-operation",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/usecases-implement-command-operation.mdx",sidebar:"web",previous:{title:"Change Default Map Click Behavior",permalink:"/docs/web/usecases-change-default-map-click-behavior"},next:{title:"Custom Component with UI",permalink:"/docs/web/usecases-implement-component-with-ui"}},b=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Create the Backing Service",id:"create-the-backing-service",children:[]},{value:"Register the Service with the Web SDK",id:"register-the-service-with-the-web-sdk",children:[]},{value:"Implement the Custom Command and Operation",id:"implement-the-custom-command-and-operation",children:[]},{value:"Register the Command and Operation",id:"register-the-command-and-operation",children:[]},{value:"Test the Custom Command and Operation",id:"test-the-custom-command-and-operation",children:[{value:"Example: I Want To Menu Custom Command and Operation Config",id:"example-i-want-to-menu-custom-command-and-operation-config",children:[]}]},{value:"Next Steps",id:"next-steps",children:[]}],h={rightToc:b};function v(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Geocortex Web has many built-in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/concepts-commands-operations"}),"Commands and Operations")," which can be chained together to build custom behaviors with. If these Command and Operations are not enough to accomplish your goal, you can use ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/usecases-change-default-behavior#using-workflows-to-customize-behavior"}),"Geocortex Workflow")," to take custom behavior even further without writing custom code. If Workflow is still not enough to accomplish your needs, then it might be time to implement a Custom Command / Operation."))),Object(o.b)("p",null,"This article will walk you through implementing a custom command in Geocortex Web that can record actions and a custom operation that returns a list of executed actions."),Object(o.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(o.b)(r.default,{mdxType:"PrereqsCustomCodeSnippet"}),Object(o.b)("h2",{id:"create-the-backing-service"},"Create the Backing Service"),Object(o.b)("p",null,"Every command or operation in Geocortex Web needs to be registered and implemented by a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/concepts-components-services"}),"service or component"),", so the first thing we will do is create a service."),Object(o.b)("p",null,"Create a new folder structure with the following files. These files define a new service and export it from the ",Object(o.b)("inlineCode",{parentName:"p"},"CustomService")," folder."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"src/services/CustomService/CustomService.ts")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"src/services/CustomService/index.ts"))),Object(o.b)(s.a,{defaultValue:"service",values:[{label:"Service",value:"service"},{label:"Index",value:"index"}],mdxType:"Tabs"},Object(o.b)(m.a,{value:"service",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/services/CustomService/CustomService.ts"',title:'"src/services/CustomService/CustomService.ts"'}),'import { ServiceBase } from "@geocortex/web/services";\n\nexport default class CustomService extends ServiceBase {}\n'))),Object(o.b)(m.a,{value:"index",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/services/CustomService/index.ts"',title:'"src/services/CustomService/index.ts"'}),'export { default } from "./CustomService";\n')))),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Learn more about ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/usecases-implement-service"}),"implementing custom services")))),Object(o.b)("h2",{id:"register-the-service-with-the-web-sdk"},"Register the Service with the Web SDK"),Object(o.b)("p",null,"Every service needs to be registered with the Web SDK in order to be discovered and initialized."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Add a call to ",Object(o.b)("inlineCode",{parentName:"li"},"registerService")," in ",Object(o.b)("inlineCode",{parentName:"li"},"src/index.ts"),".")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'export default function(registry: LibraryRegistry) {\n    ...\n    registry.registerService({\n        id: "custom-service",\n        getServiceType: () => CustomService,\n    })\n    ...\n}\n')),Object(o.b)("h2",{id:"implement-the-custom-command-and-operation"},"Implement the Custom Command and Operation"),Object(o.b)("p",null,"It's now time to implement the command to record an action, and the operation that returns a history of executed actions in the ",Object(o.b)("inlineCode",{parentName:"p"},"CustomService"),". We can define each command and operation with an appropriately named protected method."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"It's best practice to expose the arguments and return values for commands and operations as public interfaces, as this allows consumers of the command or operation to have the appropriate typing."))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/services/CustomService/CustomService.ts',title:'"src/services/CustomService/CustomService.ts'}),'import { ServiceBase } from "@geocortex/web/services";\n\nexport type ActionType = "thing1" | "thing2";\n\nexport interface DoActionArgs {\n    type: ActionType;\n    value: string;\n}\n\nexport type ActionHistory = {\n    [key in ActionType]: string[];\n};\n\nexport default class CustomService extends ServiceBase {\n    history: ActionHistory = {\n        thing1: [],\n        thing2: [],\n    };\n\n    protected _doAction(args: DoActionArgs) {\n        console.log(`Executing action of type ${args.type}`);\n        this.history[args.type].push(args.value);\n    }\n\n    protected _getActionHistory(): ActionHistory {\n        return this.history;\n    }\n}\n')),Object(o.b)("h2",{id:"register-the-command-and-operation"},"Register the Command and Operation"),Object(o.b)("p",null,"Commands and operations are registered in ",Object(o.b)("inlineCode",{parentName:"p"},"src/index.ts"),". Use the full name of the method you defined in the service to register the command or operation implementation. The ",Object(o.b)("inlineCode",{parentName:"p"},"serviceId")," of the command or operation registration must match the ",Object(o.b)("inlineCode",{parentName:"p"},"id")," used in the ",Object(o.b)("inlineCode",{parentName:"p"},"registerService")," call."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/index.ts"',title:'"src/index.ts"'}),'import { LibraryRegistry } from "@geocortex/web/config";\nimport CustomService from "./services/CustomService/CustomService";\n\nexport default function (registry: LibraryRegistry) {\n    registry.registerService({\n        // highlight-next-line\n        id: "custom-service",\n        getServiceType: () => CustomService,\n    });\n\n    // highlight-start\n    registry.registerCommand("custom-service.do-action", {\n        serviceId: "custom-service",\n        executeMethodName: "_doAction",\n    });\n    // highlight-end\n\n    // highlight-start\n    registry.registerOperation("custom-service.get-action-history", {\n        serviceId: "custom-service",\n        executeMethodName: "_getActionHistory",\n    });\n    // highlight-end\n}\n')),Object(o.b)("h2",{id:"test-the-custom-command-and-operation"},"Test the Custom Command and Operation"),Object(o.b)("p",null,"You can test your custom command and operation by adding entries to the I Want to Menu in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/concepts-app-config"}),"app config")," that run your commands and operation. For more information on customizing your app with commands and operations, see ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/web/usecases-change-default-behavior"}),"Change Default behavior"),"."),Object(o.b)("h3",{id:"example-i-want-to-menu-custom-command-and-operation-config"},"Example: I Want To Menu Custom Command and Operation Config"),Object(o.b)("p",null,"This app config and layout adds three entries to an I Want To Menu that run the custom commands and operations implemented in this article. The operation ",Object(o.b)("inlineCode",{parentName:"p"},"custom-service.get-action-history")," has been slightly changed to return an argument that is compatible with the inputs of ",Object(o.b)("inlineCode",{parentName:"p"},"ui.alert"),"."),Object(o.b)(s.a,{defaultValue:"config",values:[{label:"App Config",value:"config"},{label:"Layout",value:"layout"},{label:"Custom Service",value:"service"},{label:"UI",value:"ui"}],mdxType:"Tabs"},Object(o.b)(m.a,{value:"config",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "$type": "menu",\n            "id": "iwtm-config",\n            "items": [\n                "item://menu-item/run-thing-1",\n                "item://menu-item/run-thing-2",\n                "item://menu-item/view-action-history"\n            ],\n            "title": "Execute Custom behavior",\n            "isLandmark": true\n        },\n        {\n            "$type": "menu-item",\n            "id": "run-thing-1",\n            "title": "Run Thing 1",\n            "action": {\n                "name": "custom-service.do-action",\n                "arguments": {\n                    "type": "thing1",\n                    "value": "Never Gonna Give You Up"\n                }\n            }\n        },\n        {\n            "$type": "menu-item",\n            "id": "run-thing-2",\n            "title": "Run Thing 2",\n            "action": {\n                "name": "custom-service.do-action",\n                "arguments": {\n                    "type": "thing2",\n                    "value": "Never Gonna Let You Down"\n                }\n            }\n        },\n        {\n            "id": "view-action-history",\n            "$type": "menu-item",\n            "title": "View Action History",\n            "action": ["custom-service.get-action-history", "ui.alert"]\n        }\n    ]\n}\n'))),Object(o.b)(m.a,{value:"layout",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<?xml version="1.0" encoding="UTF-8"?>\n<layout xmlns="https://geocortex.com/layout/v1" xmlns:custom="your.custom.namespace">\n    <map id="map-primary">\n        <iwtm config="iwtm-config"/>\n    </map>\n</layout>\n'))),Object(o.b)(m.a,{value:"service",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/services/CustomService/CustomService.ts"',title:'"src/services/CustomService/CustomService.ts"'}),'import { ServiceBase } from "@geocortex/web/services";\nimport { AlertCommandArgs } from "@geocortex/viewer-framework/messaging/registry/ui";\n\nexport type ActionType = "thing1" | "thing2";\n\nexport interface DoActionArgs {\n    type: ActionType;\n    value: string;\n}\n\nexport type ActionHistory = {\n    [key in ActionType]: string[];\n};\n\nexport default class CustomService extends ServiceBase {\n    history: ActionHistory = {\n            thing1: [],\n            thing2: [],\n        };\n    };\n\n    protected _doAction(args: DoActionArgs) {\n        console.log(`Executing action of type ${args.type}`);\n        this.history[args.type].push(args.value);\n    }\n\n    // highlight-start\n    protected _getActionHistory(): AlertCommandArgs {\n        return { message: JSON.stringify(this.history) };\n    }\n    // highlight-end\n}\n'))),Object(o.b)(m.a,{value:"ui",mdxType:"TabItem"},Object(o.b)("img",{src:Object(c.a)("img/web-commands-operations-example.png")}))),Object(o.b)("h2",{id:"next-steps"},"Next Steps"),Object(o.b)("p",null,"Commands and operations are the logical building blocks of executing custom behavior in Geocortex Web, but sometimes you need to take things a bit further. Creating custom components can allow you to design completely custom UI for Geocortex Web, and creating services can enable shared logic and background tasks."),Object(o.b)(p.a,{mdxType:"UseCaseContainer"},Object(o.b)(d.a,{title:"Commands and Operations",description:"Learn more about commands and operations",link:"concepts-commands-operations",mdxType:"UseCaseCard"}),Object(o.b)(d.a,{title:"Implement a Custom Component with UI",description:"Learn how to implement a custom component using the Geocortex Web SDK",link:"usecases-implement-component-with-ui",mdxType:"UseCaseCard"}),Object(o.b)(d.a,{title:"Implement a Custom Service",description:"Learn how to implement a custom service using the Geocortex Web SDK",link:"usecases-implement-service",mdxType:"UseCaseCard"}),Object(o.b)(d.a,{title:"Use Commands and Operations in Components",description:"Learn how to use and implement commands and operations in custom components",link:"usecases-components-commands-operations",mdxType:"UseCaseCard"})))}v.isMDXComponent=!0},270:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(0),i=n.n(a),o=n(253),r=n.n(o),c=n(130),s=n.n(c);function m(e){var t=e.children;return i.a.createElement("div",{className:r()(s.a.root)},t)}},271:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));n(268);var a=n(259),i=n(0),o=n.n(i),r=n(253),c=n.n(r),s=n(131),m=n.n(s);function d(e){var t=e.title,n=e.description,i=e.link;return o.a.createElement("div",{className:c()("card-demo",m.a.root)},o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"card__header"},o.a.createElement("h3",null,t)),o.a.createElement("div",{className:"card__body"},o.a.createElement("p",null,n)),o.a.createElement("div",{className:"card__footer"},o.a.createElement(a.a,{className:"button button--secondary button--block",to:i},"Get Started"))))}}}]);