(window.webpackJsonp=window.webpackJsonp||[]).push([[176],{726:function(e,t,a){"use strict";a.r(t);var n=a(1),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"mempool-reactor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mempool-reactor"}},[e._v("#")]),e._v(" Mempool Reactor")]),e._v(" "),a("h2",{attrs:{id:"channels"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#channels"}},[e._v("#")]),e._v(" Channels")]),e._v(" "),a("p",[e._v("See "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/1503",target:"_blank",rel:"noopener noreferrer"}},[e._v("this issue"),a("OutboundLink")],1)]),e._v(" "),a("p",[e._v("Mempool maintains a cache of the last 10000 transactions to prevent\nreplaying old transactions (plus transactions coming from other\nvalidators, who are continually exchanging transactions). Read "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/8cdaa7f515a9d366bbc9f0aff2a263a1a6392ead/docs/app-dev/app-development.md#replay-protection",target:"_blank",rel:"noopener noreferrer"}},[e._v("Replay\nProtection"),a("OutboundLink")],1),e._v("\nfor details.")]),e._v(" "),a("p",[e._v("Sending incorrectly encoded data or data exceeding "),a("code",[e._v("maxMsgSize")]),e._v(" will result\nin stopping the peer.")]),e._v(" "),a("p",[a("code",[e._v("maxMsgSize")]),e._v(" equals "),a("code",[e._v("MaxBatchBytes")]),e._v(" (10MB) + 4 (proto overhead).\n"),a("code",[e._v("MaxBatchBytes")]),e._v(" is a mempool config parameter -> defined locally. The reactor\nsends transactions to the connected peers in batches. The maximum size of one\nbatch is "),a("code",[e._v("MaxBatchBytes")]),e._v(".")]),e._v(" "),a("p",[e._v("The mempool will not send a tx back to any peer which it received it from.")]),e._v(" "),a("p",[e._v("The reactor assigns an "),a("code",[e._v("uint16")]),e._v(" number for each peer and maintains a map from\np2p.ID to "),a("code",[e._v("uint16")]),e._v(". Each mempool transaction carries a list of all the senders\n("),a("code",[e._v("[]uint16")]),e._v("). The list is updated every time mempool receives a transaction it\nis already seen. "),a("code",[e._v("uint16")]),e._v(" assumes that a node will never have over 65535 active\npeers (0 is reserved for unknown source - e.g. RPC).")])])}),[],!1,null,null,null);t.default=o.exports}}]);