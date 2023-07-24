"use strict";(self.webpackChunkgraphdb_aws_deployment_guide=self.webpackChunkgraphdb_aws_deployment_guide||[]).push([[6255],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(s,".").concat(d)]||u[d]||h[d]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6071:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(4137));const o={sidebar_position:1},i="Monitoring and Health Checks",l={unversionedId:"health-checks/HLCH-001",id:"health-checks/HLCH-001",title:"Monitoring and Health Checks",description:"GraphDB documentation:",source:"@site/docs/health-checks/HLCH-001.md",sourceDirName:"health-checks",slug:"/health-checks/HLCH-001",permalink:"/graphdb-aws-deployment-guide/docs/health-checks/HLCH-001",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Health Check",permalink:"/graphdb-aws-deployment-guide/docs/category/health-check"},next:{title:"Backup and Recovery",permalink:"/graphdb-aws-deployment-guide/docs/category/backup-and-recovery"}},s={},p=[{value:"Monitoring a GraphDB Cluster",id:"monitoring-a-graphdb-cluster",level:2},{value:"Endpoints",id:"endpoints",level:3},{value:"Prometheus Integration with Cloudwatch",id:"prometheus-integration-with-cloudwatch",level:3},{value:"Prerequisites",id:"prerequisites",level:4}],c={toc:p},u="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"monitoring-and-health-checks"},"Monitoring and Health Checks"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"GraphDB documentation:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://graphdb.ontotext.com/documentation/10.3/database-health-checks.html"},"Database health checks")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://graphdb.ontotext.com/documentation/10.3/creating-a-cluster.html#monitor-cluster-status"},"Creating a cluster"))),(0,a.kt)("h2",{id:"monitoring-a-graphdb-cluster"},"Monitoring a GraphDB Cluster"),(0,a.kt)("p",null,"To ensure the health and status of your GraphDB cluster, you can utilize the provided REST endpoints to monitor\nboth the entire cluster group and individual cluster nodes.\nThis guide will walk you through the process of monitoring your GraphDB cluster."),(0,a.kt)("h3",{id:"endpoints"},"Endpoints"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Checking the Cluster Group Status:"))),(0,a.kt)("p",null,"To check the status of the entire cluster group, you can send a GET request to the ",(0,a.kt)("inlineCode",{parentName:"p"},"/rest/cluster/group/status")," endpoint of any node in the cluster."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://graphdb1.example.com:7200/rest/cluster/group/status\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If the cluster group is functioning correctly, the response code will be 200, and you will receive a JSON response containing information about each node in the cluster group."),(0,a.kt)("li",{parentName:"ul"},"The JSON response will include details such as the node address, endpoint URL, node state (LEADER or FOLLOWER), sync status with other nodes, and term information.")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Checking Individual Cluster Node Status:"))),(0,a.kt)("p",null,"To monitor the status of a specific cluster node, send a GET request to the ",(0,a.kt)("inlineCode",{parentName:"p"},"/rest/cluster/node/status")," endpoint of that node. "),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://graphdb1.example.com:7200/rest/cluster/node/status\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If the node is operational, the response code will be 200, and you will receive a JSON response containing information about that particular node."),(0,a.kt)("li",{parentName:"ul"},"For a leader node, the response will include details such as the node address, endpoint URL, node state (LEADER), sync status with other nodes, and term information."),(0,a.kt)("li",{parentName:"ul"},"For a follower node, the response will include similar details, but the node state will be indicated as FOLLOWER, and the sync status will be empty.")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Checking Repository Health:"))),(0,a.kt)("p",null,"GraphDB provides a health check endpoint for monitoring repository health. You can access this endpoint at ",(0,a.kt)("inlineCode",{parentName:"p"},"http://graphdb1.example.com:7200/repositories/<repo_name>/health"),"."),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://graphdb1.example.com:7200/repositories/myrepo/health?\n")),(0,a.kt)("p",null,"The response code will indicate the health status of the repository."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"HTTP status 200:")," The repository is healthy."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"HTTP status 206:")," The repository needs attention, but it is not critical."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"HTTP status 500:")," The repository is inconsistent, and some checks have failed.")),(0,a.kt)("p",null,"The response JSON will provide detailed information about various health checks and their corresponding values."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"repository-state:")," Checks the state of the repository, with possible values of RUNNING, STARTING, or INACTIVE."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"read-availability:")," Checks if the repository is readable."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"storage-folder:")," Checks the availability of writable space in the storage folder."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"long-running-queries:")," Checks for queries running longer than a specified time."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"predicates-statistics:")," Checks if the predicate statistics contain correct values."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"plugins:")," Provides aggregated health checks for individual plugins.")),(0,a.kt)("p",null,"The aggregated health checks also include checks for dependent services and components as plugins and connectors.\nThe response will provide information about the status of each component and any additional details or messages."),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Running Passive Health Checks:"))),(0,a.kt)("p",null,"You can also perform passive health checks that compare the repository state to determine if it is safe to run active checks. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Immediate Passive:")," Append ",(0,a.kt)("inlineCode",{parentName:"li"},"?passive")," to the health endpoint URL. If the repository state is RUNNING, an active check will be performed. Otherwise, a simple check listing the repository state will be returned.\\"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Delayed Passive (if needed):")," Append ",(0,a.kt)("inlineCode",{parentName:"li"},"?passive=N")," to the endpoint URL, where N is the timeout in seconds. The system will attempt to get the repository for up to N seconds. If successful, an active check will be performed. If the timeout occurs, a simple check listing the repository state will be returned")),(0,a.kt)("h3",{id:"prometheus-integration-with-cloudwatch"},"Prometheus Integration with Cloudwatch"),(0,a.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"The monitoring setup must start with the creation of a custom IAM role,\nwhich must include the AWS managed policy called \u201cCloudWatchAgentServerPolicy\u201d,\nthis role must be assigned to all monitored instances:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to IAM section"),(0,a.kt)("li",{parentName:"ol"},"Under Roles",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Click on \u201cCreate role\u201d."),(0,a.kt)("li",{parentName:"ul"},"Choose EC2 Service"),(0,a.kt)("li",{parentName:"ul"},"Search for \u201cCloudWatchAgentServerPolicy\u201d and select it"),(0,a.kt)("li",{parentName:"ul"},"Name your role"))),(0,a.kt)("li",{parentName:"ol"},"Assign the created role for your instances",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Go to the EC2 section"),(0,a.kt)("li",{parentName:"ul"},"Select the desired instances"),(0,a.kt)("li",{parentName:"ul"},"Under the \u201cSecurity\u201d option choose \u201cmodify IAM role\u201d"),(0,a.kt)("li",{parentName:"ul"},"Choose your custom role")))))}h.isMDXComponent=!0}}]);