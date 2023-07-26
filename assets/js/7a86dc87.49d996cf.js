"use strict";(self.webpackChunkgraphdb_aws_deployment_guide=self.webpackChunkgraphdb_aws_deployment_guide||[]).push([[9034],{4137:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(f,o(o({ref:t},p),{},{components:a})):n.createElement(f,o({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7842:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(7462),r=(a(7294),a(4137));const i={sidebar_position:2},o="Overview of a Typical Customer Deployment",l={unversionedId:"introduction/INT-002",id:"introduction/INT-002",title:"Overview of a Typical Customer Deployment",description:"GraphDB is a scalable and high-performance graph database that allows organizations to manage and analyze",source:"@site/docs/introduction/INT-002.md",sourceDirName:"introduction",slug:"/introduction/INT-002",permalink:"/graphdb-aws-deployment-guide/docs/introduction/INT-002",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Use Cases",permalink:"/graphdb-aws-deployment-guide/docs/introduction/INT-001"},next:{title:"Deployment Options",permalink:"/graphdb-aws-deployment-guide/docs/introduction/INT-003"}},s={},c=[],p={toc:c},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview-of-a-typical-customer-deployment"},"Overview of a Typical Customer Deployment"),(0,r.kt)("p",null,"GraphDB is a scalable and high-performance graph database that allows organizations to manage and analyze\ncomplex interconnected data efficiently.\nDeploying a GraphDB cluster with 3 nodes in AWS EC2 instances offers enhanced availability, fault tolerance,\nand performance for large-scale data processing and querying."),(0,r.kt)("p",null,"Here's an overview of a typical customer deployment:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Architecture Design:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The deployment comprises three EC2 instances within an Amazon Virtual Private Cloud (VPC) for enhanced security and isolation."),(0,r.kt)("li",{parentName:"ul"},"Each EC2 instance is provisioned with appropriate resources based on the anticipated workload and dataset size."),(0,r.kt)("li",{parentName:"ul"},"Nodes are distributed across different Availability Zones (AZs) to ensure redundancy and high availability."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Data Replication and Distribution:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"GraphDB employs the Raft consensus algorithm to maintain data replication and consistency across the cluster."),(0,r.kt)("li",{parentName:"ul"},"The Raft algorithm ensures that the data is consistently replicated and available on all nodes in the cluster."),(0,r.kt)("li",{parentName:"ul"},"One node is elected as the leader, responsible for handling write operations, while the other nodes act as\nfollowers and replicate data from the leader."),(0,r.kt)("li",{parentName:"ul"},"In the event of a leader failure, a new leader is automatically elected from the available followers,\nensuring fault tolerance and high availability."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Load Balancing:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"To efficiently distribute incoming queries and operations, a Network Load Balancer is set up in front of the GraphDB cluster."),(0,r.kt)("li",{parentName:"ul"},"The load balancer routes requests to the available nodes, distributing the workload evenly and preventing any\nsingle node from becoming overloaded."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Backup and Recovery:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Regular automated backups of the GraphDB data are configured to ensure data durability and recoverability."),(0,r.kt)("li",{parentName:"ul"},"Backups are stored in Amazon Simple Storage Service (S3) for safekeeping and easy recovery in case of data loss or corruption."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Monitoring and Alerting:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"CloudWatch and other monitoring tools are utilized to track the performance metrics, resource utilization,\nand health status of the cluster."),(0,r.kt)("li",{parentName:"ul"},"Alerts are configured to notify administrators of any critical issues or abnormal behavior."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Scalability:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The three nodes of the cluster are deployed in an autoscaling group.  "))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Security:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Security groups and network ACLs are configured to control inbound and outbound traffic to the EC2 instances."),(0,r.kt)("li",{parentName:"ul"},"AWS Identity and Access Management (IAM) roles are used to control access to AWS resources."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"High Availability and Fault Tolerance:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"By distributing nodes across multiple AZs, the deployment ensures high availability even in the event of an AZ failure."),(0,r.kt)("li",{parentName:"ul"},"If a node becomes unavailable, the load balancer redirects traffic to the other healthy nodes, minimizing service disruption."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Optimization and Tuning:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The cluster is optimized for performance, and GraphDB configurations can be tuned,\nbased on the specific use case and workload requirements.")))),(0,r.kt)("p",null,"In conclusion, deploying a GraphDB cluster with 3 nodes in AWS EC2 instances provides organizations with a powerful and\nscalable solution for managing complex interconnected data with high availability, fault tolerance, and performance.\nThe deployment can be customized to suit the specific needs of the customer and efficiently handle their data processing and analysis tasks."),(0,r.kt)("h1",{id:"graphdb-deployment-components"},"GraphDB Deployment Components"),(0,r.kt)("p",null,"Three instances of GraphDB will be deployed in separate Availability Zones (AZs), forming a cluster for enhanced\nredundancy and fault tolerance."))}u.isMDXComponent=!0}}]);