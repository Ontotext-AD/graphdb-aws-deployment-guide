"use strict";(self.webpackChunkgraphdb_aws_deployment_guide=self.webpackChunkgraphdb_aws_deployment_guide||[]).push([[2279],{4137:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(i,".").concat(h)]||d[h]||c[h]||l;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=h;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4296:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(4137));const l={sidebar_position:1},o="GraphDB Deployment guide",s={unversionedId:"deployment-assets/DAS-001",id:"deployment-assets/DAS-001",title:"GraphDB Deployment guide",description:"System Requirements",source:"@site/docs/deployment-assets/DAS-001.md",sourceDirName:"deployment-assets",slug:"/deployment-assets/DAS-001",permalink:"/graphdb-aws-deployment-guide/docs/deployment-assets/DAS-001",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Deployment Assets",permalink:"/graphdb-aws-deployment-guide/docs/category/deployment-assets"},next:{title:"Testing and troubleshooting",permalink:"/graphdb-aws-deployment-guide/docs/deployment-assets/DAS-004"}},i={},p=[{value:"System Requirements",id:"system-requirements",level:2},{value:"Supported Platforms",id:"supported-platforms",level:3},{value:"Hardware Requirements",id:"hardware-requirements",level:2},{value:"Software Requirements",id:"software-requirements",level:2},{value:"Deploying on Amazon Web Services",id:"deploying-on-amazon-web-services",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Installing GraphDB on EC2",id:"installing-graphdb-on-ec2",level:2},{value:"Deployment",id:"deployment",level:3}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"graphdb-deployment-guide"},"GraphDB Deployment guide"),(0,r.kt)("h2",{id:"system-requirements"},"System Requirements"),(0,r.kt)("h3",{id:"supported-platforms"},"Supported Platforms"),(0,r.kt)("p",null,"GraphDB is supported on systems with x86_64 and ARM architectures on physical, virtual, or containerized platforms."),(0,r.kt)("h2",{id:"hardware-requirements"},"Hardware Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"CPU"),": Should be noted that the license limits the number of CPU cores (This affects inferencing and read requests)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Memory"),": Please refer to the ",(0,r.kt)("a",{parentName:"li",href:"https://graphdb.ontotext.com/documentation/10.2/requirements.html#hardware-sizing"},"hardware sizing documentation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Storage"),": A ",(0,r.kt)("inlineCode",{parentName:"li"},"gp3")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"io")," volume is recommended, NFS file systems are not recommended.")),(0,r.kt)("h2",{id:"software-requirements"},"Software Requirements"),(0,r.kt)("p",null,"Java Development Kit 11-16"),(0,r.kt)("h2",{id:"deploying-on-amazon-web-services"},"Deploying on Amazon Web Services"),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before starting, you\u2019ll need access to an AWS account in which GraphDB will be deployed.\nIt is also recommended that you create an ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html"},"IAM user"),"\nfor the deployment and not use the root user account."),(0,r.kt)("p",null,"You will also need to create a shell script which will install and run GraphDB as a service.\nThis script will be used to initialize the EC2 instances. See ",(0,r.kt)("a",{parentName:"p",href:"#installing-graphdb-on-ec2"},"Installing GraphDB on EC2")),(0,r.kt)("h2",{id:"installing-graphdb-on-ec2"},"Installing GraphDB on EC2"),(0,r.kt)("p",null,"Before installing GraphDB, make sure the EC2 instance meets the System Requirements."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Install GraphDB from the standalone distribution archive")),(0,r.kt)("p",null,"GraphDB requires a Java Development Kit (JDK) to be installed. The recommended version is 11, but anything prior to version 17 should work as well."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.ontotext.com/products/graphdb/download/"},"Register"),", download and unzip the GraphDB distribution in the EC2 instance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ unzip graphdb-10.2.2-dist.zip\n")),(0,r.kt)("p",null,"Move it to ",(0,r.kt)("inlineCode",{parentName:"p"},"/opt")," and create a symlink to it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ mv graphdb-10.2.2 /opt/\n$ ln -s /opt/graphdb-10.2.2 /opt/graphdb\n")),(0,r.kt)("p",null,"Create a user and group for GraphDB and give it permissions on the installation directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ groupadd graphdb\n$ useradd -g graphdb graphdb -s /bin/bash\n$ chown -R graphdb:graphdb /opt/graphdb-10.2.2\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Running as a console application:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"/opt/graphdb/bin/graphdb\n")),(0,r.kt)("p",null,"Or to run it in the background, use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"/opt/graphdb/bin/graphdb -b\n")),(0,r.kt)("p",null,"GraphDB should now be accessible on the public IP of the EC2 instance at port ",(0,r.kt)("inlineCode",{parentName:"p"},"7200"),".\n",(0,r.kt)("em",{parentName:"p"},"(If you don't have a public IP, you can create a VPN connection)")),(0,r.kt)("p",null,"To stop GraphDB, press ",(0,r.kt)("inlineCode",{parentName:"p"},"CTRL + C"),", if you have started it in the foreground, otherwise, you can execute the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"/opt/graphdb/bin/graphdb stop\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Running as systemd service")),(0,r.kt)("p",null,"GraphDB can be configured to be managed by systemd and also to start automatically when the system starts."),(0,r.kt)("p",null,"Create the file ",(0,r.kt)("inlineCode",{parentName:"p"},"/lib/systemd/system/graphdb.service")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'[Unit]\nDescription="GraphDB Engine"\nWants=network-online.target\nAfter=network-online.target\n\n[Service]\nRestart=on-failure\nRestartSec=5s\nUser=graphdb\nGroup=graphdb\nExecStart="/opt/graphdb/bin/graphdb"\nTimeoutSec=120\nSuccessExitStatus=143\n\n[Install]\nWantedBy=multi-user.target\n')),(0,r.kt)("p",null,"Reload systemd, to pick the GraphDB unit file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ systemctl daemon-reload\n")),(0,r.kt)("p",null,"Enable the service to run at system start up:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ systemctl enable graphdb\n")),(0,r.kt)("p",null,"Start the GraphDB service:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ systemctl start graphdb\n")),(0,r.kt)("p",null,"Check its status:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ systemctl status graphdb\n")),(0,r.kt)("h3",{id:"deployment"},"Deployment"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Create a Virtual Private Cloud (VPC)."))),(0,r.kt)("p",null,"You\u2019ll need to create three private subnets and optionally three public subnets, if GraphDB will be accessible from the internet."),(0,r.kt)("p",null,"The subnets should be in three availability zones and if Elastic Compute Cloud (EC2) instances require outbound traffic,"),(0,r.kt)("p",null,"NAT gateways will be needed. For redundancy, you\u2019ll need to create at least two NAT gateways."),(0,r.kt)("p",null,"Make sure, that you enable DNS hostnames and DNS resolutions on the VPC."),(0,r.kt)("p",null,"The easiest way to create all of the above is to use the \u201cVPC and more\u201d option when creating the VPC."),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},'Create a "Launch template".')," ")),(0,r.kt)("p",null,"The launch template is the blueprint of the EC2 instances."),(0,r.kt)("p",null,"We recommend the official ",(0,r.kt)("inlineCode",{parentName:"p"},"Ubuntu Server 22.04 LTS 64-bit")," Amazon Machine Image (AMI) and ",(0,r.kt)("inlineCode",{parentName:"p"},"r6i.xlarge")," instance type."),(0,r.kt)("p",null,"This should be able to handle a repository of up to on billion statements."),(0,r.kt)("p",null,"Choose the default security group for the VPC.\nSecurity groups act as a firewall, and controls traffic to and from AWS resources.\nThe default security group allows all inbound and outbound traffic and is good enough to start with,\nbut you should consider creating custom security groups. "),(0,r.kt)("p",null,"Make sure, that the security group allows inbound and outbound traffic\nto ports ",(0,r.kt)("inlineCode",{parentName:"p"},"7200")," (GraphDB HTTP API) and ",(0,r.kt)("inlineCode",{parentName:"p"},"7300")," (GraphDB raft internal communication),\nfrom the private subnets. Also, the load balancer should be able to forward to port 7200."),(0,r.kt)("p",null,"To be able to persist greater amounts of data, you\u2019ll need to attach an additional Elastic Block Storage (EBS) volume."),(0,r.kt)("p",null,"Create a new EBS volume, size of 100Gi should be enough, but keep in mind that backups and replication snapshots\nwill require around double the used storage. "),(0,r.kt)("p",null,"For type choose ",(0,r.kt)("inlineCode",{parentName:"p"},"gp3")," and depending on the usage patterns, you might need to increase the IOPS.\nFor the device name choose ",(0,r.kt)("inlineCode",{parentName:"p"},"/dev/sdf"),"."),(0,r.kt)("p",null,"To complete the Launch template creation, upload or copy and paste the script\nyou've created as part of the prerequisites in the user data section."),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Create an Auto Scaling group, attach a target group and create a Network Load Balancer."))),(0,r.kt)("p",null,"When creating the Auto Scaling group, you\u2019ll have the options to create the target group and the load balancer."),(0,r.kt)("p",null,"Start by creating an Auto Scaling group.\nSelect the Launch template that you just created, your VPC and all three private subnets.\nDepending on the size of the cluster (number of nodes) set the Desired, Minimum and Maximum capacity, usually, this is three."),(0,r.kt)("p",null,"Next, choose \u201cAttach to a new load balancer\u201d and select a Network load balancer.\nDepending on your needs select the scheme of the load balancer to be either internal or internet-facing.\nChange the listener port to ",(0,r.kt)("inlineCode",{parentName:"p"},"7200")," and select create a target group."),(0,r.kt)("p",null,"After creating the Auto Scaling group, the creation of the EC2 instances should begin,\nbut there are some changes to the Target and Auto Scaling groups that need to be made:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go to the newly created target group"),(0,r.kt)("li",{parentName:"ul"},"Change the health check path to ",(0,r.kt)("inlineCode",{parentName:"li"},"/rest/cluster/node/status")),(0,r.kt)("li",{parentName:"ul"},"Under advanced health check settings, select traffic port")),(0,r.kt)("p",null,"For the Auto Scaling group, under Health checks, click edit and check Turn on Elastic Load Balancing health checks."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Creating the required by GraphDB infrastructure in AWS will inquire costs.\nAlthough, some resources are eligible for the free tier, we advise you to use the ",(0,r.kt)("a",{parentName:"p",href:"https://calculator.aws/#/"},"AWS Pricing Calculator"),"\nto get an estimate of the total cost."))}c.isMDXComponent=!0}}]);