"use strict";(self.webpackChunkgraphdb_aws_deployment_guide=self.webpackChunkgraphdb_aws_deployment_guide||[]).push([[9789],{4137:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9034:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(7462),a=(t(7294),t(4137));const o={sidebar_position:1},i="Handling Fault Conditions",s={unversionedId:"emergency-maintenance/EMER-001",id:"emergency-maintenance/EMER-001",title:"Handling Fault Conditions",description:"When GraphDB is deployed in a cluster, it utilizes the Raft consensus algorithm",source:"@site/docs/emergency-maintenance/EMER-001.md",sourceDirName:"emergency-maintenance",slug:"/emergency-maintenance/EMER-001",permalink:"/graphdb-aws-deployment-guide/docs/emergency-maintenance/EMER-001",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Emergency Maintenance",permalink:"/graphdb-aws-deployment-guide/docs/category/emergency-maintenance"},next:{title:"Recovering the Cluster",permalink:"/graphdb-aws-deployment-guide/docs/emergency-maintenance/EMER-002"}},c={},l=[],p={toc:l},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"handling-fault-conditions"},"Handling Fault Conditions"),(0,a.kt)("p",null,"When GraphDB is deployed in a cluster, it utilizes the ",(0,a.kt)("a",{parentName:"p",href:"https://raft.github.io/"},"Raft consensus algorithm"),"\nto effectively manage multiple GraphDB nodes and ensure data replication across all nodes.\nThis enables high availability and fault tolerance in the cluster."),(0,a.kt)("p",null,"In a GraphDB cluster, if a fault occurs in one of the nodes,\nthe remaining nodes in the cluster will continue to function and serve requests.\nThe fault-tolerant nature of the cluster ensures that the system remains operational even in the presence of node failures."),(0,a.kt)("p",null,"However, if a node fails and does not recover within a reasonable timeframe,\nplease refer to ",(0,a.kt)("a",{parentName:"p",href:"EMER-002"},"Recovering the Cluster"),"\nIf you cannot recover the cluster, we recommend taking immediate action by opening a support case.\nOur support team is dedicated to assisting you in diagnosing and resolving any issues that may arise in your GraphDB cluster."),(0,a.kt)("p",null,"To receive support, please refer to ",(0,a.kt)("a",{parentName:"p",href:"../support/SUP-001"},"How to receive support")))}d.isMDXComponent=!0}}]);