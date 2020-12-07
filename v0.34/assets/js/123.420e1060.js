(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{665:function(e,a,t){"use strict";t.r(a);var n=t(1),i=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"adr-060-go-api-stability"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#adr-060-go-api-stability"}},[e._v("#")]),e._v(" ADR 060: Go API Stability")]),e._v(" "),t("h2",{attrs:{id:"changelog"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("2020-09-08: Initial version. (@erikgrinaker)")])]),e._v(" "),t("li",[t("p",[e._v("2020-09-09: Tweak accepted changes, add initial public API packages, add consequences. (@erikgrinaker)")])]),e._v(" "),t("li",[t("p",[e._v("2020-09-17: Clarify initial public API. (@erikgrinaker)")])])]),e._v(" "),t("h2",{attrs:{id:"context"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),t("p",[e._v("With the release of Tendermint 1.0 we will adopt "),t("a",{attrs:{href:"https://semver.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("semantic versioning"),t("OutboundLink")],1),e._v(". One major implication is a guarantee that we will not make backwards-incompatible changes until Tendermint 2.0 (except in pre-release versions). In order to provide this guarantee for our Go API, we must clearly define which of our APIs are public, and what changes are considered backwards-compatible.")]),e._v(" "),t("p",[e._v("Currently, we list packages that we consider public in our "),t("a",{attrs:{href:"https://github.com/tendermint/tendermint#versioning",target:"_blank",rel:"noopener noreferrer"}},[e._v("README"),t("OutboundLink")],1),e._v(", but since we are still at version 0.x we do not provide any backwards compatiblity guarantees at all.")]),e._v(" "),t("h3",{attrs:{id:"glossary"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#glossary"}},[e._v("#")]),e._v(" Glossary")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[e._v("External project:")]),e._v(" a different Git/VCS repository or code base.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("External package:")]),e._v(" a different Go package, can be a child or sibling package in the same project.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Internal code:")]),e._v(" code not intended for use in external projects.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Internal directory:")]),e._v(" code under "),t("code",[e._v("internal/")]),e._v(" which cannot be imported in external projects.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Exported:")]),e._v(" a Go identifier starting with an uppercase letter, which can therefore be accessed by an external package.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Private:")]),e._v(" a Go identifier starting with a lowercase letter, which therefore cannot be accessed by an external package unless via an exported field, variable, or function/method return value.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Public API:")]),e._v(" any Go identifier that can be imported or accessed by an external project, except test code in "),t("code",[e._v("_test.go")]),e._v(" files.")])]),e._v(" "),t("li",[t("p",[t("strong",[e._v("Private API:")]),e._v(" any Go identifier that is not accessible via a public API, including all code in the internal directory.")])])]),e._v(" "),t("h2",{attrs:{id:"alternative-approaches"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#alternative-approaches"}},[e._v("#")]),e._v(" Alternative Approaches")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Split all public APIs out to separate Go modules in separate Git repositories, and consider all Tendermint code internal and not subject to API backwards compatibility at all. This was rejected, since it has been attempted by the Tendermint project earlier, resulting in too much dependency management overhead.")])]),e._v(" "),t("li",[t("p",[e._v("Simply document which APIs are public and which are private. This is the current approach, but users should not be expected to self-enforce this, the documentation is not always up-to-date, and external projects will often end up depending on internal code anyway.")])])]),e._v(" "),t("h2",{attrs:{id:"decision"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),t("p",[e._v("From Tendermint 1.0, all internal code (except private APIs) will be placed in a root-level "),t("a",{attrs:{href:"https://golang.org/cmd/go/#hdr-Internal_Directories",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("internal")]),e._v(" directory"),t("OutboundLink")],1),e._v(", which the Go compiler will block for use by external projects. All exported items outside of the "),t("code",[e._v("internal")]),e._v(" directory are considered a public API and subject to backwards compatibility guarantees, except files ending in "),t("code",[e._v("_test.go")]),e._v(".")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("crypto")]),e._v(" package may be split out to a separate module in a separate repo. This is the main general-purpose package used by external projects, and is the only Tendermint dependency in e.g. IAVL which can cause some problems for projects depending on both IAVL and Tendermint. This will be decided after further discussion.")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("tm-db")]),e._v(" package will remain a separate module in a separate repo. The "),t("code",[e._v("crypto")]),e._v(" package may possibly be split out, pending further discussion, as this is the main general-purpose package used by other projects.")]),e._v(" "),t("h2",{attrs:{id:"detailed-design"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#detailed-design"}},[e._v("#")]),e._v(" Detailed Design")]),e._v(" "),t("h3",{attrs:{id:"public-api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#public-api"}},[e._v("#")]),e._v(" Public API")]),e._v(" "),t("p",[e._v("When preparing our public API for 1.0, we should keep these principles in mind:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Limit the number of public APIs that we start out with - we can always add new APIs later, but we can't change or remove APIs once they're made public.")])]),e._v(" "),t("li",[t("p",[e._v("Before an API is made public, do a thorough review of the API to make sure it covers any future needs, can accomodate expected changes, and follows good API design practices.")])])]),e._v(" "),t("p",[e._v("The following is the minimum set of public APIs that will be included in 1.0, in some form:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("abci")])]),e._v(" "),t("li",[t("code",[e._v("node")]),e._v(" and related packages (e.g. possibly "),t("code",[e._v("config")]),e._v(", "),t("code",[e._v("libs/log")]),e._v(", and "),t("code",[e._v("version")]),e._v(")")]),e._v(" "),t("li",[e._v("Client APIs, i.e. "),t("code",[e._v("rpc/client")]),e._v(", "),t("code",[e._v("light")]),e._v(", and "),t("code",[e._v("privval")]),e._v(".")]),e._v(" "),t("li",[t("code",[e._v("crypto")]),e._v(" (possibly as a separate repo)")])]),e._v(" "),t("p",[e._v("We may offer additional APIs as well, following further discussions internally and with other stakeholders. However, public APIs for providing custom components (e.g. reactors and mempools) are not planned for 1.0, but may be added in a later 1.x version if this is something we want to offer.")]),e._v(" "),t("p",[e._v("For comparison, the following are the number of Tendermint imports in the Cosmos SDK (excluding tests), which should be mostly satisfied by the planned APIs.")]),e._v(" "),t("code-block",{staticClass:"codeblock",attrs:{language:"",base64:"ICAgICAgMSBnaXRodWIuY29tL3RlbmRlcm1pbnQvdGVuZGVybWludC9hYmNpL3NlcnZlcgogICAgIDczIGdpdGh1Yi5jb20vdGVuZGVybWludC90ZW5kZXJtaW50L2FiY2kvdHlwZXMKICAgICAgMiBnaXRodWIuY29tL3RlbmRlcm1pbnQvdGVuZGVybWludC9jbWQvdGVuZGVybWludC9jb21tYW5kcwogICAgICA3IGdpdGh1Yi5jb20vdGVuZGVybWludC90ZW5kZXJtaW50L2NvbmZpZwogICAgIDY4IGdpdGh1Yi5jb20vdGVuZGVybWludC90ZW5kZXJtaW50L2NyeXB0bwogICAgICAxIGdpdGh1Yi5jb20vdGVuZGVybWludC90ZW5kZXJtaW50L2NyeXB0by9hcm1vcgogICAgIDEwIGdpdGh1Yi5jb20vdGVuZGVybWludC90ZW5kZXJtaW50L2NyeXB0by9lZDI1NTE5CiAgICAgIDIgZ2l0aHViLmNvbS90ZW5kZXJtaW50L3RlbmRlcm1pbnQvY3J5cHRvL2VuY29kaW5nCiAgICAgIDMgZ2l0aHViLmNvbS90ZW5kZXJtaW50L3RlbmRlcm1pbnQvY3J5cHRvL21lcmtsZQogICAgICAzIGdpdGh1Yi5jb20vdGVuZGVybWludC90ZW5kZXJtaW50L2NyeXB0by9zcjI1NTE5CiAgICAgIDggZ2l0aHViLmNvbS90ZW5kZXJtaW50L3RlbmRlcm1pbnQvY3J5cHRvL3RtaGFzaAogICAgICAxIGdpdGh1Yi5jb20vdGVuZGVybWludC90ZW5kZXJtaW50L2NyeXB0by94c2Fsc2EyMHN5bW1ldHJpYwogICAgIDExIGdpdGh1Yi5jb20vdGVuZGVybWludC90ZW5kZXJtaW50L2xpYnMvYnl0ZXMKICAgICAgMiBnaXRodWIuY29tL3RlbmRlcm1pbnQvdGVuZGVybWludC9saWJzL2J5dGVzLkhleEJ5dGVzCiAgICAgMTUgZ2l0aHViLmNvbS90ZW5kZXJtaW50L3RlbmRlcm1pbnQvbGlicy9jbGkKICAgICAgMiBnaXRodWIuY29tL3RlbmRlcm1pbnQvdGVuZGVybWludC9saWJzL2NsaS9mbGFncwogICAgICAyIGdpdGh1Yi5jb20vdGVuZGVybWludC90ZW5kZXJtaW50L2xpYnMvanNvbgogICAgIDMwIGdpdGh1Yi5jb20vdGVuZGVybWludC90ZW5kZXJtaW50L2xpYnMvbG9nCiAgICAgIDEgZ2l0aHViLmNvbS90ZW5kZXJtaW50L3RlbmRlcm1pbnQvbGlicy9tYXRoCiAgICAgMTEgZ2l0aHViLmNvbS90ZW5kZXJtaW50L3RlbmRlcm1pbnQvbGlicy9vcwogICAgICA0IGdpdGh1Yi5jb20vdGVuZGVybWludC90ZW5kZXJtaW50L2xpYnMvcmFuZAogICAgICAxIGdpdGh1Yi5jb20vdGVuZGVybWludC90ZW5kZXJtaW50L2xpYnMvc3RyaW5ncwogICAgICA1IGdpdGh1Yi5jb20vdGVuZGVybWludC90ZW5kZXJtaW50L2xpZ2h0CiAgICAgIDEgZ2l0aHViLmNvbS90ZW5kZXJtaW50L3RlbmRlcm1pbnQvbWVtcG9vbAogICAgICAzIGdpdGh1Yi5jb20vdGVuZGVybWludC90ZW5kZXJtaW50L25vZGUKICAgICAgNSBnaXRodWIuY29tL3RlbmRlcm1pbnQvdGVuZGVybWludC9wMnAKICAgICAgNCBnaXRodWIuY29tL3RlbmRlcm1pbnQvdGVuZGVybWludC9wcml2dmFsCiAgICAgMTAgZ2l0aHViLmNvbS90ZW5kZXJtaW50L3RlbmRlcm1pbnQvcHJvdG8vdGVuZGVybWludC9jcnlwdG8KICAgICAgMSBnaXRodWIuY29tL3RlbmRlcm1pbnQvdGVuZGVybWludC9wcm90by90ZW5kZXJtaW50L2xpYnMvYml0cwogICAgIDI0IGdpdGh1Yi5jb20vdGVuZGVybWludC90ZW5kZXJtaW50L3Byb3RvL3RlbmRlcm1pbnQvdHlwZXMKICAgICAgMyBnaXRodWIuY29tL3RlbmRlcm1pbnQvdGVuZGVybWludC9wcm90by90ZW5kZXJtaW50L3ZlcnNpb24KICAgICAgMiBnaXRodWIuY29tL3RlbmRlcm1pbnQvdGVuZGVybWludC9wcm94eQogICAgICAzIGdpdGh1Yi5jb20vdGVuZGVybWludC90ZW5kZXJtaW50L3JwYy9jbGllbnQKICAgICAgMSBnaXRodWIuY29tL3RlbmRlcm1pbnQvdGVuZGVybWludC9ycGMvY2xpZW50L2h0dHAKICAgICAgMiBnaXRodWIuY29tL3RlbmRlcm1pbnQvdGVuZGVybWludC9ycGMvY2xpZW50L2xvY2FsCiAgICAgIDMgZ2l0aHViLmNvbS90ZW5kZXJtaW50L3RlbmRlcm1pbnQvcnBjL2NvcmUvdHlwZXMKICAgICAgMSBnaXRodWIuY29tL3RlbmRlcm1pbnQvdGVuZGVybWludC9ycGMvanNvbnJwYy9zZXJ2ZXIKICAgICAzMyBnaXRodWIuY29tL3RlbmRlcm1pbnQvdGVuZGVybWludC90eXBlcwogICAgICAyIGdpdGh1Yi5jb20vdGVuZGVybWludC90ZW5kZXJtaW50L3R5cGVzL3RpbWUKICAgICAgMSBnaXRodWIuY29tL3RlbmRlcm1pbnQvdGVuZGVybWludC92ZXJzaW9uCg=="}}),e._v(" "),t("h3",{attrs:{id:"backwards-compatible-changes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatible-changes"}},[e._v("#")]),e._v(" Backwards-Compatible Changes")]),e._v(" "),t("p",[e._v("In Go, "),t("a",{attrs:{href:"https://blog.golang.org/module-compatibility",target:"_blank",rel:"noopener noreferrer"}},[e._v("almost all API changes are backwards-incompatible"),t("OutboundLink")],1),e._v(" and thus exported items in public APIs generally cannot be changed until Tendermint 2.0. The only backwards-compatible changes we can make to public APIs are:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Adding a package.")])]),e._v(" "),t("li",[t("p",[e._v("Adding a new identifier to the package scope (e.g. const, var, func, struct, interface, etc.).")])]),e._v(" "),t("li",[t("p",[e._v("Adding a new method to a struct.")])]),e._v(" "),t("li",[t("p",[e._v("Adding a new field to a struct, if the zero-value preserves any old behavior.")])]),e._v(" "),t("li",[t("p",[e._v("Changing the order of fields in a struct.")])]),e._v(" "),t("li",[t("p",[e._v("Adding a variadic parameter to a named function or struct method, if the function type itself is not assignable in any public APIs (e.g. a callback).")])]),e._v(" "),t("li",[t("p",[e._v("Adding a new method to an interface, or a variadic parameter to an interface method, "),t("em",[e._v("if the interface already has a private method")]),e._v(" (which prevents external packages from implementing it).")])]),e._v(" "),t("li",[t("p",[e._v("Widening a numeric type as long as it is a named type (e.g. "),t("code",[e._v("type Number int32")]),e._v(" can change to "),t("code",[e._v("int64")]),e._v(", but not "),t("code",[e._v("int8")]),e._v(" or "),t("code",[e._v("uint32")]),e._v(").")])])]),e._v(" "),t("p",[e._v("Note that public APIs can expose private types (e.g. via an exported variable, field, or function/method return value), in which case the exported fields and methods on these private types are also part of the public API and covered by its backwards compatiblity guarantees. In general, private types should never be accessible via public APIs unless wrapped in an exported interface.")]),e._v(" "),t("p",[e._v("Also note that if we accept, return, export, or embed types from a dependency, we assume the backwards compatibility responsibility for that dependency, and must make sure any dependency upgrades comply with the above constraints.")]),e._v(" "),t("p",[e._v("We should run CI linters for minor version branches to enforce this, e.g. "),t("a",{attrs:{href:"https://go.googlesource.com/exp/+/refs/heads/master/apidiff/README.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("apidiff"),t("OutboundLink")],1),e._v(", "),t("a",{attrs:{href:"https://github.com/gbbr/breakcheck",target:"_blank",rel:"noopener noreferrer"}},[e._v("breakcheck"),t("OutboundLink")],1),e._v(", and "),t("a",{attrs:{href:"https://github.com/bradleyfalzon/apicompat",target:"_blank",rel:"noopener noreferrer"}},[e._v("apicombat"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h4",{attrs:{id:"accepted-breakage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#accepted-breakage"}},[e._v("#")]),e._v(" Accepted Breakage")]),e._v(" "),t("p",[e._v("The above changes can still break programs in a few ways - these are "),t("em",[e._v("not")]),e._v(" considered backwards-incompatible changes, and users are advised to avoid this usage:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("If a program uses unkeyed struct literals (e.g. "),t("code",[e._v('Foo{"bar", "baz"}')]),e._v(") and we add fields or change the field order, the program will no longer compile or may have logic errors.")])]),e._v(" "),t("li",[t("p",[e._v("If a program embeds two structs in a struct, and we add a new field or method to an embedded Tendermint struct which also exists in the other embedded struct, the program will no longer compile.")])]),e._v(" "),t("li",[t("p",[e._v("If a program compares two structs (e.g. with "),t("code",[e._v("==")]),e._v("), and we add a new field of an incomparable type (slice, map, func, or struct that contains these) to a Tendermint struct which is compared, the program will no longer compile.")])]),e._v(" "),t("li",[t("p",[e._v("If a program assigns a Tendermint function to an identifier, and we add a variadic parameter to the function signature, the program will no longer compile.")])])]),e._v(" "),t("h3",{attrs:{id:"strategies-for-api-evolution"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#strategies-for-api-evolution"}},[e._v("#")]),e._v(" Strategies for API Evolution")]),e._v(" "),t("p",[e._v("The API guarantees above can be fairly constraining, but are unavoidable given the Go language design. The following tricks can be employed where appropriate to allow us to make changes to the API:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("We can add a new function or method with a different name that takes additional parameters, and have the old function call the new one.")])]),e._v(" "),t("li",[t("p",[e._v("Functions and methods can take an options struct instead of separate parameters, to allow adding new options - this is particularly suitable for functions that take many parameters and are expected to be extended, and especially for interfaces where we cannot add new methods with different parameters at all.")])]),e._v(" "),t("li",[t("p",[e._v("Interfaces can include a private method, e.g. "),t("code",[e._v("interface { private() }")]),e._v(", to make them unimplementable by external packages and thus allow us to add new methods to the interface without breaking other programs. Of course, this can't be used for interfaces that should be implementable externally.")])]),e._v(" "),t("li",[t("p",[e._v("We can use "),t("a",{attrs:{href:"https://avtok.com/2014/11/05/interface-upgrades.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("interface upgrades"),t("OutboundLink")],1),e._v(" to allow implementers of an existing interface to also implement a new interface, as long as the old interface can still be used - e.g. the new interface "),t("code",[e._v("BetterReader")]),e._v(" may have a method "),t("code",[e._v("ReadBetter()")]),e._v(", and a function that takes a "),t("code",[e._v("Reader")]),e._v(" interface as an input can check if the implementer also implements "),t("code",[e._v("BetterReader")]),e._v(" and in that case call "),t("code",[e._v("ReadBetter()")]),e._v(" instead of "),t("code",[e._v("Read()")]),e._v(".")])])]),e._v(" "),t("h2",{attrs:{id:"status"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),t("p",[e._v("Accepted")]),e._v(" "),t("h2",{attrs:{id:"consequences"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),t("h3",{attrs:{id:"positive"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Users can safely upgrade with less fear of applications breaking, and know whether an upgrade only includes bug fixes or also functional enhancements")])]),e._v(" "),t("li",[t("p",[e._v("External developers have a predictable and well-defined API to build on that will be supported for some time")])]),e._v(" "),t("li",[t("p",[e._v("Less synchronization between teams, since there is a clearer contract and timeline for changes and they happen less frequently")])]),e._v(" "),t("li",[t("p",[e._v("More documentation will remain accurate, since it's not chasing a moving target")])]),e._v(" "),t("li",[t("p",[e._v("Less time will be spent on code churn and more time spent on functional improvements, both for the community and for our teams")])])]),e._v(" "),t("h3",{attrs:{id:"negative"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("Many improvements, changes, and bug fixes will have to be postponed until the next major version, possibly for a year or more")])]),e._v(" "),t("li",[t("p",[e._v("The pace of development will slow down, since we must work within the existing API constraints, and spend more time planning public APIs")])]),e._v(" "),t("li",[t("p",[e._v("External developers may lose access to some currently exported APIs and functionality")])])]),e._v(" "),t("h2",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),t("ul",[t("li",[t("p",[t("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/4451",target:"_blank",rel:"noopener noreferrer"}},[e._v("#4451: Place internal APIs under internal package"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://docs.google.com/document/d/1G08LnwSyb6BAuCVSMF3EKn47CGdhZ5wPZYJQr4-bw58/edit?ts=5f609f11",target:"_blank",rel:"noopener noreferrer"}},[e._v("On Pluggability"),t("OutboundLink")],1)])])])],1)}),[],!1,null,null,null);a.default=i.exports}}]);