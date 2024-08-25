"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[508],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,g=p["".concat(u,".").concat(m)]||p[m]||b[m]||i;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7342:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>b,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={title:"Gitlab-Runner",slug:"/gitlabrunner"},l="GitLab-Runner",o={unversionedId:"Homeserver/GitLab/gitlabrunner",id:"Homeserver/GitLab/gitlabrunner",title:"Gitlab-Runner",description:"Gitlab-Runner installieren",source:"@site/docs/Homeserver/GitLab/gitlabrunner.md",sourceDirName:"Homeserver/GitLab",slug:"/gitlabrunner",permalink:"/gitlabrunner",draft:!1,tags:[],version:"current",frontMatter:{title:"Gitlab-Runner",slug:"/gitlabrunner"},sidebar:"tutorialSidebar",previous:{title:"GitHub Pages",permalink:"/gitHubPages"},next:{title:"Home Assistent VM",permalink:"/homeAssistentVM"}},u={},s=[{value:"Gitlab-Runner installieren",id:"gitlab-runner-installieren",level:2},{value:"GitLab-Runner einrichten",id:"gitlab-runner-einrichten",level:2}],c={toc:s},p="wrapper";function b(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"gitlab-runner"},"GitLab-Runner"),(0,a.kt)("h2",{id:"gitlab-runner-installieren"},"Gitlab-Runner installieren"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/runner/install/linux-repository.html"},"GitLab Doku"),"\nAdd the official GitLab repository:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -L "https://packages.gitlab.com/install/repositories/runner/gitlab-runner/script.deb.sh" | sudo bash\n')),(0,a.kt)("p",null,"Install the latest version of GitLab Runner:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"apt-get install gitlab-runner\n")),(0,a.kt)("h2",{id:"gitlab-runner-einrichten"},"GitLab-Runner einrichten"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/runner/"},"GitLab")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In GitLab in ein Repository gehen"),(0,a.kt)("li",{parentName:"ol"},"Settings -> CICD -> Runners -> New Project Runner -> OperatinSystem = Linux"),(0,a.kt)("li",{parentName:"ol"},"Root-Ordner braucht folgende Berechtigungen, damit der GitLab-Runner die Befehle im Rootverzeichnis ausf\xfchren kann")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd ..\nchmod 777 root\n")))}b.isMDXComponent=!0}}]);