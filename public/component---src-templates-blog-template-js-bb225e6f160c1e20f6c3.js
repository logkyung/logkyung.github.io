"use strict";(self.webpackChunklogkyung=self.webpackChunklogkyung||[]).push([[637],{952:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=a(7294),r=a(7776),s=a(3432),c=a(7087);var l=function(e){let{post:t,viewCount:a}=e;return n.createElement("header",{className:"post-header"},t.emoji&&n.createElement("div",{className:"emoji"},t.emoji),n.createElement("div",{className:"info"},n.createElement("div",{className:"categories"},t.categories.map((e=>n.createElement(c.Link,{className:"category",key:e,to:"/posts/"+e},e))))),n.createElement("h1",{className:"title"},t.title),n.createElement("div",{className:"info"},n.createElement("div",{className:"author"},"posted by ",n.createElement("strong",null,t.author),",")," ",t.date,a&&" · "+a+" views"))};var i=function(e){let{prevPost:t,nextPost:a}=e;return n.createElement("div",{className:"post-navigator"},n.createElement("div",{className:"post-navigator-card-wrapper"},a&&n.createElement(c.Link,{className:"post-card prev",key:a.id,to:a.slug},n.createElement("div",{className:"direction"},"이전 글"),n.createElement("div",{className:"title"},a.title))),n.createElement("div",{className:"post-navigator-card-wrapper"},t&&n.createElement(c.Link,{className:"post-card next",key:t.id,to:t.slug},n.createElement("div",{className:"direction"},"다음 글"),n.createElement("div",{className:"title"},t.title))))},o=a(8154);var m=function(e){let{html:t}=e;return n.createElement("div",{className:"post-content"},n.createElement("div",{className:"markdown",dangerouslySetInnerHTML:{__html:t}}))};var u=function(e){let{repo:t,path:a}=e;const r=(0,n.createRef)(),s=(0,n.useRef)(!1);return(0,n.useEffect)((()=>{if(!r.current||s.current)return;const e=localStorage.getItem("isDarkMode"),a=document.createElement("script"),n={src:"https://utteranc.es/client.js",repo:t,branch:"master",theme:JSON.parse(e)?"photon-dark":"github-light",label:"comment",async:!0,"issue-term":"pathname",crossorigin:"anonymous"};Object.keys(n).forEach((e=>{a.setAttribute(e,n[e])})),r.current.appendChild(a),s.current=!0}),[t,r,a]),n.createElement("div",{className:"utterances",ref:r})};var d=function(e){var t,a;let{data:c}=e;const{0:d,1:p}=(0,n.useState)(null),v=new o.Z(c.cur),E=c.prev&&new o.Z(c.prev),h=c.next&&new o.Z(c.next),{siteUrl:f,comments:g}=null===(t=c.site)||void 0===t?void 0:t.siteMetadata,N=null==g||null===(a=g.utterances)||void 0===a?void 0:a.repo;return(0,n.useEffect)((()=>{if(!f)return;const e=f.replace(/(^\w+:|^)\/\//,""),t=v.slug.replace(/\//g,"");fetch("https://api.countapi.xyz/hit/"+e+"/"+t).then((async e=>{const t=await e.json();p(t.value)}))}),[f,v.slug]),n.createElement(r.Z,null,n.createElement(s.Z,{title:null==v?void 0:v.title,description:null==v?void 0:v.excerpt}),n.createElement(l,{post:v,viewCount:d}),n.createElement(m,{html:v.html}),n.createElement(i,{prevPost:E,nextPost:h}),N&&n.createElement(u,{repo:N,path:v.slug}))}}}]);
//# sourceMappingURL=component---src-templates-blog-template-js-bb225e6f160c1e20f6c3.js.map