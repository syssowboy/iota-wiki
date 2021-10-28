"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[35199],{32521:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var r=n(74034),o=n(79973),a=(n(67294),n(3905)),s=["components"],i={description:"The creator of the smart contract (and nobody else) may withdraw iotas to its address by sending a `withdrawIotas` request.",image:"/img/logo/WASP_logo_dark.png",keywords:["testing","solo","withdraw","tokens"]},c="Sending Tokens to a Smart Contract",l={unversionedId:"guide/solo/sending-funds",id:"guide/solo/sending-funds",isDocsHomePage:!1,title:"Sending Tokens to a Smart Contract",description:"The creator of the smart contract (and nobody else) may withdraw iotas to its address by sending a `withdrawIotas` request.",source:"@site/external/wasp/documentation/docs/guide/solo/sending-funds.md",sourceDirName:"guide/solo",slug:"/guide/solo/sending-funds",permalink:"/wasp/guide/solo/sending-funds",editUrl:"https://github.com/iotaledger/wasp/edit/develop/external/wasp/documentation/docs/guide/solo/sending-funds.md",tags:[],version:"current",frontMatter:{description:"The creator of the smart contract (and nobody else) may withdraw iotas to its address by sending a `withdrawIotas` request.",image:"/img/logo/WASP_logo_dark.png",keywords:["testing","solo","withdraw","tokens"]},sidebar:"tutorialSidebar",previous:{title:"Account Balances",permalink:"/wasp/guide/solo/balances"},next:{title:"Return of Tokens in Case of Failure",permalink:"/wasp/guide/solo/reimbursed-funds"}},d=[],u={toc:d};function p(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sending-tokens-to-a-smart-contract"},"Sending Tokens to a Smart Contract"),(0,a.kt)("p",null,"Let's send some tokens to the smart contract. The following example deploys the\n",(0,a.kt)("inlineCode",{parentName:"p"},"example1")," Rust/Wasm smart contract on the chain and sends 42 iota to it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func TestTutorial6(t *testing.T) {\n env := solo.New(t, false, false, seed)\n chain := env.NewChain(nil, "ex6")\n\n err := chain.DeployWasmContract(nil, "example1", "example_tutorial_bg.wasm")\n require.NoError(t, err)\n\n contractAgentID := iscp.NewAgentID(chain.ChainID.AsAddress(), iscp.Hn("example1"))\n\n userWallet, userAddress := env.NewKeyPairWithFunds(env.NewSeedFromIndex(5))\n userAgentID := iscp.NewAgentID(userAddress, 0)\n\n env.AssertAddressBalance(userAddress, colored.IOTA, solo.Saldo)\n chain.AssertAccountBalance(contractAgentID, colored.IOTA, 0) // empty on-chain\n chain.AssertAccountBalance(userAgentID, colored.IOTA, 0)     // empty on-chain\n\n req := solo.NewCallParams("example1", "storeString", "paramString", "Hello, world!").WithIotas(42)\n _, err = chain.PostRequestSync(req, userWallet)\n require.NoError(t, err)\n\n chain.AssertAccountBalance(contractAgentID, colored.IOTA, 42)\n chain.AssertAccountBalance(userAgentID, colored.IOTA, 0)\n env.AssertAddressBalance(userAddress, colored.IOTA, solo.Saldo-42)\n}\n')),(0,a.kt)("p",null,"The following statements attach 42 iotas to the ordinary call to the ",(0,a.kt)("inlineCode",{parentName:"p"},"storeString")," entry point.\n",(0,a.kt)("inlineCode",{parentName:"p"},"PostRequestSync")," sends the request with the iotas to the smart contract. The 42\niotas appear in the account controlled by the smart contract on its chain."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},' req := solo.NewCallParams("example1", "storeString", "paramString", "Hello, world!").WithIotas(42)\n _, err = chain.PostRequestSync(req, userWallet)\n')),(0,a.kt)("p",null,"So, what does the ",(0,a.kt)("inlineCode",{parentName:"p"},"example1")," smart contract do with these 42 iotas? Nothing!\nHowever, the creator of the smart contract (and nobody else) may withdraw those\niotas to its address by sending a ",(0,a.kt)("inlineCode",{parentName:"p"},"withdrawIotas")," request."),(0,a.kt)("p",null,"What if we send some other colored tokens, not iotas, to the ",(0,a.kt)("inlineCode",{parentName:"p"},"example1"),"\nsmart contract? They will effectively be lost, because the programmer of\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"example1")," smart contract didn't implement a way to deal with colored\ntokens."))}p.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,g=p["".concat(c,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(g,s(s({ref:t},d),{},{components:n})):r.createElement(g,s({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);