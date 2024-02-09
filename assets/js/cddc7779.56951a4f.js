"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[327],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=u(r),f=i,m=s["".concat(c,".").concat(f)]||s[f]||p[f]||a;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7134:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),i=(r(7294),r(3905));const a={title:"Arduino Basics",slug:"/arduino"},o="Arduino Basics",l={unversionedId:"Microcontroller/Microcontroller",id:"Microcontroller/Microcontroller",title:"Arduino Basics",description:"LED",source:"@site/docs/Microcontroller/Microcontroller.md",sourceDirName:"Microcontroller",slug:"/arduino",permalink:"/arduino",draft:!1,tags:[],version:"current",frontMatter:{title:"Arduino Basics",slug:"/arduino"},sidebar:"tutorialSidebar",previous:{title:"Wordpress",permalink:"/wordpress"}},c={},u=[{value:"LED",id:"led",level:2},{value:"LED auf dem Board",id:"led-auf-dem-board",level:2},{value:"Digitale Eing\xe4nge",id:"digitale-eing\xe4nge",level:2}],d={toc:u},s="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(s,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"arduino-basics"},"Arduino Basics"),(0,i.kt)("h2",{id:"led"},"LED"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Lange Seite => plus Pol => Pin"),(0,i.kt)("li",{parentName:"ul"},"Kurze Seite => minus Pol => GND")),(0,i.kt)("h2",{id:"led-auf-dem-board"},"LED auf dem Board"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"const int ledPin = 13;//the led attach to\n\nvoid setup()\n{ \n  pinMode(ledPin,OUTPUT);//initialize the ledPin as an output\n} \n")),(0,i.kt)("h2",{id:"digitale-eing\xe4nge"},"Digitale Eing\xe4nge"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"  pinMode(ledPin, OUTPUT); // LED als Output\n  pinMode(buttonApin, INPUT_PULLUP); // Der Standardwert f\xfcr den  Pin   ist   HIGH, au\xdfer er wurde durch  einen bet\xe4tigten  Schalter auf \u201eLOW\u201c geschaltet.\n  pinMode(buttonBpin, INPUT_PULLUP);  \n")),(0,i.kt)("p",null,"Da die Taster standardm\xe4\xdfig auf HIGH sind und erst beim klicken auf diese, werden sie auf LOW gestellt. Darauf wartet das IF-Statement und schaltet darauf hin die LED ein oder aus. In diesem Beispiel aus."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'if (digitalRead(buttonApin) == LOW) \n  {\n    digitalWrite(ledPin, LOW);\n    Serial.println("Licht aus");\n  }\n')))}p.isMDXComponent=!0}}]);