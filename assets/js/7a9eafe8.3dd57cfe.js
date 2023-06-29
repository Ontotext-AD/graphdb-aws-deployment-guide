"use strict";(self.webpackChunkgraphdb_aws_deployment_guide=self.webpackChunkgraphdb_aws_deployment_guide||[]).push([[4230],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(a),k=r,m=c["".concat(p,".").concat(k)]||c[k]||d[k]||o;return a?n.createElement(m,i(i({ref:t},s),{},{components:a})):n.createElement(m,i({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},6028:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:1},i="(BAR-001) Backup and recovery procedures",l={unversionedId:"backup-recovery/BAR-001",id:"backup-recovery/BAR-001",title:"(BAR-001) Backup and recovery procedures",description:"TODO https://ontotext.atlassian.net/browse/GDB-8300 ?",source:"@site/docs/backup-recovery/BAR-001.md",sourceDirName:"backup-recovery",slug:"/backup-recovery/BAR-001",permalink:"/graphdb-aws-deployment-guide/docs/backup-recovery/BAR-001",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Backup and Recovery",permalink:"/graphdb-aws-deployment-guide/docs/category/backup-and-recovery"},next:{title:"Routine Maintenance",permalink:"/graphdb-aws-deployment-guide/docs/category/routine-maintenance"}},p={},u=[{value:"Prerequisites:",id:"prerequisites",level:2},{value:"Guide: Cloud Backup with GraphDB",id:"guide-cloud-backup-with-graphdb",level:2},{value:"Guide: Cloud Restore with GraphDB",id:"guide-cloud-restore-with-graphdb",level:2}],s={toc:u},c="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bar-001-backup-and-recovery-procedures"},"(BAR-001) Backup and recovery procedures"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"TODO")," ",(0,r.kt)("a",{parentName:"p",href:"https://ontotext.atlassian.net/browse/GDB-8300"},"https://ontotext.atlassian.net/browse/GDB-8300")," ?"),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"An S3 bucket, dedicated to GraphDB backups"),(0,r.kt)("li",{parentName:"ul"},"IAM user with write permissions to the S3 bucket"),(0,r.kt)("li",{parentName:"ul"},"A set of ",(0,r.kt)("em",{parentName:"li"},"aws_access_key_id")," and ",(0,r.kt)("em",{parentName:"li"},"aws_secret_access_key")," for that IAM user"),(0,r.kt)("li",{parentName:"ul"},"If GraphDB is secured, credentials for an admin user will be needed")),(0,r.kt)("h2",{id:"guide-cloud-backup-with-graphdb"},"Guide: Cloud Backup with GraphDB"),(0,r.kt)("p",null,"GraphDB provides support for creating backups and saving them in the cloud using Amazon S3 cloud storage."),(0,r.kt)("p",null,"This guide will walk you through the process of creating a cloud backup for your GraphDB instance."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Cloud Backup Endpoint:")),(0,r.kt)("p",null,"To create a backup saved in the cloud, you will use a different endpoint called ",(0,r.kt)("inlineCode",{parentName:"p"},"/rest/recovery/cloud-backup"),".\nThis endpoint allows you to specify the cloud bucket information along with the backup options."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Cloud Bucket URI Format:")),(0,r.kt)("p",null,"The cloud bucket URI for Amazon S3 follows the format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"s3://[<endpoint-hostname>:<endpoint-port>]/<bucket-name>/<backup-name>?region=<AWSRegion>&AWS_ACCESS_KEY_ID=<key-id>&AWS_SECRET_ACCESS_KEY=<access-key>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"endpoint-hostname")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"endpoint-port")," values are used only for local S3 clones. When using Amazon S3, leave these values blank and start the URL with three slashes (",(0,r.kt)("inlineCode",{parentName:"li"},"///"),") before the bucket name."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"<bucket-name>")," is the name of your S3 bucket where the backup will be stored."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"<backup-name>")," is the name of the backup file to be created."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<AWSRegion>")," is the AWS region where your S3 bucket is located."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<key-id>")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"<access-key>")," are your AWS access key ID and secret access key.")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Example cURL Request:")),(0,r.kt)("p",null,"Here is an example cURL request to create a full data backup with system data and save it to the cloud using the provided bucket URI:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{\n  \"backupOptions\": { \"backupSystemData\": true },\n  \"bucketUri\": \"s3:///<bucket_name>/<backup_name>?region=<region>&AWS_ACCESS_KEY_ID=<key_id>&AWS_SECRET_ACCESS_KEY=<key>\"\n}' '<base_url>/rest/recovery/cloud-backup'\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"backupOptions")," parameter is optional. If not provided, the default values for backup options will be used."),(0,r.kt)("li",{parentName:"ul"},"Replace ",(0,r.kt)("inlineCode",{parentName:"li"},"<bucket_name>"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"<backup_name>"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"<region>"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"<key_id>"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"<key>")," with your specific information."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<base_url>")," should be replaced with the base URL of your GraphDB instance.")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Backup Result:")),(0,r.kt)("p",null,"The resulting backup file (",(0,r.kt)("inlineCode",{parentName:"p"},".tar")," format) in the cloud should be the same as regular backups. The backupOptions and bucketUri parameters ensure the appropriate data and settings are included in the backup."),(0,r.kt)("p",null,"By following these steps, you can create a backup of your GraphDB instance and securely store it in the cloud using Amazon S3 cloud storage."),(0,r.kt)("h2",{id:"guide-cloud-restore-with-graphdb"},"Guide: Cloud Restore with GraphDB"),(0,r.kt)("p",null,"GraphDB provides support for restoring from a backed-up state saved in the cloud using Amazon S3 storage."),(0,r.kt)("p",null,"This guide will walk you through the process of performing a cloud restore for your GraphDB instance."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Cloud Restore Endpoint:")),(0,r.kt)("p",null,"To restore from a backed-up state saved in the cloud, you will use a different endpoint called ",(0,r.kt)("inlineCode",{parentName:"p"},"/rest/recovery/cloud-restore"),".\nThis endpoint allows you to specify the cloud bucket information along with the restore options."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Cloud Bucket URI Format:")),(0,r.kt)("p",null,"The cloud bucket URI for Amazon S3 follows the format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"s3://[<endpoint-hostname>:<endpoint-port>]/<bucket-name>/<backup-name>?region=<AWSRegion>&AWS_ACCESS_KEY_ID=<key-id>&AWS_SECRET_ACCESS_KEY=<access-key>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"endpoint-hostname")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"endpoint-port")," values are used only for local S3 clones. When using Amazon S3, leave these values blank and start the URL with three slashes (",(0,r.kt)("inlineCode",{parentName:"li"},"///"),") before the bucket name."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"<bucket-name>")," is the name of your S3 bucket where the backup is stored."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"<backup-name>")," is the name of the backup file to be restored."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<AWSRegion>")," is the AWS region where your S3 bucket is located."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<key-id>")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"<access-key>")," are your AWS access key ID and secret access key.")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Example cURL Request:")),(0,r.kt)("p",null,"Here is an example cURL request to perform a restore using a backup from the provided cloud bucket URI:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' -d '{\n  \"restoreOptions\": { \"removeStaleRepositories\": true },\n  \"bucketUri\": \"s3:///<bucket_name>/<backup_name>?region=<region>&AWS_ACCESS_KEY_ID=<key_id>&AWS_SECRET_ACCESS_KEY=<key>\"\n}' '<base_url>/rest/recovery/cloud-restore'link\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"restoreOptions")," parameter is optional. If not provided, the default values for restore options will be used."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Replace ",(0,r.kt)("inlineCode",{parentName:"li"},"<bucket_name>"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"<backup_name>"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"<region>"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"<key_id>"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"<key>")," with your specific information."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<base_url>")," should be replaced with the base URL of your GraphDB instance.")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Restore Result:")),(0,r.kt)("p",null,"The restore process will apply the backup and remove any repositories that are not restored from it."),(0,r.kt)("p",null,"The restoreOptions and bucketUri parameters ensure the appropriate data and settings are used during the restore."),(0,r.kt)("p",null,"By following these steps, you can perform a cloud restore for your GraphDB instance using a backup stored in Amazon S3 cloud storage."))}d.isMDXComponent=!0}}]);