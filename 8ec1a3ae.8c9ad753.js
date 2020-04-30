(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{205:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return d})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return h}));var o=n(1),a=n(9),r=(n(0),n(252)),p=n(271),c=n(270),l=n(276),i=n(275),m=n(273),s={title:"Create a Component",description:"Geocortex Web - Create a Component for Geocortex Web"},d={id:"web/sdk-create-component",title:"Create a Component",description:"Geocortex Web - Create a Component for Geocortex Web",source:"@site/docs/web/sdk-create-component.mdx",permalink:"/docs/web/sdk-create-component",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/web/sdk-create-component.mdx",sidebar:"web",previous:{title:"SDK Overview",permalink:"/docs/web/sdk-overview"},next:{title:"Create a Service",permalink:"/docs/web/sdk-create-service"}},b=[{value:"Create the Component",id:"create-the-component",children:[]},{value:"Create the Component Model",id:"create-the-component-model",children:[]},{value:"Register the Component",id:"register-the-component",children:[]},{value:"Add the Component to your Layout",id:"add-the-component-to-your-layout",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],u={rightToc:b};function h(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/sdk-overview"}),"Geocortex Web SDK")," project template includes an example of a custom ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/concepts-components-services#components"}),"component")," following our best practices. Creating a new custom component involves a few important steps:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"#create-the-component"}),"Create the component source file")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"#create-the-component-model"}),"Create the component model")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(o.a)({parentName:"li"},{href:"#register-the-component"}),"Register the component and component model in your library registration file"))),Object(r.b)("h2",{id:"create-the-component"},"Create the Component"),Object(r.b)("p",null,"Create the component source file in a new folder within the ",Object(r.b)("inlineCode",{parentName:"p"},"src/components")," folder. For example to create a new component called ",Object(r.b)("inlineCode",{parentName:"p"},"ExampleComponent"),", create a new file called ",Object(r.b)("inlineCode",{parentName:"p"},"ExampleComponent.tsx")," in ",Object(r.b)("inlineCode",{parentName:"p"},"src/components/ExampleComponent")," with the following content:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="src/components/ExampleComponent/ExampleComponent.tsx"',title:'"src/components/ExampleComponent/ExampleComponent.tsx"'}),'import {\n    LayoutElement,\n    LayoutElementProperties,\n} from "@geocortex/web/components";\nimport React from "react";\n\n// We will create this model in the next step.\nimport ExampleComponentModel from "./ExampleComponentModel";\n\nconst ExampleComponent = (\n    props: LayoutElementProperties<ExampleComponentModel>\n) => {\n    const { model } = props;\n\n    return <LayoutElement {...props}>{model.exampleValue}</LayoutElement>;\n};\n\nexport default ExampleComponent;\n')),Object(r.b)("h2",{id:"create-the-component-model"},"Create the Component Model"),Object(r.b)("p",null,"Next we need to create the ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/web/concepts-components-services#component-models-and-configuration"}),"component model")," that will be bound to the component we just created. This model will function as the underlying data source for the component."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"It's best practice to use the model to define configurable or persistent state, and use the React state hooks for UI specific transient state, like an active selection."))),Object(r.b)("p",null,"Create a new file called ",Object(r.b)("inlineCode",{parentName:"p"},"ExampleComponentModel.ts")," in ",Object(r.b)("inlineCode",{parentName:"p"},"src/components/ExampleComponent"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/components/ExampleComponent/ExampleComponentModel.ts"',title:'"src/components/ExampleComponent/ExampleComponentModel.ts"'}),'import {\n    ComponentModelBase,\n    ComponentModelProperties,\n    serializable,\n    PropertyDefs,\n} from "@geocortex/web/models";\n\ninterface ExampleComponentModelProperties extends ComponentModelProperties {\n    exampleValue?: string;\n}\n\n// The serializable decorator marks this class as being serializable\n// so it can be serialized to/from the app.json configuration of\n// your app.\n@serializable\nexport default class ExampleComponentModel extends ComponentModelBase<\n    ExampleComponentModelProperties\n> {\n    exampleValue: string;\n\n    // This method defines how the model will be serialized and deserialized into\n    // an app item. We override it to include our new property `exampleValue`.\n    protected _getSerializableProperties(): PropertyDefs<\n        ExampleComponentModelProperties\n    > {\n        const props = super._getSerializableProperties();\n        return {\n            ...props,\n            exampleValue: {\n                serializeModes: ["initial"],\n                default: "Default Value",\n            },\n        };\n    }\n}\n')),Object(r.b)("h2",{id:"register-the-component"},"Register the Component"),Object(r.b)("p",null,"Finally we need to register the component and component model with the Geocortex Web component registry so that it is aware of your new component."),Object(r.b)("p",null,"To simplify the module imports, we'll make a new file in the ",Object(r.b)("inlineCode",{parentName:"p"},"ExampleComponent")," folder called ",Object(r.b)("inlineCode",{parentName:"p"},"index.ts"),". Note that this file is for convenience, and is not required:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/components/ExampleComponent/index.ts"',title:'"src/components/ExampleComponent/index.ts"'}),'export { default } from "./ExampleComponent";\nexport { default as ExampleComponentModel } from "./ExampleComponentModel";\n')),Object(r.b)("p",null,"Now register your component and component model with the component registry by modifying the ",Object(r.b)("inlineCode",{parentName:"p"},"src/index.ts")," file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts",metastring:'title="src/index.ts"',title:'"src/index.ts"'}),'import { LibraryRegistry } from "@geocortex/web/config";\nimport { ComponentType } from "react";\n\n// highlight-start\nimport ExampleComponent, {\n    ExampleComponentModel,\n} from "./components/ExampleComponent";\n// highlight-end\n\n// This namespace is generated when you create your project\n// and will be unique to your library.\nconst LAYOUT_NAMESPACE = "custom.abc123";\n\nexport default function (registry: LibraryRegistry) {\n    // ... other item registrations\n\n    // highlight-start\n    registry.registerComponent({\n        name: "example",\n        namespace: LAYOUT_NAMESPACE,\n        getComponentType: () => ExampleComponent as ComponentType,\n        itemType: "example-model",\n        title: "Example Component",\n    });\n    registry.registerModel({\n        getModelType: () => ExampleComponentModel,\n        itemType: "example-model",\n    });\n    // highlight-end\n}\n')),Object(r.b)("h2",{id:"add-the-component-to-your-layout"},"Add the Component to your Layout"),Object(r.b)("p",null,"You can now add the component to your ",Object(r.b)("inlineCode",{parentName:"p"},"layout.xml")," file and run the development server to see it in use."),Object(r.b)(l.a,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"UI",value:"ui"}],mdxType:"Tabs"},Object(r.b)(i.a,{value:"layout",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-xml",metastring:'title="app/layout.xml"',title:'"app/layout.xml"'}),'<?xml version="1.0" encoding="UTF-8"?>\n<layout xmlns="https://geocortex.com/layout/v1" xmlns:custom="custom.abc123">\n    <custom:example margin="3"/>\n</layout>\n'))),Object(r.b)(i.a,{value:"ui",mdxType:"TabItem"},Object(r.b)("img",{src:Object(m.a)("img/web-sdk-create-component.png")}))),Object(r.b)("h2",{id:"next-steps"},"Next Steps"),Object(r.b)(c.a,{mdxType:"UseCaseContainer"},Object(r.b)(p.a,{title:"Create a Service",description:"Learn how to create a basic service",link:"sdk-create-service",mdxType:"UseCaseCard"}),Object(r.b)(p.a,{title:"Deploy your Component",description:"Learn how to deploy your custom component.",link:"sdk-deployment",mdxType:"UseCaseCard"}),Object(r.b)(p.a,{title:"Create a Component with a Complex UI",description:"Follow along with a more in depth component example",link:"usecases-implement-component-with-ui",mdxType:"UseCaseCard"}),Object(r.b)(p.a,{title:"Create a Component that Consumes App Config",description:"Learn more about writing components that consume configuration values.",link:"usecases-implement-component-participate-app-config",mdxType:"UseCaseCard"})))}h.isMDXComponent=!0},270:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n(0),a=n.n(o),r=n(253),p=n.n(r),c=n(130),l=n.n(c);function i(e){var t=e.children;return a.a.createElement("div",{className:p()(l.a.root)},t)}},271:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));n(268);var o=n(259),a=n(0),r=n.n(a),p=n(253),c=n.n(p),l=n(131),i=n.n(l);function m(e){var t=e.title,n=e.description,a=e.link;return r.a.createElement("div",{className:c()("card-demo",i.a.root)},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card__header"},r.a.createElement("h3",null,t)),r.a.createElement("div",{className:"card__body"},r.a.createElement("p",null,n)),r.a.createElement("div",{className:"card__footer"},r.a.createElement(o.a,{className:"button button--secondary button--block",to:a},"Get Started"))))}}}]);