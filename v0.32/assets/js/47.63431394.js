(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{320:function(t,s,n){"use strict";n.r(s);var a=n(1),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"indexing-transactions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#indexing-transactions"}}),t._v(" Indexing Transactions")]),t._v(" "),n("p",[t._v("Tendermint allows you to index transactions and later query or subscribe\nto their results.")]),t._v(" "),n("p",[t._v("Events can be used to index transactions and blocks according to what happened\nduring their execution. Note that the set of events returned for a block from\n"),n("code",[t._v("BeginBlock")]),t._v(" and "),n("code",[t._v("EndBlock")]),t._v(" are merged. In case both methods return the same\ntag, only the value defined in "),n("code",[t._v("EndBlock")]),t._v(" is used.")]),t._v(" "),n("p",[t._v("Each event contains a type and a list of attributes, which are key-value pairs\ndenoting something about what happened during the method's execution. For more\ndetails on "),n("code",[t._v("Events")]),t._v(", see the "),n("router-link",{attrs:{to:"/spec/abci/abci.html"}},[t._v("ABCI")]),t._v(" documentation.")],1),t._v(" "),n("p",[t._v("Let's take a look at the "),n("code",[t._v("[tx_index]")]),t._v(" config section:")]),t._v(" "),n("div",{staticClass:"language-toml extra-class"},[n("pre",{pre:!0,attrs:{class:"language-toml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("##### transactions indexer configuration options #####")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token table class-name"}},[t._v("tx_index")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# What indexer to use for transactions")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Options:")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#   1) "null"')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#   2) "kv" (default) - the simplest possible indexer, backed by key-value storage (defaults to levelDB; see DBBackend).')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("indexer")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"kv"')]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# Comma-separated list of tags to index (by default the only tag is "tx.hash")')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# You can also index transactions by height by adding "tx.height" tag here.')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# It's recommended to index only a subset of tags due to possible memory")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# bloat. This is, of course, depends on the indexer's DB and the volume of")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# transactions.")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("index_tags")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# When set to true, tells indexer to index all tags (predefined tags:")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# "tx.hash", "tx.height" and all tags from DeliverTx responses).')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Note this may be not desirable (see the comment above). IndexTags has a")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# precedence over IndexAllTags (i.e. when given both, IndexTags will be")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# indexed).")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token key property"}},[t._v("index_all_tags")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n")])])]),n("p",[t._v("By default, Tendermint will index all transactions by their respective\nhashes using an embedded simple indexer. Note, we are planning to add\nmore options in the future (e.g., PostgreSQL indexer).")]),t._v(" "),n("h2",{attrs:{id:"adding-events"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#adding-events"}}),t._v(" Adding Events")]),t._v(" "),n("p",[t._v("In your application's "),n("code",[t._v("DeliverTx")]),t._v(" method, add the "),n("code",[t._v("Events")]),t._v(' field with pairs of\nUTF-8 encoded strings (e.g. "transfer.sender": "Bob", "transfer.recipient": "Alice",\n"transfer.balance": "100").')]),t._v(" "),n("p",[t._v("Example:")]),t._v(" "),n("div",{staticClass:"language-go extra-class"},[n("pre",{pre:!0,attrs:{class:"language-go"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("app "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("KVStoreApplication"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("DeliverTx")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("RequestDeliverTx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Result "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//...")]),t._v("\n    events "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("abci"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Event"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            Type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"transfer"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            Attributes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" cmn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("KVPairs"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                cmn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("KVPair"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("byte")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sender"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("byte")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Bob"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                cmn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("KVPair"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("byte")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"recipient"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("byte")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Alice"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                cmn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("KVPair"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("byte")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"balance"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("byte")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"100"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" types"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ResponseDeliverTx"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("Code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" code"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CodeTypeOK"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Events"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" events"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v('If you want Tendermint to only index transactions by "transfer.sender" event type,\nin the config set '),n("code",[t._v('tx_index.index_tags="transfer.sender"')]),t._v(". If you to index all events,\nset "),n("code",[t._v("index_all_tags=true")])]),t._v(" "),n("p",[t._v("Note, there are a few predefined event types:")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("tx.hash")]),t._v(" (transaction's hash)")]),t._v(" "),n("li",[n("code",[t._v("tx.height")]),t._v(" (height of the block transaction was committed in)")])]),t._v(" "),n("p",[t._v("Tendermint will throw a warning if you try to use any of the above keys.")]),t._v(" "),n("h2",{attrs:{id:"querying-transactions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#querying-transactions"}}),t._v(" Querying Transactions")]),t._v(" "),n("p",[t._v("You can query the transaction results by calling "),n("code",[t._v("/tx_search")]),t._v(" RPC endpoint:")]),t._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"localhost:26657/tx_search?query='),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("account.name='igor'"),n("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v('&prove=true"')]),t._v("\n")])])]),n("p",[t._v("Check out "),n("a",{attrs:{href:"https://tendermint.com/rpc/#txsearch",target:"_blank",rel:"noopener noreferrer"}},[t._v("API docs"),n("OutboundLink")],1),t._v(" for more information\non query syntax and other options.")]),t._v(" "),n("h2",{attrs:{id:"subscribing-to-transactions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#subscribing-to-transactions"}}),t._v(" Subscribing to Transactions")]),t._v(" "),n("p",[t._v("Clients can subscribe to transactions with the given tags via Websocket by providing\na query to "),n("code",[t._v("/subscribe")]),t._v(" RPC endpoint.")]),t._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"jsonrpc"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.0"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"method"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"subscribe"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"params"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v('"query"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"account.name='igor'\"")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("Check out "),n("a",{attrs:{href:"https://tendermint.com/rpc/#subscribe",target:"_blank",rel:"noopener noreferrer"}},[t._v("API docs"),n("OutboundLink")],1),t._v(" for more information\non query syntax and other options.")])])}),[],!1,null,null,null);s.default=e.exports}}]);