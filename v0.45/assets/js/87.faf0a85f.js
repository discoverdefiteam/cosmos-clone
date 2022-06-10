(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{653:function(e,t,o){"use strict";o.r(t);var a=o(1),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"adr-021-protocol-buffer-query-encoding"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#adr-021-protocol-buffer-query-encoding"}},[e._v("#")]),e._v(" ADR 021: Protocol Buffer Query Encoding")]),e._v(" "),o("h2",{attrs:{id:"changelog"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),o("ul",[o("li",[e._v("2020 March 27: Initial Draft")])]),e._v(" "),o("h2",{attrs:{id:"status"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),o("p",[e._v("Accepted")]),e._v(" "),o("h2",{attrs:{id:"context"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),o("p",[e._v("This ADR is a continuation of the motivation, design, and context established in\n"),o("RouterLink",{attrs:{to:"/architecture/adr-019-protobuf-state-encoding.html"}},[e._v("ADR 019")]),e._v(" and\n"),o("RouterLink",{attrs:{to:"/architecture/adr-019-protobuf-transaction-encoding.html"}},[e._v("ARD 020")]),e._v(", namely, we aim to design the\nProtocol Buffer migration path for the client-side of the Cosmos SDK.")],1),e._v(" "),o("p",[e._v("This ADR continues from "),o("RouterLink",{attrs:{to:"/architecture/adr-020-protobuf-transaction-encoding.html"}},[e._v("ARD 020")]),e._v("\nto specify the encoding of queries.")],1),e._v(" "),o("h2",{attrs:{id:"decision"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),o("h3",{attrs:{id:"custom-query-definition"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#custom-query-definition"}},[e._v("#")]),e._v(" Custom Query Definition")]),e._v(" "),o("p",[e._v("Modules define custom queries through a protocol buffers "),o("code",[e._v("service")]),e._v(" definition.\nThese "),o("code",[e._v("service")]),e._v(" definitions are generally associated with and used by the\nGRPC protocol. However, the protocol buffers specification indicates that\nthey can be used more generically by any request/response protocol that uses\nprotocol buffer encoding. Thus, we can use "),o("code",[e._v("service")]),e._v(" definitions for specifying\ncustom ABCI queries and even reuse a substantial amount of the GRPC infrastructure.")]),e._v(" "),o("p",[e._v("Each module with custom queries should define a service canonically named "),o("code",[e._v("Query")]),e._v(":")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"Ly8geC9iYW5rL3R5cGVzL3R5cGVzLnByb3RvCgpzZXJ2aWNlIFF1ZXJ5IHsKICBycGMgUXVlcnlCYWxhbmNlKFF1ZXJ5QmFsYW5jZVBhcmFtcykgcmV0dXJucyAoY29zbW9zX3Nkay52MS5Db2luKSB7IH0KICBycGMgUXVlcnlBbGxCYWxhbmNlcyhRdWVyeUFsbEJhbGFuY2VzUGFyYW1zKSByZXR1cm5zIChRdWVyeUFsbEJhbGFuY2VzUmVzcG9uc2UpIHsgfQp9Cg=="}}),e._v(" "),o("h4",{attrs:{id:"handling-of-interface-types"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#handling-of-interface-types"}},[e._v("#")]),e._v(" Handling of Interface Types")]),e._v(" "),o("p",[e._v("Modules that use interface types and need true polymorphism generally force a\n"),o("code",[e._v("oneof")]),e._v(" up to the app-level that provides the set of concrete implementations of\nthat interface that the app supports. While app's are welcome to do the same for\nqueries and implement an app-level query service, it is recommended that modules\nprovide query methods that expose these interfaces via "),o("code",[e._v("google.protobuf.Any")]),e._v(".\nThere is a concern on the transaction level that the overhead of "),o("code",[e._v("Any")]),e._v(" is too\nhigh to justify its usage. However for queries this is not a concern, and\nproviding generic module-level queries that use "),o("code",[e._v("Any")]),e._v(" does not preclude apps\nfrom also providing app-level queries that return use the app-level "),o("code",[e._v("oneof")]),e._v("s.")]),e._v(" "),o("p",[e._v("A hypothetical example for the "),o("code",[e._v("gov")]),e._v(" module would look something like:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"Ly8geC9nb3YvdHlwZXMvdHlwZXMucHJvdG8KCmltcG9ydCAmcXVvdDtnb29nbGUvcHJvdG9idWYvYW55LnByb3RvJnF1b3Q7OwoKc2VydmljZSBRdWVyeSB7CiAgcnBjIEdldFByb3Bvc2FsKEdldFByb3Bvc2FsUGFyYW1zKSByZXR1cm5zIChBbnlQcm9wb3NhbCkgeyB9Cn0KCm1lc3NhZ2UgQW55UHJvcG9zYWwgewogIFByb3Bvc2FsQmFzZSBiYXNlID0gMTsKICBnb29nbGUucHJvdG9idWYuQW55IGNvbnRlbnQgPSAyOwp9Cg=="}}),e._v(" "),o("h3",{attrs:{id:"custom-query-implementation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#custom-query-implementation"}},[e._v("#")]),e._v(" Custom Query Implementation")]),e._v(" "),o("p",[e._v("In order to implement the query service, we can reuse the existing "),o("a",{attrs:{href:"https://github.com/gogo/protobuf",target:"_blank",rel:"noopener noreferrer"}},[e._v("gogo protobuf"),o("OutboundLink")],1),e._v("\ngrpc plugin, which for a service named "),o("code",[e._v("Query")]),e._v(" generates an interface named\n"),o("code",[e._v("QueryServer")]),e._v(" as below:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBRdWVyeVNlcnZlciBpbnRlcmZhY2UgewoJUXVlcnlCYWxhbmNlKGNvbnRleHQuQ29udGV4dCwgKlF1ZXJ5QmFsYW5jZVBhcmFtcykgKCp0eXBlcy5Db2luLCBlcnJvcikKCVF1ZXJ5QWxsQmFsYW5jZXMoY29udGV4dC5Db250ZXh0LCAqUXVlcnlBbGxCYWxhbmNlc1BhcmFtcykgKCpRdWVyeUFsbEJhbGFuY2VzUmVzcG9uc2UsIGVycm9yKQp9Cg=="}}),e._v(" "),o("p",[e._v("The custom queries for our module are implemented by implementing this interface.")]),e._v(" "),o("p",[e._v("The first parameter in this generated interface is a generic "),o("code",[e._v("context.Context")]),e._v(",\nwhereas querier methods generally need an instance of "),o("code",[e._v("sdk.Context")]),e._v(" to read\nfrom the store. Since arbitrary values can be attached to "),o("code",[e._v("context.Context")]),e._v("\nusing the "),o("code",[e._v("WithValue")]),e._v(" and "),o("code",[e._v("Value")]),e._v(" methods, the SDK should provide a function\n"),o("code",[e._v("sdk.UnwrapSDKContext")]),e._v(" to retrieve the "),o("code",[e._v("sdk.Context")]),e._v(" from the provided\n"),o("code",[e._v("context.Context")]),e._v(".")]),e._v(" "),o("p",[e._v("An example implementation of "),o("code",[e._v("QueryBalance")]),e._v(" for the bank module as above would\nlook something like:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBRdWVyaWVyIHN0cnVjdCB7CglLZWVwZXIKfQoKZnVuYyAocSBRdWVyaWVyKSBRdWVyeUJhbGFuY2UoY3R4IGNvbnRleHQuQ29udGV4dCwgcGFyYW1zICp0eXBlcy5RdWVyeUJhbGFuY2VQYXJhbXMpICgqc2RrLkNvaW4sIGVycm9yKSB7CgliYWxhbmNlIDo9IHEuR2V0QmFsYW5jZShzZGsuVW53cmFwU0RLQ29udGV4dChjdHgpLCBwYXJhbXMuQWRkcmVzcywgcGFyYW1zLkRlbm9tKQoJcmV0dXJuICZhbXA7YmFsYW5jZSwgbmlsCn0K"}}),e._v(" "),o("h3",{attrs:{id:"custom-query-registration-and-routing"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#custom-query-registration-and-routing"}},[e._v("#")]),e._v(" Custom Query Registration and Routing")]),e._v(" "),o("p",[e._v("Query server implementations as above would be registered with "),o("code",[e._v("AppModule")]),e._v("s using\na new method "),o("code",[e._v("RegisterQueryService(grpc.Server)")]),e._v(" which could be implemented simply\nas below:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8geC9iYW5rL21vZHVsZS5nbwpmdW5jIChhbSBBcHBNb2R1bGUpIFJlZ2lzdGVyUXVlcnlTZXJ2aWNlKHNlcnZlciBncnBjLlNlcnZlcikgewoJdHlwZXMuUmVnaXN0ZXJRdWVyeVNlcnZlcihzZXJ2ZXIsIGtlZXBlci5RdWVyaWVye2FtLmtlZXBlcn0pCn0K"}}),e._v(" "),o("p",[e._v("Underneath the hood, a new method "),o("code",[e._v("RegisterService(sd *grpc.ServiceDesc, handler interface{})")]),e._v("\nwill be added to the existing "),o("code",[e._v("baseapp.QueryRouter")]),e._v(" to add the queries to the custom\nquery routing table (with the routing method being described below).\nThe signature for this method matches the existing\n"),o("code",[e._v("RegisterServer")]),e._v(" method on the GRPC "),o("code",[e._v("Server")]),e._v(" type where "),o("code",[e._v("handler")]),e._v(" is the custom\nquery server implementation described above.")]),e._v(" "),o("p",[e._v("GRPC-like requests are routed by the service name (ex. "),o("code",[e._v("cosmos_sdk.x.bank.v1.Query")]),e._v(")\nand method name (ex. "),o("code",[e._v("QueryBalance")]),e._v(") combined with "),o("code",[e._v("/")]),e._v("s to form a full\nmethod name (ex. "),o("code",[e._v("/cosmos_sdk.x.bank.v1.Query/QueryBalance")]),e._v("). This gets translated\ninto an ABCI query as "),o("code",[e._v("custom/cosmos_sdk.x.bank.v1.Query/QueryBalance")]),e._v(". Service handlers\nregistered with "),o("code",[e._v("QueryRouter.RegisterService")]),e._v(" will be routed this way.")]),e._v(" "),o("p",[e._v("Beyond the method name, GRPC requests carry a protobuf encoded payload, which maps naturally\nto "),o("code",[e._v("RequestQuery.Data")]),e._v(", and receive a protobuf encoded response or error. Thus\nthere is a quite natural mapping of GRPC-like rpc methods to the existing\n"),o("code",[e._v("sdk.Query")]),e._v(" and "),o("code",[e._v("QueryRouter")]),e._v(" infrastructure.")]),e._v(" "),o("p",[e._v("This basic specification allows us to reuse protocol buffer "),o("code",[e._v("service")]),e._v(" definitions\nfor ABCI custom queries substantially reducing the need for manual decoding and\nencoding in query methods.")]),e._v(" "),o("h3",{attrs:{id:"grpc-protocol-support"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#grpc-protocol-support"}},[e._v("#")]),e._v(" GRPC Protocol Support")]),e._v(" "),o("p",[e._v("In addition to providing an ABCI query pathway, we can easily provide a GRPC\nproxy server that routes requests in the GRPC protocol to ABCI query requests\nunder the hood. In this way, clients could use their host languages' existing\nGRPC implementations to make direct queries against Cosmos SDK app's using\nthese "),o("code",[e._v("service")]),e._v(" definitions. In order for this server to work, the "),o("code",[e._v("QueryRouter")]),e._v("\non "),o("code",[e._v("BaseApp")]),e._v(" will need to expose the service handlers registered with\n"),o("code",[e._v("QueryRouter.RegisterService")]),e._v(" to the proxy server implementation. Nodes could\nlaunch the proxy server on a separate port in the same process as the ABCI app\nwith a command-line flag.")]),e._v(" "),o("h3",{attrs:{id:"rest-queries-and-swagger-generation"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rest-queries-and-swagger-generation"}},[e._v("#")]),e._v(" REST Queries and Swagger Generation")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://github.com/grpc-ecosystem/grpc-gateway",target:"_blank",rel:"noopener noreferrer"}},[e._v("grpc-gateway"),o("OutboundLink")],1),e._v(" is a project that\ntranslates REST calls into GRPC calls using special annotations on service\nmethods. Modules that want to expose REST queries should add "),o("code",[e._v("google.api.http")]),e._v("\nannotations to their "),o("code",[e._v("rpc")]),e._v(" methods as in this example below.")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"proto",base64:"Ly8geC9iYW5rL3R5cGVzL3R5cGVzLnByb3RvCgpzZXJ2aWNlIFF1ZXJ5IHsKICBycGMgUXVlcnlCYWxhbmNlKFF1ZXJ5QmFsYW5jZVBhcmFtcykgcmV0dXJucyAoY29zbW9zX3Nkay52MS5Db2luKSB7CiAgICBvcHRpb24gKGdvb2dsZS5hcGkuaHR0cCkgPSB7CiAgICAgIGdldDogJnF1b3Q7L3gvYmFuay92MS9iYWxhbmNlL3thZGRyZXNzfS97ZGVub219JnF1b3Q7CiAgICB9OwogIH0KICBycGMgUXVlcnlBbGxCYWxhbmNlcyhRdWVyeUFsbEJhbGFuY2VzUGFyYW1zKSByZXR1cm5zIChRdWVyeUFsbEJhbGFuY2VzUmVzcG9uc2UpIHsKICAgIG9wdGlvbiAoZ29vZ2xlLmFwaS5odHRwKSA9IHsKICAgICAgZ2V0OiAmcXVvdDsveC9iYW5rL3YxL2JhbGFuY2VzL3thZGRyZXNzfSZxdW90OwogICAgfTsKICB9Cn0K"}}),e._v(" "),o("p",[e._v("grpc-gateway will work direcly against the GRPC proxy described above which will\ntranslate requests to ABCI queries under the hood. grpc-gateway can also\ngenerate Swagger definitions automatically.")]),e._v(" "),o("p",[e._v("In the current implementation of REST queries, each module needs to implement\nREST queries manually in addition to ABCI querier methods. Using the grpc-gateway\napproach, there will be no need to generate separate REST query handlers, just\nquery servers as described above as grpc-gateway handles the translation of protobuf\nto REST as well as Swagger definitions.")]),e._v(" "),o("p",[e._v("The SDK should provide CLI commands for apps to start GRPC gateway either in\na separate process or the same process as the ABCI app, as well as provide a\ncommand for generating grpc-gateway proxy "),o("code",[e._v(".proto")]),e._v(" files and the "),o("code",[e._v("swagger.json")]),e._v("\nfile.")]),e._v(" "),o("h3",{attrs:{id:"client-usage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#client-usage"}},[e._v("#")]),e._v(" Client Usage")]),e._v(" "),o("p",[e._v("The gogo protobuf grpc plugin generates client interfaces in addition to server\ninterfaces. For the "),o("code",[e._v("Query")]),e._v(" service defined above we would get a "),o("code",[e._v("QueryClient")]),e._v("\ninterface like:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBRdWVyeUNsaWVudCBpbnRlcmZhY2UgewoJUXVlcnlCYWxhbmNlKGN0eCBjb250ZXh0LkNvbnRleHQsIGluICpRdWVyeUJhbGFuY2VQYXJhbXMsIG9wdHMgLi4uZ3JwYy5DYWxsT3B0aW9uKSAoKnR5cGVzLkNvaW4sIGVycm9yKQoJUXVlcnlBbGxCYWxhbmNlcyhjdHggY29udGV4dC5Db250ZXh0LCBpbiAqUXVlcnlBbGxCYWxhbmNlc1BhcmFtcywgb3B0cyAuLi5ncnBjLkNhbGxPcHRpb24pICgqUXVlcnlBbGxCYWxhbmNlc1Jlc3BvbnNlLCBlcnJvcikKfQo="}}),e._v(" "),o("p",[e._v("Via a small patch to gogo protobuf ("),o("a",{attrs:{href:"https://github.com/gogo/protobuf/pull/675",target:"_blank",rel:"noopener noreferrer"}},[e._v("gogo/protobuf#675"),o("OutboundLink")],1),e._v(")\nwe have tweaked the grpc codegen to use an interface rather than concrete type\nfor the generated client struct. This allows us to also reuse the GRPC infrastructure\nfor ABCI client queries.")]),e._v(" "),o("p",[e._v("1Context"),o("code",[e._v("will receive a new method")]),e._v("QueryConn"),o("code",[e._v("that returns a")]),e._v("ClientConn`\nthat routes calls to ABCI queries")]),e._v(" "),o("p",[e._v("Clients (such as CLI methods) will then be able to call query methods like this:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y2xpZW50Q3R4IDo9IGNsaWVudC5OZXdDb250ZXh0KCkKcXVlcnlDbGllbnQgOj0gdHlwZXMuTmV3UXVlcnlDbGllbnQoY2xpZW50Q3R4LlF1ZXJ5Q29ubigpKQpwYXJhbXMgOj0gJmFtcDt0eXBlcy5RdWVyeUJhbGFuY2VQYXJhbXN7YWRkciwgZGVub219CnJlc3VsdCwgZXJyIDo9IHF1ZXJ5Q2xpZW50LlF1ZXJ5QmFsYW5jZShnb2NvbnRleHQuQmFja2dyb3VuZCgpLCBwYXJhbXMpCg=="}}),e._v(" "),o("h3",{attrs:{id:"testing"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#testing"}},[e._v("#")]),e._v(" Testing")]),e._v(" "),o("p",[e._v("Tests would be able to create a query client directly from keeper and "),o("code",[e._v("sdk.Context")]),e._v("\nreferences using a "),o("code",[e._v("QueryServerTestHelper")]),e._v(" as below:")]),e._v(" "),o("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cXVlcnlIZWxwZXIgOj0gYmFzZWFwcC5OZXdRdWVyeVNlcnZlclRlc3RIZWxwZXIoY3R4KQp0eXBlcy5SZWdpc3RlclF1ZXJ5U2VydmVyKHF1ZXJ5SGVscGVyLCBrZWVwZXIuUXVlcmllcnthcHAuQmFua0tlZXBlcn0pCnF1ZXJ5Q2xpZW50IDo9IHR5cGVzLk5ld1F1ZXJ5Q2xpZW50KHF1ZXJ5SGVscGVyKQo="}}),e._v(" "),o("h2",{attrs:{id:"future-improvements"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#future-improvements"}},[e._v("#")]),e._v(" Future Improvements")]),e._v(" "),o("h2",{attrs:{id:"consequences"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),o("h3",{attrs:{id:"positive"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),o("ul",[o("li",[e._v("greatly simplified querier implementation (no manual encoding/decoding)")]),e._v(" "),o("li",[e._v("easy query client generation (can use existing grpc and swagger tools)")]),e._v(" "),o("li",[e._v("no need for REST query implementations")]),e._v(" "),o("li",[e._v("type safe query methods (generated via grpc plugin)")]),e._v(" "),o("li",[e._v("going forward, there will be less breakage of query methods because of the\nbackwards compatibility guarantees provided by buf")])]),e._v(" "),o("h3",{attrs:{id:"negative"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),o("ul",[o("li",[e._v("all clients using the existing ABCI/REST queries will need to be refactored\nfor both the new GRPC/REST query paths as well as protobuf/proto-json encoded\ndata, but this is more or less unavoidable in the protobuf refactoring")])]),e._v(" "),o("h3",{attrs:{id:"neutral"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),o("h2",{attrs:{id:"references"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[e._v("#")]),e._v(" References")])],1)}),[],!1,null,null,null);t.default=r.exports}}]);