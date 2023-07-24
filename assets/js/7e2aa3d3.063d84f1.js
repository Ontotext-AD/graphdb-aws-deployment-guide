"use strict";(self.webpackChunkgraphdb_aws_deployment_guide=self.webpackChunkgraphdb_aws_deployment_guide||[]).push([[2571],{4137:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,m=p["".concat(s,".").concat(d)]||p[d]||y[d]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[p]="string"==typeof e?e:o,i[1]=u;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},780:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>a,metadata:()=>u,toc:()=>c});var r=n(7462),o=(n(7294),n(4137));const a={sidebar_position:8},i="Data Encryption Configurations",u={unversionedId:"security/DSEC-009",id:"security/DSEC-009",title:"Data Encryption Configurations",description:"EBS Volumes",source:"@site/docs/security/DSEC-009.md",sourceDirName:"security",slug:"/security/DSEC-009",permalink:"/graphdb-aws-deployment-guide/docs/security/DSEC-009",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Customer Sensitive Data",permalink:"/graphdb-aws-deployment-guide/docs/security/DSEC-008"},next:{title:"Deployments Involving more than a Single Element",permalink:"/graphdb-aws-deployment-guide/docs/security/DSEC-010"}},s={},c=[{value:"EBS Volumes",id:"ebs-volumes",level:2}],l={toc:c},p="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"data-encryption-configurations"},"Data Encryption Configurations"),(0,o.kt)("h2",{id:"ebs-volumes"},"EBS Volumes"),(0,o.kt)("p",null,"EBS volumes can be encrypted using the default AWS managed KMS key, or you can choose to encrypt the volume using a\nsymmetric customer managed key that you created."),(0,o.kt)("h1",{id:"s3-buckets"},"S3 Buckets"),(0,o.kt)("p",null,"When you configure default encryption for an Amazon S3 bucket, you can use any of the following types of encryption:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Server-side encryption with Amazon S3 managed keys (SSE-S3) (the default)"),(0,o.kt)("li",{parentName:"ul"},"Server-side encryption with AWS Key Management Service (AWS KMS) keys (SSE-KMS)"),(0,o.kt)("li",{parentName:"ul"},"Dual-layer server-side encryption with AWS KMS keys (DSSE-KMS)")),(0,o.kt)("p",null,"With the default option (SSE-S3), Amazon S3 uses one of the strongest block ciphers\u2014256-bit Advanced Encryption Standard (AES-256)\nto encrypt each object uploaded to the bucket.\nWith SSE-KMS, you have more control over your key.\nIf you use SSE-KMS, you can choose an AWS KMS customer managed key or use the default AWS managed key (aws/s3).\nSSE-KMS also provides you with an audit trail that shows when your KMS key was used and by whom.\nWith DSSE-KMS, Amazon S3 applies two individual layers of object-level encryption to satisfy compliance requirements\nfor highly regulated customers."))}y.isMDXComponent=!0}}]);