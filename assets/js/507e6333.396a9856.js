"use strict";(self.webpackChunkgraphdb_aws_deployment_guide=self.webpackChunkgraphdb_aws_deployment_guide||[]).push([[4836],{4137:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return t?r.createElement(g,o(o({ref:n},c),{},{components:t})):r.createElement(g,o({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1433:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=t(7462),a=(t(7294),t(4137));const i={sidebar_position:2},o="Required Skills",s={unversionedId:"prerequisites-and-requirements/PRQ-002",id:"prerequisites-and-requirements/PRQ-002",title:"Required Skills",description:"To successfully deploy GraphDB on AWS EC2, the following skills and knowledge are typically required:",source:"@site/docs/prerequisites-and-requirements/PRQ-002.md",sourceDirName:"prerequisites-and-requirements",slug:"/prerequisites-and-requirements/PRQ-002",permalink:"/graphdb-aws-deployment-guide/docs/prerequisites-and-requirements/PRQ-002",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Technical Requirements",permalink:"/graphdb-aws-deployment-guide/docs/prerequisites-and-requirements/PRQ-001"},next:{title:"Additional Prerequisites",permalink:"/graphdb-aws-deployment-guide/docs/prerequisites-and-requirements/PRQ-003"}},l={},p=[],c={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"required-skills"},"Required Skills"),(0,a.kt)("p",null,"To successfully deploy GraphDB on AWS EC2, the following skills and knowledge are typically required:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"AWS Fundamentals:")," Familiarity with Amazon Web Services (AWS) and understanding of its core concepts,\nsuch as EC2 instances, security groups, VPCs and IAM roles.\nKnowledge of how to navigate the AWS Management Console and interact with AWS services is essential.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"EC2 Instance Management:")," Proficiency in creating and managing EC2 instances.\nThis includes selecting the appropriate instance type, configuring security settings, managing storage (EBS volumes),\nand understanding EC2 instance lifecycle management.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Networking and Security:")," Understanding of networking concepts in AWS, including VPC (Virtual Private Cloud) configuration,\nsubnets, routing tables, and security groups. Knowledge of how to set up inbound and outbound traffic rules to allow communication with GraphDB.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Linux Administration:")," Proficiency in Linux command-line interface (CLI) and basic administration tasks.\nThis includes SSH access to EC2 instances, navigating the file system, managing permissions, installing packages, and configuring system settings.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Database Management:")," Knowledge of GraphDB and its deployment requirements.\nUnderstanding of how to configure GraphDB settings, including database storage, memory allocation, and repository creation.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Database Backup and Recovery:")," Familiarity with backup and recovery strategies for GraphDB on AWS.\nKnowledge of AWS services like Amazon S3 for data backups and restoration processes.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Monitoring and Troubleshooting:")," Proficiency in monitoring the health and performance of GraphDB instances on AWS.\nUnderstanding of logging, monitoring and troubleshooting techniques using AWS CloudWatch, EC2 instance logs, and GraphDB diagnostic tools.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"High Availability and Scalability:")," Knowledge of implementing high availability and scalability for GraphDB on AWS.\nThis may involve using features like EC2 Auto Scaling, load balancers, and multi-Availability Zone (AZ) deployments.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Infrastructure as Code (IaC):")," Familiarity with Infrastructure as Code principles and tools like AWS CloudFormation or Terraform.\nThis enables automating the provisioning and configuration of GraphDB infrastructure on AWS.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Security Best Practices:")," Understanding of security best practices for AWS deployments, including data encryption,\naccess controls, identity and access management, and compliance considerations."))),(0,a.kt)("p",null,"It's important to note that deploying GraphDB on AWS EC2 requires a combination of skills in AWS infrastructure management, database administration, and system troubleshooting. Acquiring these skills may involve hands-on experience, self-study, online resources, and formal training programs provided by AWS or other educational platforms."))}d.isMDXComponent=!0}}]);