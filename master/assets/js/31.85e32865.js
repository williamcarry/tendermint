(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{592:function(e,t,o){e.exports=o.p+"assets/img/tcp-window.b0d4e276.png"},810:function(e,t,o){"use strict";o.r(t);var n=o(1),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"tendermint-architectural-overview"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tendermint-architectural-overview"}},[e._v("#")]),e._v(" Tendermint Architectural Overview")]),e._v(" "),n("blockquote",[n("p",[n("strong",[e._v("November 2019")])])]),e._v(" "),n("p",[e._v("Over the next few weeks, @brapse, @marbar3778 and I (@tessr) are having a series of meetings to go over the architecture of Tendermint Core. These are my notes from these meetings, which will either serve as an artifact for onboarding future engineers; or will provide the basis for such a document.")]),e._v(" "),n("h2",{attrs:{id:"communication"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#communication"}},[e._v("#")]),e._v(" Communication")]),e._v(" "),n("p",[e._v("There are three forms of communication (e.g., requests, responses, connections) that can happen in Tendermint Core: "),n("em",[e._v("internode communication")]),e._v(", "),n("em",[e._v("intranode communication")]),e._v(", and "),n("em",[e._v("client communication")]),e._v(".")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("Internode communication: Happens between a node and other peers. This kind of communication happens over TCP or HTTP. More on this below.")])]),e._v(" "),n("li",[n("p",[e._v("Intranode communication: Happens within the node itself (i.e., between reactors or other components). These are typically function or method calls, or occasionally happen through an event bus.")])]),e._v(" "),n("li",[n("p",[e._v("Client communication: Happens between a client (like a wallet or a browser) and a node on the network.")])])]),e._v(" "),n("h3",{attrs:{id:"internode-communication"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#internode-communication"}},[e._v("#")]),e._v(" Internode Communication")]),e._v(" "),n("p",[e._v("Internode communication can happen in two ways:")]),e._v(" "),n("ol",[n("li",[e._v("TCP connections through the p2p package\n"),n("ul",[n("li",[e._v("Most common form of internode communication")]),e._v(" "),n("li",[e._v("Connections between nodes are persisted and shared across reactors, facilitated by the switch. (More on the switch below.)")])])]),e._v(" "),n("li",[e._v("RPC over HTTP\n"),n("ul",[n("li",[e._v("Reserved for short-lived, one-off requests")]),e._v(" "),n("li",[e._v("Example: reactor-specific state, like height")]),e._v(" "),n("li",[e._v("Also possible: web-sockets connected to channels for notifications (like new transactions)")])])])]),e._v(" "),n("h3",{attrs:{id:"p2p-business-the-switch-the-pex-and-the-address-book"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#p2p-business-the-switch-the-pex-and-the-address-book"}},[e._v("#")]),e._v(" P2P Business (the Switch, the PEX, and the Address Book)")]),e._v(" "),n("p",[e._v("When writing a p2p service, there are two primary responsibilities:")]),e._v(" "),n("ol",[n("li",[e._v("Routing: Who gets which messages?")]),e._v(" "),n("li",[e._v("Peer management: Who can you talk to? What is their state? And how can you do peer discovery?")])]),e._v(" "),n("p",[e._v("The first responsibility is handled by the Switch:")]),e._v(" "),n("ul",[n("li",[e._v("Responsible for routing connections between peers")]),e._v(" "),n("li",[e._v("Notably "),n("em",[e._v("only handles TCP connections")]),e._v("; RPC/HTTP is separate")]),e._v(" "),n("li",[e._v("Is a dependency for every reactor; all reactors expose a function "),n("code",[e._v("setSwitch")])]),e._v(" "),n("li",[e._v("Holds onto channels (channels on the TCP connection--NOT Go channels) and uses them to route")]),e._v(" "),n("li",[e._v("Is a global object, with a global namespace for messages")]),e._v(" "),n("li",[e._v("Similar functionality to libp2p")])]),e._v(" "),n("p",[e._v("TODO: More information (maybe) on the implementation of the Switch.")]),e._v(" "),n("p",[e._v("The second responsibility is handled by a combination of the PEX and the Address Book.")]),e._v(" "),n("p",[e._v("TODO: What is the PEX and the Address Book?")]),e._v(" "),n("h4",{attrs:{id:"the-nature-of-tcp-and-introduction-to-the-mconnection"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#the-nature-of-tcp-and-introduction-to-the-mconnection"}},[e._v("#")]),e._v(" The Nature of TCP, and Introduction to the "),n("code",[e._v("mconnection")])]),e._v(" "),n("p",[e._v("Here are some relevant facts about TCP:")]),e._v(" "),n("ol",[n("li",[e._v('All TCP connections have a "frame window size" which represents the packet size to the "confidence;" i.e., if you are sending packets along a new connection, you must start out with small packets. As the packets are received successfully, you can start to send larger and larger packets. (This curve is illustrated below.) This means that TCP connections are slow to spin up.')]),e._v(" "),n("li",[e._v("The syn/ack process also means that there's a high overhead for small, frequent messages")]),e._v(" "),n("li",[e._v("Sockets are represented by file descriptors.")])]),e._v(" "),n("p",[n("img",{attrs:{src:o(592),alt:"tcp"}})]),e._v(" "),n("p",[e._v("In order to have performant TCP connections under the conditions  created in Tendermint, we've created the "),n("code",[e._v("mconnection")]),e._v(", or the multiplexing connection. It is our own protocol built on top of TCP. It lets us reuse TCP connections to minimize overhead, and it keeps the window size high by sending auxiliary messages when necessary.")]),e._v(" "),n("p",[e._v("The "),n("code",[e._v("mconnection")]),e._v(" is represented by a struct, which contains a batch of messages, read and write buffers, and a map of channel IDs to reactors. It communicates with TCP via file descriptors, which it can write to. There is one "),n("code",[e._v("mconnection")]),e._v(" per peer connection.")]),e._v(" "),n("p",[e._v("The "),n("code",[e._v("mconnection")]),e._v(" has two methods: "),n("code",[e._v("send")]),e._v(", which takes a raw handle to the socket and writes to it; and "),n("code",[e._v("trySend")]),e._v(", which writes to a different buffer. (TODO: which buffer?)")]),e._v(" "),n("p",[e._v("The "),n("code",[e._v("mconnection")]),e._v(" is owned by a peer, which is owned (potentially with many other peers) by a (global) transport, which is owned by the (global) switch:")]),e._v(" "),n("code-block",{staticClass:"codeblock",attrs:{language:"",base64:"c3dpdGNoCiB0cmFuc3BvcnQKICBwZWVyCiAgIG1jb25uZWN0aW9uCiAgcGVlcgogICBtY29ubmVjdGlvbgogIHBlZXIKICAgbWNvbm5lY3Rpb24K"}}),e._v(" "),n("h2",{attrs:{id:"node-go"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#node-go"}},[e._v("#")]),e._v(" node.go")]),e._v(" "),n("p",[e._v("node.go is the entrypoint for running a node. It sets up reactors, sets up the switch, and registers all the RPC endpoints for a node.")]),e._v(" "),n("h2",{attrs:{id:"types-of-nodes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#types-of-nodes"}},[e._v("#")]),e._v(" Types of Nodes")]),e._v(" "),n("ol",[n("li",[e._v("Validator Node:")]),e._v(" "),n("li",[e._v("Full Node:")]),e._v(" "),n("li",[e._v("Seed Node:")])]),e._v(" "),n("p",[e._v("TODO: Flesh out the differences between the types of nodes and how they're configured.")]),e._v(" "),n("h2",{attrs:{id:"reactors"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#reactors"}},[e._v("#")]),e._v(" Reactors")]),e._v(" "),n("p",[e._v("Here are some Reactor Facts:")]),e._v(" "),n("ul",[n("li",[e._v("Every reactor holds a pointer to the global switch (set through "),n("code",[e._v("SetSwitch()")]),e._v(")")]),e._v(" "),n("li",[e._v("The switch holds a pointer to every reactor ("),n("code",[e._v("addReactor()")]),e._v(")")]),e._v(" "),n("li",[e._v("Every reactor gets set up in node.go (and if you are using custom reactors, this is where you specify that)")]),e._v(" "),n("li",[n("code",[e._v("addReactor")]),e._v(" is called by the switch; "),n("code",[e._v("addReactor")]),e._v(" calls "),n("code",[e._v("setSwitch")]),e._v(" for that reactor")]),e._v(" "),n("li",[e._v("There's an assumption that all the reactors are added before")]),e._v(" "),n("li",[e._v("Sometimes reactors talk to each other by fetching references to one another via the switch (which maintains a pointer to each reactor). "),n("strong",[e._v("Question: Can reactors talk to each other in any other way?")])])]),e._v(" "),n("p",[e._v("Furthermore, all reactors expose:")]),e._v(" "),n("ol",[n("li",[e._v("A TCP channel")]),e._v(" "),n("li",[e._v("A "),n("code",[e._v("receive")]),e._v(" method")]),e._v(" "),n("li",[e._v("An "),n("code",[e._v("addReactor")]),e._v(" call")])]),e._v(" "),n("p",[e._v("The "),n("code",[e._v("receive")]),e._v(" method can be called many times by the mconnection. It has the same signature across all reactors.")]),e._v(" "),n("p",[e._v("The "),n("code",[e._v("addReactor")]),e._v(" call does a for loop over all the channels on the reactor and creates a map of channel IDs->reactors. The switch holds onto this map, and passes it to the "),n("em",[e._v("transport")]),e._v(", a thin wrapper around TCP connections.")]),e._v(" "),n("p",[e._v("The following is an exhaustive (?) list of reactors:")]),e._v(" "),n("ul",[n("li",[e._v("Blockchain Reactor")]),e._v(" "),n("li",[e._v("Consensus Reactor")]),e._v(" "),n("li",[e._v("Evidence Reactor")]),e._v(" "),n("li",[e._v("Mempool Reactor")]),e._v(" "),n("li",[e._v("PEX Reactor")])]),e._v(" "),n("p",[e._v("Each of these will be discussed in more detail later.")]),e._v(" "),n("h3",{attrs:{id:"blockchain-reactor"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#blockchain-reactor"}},[e._v("#")]),e._v(" Blockchain Reactor")]),e._v(" "),n("p",[e._v("The blockchain reactor has two responsibilities:")]),e._v(" "),n("ol",[n("li",[e._v("Serve blocks at the request of peers")]),e._v(" "),n("li",[e._v("TODO: learn about the second responsibility of the blockchain reactor")])])],1)}),[],!1,null,null,null);t.default=a.exports}}]);