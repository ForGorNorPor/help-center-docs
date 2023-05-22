"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[8026],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=l(r),f=n,d=c["".concat(p,".").concat(f)]||c[f]||g[f]||o;return r?a.createElement(d,i(i({ref:t},u),{},{components:r})):a.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4161:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=r(7462),n=(r(7294),r(4137));const o={title:"Requesting a Package",summary:"Requesting a new package",date:new Date("2022-12-16T00:00:00.000Z")},i="Requesting A Package",s={unversionedId:"packaging/procedures/request-a-package",id:"packaging/procedures/request-a-package",title:"Requesting a Package",description:"Packages are how users install Software in Solus, however if we are missing one you can let us know using our Task Tracker.",source:"@site/docs/packaging/procedures/request-a-package.md",sourceDirName:"packaging/procedures",slug:"/packaging/procedures/request-a-package",permalink:"/docs/packaging/procedures/request-a-package",draft:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/packaging/procedures/request-a-package.md",tags:[],version:"current",frontMatter:{title:"Requesting a Package",summary:"Requesting a new package",date:"2022-12-16T00:00:00.000Z"},sidebar:"packagingSidebar",previous:{title:"Requesting a Package Update",permalink:"/docs/packaging/procedures/request-a-package-update"},next:{title:"Submitting the Package",permalink:"/docs/packaging/submitting-a-package"}},p={},l=[],u={toc:l},c="wrapper";function g(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"requesting-a-package"},"Requesting A Package"),(0,n.kt)("p",null,"Packages are how users install Software in Solus, however if we are missing one you can let us know using our Task Tracker."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Please look to see if a bug has been filed for the software or library you require"),". If there isn't an existing request, you can use the template below for requesting packages to be added to the Solus Package Repository. The Third Party Repository has been deprecated and will not be accepting any new packages."),(0,n.kt)("p",null,"Please provide as much of the following information as possible:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Name"),(0,n.kt)("li",{parentName:"ul"},"Homepage"),(0,n.kt)("li",{parentName:"ul"},"Why should this be included in the repository? If we already offer similar software in our repository ",(0,n.kt)("strong",{parentName:"li"},"or third party"),", please provide information on what your proposed software does that our existing offerings don't (",(0,n.kt)("em",{parentName:"li"},"differentiators"),")."),(0,n.kt)("li",{parentName:"ul"},"Is it Open Source (yes/no)"),(0,n.kt)("li",{parentName:"ul"},"If no: Are we allowed to distribute it?"),(0,n.kt)("li",{parentName:"ul"},'Set the Tags to have "Package Requests"'),(0,n.kt)("li",{parentName:"ul"},"Who and how many users do you anticipate will use this software?"),(0,n.kt)("li",{parentName:"ul"},"Link to source tarball/zip file"),(0,n.kt)("li",{parentName:"ul"},"master.zip files ",(0,n.kt)("strong",{parentName:"li"},"are not permitted"),'. We require versioned tarballs, for example: "1.2.3.tar.gz" or "packagename-1.2.3".')),(0,n.kt)("p",null,"Please put this information into a new ",(0,n.kt)("a",{parentName:"p",href:"https://dev.getsol.us/maniphest/task/edit/form/4/"},"task"),"."))}g.isMDXComponent=!0}}]);