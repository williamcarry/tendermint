(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{403:function(t,e,a){"use strict";a.r(e);var n=a(1),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"tm-bench"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tm-bench"}}),t._v(" tm-bench")]),t._v(" "),a("p",[a("strong",[t._v("Deprecation Warning")]),t._v(": please use "),a("a",{attrs:{href:"https://github.com/interchainio/tm-load-test",target:"_blank",rel:"noopener noreferrer"}},[t._v("tm-load-test"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Tendermint blockchain benchmarking tool:")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/tendermint/tendermint/tree/master/tools/tm-bench",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/tendermint/tendermint/tree/master/tools/tm-bench"),a("OutboundLink")],1)])]),t._v(" "),a("p",[t._v("For example, the following:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("tm-bench -T 10 -r 1000 localhost:26657\n")])])]),a("p",[t._v("will output:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Stats          Avg       StdDev     Max      Total\nTxs/sec        818       532        1549     9000\nBlocks/sec     0.818     0.386      1        9\n")])])]),a("h2",{attrs:{id:"quick-start"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}}),t._v(" Quick Start")]),t._v(" "),a("p",[a("router-link",{attrs:{to:"/introduction/install.html"}},[t._v("Install Tendermint")]),t._v("\nThis currently is setup to work on tendermint's develop branch. Please ensure\nyou are on that. (If not, update "),a("code",[t._v("tendermint")]),t._v(" and "),a("code",[t._v("tmlibs")]),t._v(" in gopkg.toml to use\nthe master branch.)")],1),t._v(" "),a("p",[t._v("then run:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("tendermint init\ntendermint node --proxy_app=kvstore\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("tm-bench localhost:26657\n")])])]),a("p",[t._v("with the last command being in a seperate window.")]),t._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}}),t._v(" Usage")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("tm-bench [-c 1] [-T 10] [-r 1000] [-s 250] [endpoints]\n\nExamples:\n        tm-bench localhost:26657\nFlags:\n  -T int\n        Exit after the specified amount of time in seconds (default 10)\n  -c int\n        Connections to keep open per endpoint (default 1)\n  -r int\n        Txs per second to send in a connection (default 1000)\n  -s int\n        Size per tx in bytes\n  -v    Verbose output\n")])])]),a("h2",{attrs:{id:"how-stats-are-collected"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-stats-are-collected"}}),t._v(" How stats are collected")]),t._v(" "),a("p",[t._v("These stats are derived by having each connection send transactions at the\nspecified rate (or as close as it can get) for the specified time. After the\nspecified time, it iterates over all of the blocks that were created in that\ntime. The average and stddev per second are computed based off of that, by\ngrouping the data by second.")]),t._v(" "),a("p",[t._v("To send transactions at the specified rate in each connection, we loop\nthrough the number of transactions. If its too slow, the loop stops at one second.\nIf its too fast, we wait until the one second mark ends. The transactions per\nsecond stat is computed based off of what ends up in the block.")]),t._v(" "),a("p",[t._v("Each of the connections is handled via two separate goroutines.")]),t._v(" "),a("h2",{attrs:{id:"development"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#development"}}),t._v(" Development")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("make test\n")])])])])}),[],!1,null,null,null);e.default=s.exports}}]);