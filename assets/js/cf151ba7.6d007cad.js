"use strict";(self.webpackChunkgraphdb_aws_deployment_guide=self.webpackChunkgraphdb_aws_deployment_guide||[]).push([[798],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2994:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(4137));const i={sidebar_position:3},o="Managing Licenses",s={unversionedId:"routine-maintenance/RM-003",id:"routine-maintenance/RM-003",title:"Managing Licenses",description:"Obtain a License",source:"@site/docs/routine-maintenance/RM-003.md",sourceDirName:"routine-maintenance",slug:"/routine-maintenance/RM-003",permalink:"/graphdb-aws-deployment-guide/docs/routine-maintenance/RM-003",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Software Patches and Upgrades",permalink:"/graphdb-aws-deployment-guide/docs/routine-maintenance/RM-002"},next:{title:"Managing AWS service limits",permalink:"/graphdb-aws-deployment-guide/docs/routine-maintenance/RM-004"}},l={},c=[{value:"Obtain a License",id:"obtain-a-license",level:2},{value:"Set Up Your License",id:"set-up-your-license",level:2},{value:"Via the Terraform Script",id:"via-the-terraform-script",level:3},{value:"Via the GraphDB Workbench",id:"via-the-graphdb-workbench",level:3}],p={toc:c},u="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"managing-licenses"},"Managing Licenses"),(0,a.kt)("h2",{id:"obtain-a-license"},"Obtain a License"),(0,a.kt)("p",null,"After purchasing the GraphDB AMI from the AWS Marketplace, the client will need to obtain a license to activate and use the software.\nThe license is provided by an Ontotext representative as part of the post-purchase process."),(0,a.kt)("p",null,"To obtain the license, the client should follow these steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Contact Ontotext Representative:")," Reach out to the designated Ontotext representative who will assist you with the license acquisition process.\nYou can contact the representative through e-mail at ",(0,a.kt)("a",{parentName:"li",href:"mailto:salesteam@ontotext.com"},"salesteam@ontotext.com"),", or by using our ",(0,a.kt)("a",{parentName:"li",href:"https://www.ontotext.com/contact/"},"contact form"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Provide Purchase Information:")," Provide the necessary information related to your GraphDB AMI purchase from the AWS Marketplace.\nThis includes details such as the AWS account used for the purchase, the specific AMI identifier, and any relevant purchase order or transaction ID."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"License Verification:")," The Ontotext representative will verify your purchase information and validate the eligibility for a license.\nThey may require additional details or documentation for verification purposes."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"License Generation:")," Once the purchase is verified, the Ontotext representative will generate a license for your GraphDB deployment.\nThe license is specific to your AWS account and the purchased AMI."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"License Delivery:")," The representative will provide you with the license file or license key needed to activate GraphDB.\nThe delivery method can vary depending on the arrangement with the representative.\nIt could be sent via email or shared through a secure file transfer method.")),(0,a.kt)("p",null,"By following these steps and working closely with the Ontotext representative,\nyou will be able to obtain and activate the necessary license for your GraphDB AMI purchased from the AWS Marketplace."),(0,a.kt)("h2",{id:"set-up-your-license"},"Set Up Your License"),(0,a.kt)("p",null,"You can provide GraphDB's license file to the Terraform script or import it from GraphDB's Workbench. "),(0,a.kt)("h3",{id:"via-the-terraform-script"},"Via the Terraform Script"),(0,a.kt)("p",null,"Create a ",(0,a.kt)("inlineCode",{parentName:"p"},".tfvars")," file to define your input variables.\nFor example, create a file named ",(0,a.kt)("inlineCode",{parentName:"p"},"variables.tfvars"),", include ",(0,a.kt)("inlineCode",{parentName:"p"},"graphdb_license_path")," variable with the path to the\nlicense as value:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'aws_region = "eu-central-1"\nazs        = [\n  "eu-central-1a",\n  "eu-central-1b",\n  "eu-central-1c"\n]\ngraphdb_license_path = "/home/license/graphdb.license"\n')),(0,a.kt)("h3",{id:"via-the-graphdb-workbench"},"Via the GraphDB Workbench"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Access the GraphDB Workbench"),(0,a.kt)("li",{parentName:"ul"},"Go to Setup \u2023 License \u2023 Set new license."),(0,a.kt)("li",{parentName:"ul"},"Select the license file and register it.")),(0,a.kt)("p",null,"For detailed instructions on setting up your license, refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://graphdb.ontotext.com/documentation/10.3/getting-started.html#set-up-your-license"},"GraphDB documentation"),"."),(0,a.kt)("p",null,"It is important to ensure that you have a valid license to comply with the terms and conditions of using GraphDB.\nMake sure to keep your license file secure and up to date to continue using GraphDB without any interruptions."),(0,a.kt)("p",null,"If you encounter any issues or have further questions regarding licenses, don't hesitate to reach out to the GraphDB support team\nor consult the official documentation for assistance."))}h.isMDXComponent=!0}}]);