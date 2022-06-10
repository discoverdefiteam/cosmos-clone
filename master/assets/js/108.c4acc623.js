(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{791:function(e,t,a){"use strict";a.r(t);var i=a(1),c=Object(i.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"adr-048-multi-tire-gas-price-system"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adr-048-multi-tire-gas-price-system"}},[e._v("#")]),e._v(" ADR 048: Multi Tire Gas Price System")]),e._v(" "),a("h2",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),a("ul",[a("li",[e._v("Dec 1, 2021: Initial Draft")])]),e._v(" "),a("h2",{attrs:{id:"status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),a("p",[e._v("Rejected")]),e._v(" "),a("h2",{attrs:{id:"abstract"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),a("p",[e._v("This ADR describes a flexible mechanism to maintain a consensus level gas prices, in which one can choose a multi-tier gas price system or EIP-1559 like one through configuration.")]),e._v(" "),a("h2",{attrs:{id:"context"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),a("p",[e._v("Currently, each validator configures it's own "),a("code",[e._v("minimal-gas-prices")]),e._v(" in "),a("code",[e._v("app.yaml")]),e._v(". But setting a proper minimal gas price is critical to protect network from dos attack, and it's hard for all the validators to pick a sensible value, so we propose to maintain a gas price in consensus level.")]),e._v(" "),a("p",[e._v("Since tendermint 0.35 has supported mempool prioritization, we can take advantage of that to implement more sophisticated gas fee system.")]),e._v(" "),a("h2",{attrs:{id:"multi-tier-price-system"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multi-tier-price-system"}},[e._v("#")]),e._v(" Multi-Tier Price System")]),e._v(" "),a("p",[e._v("We propose a multi-tier price system on consensus to provide maximum flexibility:")]),e._v(" "),a("ul",[a("li",[e._v("Tier 1: a constant gas price, which could only be modified occasionally through governance proposal.")]),e._v(" "),a("li",[e._v("Tier 2: a dynamic gas price which is adjusted according to previous block load.")]),e._v(" "),a("li",[e._v("Tier 3: a dynamic gas price which is adjusted according to previous block load at a higher speed.")])]),e._v(" "),a("p",[e._v("The gas price of higher tier should bigger than the lower tier.")]),e._v(" "),a("p",[e._v("The transaction fees are charged with the exact gas price calculated on consensus.")]),e._v(" "),a("p",[e._v("The parameter schema is like this:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"bWVzc2FnZSBUaWVyUGFyYW1zIHsKICB1aW50MzIgcHJpb3JpdHkgPSAxICAgICAgICAgICAvLyBwcmlvcml0eSBpbiB0ZW5kZXJtaW50IG1lbXBvb2wKICBDb2luIGluaXRpYWxfZ2FzX3ByaWNlID0gMiAgICAvLwogIHVpbnQzMiBwYXJlbnRfZ2FzX3RhcmdldCA9IDMgIC8vIHRoZSB0YXJnZXQgc2F0dXJhdGlvbiBvZiBibG9jawogIHVpbnQzMiBjaGFuZ2VfZGVub21pbmF0b3IgPSA0IC8vIGRlY2lkZXMgdGhlIGNoYW5nZSBzcGVlZAogIENvaW4gbWluX2dhc19wcmljZSA9IDUgICAgICAgIC8vIG9wdGlvbmFsIGxvd2VyIGJvdW5kIG9mIHRoZSBwcmljZSBhZGp1c3RtZW50CiAgQ29pbiBtYXhfZ2FzX3ByaWNlID0gNiAgICAgICAgLy8gb3B0aW9uYWwgdXBwZXIgYm91bmQgb2YgdGhlIHByaWNlIGFkanVzdG1lbnQKfQoKbWVzc2FnZSBQYXJhbXMgewogIHJlcGVhdGVkIFRpZXJQYXJhbXMgdGllcnMgPSAxOwp9Cg=="}}),e._v(" "),a("h3",{attrs:{id:"extension-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extension-options"}},[e._v("#")]),e._v(" Extension Options")]),e._v(" "),a("p",[e._v("We need to allow user to specify the tier of service for the transaction, to support it in an extensible way, we add an extension option in "),a("code",[e._v("AuthInfo")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"protobuf",base64:"bWVzc2FnZSBFeHRlbnNpb25PcHRpb25zVGllcmVkVHggewogIHVpbnQzMiBmZWVfdGllciA9IDEKfQo="}}),e._v(" "),a("p",[e._v("The value of "),a("code",[e._v("fee_tier")]),e._v(" is just the index to the "),a("code",[e._v("tiers")]),e._v(" parameter list.")]),e._v(" "),a("p",[e._v("We also change the semantic of existing "),a("code",[e._v("fee")]),e._v(" field of "),a("code",[e._v("Tx")]),e._v(", instead of charging user the exact "),a("code",[e._v("fee")]),e._v(" amount, we treat it as a fee cap, while the actual amount of fee charged is decided dynamically. If the "),a("code",[e._v("fee")]),e._v(" is smaller than dynamic one, the transaction won't be included in current block and ideally should stay in the mempool until the consensus gas price drop. The mempool can eventually prune old transactions.")]),e._v(" "),a("h3",{attrs:{id:"tx-prioritization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tx-prioritization"}},[e._v("#")]),e._v(" Tx Prioritization")]),e._v(" "),a("p",[e._v("Transactions are prioritized based on the tier, the higher the tier, the higher the priority.")]),e._v(" "),a("p",[e._v("Within the same tier, follow the default Tendermint order (currently FIFO). Be aware of that the mempool tx ordering logic is not part of consensus and can be modified by malicious validator.")]),e._v(" "),a("p",[e._v("This mechanism can be easily composed with prioritization mechanisms:")]),e._v(" "),a("ul",[a("li",[e._v("we can add extra tiers out of a user control:\n"),a("ul",[a("li",[e._v("Example 1: user can set tier 0, 10 or 20, but the protocol will create tiers 0, 1, 2 ... 29. For example IBC transactions will go to tier "),a("code",[e._v("user_tier + 5")]),e._v(": if user selected tier 1, then the transaction will go to tier 15.")]),e._v(" "),a("li",[e._v("Example 2: we can reserve tier 4, 5, ... only for special transaction types. For example, tier 5 is reserved for evidence tx. So if submits a bank.Send transaction and set tier 5, it will be delegated to tier 3 (the max tier level available for any transaction).")]),e._v(" "),a("li",[e._v("Example 3: we can enforce that all transactions of a sepecific type will go to specific tier. For example, tier 100 will be reserved for evidence transactions and all evidence transactions will always go to that tier.")])])])]),e._v(" "),a("h3",{attrs:{id:"min-gas-prices"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#min-gas-prices"}},[e._v("#")]),e._v(" "),a("code",[e._v("min-gas-prices")])]),e._v(" "),a("p",[e._v("Deprecate the current per-validator "),a("code",[e._v("min-gas-prices")]),e._v(" configuration, since it would confusing for it to work together with the consensus gas price.")]),e._v(" "),a("h3",{attrs:{id:"adjust-for-block-load"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adjust-for-block-load"}},[e._v("#")]),e._v(" Adjust For Block Load")]),e._v(" "),a("p",[e._v("For tier 2 and tier 3 transactions, the gas price is adjusted according to previous block load, the logic could be similar to EIP-1559:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"python",base64:"ZGVmIGFkanVzdF9nYXNfcHJpY2UoZ2FzX3ByaWNlLCBwYXJlbnRfZ2FzX3VzZWQsIHRpZXIpOgogIGlmIHBhcmVudF9nYXNfdXNlZCA9PSB0aWVyLnBhcmVudF9nYXNfdGFyZ2V0OgogICAgcmV0dXJuIGdhc19wcmljZQogIGVsaWYgcGFyZW50X2dhc191c2VkICZndDsgdGllci5wYXJlbnRfZ2FzX3RhcmdldDoKICAgIGdhc191c2VkX2RlbHRhID0gcGFyZW50X2dhc191c2VkIC0gdGllci5wYXJlbnRfZ2FzX3RhcmdldAogICAgZ2FzX3ByaWNlX2RlbHRhID0gbWF4KGdhc19wcmljZSAqIGdhc191c2VkX2RlbHRhIC8vIHRpZXIucGFyZW50X2dhc190YXJnZXQgLy8gdGllci5jaGFuZ2Vfc3BlZWQsIDEpCiAgICByZXR1cm4gZ2FzX3ByaWNlICsgZ2FzX3ByaWNlX2RlbHRhCiAgZWxzZToKICAgIGdhc191c2VkX2RlbHRhID0gcGFyZW50X2dhc190YXJnZXQgLSBwYXJlbnRfZ2FzX3VzZWQKICAgIGdhc19wcmljZV9kZWx0YSA9IGdhc19wcmljZSAqIGdhc191c2VkX2RlbHRhIC8vIHBhcmVudF9nYXNfdGFyZ2V0IC8vIHRpZXIuY2hhbmdlX3NwZWVkCiAgICByZXR1cm4gZ2FzX3ByaWNlIC0gZ2FzX3ByaWNlX2RlbHRhCg=="}}),e._v(" "),a("h3",{attrs:{id:"block-segment-reservation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#block-segment-reservation"}},[e._v("#")]),e._v(" Block Segment Reservation")]),e._v(" "),a("p",[e._v("Ideally we should reserve block segments for each tier, so the lower tiered transactions won't be completely squeezed out by higher tier transactions, which will force user to use higher tier, and the system degraded to a single tier.")]),e._v(" "),a("p",[e._v("We need help from tendermint to implement this.")]),e._v(" "),a("h2",{attrs:{id:"implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementation"}},[e._v("#")]),e._v(" Implementation")]),e._v(" "),a("p",[e._v("We can make each tier's gas price strategy fully configurable in protocol parameters, while providing a sensible default one.")]),e._v(" "),a("p",[e._v("Pseudocode in python-like syntax:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"python",base64:"aW50ZXJmYWNlIFRpZXJlZFR4OgogIGRlZiB0aWVyKHNlbGYpIC0mZ3Q7IGludDoKICAgIHBhc3MKCmRlZiB0eF90aWVyKHR4KToKICAgIGlmIGlzaW5zdGFuY2UodHgsIFRpZXJlZFR4KToKICAgICAgcmV0dXJuIHR4LnRpZXIoKQogICAgZWxzZToKICAgICAgIyBkZWZhdWx0IHRpZXIgZm9yIGN1c3RvbSB0cmFuc2FjdGlvbnMKICAgICAgcmV0dXJuIDAKICAgICMgTk9URTogd2UgY2FuIGFkZCBtb3JlIHJ1bGVzIGhlcmUgcGVyICZxdW90O1R4IFByaW9yaXRpemF0aW9uJnF1b3Q7IHNlY3Rpb24gCgpjbGFzcyBUaWVyUGFyYW1zOgogICdnYXMgcHJpY2Ugc3RyYXRlZ3kgcGFyYW1ldGVycyBvZiBvbmUgdGllcicKICBwcmlvcml0eTogaW50ICAgICAgICAgICAjIHByaW9yaXR5IGluIHRlbmRlcm1pbnQgbWVtcG9vbAogIGluaXRpYWxfZ2FzX3ByaWNlOiBDb2luCiAgcGFyZW50X2dhc190YXJnZXQ6IGludAogIGNoYW5nZV9zcGVlZDogRGVjaW1hbCAgICMgMCBtZWFucyBkb24ndCBhZGp1c3QgZm9yIGJsb2NrIGxvYWQuCgpjbGFzcyBQYXJhbXM6CiAgICAncHJvdG9jb2wgcGFyYW1ldGVycycKICAgIHRpZXJzOiBMaXN0W1RpZXJQYXJhbXNdCgpjbGFzcyBTdGF0ZToKICAgICdjb25zZW5zdXMgc3RhdGUnCiAgICAjIHRvdGFsIGdhcyB1c2VkIGluIGxhc3QgYmxvY2ssIE5vbmUgd2hlbiBpdCdzIHRoZSBmaXJzdCBibG9jawogICAgcGFyZW50X2dhc191c2VkOiBPcHRpb25hbFtpbnRdCiAgICAjIGdhcyBwcmljZXMgb2YgbGFzdCBibG9jayBmb3IgYWxsIHRpZXJzCiAgICBnYXNfcHJpY2VzOiBMaXN0W0NvaW5dCgpkZWYgYmVnaW5fYmxvY2soKToKICAgICdBZGp1c3QgZ2FzIHByaWNlcycKICAgIGZvciBpLCB0aWVyIGluIGVudW1lcmF0ZShQYXJhbXMudGllcnMpOgogICAgICAgIGlmIFN0YXRlLnBhcmVudF9nYXNfdXNlZCBpcyBOb25lOgogICAgICAgICAgICAjIGluaXRpYWxpemVkIGdhcyBwcmljZSBmb3IgdGhlIGZpcnN0IGJsb2NrCgkgICAgICAgICAgU3RhdGUuZ2FzX3ByaWNlc1tpXSA9IHRpZXIuaW5pdGlhbF9nYXNfcHJpY2UKICAgICAgICBlbHNlOgogICAgICAgICAgICAjIGFkanVzdCBnYXMgcHJpY2UgYWNjb3JkaW5nIHRvIGdhcyB1c2VkIGluIHByZXZpb3VzIGJsb2NrCiAgICAgICAgICAgIFN0YXRlLmdhc19wcmljZXNbaV0gPSBhZGp1c3RfZ2FzX3ByaWNlKFN0YXRlLmdhc19wcmljZXNbaV0sIFN0YXRlLnBhcmVudF9nYXNfdXNlZCwgdGllcikKCmRlZiBtZW1wb29sRmVlVHhIYW5kbGVyX2NoZWNrVHgoY3R4LCB0eCk6CiAgICAjIHRoZSBtaW5pbWFsLWdhcy1wcmljZSBjb25maWd1cmVkIGJ5IHZhbGlkYXRvciwgemVybyBpbiBkZWxpdmVyX3R4IGNvbnRleHQKICAgIHZhbGlkYXRvcl9wcmljZSA9IGN0eC5NaW5HYXNQcmljZSgpCiAgICBjb25zZW5zdXNfcHJpY2UgPSBTdGF0ZS5nYXNfcHJpY2VzW3R4X3RpZXIodHgpXQogICAgbWluX3ByaWNlID0gbWF4KHZhbGlkYXRvcl9wcmljZSwgY29uc2Vuc3VzX3ByaWNlKQoKICAgICMgemVybyBtZWFucyBpbmZpbml0eSBmb3IgZ2FzIHByaWNlIGNhcAogICAgaWYgdHguZ2FzX3ByaWNlKCkgJmd0OyAwIGFuZCB0eC5nYXNfcHJpY2UoKSAmbHQ7IG1pbl9wcmljZToKICAgICAgICByZXR1cm4gJ2luc3VmZmljaWVudCBmZWVzJwogICAgcmV0dXJuIG5leHRfQ2hlY2tUeChjdHgsIHR4KQoKZGVmIHR4UHJpb3JpdHlIYW5kbGVyX2NoZWNrVHgoY3R4LCB0eCk6CiAgICByZXMsIGVyciA6PSBuZXh0X0NoZWNrVHgoY3R4LCB0eCkKICAgICMgcGFzcyBwcmlvcml0eSB0byB0ZW5kZXJtaW50CiAgICByZXMuUHJpb3JpdHkgPSBQYXJhbXMudGllcnNbdHhfdGllcih0eCldLnByaW9yaXR5CiAgICByZXR1cm4gcmVzLCBlcnIKCmRlZiBlbmRfYmxvY2soKToKICAgICdVcGRhdGUgYmxvY2sgZ2FzIHVzZWQnCiAgICBTdGF0ZS5wYXJlbnRfZ2FzX3VzZWQgPSBibG9ja19nYXNfbWV0ZXIuY29uc3VtZWQoKQo="}}),e._v(" "),a("h3",{attrs:{id:"dos-attack-protection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dos-attack-protection"}},[e._v("#")]),e._v(" Dos attack protection")]),e._v(" "),a("p",[e._v("To fully saturate the blocks and prevent other transactions from executing, attacker need to use transactions of highest tier, the cost would be significantly higher than the default tier.")]),e._v(" "),a("p",[e._v("If attacker spam with lower tier transactions, user can mitigate by sending higher tier transactions.")]),e._v(" "),a("h2",{attrs:{id:"consequences"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),a("h3",{attrs:{id:"backwards-compatibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backwards-compatibility"}},[e._v("#")]),e._v(" Backwards Compatibility")]),e._v(" "),a("ul",[a("li",[e._v("New protocol parameters.")]),e._v(" "),a("li",[e._v("New consensus states.")]),e._v(" "),a("li",[e._v("New/changed fields in transaction body.")])]),e._v(" "),a("h3",{attrs:{id:"positive"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),a("ul",[a("li",[e._v("The default tier keeps the same predictable gas price experience for client.")]),e._v(" "),a("li",[e._v("The higher tier's gas price can adapt to block load.")]),e._v(" "),a("li",[e._v("No priority conflict with custom priority based on transaction types, since this proposal only occupy three priority levels.")]),e._v(" "),a("li",[e._v("Possibility to compose different priority rules with tiers")])]),e._v(" "),a("h3",{attrs:{id:"negative"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),a("ul",[a("li",[e._v("Wallets & tools need to update to support the new "),a("code",[e._v("tier")]),e._v(" parameter, and semantic of "),a("code",[e._v("fee")]),e._v(" field is changed.")])]),e._v(" "),a("h3",{attrs:{id:"neutral"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),a("h2",{attrs:{id:"references"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")]),e._v(" "),a("ul",[a("li",[e._v("https://eips.ethereum.org/EIPS/eip-1559")]),e._v(" "),a("li",[e._v("https://iohk.io/en/blog/posts/2021/11/26/network-traffic-and-tiered-pricing/")])])],1)}),[],!1,null,null,null);t.default=c.exports}}]);