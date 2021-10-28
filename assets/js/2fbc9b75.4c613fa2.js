"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[6892],{99060:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return m},default:function(){return k}});var a=n(74034),r=n(79973),i=(n(67294),n(3905)),l=["components"],d={description:"Info API returns basic info about the node with the /info and /healthz endpoints and the info() function.",image:"/img/logo/goshimmer_light.png",keywords:["info","endpoint","function","health","healthz","client lib"]},o="Info API Methods",p={unversionedId:"apis/info",id:"apis/info",isDocsHomePage:!1,title:"Info API Methods",description:"Info API returns basic info about the node with the /info and /healthz endpoints and the info() function.",source:"@site/external/goshimmer/documentation/docs/apis/info.md",sourceDirName:"apis",slug:"/apis/info",permalink:"/goshimmer/apis/info",editUrl:"https://github.com/iotaledger/goshimmer/edit/develop/external/goshimmer/documentation/docs/apis/info.md",tags:[],version:"current",frontMatter:{description:"Info API returns basic info about the node with the /info and /healthz endpoints and the info() function.",image:"/img/logo/goshimmer_light.png",keywords:["info","endpoint","function","health","healthz","client lib"]},sidebar:"docs",previous:{title:"WebAPI - clientLib",permalink:"/goshimmer/apis/webAPI"},next:{title:"Peering API Methods",permalink:"/goshimmer/apis/autopeering"}},m=[{value:"<code>/info</code>",id:"info",children:[{value:"Parameters",id:"parameters",children:[],level:3},{value:"Examples",id:"examples",children:[{value:"cURL",id:"curl",children:[],level:4},{value:"Client lib - <code>Info</code>",id:"client-lib---info",children:[],level:4},{value:"Response example",id:"response-example",children:[],level:4},{value:"Results",id:"results",children:[],level:4}],level:3}],level:2},{value:"<code>/healthz</code>",id:"healthz",children:[{value:"Parameters",id:"parameters-1",children:[],level:3},{value:"Examples",id:"examples-1",children:[{value:"cURL",id:"curl-1",children:[],level:4},{value:"Client lib",id:"client-lib",children:[],level:4},{value:"Results",id:"results-1",children:[],level:4}],level:3}],level:2}],s={toc:m};function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"info-api-methods"},"Info API Methods"),(0,i.kt)("p",null,"Info API returns basic info about the node"),(0,i.kt)("p",null,"The API provides the following functions and endpoints:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#info"},"/info")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#healthz"},"/healthz"))),(0,i.kt)("p",null,"Client lib APIs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#client-lib---info"},"Info()"))),(0,i.kt)("h2",{id:"info"},(0,i.kt)("inlineCode",{parentName:"h2"},"/info")),(0,i.kt)("p",null,"Returns basic info about the node."),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,"None."),(0,i.kt)("h3",{id:"examples"},"Examples"),(0,i.kt)("h4",{id:"curl"},"cURL"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'http://localhost:8080/info'\n")),(0,i.kt)("h4",{id:"client-lib---info"},"Client lib - ",(0,i.kt)("inlineCode",{parentName:"h4"},"Info")),(0,i.kt)("p",null,"Information of a node can be retrieved via ",(0,i.kt)("inlineCode",{parentName:"p"},"Info() (*jsonmodels.InfoResponse, error)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"info, err := goshimAPI.Info()\nif err != nil {\n    // return error\n}\n\n// will print the response\nfmt.Println(string(info))\n")),(0,i.kt)("h4",{id:"response-example"},"Response example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": "v0.6.2",\n  "networkVersion": 30,\n  "tangleTime": {\n    "messageID": "6ndfmfogpH9H8C9X9Fbb7Jmuf8RJHQgSjsHNPdKUUhoJ",\n    "time": 1621879864032595415,\n    "synced": true\n  },\n  "identityID": "D9SPFofAGhA5V9QRDngc1E8qG9bTrnATmpZMdoyRiBoW",\n  "identityIDShort": "XBgY5DsUPng",\n  "publicKey": "9DB3j9cWYSuEEtkvanrzqkzCQMdH1FGv3TawJdVbDxkd",\n  "solidMessageCount": 74088,\n  "totalMessageCount": 74088,\n  "enabledPlugins": [\n    "Activity",\n    "AnalysisClient",\n    "AutoPeering",\n    "Banner",\n    "CLI",\n    "Clock",\n    "Config",\n    "Consensus",\n    "DRNG",\n    "Dashboard",\n    "Database",\n    "Gossip",\n    "GracefulShutdown",\n    "Logger",\n    "Mana",\n    "ManaRefresher",\n    "ManualPeering",\n    "MessageLayer",\n    "Metrics",\n    "NetworkDelay",\n    "PoW",\n    "PortCheck",\n    "Profiling",\n    "Prometheus",\n    "RemoteLog",\n    "RemoteLogMetrics",\n    "WebAPI",\n    "WebAPIDRNGEndpoint",\n    "WebAPIManaEndpoint",\n    "WebAPIWeightProviderEndpoint",\n    "WebAPIAutoPeeringEndpoint",\n    "WebAPIDataEndpoint",\n    "WebAPIFaucetEndpoint",\n    "WebAPIHealthzEndpoint",\n    "WebAPIInfoEndpoint",\n    "WebAPILedgerstateEndpoint",\n    "WebAPIMessageEndpoint",\n    "WebAPIToolsEndpoint",\n    "snapshot"\n  ],\n  "disabledPlugins": [\n    "AnalysisDashboard",\n    "AnalysisServer",\n    "Faucet",\n    "ManaEventLogger",\n    "Spammer",\n    "TXStream"\n  ],\n  "mana": {\n    "access": 1,\n    "accessTimestamp": "2021-05-24T20:11:05.451224937+02:00",\n    "consensus": 10439991680906,\n    "consensusTimestamp": "2021-05-24T20:11:05.451228137+02:00"\n  },\n  "manaDelegationAddress": "1HMQic52dz3xLY2aeDXcDhX53LgbsHghdfD8eGXR1qVHy",\n  "mana_decay": 0.00003209,\n  "scheduler": {\n    "running": true,\n    "rate": "5ms",\n    "nodeQueueSizes": {}\n  },\n  "rateSetter": {\n    "rate": 20000,\n    "size": 0\n  }\n}\n')),(0,i.kt)("h4",{id:"results"},"Results"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Return field"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"version")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Version of GoShimmer.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"networkVersion")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"uint32")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Network Version of the autopeering.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"tangleTime")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"TangleTime")),(0,i.kt)("td",{parentName:"tr",align:"left"},"TangleTime sync status")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"identityID")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Identity ID of the node encoded in base58.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"identityIDShort")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Identity ID of the node encoded in base58 and truncated to its first 8 bytes.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"publicKey")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Public key of the node encoded in base58")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"messageRequestQueueSize")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"int")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The number of messages a node is trying to request from neighbors.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"solidMessageCount")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"int")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The number of solid messages in the node's database.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"totalMessageCount")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"int")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The number of messages in the node's database.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"enabledPlugins")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"[]string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"List of enabled plugins.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"disabledPlugins")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"[]string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"List if disabled plugins.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"mana")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Mana")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Mana values.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"manaDelegationAddress")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Mana Delegation Address.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"mana_decay")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"float64")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The decay coefficient of ",(0,i.kt)("inlineCode",{parentName:"td"},"bm2"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"scheduler")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"Scheduler")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Scheduler is the scheduler used.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"rateSetter")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"RateSetter")),(0,i.kt)("td",{parentName:"tr",align:"left"},"RateSetter is the rate setter used.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"error")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Error message. Omitted if success.")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type ",(0,i.kt)("inlineCode",{parentName:"li"},"TangleTime"))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"field"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"messageID")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"ID of the last confirmed message.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"time")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"int64")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Issue timestamp of the last confirmed message.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"synced")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"bool")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Flag indicating whether node is in sync.")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type ",(0,i.kt)("inlineCode",{parentName:"li"},"Scheduler"))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"field"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"running")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"bool")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Flag indicating whether Scheduler has started.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"rate")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Rate of the scheduler.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"nodeQueueSizes")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"map[string]int")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The size for each node queue.")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type ",(0,i.kt)("inlineCode",{parentName:"li"},"RateSetter"))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"field"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"rate")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"float64")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The rate of the rate setter..")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"size")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"int")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The size of the issuing queue.")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Type ",(0,i.kt)("inlineCode",{parentName:"li"},"Mana"))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"field"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"access")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"float64")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Access mana assigned to the node.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"accessTimestamp")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"time.Time")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Time when the access mana was calculated.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"consensus")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"float64")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Consensus mana assigned to the node.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"consensusTimestamp")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"time.Time")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Time when the consensus mana was calculated.")))),(0,i.kt)("h2",{id:"healthz"},(0,i.kt)("inlineCode",{parentName:"h2"},"/healthz")),(0,i.kt)("p",null,"Returns HTTP code 200 if everything is running correctly."),(0,i.kt)("h3",{id:"parameters-1"},"Parameters"),(0,i.kt)("p",null,"None."),(0,i.kt)("h3",{id:"examples-1"},"Examples"),(0,i.kt)("h4",{id:"curl-1"},"cURL"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl --location 'http://localhost:8080/healthz'\n")),(0,i.kt)("h4",{id:"client-lib"},"Client lib"),(0,i.kt)("p",null,"This method is not available in client lib"),(0,i.kt)("h4",{id:"results-1"},"Results"),(0,i.kt)("p",null,"Empty response with HTTP 200 success code if everything is running correctly.\nError message is returned if failed."))}k.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),k=p(n),f=r,N=k["".concat(o,".").concat(f)]||k[f]||s[f]||i;return n?a.createElement(N,l(l({ref:t},m),{},{components:n})):a.createElement(N,l({ref:t},m))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:r,l[1]=d;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"}}]);