"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[93939],{87633:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var a=n(74034),o=n(79973),r=(n(67294),n(3905)),i=["components"],s={keywords:["code generation","schema tool","automatic","repetitive code fragments","robust","schema definition file"],description:"To facilitate the code generation, we decided to use a _schema definition file_ for smart contracts. All aspects of a smart contract that should be known by someone who wants to use the contract are clearly defined in a schema definition file",image:"/img/logo/WASP_logo_dark.png"},c="Smart Contract Schema Tool",l={unversionedId:"guide/schema/schema",id:"guide/schema/schema",isDocsHomePage:!1,title:"Smart Contract Schema Tool",description:"To facilitate the code generation, we decided to use a _schema definition file_ for smart contracts. All aspects of a smart contract that should be known by someone who wants to use the contract are clearly defined in a schema definition file",source:"@site/external/wasp/documentation/docs/guide/schema/schema.mdx",sourceDirName:"guide/schema",slug:"/guide/schema/schema",permalink:"/wasp/guide/schema/schema",editUrl:"https://github.com/iotaledger/wasp/edit/develop/external/wasp/documentation/docs/guide/schema/schema.mdx",tags:[],version:"current",frontMatter:{keywords:["code generation","schema tool","automatic","repetitive code fragments","robust","schema definition file"],description:"To facilitate the code generation, we decided to use a _schema definition file_ for smart contracts. All aspects of a smart contract that should be known by someone who wants to use the contract are clearly defined in a schema definition file",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Function Call Context",permalink:"/wasp/guide/wasm_vm/context"},next:{title:"Using the Schema Tool",permalink:"/wasp/guide/schema/usage"}},u=[],m={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"smart-contract-schema-tool"},"Smart Contract Schema Tool"),(0,r.kt)("p",null,"Smart contracts need to be very robust. The generic nature of WasmLib allows for a lot of\nflexibility, but it also a lot of opportunities to make mistakes. In\naddition, there is a lot of repetitive coding involved. The setup code that is needed for\nevery smart contract must follow strict rules. You want to assure that certain\nfunctions can only be called by specific entities, and that function parameters values\nhave been properly checked before their usage."),(0,r.kt)("p",null,"The best way to increase robustness is by using a code generator that will take care of\nmost repetitive coding tasks. A code generator only needs to be debugged once, after which\nthe generated code is 100% accurate and trustworthy. Another advantage of code generation\nis that you can regenerate code to correctly reflect any changes to the smart contract\ninterface. A code generator can also help you by generating wrapper code that limits what\nyou can do to mirror the intent behind it. This enables compile-time enforcing of some\naspects of the defined smart contract behavior. A code generator can also support multiple\ndifferent programming languages."),(0,r.kt)("p",null,"During the initial experiences creating demo smart contracts for WasmLib, we quickly\nidentified a number of areas where there was a lot of repetitive coding going on. Some\nexamples of repetition were:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Setting up the ",(0,r.kt)("inlineCode",{parentName:"li"},"on_load")," function and keeping it up to date"),(0,r.kt)("li",{parentName:"ul"},"Checking function access rights"),(0,r.kt)("li",{parentName:"ul"},"Verifying function parameter types"),(0,r.kt)("li",{parentName:"ul"},"Verifying the presence of mandatory function parameters"),(0,r.kt)("li",{parentName:"ul"},"Setting up access to state, params, and results maps"),(0,r.kt)("li",{parentName:"ul"},"Defining common strings as constants")),(0,r.kt)("p",null,"To facilitate the code generation, we decided to use a ",(0,r.kt)("em",{parentName:"p"},"schema definition file")," for smart\ncontracts. All aspects of a smart contract that should be known by someone who wants to use\nthe contract are clearly defined in a schema definition file. This schema definition file\nthen becomes the source of truth for how the smart contract works."),(0,r.kt)("p",null,"The schema definition file defines things like the ",(0,r.kt)("a",{parentName:"p",href:"/wasp/guide/schema/state"},"state")," variables that the smart\ncontract uses, the ",(0,r.kt)("a",{parentName:"p",href:"/wasp/guide/schema/funcs"},"Funcs")," and ",(0,r.kt)("a",{parentName:"p",href:"/wasp/guide/schema/views"},"Views")," that the contract implements,\nthe ",(0,r.kt)("a",{parentName:"p",href:"/wasp/guide/schema/access"},"access rights")," for each function, the ",(0,r.kt)("a",{parentName:"p",href:"/wasp/guide/schema/params"},"input parameters"),"\nand ",(0,r.kt)("a",{parentName:"p",href:"/wasp/guide/schema/results"},"output results")," for each function, and additional data structures that the contract uses."),(0,r.kt)("p",null,"With detailed schema information readily available in a single location, it\nbecomes possible to do a lot more than just generating repetitive code fragments. You can\nuse the schema information to generate interfaces for functions, parameters, results, and\nstate that use strict compile-time type-checking. This reduces the likelihood of introducing errors\nsignificantly."),(0,r.kt)("p",null,"Another advantage of knowing everything about important smart contract aspects is that it\nis possible to generate constants to prevent repeating of typo-prone key strings, and\nprecalculate necessary values like Hnames and encode them as constants instead of having\nthe code recalculate them every time they are needed."),(0,r.kt)("p",null,"Similarly, since you know all static keys that are going to be used by the smart contract\nin advance, you can now generate code that will negotiate the corresponding key IDs with\nthe host only once in the ",(0,r.kt)("inlineCode",{parentName:"p"},"on_load")," function, and cache those values for use in future\nfunction calls."),(0,r.kt)("p",null,"The previous two optimizations mean that the code becomes both simpler and more efficient.\nNote that all the improvements described above are independent of the programming language\nused."),(0,r.kt)("p",null,"Future additions that we envision for the schema tool are the automatic generation of smart\ncontract interface classes to use with client side Javascript, and automatic generation\nof a web API for smart contracts. The schema definition file can also provide a starting\npoint for other tooling, for example a tool that automatically audits a smart contract."),(0,r.kt)("p",null,"In the next section we will look at ",(0,r.kt)("a",{parentName:"p",href:"/wasp/guide/schema/usage"},"how the schema tool works"),"."))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=o,p=d["".concat(c,".").concat(h)]||d[h]||m[h]||r;return n?a.createElement(p,i(i({ref:t},u),{},{components:n})):a.createElement(p,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);