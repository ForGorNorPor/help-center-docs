"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[9451],{9029:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var t=n(5893),r=n(1151);const o={title:"Sound",summary:"Configuration of sound systems on Solus"},i="Sound",u={id:"user/software/sound/index",title:"Sound",description:"Solus comes with PulseAudio configured by default.",source:"@site/docs/user/software/sound/index.md",sourceDirName:"user/software/sound",slug:"/user/software/sound/",permalink:"/docs/user/software/sound/",draft:!1,unlisted:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/user/software/sound/index.md",tags:[],version:"current",lastUpdatedAt:1704502227,formattedLastUpdatedAt:"Jan 6, 2024",frontMatter:{title:"Sound",summary:"Configuration of sound systems on Solus"},sidebar:"userSidebar",previous:{title:"XRDP",permalink:"/docs/user/software/networking/xrdp"},next:{title:"Third Party",permalink:"/docs/user/software/third-party/"}},d={},l=[{value:"PipeWire",id:"pipewire",level:2}];function a(e){const s={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"sound",children:"Sound"}),"\n",(0,t.jsx)(s.p,{children:"Solus comes with PulseAudio configured by default.\nIt is possible to switch to PipeWire manually using the instructions below."}),"\n",(0,t.jsx)(s.h2,{id:"pipewire",children:"PipeWire"}),"\n",(0,t.jsx)(s.p,{children:"PipeWire is a multimedia framework aimed to replace PulseAudio.\nInstalling it can be done by installing PipeWire and WirePlumber:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-console",children:"sudo eopkg it pipewire wireplumber\n"})}),"\n",(0,t.jsx)(s.p,{children:"Subsequently enable the user services, and disable PulseAudio (without sudo!):"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-console",children:"systemctl --user enable --now pipewire.socket pipewire-pulse.socket wireplumber.service\nsystemctl --user mask app-pulseaudio@autostart.service\n"})}),"\n",(0,t.jsx)(s.p,{children:"You should now be using PipeWire. This can be verified using:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"pactl info | grep '^Server Name'\n"})}),"\n",(0,t.jsx)(s.p,{children:"Which should show something like the following:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"Server Name: PulseAudio (on PipeWire 0.3.71)\n"})}),"\n",(0,t.jsx)(s.p,{children:"Try logging out and in again if your system has not switched yet."})]})}function c(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>u,a:()=>i});var t=n(7294);const r={},o=t.createContext(r);function i(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function u(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);