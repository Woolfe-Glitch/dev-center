(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{195:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return c}));var r=n(1),o=n(9),a=(n(0),n(263)),i={title:"View Model Helper Class",description:"Geocortex Mobile - Learn about the base class for ViewModels in mobile, NotifyPropertyBase"},l={id:"mobile/sdk-viewmodel-helper-class",title:"View Model Helper Class",description:"Geocortex Mobile - Learn about the base class for ViewModels in mobile, NotifyPropertyBase",source:"@site/docs/mobile/sdk-viewmodel-helper-class.mdx",permalink:"/docs/mobile/sdk-viewmodel-helper-class",editUrl:"https://github.com/geocortex/dev-center/edit/master/docs/mobile/sdk-viewmodel-helper-class.mdx",sidebar:"mobile",previous:{title:"Dependency Injection",permalink:"/docs/mobile/sdk-dependency-injection"},next:{title:"Memory Management",permalink:"/docs/mobile/sdk-memory-leaks"}},p=[],s={rightToc:p};function c(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"As per ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/xamarin/xamarin-forms/xaml/xaml-basics/data-bindings-to-mvvm#a-simple-viewmodel"}),".NET and Xamarin Forms guidelines"),", ViewModels usually implement the ",Object(a.b)("inlineCode",{parentName:"p"},"INotifyPropertyChanged")," interface to inform the view of changes to the data model. This involves a lot of boilerplate, so Geocortex Mobile has a class, ",Object(a.b)("inlineCode",{parentName:"p"},"NotifyPropertyBase"),", which handles the boilerplate and simplifies your code."),Object(a.b)("p",null,"The ViewModel of the ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/mobile/usecases-implement-component-with-ui#example-progress-bar"}),"progress bar custom component")," is a good example of this pattern."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),"using App1.Components;\nusing Geocortex.Mobile.Composition;\nusing Geocortex.Mobile.Composition.Views;\n\n[assembly: ViewModel(typeof(ProgressBarComponentViewModel))]\nnamespace App1.Components\n{\n    public class ProgressBarComponentViewModel : NotifyPropertyBase\n    {\n        private double _progress = 0;\n\n        private bool _workComplete = false;\n\n        public double Progress\n        {\n            get => _progress;\n            set => SetProperty(ref _progress, value);\n        }\n\n        public bool WorkComplete\n        {\n            get => _workComplete;\n            set\n            {\n                SetProperty(ref _workComplete, value);\n                OnPropertyChanged(nameof(WorkNotComplete));\n            }\n        }\n\n        public bool WorkNotComplete => !WorkComplete;\n    }\n}\n")),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"NotifyPropertyBase")," implements ",Object(a.b)("inlineCode",{parentName:"p"},"INotifyPropertyChanged")," for you and provides a helper function, ",Object(a.b)("inlineCode",{parentName:"p"},"SetProperty"),". This helper function will ensure that ",Object(a.b)("inlineCode",{parentName:"p"},"OnPropertyChanged")," is called if the value has changed and that the underlying field is set."))}c.isMDXComponent=!0},263:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),c=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},m=function(e){var t=c(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,d=m["".concat(i,".").concat(u)]||m[u]||b[u]||a;return n?o.a.createElement(d,l({ref:t},s,{components:n})):o.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);