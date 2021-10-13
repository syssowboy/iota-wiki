"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[98857],{61431:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return c}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),l=["components"],o={},u="\ud83d\uddd3\ufe0f Team Identity Meeting Notes - 2020-08-05",p={unversionedId:"meeting-notes/2020-08-05",id:"meeting-notes/2020-08-05",isDocsHomePage:!1,title:"\ud83d\uddd3\ufe0f Team Identity Meeting Notes - 2020-08-05",description:"The goal of this meeting is to get to a stage where we can get start development.",source:"@site/external/identity.rs/documentation/docs/meeting-notes/2020-08-05.md",sourceDirName:"meeting-notes",slug:"/meeting-notes/2020-08-05",permalink:"/identity.rs/meeting-notes/2020-08-05",tags:[],version:"current",frontMatter:{}},s=[{value:"\ud83d\udc65 Participants",id:"-participants",children:[]},{value:"\ud83d\udcac Discussion topics",id:"-discussion-topics",children:[]},{value:"\ud83c\udfaf Week Goals",id:"-week-goals",children:[]},{value:"\u23ed\ufe0f Next Meeting",id:"\ufe0f-next-meeting",children:[]}],m={toc:s};function c(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\ufe0f-team-identity-meeting-notes---2020-08-05"},"\ud83d\uddd3\ufe0f Team Identity Meeting Notes - 2020-08-05"),(0,i.kt)("p",null,"The goal of this meeting is to get to a stage where we can get start development."),(0,i.kt)("h2",{id:"-participants"},"\ud83d\udc65 Participants"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"@Thoralf-M"),(0,i.kt)("li",{parentName:"ul"},"@tensor-programming"),(0,i.kt)("li",{parentName:"ul"},"@JelleMillenaar"),(0,i.kt)("li",{parentName:"ul"},"@huhn511")),(0,i.kt)("h2",{id:"-discussion-topics"},"\ud83d\udcac Discussion topics"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Discuss Workflows (git, clickup, etc)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"gitflow (branch prefixes)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"/bugfix, /feat/crate_name, /docs, /meeting"),(0,i.kt)("li",{parentName:"ul"},"get approved by atleast 1 other senior dev"))))),(0,i.kt)("li",{parentName:"ul"},"Discuss project folder structure",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"follow the bee structure",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"for each crate a folder in the top"),(0,i.kt)("li",{parentName:"ul"},"docs++ in root directory"))),(0,i.kt)("li",{parentName:"ul"},"keep the tests in seperate files"),(0,i.kt)("li",{parentName:"ul"},"(FFI) Bindings folder like in this git",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/iota.rs"},"https://github.com/iotaledger/iota.rs")),(0,i.kt)("li",{parentName:"ul"},"Research other git repos (@huhn)"),(0,i.kt)("li",{parentName:"ul"},"Make a good documentation about lib bindings"))))),(0,i.kt)("li",{parentName:"ul"},"Discuss packages names (crates.io, npmjs.org)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"iota_identity (high level)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"iota_identity"),(0,i.kt)("li",{parentName:"ul"},"npmjs = @iota/identity"))),(0,i.kt)("li",{parentName:"ul"},"identity_engine (low level)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"expose individual crates"),(0,i.kt)("li",{parentName:"ul"},"identity_cratename"),(0,i.kt)("li",{parentName:"ul"},"Examples: ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"identity_doc"),(0,i.kt)("li",{parentName:"ul"},"identity_iotaintegration"),(0,i.kt)("li",{parentName:"ul"},"identity_resolver"),(0,i.kt)("li",{parentName:"ul"},"identity_didcomms"),(0,i.kt)("li",{parentName:"ul"},"identity_"))))))),(0,i.kt)("li",{parentName:"ul"},"DID method name",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"did:example:123456789abcdefghi -> example = DID method name",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"iota <----"),(0,i.kt)("li",{parentName:"ul"},"iot"),(0,i.kt)("li",{parentName:"ul"},"tangle"))))),(0,i.kt)("li",{parentName:"ul"},"Chrysalis Pt2 changes",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"tx structure",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"-> stick to the current structure"),(0,i.kt)("li",{parentName:"ul"},"use created and updated timestamps from did spec"))),(0,i.kt)("li",{parentName:"ul"},"address format"))),(0,i.kt)("li",{parentName:"ul"},"Setting up a whiteboarding session: Identity tx's",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Invite externals!",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Sven Feuchtm\xfcller"),(0,i.kt)("li",{parentName:"ul"},"Olaf van Wijk"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://miro.com/"},"https://miro.com/")),(0,i.kt)("li",{parentName:"ul"},"3h session"),(0,i.kt)("li",{parentName:"ul"},"record it for internal"))),(0,i.kt)("li",{parentName:"ul"},"General",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Is there a way to bind directly to js/typescript (without wasm)")))),(0,i.kt)("h2",{id:"-week-goals"},"\ud83c\udfaf Week Goals"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Whiteboard session")),(0,i.kt)("h2",{id:"\ufe0f-next-meeting"},"\u23ed\ufe0f Next Meeting"),(0,i.kt)("p",null,"Wednesday, 2020-08-12 - 17:00 to 18:00 (CEST)"))}c.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,k=c["".concat(u,".").concat(d)]||c[d]||m[d]||i;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);