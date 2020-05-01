(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{133:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return r})),n.d(t,"default",(function(){return m}));var o=n(1),a=n(9),i=(n(0),n(263)),c={},s={id:"mobile/snippets/quickstart-prereqs",title:"quickstart-prereqs",description:"Checkout and setup the [Geocortex Mobile SDK Quickstart project](../sdk-getting-started.mdx).",source:"@site/docs/mobile/snippets/quickstart-prereqs.mdx",permalink:"/docs/mobile/snippets/quickstart-prereqs",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/snippets/quickstart-prereqs.mdx"},r=[],p={rightToc:r};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Checkout and setup the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/mobile/sdk-getting-started"}),"Geocortex Mobile SDK Quickstart project"),"."))}m.isMDXComponent=!0},202:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return u})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return g}));var o=n(1),a=n(9),i=(n(0),n(263)),c=n(287),s=n(286),r=n(285),p=n(281),m=n(282),l=n(133),u={title:"Create a Component",description:"Geocortex Mobile - Create a component using the Geocortex Mobile SDK Quickstart"},b={id:"mobile/sdk-create-component",title:"Create a Component",description:"Geocortex Mobile - Create a component using the Geocortex Mobile SDK Quickstart",source:"@site/docs/mobile/sdk-create-component.mdx",permalink:"/docs/mobile/sdk-create-component",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/sdk-create-component.mdx",sidebar:"mobile",previous:{title:"Edit the Layout and App Config",permalink:"/docs/mobile/sdk-edit-layout-app-config"},next:{title:"Create a Service",permalink:"/docs/mobile/sdk-create-service"}},d=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Basic Component",id:"basic-component",children:[]},{value:"Add the Component to your Layout",id:"add-the-component-to-your-layout",children:[]},{value:"Relevant SDK Samples",id:"relevant-sdk-samples",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],h={rightToc:d};function g(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-important alert alert--info"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"This tutorial assumes you are using windows and can run the Universal Windows Version of Geocortex Mobile."))),Object(i.b)("p",null,"If you can't solve your use case by editing the app layout and config using the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/mobile/api-components"}),"built-in components"),", then it may be time to learn how to extend Geocortex Mobile with custom components. With custom components, you can create completely configurable UI and behavior, interact with other components and built-in services, and more."),Object(i.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(i.b)(l.default,{mdxType:"QuickstartPrereqsSnippet"}),Object(i.b)("h2",{id:"basic-component"},"Basic Component"),Object(i.b)("p",null,"Create a new file ",Object(i.b)("inlineCode",{parentName:"p"},"components/CustomComponent.cs")," under the platform agnostic project.\nIn the file, add a new component class ",Object(i.b)("inlineCode",{parentName:"p"},"CustomComponent")," and register it with Geocortex Mobile using an assembly attribute."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-csharp"}),'using App1;\nusing App1.Components;\nusing Geocortex.Mobile.Composition.Layout;\nusing System.Xml.Linq;\nusing Xamarin.Forms;\n\n[assembly: Component(typeof(CustomComponent), "custom-component", XmlNamespace = XmlNamespaces.App1Namespace)]\nnamespace App1.Components\n{\n    class CustomComponent : ComponentBase\n    {\n        protected override VisualElement Create(XNode node)\n        {\n            return new Label(){ Text = "My Custom Component" };\n        }\n    }\n}\n')),Object(i.b)("h2",{id:"add-the-component-to-your-layout"},"Add the Component to your Layout"),Object(i.b)("p",null,"You can now add the component to your app layout to see it in the application."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Add the ",Object(i.b)("inlineCode",{parentName:"li"},"XmlNamespaces.App1Namespace")," namespace with the alias ",Object(i.b)("inlineCode",{parentName:"li"},"custom")," to your xml namespaces."),Object(i.b)("li",{parentName:"ul"},"Place your custom component in a taskbar panel.")),Object(i.b)(c.a,{defaultValue:"layout",values:[{label:"Layout",value:"layout"},{label:"App Config",value:"config"},{label:"User Interface",value:"ui"}],mdxType:"Tabs"},Object(i.b)(s.a,{value:"layout",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-xml",metastring:'title="App1/App1/layout-large.xml"',title:'"App1/App1/layout-large.xml"'}),'<?xml version="1.0" encoding="utf-8" ?>\n<layout\n    xmlns="https://geocortex.com/layout/v1"\n    xmlns:gxm="https://geocortex.com/layout/mobile/v1"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n    xsi:schemaLocation="https://geocortex.com/layout/v1 ../../ViewerFramework/layout/layout-mobile.xsd"\n    // highlight-next-line\n    xmlns:custom="https://your.org/layout/app1">\n    <gxm:taskbar>\n        <map slot="main"/>\n        <panel>\n            // highlight-next-line\n            <custom:custom-component icon="info"/>\n        </panel>\n    </gxm:taskbar>\n</layout>\n'))),Object(i.b)(s.a,{value:"config",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json",metastring:'title="App1/App1/app.json"',title:'"App1/App1/app.json"'}),'{\n    "$schema": "..\\\\..\\\\ViewerFramework\\\\app-config\\\\mobile\\\\mobile-app-config.schema.json",\n    "schemaVersion": "1.0",\n    "items": [\n        {\n            "id": "desktop-layout",\n            "$type": "layout",\n            "url": "resource://layout-large.xml",\n            "tags": ["medium", "large"]\n        }\n    ]\n}\n'))),Object(i.b)(s.a,{value:"ui",mdxType:"TabItem"},Object(i.b)("img",{src:Object(r.a)("img/mobile-sdk-create-component.png"),alt:"Custom Component with Text Block"}))),Object(i.b)("p",null,"You've now accomplished the basics of extending Geocortex Mobile with a custom component. With custom components, you can create completely new user interfaces and run completely custom logic in your Geocortex Mobile application."),Object(i.b)("h2",{id:"relevant-sdk-samples"},"Relevant SDK Samples"),Object(i.b)("p",null,"Check out the relevant Geocortex Mobile SDK Samples:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Custom/Component"}),"Custom Component"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Custom/ComponentConfiguration"}),"Component with Configuration"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/geocortex/vertigis-mobile-samples/tree/master/Geocortex.Mobile.Samples/Geocortex.Mobile.Samples/Samples/Custom/XamlComponent"}),"Component with XAML UI")))),Object(i.b)("h2",{id:"next-steps"},"Next Steps"),Object(i.b)(p.a,{mdxType:"UseCaseContainer"},Object(i.b)(m.a,{title:"Create a Custom Service",description:"Learn how to create a custom service with the SDK",link:"sdk-create-service",mdxType:"UseCaseCard"}),Object(i.b)(m.a,{title:"Learn More About Components",description:"Check out the concepts to learn more about components",link:"concepts-components-services#components",mdxType:"UseCaseCard"}),Object(i.b)(m.a,{title:"Create a Component with a Complex UI",description:"Build a custom, interactive component with a UI defined in XAML",link:"usecases-implement-component-with-ui",mdxType:"UseCaseCard"}),Object(i.b)(m.a,{title:"Create a Component that Consumes App Config",description:"Use app configuration to create easily customizable components",link:"usecases-implement-component-participate-app-config",mdxType:"UseCaseCard"})))}g.isMDXComponent=!0},281:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var o=n(0),a=n.n(o),i=n(264),c=n.n(i),s=n(130),r=n.n(s);function p(e){var t=e.children;return a.a.createElement("div",{className:c()(r.a.root)},t)}},282:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));n(279);var o=n(270),a=n(0),i=n.n(a),c=n(264),s=n.n(c),r=n(131),p=n.n(r);function m(e){var t=e.title,n=e.description,a=e.link;return i.a.createElement("div",{className:s()("card-demo",p.a.root)},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card__header"},i.a.createElement("h3",null,t)),i.a.createElement("div",{className:"card__body"},i.a.createElement("p",null,n)),i.a.createElement("div",{className:"card__footer"},i.a.createElement(o.a,{className:"button button--secondary button--block",to:a},"Get Started"))))}}}]);