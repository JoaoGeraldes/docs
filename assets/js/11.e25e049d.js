(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{396:function(e,t,a){"use strict";a.r(t);var n=a(5),r=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"cw20-tokens"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cw20-tokens"}},[e._v("#")]),e._v(" CW20 Tokens")]),e._v(" "),a("p",[e._v("According to the "),a("a",{attrs:{href:"https://docs.rs/crate/cw20/0.2.3",target:"_blank",rel:"noopener noreferrer"}},[e._v("official documentation"),a("OutboundLink")],1)]),e._v(" "),a("blockquote",[a("p",[e._v("CW20 is a specification for fungible tokens based on CosmWasm. The name and design is loosely based on Ethereum's ERC20 standard, but many changes have been made. The types in here can be imported by contracts that wish to implement this spec, or by contracts that call to any standard cw20 contract.")])]),e._v(" "),a("h2",{attrs:{id:"checking-cw20-balance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#checking-cw20-balance"}},[e._v("#")]),e._v(" Checking CW20 balance")]),e._v(" "),a("ul",[a("li",[e._v("Query to "),a("code",[e._v("/wasm/contracts/<tokenContractAddress>/store")]),e._v(" with query_msg "),a("code",[e._v('{"balance":{"address":"<userAddress>"}}')])]),e._v(" "),a("li",[e._v("Response: "),a("code",[e._v('{"height":"2947306","result":{"balance":"24732816921"}}')])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://tequila-lcd.terra.dev/wasm/contracts/terra1800p00qlxh0nmt0r0u9hv7m4lg042fnafng2t6/store?query_msg=%7B%22balance%22:%7B%22address%22:%22terra1dakqt3s8dywea9advxz4duxkuvglz3a34yczw9%22%7D%7D",target:"_blank",rel:"noopener noreferrer"}},[e._v("Example"),a("OutboundLink")],1)])]),e._v(" "),a("h2",{attrs:{id:"interacting-with-cw20-contract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interacting-with-cw20-contract"}},[e._v("#")]),e._v(" Interacting with CW20 contract")]),e._v(" "),a("ul",[a("li",[e._v("CW20 is a cosmwasm contract and "),a("code",[e._v("wasm/MsgExecuteContract")]),e._v(" is used to interact with it")]),e._v(" "),a("li",[e._v("Breakdown of message payload format is as follows (similar to "),a("code",[e._v("bank/MsgSend")]),e._v(" but "),a("code",[e._v("execute_msg")]),e._v(" is added):")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n  "type": "wasm/MsgExecuteContract",\n  "value": {\n    // sender address\n    "sender": "terra1zyrpkll2xpgcdsz42xm3k8qfnddcdu0w7jzx6y",\n\n    // token contract address\n    "contract": "terra1rz5chzn0g07hp5jx63srpkhv8hd7x8pss20w2e",\n\n    // base64-encoded payload of contract execution message (refer to below)\n    "execute_msg": "ewogICJzZW5kIjogewogICAgImFtb3VudCI6ICIxMDAwMDAwMDAwIiwKICAgICJjb250cmFjdCI6IDxyZWNpcGllbnRDb250cmFjdEFkZHJlc3M+LAogICAgIm1zZyI6ICJleUp6YjIxbFgyMWxjM05oWjJVaU9udDlmUT09IiAKICB9Cn0=",\n\n    // used in case you are sending native tokens along with this message\n    "coins": []\n  }\n}\n')])])]),a("h2",{attrs:{id:"sending-cw20-token-to-another-contract-and-execute-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sending-cw20-token-to-another-contract-and-execute-message"}},[e._v("#")]),e._v(" Sending CW20 token to another contract, and execute message")]),e._v(" "),a("ul",[a("li",[e._v("Example\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://finder.terra.money/tequila-0004/tx/5F42938E56DB7DC91A59EE4013C6DA07E983FB83FE0D42DCB3BAAF8A30495ADB",target:"_blank",rel:"noopener noreferrer"}},[e._v("Finder"),a("OutboundLink")],1),e._v(" (execute_msgs are base64-decoded for readability)")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://tequila-lcd.terra.dev/txs/FA682BA30DABE92086920F44D4DFD45F99F32265AACFB686EB4EA53AFBF6ED1A",target:"_blank",rel:"noopener noreferrer"}},[e._v("Raw result"),a("OutboundLink")],1)])])])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// base64-encode the below message (without the comments), send that as `execute_msg`\n{\n  "send": {\n    // amount of CW20 tokens being transferred\n    "amount": "1000000000",\n\n    // recipient of this transfer\n    "contract": <recipientContractAddress>,\n\n    // execute_msg to be executed in the context of recipient contract\n    "msg": "eyJzb21lX21lc3NhZ2UiOnt9fQ==" \n  }\n}\n')])])]),a("h2",{attrs:{id:"transferring-cw20-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transferring-cw20-token"}},[e._v("#")]),e._v(" Transferring CW20 token")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("transfer")]),e._v(" is different to "),a("code",[e._v("send")]),e._v(", as in it only "),a("strong",[e._v("transfers")]),e._v(" ownership of CW20 balance within the contract, whereas "),a("code",[e._v("send")]),e._v(" is capable of transferring & relays a contract msg to be executed")]),e._v(" "),a("li",[e._v("Example\n"),a("ul",[a("li",[a("a",{attrs:{href:"https://finder.terra.money/tequila-0004/tx/FA682BA30DABE92086920F44D4DFD45F99F32265AACFB686EB4EA53AFBF6ED1A",target:"_blank",rel:"noopener noreferrer"}},[e._v("Finder"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://tequila-lcd.terra.dev/txs/FA682BA30DABE92086920F44D4DFD45F99F32265AACFB686EB4EA53AFBF6ED1A",target:"_blank",rel:"noopener noreferrer"}},[e._v("Raw result"),a("OutboundLink")],1)])])]),e._v(" "),a("li",[e._v("Find other messages at "),a("a",{attrs:{href:"https://docs.rs/crate/cw20/0.2.3",target:"_blank",rel:"noopener noreferrer"}},[e._v("cw20 documentation"),a("OutboundLink")],1)])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('{\n  "transfer": {\n    "recipient": <recipient>,\n    "amount": "100000"\n  },\n}\n')])])])])}),[],!1,null,null,null);t.default=r.exports}}]);