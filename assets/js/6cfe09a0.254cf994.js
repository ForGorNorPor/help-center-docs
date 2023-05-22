"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[1174],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),g=o,m=c["".concat(l,".").concat(g)]||c[g]||d[g]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9640:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var r=n(7462),o=(n(7294),n(4137));const a={title:"TigerVNC",summary:"A quick start guide to using TigerVNC on Solus",date:new Date("2022-12-16T00:00:00.000Z")},i="TigerVNC",s={unversionedId:"user/software/networking/tigervnc",id:"user/software/networking/tigervnc",title:"TigerVNC",description:"TigerVNC is a high-performance implementation of the VNC protocol, which allows you to control/view desktops remotely over the internet.",source:"@site/docs/user/software/networking/tigervnc.md",sourceDirName:"user/software/networking",slug:"/user/software/networking/tigervnc",permalink:"/docs/user/software/networking/tigervnc",draft:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/software/networking/tigervnc.md",tags:[],version:"current",frontMatter:{title:"TigerVNC",summary:"A quick start guide to using TigerVNC on Solus",date:"2022-12-16T00:00:00.000Z"},sidebar:"userSidebar",previous:{title:"Samba File Sharing",permalink:"/docs/user/software/networking/samba"},next:{title:"Wireshark",permalink:"/docs/user/software/networking/wireshark"}},l={},u=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Initial setup of vncserver",id:"initial-setup-of-vncserver",level:3},{value:"Configuration for your desktops",id:"configuration-for-your-desktops",level:3},{value:"Budgie",id:"budgie",level:3},{value:"GNOME",id:"gnome",level:3},{value:"MATE",id:"mate",level:3},{value:"Plasma",id:"plasma",level:3}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tigervnc"},"TigerVNC"),(0,o.kt)("p",null,"TigerVNC is a high-performance implementation of the VNC protocol, which allows you to control/view desktops remotely over the internet."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"TigerVNC can be installed either from the Software Center or via terminal. The terminal command to run it is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo eopkg install tigervnc\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"initial-setup-of-vncserver"},"Initial setup of vncserver"),(0,o.kt)("p",null,"For the initial setup of vncserver for TigerVNC you have to open a terminal and run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vncserver\n")),(0,o.kt)("p",null,"While this setup you will be asked for setting up a ",(0,o.kt)("strong",{parentName:"p"},"password")," and if you'd like to setup a ",(0,o.kt)("strong",{parentName:"p"},"view-only mode"),", please do it accordingly your desire."),(0,o.kt)("p",null,"After the initial setup you have to stop the vncserver process, for this please type inside the terminal"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vncserver -kill :1\n")),(0,o.kt)("h3",{id:"configuration-for-your-desktops"},"Configuration for your desktops"),(0,o.kt)("p",null,"Every Desktop needs a different Setup, you find the vncserver config under",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME/.vnc/xstartup")," open the file with your desired editor and change bash script inside the file with the following information for your Desktop."),(0,o.kt)("h3",{id:"budgie"},"Budgie"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/bash\n\nunset SESSION_MANAGER\nunset DBUS_SESSION_BUS_ADDRESS\n\ngnome-session --session=budgie-desktop &\nbudgie-wm &\nbudgie-panel &\n")),(0,o.kt)("h3",{id:"gnome"},"GNOME"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/bash\n\nunset SESSION_MANAGER\nunset DBUS_SESSION_BUS_ADDRESS\nexport XKL_XMODMAP_DISABLE=1\n\ngnome-session &\ngnome-panel &\ngnome-settings-daemon &\nmetacity &\nnautilus &\n")),(0,o.kt)("h3",{id:"mate"},"MATE"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"#!/bin/bash\n\nunset SESSION_MANAGER\nunset DBUS_SESSION_BUS_ADDRESS\n\nmate-session &\nmate-panel &\n")),(0,o.kt)("h3",{id:"plasma"},"Plasma"),(0,o.kt)("p",null,"Plasma desktop is not supported at the moment. Please use the software ",(0,o.kt)("inlineCode",{parentName:"p"},"x11vnc")," for vncserver support on Plasma."))}d.isMDXComponent=!0}}]);