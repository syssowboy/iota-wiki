"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[30792],{26159:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var n=r(74034),a=r(79973),i=(r(67294),r(3905)),l=["components"],o={title:"Getting Started with Rust",sidebar_label:"Getting Started",description:"Getting started with the IOTA Identity Rust Library.",image:"/img/Identity_icon.png",keywords:["Rust","Identity"]},s=void 0,u={unversionedId:"libraries/rust/getting_started",id:"libraries/rust/getting_started",isDocsHomePage:!1,title:"Getting Started with Rust",description:"Getting started with the IOTA Identity Rust Library.",source:"@site/external/identity.rs/documentation/docs/libraries/rust/getting_started.md",sourceDirName:"libraries/rust",slug:"/libraries/rust/getting_started",permalink:"/identity.rs/libraries/rust/getting_started",editUrl:"https://github.com/iotaledger/identity.rs/edit/dev/external/identity.rs/documentation/docs/libraries/rust/getting_started.md",tags:[],version:"current",frontMatter:{title:"Getting Started with Rust",sidebar_label:"Getting Started",description:"Getting started with the IOTA Identity Rust Library.",image:"/img/Identity_icon.png",keywords:["Rust","Identity"]},sidebar:"docs",previous:{title:"Signature Schemes",permalink:"/identity.rs/advanced/signature_schemes"},next:{title:"Cheat Sheet",permalink:"/identity.rs/libraries/rust/cheat_sheet"}},c=[{value:"Requirements",id:"requirements",children:[],level:2},{value:"Include the Library",id:"include-the-library",children:[{value:"Latest Stable Release",id:"latest-stable-release",children:[],level:3},{value:"Development Release",id:"development-release",children:[],level:3}],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"API Reference",id:"api-reference",children:[],level:2}],p={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.rust-lang.org/"},"Rust")," (>= 1.51)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/cargo/"},"Cargo")," (>= 1.51)")),(0,i.kt)("h2",{id:"include-the-library"},"Include the Library"),(0,i.kt)("p",null,"To include IOTA Identity in your project add it as a dependency in your ",(0,i.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),":"),(0,i.kt)("h3",{id:"latest-stable-release"},"Latest Stable Release"),(0,i.kt)("p",null,"This version matches the ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," branch of this repository. It is ",(0,i.kt)("strong",{parentName:"p"},"stable")," and will have ",(0,i.kt)("strong",{parentName:"p"},"changelogs"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'[dependencies]\nidentity = { git = "https://github.com/iotaledger/identity.rs", branch = "main"}\n')),(0,i.kt)("h3",{id:"development-release"},"Development Release"),(0,i.kt)("p",null,"This version matches the ",(0,i.kt)("inlineCode",{parentName:"p"},"dev")," branch of this repository. It has all the ",(0,i.kt)("strong",{parentName:"p"},"latest features"),", but as such it ",(0,i.kt)("strong",{parentName:"p"},"may also have undocumented breaking changes"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'[dependencies]\nidentity = { git = "https://github.com/iotaledger/identity.rs", branch = "dev"}\n')),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"To try out the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/identity.rs/tree/main/examples"},"examples"),", you should:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Clone the repository:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/iotaledger/identity.rs\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Build the repository:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cargo build\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Run your first example:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cargo run --example getting_started\n")),(0,i.kt)("h2",{id:"api-reference"},"API Reference"),(0,i.kt)("p",null,"If you would like to build the ",(0,i.kt)("a",{parentName:"p",href:"api_reference"},"API Reference")," yourself from source, you can do so by running the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"cargo doc --document-private-items --no-deps --open\n")))}d.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(g,l(l({ref:t},c),{},{components:r})):n.createElement(g,l({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);