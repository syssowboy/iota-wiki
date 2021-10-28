"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[83593],{1747:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return f},default:function(){return p},frontMatter:function(){return l},metadata:function(){return h},toc:function(){return u}});var i=t(74034),o=t(79973),a=(t(67294),t(3905)),s=t(31137),r=t(71871),d=t(48235),c=["components"],l={title:"Resolve a DID history",sidebar_label:"Resolve a DID history",description:"Resolve a DID history using the IOTA Identity Rust Library or its WASM binding",image:"/img/Identity_icon.png",keywords:["Rust","WASM"]},f=void 0,h={unversionedId:"decentralized_identifiers/resolve_history",id:"decentralized_identifiers/resolve_history",isDocsHomePage:!1,title:"Resolve a DID history",description:"Resolve a DID history using the IOTA Identity Rust Library or its WASM binding",source:"@site/external/identity.rs/documentation/docs/decentralized_identifiers/resolve_history.mdx",sourceDirName:"decentralized_identifiers",slug:"/decentralized_identifiers/resolve_history",permalink:"/identity.rs/decentralized_identifiers/resolve_history",editUrl:"https://github.com/iotaledger/identity.rs/edit/dev/external/identity.rs/documentation/docs/decentralized_identifiers/resolve_history.mdx",tags:[],version:"current",frontMatter:{title:"Resolve a DID history",sidebar_label:"Resolve a DID history",description:"Resolve a DID history using the IOTA Identity Rust Library or its WASM binding",image:"/img/Identity_icon.png",keywords:["Rust","WASM"]},sidebar:"docs",previous:{title:"Resolve",permalink:"/identity.rs/decentralized_identifiers/resolve"},next:{title:"Create a Private Tangle",permalink:"/identity.rs/decentralized_identifiers/private_tangle"}},u=[{value:"Example",id:"example",children:[],level:2}],m={toc:u};function p(e){var n=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Below is an advanced example that performs multiple diff chain and integration chain updates, and demonstrates how to resolve the DID Document history to view these chains."),(0,a.kt)(s.Z,{groupId:"programming-languages",defaultValue:"rust",values:[{label:"Rust",value:"rust"},{label:"Node.js",value:"nodejs"}],mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"rust",mdxType:"TabItem"},(0,a.kt)(d.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2020-2021 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! Advanced example that performs multiple diff chain and integration chain updates and\n//! demonstrates how to resolve the DID Document history to view these chains.\n//!\n//! cargo run --example did_history\n\nuse identity::core::json;\nuse identity::core::FromJson;\nuse identity::core::Timestamp;\nuse identity::crypto::KeyPair;\nuse identity::did::MethodScope;\nuse identity::did::Service;\nuse identity::did::DID;\nuse identity::iota::ChainHistory;\nuse identity::iota::Client;\nuse identity::iota::DocumentDiff;\nuse identity::iota::DocumentHistory;\nuse identity::iota::IotaDocument;\nuse identity::iota::IotaVerificationMethod;\nuse identity::iota::Receipt;\nuse identity::iota::Result;\n\nmod create_did;\n\n#[rustfmt::skip]\n#[tokio::main]\nasync fn main() -> Result<()> {\n  // Create a client instance to send messages to the Tangle.\n  let client: Client = Client::new().await?;\n\n  // ===========================================================================\n  // DID Creation\n  // ===========================================================================\n\n  // Create a signed DID Document and KeyPair (see "create_did.rs" example).\n  let (document, keypair, original_receipt): (IotaDocument, KeyPair, Receipt) = create_did::run().await?;\n\n  // ===========================================================================\n  // Integration Chain Spam\n  // ===========================================================================\n\n  // Publish several spam messages to the same index as the integration chain on the Tangle.\n  // These are not valid DID messages and are simply to demonstrate that invalid messages\n  // can be included in the history for debugging invalid DID documents.\n  let int_index: &str = document.integration_index();\n  client.publish_json(int_index, &json!({ "intSpam:1": true })).await?;\n  client.publish_json(int_index, &json!({ "intSpam:2": true })).await?;\n  client.publish_json(int_index, &json!({ "intSpam:3": true })).await?;\n  client.publish_json(int_index, &json!({ "intSpam:4": true })).await?;\n  client.publish_json(int_index, &json!({ "intSpam:5": true })).await?;\n\n  // ===========================================================================\n  // Integration Chain Update 1\n  // ===========================================================================\n\n  // Prepare an integration chain update, which writes the full updated DID document to the Tangle.\n  let int_doc_1 = {\n    let mut int_doc_1 = document.clone();\n\n    // Add a new VerificationMethod with a new KeyPair, with the tag "keys-1"\n    let keys_1: KeyPair = KeyPair::new_ed25519()?;\n    let method_1: IotaVerificationMethod = IotaVerificationMethod::from_did(int_doc_1.id().clone(), &keys_1, "keys-1")?;\n    assert!(int_doc_1.insert_method(MethodScope::VerificationMethod, method_1));\n\n    // Add the `message_id` of the previous message in the chain.\n    // This is REQUIRED in order for the messages to form a chain.\n    // Skipping / forgetting this will render the publication useless.\n    int_doc_1.set_previous_message_id(*original_receipt.message_id());\n    int_doc_1.set_updated(Timestamp::now_utc());\n\n    // Sign the DID Document with the original private key.\n    int_doc_1.sign(keypair.private())?;\n\n    int_doc_1\n  };\n\n  // Publish the updated DID Document to the Tangle, updating the integration chain.\n  // This may take a few seconds to complete proof-of-work.\n  let int_receipt_1: Receipt = client.publish_document(&int_doc_1).await?;\n\n  // ===========================================================================\n  // Diff Chain Update 1\n  // ===========================================================================\n\n  // Prepare a diff chain DID Document update, which writes only the changes to the Tangle.\n  let diff_doc_1: IotaDocument = {\n    let mut diff_doc_1: IotaDocument = int_doc_1.clone();\n\n    // Add a new Service with the tag "linked-domain-1"\n    let service: Service = Service::from_json_value(json!({\n      "id": diff_doc_1.id().to_url().join("#linked-domain-1")?,\n      "type": "LinkedDomains",\n      "serviceEndpoint": "https://iota.org"\n    }))?;\n    assert!(diff_doc_1.insert_service(service));\n    diff_doc_1.set_updated(Timestamp::now_utc());\n    diff_doc_1\n  };\n\n  // Create a signed diff update.\n  //\n  // This is the first diff therefore the `previous_message_id` property is\n  // set to the last DID document published.\n  let diff_1: DocumentDiff = int_doc_1.diff(&diff_doc_1, *int_receipt_1.message_id(), keypair.private())?;\n\n  // Publish the diff to the Tangle, starting a diff chain.\n  let diff_receipt_1: Receipt = client.publish_diff(int_receipt_1.message_id(), &diff_1).await?;\n\n  // ===========================================================================\n  // Diff Chain Update 2\n  // ===========================================================================\n\n  // Prepare another diff chain update.\n  let diff_doc_2: IotaDocument = {\n    let mut diff_doc_2: IotaDocument = diff_doc_1.clone();\n\n    // Add a second Service with the tag "linked-domain-2"\n    let service: Service = Service::from_json_value(json!({\n      "id": diff_doc_2.id().to_url().join("#linked-domain-2")?,\n      "type": "LinkedDomains",\n      "serviceEndpoint": "https://example.com"\n    }))?;\n    diff_doc_2.insert_service(service);\n    diff_doc_2.set_updated(Timestamp::now_utc());\n    diff_doc_2\n  };\n\n  // This is the second diff therefore its `previous_message_id` property is\n  // set to the first published diff to extend the diff chain.\n  let diff_2: DocumentDiff = diff_doc_1.diff(&diff_doc_2, *diff_receipt_1.message_id(), keypair.private())?;\n\n  // Publish the diff to the Tangle.\n  // Note that we still use the `message_id` from the last integration chain message here to link\n  // the current diff chain to that point on the integration chain.\n  let _diff_receipt_2: Receipt = client.publish_diff(int_receipt_1.message_id(), &diff_2).await?;\n\n  // ===========================================================================\n  // Diff Chain Spam\n  // ===========================================================================\n\n  // Publish several spam messages to the same index as the new diff chain on the Tangle.\n  // These are not valid DID diffs and are simply to demonstrate that invalid messages\n  // can be included in the history for debugging invalid DID diffs.\n  let diff_index: &str = &IotaDocument::diff_index(int_receipt_1.message_id())?;\n  client.publish_json(diff_index, &json!({ "diffSpam:1": true })).await?;\n  client.publish_json(diff_index, &json!({ "diffSpam:2": true })).await?;\n  client.publish_json(diff_index, &json!({ "diffSpam:3": true })).await?;\n\n  // ===========================================================================\n  // DID History 1\n  // ===========================================================================\n\n  // Retrieve the message history of the DID.\n  let history_1: DocumentHistory = client.resolve_history(document.id()).await?;\n\n  // The history shows two documents in the integration chain, and two diffs in the diff chain.\n  println!("History (1) = {:#?}", history_1);\n\n  // ===========================================================================\n  // Integration Chain Update 2\n  // ===========================================================================\n\n  // Publish a second integration chain update\n  let int_doc_2 = {\n    let mut int_doc_2 = diff_doc_2.clone();\n\n    // Remove the #keys-1 VerificationMethod\n    int_doc_2.remove_method(int_doc_2.id().to_url().join("#keys-1")?)?;\n\n    // Remove the #linked-domain-1 Service\n    int_doc_2.remove_service(int_doc_2.id().to_url().join("#linked-domain-1")?)?;\n\n    // Add a VerificationMethod with a new KeyPair, called "keys-2"\n    let keys_2: KeyPair = KeyPair::new_ed25519()?;\n    let method_2: IotaVerificationMethod = IotaVerificationMethod::from_did(int_doc_2.id().clone(), &keys_2, "keys-2")?;\n    assert!(int_doc_2.insert_method(MethodScope::VerificationMethod, method_2));\n\n    // Note: the `previous_message_id` points to the `message_id` of the last integration chain\n    //       update, NOT the last diff chain message.\n    int_doc_2.set_previous_message_id(*int_receipt_1.message_id());\n    int_doc_2.set_updated(Timestamp::now_utc());\n    int_doc_2.sign(keypair.private())?;\n\n    int_doc_2\n  };\n  let _int_receipt_2: Receipt = client.publish_document(&int_doc_2).await?;\n\n  // ===========================================================================\n  // DID History 2\n  // ===========================================================================\n\n  // Retrieve the updated message history of the DID.\n  let history_2: DocumentHistory = client.resolve_history(document.id()).await?;\n\n  // The history now shows three documents in the integration chain, and no diffs in the diff chain.\n  // This is because each integration chain document has its own diff chain but only the last one\n  // is used during resolution.\n  println!("History (2) = {:#?}", history_2);\n\n  // ===========================================================================\n  // Diff Chain History\n  // ===========================================================================\n\n  // Fetch the diff chain history of the previous integration chain document.\n  // Old diff chains can be retrieved but they no longer affect DID resolution.\n  let previous_integration_document = &history_2.integration_chain_data[1];\n  let previous_diff_history: ChainHistory<DocumentDiff> = client\n    .resolve_diff_history(previous_integration_document)\n    .await?;\n\n  println!("Previous Diff History = {:#?}", previous_diff_history);\n\n  Ok(())\n}\n')),(0,a.kt)(r.Z,{value:"nodejs",mdxType:"TabItem"},(0,a.kt)(d.Z,{className:"language-javascript",mdxType:"CodeBlock"},'// Copyright 2020-2021 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nimport {\n    Client,\n    Config,\n    Document,\n    Service,\n    KeyPair,\n    VerificationMethod,\n    KeyType,\n    Timestamp, DID\n} from \'@iota/identity-wasm\';\nimport {logExplorerUrl, prettyPrintJSON} from "./utils";\nimport {createIdentity} from "./create_did";\n\n/**\n Advanced example that performs multiple diff chain and integration chain updates and\n demonstrates how to resolve the DID Document history to view these chains.\n\n @param {{defaultNodeURL: string, explorerURL: string, network: Network}} clientConfig\n **/\nasync function resolveHistory(clientConfig) {\n    // Create a default client configuration from the parent config network.\n    const config = Config.fromNetwork(clientConfig.network);\n\n    // Create a client instance to publish messages to the Tangle.\n    const client = Client.fromConfig(config);\n\n    // ===========================================================================\n    // DID Creation\n    // ===========================================================================\n\n    // Create a new identity (see "create_did.js" example).\n    const {doc, key, receipt: originalReceipt} = await createIdentity(clientConfig);\n\n    // ===========================================================================\n    // Integration Chain Spam\n    // ===========================================================================\n\n    // Publish several spam messages to the same index as the integration chain on the Tangle.\n    // These are not valid DID documents and are simply to demonstrate that invalid messages can be\n    // included in the history, potentially for debugging invalid DID documents.\n    const intIndex = doc.integrationIndex();\n    await client.publishJSON(intIndex, {"intSpam:1": true});\n    await client.publishJSON(intIndex, {"intSpam:2": true});\n    await client.publishJSON(intIndex, {"intSpam:3": true});\n    await client.publishJSON(intIndex, {"intSpam:4": true});\n    await client.publishJSON(intIndex, {"intSpam:5": true});\n\n    // ===========================================================================\n    // Integration Chain Update 1\n    // ===========================================================================\n\n    // Prepare an integration chain update, which writes the full updated DID document to the Tangle.\n    const intDoc1 = Document.fromJSON(doc.toJSON()); // clone the Document\n\n    // Add a new VerificationMethod with a new KeyPair, with the tag "keys-1"\n    const keys1 = new KeyPair(KeyType.Ed25519);\n    const method1 = VerificationMethod.fromDID(intDoc1.id, keys1, "keys-1");\n    intDoc1.insertMethod(method1, "VerificationMethod");\n\n    // Add the `messageId` of the previous message in the chain.\n    // This is REQUIRED in order for the messages to form a chain.\n    // Skipping / forgetting this will render the publication useless.\n    intDoc1.previousMessageId = originalReceipt.messageId;\n    intDoc1.updated = Timestamp.nowUTC();\n\n    // Sign the DID Document with the original private key.\n    intDoc1.sign(key);\n\n    // Publish the updated DID Document to the Tangle, updating the integration chain.\n    // This may take a few seconds to complete proof-of-work.\n    const intReceipt1 = await client.publishDocument(intDoc1.toJSON());\n\n    // Log the results.\n    logExplorerUrl("Int. Chain Update (1):", clientConfig.network.toString(), intReceipt1.messageId);\n\n    // ===========================================================================\n    // Diff Chain Update 1\n    // ===========================================================================\n\n    // Prepare a diff chain DID Document update.\n    const diffDoc1 = Document.fromJSON(intDoc1.toJSON()); // clone the Document\n\n    // Add a new Service with the tag "linked-domain-1"\n    let serviceJSON1 = {\n        id: diffDoc1.id + "#linked-domain-1",\n        type: "LinkedDomains",\n        serviceEndpoint: "https://iota.org",\n    };\n    diffDoc1.insertService(Service.fromJSON(serviceJSON1));\n    diffDoc1.updated = Timestamp.nowUTC();\n\n    // Create a signed diff update.\n    //\n    // This is the first diff so the `previousMessageId` property is\n    // set to the last DID document published on the integration chain.\n    const diff1 = intDoc1.diff(diffDoc1, intReceipt1.messageId, key);\n\n    // Publish the diff to the Tangle, starting a diff chain.\n    const diffReceipt1 = await client.publishDiff(intReceipt1.messageId, diff1);\n    logExplorerUrl("Diff Chain Transaction (1):", clientConfig.network.toString(), diffReceipt1.messageId);\n\n    // ===========================================================================\n    // Diff Chain Update 2\n    // ===========================================================================\n\n    // Prepare another diff chain update.\n    const diffDoc2 = Document.fromJSON(diffDoc1.toJSON());\n\n    // Add a second Service with the tag "linked-domain-2"\n    let serviceJSON2 = {\n        id: diffDoc2.id + "#linked-domain-2",\n        type: "LinkedDomains",\n        serviceEndpoint: "https://example.com",\n    };\n    diffDoc2.insertService(Service.fromJSON(serviceJSON2));\n    diffDoc2.updated = Timestamp.nowUTC();\n\n    // This is the second diff therefore its `previousMessageId` property is\n    // set to the first published diff to extend the diff chain.\n    const diff2 = diffDoc1.diff(diffDoc2, diffReceipt1.messageId, key);\n\n    // Publish the diff to the Tangle.\n    // Note that we still use the `messageId` from the last integration chain message here to link\n    // the current diff chain to that point on the integration chain.\n    const diffReceipt2 = await client.publishDiff(intReceipt1.messageId, diff2);\n    logExplorerUrl("Diff Chain Transaction (2):", clientConfig.network.toString(), diffReceipt2.messageId);\n\n    // ===========================================================================\n    // Diff Chain Spam\n    // ===========================================================================\n\n    // Publish several spam messages to the same index as the new diff chain on the Tangle.\n    // These are not valid DID diffs and are simply to demonstrate that invalid messages\n    // can be included in the history for debugging invalid DID diffs.\n    let diffIndex = Document.diffIndex(intReceipt1.messageId);\n    await client.publishJSON(diffIndex, {"diffSpam:1": true});\n    await client.publishJSON(diffIndex, {"diffSpam:2": true});\n    await client.publishJSON(diffIndex, {"diffSpam:3": true});\n\n    // ===========================================================================\n    // DID History 1\n    // ===========================================================================\n\n    // Retrieve the message history of the DID.\n    const history1 = await client.resolveHistory(doc.id.toString());\n\n    // The history shows two documents in the integration chain, and two diffs in the diff chain.\n    prettyPrintJSON(history1, "History (1):");\n\n    // ===========================================================================\n    // Integration Chain Update 2\n    // ===========================================================================\n\n    // Publish a second integration chain update\n    let intDoc2 = Document.fromJSON(diffDoc2.toJSON());\n\n    // Remove the #keys-1 VerificationMethod\n    intDoc2.removeMethod(intDoc2.id.toUrl().join("#keys-1"));\n\n    // Remove the #linked-domain-1 Service\n    intDoc2.removeService(intDoc2.id.toUrl().join("#linked-domain-1"));\n\n    // Add a VerificationMethod with a new KeyPair, called "keys-2"\n    const keys2 = new KeyPair(KeyType.Ed25519);\n    const method2 = VerificationMethod.fromDID(intDoc2.id, keys2, "keys-2");\n    intDoc2.insertMethod(method2, "VerificationMethod");\n\n    // Note: the `previous_message_id` points to the `message_id` of the last integration chain\n    //       update, NOT the last diff chain message.\n    intDoc2.previousMessageId = intReceipt1.messageId;\n    intDoc2.updated = Timestamp.nowUTC();\n    intDoc2.sign(key);\n    const intReceipt2 = await client.publishDocument(intDoc2.toJSON());\n\n    // Log the results.\n    logExplorerUrl("Int. Chain Update (2):", clientConfig.network.toString(), intReceipt2.messageId);\n\n    // ===========================================================================\n    // DID History 2\n    // ===========================================================================\n\n    // Retrieve the updated message history of the DID.\n    const history2 = await client.resolveHistory(doc.id.toString());\n\n    // The history now shows three documents in the integration chain, and no diffs in the diff chain.\n    // This is because each integration chain document has its own diff chain but only the last one\n    // is used during resolution.\n    prettyPrintJSON(history2, "History (2):");\n\n    // ===========================================================================\n    // Diff Chain History\n    // ===========================================================================\n\n    // Fetch the diff chain of the previous integration chain message.\n    // Old diff chains can be retrieved but they no longer affect DID resolution.\n    let previousIntegrationDocument = history2.integrationChainData()[1];\n    let previousDiffHistory = await client.resolveDiffHistory(previousIntegrationDocument);\n    prettyPrintJSON(previousDiffHistory, "Previous Diff History:");\n}\n\nexport {resolveHistory};\n'))))}p.isMDXComponent=!0},71871:function(e,n,t){var i=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,o=e.className;return i.createElement("div",{role:"tabpanel",hidden:t,className:o},n)}},31137:function(e,n,t){t.d(n,{Z:function(){return h}});var i=t(74034),o=t(67294),a=t(5730),s=t(54179);var r=function(){var e=(0,o.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},d=t(3978),c=t(86010),l="tabItem_1uMI";function f(e){var n,t,i,a=e.lazy,s=e.block,f=e.defaultValue,h=e.values,u=e.groupId,m=e.className,p=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),_=null!=h?h:p.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),g=(0,d.lx)(_,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===f?f:null!=(n=null!=f?f:null==(t=p.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(i=p[0])?void 0:i.props.value;if(null!==y&&!_.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+_.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var D=r(),v=D.tabGroupChoices,w=D.setTabGroupChoices,I=(0,o.useState)(y),b=I[0],k=I[1],S=[],T=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=u){var x=v[u];null!=x&&x!==b&&_.some((function(e){return e.value===x}))&&k(x)}var C=function(e){var n=e.currentTarget,t=S.indexOf(n),i=_[t].value;i!==b&&(T(n),k(i),null!=u&&w(u,i))},R=function(e){var n,t=null;switch(e.key){case"ArrowRight":var i=S.indexOf(e.currentTarget)+1;t=S[i]||S[0];break;case"ArrowLeft":var o=S.indexOf(e.currentTarget)-1;t=S[o]||S[S.length-1]}null==(n=t)||n.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":s},m)},_.map((function(e){var n=e.value,t=e.label;return o.createElement("li",{role:"tab",tabIndex:b===n?0:-1,"aria-selected":b===n,className:(0,c.Z)("tabs__item",l,{"tabs__item--active":b===n}),key:n,ref:function(e){return S.push(e)},onKeyDown:R,onFocus:C,onClick:C},null!=t?t:n)}))),a?(0,o.cloneElement)(p.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},p.map((function(e,n){return(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==b})}))))}function h(e){var n=(0,a.Z)();return o.createElement(f,(0,i.Z)({key:String(n)},e))}},54179:function(e,n,t){var i=(0,t(67294).createContext)(void 0);n.Z=i}}]);