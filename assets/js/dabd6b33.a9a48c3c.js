"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[1059],{41129:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>a,default:()=>g,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var n=t(85893),i=t(11151);const s={title:"Eopkg Configuration",summary:"Modifying the eopkg configuration"},a="Eopkg Configuration",r={id:"packaging/advanced-config/eopkg-configuration",title:"Eopkg Configuration",description:"The eopkg configuration file changes how eopkg works. The first section in the config has settings for the process of building a package. The second section allows you to configure the directories that eopkg uses for various operations. Lastly, the general section contains settings for the general operation of eopkg.",source:"@site/docs/packaging/advanced-config/eopkg-configuration.md",sourceDirName:"packaging/advanced-config",slug:"/packaging/advanced-config/eopkg-configuration",permalink:"/docs/packaging/advanced-config/eopkg-configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/packaging/advanced-config/eopkg-configuration.md",tags:[],version:"current",lastUpdatedAt:1709319172,formattedLastUpdatedAt:"Mar 1, 2024",frontMatter:{title:"Eopkg Configuration",summary:"Modifying the eopkg configuration"},sidebar:"packagingSidebar",previous:{title:"Advanced Configuration",permalink:"/docs/category/advanced-configuration"},next:{title:"Local Repository",permalink:"/docs/packaging/advanced-config/local-repository"}},c={},d=[{value:"Copying the default configuration",id:"copying-the-default-configuration",level:2},{value:"Notable keys",id:"notable-keys",level:2},{value:"Restoring defaults",id:"restoring-defaults",level:2}];function l(e){const o={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"eopkg-configuration",children:"Eopkg Configuration"}),"\n",(0,n.jsxs)(o.p,{children:["The eopkg configuration file changes how eopkg works. The first section in the config has settings for the process of building a package. The second section allows you to configure the directories that eopkg uses for various operations. Lastly, the ",(0,n.jsx)(o.code,{children:"general"})," section contains settings for the general operation of eopkg."]}),"\n",(0,n.jsx)(o.h2,{id:"copying-the-default-configuration",children:"Copying the default configuration"}),"\n",(0,n.jsxs)(o.p,{children:["Solus aims to be a stateless operating system, so the default configuration file for eopkg is saved to ",(0,n.jsx)(o.code,{children:"/usr/share/defaults/eopkg/eopkg.conf"}),". To modify the configuration, you'll have to start by copying the default configuration file into ",(0,n.jsx)(o.code,{children:"/etc/eopkg"})," so it will override the default file:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-bash",children:"sudo mkdir -p /etc/eopkg && sudo cp /usr/share/defaults/eopkg/eopkg.conf /etc/eopkg/eopkg.conf\n"})}),"\n",(0,n.jsx)(o.p,{children:"Once the file has been copied, you can edit it with your text editor of choice."}),"\n",(0,n.jsx)(o.h2,{id:"notable-keys",children:"Notable keys"}),"\n",(0,n.jsx)(o.p,{children:"Most keys in the config you'll probably want to leave untouched. However, some are useful to know about:"}),"\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Key"}),(0,n.jsx)(o.th,{children:"Description"}),(0,n.jsx)(o.th,{children:"Values"})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"generateDebug"}),(0,n.jsx)(o.td,{children:"Whether or not debug symbol subpackages will be generated"}),(0,n.jsx)(o.td,{children:"True / False"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"jobs"}),(0,n.jsx)(o.td,{children:"How many building jobs to use when compiling the source"}),(0,n.jsx)(o.td,{children:"auto / number"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"retry_attempts"}),(0,n.jsx)(o.td,{children:"How many times to retry downloading a package during install"}),(0,n.jsx)(o.td,{children:"number"})]})]})]}),"\n",(0,n.jsx)(o.h2,{id:"restoring-defaults",children:"Restoring defaults"}),"\n",(0,n.jsxs)(o.p,{children:["If at any time you want to go back to the default configuration, simply remove the config file in ",(0,n.jsx)(o.code,{children:"/etc/eopkg"}),"."]})]})}function g(e={}){const{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},11151:(e,o,t)=>{t.d(o,{Z:()=>r,a:()=>a});var n=t(67294);const i={},s=n.createContext(i);function a(e){const o=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);