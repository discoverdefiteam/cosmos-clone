(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{770:function(e,t,i){"use strict";i.r(t);var a=i(1),l=Object(a.a)({},(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[i("h1",{attrs:{id:"state"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[e._v("#")]),e._v(" State")]),e._v(" "),i("h2",{attrs:{id:"in-persisted-kv-store"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#in-persisted-kv-store"}},[e._v("#")]),e._v(" In persisted KV store")]),e._v(" "),i("ol",[i("li",[e._v("Global unique capability index")]),e._v(" "),i("li",[e._v("Capability owners")])]),e._v(" "),i("p",[e._v("Indexes:")]),e._v(" "),i("ul",[i("li",[e._v("Unique index: "),i("code",[e._v('[]byte("index") -> []byte(currentGlobalIndex)')])]),e._v(" "),i("li",[e._v("Capability Index: "),i("code",[e._v('[]byte("capability_index") | []byte(index) -> ProtocolBuffer(CapabilityOwners)')])])]),e._v(" "),i("h2",{attrs:{id:"in-memory-kv-store"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#in-memory-kv-store"}},[e._v("#")]),e._v(" In-memory KV store")]),e._v(" "),i("ol",[i("li",[e._v("Initialized flag")]),e._v(" "),i("li",[e._v("Mapping between the module and capability tuple and the capability name")]),e._v(" "),i("li",[e._v("Mapping between the module and capability name and its index")])]),e._v(" "),i("p",[e._v("Indexes:")]),e._v(" "),i("ul",[i("li",[e._v("Initialized flag: "),i("code",[e._v('[]byte("mem_initialized")')])]),e._v(" "),i("li",[e._v("RevCapabilityKey: "),i("code",[e._v('[]byte(moduleName + "/rev/" + capabilityName) -> []byte(index)')])]),e._v(" "),i("li",[e._v("FwdCapabilityKey: "),i("code",[e._v('[]byte(moduleName + "/fwd/" + capabilityPointerAddress) -> []byte(capabilityName)')])])])])}),[],!1,null,null,null);t.default=l.exports}}]);