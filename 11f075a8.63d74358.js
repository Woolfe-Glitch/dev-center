/*! For license information please see 11f075a8.63d74358.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[13,102],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(1),i=n(9),r=(n(0),n(263)),o={},c={id:"workflow/snippets/prereqs-mobile",title:"prereqs-mobile",description:":::important",source:"@site/docs/workflow/snippets/prereqs-mobile.mdx",permalink:"/docs/workflow/snippets/prereqs-mobile",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/snippets/prereqs-mobile.mdx"},s=[],l={rightToc:s};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Extending Geocortex Workflow for Mobile requires development and deployment of a custom Geocortex Mobile Application using the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/sdk-getting-started"}),"Geocortex Mobile SDK")))),Object(r.b)("p",null,"Follow the instructions in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/workflow/sdk-net-getting-started-mobile"}),"Geocortex Mobile SDK")," page to set up the environment for extending Workflow for Geocortex Mobile."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"A working knowledge of ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://dotnet.microsoft.com/"}),"C# and the .NET platform")," is recommended before extending Workflow for Geocortex Mobile"))))}p.isMDXComponent=!0},167:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return m}));var a=n(1),i=n(9),r=(n(0),n(263)),o=n(287),c=n(286),s=n(138),l={title:"Access App Properties in an Activity",description:"Geocortex Workflow - Access app properties in a Geocortex Mobile workflow activity"},p={id:"workflow/usecases-mobile-access-app-properties",title:"Access App Properties in an Activity",description:"Geocortex Workflow - Access app properties in a Geocortex Mobile workflow activity",source:"@site/docs/workflow/usecases-mobile-access-app-properties.mdx",permalink:"/docs/workflow/usecases-mobile-access-app-properties",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/workflow/usecases-mobile-access-app-properties.mdx",sidebar:"workflow",previous:{title:"Implement a Custom Activity for Geocortex Mobile",permalink:"/docs/workflow/usecases-mobile-implement-custom-activity"},next:{title:"Implement a Custom Form Element for Geocortex Mobile",permalink:"/docs/workflow/usecases-mobile-implement-custom-form-elements"}},u=[{value:"Scope",id:"scope",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Access Geocortex Mobile Functionality",id:"access-geocortex-mobile-functionality",children:[{value:"Example: Display Geocortex Mobile Alert",id:"example-display-geocortex-mobile-alert",children:[]}]},{value:"Access the Map",id:"access-the-map",children:[{value:"Example: Place Callout at Center Point",id:"example-place-callout-at-center-point",children:[]}]}],b={rightToc:u};function m(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"scope"},"Scope"),Object(r.b)("p",null,"This article applies to building workflow activities that will be run on ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.geocortex.com/products/gxm/"}),"Geocortex Mobile"),"."),Object(r.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(r.b)(s.default,{mdxType:"MobilePrereqs"}),Object(r.b)("p",null,"Learn how to build a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/workflow/usecases-mobile-implement-custom-activity"}),"custom activity")," for Geocortex Mobile before reading this article."),Object(r.b)("h2",{id:"access-geocortex-mobile-functionality"},"Access Geocortex Mobile Functionality"),Object(r.b)("p",null,"Accessing Geocortex Mobile functionality in custom workflow activities uses the built-in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/sdk-dependency-injection"}),"dependency injection pattern")," to inject shared Geocortex Mobile ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/concepts-components-services"}),"services")," such as the ",Object(r.b)("inlineCode",{parentName:"p"},"UIOperations")," service."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Add the class you want to inject to the constructor of the custom activity")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),"private UIOperations _uiOperations;\n\npublic DisplayGeocortexMobileAlert(UIOperations uiOperations)\n{\n    _uiOperations = uiOperations;\n}\n")),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/mobile/sdk-dependency-injection"}),"Inject the class")," into the ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/workflow/usecases-mobile-implement-custom-activity#register-the-activity-with-the-iactivityhandlerfactory"}),Object(r.b)("inlineCode",{parentName:"a"},"IActivityHandlerFactory")," for the application"),", and pass it to your custom activity's constructor.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),"public class ActivityLoader : IActivityHandlerFactory\n{\n    ...\n\n    public ActivityLoader(UIOperations uiOperations)\n    {\n        RegisteredActivities[DisplayGeocortexMobileAlert.Action] = () => new DisplayGeocortexMobileAlert(uiOperations);\n    }\n    ...\n}\n")),Object(r.b)("h3",{id:"example-display-geocortex-mobile-alert"},"Example: Display Geocortex Mobile Alert"),Object(r.b)("p",null,"This example injects the ",Object(r.b)("inlineCode",{parentName:"p"},"UIOperations")," class into a custom activity then uses it to display an alert."),Object(r.b)(o.a,{defaultValue:"custom-activity",values:[{label:"Custom Activity",value:"custom-activity"},{label:"IActivityHandlerFactory",value:"activity-loader"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"custom-activity",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),'using Geocortex.Mobile.Infrastructure.Messaging;\nusing Geocortex.Workflow.Runtime;\nusing System.Collections.Generic;\nusing System.Threading.Tasks;\n\nnamespace App1.Workflow\n{\n    public class DisplayGeocortexMobileAlert : IActivityHandler\n    {\n        private UIOperations _uiOperations;\n\n        public static string Action { get; } = "your:unique:namespace::DisplayGeocortexMobileAlert";\n\n        public DisplayGeocortexMobileAlert(UIOperations uiOperations)\n        {\n            _uiOperations = uiOperations;\n        }\n\n        public async Task<IDictionary<string, object>> Execute(IDictionary<string, object> inputs, IActivityContext context)\n        {\n            await _uiOperations.Alert.ExecuteAsync(new UIAlertArgs() { Title = "It\'s dangerous to go alone.", Message = "Take this!", ButtonText = "*take sword*" });\n\n            return new Dictionary<string, object>();\n        }\n    }\n}\n'))),Object(r.b)(c.a,{value:"activity-loader",mdxType:"TabItem"},Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),'using App1.Samples.Workflow.CustomActivity;\nusing System;\nusing System.Collections.Generic;\nusing System.Threading;\nusing System.Threading.Tasks;\nusing Geocortex.Mobile.Composition;\nusing Geocortex.Workflow.Runtime;\nusing Geocortex.Workflow.Runtime.Definition;\nusing Geocortex.Workflow.Runtime.Execution;\nusing App1.Workflow;\nusing Geocortex.Mobile.Infrastructure.Messaging;\n\n[assembly: Export(typeof(ActivityLoader), SingleInstance = true, AsImplementedInterfaces = true)]\nnamespace App1.Samples.Workflow.CustomActivity\n{\n    public class ActivityLoader : IActivityHandlerFactory\n    {\n        /// <summary>\n        /// Gets a mapping of action names to implementations of <see cref="IActivityHandler"/>s.\n        /// </summary>\n        private Dictionary<string, Func<IActivityHandler>> RegisteredActivities { get; } = new Dictionary<string, Func<IActivityHandler>>();\n\n        public ActivityLoader(UIOperations uiOperations)\n        {\n            RegisteredActivities[DisplayGeocortexMobileAlert.Action] = () => new DisplayGeocortexMobileAlert(uiOperations);\n        }\n\n        /// <summary>\n        /// Creates an <see cref="IActivityHandler"/>.\n        /// </summary>\n        /// <param name="action">The name of the action to create.</param>\n        /// <param name="token">The cancellation token.</param>\n        /// <param name="inspector">The <see cref="ProgramInspector"/> for the program.</param>\n        /// <returns>The activity handler for the given action.</returns>\n        public Task<IActivityHandler> Create(string action, CancellationToken token, ProgramInspector inspector = null)\n        {\n            if (action == null || token.IsCancellationRequested)\n            {\n                return Task.FromResult<IActivityHandler>(null);\n            }\n\n            if (RegisteredActivities.TryGetValue(action, out Func<IActivityHandler> handlerType))\n            {\n                return Task.FromResult(handlerType());\n            }\n            else\n            {\n                return Task.FromResult<IActivityHandler>(null);\n            }\n        }\n    }\n}\n')))),Object(r.b)("h2",{id:"access-the-map"},"Access the Map"),Object(r.b)("p",null,"Accessing the map for the application uses the built-in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/mobile/sdk-dependency-injection"}),"dependency injection pattern")," to inject a ",Object(r.b)("inlineCode",{parentName:"p"},"MapProviderBase")," class which exposes the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.arcgis.com/net/latest/uwp/api-reference/html/T_Esri_ArcGISRuntime_Mapping_Map.htm"}),"Map")," and ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.arcgis.com/net/latest/uwp/api-reference/html/T_Esri_ArcGISRuntime_UI_Controls_MapView.htm"}),"MapView"),"."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Add a new ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://autofaccn.readthedocs.io/en/latest/resolve/relationships.html#dynamic-instantiation-func-b"}),"Autofac factory")," property that injects a ",Object(r.b)("inlineCode",{parentName:"li"},"MapProviderBase")," into your custom activity.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),"[ProviderFactoryAttribute(typeof(MapProviderBase))]\npublic Func<MapProviderBase> MapProviderFactory { get; set; }\n")),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"Instantiate and initialize the Map and MapView in the ",Object(r.b)("inlineCode",{parentName:"li"},"execute")," body.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),"// Get an instance of the MapProvider\nvar mapProvider = MapProviderFactory();\n// Ensure the map has loaded\nawait mapProvider.Load();\n// ArcGIS runtime Map\nvar map = mapProvider.Map;\n// ArcGIS runtime MapView\nvar mapView = (mapProvider as dynamic).View as MapView;\n")),Object(r.b)("h3",{id:"example-place-callout-at-center-point"},"Example: Place Callout at Center Point"),Object(r.b)("p",null,"This example injects the ",Object(r.b)("inlineCode",{parentName:"p"},"Map")," and ",Object(r.b)("inlineCode",{parentName:"p"},"MapView")," into the custom activity then uses the ",Object(r.b)("inlineCode",{parentName:"p"},"MapView")," to place a callout on the map."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Operations related to UI activities have to run in Xamarin's ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/xamarin/essentials/main-thread"}),"main thread"),", else they will throw an error."))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),'using Esri.ArcGISRuntime.Geometry;\nusing Esri.ArcGISRuntime.UI;\nusing Esri.ArcGISRuntime.Xamarin.Forms;\nusing Geocortex.Workflow.GIS;\nusing Geocortex.Workflow.Runtime;\nusing System;\nusing System.Collections.Generic;\nusing System.Threading.Tasks;\nusing Xamarin.Essentials;\n\nnamespace App1.Workflow\n{\n    public class PlaceCalloutAtCenter : IActivityHandler\n    {\n        public static string Action { get; } = "your:unique:namespace::PlaceCalloutAtCenter";\n\n        [ProviderFactoryAttribute(typeof(MapProviderBase))]\n        public Func<MapProviderBase> MapProviderFactory { get; set; }\n\n        public async Task<IDictionary<string, object>> Execute(IDictionary<string, object> inputs, IActivityContext context)\n        {\n            var calloutText = (string)inputs["calloutText"];\n\n            var mapProvider = MapProviderFactory();\n            await mapProvider.Load();\n            var map = mapProvider.Map;\n            var mapView = (mapProvider as dynamic).View as MapView;\n\n            MainThread.BeginInvokeOnMainThread(() =>\n            {\n                var currentEnvelope = (Envelope)mapView.GetCurrentViewpoint(Esri.ArcGISRuntime.Mapping.ViewpointType.BoundingGeometry).TargetGeometry;\n\n                mapView.ShowCalloutAt(currentEnvelope.GetCenter(), new CalloutDefinition("Hey!", $"Listen! {calloutText}"));\n            });\n\n\n            return new Dictionary<string, object>();\n        }\n    }\n}\n')))}m.isMDXComponent=!0},263:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,d=u["".concat(o,".").concat(m)]||u[m]||b[m]||r;return n?i.a.createElement(d,c({ref:t},l,{components:n})):i.a.createElement(d,c({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},264:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var o=i.apply(null,a);o&&e.push(o)}else if("object"===r)for(var c in a)n.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(a=function(){return i}.apply(t,[]))||(e.exports=a)}()},284:function(e,t,n){"use strict";var a=n(0),i=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=i},286:function(e,t,n){"use strict";var a=n(0),i=n.n(a);t.a=function(e){return i.a.createElement("div",null,e.children)}},287:function(e,t,n){"use strict";n(32),n(23),n(24);var a=n(0),i=n.n(a),r=n(284);var o=function(){return Object(a.useContext)(r.a)},c=n(264),s=n.n(c),l=n(132),p=n.n(l),u=37,b=39;t.a=function(e){var t=e.block,n=e.children,r=e.defaultValue,c=e.values,l=e.groupId,m=o(),d=m.tabGroupChoices,v=m.setTabGroupChoices,f=Object(a.useState)(r),O=f[0],h=f[1];if(null!=l){var y=d[l];null!=y&&y!==O&&h(y)}var j=function(e){h(e),null!=l&&v(l,e)},g=[];return i.a.createElement("div",null,i.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:s()("tabs",{"tabs--block":t})},c.map((function(e){var t=e.value,n=e.label;return i.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":O===t,className:s()("tab-item",p.a.tabItem,{"tab-item--active":O===t}),key:t,ref:function(e){return g.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case b:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(g,e.target,e)},onFocus:function(){return j(t)},onClick:function(){return j(t)}},n)}))),i.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===O}))[0]))}}}]);