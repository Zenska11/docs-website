"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[193],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6744:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={title:"Festplatten l\xf6schen und formatieren",slug:"/festplattenLoeschenUndFormatieren"},l=void 0,s={unversionedId:"Homeserver/Linux und Proxmox/FestplattenLoeschen",id:"Homeserver/Linux und Proxmox/FestplattenLoeschen",title:"Festplatten l\xf6schen und formatieren",description:"Useful link",source:"@site/docs/Homeserver/Linux und Proxmox/FestplattenLoeschen.md",sourceDirName:"Homeserver/Linux und Proxmox",slug:"/festplattenLoeschenUndFormatieren",permalink:"/festplattenLoeschenUndFormatieren",draft:!1,tags:[],version:"current",frontMatter:{title:"Festplatten l\xf6schen und formatieren",slug:"/festplattenLoeschenUndFormatieren"},sidebar:"tutorialSidebar",previous:{title:"Backup and Restore",permalink:"/backupAndRestore"},next:{title:"LXC",permalink:"/LXC aufsetzen"}},i={},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://forum.proxmox.com/threads/create-zfs-fails-gui.49761/"},"Useful link")),(0,a.kt)("p",null,"Alle Festplatten anzeigen lassen:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ lsblk\n$ lsblk -o +MODEL,SERIAL //zeigt das Modell und die Seriennummer der Festplatten an\n$ ls /dev/disk/by-id  // zeigt die namen der Platten an welche im n\xe4chsten Schritt verwendet werden k\xf6nnen\n$ qm set <proxmoxID -> 150> -scsi1 /dev/disk/by-id/ata-ST4000VN008-2DR166_ZDHA052S // Meine 4TB Platte\n\n\n$ fdisk /dev/sda\n$ d\n$ p\n$ w\n")),(0,a.kt)("p",null,"Danach sollte noch ein Label gesetzt werden:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ parted mklabel "gps"\n')))}d.isMDXComponent=!0}}]);