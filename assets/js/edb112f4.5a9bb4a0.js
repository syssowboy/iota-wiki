"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[73824],{39138:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=t(74034),r=t(79973),s=(t(67294),t(3905)),l=["components"],i={},o="Examples",c={unversionedId:"libraries/wasm/examples",id:"libraries/wasm/examples",isDocsHomePage:!1,title:"Examples",description:"An overview example of the available api tools can be found here.",source:"@site/external/streams/documentation/docs/libraries/wasm/examples.md",sourceDirName:"libraries/wasm",slug:"/libraries/wasm/examples",permalink:"/streams/libraries/wasm/examples",editUrl:"https://github.com/iotaledger/streams/edit/develop/external/streams/documentation/docs/libraries/wasm/examples.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Streams WASM Bindings",permalink:"/streams/libraries/wasm/overview"},next:{title:"Getting Started",permalink:"/streams/libraries/wasm/getting_started"}},u=[{value:"Core Functionality",id:"core-functionality",children:[{value:"Author Generation",id:"author-generation",children:[],level:3},{value:"Subscriber Generation",id:"subscriber-generation",children:[],level:3},{value:"Subscription",id:"subscription",children:[],level:3},{value:"Keyload",id:"keyload",children:[],level:3},{value:"Sending Messages",id:"sending-messages",children:[],level:3},{value:"Message Fetching",id:"message-fetching",children:[{value:"Forward",id:"forward",children:[],level:4},{value:"Backwards",id:"backwards",children:[],level:4}],level:3}],level:2}],p={toc:u};function d(e){var n=e.components,i=(0,r.Z)(e,l);return(0,s.kt)("wrapper",(0,a.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"examples"},"Examples"),(0,s.kt)("p",null,"An overview example of the available api tools can be found ",(0,s.kt)("a",{target:"_blank",href:t(51530).Z},"here"),".\nThe general API is simply an abstraction over the rust library, so the examples found\n",(0,s.kt)("a",{parentName:"p",href:"/streams/libraries/rust/examples"},"here")," still apply (with some minor modifications, see: ",(0,s.kt)("a",{parentName:"p",href:"/streams/libraries/wasm/api_reference"},"api_reference"),")"),(0,s.kt)("h2",{id:"core-functionality"},"Core Functionality"),(0,s.kt)("h3",{id:"author-generation"},"Author Generation"),(0,s.kt)("p",null,"Create an Author and generate a new channel:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'let node = "https://chrysalis-nodes.iota.org/";\nlet options = new streams.SendOptions(node, 3, true, 1);\nlet multi_branching = false;\nlet auth = new streams.Author("Unique Seed", options, multi_branching);\n\nlet response = await auth.clone().send_announce();\nlet ann_link = response.get_link();\n// Link used by subscribers to attach to instance\nconsole.log("Announced at: ", ann_link.to_string());\n')),(0,s.kt)("h3",{id:"subscriber-generation"},"Subscriber Generation"),(0,s.kt)("p",null,"Create a Subscriber and attach to a channel:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'let node = "https://chrysalis-nodes.iota.org/";\nlet options = new streams.SendOptions(node, 3, true, 1);\nlet sub = new streams.Subscriber("Unique Seed", options);\n\nlet ann_link = streams.Address.from_str("AnnouncementLink:Here");\nawait sub.clone().receive_announcement();\n')),(0,s.kt)("h3",{id:"subscription"},"Subscription"),(0,s.kt)("p",null,"Subscriber sends a subscription message:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'let response = sub.clone().send_subscribe(ann_link);\nlet sub_link = response.get_link();\n// Link to be provided to the Author for subscription\nconsole.log("Subscription link: ", sub_link.to_string());\n')),(0,s.kt)("p",null,"Author accepts and processes subscription: "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'let sub_link = streams.Address.from_str("SubLink:Here");\nawait author.clone().receive_subscribe(sub_link);\n')),(0,s.kt)("h3",{id:"keyload"},"Keyload"),(0,s.kt)("p",null,"Author sends a keyload for all participants in the channel:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'let response = author.clone().send_keyload_for_everyone(ann_link);\nlet keyload_link = response.get_link();\n// Keyload message can now act as starting point for a protected branch\nconsole.log("Keyload link for everyone: ", keyload_link.to_string());\n')),(0,s.kt)("p",null,"Author sends a keyload for just one subscriber in the channel:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'let response = author.clone().send_keyload(ann_link, [], ["SubA_PublicKey"]);\nlet sub_A_keyload_link = response.get_link();\n// Keyload message can now act as starting point for a protected branch\nconsole.log("Keyload link for SubA: ", sub_A_keyload_link.to_string());\n')),(0,s.kt)("h3",{id:"sending-messages"},"Sending Messages"),(0,s.kt)("p",null,"Messages are required to be linked to a previous message that the user had access to.\nIn a single branch implementation this means the latest message in the branch, in multi\nbranch implementations, this can mean any message in a branch that they have had access\nto."),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Note: In a multi publisher implementation (i.e. multiple publishers in a single branch),\nit is required that each publisher make sure to sync their state before publishing to ensure\nthat the instance stays in sync with the other publishers")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'await sub.clone().sync_state();\nlet masked_payload = to_bytes("Masked Payload") <- Payloads must be converted to bytes\nlet public_payload = to_bytes("Public Payload")\n\nlet response = subA.clone().send_signed_packet(\n    sub_A_keyload_link,\n    public_payload,\n    masked_payload\n);\nlet msg_link = resposne.get_link();\nconsole.log("New message sent by Sub A at: ", msg_link.to_string());\n')),(0,s.kt)("h3",{id:"message-fetching"},"Message Fetching"),(0,s.kt)("h4",{id:"forward"},"Forward"),(0,s.kt)("p",null,"When new messages are available to retrieve from the channel, you can fetch the next\nmessage sent by each publisher like so:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'let next_msgs = sub.clone().fetch_next_msgs();\n\nfor (var i = 0; i < next_msgs.length; i++) {\n    console.log("Found a message...");\n    console.log(\n      "Public: ",\n      from_bytes(next_msgs[i].get_message().get_public_payload()),\n      "\\tMasked: ",\n      from_bytes(next_msgs[i].get_message().get_masked_payload())\n    );\n}\n')),(0,s.kt)("p",null,"If no new messages are present, the returned array will be empty."),(0,s.kt)("p",null,"You can also fetch all previous messages:"),(0,s.kt)("h4",{id:"backwards"},"Backwards"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-javascript"},'let num_messages = 10;\nlet prev_msgs = sub.clone().fetch_prev_msgs(latest_msg_link, num_messages);\n\nfor (var i = 0; i < prev_msgs.length; i++) {\n    console.log("Found a message...");\n    console.log(\n      "Public: ",\n      from_bytes(prev_msgs[i].get_message().get_public_payload()),\n      "\\tMasked: ",\n      from_bytes(prev_msgs[i].get_message().get_masked_payload())\n    );\n}\n')))}d.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),c=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,g=d["".concat(o,".").concat(m)]||d[m]||p[m]||s;return t?a.createElement(g,l(l({ref:n},u),{},{components:t})):a.createElement(g,l({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,l=new Array(s);l[0]=d;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<s;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},51530:function(e,n,t){n.Z=t.p+"assets/files/node-bdc094dcaf766cecf68780787b8dd2f5.js"}}]);