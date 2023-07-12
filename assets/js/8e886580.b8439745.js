"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[4978],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9107:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={title:"Rust",summary:"A quick guide to getting set up for Rust development on Solus"},i="Rust",s={unversionedId:"user/software/development/rust",id:"user/software/development/rust",title:"Rust",description:"There are two ways to install Rust. This article explains how they differ and which one should be used, according to users' needs.",source:"@site/docs/user/software/development/rust.md",sourceDirName:"user/software/development",slug:"/user/software/development/rust",permalink:"/docs/user/software/development/rust",draft:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/software/development/rust.md",tags:[],version:"current",lastUpdatedAt:1689163310,formattedLastUpdatedAt:"Jul 12, 2023",frontMatter:{title:"Rust",summary:"A quick guide to getting set up for Rust development on Solus"},sidebar:"userSidebar",previous:{title:"R and Rstudio",permalink:"/docs/user/software/development/r-and-rstudio"},next:{title:"Web Development",permalink:"/docs/user/software/development/web"}},l={},u=[],p={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rust"},"Rust"),(0,o.kt)("p",null,"There are two ways to install Rust. This article explains how they differ and which one should be used, according to users' needs."),(0,o.kt)("p",null,"Rust can be obtained by:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Installing the ",(0,o.kt)("inlineCode",{parentName:"li"},"rustup")," package, then installing any Rust target and/or tool using ",(0,o.kt)("inlineCode",{parentName:"li"},"rustup")," itself"),(0,o.kt)("li",{parentName:"ul"},"Installing the ",(0,o.kt)("inlineCode",{parentName:"li"},"rust")," package")),(0,o.kt)("p",null,"Users should prefer the ",(0,o.kt)("inlineCode",{parentName:"p"},"rustup")," way, since it gives the freedom to install any tools and targets, including nightly versions and debugging utilities, although it may require editing the ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH")," variable depending on your shell setup. According to the official Rust ",(0,o.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/tools/install"},"installation guide"),":"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"It is customary for Rust developers to include ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.cargo/bin")," in their ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH "),"environment variable. During installation rustup will attempt to configure the ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH"),". Because of differences between platforms, command shells, and bugs in rustup, the modifications to ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH")," may not take effect until the console is restarted, or the user is logged out, or it may not succeed at all.")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"rust")," package, in fact, is present in the Solus repository for building packages that depend on it and it is not intended to be used by the final user, although it is possible and supported. Users that want to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"rust")," package for their projects will be limited to the targets and tools that Solus needs to support, namely x86_64 and i686 Linux targets and ",(0,o.kt)("inlineCode",{parentName:"p"},"cargo"),". On the other hand, the ",(0,o.kt)("inlineCode",{parentName:"p"},"rust")," package is ready to use after its installation with no extra configurations."),(0,o.kt)("p",null,"Either way, it is also recommended to install our ",(0,o.kt)("inlineCode",{parentName:"p"},"system.devel")," component, which is typically required for compiling. See our documentation for it ",(0,o.kt)("a",{parentName:"p",href:"/docs/user/software/development"},"here"),"."),(0,o.kt)("p",null,"As a final note, it is possible to ",(0,o.kt)("a",{parentName:"p",href:"https://rust-lang.github.io/rustup/installation/package-managers.html"},"configure")," ",(0,o.kt)("inlineCode",{parentName:"p"},"rustup")," to use the system toolchain. This setup is ",(0,o.kt)("strong",{parentName:"p"},"discouraged")," unless aimed at developing applications targeting Solus itself."))}c.isMDXComponent=!0}}]);