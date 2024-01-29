"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[1539],{5436:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=s(85893),n=s(11151);const a={title:"eopkg is dead, long live eopkg",slug:"eopkg-is-dead-long-live-eopkg",authors:[{name:"David Harder",title:"Solus Staff",url:"https://github.com/davidjharder",image_url:"https://avatars.githubusercontent.com/u/23007135?v=4"}],tags:["eopkg","devlog","moss","solus"],hide_table_of_contents:!1},i=void 0,l={permalink:"/blog/eopkg-is-dead-long-live-eopkg",source:"@site/devlog/2024-01-19-eopkg-is-dead.md",title:"eopkg is dead, long live eopkg",description:"Close watchers of our packages repository may have noticed some strange looking items:",date:"2024-01-19T00:00:00.000Z",formattedDate:"January 19, 2024",tags:[{label:"eopkg",permalink:"/blog/tags/eopkg"},{label:"devlog",permalink:"/blog/tags/devlog"},{label:"moss",permalink:"/blog/tags/moss"},{label:"solus",permalink:"/blog/tags/solus"}],readingTime:1.64,hasTruncateMarker:!0,authors:[{name:"David Harder",title:"Solus Staff",url:"https://github.com/davidjharder",image_url:"https://avatars.githubusercontent.com/u/23007135?v=4",imageURL:"https://avatars.githubusercontent.com/u/23007135?v=4"}],frontMatter:{title:"eopkg is dead, long live eopkg",slug:"eopkg-is-dead-long-live-eopkg",authors:[{name:"David Harder",title:"Solus Staff",url:"https://github.com/davidjharder",image_url:"https://avatars.githubusercontent.com/u/23007135?v=4",imageURL:"https://avatars.githubusercontent.com/u/23007135?v=4"}],tags:["eopkg","devlog","moss","solus"],hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"Don't call me MATE, pal!",permalink:"/blog/dont-call-me-mate-pal"},nextItem:{title:"Welcome to the Solus Devlog",permalink:"/blog/welcome-solus-devlog-v1"}},r={authorsImageUrls:[void 0]},c=[];function h(e){const t={a:"a",code:"code",em:"em",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["Close watchers of our ",(0,o.jsx)(t.a,{href:"https://github.com/getsolus/packages",children:"packages repository"})," may have noticed some strange looking items:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://github.com/getsolus/packages/pull/1305",children:"Initial inclusion of eopkg4-bin"})}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://github.com/getsolus/packages/issues/1316",children:"Testing the eopkg4-bin package"})," Warning: Minions GIF"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"It's a long story."}),"\n",(0,o.jsxs)(t.p,{children:["Our package manager ",(0,o.jsx)(t.code,{children:"eopkg"})," is written in Python2. Python2 was originally planned to hit end-of-life all the way back in 2015! So Solus contributors past and present have wrestled with three thorny issues:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Do we really want to just port ",(0,o.jsx)(t.code,{children:"eopkg"})," to python3? Surely we could build something newer and shinier."]}),"\n",(0,o.jsxs)(t.li,{children:["How exactly do we want to port ",(0,o.jsx)(t.code,{children:"eopkg"})," to Python3? (We'll call this ported version ",(0,o.jsx)(t.code,{children:"eopkg3"})," for short)"]}),"\n",(0,o.jsxs)(t.li,{children:["How do make sure ",(0,o.jsx)(t.code,{children:"eopkg3"})," works even if something goes wrong with the Python3 libraries on someone's machine?"]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Here's the plan to solve this: Ikey and friends over at Serpent OS are actively building a new package manager ",(0,o.jsx)(t.a,{href:"https://github.com/serpent-os/moss",children:(0,o.jsx)(t.em,{children:"moss"})})," that we are excited about. And they're building it with Solus in mind as an eventual user. This will be our fix for the first problem. In the meantime, we're taking a pragmatic approach to the last two issues so that (frankly) we can do more exciting things."]}),"\n",(0,o.jsxs)(t.p,{children:["Sheepman, Livingsilver, and others completed a ",(0,o.jsx)(t.a,{href:"https://github.com/getsolus/eopkg/commits/python3",children:"direct Python3 port"}),", which we never expect our users to actually run directly like a traditional Python program. Instead, that port will be compiled into a ",(0,o.jsx)(t.em,{children:"binary"})," using ",(0,o.jsx)(t.a,{href:"https://nuitka.net/doc/download.html",children:"nuitka"}),". We're calling this compiled ",(0,o.jsx)(t.code,{children:"eopkg3"})," binary ",(0,o.jsx)(t.code,{children:"eopkg4-bin"})," for now. Critically, this binary will have ",(0,o.jsx)(t.em,{children:"no dependencies"})," other than ",(0,o.jsx)(t.code,{children:"libc"}),". If we can successfully swap ",(0,o.jsx)(t.code,{children:"eopkg"})," with ",(0,o.jsx)(t.code,{children:"eopkg4-bin"})," on user's machines, then we've solved the last issue: Python3 can be updated without worrying about also wrecking the package manager. Got it?"]}),"\n",(0,o.jsxs)(t.p,{children:["But what about Python2? Well, now that Evan and Joey have seen off a ",(0,o.jsx)(t.a,{href:"https://getsol.us/2024/01/08/solus-4-5-released/",children:"successful ISO release"})," with a ",(0,o.jsx)(t.code,{children:"calamares"})," based installer, we can cross ",(0,o.jsx)(t.code,{children:"os-installer"})," ",(0,o.jsx)(t.a,{href:"https://github.com/getsolus/packages/issues/270",children:"off the list"}),". And ",(0,o.jsx)(t.code,{children:"eopkg4-bin"})," will let us cross off a whole bunch more. The rest of that list is a story for another day."]})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>l,a:()=>i});var o=s(67294);const n={},a=o.createContext(n);function i(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);