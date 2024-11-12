"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6],{54904:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var o=t(85893),s=t(11151),a=t(93356);const i={title:"Anny: Assisting AutoGen Devs Via AutoGen",authors:["gagb"],tags:["AutoGen"]},r=void 0,u={permalink:"/autogen/blog/2024/02/02/AutoAnny",source:"@site/blog/2024-02-02-AutoAnny/index.mdx",title:"Anny: Assisting AutoGen Devs Via AutoGen",description:"Anny is a Discord bot powered by AutoGen to help AutoGen's Discord server.",date:"2024-02-02T00:00:00.000Z",formattedDate:"February 2, 2024",tags:[{label:"AutoGen",permalink:"/autogen/blog/tags/auto-gen"}],readingTime:1.61,hasTruncateMarker:!1,authors:[{name:"Gagan Bansal",title:"Senior Researcher at Microsoft Research",url:"https://www.linkedin.com/in/gagan-bansal/",imageURL:"https://github.com/gagb.png",key:"gagb"}],frontMatter:{title:"Anny: Assisting AutoGen Devs Via AutoGen",authors:["gagb"],tags:["AutoGen"]},unlisted:!1,prevItem:{title:"FSM Group Chat -- User-specified agent transitions",permalink:"/autogen/blog/2024/02/11/FSM-GroupChat"},nextItem:{title:"AutoGen with Custom Models: Empowering Users to Use Their Own Inference Mechanism",permalink:"/autogen/blog/2024/01/26/Custom-Models"}},l={authorsImageUrls:[void 0]},d=[{value:"TL;DR",id:"tldr",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Current Version of Anny",id:"current-version-of-anny",level:2},{value:"It&#39;s Not Just for AutoGen",id:"its-not-just-for-autogen",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,o.jsx)("img",{src:a.Z,alt:"AutoAnny Logo",style:{width:"250px"}})}),"\n",(0,o.jsx)("p",{align:"center",children:(0,o.jsx)("em",{children:"Anny is a Discord bot powered by AutoGen to help AutoGen's Discord server."})}),"\n",(0,o.jsx)(n.h2,{id:"tldr",children:"TL;DR"}),"\n",(0,o.jsxs)(n.p,{children:["We are adding a new sample app called Anny-- a simple Discord bot powered\nby AutoGen that's intended to assist AutoGen Devs. See ",(0,o.jsx)(n.a,{href:"https://github.com/ag2ai/build-with-autogen/tree/main/samples/apps/auto-anny",children:(0,o.jsx)(n.code,{children:"samples/apps/auto-anny"})})," for details."]}),"\n",(0,o.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsx)(n.p,{children:"Over the past few months, AutoGen has experienced large growth in number of users and number of community requests and feedback.\nHowever, accommodating this demand and feedback requires manually sifting through issues, PRs, and discussions on GitHub, as well as managing messages\nfrom AutoGen's 14000+ community members on Discord. There are many tasks that AutoGen's developer community has to perform everyday,\nbut here are some common ones:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Answering questions"}),"\n",(0,o.jsx)(n.li,{children:"Recognizing and prioritizing bugs and features"}),"\n",(0,o.jsx)(n.li,{children:"Maintaining responsiveness for our incredible community"}),"\n",(0,o.jsx)(n.li,{children:"Tracking growth"}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["This requires a significant amount of effort. Agentic-workflows and interfaces promise adding\nimmense value-added automation for many tasks, so we thought ",(0,o.jsx)(n.em,{children:"why don't we use AutoGen to make\nour lives easier?!"})," So we're turning to automation to help us and allow\nus to focus on what's most critical."]}),"\n",(0,o.jsx)(n.h2,{id:"current-version-of-anny",children:"Current Version of Anny"}),"\n",(0,o.jsx)(n.p,{children:"The current version of Anny is pretty simple -- it uses the Discord API and AutoGen to enable a bot\nthat can respond to a set of commands."}),"\n",(0,o.jsxs)(n.p,{children:["For example, it supports commands like ",(0,o.jsx)(n.code,{children:"/heyanny help"})," for command listing, ",(0,o.jsx)(n.code,{children:"/heyanny ghstatus"})," for\nGitHub activity summary, ",(0,o.jsx)(n.code,{children:"/heyanny ghgrowth"})," for GitHub repo growth indicators, and ",(0,o.jsx)(n.code,{children:"/heyanny ghunattended"})," for listing unattended issues and PRs. Most of these commands use multiple AutoGen agents to accomplish these task."]}),"\n",(0,o.jsxs)(n.p,{children:["To use Anny, please follow instructions in ",(0,o.jsx)(n.a,{href:"https://github.com/ag2ai/build-with-autogen/tree/main/samples/apps/auto-anny",children:(0,o.jsx)(n.code,{children:"samples/apps/auto-anny"})}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"its-not-just-for-autogen",children:"It's Not Just for AutoGen"}),"\n",(0,o.jsx)(n.p,{children:"If you're an open-source developer managing your own project, you can probably relate to our challenges. We invite you to check out Anny and contribute to its development and roadmap."})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},93356:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/AutoAnnyLogo-cf10eabc29b77481aa7928bd3af6d995.jpg"},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>i});var o=t(67294);const s={},a=o.createContext(s);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);