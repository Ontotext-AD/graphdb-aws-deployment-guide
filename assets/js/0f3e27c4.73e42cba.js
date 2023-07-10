"use strict";(self.webpackChunkgraphdb_aws_deployment_guide=self.webpackChunkgraphdb_aws_deployment_guide||[]).push([[8049],{4137:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>c});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),m=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=m(t.components);return r.createElement(p.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),s=m(n),g=a,c=s["".concat(p,".").concat(g)]||s[g]||d[g]||l;return n?r.createElement(c,i(i({ref:e},u),{},{components:n})):r.createElement(c,i({ref:e},u))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[s]="string"==typeof t?t:a,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3514:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=n(7462),a=(n(7294),n(4137));const l={sidebar_position:1},i="Sizing and required resources",o={unversionedId:"sizing/SIZ-001",id:"sizing/SIZ-001",title:"Sizing and required resources",description:"The best approach for correctly sizing the hardware resources is to estimate the number of explicit statements.",source:"@site/docs/sizing/SIZ-001.md",sourceDirName:"sizing",slug:"/sizing/SIZ-001",permalink:"/graphdb-aws-deployment-guide/docs/sizing/SIZ-001",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Sizing",permalink:"/graphdb-aws-deployment-guide/docs/category/sizing"},next:{title:"Deployment Assets",permalink:"/graphdb-aws-deployment-guide/docs/category/deployment-assets"}},p={},m=[],u={toc:m},s="wrapper";function d(t){let{components:e,...n}=t;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sizing-and-required-resources"},"Sizing and required resources"),(0,a.kt)("p",null,"The best approach for correctly sizing the hardware resources is to estimate the number of explicit statements. "),(0,a.kt)("p",null,"Statistically, an average dataset has 3:1 statements to unique RDF resources. "),(0,a.kt)("p",null,"The total number of statements determines the expected repository image size,\nand the number of unique resources affects the memory footprint required to initialize the repository."),(0,a.kt)("p",null,"The table below summarizes the recommended parameters for planning RAM and disk sizing:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Statements")," are the planned number of explicit statements."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Java heap (minimal)")," is the minimal recommend JVM heap required to operate the database controlled by -Xmx parameter."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Java heap (optimal)")," is the recommended JVM heap required to operate a database controlled by -Xmx parameter."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"OS")," is the recommended minimal space reserved for the operating system."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Total")," is the RAM required for the hardware configuration."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Repository")," image is the expected size on disk. For repositories with inference, use the total number of explicit + implicit statements.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Statements"),(0,a.kt)("th",{parentName:"tr",align:null},"Java heap (min)"),(0,a.kt)("th",{parentName:"tr",align:null},"Java heap (opt)"),(0,a.kt)("th",{parentName:"tr",align:null},"OS"),(0,a.kt)("th",{parentName:"tr",align:null},"Total"),(0,a.kt)("th",{parentName:"tr",align:null},"Repository image"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"100M"),(0,a.kt)("td",{parentName:"tr",align:null},"5GB"),(0,a.kt)("td",{parentName:"tr",align:null},"6GB"),(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"8GB"),(0,a.kt)("td",{parentName:"tr",align:null},"17GB")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"200M"),(0,a.kt)("td",{parentName:"tr",align:null},"8GB"),(0,a.kt)("td",{parentName:"tr",align:null},"12GB"),(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"15GB"),(0,a.kt)("td",{parentName:"tr",align:null},"34GB")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"500M"),(0,a.kt)("td",{parentName:"tr",align:null},"12GB"),(0,a.kt)("td",{parentName:"tr",align:null},"16GB"),(0,a.kt)("td",{parentName:"tr",align:null},"4"),(0,a.kt)("td",{parentName:"tr",align:null},"20GB"),(0,a.kt)("td",{parentName:"tr",align:null},"72GB")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1B"),(0,a.kt)("td",{parentName:"tr",align:null},"32GB"),(0,a.kt)("td",{parentName:"tr",align:null},"32GB"),(0,a.kt)("td",{parentName:"tr",align:null},"4"),(0,a.kt)("td",{parentName:"tr",align:null},"36GB"),(0,a.kt)("td",{parentName:"tr",align:null},"150GB")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2B"),(0,a.kt)("td",{parentName:"tr",align:null},"50GB"),(0,a.kt)("td",{parentName:"tr",align:null},"58GB"),(0,a.kt)("td",{parentName:"tr",align:null},"4"),(0,a.kt)("td",{parentName:"tr",align:null},"62GB"),(0,a.kt)("td",{parentName:"tr",align:null},"350GB")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"5B"),(0,a.kt)("td",{parentName:"tr",align:null},"64GB"),(0,a.kt)("td",{parentName:"tr",align:null},"68GB"),(0,a.kt)("td",{parentName:"tr",align:null},"4"),(0,a.kt)("td",{parentName:"tr",align:null},"72GB"),(0,a.kt)("td",{parentName:"tr",align:null},"720GB")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"10B"),(0,a.kt)("td",{parentName:"tr",align:null},"80GB"),(0,a.kt)("td",{parentName:"tr",align:null},"88GB"),(0,a.kt)("td",{parentName:"tr",align:null},"4"),(0,a.kt)("td",{parentName:"tr",align:null},"92GB"),(0,a.kt)("td",{parentName:"tr",align:null},"1450GB")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"20B"),(0,a.kt)("td",{parentName:"tr",align:null},"128GB"),(0,a.kt)("td",{parentName:"tr",align:null},"128GB"),(0,a.kt)("td",{parentName:"tr",align:null},"6"),(0,a.kt)("td",{parentName:"tr",align:null},"134GB"),(0,a.kt)("td",{parentName:"tr",align:null},"2900GB")))),(0,a.kt)("p",null,"Kindly note that these values are subject to updates. "),(0,a.kt)("p",null,"For the most up-to-date information, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://graphdb.ontotext.com/documentation/10.2/requirements.html#hardware-sizing"},"hardware sizing documentation.")))}d.isMDXComponent=!0}}]);