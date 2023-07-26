"use strict";(self.webpackChunkgraphdb_aws_deployment_guide=self.webpackChunkgraphdb_aws_deployment_guide||[]).push([[895],{4137:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5229:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(4137));const a={sidebar_position:4},i="Used IAM Roles and Policies",s={unversionedId:"security/DSEC-005",id:"security/DSEC-005",title:"Used IAM Roles and Policies",description:"It is up to your corporate policies to determine, which roles and policies to create for your",source:"@site/docs/security/DSEC-005.md",sourceDirName:"security",slug:"/security/DSEC-005",permalink:"/graphdb-aws-deployment-guide/docs/security/DSEC-005",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Public Resources",permalink:"/graphdb-aws-deployment-guide/docs/security/DSEC-004"},next:{title:"Created Keys",permalink:"/graphdb-aws-deployment-guide/docs/security/DSEC-006"}},l={},c=[{value:"Custom roles",id:"custom-roles",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"used-iam-roles-and-policies"},"Used IAM Roles and Policies"),(0,o.kt)("p",null,"It is up to your corporate policies to determine, which roles and policies to create for your\nenvironment. At a minimum, to deploy GraphDB Cluster on AWS, you will need to create an appropriate role to perform\nthe steps required in the ",(0,o.kt)("a",{parentName:"p",href:"../deployment-assets/DAS-001"},"deployment guide"),"."),(0,o.kt)("h2",{id:"custom-roles"},"Custom roles"),(0,o.kt)("p",null,"The Terraform script creates a couple of custom roles:\nNote that ",(0,o.kt)("inlineCode",{parentName:"p"},"ftr")," is a prefix set by the ",(0,o.kt)("inlineCode",{parentName:"p"},"resource_name_prefix")," variable."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ftr-graphdb-<data of creation>")," which includes the following policies: ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"AmazonSSMFullAccess:")," AWS managed policy, provides full access to Amazon SSM."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"AmazonInspector2FullAccess:")," AWS managed policy, provides full access to Amazon Inspector and access to other\nrelated services such as organizations."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"ftr-graphdb-auto-join:")," Custom policy required for forming a cluster: ",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Action": "ec2:DescribeInstances",\n            "Effect": "Allow",\n            "Resource": "*",\n            "Sid": ""\n        }\n    ]\n}\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"ftr-graphdb-s3-crud:")," Custom policy allowing storing of backups in a S3 bucket",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Action": [\n                "s3:ListBucket",\n                "s3:*Object"\n            ],\n            "Effect": "Allow",\n            "Resource": [\n                "arn:aws:s3:::ftr-graphdb-backup/*",\n                "arn:aws:s3:::ftr-graphdb-backup"\n            ],\n            "Sid": ""\n        }\n    ]\n}\n'))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"s3-bucket-monitoring")," which includes the following policies: ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"s3-bucket-monitoring:")," Custom policy allowing Lambda functions to call AWS services on your behalf.",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Sid": "SNSPublish",\n            "Effect": "Allow",\n            "Action": [\n                "sns:Publish"\n            ],\n            "Resource": "*"\n        },\n        {\n            "Sid": "S3GetBucketACLandPolicy",\n            "Effect": "Allow",\n            "Action": [\n                "s3:GetBucketAcl",\n                "s3:GetBucketPolicy"\n            ],\n            "Resource": "*"\n        },\n        {\n            "Sid": "S3PutBucketACLAccess",\n            "Effect": "Allow",\n            "Action": "s3:PutBucketAcl",\n            "Resource": "arn:aws:s3:::*"\n        },\n        {\n            "Sid": "LambdaBasicExecutionAccess",\n            "Effect": "Allow",\n            "Action": [\n                "logs:CreateLogGroup",\n                "logs:CreateLogStream",\n                "logs:PutLogEvents"\n            ],\n            "Resource": "*"\n        }\n    ]\n}\n')))))))}d.isMDXComponent=!0}}]);