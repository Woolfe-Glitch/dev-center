(window.webpackJsonp=window.webpackJsonp||[]).push([[42,30],{137:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return r})),i.d(t,"metadata",(function(){return c})),i.d(t,"rightToc",(function(){return s})),i.d(t,"default",(function(){return p}));var n=i(1),o=i(9),a=(i(0),i(214)),r={},c={id:"workflow/snippets/logarithm-activity",title:"logarithm-activity",description:"```csharp",source:"@site/docs/workflow/snippets/logarithm-activity.mdx",permalink:"/docs/workflow/snippets/logarithm-activity",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/snippets/logarithm-activity.mdx"},s=[],l={rightToc:s};function p(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'using Geocortex.Workflow.Runtime;\nusing System;\nusing System.Collections.Generic;\nusing System.Threading.Tasks;\n\nnamespace App1.Workflow.CustomActivity\n{\n    public class CalculateLog : IActivityHandler\n    {\n        public const string Action = "your:unique:namespace::CalculateLog";\n\n        public Task<IDictionary<string, object>> Execute(IDictionary<string, object> inputs, IActivityContext context)\n        {\n            double? logBase = null;\n            if (inputs.ContainsKey("base")) {\n                var logBase = inputs["base"];\n            }\n            var value = (double)inputs["value"];\n\n            double logResult;\n            if(logBase != null)\n            {\n                logResult = Math.Log(value, (double)logBase);\n            } else\n            {\n                logResult = Math.Log(value);\n            }\n\n            return Task.FromResult((IDictionary<string, object>)new Dictionary<string, object>()\n            {\n                ["result"] = logResult\n            });\n        }\n    }\n}\n')))}p.isMDXComponent=!0},186:function(e,t,i){"use strict";i.r(t),i.d(t,"frontMatter",(function(){return c})),i.d(t,"metadata",(function(){return s})),i.d(t,"rightToc",(function(){return l})),i.d(t,"default",(function(){return u}));var n=i(1),o=i(9),a=(i(0),i(214)),r=i(137),c={title:"Registering .NET Activities with Geocortex Workflow Designer",description:"Geocortex Workflow - Registering .NET workflow activities with Geocortex Workflow Designer"},s={id:"workflow/register-dotnet-activities",title:"Registering .NET Activities with Geocortex Workflow Designer",description:"Geocortex Workflow - Registering .NET workflow activities with Geocortex Workflow Designer",source:"@site/docs/workflow/register-dotnet-activities.mdx",permalink:"/docs/workflow/register-dotnet-activities",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/register-dotnet-activities.mdx",sidebar:"workflow",previous:{title:"Geocortex Workflow Server",permalink:"/docs/workflow/getting-started-server"},next:{title:"Integrating the ArcGIS Runtime SDK for .NET",permalink:"/docs/workflow/integrating-the-esri-api-dotnet"}},l=[{value:"Scope",id:"scope",children:[]},{value:"Implement an TypeScriptActivity Pack with Stub Activities",id:"implement-an-typescriptactivity-pack-with-stub-activities",children:[{value:"Create a new Activity Pack",id:"create-a-new-activity-pack",children:[]},{value:"Stub out the Activity Metadata",id:"stub-out-the-activity-metadata",children:[]}]}],p={rightToc:l};function u(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,i,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Geocortex Workflow ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/workflow/concepts-key-concepts#activities"}),"activities")," can be implemented in either TypeScript or C#, depending on the target platform. For ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/workflow/implement-custom-activity-web"}),"custom activities implemented in TypeScript"),", the registration of the workflow activity implementation is done alongisde the Geocortex Workflow Designer activity definition when the ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/workflow/concepts-key-concepts#activity-packs"}),"activity pack")," is registered. However, with .NET activities implemented for Geocortex Mobile or ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/server-workflows.htm%3FTocPath%3DServer%2520Workflows%7C_____0"}),"Geocortex Workflow Server"),", the implementation is defined on the host platform (.NET), while the Geocortex Workflow Designer activity definition must be defined in an activity pack (TypeScript)."),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"If no Geocortex Workflow Designer activity definition is provided for a custom activity implemented for Geocortex Mobile or Geocortex Workflow Server, the activity will not show up in Geocortex Workflow Designer and must be run using ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.geocortex.com/workflow/latest/help/Default.htm#wf5/help/activities/run-activity.htm%3FTocPath%3DActivities%7CActivity%2520Reference%7C_____167"}),Object(a.b)("inlineCode",{parentName:"a"},"RunActivity")),"."))),Object(a.b)("h2",{id:"scope"},"Scope"),Object(a.b)("p",null,"This article covers how to create an activity pack to register Geocortex Workflow Designer activity definitions for custom activities implemented in ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/workflow/implement-custom-activity-mobile"}),"Geocortex Mobile")," or ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/workflow/implement-custom-activity-server"}),"Geocortex Workflow Server"),"."),Object(a.b)("h2",{id:"implement-an-typescriptactivity-pack-with-stub-activities"},"Implement an TypeScriptActivity Pack with Stub Activities"),Object(a.b)("p",null,"The idea behind creating activity definitions for Geocortex Workflow Designer is that every activity implemented in .NET has a corresponding stub activity with the metadata, but no execution body, in a TypeScript activity pack."),Object(a.b)("p",null,"Let's take the Geocortex Mobile ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/workflow/implement-custom-activity-mobile#example-logarithm-of-a-number"}),"custom logarithm activity")," for example."),Object(a.b)(r.default,{mdxType:"LogarithmActivityMobileSnippet"}),Object(a.b)("p",null,"This activity will need a TypeScript stub that defines its input and output types and descriptions, specifies the runtime enviroments it supports, and an activity description."),Object(a.b)("h3",{id:"create-a-new-activity-pack"},"Create a new Activity Pack"),Object(a.b)("p",null,"Follow the instructions in ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/workflow/implement-custom-activity-web"}),"Implement a Custom Activity for Web Applications")," up to ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/workflow/implement-custom-activity-web#implement-the-activity"}),"Implement the Activity"),"."),Object(a.b)("h3",{id:"stub-out-the-activity-metadata"},"Stub out the Activity Metadata"),Object(a.b)("p",null,"Stub out the appropiate metadata and type information for the .NET activity you are stubbing out. The execute body is left empty, as the implementation is defined in .NET using the Geocortex Mobile SDK or Geocortex Workflow for Server. In the case of the Logarithm activity, the stub might look like this."),Object(a.b)("div",{className:"admonition admonition-important alert alert--info"},Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(a.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"The static ",Object(a.b)("inlineCode",{parentName:"p"},"action")," property of the original activity definition has been changed to ",Object(a.b)("inlineCode",{parentName:"p"},"your:unique:namespace::CalculateLog")," to match the action name in the .NET implementation. If these two action names are not the same, the .NET workflow runtime will ",Object(a.b)("strong",{parentName:"p"},"not")," be able to find the correct activity."))),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),'export interface CalculateLogInputs {\n    // @description The base of the logarithm. Defaults to the natural log.\n    base?: number;\n\n    // @description The number to calculate the logarithm for.\n    // @required\n    value: number;\n}\n\nexport interface CalculateLogOutputs {\n    // @description The logarithm output.\n    result: number;\n}\n\n// @supportedApps GMV\n// @category Custom Activities\n// @description An activity that calculates the log of a number with the given base.\nexport class CalculateLog {\n    static action = "your:unique:namespace::CalculateLog";\n\n    static suite = "your:unique:namespace";\n\n    async execute(inputs: CalculateLogInputs): Promise<CalculateLogOutputs> {\n        return null;\n    }\n}\n')),Object(a.b)("p",null,"The activity now has a friendly user interface in Geocortex Workflow Designer, that can be ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/workflow/getting-started-web#sharing-the-activity-pack"}),"shared with other workflow authors"),"."))}u.isMDXComponent=!0},214:function(e,t,i){"use strict";i.d(t,"a",(function(){return u})),i.d(t,"b",(function(){return d}));var n=i(0),o=i.n(n);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function c(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):c({},t,{},e)),i},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(i),b=n,d=u["".concat(r,".").concat(b)]||u[b]||m[b]||a;return i?o.a.createElement(d,c({ref:t},l,{components:i})):o.a.createElement(d,c({ref:t},l))}));function d(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,r=new Array(a);r[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var l=2;l<a;l++)r[l]=i[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,i)}b.displayName="MDXCreateElement"}}]);