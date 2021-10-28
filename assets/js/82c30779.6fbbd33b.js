"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[4285],{92651:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return h}});var a=n(74034),l=n(79973),r=(n(67294),n(3905)),o=n(31137),i=n(71871),u=["components"],s={description:"You can find the source code for Bee in the official Bee repository. Before you can install Bee from source, you will need to install some required dependencies.",image:"/img/logo/bee_logo.png",keywords:["nodes","setup","set up","windows","macOS","linux","Debian"]},c="Set Up a Node",d={unversionedId:"setup_a_node",id:"setup_a_node",isDocsHomePage:!1,title:"Set Up a Node",description:"You can find the source code for Bee in the official Bee repository. Before you can install Bee from source, you will need to install some required dependencies.",source:"@site/external/bee/documentation/docs/setup_a_node.mdx",sourceDirName:".",slug:"/setup_a_node",permalink:"/bee/setup_a_node",editUrl:"https://github.com/iotaledger/bee/edit/dev/external/bee/documentation/docs/setup_a_node.mdx",tags:[],version:"current",frontMatter:{description:"You can find the source code for Bee in the official Bee repository. Before you can install Bee from source, you will need to install some required dependencies.",image:"/img/logo/bee_logo.png",keywords:["nodes","setup","set up","windows","macOS","linux","Debian"]},sidebar:"mySidebar",previous:{title:"Configuration",permalink:"/bee/configuration"},next:{title:"Overview",permalink:"/bee/crate_overview"}},p=[{value:"Installing from Source",id:"installing-from-source",children:[{value:"Dependency Packages",id:"dependency-packages",children:[],level:3},{value:"Installing Rust",id:"installing-rust",children:[],level:3},{value:"Updating Rust",id:"updating-rust",children:[],level:3}],level:2},{value:"Compiling the Bee Node",id:"compiling-the-bee-node",children:[{value:"Download the Source",id:"download-the-source",children:[{value:"Compiling",id:"compiling",children:[],level:4}],level:3},{value:"With Dashboard",id:"with-dashboard",children:[],level:3},{value:"Without dashboard",id:"without-dashboard",children:[],level:3},{value:"Running",id:"running",children:[],level:3}],level:2}],m={toc:p};function h(e){var t=e.components,n=(0,l.Z)(e,u);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"set-up-a-node"},"Set Up a Node"),(0,r.kt)("p",null,"You can find the source code for Bee in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/bee"},"official Bee repository"),".  Before you can install Bee from source, you will need to install some required dependencies."),(0,r.kt)("h2",{id:"installing-from-source"},"Installing from Source"),(0,r.kt)("h3",{id:"dependency-packages"},"Dependency Packages"),(0,r.kt)("p",null,"Before starting the installation process, you should make sure your system has all the required dependencies. "),(0,r.kt)(o.Z,{groupId:"operating-systems",defaultValue:"debian",values:[{label:"Debian",value:"debian"},{label:"macOS",value:"mac"},{label:"Windows",value:"win"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"debian",mdxType:"TabItem"},(0,r.kt)("p",null,"To run a Bee node in a Debian base system you will need to install the following packages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"git")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://packages.debian.org/sid/build-essential"},"build-essential")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cmake.org/"},"cmake")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://packages.debian.org/sid/pkg-config"},"pkg-config")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://packages.debian.org/sid/librocksdb-dev"},"librocksdb-dev")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://apt.llvm.org/"},"llvm")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://packages.debian.org/search?keywords=clang"},"clang")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://packages.debian.org/unstable/libclang-dev"},"libclang-dev")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://packages.debian.org/jessie/libssl-dev"},"libssl-dev"))),(0,r.kt)("p",null,"To install all of these packages, you can run the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"apt-get update\napt-get upgrade\napt-get install git npm build-essential cmake pkg-config librocksdb-dev llvm clang libclang-dev libssl-dev\n"))),(0,r.kt)(i.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)("p",null,"To run a Bee node in a macOS system, you will need to install the following packages using the ",(0,r.kt)("a",{parentName:"p",href:"https://brew.sh/"},"brew")," package manager:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cmake.org/"},"cmake")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npm"))),(0,r.kt)("p",null,"You can run the following command to install brew:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,r.kt)("p",null,"After the installer finishes, you can use brew to install the required packages by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"brew install cmake npm\n"))),(0,r.kt)(i.Z,{value:"win",mdxType:"TabItem"},(0,r.kt)("p",null,"To run a Bee node in a Windows system, you will need to install the following packages using the\n",(0,r.kt)("a",{parentName:"p",href:"https://chocolatey.org/"},"chocolatey")," package manager:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://cmake.org/"},"cmake")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"nodejs-lts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"git"))),(0,r.kt)("p",null,"To install chocolatey, open Powershell and execute the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))\n")),(0,r.kt)("p",null,"After the installer finishes, you can use chocolatey to install the required packages by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"choco install git --params '/NoAutoCrlf' nodejs-lts cmake --installargs 'ADD_CMAKE_TO_PATH=System' llvm\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You will need to restart Powershell for your changes to take effect."))))),(0,r.kt)("h3",{id:"installing-rust"},"Installing Rust"),(0,r.kt)("p",null,"You will need to install ",(0,r.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/"},"Rust")," in order to run a Bee node.  You should install version is ",(0,r.kt)("a",{parentName:"p",href:"https://blog.rust-lang.org/2021/03/25/Rust-1.51.0.html"},"1.51"),", or above."),(0,r.kt)(o.Z,{groupId:"operating-systems",defaultValue:"debian",values:[{label:"Debian",value:"debian"},{label:"macOS",value:"mac"},{label:"Windows",value:"win"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"debian",mdxType:"TabItem"},(0,r.kt)("p",null,"You can install Rust in a Debian system by running the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\nsource $HOME/.cargo/env\n"))),(0,r.kt)(i.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)("p",null,"You can install Rust in a macOS system by running the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\nsource $HOME/.cargo/env\n"))),(0,r.kt)(i.Z,{value:"win",mdxType:"TabItem"},(0,r.kt)("p",null,"You can find installation instructions for the Windows system ",(0,r.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/learn/get-started"},"in the official Rust documentation"),"."))),(0,r.kt)("h3",{id:"updating-rust"},"Updating Rust"),(0,r.kt)("p",null,"You can use ",(0,r.kt)("a",{parentName:"p",href:"https://rustup.rs/"},"rustup")," to update your Rust version by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"rustup update\n")),(0,r.kt)("h2",{id:"compiling-the-bee-node"},"Compiling the Bee Node"),(0,r.kt)("h3",{id:"download-the-source"},"Download the Source"),(0,r.kt)("p",null,"Once you have installed all the required dependencies, you can start compiling the Bee Node.  To do so, you can simply clone the source code by running the following command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/iotaledger/bee.git --branch chrysalis-pt-2\n")),(0,r.kt)("h4",{id:"compiling"},"Compiling"),(0,r.kt)("p",null,"Before you start compiling Bee, you should change your current directory to ",(0,r.kt)("inlineCode",{parentName:"p"},"bee/bee-node"),".  You can do so by running the following command from the same directory where you downloaded the source:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd bee/bee-node\n")),(0,r.kt)("p",null,"You can compile Bee in two manners:"),(0,r.kt)("h3",{id:"with-dashboard"},"With Dashboard"),(0,r.kt)("p",null,"If you want to build Bee with its Dashboard, you should run the following commands:"),(0,r.kt)(o.Z,{groupId:"operating-systems",defaultValue:"debian",values:[{label:"Debian",value:"debian"},{label:"macOS",value:"mac"},{label:"Windows",value:"win"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"debian",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git submodule update --init\ncd src/plugins/dashboard/frontend\nnpm install\nnpm run build-bee\ncd -\ncargo build --release --features dashboard\n"))),(0,r.kt)(i.Z,{value:"mac",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git submodule update --init\ncd src/plugins/dashboard/frontend\nnpm install\nnpm run build-bee\ncd -\ncargo build --release --features dashboard\n"))),(0,r.kt)(i.Z,{value:"win",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git submodule update --init\ncd src/plugins/dashboard/frontend\nnpm install\nnpm run build-bee\ncd ../../../../\ncargo build --release --features dashboard\n")))),(0,r.kt)("h3",{id:"without-dashboard"},"Without dashboard"),(0,r.kt)("p",null,"If you want to build Bee without its Dashboard, you should run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cargo build --release\n")),(0,r.kt)("h3",{id:"running"},"Running"),(0,r.kt)("p",null,"Once you have downloaded and compiled Bee, you should copy make a copy of the example config file.  Be sure to review and update your configuration.  You can find more information on configuring bee in the ",(0,r.kt)("a",{parentName:"p",href:"/bee/configuration"},"configuration section"),"."),(0,r.kt)("p",null,"To copy the example configuration file, you should run the following command: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cp config.example.toml config.toml\n")),(0,r.kt)("p",null,"Once you have copied and updated the configuration, you can run your Bee node by executing the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"../target/release/bee\n")))}h.isMDXComponent=!0},71871:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,l=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:l},t)}},31137:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(74034),l=n(67294),r=n(5730),o=n(54179);var i=function(){var e=(0,l.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(3978),s=n(86010),c="tabItem_1uMI";function d(e){var t,n,a,r=e.lazy,o=e.block,d=e.defaultValue,p=e.values,m=e.groupId,h=e.className,g=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=p?p:g.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),b=(0,u.lx)(f,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(t=null!=d?d:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=g[0])?void 0:a.props.value;if(null!==k&&!f.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=i(),y=v.tabGroupChoices,w=v.setTabGroupChoices,N=(0,l.useState)(k),T=N[0],x=N[1],O=[],S=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var B=y[m];null!=B&&B!==T&&f.some((function(e){return e.value===B}))&&x(B)}var D=function(e){var t=e.currentTarget,n=O.indexOf(t),a=f[n].value;a!==T&&(S(t),x(a),null!=m&&w(m,a))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;n=O[a]||O[0];break;case"ArrowLeft":var l=O.indexOf(e.currentTarget)-1;n=O[l]||O[O.length-1]}null==(t=n)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},h)},f.map((function(e){var t=e.value,n=e.label;return l.createElement("li",{role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,className:(0,s.Z)("tabs__item",c,{"tabs__item--active":T===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:E,onFocus:D,onClick:D},null!=n?n:t)}))),r?(0,l.cloneElement)(g.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function p(e){var t=(0,r.Z)();return l.createElement(d,(0,a.Z)({key:String(t)},e))}},54179:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(n),m=l,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);