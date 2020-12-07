(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{321:function(e,t,n){"use strict";n.r(t);var o=n(1),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"adr-029-check-block-txs-before-prevote"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#adr-029-check-block-txs-before-prevote"}}),e._v(" ADR 029: Check block txs before prevote")]),e._v(" "),n("h2",{attrs:{id:"changelog"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}}),e._v(" Changelog")]),e._v(" "),n("p",[e._v("04-10-2018: Update with link to issue\n"),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/2384",target:"_blank",rel:"noopener noreferrer"}},[e._v("#2384"),n("OutboundLink")],1),e._v(" and reason for rejection\n19-09-2018: Initial Draft")]),e._v(" "),n("h2",{attrs:{id:"context"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#context"}}),e._v(" Context")]),e._v(" "),n("p",[e._v("We currently check a tx's validity through 2 ways.")]),e._v(" "),n("ol",[n("li",[e._v("Through checkTx in mempool connection.")]),e._v(" "),n("li",[e._v("Through deliverTx in consensus connection.")])]),e._v(" "),n("p",[e._v("The 1st is called when external tx comes in, so the node should be a proposer this time. The 2nd is called when external block comes in and reach the commit phase, the node doesn't need to be the proposer of the block, however it should check the txs in that block.")]),e._v(" "),n("p",[e._v("In the 2nd situation, if there are many invalid txs in the block, it would be too late for all nodes to discover that most txs in the block are invalid, and we'd better not record invalid txs in the blockchain too.")]),e._v(" "),n("h2",{attrs:{id:"proposed-solution"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#proposed-solution"}}),e._v(" Proposed solution")]),e._v(" "),n("p",[e._v("Therefore, we should find a way to check the txs' validity before send out a prevote. Currently we have cs.isProposalComplete() to judge whether a block is complete. We can have")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('func (blockExec *BlockExecutor) CheckBlock(block *types.Block) error {\n   // check txs of block.\n   for _, tx := range block.Txs {\n      reqRes := blockExec.proxyApp.CheckTxAsync(tx)\n      reqRes.Wait()\n      if reqRes.Response == nil || reqRes.Response.GetCheckTx() == nil || reqRes.Response.GetCheckTx().Code != abci.CodeTypeOK {\n         return errors.Errorf("tx %v check failed. response: %v", tx, reqRes.Response)\n      }\n   }\n   return nil\n}\n')])])]),n("p",[e._v("such a method in BlockExecutor to check all txs' validity in that block.")]),e._v(" "),n("p",[e._v("However, this method should not be implemented like that, because checkTx will share the same state used in mempool in the app.  So we should define a new interface method checkBlock in Application to indicate it to use the same state as deliverTx.")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("type Application interface {\n   // Info/Query Connection\n   Info(RequestInfo) ResponseInfo                // Return application info\n   SetOption(RequestSetOption) ResponseSetOption // Set application option\n   Query(RequestQuery) ResponseQuery             // Query for state\n\n   // Mempool Connection\n   CheckTx(tx []byte) ResponseCheckTx // Validate a tx for the mempool\n\n   // Consensus Connection\n   InitChain(RequestInitChain) ResponseInitChain // Initialize blockchain with validators and other info from TendermintCore\n   CheckBlock(RequestCheckBlock) ResponseCheckBlock\n   BeginBlock(RequestBeginBlock) ResponseBeginBlock // Signals the beginning of a block\n   DeliverTx(tx []byte) ResponseDeliverTx           // Deliver a tx for full processing\n   EndBlock(RequestEndBlock) ResponseEndBlock       // Signals the end of a block, returns changes to the validator set\n   Commit() ResponseCommit                          // Commit the state and return the application Merkle root hash\n}\n")])])]),n("p",[e._v("All app should implement that method. For example, counter:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v('func (app *CounterApplication) CheckBlock(block types.Request_CheckBlock) types.ResponseCheckBlock {\n   if app.serial {\n   \t  app.originalTxCount = app.txCount   //backup the txCount state\n      for _, tx := range block.CheckBlock.Block.Txs {\n         if len(tx) > 8 {\n            return types.ResponseCheckBlock{\n               Code: code.CodeTypeEncodingError,\n               Log:  fmt.Sprintf("Max tx size is 8 bytes, got %d", len(tx))}\n         }\n         tx8 := make([]byte, 8)\n         copy(tx8[len(tx8)-len(tx):], tx)\n         txValue := binary.BigEndian.Uint64(tx8)\n         if txValue < uint64(app.txCount) {\n            return types.ResponseCheckBlock{\n               Code: code.CodeTypeBadNonce,\n               Log:  fmt.Sprintf("Invalid nonce. Expected >= %v, got %v", app.txCount, txValue)}\n         }\n         app.txCount++\n      }\n   }\n   return types.ResponseCheckBlock{Code: code.CodeTypeOK}\n}\n')])])]),n("p",[e._v("In BeginBlock, the app should restore the state to the orignal state before checking the block:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("func (app *CounterApplication) DeliverTx(tx []byte) types.ResponseDeliverTx {\n   if app.serial {\n      app.txCount = app.originalTxCount   //restore the txCount state\n   }\n   app.txCount++\n   return types.ResponseDeliverTx{Code: code.CodeTypeOK}\n}\n")])])]),n("p",[e._v("The txCount is like the nonce in ethermint, it should be restored when entering the deliverTx phase. While some operation like checking the tx signature needs not to be done again. So the deliverTx can focus on how a tx can be applied, ignoring the checking of the tx, because all the checking has already been done in the checkBlock phase before.")]),e._v(" "),n("p",[e._v("An optional optimization is alter the deliverTx to deliverBlock. For the block has already been checked by checkBlock, so all the txs in it are valid. So the app can cache the block, and in the deliverBlock phase, it just needs to apply the block in the cache. This optimization can save network current in deliverTx.")]),e._v(" "),n("h2",{attrs:{id:"status"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#status"}}),e._v(" Status")]),e._v(" "),n("p",[e._v("Rejected")]),e._v(" "),n("h2",{attrs:{id:"decision"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#decision"}}),e._v(" Decision")]),e._v(" "),n("p",[e._v("Performance impact is considered too great. See "),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/2384",target:"_blank",rel:"noopener noreferrer"}},[e._v("#2384"),n("OutboundLink")],1)]),e._v(" "),n("h2",{attrs:{id:"consequences"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}}),e._v(" Consequences")]),e._v(" "),n("h3",{attrs:{id:"positive"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#positive"}}),e._v(" Positive")]),e._v(" "),n("ul",[n("li",[e._v("more robust to defend the adversary to propose a block full of invalid txs.")])]),e._v(" "),n("h3",{attrs:{id:"negative"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#negative"}}),e._v(" Negative")]),e._v(" "),n("ul",[n("li",[e._v("add a new interface method. app logic needs to adjust to appeal to it.")]),e._v(" "),n("li",[e._v("sending all the tx data over the ABCI twice")]),e._v(" "),n("li",[e._v("potentially redundant validations (eg. signature checks in both CheckBlock and\nDeliverTx)")])]),e._v(" "),n("h3",{attrs:{id:"neutral"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}}),e._v(" Neutral")])])}),[],!1,null,null,null);t.default=a.exports}}]);