"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[9773],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),h=i,f=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return r?a.createElement(f,n(n({ref:t},p),{},{components:r})):a.createElement(f,n({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,n=new Array(o);n[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,n[1]=s;for(var c=2;c<o;c++)n[c]=r[c];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3620:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(7462),i=(r(7294),r(3905));const o={title:"Package Inclusion Policy",summary:"What's needed to include packages into the repository"},n="Package Inclusion Policy",s={unversionedId:"packaging/procedures/package-inclusion",id:"packaging/procedures/package-inclusion",title:"Package Inclusion Policy",description:"This policy sets forth the criteria for a package to be accepted for inclusion into the Solus repositories or rejected.",source:"@site/docs/packaging/procedures/package-inclusion.md",sourceDirName:"packaging/procedures",slug:"/packaging/procedures/package-inclusion",permalink:"/docs/packaging/procedures/package-inclusion",draft:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/packaging/procedures/package-inclusion.md",tags:[],version:"current",lastUpdatedAt:1698334387,formattedLastUpdatedAt:"Oct 26, 2023",frontMatter:{title:"Package Inclusion Policy",summary:"What's needed to include packages into the repository"},sidebar:"packagingSidebar",previous:{title:"Maintainership",permalink:"/docs/packaging/procedures/maintainership"},next:{title:"Release Processes",permalink:"/docs/packaging/procedures/release-processes"}},l={},c=[{value:"Criteria",id:"criteria",level:2},{value:"Explicitly Redistributable",id:"explicitly-redistributable",level:3},{value:"Server Software",id:"server-software",level:3},{value:"Software Age",id:"software-age",level:3},{value:"Stack Complexity",id:"stack-complexity",level:3},{value:"Value Add",id:"value-add",level:3},{value:"Rejection",id:"rejection",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"package-inclusion-policy"},"Package Inclusion Policy"),(0,i.kt)("p",null,"This policy sets forth the criteria for a package to be accepted for inclusion into the Solus repositories or rejected."),(0,i.kt)("h2",{id:"criteria"},"Criteria"),(0,i.kt)("h3",{id:"explicitly-redistributable"},"Explicitly Redistributable"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Software under a free software or open source software license, or license text which explicitly states that it is ",(0,i.kt)("strong",{parentName:"li"},"permissible")," to redistribute the software."),(0,i.kt)("li",{parentName:"ul"},"For anything that cannot be redistributed by Solus, there is the possibility for them to be provided as a Flatpak, for Third Party repository inclusion, however the Solus project is not responsible for flatpak or snap implementation of these items. These items should then fetch only at installation time, and not contain non distributable components."),(0,i.kt)("li",{parentName:"ul"},"Solus supports both VCS (currently only git, this will expand) and traditional software sources (such as tarballs) for packages, equally."),(0,i.kt)("li",{parentName:"ul"},"Unless ",(0,i.kt)("strong",{parentName:"li"},"absolutely unavoidable"),", the sources for a package should be source, and not ",(0,i.kt)("strong",{parentName:"li"},"binary, prebuilt")," sources. Exceptions may be made in rare cases, such as stage1 bootstrap for a compiler, or requires custom components otherwise impossible to provide in Solus (patched libraries, etc.)")),(0,i.kt)("h3",{id:"server-software"},"Server Software"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mail servers such as Postfix, Dovecot, etc, are ",(0,i.kt)("strong",{parentName:"li"},"not")," eligible for inclusion. Solus does not provide a server operating system."),(0,i.kt)("li",{parentName:"ul"},"Web servers and database daemons ",(0,i.kt)("strong",{parentName:"li"},"are")," eligible for inclusion, as they facilitate web developers to work locally."),(0,i.kt)("li",{parentName:"ul"},"Anything outside of these may be catered to by the usage of Docker, or other container technology. Thus, container technology must be supported by Solus to support access to ancillary cases.")),(0,i.kt)("h3",{id:"software-age"},"Software Age"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"DOA (dead-on-arrival) packages are generally rejected from Solus. However, they may be included at the discretion of the project, if they provide unique functionality."),(0,i.kt)("li",{parentName:"ul"},"Projects with no tags/tarballs which lack traction, may be frozen until a suitable release is made. Tagging releases is an indicator for good release engineering practices."),(0,i.kt)("li",{parentName:"ul"},"Typically, we prefer ",(0,i.kt)("strong",{parentName:"li"},"stable")," tagged releases. However, this may be waived if:"),(0,i.kt)("li",{parentName:"ul"},"The software has significant traction (i.e. prerelease)"),(0,i.kt)("li",{parentName:"ul"},"A bug fix only exists beyond the latest stable release for a git source")),(0,i.kt)("h3",{id:"stack-complexity"},"Stack Complexity"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Certain requests may tick all the boxes, but introduce a level of complexity or require a level of engagement not possible to balance for Solus Staff. Under certain situations, a request will be frozen until it has a dedicated maintainer."),(0,i.kt)("li",{parentName:"ul"},"This extends to requests for full desktop environments. However, this does not extend to minor components like drop-in window managers or panels separate of a dependent stack (i.e. Awesome WM, tint2, etc.)")),(0,i.kt)("h3",{id:"value-add"},"Value Add"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A web wrapper which ",(0,i.kt)("strong",{parentName:"li"},"adds value"),", such as Discord, with the global push-to-talk shortcut, is eligible for inclusion."),(0,i.kt)("li",{parentName:"ul"},"A web page wrapper, that adds ",(0,i.kt)("strong",{parentName:"li"},"no further value")," other than \u201cconvenient desktop shortcut\u201d or \u201ctray icon\u201d, are ",(0,i.kt)("strong",{parentName:"li"},"not")," eligible for inclusion. Web browsers already support desktop notifications."),(0,i.kt)("li",{parentName:"ul"},"If the newly requested package offers no functionality above that of an alternative already in the repositories, it will very likely be rejected. \u201cIt\u2019s pretty\u201d is never a sufficient reason."),(0,i.kt)("li",{parentName:"ul"},"If the requested package is curated towards, or developed with the intent to work on, a specific operating system, it will very likely be rejected. This includes packages which require libraries that are built with the intent to work on a specific operating system."),(0,i.kt)("li",{parentName:"ul"},"Likewise, when a new package offers a better alternative to an ",(0,i.kt)("strong",{parentName:"li"},"existing")," package, we should look to replace the old one with the new one, to ensure the repository is always deduplicating.")),(0,i.kt)("h2",{id:"rejection"},"Rejection"),(0,i.kt)("p",null,"Solus Staff members reserve the right to permanently reject a package request without the need for further discussion once the rejection is issued. The limited time of contributors should be considered and respected, instead of dragging out and 'necromancing' old issues in a vain attempt to force inclusion of previously rejected software. In the event of any policy change, existing/expired package requests will NOT be reevaluated under new criteria as this would lead to an exponential growth in work upon every policy change, and is physically impossible to handle for a project of ",(0,i.kt)("em",{parentName:"p"},"any")," size."))}d.isMDXComponent=!0}}]);