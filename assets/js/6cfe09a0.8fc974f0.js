"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[1174],{49134:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var t=s(85893),r=s(11151);const i={title:"TigerVNC",summary:"A quick start guide to using TigerVNC on Solus"},o="TigerVNC",a={id:"user/software/networking/tigervnc",title:"TigerVNC",description:"TigerVNC is a high-performance implementation of the VNC protocol, which allows you to control/view desktops remotely over the internet.",source:"@site/docs/user/software/networking/tigervnc.md",sourceDirName:"user/software/networking",slug:"/user/software/networking/tigervnc",permalink:"/docs/user/software/networking/tigervnc",draft:!1,unlisted:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/software/networking/tigervnc.md",tags:[],version:"current",lastUpdatedAt:1705182321,formattedLastUpdatedAt:"Jan 13, 2024",frontMatter:{title:"TigerVNC",summary:"A quick start guide to using TigerVNC on Solus"},sidebar:"userSidebar",previous:{title:"Samba File Sharing",permalink:"/docs/user/software/networking/samba"},next:{title:"Wireshark",permalink:"/docs/user/software/networking/wireshark"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Initial setup of vncserver",id:"initial-setup-of-vncserver",level:3},{value:"Configuration for your desktops",id:"configuration-for-your-desktops",level:3},{value:"Budgie",id:"budgie",level:3},{value:"GNOME",id:"gnome",level:3},{value:"MATE",id:"mate",level:3},{value:"Plasma",id:"plasma",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"tigervnc",children:"TigerVNC"}),"\n",(0,t.jsx)(n.p,{children:"TigerVNC is a high-performance implementation of the VNC protocol, which allows you to control/view desktops remotely over the internet."}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.p,{children:"TigerVNC can be installed either from the Software Center or via terminal. The terminal command to run it is:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"sudo eopkg install tigervnc\n"})}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.h3,{id:"initial-setup-of-vncserver",children:"Initial setup of vncserver"}),"\n",(0,t.jsx)(n.p,{children:"For the initial setup of vncserver for TigerVNC you have to open a terminal and run:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"vncserver\n"})}),"\n",(0,t.jsxs)(n.p,{children:["While this setup you will be asked for setting up a ",(0,t.jsx)(n.strong,{children:"password"})," and if you'd like to setup a ",(0,t.jsx)(n.strong,{children:"view-only mode"}),", please do it accordingly your desire."]}),"\n",(0,t.jsx)(n.p,{children:"After the initial setup you have to stop the vncserver process, for this please type inside the terminal"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"vncserver -kill :1\n"})}),"\n",(0,t.jsx)(n.h3,{id:"configuration-for-your-desktops",children:"Configuration for your desktops"}),"\n",(0,t.jsxs)(n.p,{children:["Every Desktop needs a different Setup, you find the vncserver config under",(0,t.jsx)(n.code,{children:"$HOME/.vnc/xstartup"})," open the file with your desired editor and change bash script inside the file with the following information for your Desktop."]}),"\n",(0,t.jsx)(n.h3,{id:"budgie",children:"Budgie"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"#!/bin/bash\n\nunset SESSION_MANAGER\nunset DBUS_SESSION_BUS_ADDRESS\n\ngnome-session --session=budgie-desktop &\nbudgie-wm &\nbudgie-panel &\n"})}),"\n",(0,t.jsx)(n.h3,{id:"gnome",children:"GNOME"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"#!/bin/bash\n\nunset SESSION_MANAGER\nunset DBUS_SESSION_BUS_ADDRESS\nexport XKL_XMODMAP_DISABLE=1\n\ngnome-session &\ngnome-panel &\ngnome-settings-daemon &\nmetacity &\nnautilus &\n"})}),"\n",(0,t.jsx)(n.h3,{id:"mate",children:"MATE"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"#!/bin/bash\n\nunset SESSION_MANAGER\nunset DBUS_SESSION_BUS_ADDRESS\n\nmate-session &\nmate-panel &\n"})}),"\n",(0,t.jsx)(n.h3,{id:"plasma",children:"Plasma"}),"\n",(0,t.jsxs)(n.p,{children:["Plasma desktop is not supported at the moment. Please use the software ",(0,t.jsx)(n.code,{children:"x11vnc"})," for vncserver support on Plasma."]})]})}function u(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>o});var t=s(67294);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);