"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[1942],{3905:(e,a,t)=>{t.d(a,{Zo:()=>g,kt:()=>d});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=r.createContext({}),l=function(e){var a=r.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},g=function(e){var a=l(e.components);return r.createElement(c.Provider,{value:a},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},k=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,g=p(e,["components","mdxType","originalType","parentName"]),s=l(t),k=n,d=s["".concat(c,".").concat(k)]||s[k]||u[k]||i;return t?r.createElement(d,o(o({ref:a},g),{},{components:t})):r.createElement(d,o({ref:a},g))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=k;var p={};for(var c in a)hasOwnProperty.call(a,c)&&(p[c]=a[c]);p.originalType=e,p[s]="string"==typeof e?e:n,o[1]=p;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},2634:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=t(7462),n=(t(7294),t(3905));const i={title:"Packaging Overview",summary:"Steps for setting up a packaging environment and submitting packages",sidebar_position:0},o="Packaging Overview",p={unversionedId:"packaging/index",id:"packaging/index",title:"Packaging Overview",description:"This is the overall workflow for creating or updating a package.",source:"@site/docs/packaging/index.md",sourceDirName:"packaging",slug:"/packaging/",permalink:"/docs/packaging/",draft:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/packaging/index.md",tags:[],version:"current",lastUpdatedAt:1699723055,formattedLastUpdatedAt:"Nov 11, 2023",sidebarPosition:0,frontMatter:{title:"Packaging Overview",summary:"Steps for setting up a packaging environment and submitting packages",sidebar_position:0},sidebar:"packagingSidebar",next:{title:"Prepare for Packaging",permalink:"/docs/packaging/prepare-for-packaging"}},c={},l=[{value:"Development Environment Preparation",id:"development-environment-preparation",level:2},{value:"Prior to Building a Package",id:"prior-to-building-a-package",level:2},{value:"Building Packages",id:"building-packages",level:2}],g={toc:l},s="wrapper";function u(e){let{components:a,...t}=e;return(0,n.kt)(s,(0,r.Z)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"packaging-overview"},"Packaging Overview"),(0,n.kt)("p",null,"This is the overall workflow for creating or updating a package."),(0,n.kt)("h2",{id:"development-environment-preparation"},"Development Environment Preparation"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/packaging/prepare-for-packaging"},"Prepare for Packaging")),(0,n.kt)("li",{parentName:"ol"},"Review the ",(0,n.kt)("a",{parentName:"li",href:"/docs/packaging/package.yml"},"requirements for the package.yml file"),"."),(0,n.kt)("li",{parentName:"ol"},"Also review our ",(0,n.kt)("a",{parentName:"li",href:"/docs/packaging/packaging-practices"},"Packaging Practices"),".")),(0,n.kt)("h2",{id:"prior-to-building-a-package"},"Prior to Building a Package"),(0,n.kt)("p",null,"Please check the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Search ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/getsolus/packages/issues?q=label%3A%22Package+Request%22"},"open package requests")," to see if there is one for the package. If there isn't an existing issue, go ahead and submit your pull request. If there is already a pull request, please check its status to avoid duplicating work."),(0,n.kt)("li",{parentName:"ul"},"If you are submitting a pull request for the inclusion of software in the repo, the package has a corresponding package request that is ",(0,n.kt)("strong",{parentName:"li"},"accepted for inclusion")," or is a dependency of a package that has been accepted into the repository.")),(0,n.kt)("h2",{id:"building-packages"},"Building Packages"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/packaging/update-dev-environment"},"Update your development environment")),(0,n.kt)("li",{parentName:"ol"},"Prepare the package directory and build the package")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"For a new package that does not yet exist in the repos see ",(0,n.kt)("a",{parentName:"li",href:"/docs/packaging/creating-a-new-package"},"Creating a New Package")),(0,n.kt)("li",{parentName:"ul"},"For updating a package that already is in the repos see ",(0,n.kt)("a",{parentName:"li",href:"/docs/packaging/updating-an-existing-package"},"Updating an Existing Package"))),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/packaging/testing-a-package"},"Test the Package")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"/docs/packaging/submitting-a-pull-request"},"Submit a Pull Request for Review"))))}u.isMDXComponent=!0}}]);