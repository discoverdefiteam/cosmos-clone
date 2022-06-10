(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{843:function(C,g,I){"use strict";I.r(g);var A=I(1),l=Object(A.a)({},(function(){var C=this,g=C.$createElement,I=C._self._c||g;return I("ContentSlotsDistributor",{attrs:{"slot-key":C.$parent.slotKey}},[I("h1",{attrs:{id:"cosmos-sdk-的主要组件"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#cosmos-sdk-的主要组件"}},[C._v("#")]),C._v(" Cosmos SDK 的主要组件")]),C._v(" "),I("p",[C._v("Cosmos SDK 是一个框架，可以促进基于 Tendermint 的安全状态机的开发。SDK 的核心是一个基于 Golang 的"),I("a",{attrs:{href:"https://docs.cosmos.network/master/intro/sdk-app-architecture.html#abci",target:"_blank",rel:"noopener noreferrer"}},[C._v("ABCI"),I("OutboundLink")],1),C._v("样板实现。它带有一个用于存储数据的"),I("a",{attrs:{href:"https://docs.cosmos.network/master/core/store.html#multistore",target:"_blank",rel:"noopener noreferrer"}},[I("code",[C._v("multistore")]),I("OutboundLink")],1),C._v("，和一个用于处理 Transaction 的"),I("a",{attrs:{href:"https://docs.cosmos.network/master/core/baseapp.html#routing",target:"_blank",rel:"noopener noreferrer"}},[I("code",[C._v("router")]),I("OutboundLink")],1),C._v("。")]),C._v(" "),I("p",[C._v("下面的简化视图展示了当通过 "),I("code",[C._v("DeliverTx")]),C._v(" 从 Tendermint 转移 transactions 时，基于 Cosmos SDK 构建的应用程序如何处理这些 transactions。")]),C._v(" "),I("ol",[I("li",[C._v("解码从 Tendermint 共识引擎中接收到的 "),I("code",[C._v("transactions")]),C._v("（Tendermint 只能处理 "),I("code",[C._v("[]bytes")]),C._v(" 类型的数据）")]),C._v(" "),I("li",[C._v("从 "),I("code",[C._v("transactions")]),C._v(" 中提取 "),I("code",[C._v("messages")]),C._v(" 并进行基本的健全性检查。")]),C._v(" "),I("li",[C._v("将每个 Message 路由到对应的模块中，以进行相应处理。")]),C._v(" "),I("li",[C._v("提交状态更改。")])]),C._v(" "),I("h2",{attrs:{id:"baseapp"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#baseapp"}},[C._v("#")]),C._v(" BaseApp")]),C._v(" "),I("p",[I("code",[C._v("baseapp")]),C._v(" 是 Cosmos SDK 应用程序的样本实现，它拥有能够处理和底层共识引擎的连接的 ABCI 实现。通常，Cosmos SDK 应用程序通过嵌入"),I("a",{attrs:{href:"https://docs.cosmos.network/master/basics/app-anatomy.html#core-application-file",target:"_blank",rel:"noopener noreferrer"}},[I("code",[C._v("app.go")]),I("OutboundLink")],1),C._v("来实现拓展。查看示例请参考 SDK 应用教程：")]),C._v(" "),I("p",[I("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSBhcHAKCmltcG9ydCAoCgkmcXVvdDtlbmNvZGluZy9qc29uJnF1b3Q7CgkmcXVvdDtvcyZxdW90OwoKCWFiY2kgJnF1b3Q7Z2l0aHViLmNvbS90ZW5kZXJtaW50L3RlbmRlcm1pbnQvYWJjaS90eXBlcyZxdW90OwoJY21uICZxdW90O2dpdGh1Yi5jb20vdGVuZGVybWludC90ZW5kZXJtaW50L2xpYnMvY29tbW9uJnF1b3Q7CgkmcXVvdDtnaXRodWIuY29tL3RlbmRlcm1pbnQvdGVuZGVybWludC9saWJzL2xvZyZxdW90OwoJdG10eXBlcyAmcXVvdDtnaXRodWIuY29tL3RlbmRlcm1pbnQvdGVuZGVybWludC90eXBlcyZxdW90OwoJZGJtICZxdW90O2dpdGh1Yi5jb20vdGVuZGVybWludC90bS1kYiZxdW90OwoKCWJhbSAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL2Jhc2VhcHAmcXVvdDsKCSZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvY29kZWMmcXVvdDsKCXNkayAmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzJnF1b3Q7CgkmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzL21vZHVsZSZxdW90OwoJJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay92ZXJzaW9uJnF1b3Q7CgkmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3gvYXV0aCZxdW90OwoJJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay94L2JhbmsmcXVvdDsKCWRpc3RyICZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsveC9kaXN0cmlidXRpb24mcXVvdDsKCSZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsveC9nZW5hY2NvdW50cyZxdW90OwoJJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay94L2dlbnV0aWwmcXVvdDsKCSZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsveC9wYXJhbXMmcXVvdDsKCSZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsveC9zbGFzaGluZyZxdW90OwoJJnF1b3Q7Z2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay94L3N0YWtpbmcmcXVvdDsKCSZxdW90O2dpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsveC9zdXBwbHkmcXVvdDsKCgkmcXVvdDtnaXRodWIuY29tL2Nvc21vcy9zZGstYXBwbGljYXRpb24tdHV0b3JpYWwveC9uYW1lc2VydmljZSZxdW90OwopCgpjb25zdCBhcHBOYW1lID0gJnF1b3Q7bmFtZXNlcnZpY2UmcXVvdDsKCnZhciAoCgkvLyBkZWZhdWx0IGhvbWUgZGlyZWN0b3JpZXMgZm9yIHRoZSBhcHBsaWNhdGlvbiBDTEkKCURlZmF1bHRDTElIb21lID0gb3MuRXhwYW5kRW52KCZxdW90OyRIT01FLy5uc2NsaSZxdW90OykKCgkvLyBEZWZhdWx0Tm9kZUhvbWUgc2V0cyB0aGUgZm9sZGVyIHdoZXJlIHRoZSBhcHBsY2F0aW9uIGRhdGEgYW5kIGNvbmZpZ3VyYXRpb24gd2lsbCBiZSBzdG9yZWQKCURlZmF1bHROb2RlSG9tZSA9IG9zLkV4cGFuZEVudigmcXVvdDskSE9NRS8ubnNkJnF1b3Q7KQoKCS8vIE5ld0Jhc2ljTWFuYWdlciBpcyBpbiBjaGFyZ2Ugb2Ygc2V0dGluZyB1cCBiYXNpYyBtb2R1bGUgZWxlbW5ldHMKCU1vZHVsZUJhc2ljcyA9IG1vZHVsZS5OZXdCYXNpY01hbmFnZXIoCgkJZ2VuYWNjb3VudHMuQXBwTW9kdWxlQmFzaWN7fSwKCQlnZW51dGlsLkFwcE1vZHVsZUJhc2lje30sCgkJYXV0aC5BcHBNb2R1bGVCYXNpY3t9LAoJCWJhbmsuQXBwTW9kdWxlQmFzaWN7fSwKCQlzdGFraW5nLkFwcE1vZHVsZUJhc2lje30sCgkJZGlzdHIuQXBwTW9kdWxlQmFzaWN7fSwKCQlwYXJhbXMuQXBwTW9kdWxlQmFzaWN7fSwKCQlzbGFzaGluZy5BcHBNb2R1bGVCYXNpY3t9LAoJCXN1cHBseS5BcHBNb2R1bGVCYXNpY3t9LAoKCQluYW1lc2VydmljZS5BcHBNb2R1bGV7fSwKCSkKCS8vIGFjY291bnQgcGVybWlzc2lvbnMKCW1hY2NQZXJtcyA9IG1hcFtzdHJpbmddW11zdHJpbmd7CgkJYXV0aC5GZWVDb2xsZWN0b3JOYW1lOiAgICAgbmlsLAoJCWRpc3RyLk1vZHVsZU5hbWU6ICAgICAgICAgIG5pbCwKCQlzdGFraW5nLkJvbmRlZFBvb2xOYW1lOiAgICB7c3VwcGx5LkJ1cm5lciwgc3VwcGx5LlN0YWtpbmd9LAoJCXN0YWtpbmcuTm90Qm9uZGVkUG9vbE5hbWU6IHtzdXBwbHkuQnVybmVyLCBzdXBwbHkuU3Rha2luZ30sCgl9CikKCi8vIE1ha2VDb2RlYyBnZW5lcmF0ZXMgdGhlIG5lY2Vzc2FyeSBjb2RlY3MgZm9yIEFtaW5vCmZ1bmMgTWFrZUNvZGVjKCkgKmNvZGVjLkNvZGVjIHsKCXZhciBjZGMgPSBjb2RlYy5OZXcoKQoJTW9kdWxlQmFzaWNzLlJlZ2lzdGVyQ29kZWMoY2RjKQoJc2RrLlJlZ2lzdGVyQ29kZWMoY2RjKQoJY29kZWMuUmVnaXN0ZXJDcnlwdG8oY2RjKQoJcmV0dXJuIGNkYwp9Cgp0eXBlIG5hbWVTZXJ2aWNlQXBwIHN0cnVjdCB7CgkqYmFtLkJhc2VBcHAKCWNkYyAqY29kZWMuQ29kZWMKCgkvLyBrZXlzIHRvIGFjY2VzcyB0aGUgc3Vic3RvcmVzCglrZXlzICBtYXBbc3RyaW5nXSpzZGsuS1ZTdG9yZUtleQoJdGtleXMgbWFwW3N0cmluZ10qc2RrLlRyYW5zaWVudFN0b3JlS2V5CgoJLy8gS2VlcGVycwoJYWNjb3VudEtlZXBlciAgYXV0aC5BY2NvdW50S2VlcGVyCgliYW5rS2VlcGVyICAgICBiYW5rLktlZXBlcgoJc3Rha2luZ0tlZXBlciAgc3Rha2luZy5LZWVwZXIKCXNsYXNoaW5nS2VlcGVyIHNsYXNoaW5nLktlZXBlcgoJZGlzdHJLZWVwZXIgICAgZGlzdHIuS2VlcGVyCglzdXBwbHlLZWVwZXIgICBzdXBwbHkuS2VlcGVyCglwYXJhbXNLZWVwZXIgICBwYXJhbXMuS2VlcGVyCgluc0tlZXBlciAgICAgICBuYW1lc2VydmljZS5LZWVwZXIKCgkvLyBNb2R1bGUgTWFuYWdlcgoJbW0gKm1vZHVsZS5NYW5hZ2VyCn0KCi8vIE5ld05hbWVTZXJ2aWNlQXBwIGlzIGEgY29uc3RydWN0b3IgZnVuY3Rpb24gZm9yIG5hbWVTZXJ2aWNlQXBwCmZ1bmMgTmV3TmFtZVNlcnZpY2VBcHAoCglsb2dnZXIgbG9nLkxvZ2dlciwgZGIgZGJtLkRCLCBiYXNlQXBwT3B0aW9ucyAuLi5mdW5jKCpiYW0uQmFzZUFwcCksCikgKm5hbWVTZXJ2aWNlQXBwIHsKCgkvLyBGaXJzdCBkZWZpbmUgdGhlIHRvcCBsZXZlbCBjb2RlYyB0aGF0IHdpbGwgYmUgc2hhcmVkIGJ5IHRoZSBkaWZmZXJlbnQgbW9kdWxlcwoJY2RjIDo9IE1ha2VDb2RlYygpCgoJLy8gQmFzZUFwcCBoYW5kbGVzIGludGVyYWN0aW9ucyB3aXRoIFRlbmRlcm1pbnQgdGhyb3VnaCB0aGUgQUJDSSBwcm90b2NvbAoJYkFwcCA6PSBiYW0uTmV3QmFzZUFwcChhcHBOYW1lLCBsb2dnZXIsIGRiLCBhdXRoLkRlZmF1bHRUeERlY29kZXIoY2RjKSwgYmFzZUFwcE9wdGlvbnMuLi4pCgoJYkFwcC5TZXRBcHBWZXJzaW9uKHZlcnNpb24uVmVyc2lvbikKCglrZXlzIDo9IHNkay5OZXdLVlN0b3JlS2V5cyhiYW0uTWFpblN0b3JlS2V5LCBhdXRoLlN0b3JlS2V5LCBzdGFraW5nLlN0b3JlS2V5LAoJCXN1cHBseS5TdG9yZUtleSwgZGlzdHIuU3RvcmVLZXksIHNsYXNoaW5nLlN0b3JlS2V5LCBwYXJhbXMuU3RvcmVLZXksIG5hbWVzZXJ2aWNlLlN0b3JlS2V5KQoKCXRrZXlzIDo9IHNkay5OZXdUcmFuc2llbnRTdG9yZUtleXMoc3Rha2luZy5UU3RvcmVLZXksIHBhcmFtcy5UU3RvcmVLZXkpCgoJLy8gSGVyZSB5b3UgaW5pdGlhbGl6ZSB5b3VyIGFwcGxpY2F0aW9uIHdpdGggdGhlIHN0b3JlIGtleXMgaXQgcmVxdWlyZXMKCXZhciBhcHAgPSAmYW1wO25hbWVTZXJ2aWNlQXBwewoJCUJhc2VBcHA6IGJBcHAsCgkJY2RjOiAgICAgY2RjLAoJCWtleXM6ICAgIGtleXMsCgkJdGtleXM6ICAgdGtleXMsCgl9CgoJLy8gVGhlIFBhcmFtc0tlZXBlciBoYW5kbGVzIHBhcmFtZXRlciBzdG9yYWdlIGZvciB0aGUgYXBwbGljYXRpb24KCWFwcC5wYXJhbXNLZWVwZXIgPSBwYXJhbXMuTmV3S2VlcGVyKGFwcC5jZGMsIGtleXNbcGFyYW1zLlN0b3JlS2V5XSwgdGtleXNbcGFyYW1zLlRTdG9yZUtleV0sIHBhcmFtcy5EZWZhdWx0Q29kZXNwYWNlKQoJLy8gU2V0IHNwZWNpZmljIHN1cHNwYWNlcwoJYXV0aFN1YnNwYWNlIDo9IGFwcC5wYXJhbXNLZWVwZXIuU3Vic3BhY2UoYXV0aC5EZWZhdWx0UGFyYW1zcGFjZSkKCWJhbmtTdXBzcGFjZSA6PSBhcHAucGFyYW1zS2VlcGVyLlN1YnNwYWNlKGJhbmsuRGVmYXVsdFBhcmFtc3BhY2UpCglzdGFraW5nU3Vic3BhY2UgOj0gYXBwLnBhcmFtc0tlZXBlci5TdWJzcGFjZShzdGFraW5nLkRlZmF1bHRQYXJhbXNwYWNlKQoJZGlzdHJTdWJzcGFjZSA6PSBhcHAucGFyYW1zS2VlcGVyLlN1YnNwYWNlKGRpc3RyLkRlZmF1bHRQYXJhbXNwYWNlKQoJc2xhc2hpbmdTdWJzcGFjZSA6PSBhcHAucGFyYW1zS2VlcGVyLlN1YnNwYWNlKHNsYXNoaW5nLkRlZmF1bHRQYXJhbXNwYWNlKQoKCS8vIFRoZSBBY2NvdW50S2VlcGVyIGhhbmRsZXMgYWRkcmVzcyAtJmd0OyBhY2NvdW50IGxvb2t1cHMKCWFwcC5hY2NvdW50S2VlcGVyID0gYXV0aC5OZXdBY2NvdW50S2VlcGVyKAoJCWFwcC5jZGMsCgkJa2V5c1thdXRoLlN0b3JlS2V5XSwKCQlhdXRoU3Vic3BhY2UsCgkJYXV0aC5Qcm90b0Jhc2VBY2NvdW50LAoJKQoKCS8vIFRoZSBCYW5rS2VlcGVyIGFsbG93cyB5b3UgcGVyZm9ybSBzZGsuQ29pbnMgaW50ZXJhY3Rpb25zCglhcHAuYmFua0tlZXBlciA9IGJhbmsuTmV3QmFzZUtlZXBlcigKCQlhcHAuYWNjb3VudEtlZXBlciwKCQliYW5rU3Vwc3BhY2UsCgkJYmFuay5EZWZhdWx0Q29kZXNwYWNlLAoJCWFwcC5Nb2R1bGVBY2NvdW50QWRkcnMoKSwKCSkKCgkvLyBUaGUgU3VwcGx5S2VlcGVyIGNvbGxlY3RzIHRyYW5zYWN0aW9uIGZlZXMgYW5kIHJlbmRlcnMgdGhlbSB0byB0aGUgZmVlIGRpc3RyaWJ1dGlvbiBtb2R1bGUKCWFwcC5zdXBwbHlLZWVwZXIgPSBzdXBwbHkuTmV3S2VlcGVyKAoJCWFwcC5jZGMsCgkJa2V5c1tzdXBwbHkuU3RvcmVLZXldLAoJCWFwcC5hY2NvdW50S2VlcGVyLAoJCWFwcC5iYW5rS2VlcGVyLAoJCW1hY2NQZXJtcywKCSkKCgkvLyBUaGUgc3Rha2luZyBrZWVwZXIKCXN0YWtpbmdLZWVwZXIgOj0gc3Rha2luZy5OZXdLZWVwZXIoCgkJYXBwLmNkYywKCQlrZXlzW3N0YWtpbmcuU3RvcmVLZXldLAoJCXRrZXlzW3N0YWtpbmcuVFN0b3JlS2V5XSwKCQlhcHAuc3VwcGx5S2VlcGVyLAoJCXN0YWtpbmdTdWJzcGFjZSwKCQlzdGFraW5nLkRlZmF1bHRDb2Rlc3BhY2UsCgkpCgoJYXBwLmRpc3RyS2VlcGVyID0gZGlzdHIuTmV3S2VlcGVyKAoJCWFwcC5jZGMsCgkJa2V5c1tkaXN0ci5TdG9yZUtleV0sCgkJZGlzdHJTdWJzcGFjZSwKCQkmYW1wO3N0YWtpbmdLZWVwZXIsCgkJYXBwLnN1cHBseUtlZXBlciwKCQlkaXN0ci5EZWZhdWx0Q29kZXNwYWNlLAoJCWF1dGguRmVlQ29sbGVjdG9yTmFtZSwKCQlhcHAuTW9kdWxlQWNjb3VudEFkZHJzKCksCgkpCgoJYXBwLnNsYXNoaW5nS2VlcGVyID0gc2xhc2hpbmcuTmV3S2VlcGVyKAoJCWFwcC5jZGMsCgkJa2V5c1tzbGFzaGluZy5TdG9yZUtleV0sCgkJJmFtcDtzdGFraW5nS2VlcGVyLAoJCXNsYXNoaW5nU3Vic3BhY2UsCgkJc2xhc2hpbmcuRGVmYXVsdENvZGVzcGFjZSwKCSkKCgkvLyByZWdpc3RlciB0aGUgc3Rha2luZyBob29rcwoJLy8gTk9URTogc3Rha2luZ0tlZXBlciBhYm92ZSBpcyBwYXNzZWQgYnkgcmVmZXJlbmNlLCBzbyB0aGF0IGl0IHdpbGwgY29udGFpbiB0aGVzZSBob29rcwoJYXBwLnN0YWtpbmdLZWVwZXIgPSAqc3Rha2luZ0tlZXBlci5TZXRIb29rcygKCQlzdGFraW5nLk5ld011bHRpU3Rha2luZ0hvb2tzKAoJCQlhcHAuZGlzdHJLZWVwZXIuSG9va3MoKSwKCQkJYXBwLnNsYXNoaW5nS2VlcGVyLkhvb2tzKCkpLAoJKQoKCS8vIFRoZSBOYW1lc2VydmljZUtlZXBlciBpcyB0aGUgS2VlcGVyIGZyb20gdGhlIG1vZHVsZSBmb3IgdGhpcyB0dXRvcmlhbAoJLy8gSXQgaGFuZGxlcyBpbnRlcmFjdGlvbnMgd2l0aCB0aGUgbmFtZXN0b3JlCglhcHAubnNLZWVwZXIgPSBuYW1lc2VydmljZS5OZXdLZWVwZXIoCgkJYXBwLmJhbmtLZWVwZXIsCgkJa2V5c1tuYW1lc2VydmljZS5TdG9yZUtleV0sCgkJYXBwLmNkYywKCSkKCglhcHAubW0gPSBtb2R1bGUuTmV3TWFuYWdlcigKCQlnZW5hY2NvdW50cy5OZXdBcHBNb2R1bGUoYXBwLmFjY291bnRLZWVwZXIpLAoJCWdlbnV0aWwuTmV3QXBwTW9kdWxlKGFwcC5hY2NvdW50S2VlcGVyLCBhcHAuc3Rha2luZ0tlZXBlciwgYXBwLkJhc2VBcHAuRGVsaXZlclR4KSwKCQlhdXRoLk5ld0FwcE1vZHVsZShhcHAuYWNjb3VudEtlZXBlciksCgkJYmFuay5OZXdBcHBNb2R1bGUoYXBwLmJhbmtLZWVwZXIsIGFwcC5hY2NvdW50S2VlcGVyKSwKCQluYW1lc2VydmljZS5OZXdBcHBNb2R1bGUoYXBwLm5zS2VlcGVyLCBhcHAuYmFua0tlZXBlciksCgkJc3VwcGx5Lk5ld0FwcE1vZHVsZShhcHAuc3VwcGx5S2VlcGVyLCBhcHAuYWNjb3VudEtlZXBlciksCgkJZGlzdHIuTmV3QXBwTW9kdWxlKGFwcC5kaXN0cktlZXBlciwgYXBwLnN1cHBseUtlZXBlciksCgkJc2xhc2hpbmcuTmV3QXBwTW9kdWxlKGFwcC5zbGFzaGluZ0tlZXBlciwgYXBwLnN0YWtpbmdLZWVwZXIpLAoJCXN0YWtpbmcuTmV3QXBwTW9kdWxlKGFwcC5zdGFraW5nS2VlcGVyLCBhcHAuZGlzdHJLZWVwZXIsIGFwcC5hY2NvdW50S2VlcGVyLCBhcHAuc3VwcGx5S2VlcGVyKSwKCSkKCglhcHAubW0uU2V0T3JkZXJCZWdpbkJsb2NrZXJzKGRpc3RyLk1vZHVsZU5hbWUsIHNsYXNoaW5nLk1vZHVsZU5hbWUpCglhcHAubW0uU2V0T3JkZXJFbmRCbG9ja2VycyhzdGFraW5nLk1vZHVsZU5hbWUpCgoJLy8gU2V0cyB0aGUgb3JkZXIgb2YgR2VuZXNpcyAtIE9yZGVyIG1hdHRlcnMsIGdlbnV0aWwgaXMgdG8gYWx3YXlzIGNvbWUgbGFzdAoJLy8gTk9URTogVGhlIGdlbnV0aWxzIG1vb2R1bGUgbXVzdCBvY2N1ciBhZnRlciBzdGFraW5nIHNvIHRoYXQgcG9vbHMgYXJlCgkvLyBwcm9wZXJseSBpbml0aWFsaXplZCB3aXRoIHRva2VucyBmcm9tIGdlbmVzaXMgYWNjb3VudHMuCglhcHAubW0uU2V0T3JkZXJJbml0R2VuZXNpcygKCQlnZW5hY2NvdW50cy5Nb2R1bGVOYW1lLAoJCWRpc3RyLk1vZHVsZU5hbWUsCgkJc3Rha2luZy5Nb2R1bGVOYW1lLAoJCWF1dGguTW9kdWxlTmFtZSwKCQliYW5rLk1vZHVsZU5hbWUsCgkJc2xhc2hpbmcuTW9kdWxlTmFtZSwKCQluYW1lc2VydmljZS5Nb2R1bGVOYW1lLAoJCXN1cHBseS5Nb2R1bGVOYW1lLAoJCWdlbnV0aWwuTW9kdWxlTmFtZSwKCSkKCgkvLyByZWdpc3RlciBhbGwgbW9kdWxlIHJvdXRlcyBhbmQgbW9kdWxlIHF1ZXJpZXJzCglhcHAubW0uUmVnaXN0ZXJSb3V0ZXMoYXBwLlJvdXRlcigpLCBhcHAuUXVlcnlSb3V0ZXIoKSkKCgkvLyBUaGUgaW5pdENoYWluZXIgaGFuZGxlcyB0cmFuc2xhdGluZyB0aGUgZ2VuZXNpcy5qc29uIGZpbGUgaW50byBpbml0aWFsIHN0YXRlIGZvciB0aGUgbmV0d29yawoJYXBwLlNldEluaXRDaGFpbmVyKGFwcC5Jbml0Q2hhaW5lcikKCWFwcC5TZXRCZWdpbkJsb2NrZXIoYXBwLkJlZ2luQmxvY2tlcikKCWFwcC5TZXRFbmRCbG9ja2VyKGFwcC5FbmRCbG9ja2VyKQoKCS8vIFRoZSBBbnRlSGFuZGxlciBoYW5kbGVzIHNpZ25hdHVyZSB2ZXJpZmljYXRpb24gYW5kIHRyYW5zYWN0aW9uIHByZS1wcm9jZXNzaW5nCglhcHAuU2V0QW50ZUhhbmRsZXIoCgkJYXV0aC5OZXdBbnRlSGFuZGxlcigKCQkJYXBwLmFjY291bnRLZWVwZXIsCgkJCWFwcC5zdXBwbHlLZWVwZXIsCgkJCWF1dGguRGVmYXVsdFNpZ1ZlcmlmaWNhdGlvbkdhc0NvbnN1bWVyLAoJCSksCgkpCgoJLy8gaW5pdGlhbGl6ZSBzdG9yZXMKCWFwcC5Nb3VudEtWU3RvcmVzKGtleXMpCglhcHAuTW91bnRUcmFuc2llbnRTdG9yZXModGtleXMpCgoJZXJyIDo9IGFwcC5Mb2FkTGF0ZXN0VmVyc2lvbihhcHAua2V5c1tiYW0uTWFpblN0b3JlS2V5XSkKCWlmIGVyciAhPSBuaWwgewoJCWNtbi5FeGl0KGVyci5FcnJvcigpKQoJfQoKCXJldHVybiBhcHAKfQoKLy8gR2VuZXNpc1N0YXRlIHJlcHJlc2VudHMgY2hhaW4gc3RhdGUgYXQgdGhlIHN0YXJ0IG9mIHRoZSBjaGFpbi4gQW55IGluaXRpYWwgc3RhdGUgKGFjY291bnQgYmFsYW5jZXMpIGFyZSBzdG9yZWQgaGVyZS4KdHlwZSBHZW5lc2lzU3RhdGUgbWFwW3N0cmluZ11qc29uLlJhd01lc3NhZ2UKCmZ1bmMgTmV3RGVmYXVsdEdlbmVzaXNTdGF0ZSgpIEdlbmVzaXNTdGF0ZSB7CglyZXR1cm4gTW9kdWxlQmFzaWNzLkRlZmF1bHRHZW5lc2lzKCkKfQoKZnVuYyAoYXBwICpuYW1lU2VydmljZUFwcCkgSW5pdENoYWluZXIoY3R4IHNkay5Db250ZXh0LCByZXEgYWJjaS5SZXF1ZXN0SW5pdENoYWluKSBhYmNpLlJlc3BvbnNlSW5pdENoYWluIHsKCXZhciBnZW5lc2lzU3RhdGUgR2VuZXNpc1N0YXRlCgoJZXJyIDo9IGFwcC5jZGMuVW5tYXJzaGFsSlNPTihyZXEuQXBwU3RhdGVCeXRlcywgJmFtcDtnZW5lc2lzU3RhdGUpCglpZiBlcnIgIT0gbmlsIHsKCQlwYW5pYyhlcnIpCgl9CgoJcmV0dXJuIGFwcC5tbS5Jbml0R2VuZXNpcyhjdHgsIGdlbmVzaXNTdGF0ZSkKfQoKZnVuYyAoYXBwICpuYW1lU2VydmljZUFwcCkgQmVnaW5CbG9ja2VyKGN0eCBzZGsuQ29udGV4dCwgcmVxIGFiY2kuUmVxdWVzdEJlZ2luQmxvY2spIGFiY2kuUmVzcG9uc2VCZWdpbkJsb2NrIHsKCXJldHVybiBhcHAubW0uQmVnaW5CbG9jayhjdHgsIHJlcSkKfQpmdW5jIChhcHAgKm5hbWVTZXJ2aWNlQXBwKSBFbmRCbG9ja2VyKGN0eCBzZGsuQ29udGV4dCwgcmVxIGFiY2kuUmVxdWVzdEVuZEJsb2NrKSBhYmNpLlJlc3BvbnNlRW5kQmxvY2sgewoJcmV0dXJuIGFwcC5tbS5FbmRCbG9jayhjdHgsIHJlcSkKfQpmdW5jIChhcHAgKm5hbWVTZXJ2aWNlQXBwKSBMb2FkSGVpZ2h0KGhlaWdodCBpbnQ2NCkgZXJyb3IgewoJcmV0dXJuIGFwcC5Mb2FkVmVyc2lvbihoZWlnaHQsIGFwcC5rZXlzW2JhbS5NYWluU3RvcmVLZXldKQp9CgovLyBNb2R1bGVBY2NvdW50QWRkcnMgcmV0dXJucyBhbGwgdGhlIGFwcCdzIG1vZHVsZSBhY2NvdW50IGFkZHJlc3Nlcy4KZnVuYyAoYXBwICpuYW1lU2VydmljZUFwcCkgTW9kdWxlQWNjb3VudEFkZHJzKCkgbWFwW3N0cmluZ11ib29sIHsKCW1vZEFjY0FkZHJzIDo9IG1ha2UobWFwW3N0cmluZ11ib29sKQoJZm9yIGFjYyA6PSByYW5nZSBtYWNjUGVybXMgewoJCW1vZEFjY0FkZHJzW3N1cHBseS5OZXdNb2R1bGVBZGRyZXNzKGFjYykuU3RyaW5nKCldID0gdHJ1ZQoJfQoKCXJldHVybiBtb2RBY2NBZGRycwp9CgovL19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fX19fXwoKZnVuYyAoYXBwICpuYW1lU2VydmljZUFwcCkgRXhwb3J0QXBwU3RhdGVBbmRWYWxpZGF0b3JzKGZvclplcm9IZWlnaHQgYm9vbCwgamFpbFdoaXRlTGlzdCBbXXN0cmluZywKKSAoYXBwU3RhdGUganNvbi5SYXdNZXNzYWdlLCB2YWxpZGF0b3JzIFtddG10eXBlcy5HZW5lc2lzVmFsaWRhdG9yLCBlcnIgZXJyb3IpIHsKCgkvLyBhcyBpZiB0aGV5IGNvdWxkIHdpdGhkcmF3IGZyb20gdGhlIHN0YXJ0IG9mIHRoZSBuZXh0IGJsb2NrCgljdHggOj0gYXBwLk5ld0NvbnRleHQodHJ1ZSwgYWJjaS5IZWFkZXJ7SGVpZ2h0OiBhcHAuTGFzdEJsb2NrSGVpZ2h0KCl9KQoKCWdlblN0YXRlIDo9IGFwcC5tbS5FeHBvcnRHZW5lc2lzKGN0eCkKCWFwcFN0YXRlLCBlcnIgPSBjb2RlYy5NYXJzaGFsSlNPTkluZGVudChhcHAuY2RjLCBnZW5TdGF0ZSkKCWlmIGVyciAhPSBuaWwgewoJCXJldHVybiBuaWwsIG5pbCwgZXJyCgl9CgoJdmFsaWRhdG9ycyA9IHN0YWtpbmcuV3JpdGVWYWxpZGF0b3JzKGN0eCwgYXBwLnN0YWtpbmdLZWVwZXIpCgoJcmV0dXJuIGFwcFN0YXRlLCB2YWxpZGF0b3JzLCBuaWwKfQo="}})],1),C._v(" "),I("p",[I("code",[C._v("baseapp")]),C._v(" 的目标是在存储和可拓展状态机之间提供安全的接口，同时尽可能少地定义状态机（对 ABCI 保持不变）。")]),C._v(" "),I("p",[C._v("更多关于"),I("code",[C._v("baseapp")]),C._v("的信息，请点击"),I("a",{attrs:{href:"https://docs.cosmos.network/master/core/baseapp.html",target:"_blank",rel:"noopener noreferrer"}},[C._v("这里"),I("OutboundLink")],1),C._v("。")]),C._v(" "),I("h2",{attrs:{id:"multistore"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#multistore"}},[C._v("#")]),C._v(" Multistore")]),C._v(" "),I("p",[C._v("Cosmos SDK 为状态持久化提供了 "),I("code",[C._v("multistore")]),C._v("。Multistore 允许开发者声明任意数量的 "),I("code",[C._v("KVStores")]),C._v("。这些 "),I("code",[C._v("KVStores")]),C._v(" 只接受 "),I("code",[C._v("[]byte")]),C._v(" 类型的值，因此任何自定义的结构都需要在存储之前使用"),I("a",{attrs:{href:"https://docs.cosmos.network/master/core/encoding.html",target:"_blank",rel:"noopener noreferrer"}},[C._v("codec"),I("OutboundLink")],1),C._v("进行编码。")]),C._v(" "),I("p",[C._v("Multistore 抽象用于区分不同模块的状态，每个都由其自己的模块管理。更多关于 multistore 的信息请点击"),I("a",{attrs:{href:"https://docs.cosmos.network/master/core/store.html#multistore",target:"_blank",rel:"noopener noreferrer"}},[C._v("这里"),I("OutboundLink")],1),C._v("。")]),C._v(" "),I("h2",{attrs:{id:"modules"}},[I("a",{staticClass:"header-anchor",attrs:{href:"#modules"}},[C._v("#")]),C._v(" Modules")]),C._v(" "),I("p",[C._v("Cosmos SDK 的强大之处在于其模块化开发的理念。SDK 应用程序是通过组合一系列可互操作的模块而构建的。每个模块定义了状态子集，并包含其 Messages 与 Transactions 的处理器，同时 SDK 负责将每个 Message 路由到对应的模块中。")]),C._v(" "),I("p",[C._v("以下的简化视图展示了应用链中的每个全节点如何处理有效区块中的 Transaction。")]),C._v(" "),I("tm-code-block",{staticClass:"codeblock",attrs:{language:"md",base64:"ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFRyYW5zYWN0aW9uIHJlbGF5ZWQgZnJvbSB0aGUgZnVsbC1ub2RlJ3MgVGVuZGVybWludCBlbmdpbmUKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB0byB0aGUgbm9kZSdzIGFwcGxpY2F0aW9uIHZpYSBEZWxpdmVyVHgKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwKICAgICAgICAgICAgICAgICstLS0tLS0tLS0tLS0tLS0tLS0tLS12LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rCiAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICBBUFBMSUNBVElPTiAgICAgICAgICAgICAgICAgICAgfAogICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwKICAgICAgICAgICAgICAgIHwgICAgIFVzaW5nIGJhc2VhcHAncyBtZXRob2RzOiBEZWNvZGUgdGhlIFR4LCAgICB8CiAgICAgICAgICAgICAgICB8ICAgICBleHRyYWN0IGFuZCByb3V0ZSB0aGUgbWVzc2FnZShzKSAgICAgICAgICAgfAogICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwKICAgICAgICAgICAgICAgICstLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTWVzc2FnZSByb3V0ZWQgdG8gdGhlIGNvcnJlY3QKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgbW9kdWxlIHRvIGJlIHByb2Nlc3NlZAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwKKy0tLS0tLS0tLS0tLS0tLS0rICArLS0tLS0tLS0tLS0tLS0tKyAgKy0tLS0tLS0tLS0tLS0tLS0rICArLS0tLS0tdi0tLS0tLS0tLS0rCnwgICAgICAgICAgICAgICAgfCAgfCAgICAgICAgICAgICAgIHwgIHwgICAgICAgICAgICAgICAgfCAgfCAgICAgICAgICAgICAgICAgfAp8ICBBVVRIIE1PRFVMRSAgIHwgIHwgIEJBTksgTU9EVUxFICB8ICB8IFNUQUtJTkcgTU9EVUxFIHwgIHwgICBHT1YgTU9EVUxFICAgIHwKfCAgICAgICAgICAgICAgICB8ICB8ICAgICAgICAgICAgICAgfCAgfCAgICAgICAgICAgICAgICB8ICB8ICAgICAgICAgICAgICAgICB8CnwgICAgICAgICAgICAgICAgfCAgfCAgICAgICAgICAgICAgIHwgIHwgICAgICAgICAgICAgICAgfCAgfCBIYW5kbGVzIG1lc3NhZ2UsfAp8ICAgICAgICAgICAgICAgIHwgIHwgICAgICAgICAgICAgICB8ICB8ICAgICAgICAgICAgICAgIHwgIHwgVXBkYXRlcyBzdGF0ZSAgIHwKfCAgICAgICAgICAgICAgICB8ICB8ICAgICAgICAgICAgICAgfCAgfCAgICAgICAgICAgICAgICB8ICB8ICAgICAgICAgICAgICAgICB8CistLS0tLS0tLS0tLS0tLS0tKyAgKy0tLS0tLS0tLS0tLS0tLSsgICstLS0tLS0tLS0tLS0tLS0tKyAgKy0tLS0tLSstLS0tLS0tLS0tKwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJldHVybiByZXN1bHQgdG8gVGVuZGVybWludAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICgwPU9rLCAxPUVycikKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdgo="}}),C._v(" "),I("p",[C._v("每个模块都可以看成是一个小的状态机。开发者需要定义由模块处理的状态子集，同时自定义改变状态的 Message 类型（注意："),I("code",[C._v("messages")]),C._v(" 是通过 "),I("code",[C._v("baseapp")]),C._v(" 从 "),I("code",[C._v("transactions")]),C._v(" 中提取的）。通常，每个模块会在 "),I("code",[C._v("multistore")]),C._v(" 中声明自己的 "),I("code",[C._v("KVStore")]),C._v("，以存储自定义的状态子集。大部分开发者在构建自己的模块时，需要访问其它第三方模块。由于 Cosmos SDK 是一个开放的框架，其中的一些模块可能是恶意的，这意味着需要一套安全原则去考虑模块间的交互。这些原则都基于"),I("a",{attrs:{href:"https://docs.cosmos.network/master/core/ocap.html",target:"_blank",rel:"noopener noreferrer"}},[C._v("object-capabilities"),I("OutboundLink")],1),C._v("。事实上，这也意味着，并不是要让每个模块都保留其他模块的访问控制列表，而是每个模块都实现了被称为 "),I("code",[C._v("keepers")]),C._v(" 的特殊对象，它们可以被传递给其他模块，以授予一组预定义的功能。")]),C._v(" "),I("p",[C._v("SDK 模块被定义在 SDK 的 "),I("code",[C._v("x/")]),C._v(" 文件夹中，一些核心的模块包括：")]),C._v(" "),I("ul",[I("li",[I("code",[C._v("x/auth")]),C._v("：用于管理账户和签名。")]),C._v(" "),I("li",[I("code",[C._v("x/bank")]),C._v("：用于启动 tokens 和 token 转账。")]),C._v(" "),I("li",[I("code",[C._v("x/staking")]),C._v(" + "),I("code",[C._v("s/slashing")]),C._v("：用于构建 POS 区块链。")])]),C._v(" "),I("p",[C._v("除了 "),I("code",[C._v("x/")]),C._v(" 文件夹中已经存在的任何人都可以使用的模块，SDK 还允许您构建自己自定义的模块，您可以在"),I("a",{attrs:{href:"https://cosmos.network/docs/tutorial/keeper.html",target:"_blank",rel:"noopener noreferrer"}},[C._v("教程中查看示例"),I("OutboundLink")],1),C._v("。")])],1)}),[],!1,null,null,null);g.default=l.exports}}]);