(window.webpackJsonp=window.webpackJsonp||[]).push([[164],{826:function(e,t,r){"use strict";r.r(t);var n=r(1),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"relayer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#relayer"}},[e._v("#")]),e._v(" Relayer")]),e._v(" "),r("h2",{attrs:{id:"prerequisites-readings"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites-readings"}},[e._v("#")]),e._v(" Prerequisites Readings")]),e._v(" "),r("ul",[r("li",{attrs:{prereq:""}},[r("RouterLink",{attrs:{to:"/ibc/overview.html"}},[e._v("IBC Overview")])],1),e._v(" "),r("li",{attrs:{prereq:""}},[r("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/blob/master/docs/core/events.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Events"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"events"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[e._v("#")]),e._v(" Events")]),e._v(" "),r("p",[e._v("Events are emitted for every transaction processed by the base application to indicate the execution\nof some logic clients may want to be aware of. This is extremely useful when relaying IBC packets.\nAny message that uses IBC will emit events for the corresponding TAO logic executed as defined in\nthe "),r("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/spec/06_events.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("IBC events spec"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("In the SDK, it can be assumed that for every message there is an event emitted with the type "),r("code",[e._v("message")]),e._v(",\nattribute key "),r("code",[e._v("action")]),e._v(", and an attribute value representing the type of message sent\n("),r("code",[e._v("channel_open_init")]),e._v(" would be the attribute value for "),r("code",[e._v("MsgChannelOpenInit")]),e._v("). If a relayer queries\nfor transaction events, it can split message events using this event Type/Attribute Key pair.")]),e._v(" "),r("p",[e._v("The Event Type "),r("code",[e._v("message")]),e._v(" with the Attribute Key "),r("code",[e._v("module")]),e._v(" may be emitted multiple times for a single\nmessage due to application callbacks. It can be assumed that any TAO logic executed will result in\na module event emission with the attribute value "),r("code",[e._v("ibc_<submodulename>")]),e._v(" (02-client emits "),r("code",[e._v("ibc_client")]),e._v(").")]),e._v(" "),r("h3",{attrs:{id:"subscribing-with-tendermint"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#subscribing-with-tendermint"}},[e._v("#")]),e._v(" Subscribing with Tendermint")]),e._v(" "),r("p",[e._v("Calling the Tendermint RPC method "),r("code",[e._v("Subscribe")]),e._v(" via "),r("a",{attrs:{href:"https://docs.tendermint.com/master/rpc/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tendermint's Websocket"),r("OutboundLink")],1),e._v(" will return events using\nTendermint's internal representation of them. Instead of receiving back a list of events as they\nwere emitted, Tendermint will return the type "),r("code",[e._v("map[string][]string")]),e._v(" which maps a string in the\nform "),r("code",[e._v("<event_type>.<attribute_key>")]),e._v(" to "),r("code",[e._v("attribute_value")]),e._v(". This causes extraction of the event\nordering to be non-trivial, but still possible.")]),e._v(" "),r("p",[e._v("A relayer should use the "),r("code",[e._v("message.action")]),e._v(" key to extract the number of messages in the transaction\nand the type of IBC transactions sent. For every IBC transaction within the string array for\n"),r("code",[e._v("message.action")]),e._v(", the necessary information should be extracted from the other event fields. If\n"),r("code",[e._v("send_packet")]),e._v(" appears at index 2 in the value for "),r("code",[e._v("message.action")]),e._v(", a relayer will need to use the\nvalue at index 2 of the key "),r("code",[e._v("send_packet.packet_sequence")]),e._v(". This process should be repeated for each\npiece of information needed to relay a packet.")]),e._v(" "),r("h2",{attrs:{id:"example-implementations"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#example-implementations"}},[e._v("#")]),e._v(" Example Implementations")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/iqlusioninc/relayer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Golang Relayer"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/informalsystems/ibc-rs/tree/master/relayer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hermes"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/confio/ts-relayer",target:"_blank",rel:"noopener noreferrer"}},[e._v("Typescript Relayer"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=a.exports}}]);