(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{703:function(a,c,d){"use strict";d.r(c);var e=d(1),g=Object(e.a)({},(function(){var a=this,c=a.$createElement,d=a._self._c||c;return d("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[d("h1",{attrs:{id:"msg-service"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#msg-service"}},[a._v("#")]),a._v(" Msg Service")]),a._v(" "),d("h2",{attrs:{id:"msg-creategroup"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#msg-creategroup"}},[a._v("#")]),a._v(" Msg/CreateGroup")]),a._v(" "),d("p",[a._v("A new group can be created with the "),d("code",[a._v("MsgCreateGroup")]),a._v(", which has an admin address, a list of members and some optional metadata.")]),a._v(" "),d("p",[a._v("The metadata has a maximum length that is chosen by the app developer, and\npassed into the group keeper as a config.")]),a._v(" "),d("p",[d("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnQ3JlYXRlR3JvdXAgaXMgdGhlIE1zZy9DcmVhdGVHcm91cCByZXF1ZXN0IHR5cGUuCm1lc3NhZ2UgTXNnQ3JlYXRlR3JvdXAgewogIG9wdGlvbiAoY29zbW9zLm1zZy52MS5zaWduZXIpID0gJnF1b3Q7YWRtaW4mcXVvdDs7CgogIC8vIGFkbWluIGlzIHRoZSBhY2NvdW50IGFkZHJlc3Mgb2YgdGhlIGdyb3VwIGFkbWluLgogIHN0cmluZyBhZG1pbiA9IDEgWyhjb3Ntb3NfcHJvdG8uc2NhbGFyKSA9ICZxdW90O2Nvc21vcy5BZGRyZXNzU3RyaW5nJnF1b3Q7XTsKCiAgLy8gbWVtYmVycyBkZWZpbmVzIHRoZSBncm91cCBtZW1iZXJzLgogIHJlcGVhdGVkIE1lbWJlclJlcXVlc3QgbWVtYmVycyA9IDIgWyhnb2dvcHJvdG8ubnVsbGFibGUpID0gZmFsc2VdOwoKICAvLyBtZXRhZGF0YSBpcyBhbnkgYXJiaXRyYXJ5IG1ldGFkYXRhIHRvIGF0dGFjaGVkIHRvIHRoZSBncm91cC4KICBzdHJpbmcgbWV0YWRhdGEgPSAzOwp9"}})],1),a._v(" "),d("p",[a._v("It's expected to fail if")]),a._v(" "),d("ul",[d("li",[a._v("metadata length is greater than "),d("code",[a._v("MaxMetadataLen")]),a._v("\nconfig")]),a._v(" "),d("li",[a._v("members are not correctly set (e.g. wrong address format, duplicates, or with 0 weight).")])]),a._v(" "),d("h2",{attrs:{id:"msg-updategroupmembers"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#msg-updategroupmembers"}},[a._v("#")]),a._v(" Msg/UpdateGroupMembers")]),a._v(" "),d("p",[a._v("Group members can be updated with the "),d("code",[a._v("UpdateGroupMembers")]),a._v(".")]),a._v(" "),d("p",[d("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnVXBkYXRlR3JvdXBNZW1iZXJzIGlzIHRoZSBNc2cvVXBkYXRlR3JvdXBNZW1iZXJzIHJlcXVlc3QgdHlwZS4KbWVzc2FnZSBNc2dVcGRhdGVHcm91cE1lbWJlcnMgewogIG9wdGlvbiAoY29zbW9zLm1zZy52MS5zaWduZXIpID0gJnF1b3Q7YWRtaW4mcXVvdDs7CgogIC8vIGFkbWluIGlzIHRoZSBhY2NvdW50IGFkZHJlc3Mgb2YgdGhlIGdyb3VwIGFkbWluLgogIHN0cmluZyBhZG1pbiA9IDEgWyhjb3Ntb3NfcHJvdG8uc2NhbGFyKSA9ICZxdW90O2Nvc21vcy5BZGRyZXNzU3RyaW5nJnF1b3Q7XTsKCiAgLy8gZ3JvdXBfaWQgaXMgdGhlIHVuaXF1ZSBJRCBvZiB0aGUgZ3JvdXAuCiAgdWludDY0IGdyb3VwX2lkID0gMjsKCiAgLy8gbWVtYmVyX3VwZGF0ZXMgaXMgdGhlIGxpc3Qgb2YgbWVtYmVycyB0byB1cGRhdGUsCiAgLy8gc2V0IHdlaWdodCB0byAwIHRvIHJlbW92ZSBhIG1lbWJlci4KICByZXBlYXRlZCBNZW1iZXJSZXF1ZXN0IG1lbWJlcl91cGRhdGVzID0gMyBbKGdvZ29wcm90by5udWxsYWJsZSkgPSBmYWxzZV07Cn0="}})],1),a._v(" "),d("p",[a._v("In the list of "),d("code",[a._v("MemberUpdates")]),a._v(", an existing member can be removed by setting its weight to 0.")]),a._v(" "),d("p",[a._v("It's expected to fail if:")]),a._v(" "),d("ul",[d("li",[a._v("the signer is not the admin of the group.")]),a._v(" "),d("li",[a._v("for any one of the associated group policies, if its decision policy's "),d("code",[a._v("Validate()")]),a._v(" method fails against the updated group.")])]),a._v(" "),d("h2",{attrs:{id:"msg-updategroupadmin"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#msg-updategroupadmin"}},[a._v("#")]),a._v(" Msg/UpdateGroupAdmin")]),a._v(" "),d("p",[a._v("The "),d("code",[a._v("UpdateGroupAdmin")]),a._v(" can be used to update a group admin.")]),a._v(" "),d("p",[d("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnVXBkYXRlR3JvdXBBZG1pbiBpcyB0aGUgTXNnL1VwZGF0ZUdyb3VwQWRtaW4gcmVxdWVzdCB0eXBlLgptZXNzYWdlIE1zZ1VwZGF0ZUdyb3VwQWRtaW4gewogIG9wdGlvbiAoY29zbW9zLm1zZy52MS5zaWduZXIpID0gJnF1b3Q7YWRtaW4mcXVvdDs7CgogIC8vIGFkbWluIGlzIHRoZSBjdXJyZW50IGFjY291bnQgYWRkcmVzcyBvZiB0aGUgZ3JvdXAgYWRtaW4uCiAgc3RyaW5nIGFkbWluID0gMSBbKGNvc21vc19wcm90by5zY2FsYXIpID0gJnF1b3Q7Y29zbW9zLkFkZHJlc3NTdHJpbmcmcXVvdDtdOwoKICAvLyBncm91cF9pZCBpcyB0aGUgdW5pcXVlIElEIG9mIHRoZSBncm91cC4KICB1aW50NjQgZ3JvdXBfaWQgPSAyOwoKICAvLyBuZXdfYWRtaW4gaXMgdGhlIGdyb3VwIG5ldyBhZG1pbiBhY2NvdW50IGFkZHJlc3MuCiAgc3RyaW5nIG5ld19hZG1pbiA9IDMgWyhjb3Ntb3NfcHJvdG8uc2NhbGFyKSA9ICZxdW90O2Nvc21vcy5BZGRyZXNzU3RyaW5nJnF1b3Q7XTsKfQ=="}})],1),a._v(" "),d("p",[a._v("It's expected to fail if the signer is not the admin of the group.")]),a._v(" "),d("h2",{attrs:{id:"msg-updategroupmetadata"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#msg-updategroupmetadata"}},[a._v("#")]),a._v(" Msg/UpdateGroupMetadata")]),a._v(" "),d("p",[a._v("The "),d("code",[a._v("UpdateGroupMetadata")]),a._v(" can be used to update a group metadata.")]),a._v(" "),d("p",[d("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnVXBkYXRlR3JvdXBNZXRhZGF0YSBpcyB0aGUgTXNnL1VwZGF0ZUdyb3VwTWV0YWRhdGEgcmVxdWVzdCB0eXBlLgptZXNzYWdlIE1zZ1VwZGF0ZUdyb3VwTWV0YWRhdGEgewogIG9wdGlvbiAoY29zbW9zLm1zZy52MS5zaWduZXIpID0gJnF1b3Q7YWRtaW4mcXVvdDs7CgogIC8vIGFkbWluIGlzIHRoZSBhY2NvdW50IGFkZHJlc3Mgb2YgdGhlIGdyb3VwIGFkbWluLgogIHN0cmluZyBhZG1pbiA9IDEgWyhjb3Ntb3NfcHJvdG8uc2NhbGFyKSA9ICZxdW90O2Nvc21vcy5BZGRyZXNzU3RyaW5nJnF1b3Q7XTsKCiAgLy8gZ3JvdXBfaWQgaXMgdGhlIHVuaXF1ZSBJRCBvZiB0aGUgZ3JvdXAuCiAgdWludDY0IGdyb3VwX2lkID0gMjsKCiAgLy8gbWV0YWRhdGEgaXMgdGhlIHVwZGF0ZWQgZ3JvdXAncyBtZXRhZGF0YS4KICBzdHJpbmcgbWV0YWRhdGEgPSAzOwp9"}})],1),a._v(" "),d("p",[a._v("It's expected to fail if:")]),a._v(" "),d("ul",[d("li",[a._v("new metadata length is greater than "),d("code",[a._v("MaxMetadataLen")]),a._v(" config.")]),a._v(" "),d("li",[a._v("the signer is not the admin of the group.")])]),a._v(" "),d("h2",{attrs:{id:"msg-creategrouppolicy"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#msg-creategrouppolicy"}},[a._v("#")]),a._v(" Msg/CreateGroupPolicy")]),a._v(" "),d("p",[a._v("A new group policy can be created with the "),d("code",[a._v("MsgCreateGroupPolicy")]),a._v(", which has an admin address, a group id, a decision policy and some optional metadata.")]),a._v(" "),d("p",[d("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnQ3JlYXRlR3JvdXBQb2xpY3kgaXMgdGhlIE1zZy9DcmVhdGVHcm91cFBvbGljeSByZXF1ZXN0IHR5cGUuCm1lc3NhZ2UgTXNnQ3JlYXRlR3JvdXBQb2xpY3kgewogIG9wdGlvbiAoY29zbW9zLm1zZy52MS5zaWduZXIpID0gJnF1b3Q7YWRtaW4mcXVvdDs7CgogIG9wdGlvbiAoZ29nb3Byb3RvLmdvcHJvdG9fZ2V0dGVycykgPSBmYWxzZTsKCiAgLy8gYWRtaW4gaXMgdGhlIGFjY291bnQgYWRkcmVzcyBvZiB0aGUgZ3JvdXAgYWRtaW4uCiAgc3RyaW5nIGFkbWluID0gMSBbKGNvc21vc19wcm90by5zY2FsYXIpID0gJnF1b3Q7Y29zbW9zLkFkZHJlc3NTdHJpbmcmcXVvdDtdOwoKICAvLyBncm91cF9pZCBpcyB0aGUgdW5pcXVlIElEIG9mIHRoZSBncm91cC4KICB1aW50NjQgZ3JvdXBfaWQgPSAyOwoKICAvLyBtZXRhZGF0YSBpcyBhbnkgYXJiaXRyYXJ5IG1ldGFkYXRhIGF0dGFjaGVkIHRvIHRoZSBncm91cCBwb2xpY3kuCiAgc3RyaW5nIG1ldGFkYXRhID0gMzsKCiAgLy8gZGVjaXNpb25fcG9saWN5IHNwZWNpZmllcyB0aGUgZ3JvdXAgcG9saWN5J3MgZGVjaXNpb24gcG9saWN5LgogIGdvb2dsZS5wcm90b2J1Zi5BbnkgZGVjaXNpb25fcG9saWN5ID0gNCBbKGNvc21vc19wcm90by5hY2NlcHRzX2ludGVyZmFjZSkgPSAmcXVvdDtjb3Ntb3MuZ3JvdXAudjEuRGVjaXNpb25Qb2xpY3kmcXVvdDtdOwp9"}})],1),a._v(" "),d("p",[a._v("It's expected to fail if:")]),a._v(" "),d("ul",[d("li",[a._v("the signer is not the admin of the group.")]),a._v(" "),d("li",[a._v("metadata length is greater than "),d("code",[a._v("MaxMetadataLen")]),a._v(" config.")]),a._v(" "),d("li",[a._v("the decision policy's "),d("code",[a._v("Validate()")]),a._v(" method doesn't pass against the group.")])]),a._v(" "),d("h2",{attrs:{id:"msg-creategroupwithpolicy"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#msg-creategroupwithpolicy"}},[a._v("#")]),a._v(" Msg/CreateGroupWithPolicy")]),a._v(" "),d("p",[a._v("A new group with policy can be created with the "),d("code",[a._v("MsgCreateGroupWithPolicy")]),a._v(", which has an admin address, a list of members, a decision policy, a "),d("code",[a._v("group_policy_as_admin")]),a._v(" field to optionally set group and group policy admin with group policy address and some optional metadata for group and group policy.")]),a._v(" "),d("p",[d("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnQ3JlYXRlR3JvdXBXaXRoUG9saWN5IGlzIHRoZSBNc2cvQ3JlYXRlR3JvdXBXaXRoUG9saWN5IHJlcXVlc3QgdHlwZS4KbWVzc2FnZSBNc2dDcmVhdGVHcm91cFdpdGhQb2xpY3kgewogIG9wdGlvbiAoY29zbW9zLm1zZy52MS5zaWduZXIpICAgICAgPSAmcXVvdDthZG1pbiZxdW90OzsKICBvcHRpb24gKGdvZ29wcm90by5nb3Byb3RvX2dldHRlcnMpID0gZmFsc2U7CgogIC8vIGFkbWluIGlzIHRoZSBhY2NvdW50IGFkZHJlc3Mgb2YgdGhlIGdyb3VwIGFuZCBncm91cCBwb2xpY3kgYWRtaW4uCiAgc3RyaW5nIGFkbWluID0gMSBbKGNvc21vc19wcm90by5zY2FsYXIpID0gJnF1b3Q7Y29zbW9zLkFkZHJlc3NTdHJpbmcmcXVvdDtdOwoKICAvLyBtZW1iZXJzIGRlZmluZXMgdGhlIGdyb3VwIG1lbWJlcnMuCiAgcmVwZWF0ZWQgTWVtYmVyUmVxdWVzdCBtZW1iZXJzID0gMiBbKGdvZ29wcm90by5udWxsYWJsZSkgPSBmYWxzZV07CgogIC8vIGdyb3VwX21ldGFkYXRhIGlzIGFueSBhcmJpdHJhcnkgbWV0YWRhdGEgYXR0YWNoZWQgdG8gdGhlIGdyb3VwLgogIHN0cmluZyBncm91cF9tZXRhZGF0YSA9IDM7CgogIC8vIGdyb3VwX3BvbGljeV9tZXRhZGF0YSBpcyBhbnkgYXJiaXRyYXJ5IG1ldGFkYXRhIGF0dGFjaGVkIHRvIHRoZSBncm91cCBwb2xpY3kuCiAgc3RyaW5nIGdyb3VwX3BvbGljeV9tZXRhZGF0YSA9IDQ7CgogIC8vIGdyb3VwX3BvbGljeV9hc19hZG1pbiBpcyBhIGJvb2xlYW4gZmllbGQsIGlmIHNldCB0byB0cnVlLCB0aGUgZ3JvdXAgcG9saWN5IGFjY291bnQgYWRkcmVzcyB3aWxsIGJlIHVzZWQgYXMgZ3JvdXAKICAvLyBhbmQgZ3JvdXAgcG9saWN5IGFkbWluLgogIGJvb2wgZ3JvdXBfcG9saWN5X2FzX2FkbWluID0gNTsKCiAgLy8gZGVjaXNpb25fcG9saWN5IHNwZWNpZmllcyB0aGUgZ3JvdXAgcG9saWN5J3MgZGVjaXNpb24gcG9saWN5LgogIGdvb2dsZS5wcm90b2J1Zi5BbnkgZGVjaXNpb25fcG9saWN5ID0gNiBbKGNvc21vc19wcm90by5hY2NlcHRzX2ludGVyZmFjZSkgPSAmcXVvdDtjb3Ntb3MuZ3JvdXAudjEuRGVjaXNpb25Qb2xpY3kmcXVvdDtdOwp9"}})],1),a._v(" "),d("p",[a._v("It's expected to fail for the same reasons as "),d("code",[a._v("Msg/CreateGroup")]),a._v(" and "),d("code",[a._v("Msg/CreateGroupPolicy")]),a._v(".")]),a._v(" "),d("h2",{attrs:{id:"msg-updategrouppolicyadmin"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#msg-updategrouppolicyadmin"}},[a._v("#")]),a._v(" Msg/UpdateGroupPolicyAdmin")]),a._v(" "),d("p",[a._v("The "),d("code",[a._v("UpdateGroupPolicyAdmin")]),a._v(" can be used to update a group policy admin.")]),a._v(" "),d("p",[d("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnVXBkYXRlR3JvdXBQb2xpY3lBZG1pbiBpcyB0aGUgTXNnL1VwZGF0ZUdyb3VwUG9saWN5QWRtaW4gcmVxdWVzdCB0eXBlLgptZXNzYWdlIE1zZ1VwZGF0ZUdyb3VwUG9saWN5QWRtaW4gewogIG9wdGlvbiAoY29zbW9zLm1zZy52MS5zaWduZXIpID0gJnF1b3Q7YWRtaW4mcXVvdDs7CgogIC8vIGFkbWluIGlzIHRoZSBhY2NvdW50IGFkZHJlc3Mgb2YgdGhlIGdyb3VwIGFkbWluLgogIHN0cmluZyBhZG1pbiA9IDEgWyhjb3Ntb3NfcHJvdG8uc2NhbGFyKSA9ICZxdW90O2Nvc21vcy5BZGRyZXNzU3RyaW5nJnF1b3Q7XTsKCiAgLy8gZ3JvdXBfcG9saWN5X2FkZHJlc3MgaXMgdGhlIGFjY291bnQgYWRkcmVzcyBvZiB0aGUgZ3JvdXAgcG9saWN5LgogIHN0cmluZyBncm91cF9wb2xpY3lfYWRkcmVzcyA9IDIgWyhjb3Ntb3NfcHJvdG8uc2NhbGFyKSA9ICZxdW90O2Nvc21vcy5BZGRyZXNzU3RyaW5nJnF1b3Q7XTsKCiAgLy8gbmV3X2FkbWluIGlzIHRoZSBuZXcgZ3JvdXAgcG9saWN5IGFkbWluLgogIHN0cmluZyBuZXdfYWRtaW4gPSAzIFsoY29zbW9zX3Byb3RvLnNjYWxhcikgPSAmcXVvdDtjb3Ntb3MuQWRkcmVzc1N0cmluZyZxdW90O107Cn0="}})],1),a._v(" "),d("p",[a._v("It's expected to fail if the signer is not the admin of the group policy.")]),a._v(" "),d("h2",{attrs:{id:"msg-updategrouppolicydecisionpolicy"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#msg-updategrouppolicydecisionpolicy"}},[a._v("#")]),a._v(" Msg/UpdateGroupPolicyDecisionPolicy")]),a._v(" "),d("p",[a._v("The "),d("code",[a._v("UpdateGroupPolicyDecisionPolicy")]),a._v(" can be used to update a decision policy.")]),a._v(" "),d("p",[d("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"bWVzc2FnZSBNc2dVcGRhdGVHcm91cFBvbGljeUFkbWluUmVzcG9uc2Uge30KCi8vIE1zZ1VwZGF0ZUdyb3VwUG9saWN5RGVjaXNpb25Qb2xpY3kgaXMgdGhlIE1zZy9VcGRhdGVHcm91cFBvbGljeURlY2lzaW9uUG9saWN5IHJlcXVlc3QgdHlwZS4KbWVzc2FnZSBNc2dVcGRhdGVHcm91cFBvbGljeURlY2lzaW9uUG9saWN5IHsKICBvcHRpb24gKGNvc21vcy5tc2cudjEuc2lnbmVyKSA9ICZxdW90O2FkbWluJnF1b3Q7OwoKICBvcHRpb24gKGdvZ29wcm90by5nb3Byb3RvX2dldHRlcnMpID0gZmFsc2U7CgogIC8vIGFkbWluIGlzIHRoZSBhY2NvdW50IGFkZHJlc3Mgb2YgdGhlIGdyb3VwIGFkbWluLgogIHN0cmluZyBhZG1pbiA9IDEgWyhjb3Ntb3NfcHJvdG8uc2NhbGFyKSA9ICZxdW90O2Nvc21vcy5BZGRyZXNzU3RyaW5nJnF1b3Q7XTsKCiAgLy8gZ3JvdXBfcG9saWN5X2FkZHJlc3MgaXMgdGhlIGFjY291bnQgYWRkcmVzcyBvZiBncm91cCBwb2xpY3kuCiAgc3RyaW5nIGdyb3VwX3BvbGljeV9hZGRyZXNzID0gMiBbKGNvc21vc19wcm90by5zY2FsYXIpID0gJnF1b3Q7Y29zbW9zLkFkZHJlc3NTdHJpbmcmcXVvdDtdOwoKICAvLyBkZWNpc2lvbl9wb2xpY3kgaXMgdGhlIHVwZGF0ZWQgZ3JvdXAgcG9saWN5J3MgZGVjaXNpb24gcG9saWN5LgogIGdvb2dsZS5wcm90b2J1Zi5BbnkgZGVjaXNpb25fcG9saWN5ID0gMyBbKGNvc21vc19wcm90by5hY2NlcHRzX2ludGVyZmFjZSkgPSAmcXVvdDtjb3Ntb3MuZ3JvdXAudjEuRGVjaXNpb25Qb2xpY3kmcXVvdDtdOwp9"}})],1),a._v(" "),d("p",[a._v("It's expected to fail if:")]),a._v(" "),d("ul",[d("li",[a._v("the signer is not the admin of the group policy.")]),a._v(" "),d("li",[a._v("the new decision policy's "),d("code",[a._v("Validate()")]),a._v(" method doesn't pass against the group.")])]),a._v(" "),d("h2",{attrs:{id:"msg-updategrouppolicymetadata"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#msg-updategrouppolicymetadata"}},[a._v("#")]),a._v(" Msg/UpdateGroupPolicyMetadata")]),a._v(" "),d("p",[a._v("The "),d("code",[a._v("UpdateGroupPolicyMetadata")]),a._v(" can be used to update a group policy metadata.")]),a._v(" "),d("p",[d("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnVXBkYXRlR3JvdXBQb2xpY3lNZXRhZGF0YSBpcyB0aGUgTXNnL1VwZGF0ZUdyb3VwUG9saWN5TWV0YWRhdGEgcmVxdWVzdCB0eXBlLgptZXNzYWdlIE1zZ1VwZGF0ZUdyb3VwUG9saWN5TWV0YWRhdGEgewogIG9wdGlvbiAoY29zbW9zLm1zZy52MS5zaWduZXIpID0gJnF1b3Q7YWRtaW4mcXVvdDs7CgogIC8vIGFkbWluIGlzIHRoZSBhY2NvdW50IGFkZHJlc3Mgb2YgdGhlIGdyb3VwIGFkbWluLgogIHN0cmluZyBhZG1pbiA9IDEgWyhjb3Ntb3NfcHJvdG8uc2NhbGFyKSA9ICZxdW90O2Nvc21vcy5BZGRyZXNzU3RyaW5nJnF1b3Q7XTsKCiAgLy8gZ3JvdXBfcG9saWN5X2FkZHJlc3MgaXMgdGhlIGFjY291bnQgYWRkcmVzcyBvZiBncm91cCBwb2xpY3kuCiAgc3RyaW5nIGdyb3VwX3BvbGljeV9hZGRyZXNzID0gMiBbKGNvc21vc19wcm90by5zY2FsYXIpID0gJnF1b3Q7Y29zbW9zLkFkZHJlc3NTdHJpbmcmcXVvdDtdOwoKICAvLyBtZXRhZGF0YSBpcyB0aGUgdXBkYXRlZCBncm91cCBwb2xpY3kgbWV0YWRhdGEuCiAgc3RyaW5nIG1ldGFkYXRhID0gMzsKfQ=="}})],1),a._v(" "),d("p",[a._v("It's expected to fail if:")]),a._v(" "),d("ul",[d("li",[a._v("new metadata length is greater than "),d("code",[a._v("MaxMetadataLen")]),a._v(" config.")]),a._v(" "),d("li",[a._v("the signer is not the admin of the group.")])]),a._v(" "),d("h2",{attrs:{id:"msg-submitproposal"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#msg-submitproposal"}},[a._v("#")]),a._v(" Msg/SubmitProposal")]),a._v(" "),d("p",[a._v("A new proposal can be created with the "),d("code",[a._v("MsgSubmitProposal")]),a._v(", which has a group policy account address, a list of proposers addresses, a list of messages to execute if the proposal is accepted and some optional metadata.\nAn optional "),d("code",[a._v("Exec")]),a._v(" value can be provided to try to execute the proposal immediately after proposal creation. Proposers signatures are considered as yes votes in this case.")]),a._v(" "),d("p",[d("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnU3VibWl0UHJvcG9zYWwgaXMgdGhlIE1zZy9TdWJtaXRQcm9wb3NhbCByZXF1ZXN0IHR5cGUuCm1lc3NhZ2UgTXNnU3VibWl0UHJvcG9zYWwgewogIG9wdGlvbiAoY29zbW9zLm1zZy52MS5zaWduZXIpID0gJnF1b3Q7cHJvcG9zZXJzJnF1b3Q7OwoKICBvcHRpb24gKGdvZ29wcm90by5nb3Byb3RvX2dldHRlcnMpID0gZmFsc2U7CgogIC8vIGdyb3VwX3BvbGljeV9hZGRyZXNzIGlzIHRoZSBhY2NvdW50IGFkZHJlc3Mgb2YgZ3JvdXAgcG9saWN5LgogIHN0cmluZyBncm91cF9wb2xpY3lfYWRkcmVzcyA9IDEgWyhjb3Ntb3NfcHJvdG8uc2NhbGFyKSA9ICZxdW90O2Nvc21vcy5BZGRyZXNzU3RyaW5nJnF1b3Q7XTsKCiAgLy8gcHJvcG9zZXJzIGFyZSB0aGUgYWNjb3VudCBhZGRyZXNzZXMgb2YgdGhlIHByb3Bvc2Vycy4KICAvLyBQcm9wb3NlcnMgc2lnbmF0dXJlcyB3aWxsIGJlIGNvdW50ZWQgYXMgeWVzIHZvdGVzLgogIHJlcGVhdGVkIHN0cmluZyBwcm9wb3NlcnMgPSAyOwoKICAvLyBtZXRhZGF0YSBpcyBhbnkgYXJiaXRyYXJ5IG1ldGFkYXRhIHRvIGF0dGFjaGVkIHRvIHRoZSBwcm9wb3NhbC4KICBzdHJpbmcgbWV0YWRhdGEgPSAzOwoKICAvLyBtZXNzYWdlcyBpcyBhIGxpc3Qgb2YgYHNkay5Nc2dgcyB0aGF0IHdpbGwgYmUgZXhlY3V0ZWQgaWYgdGhlIHByb3Bvc2FsIHBhc3Nlcy4KICByZXBlYXRlZCBnb29nbGUucHJvdG9idWYuQW55IG1lc3NhZ2VzID0gNDsKCiAgLy8gZXhlYyBkZWZpbmVzIHRoZSBtb2RlIG9mIGV4ZWN1dGlvbiBvZiB0aGUgcHJvcG9zYWwsCiAgLy8gd2hldGhlciBpdCBzaG91bGQgYmUgZXhlY3V0ZWQgaW1tZWRpYXRlbHkgb24gY3JlYXRpb24gb3Igbm90LgogIC8vIElmIHNvLCBwcm9wb3NlcnMgc2lnbmF0dXJlcyBhcmUgY29uc2lkZXJlZCBhcyBZZXMgdm90ZXMuCiAgRXhlYyBleGVjID0gNTsKfQ=="}})],1),a._v(" "),d("p",[a._v("It's expected to fail if:")]),a._v(" "),d("ul",[d("li",[a._v("metadata length is greater than "),d("code",[a._v("MaxMetadataLen")]),a._v(" config.")]),a._v(" "),d("li",[a._v("if any of the proposers is not a group member.")])]),a._v(" "),d("h2",{attrs:{id:"msg-withdrawproposal"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#msg-withdrawproposal"}},[a._v("#")]),a._v(" Msg/WithdrawProposal")]),a._v(" "),d("p",[a._v("A proposal can be withdrawn using "),d("code",[a._v("MsgWithdrawProposal")]),a._v(" which has an "),d("code",[a._v("address")]),a._v(" (can be either a proposer or the group policy admin) and a "),d("code",[a._v("proposal_id")]),a._v(" (which has to be withdrawn).")]),a._v(" "),d("p",[d("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnV2l0aGRyYXdQcm9wb3NhbCBpcyB0aGUgTXNnL1dpdGhkcmF3UHJvcG9zYWwgcmVxdWVzdCB0eXBlLgptZXNzYWdlIE1zZ1dpdGhkcmF3UHJvcG9zYWwgewogIG9wdGlvbiAoY29zbW9zLm1zZy52MS5zaWduZXIpID0gJnF1b3Q7YWRkcmVzcyZxdW90OzsKCiAgLy8gcHJvcG9zYWwgaXMgdGhlIHVuaXF1ZSBJRCBvZiB0aGUgcHJvcG9zYWwuCiAgdWludDY0IHByb3Bvc2FsX2lkID0gMTsKCiAgLy8gYWRkcmVzcyBpcyB0aGUgYWRtaW4gb2YgdGhlIGdyb3VwIHBvbGljeSBvciBvbmUgb2YgdGhlIHByb3Bvc2VyIG9mIHRoZSBwcm9wb3NhbC4KICBzdHJpbmcgYWRkcmVzcyA9IDIgWyhjb3Ntb3NfcHJvdG8uc2NhbGFyKSA9ICZxdW90O2Nvc21vcy5BZGRyZXNzU3RyaW5nJnF1b3Q7XTsKfQ=="}})],1),a._v(" "),d("p",[a._v("It's expected to fail if:")]),a._v(" "),d("ul",[d("li",[a._v("the signer is neither the group policy admin nor proposer of the proposal.")]),a._v(" "),d("li",[a._v("the proposal is already closed or aborted.")])]),a._v(" "),d("h2",{attrs:{id:"msg-vote"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#msg-vote"}},[a._v("#")]),a._v(" Msg/Vote")]),a._v(" "),d("p",[a._v("A new vote can be created with the "),d("code",[a._v("MsgVote")]),a._v(", given a proposal id, a voter address, a choice (yes, no, veto or abstain) and some optional metadata.\nAn optional "),d("code",[a._v("Exec")]),a._v(" value can be provided to try to execute the proposal immediately after voting.")]),a._v(" "),d("p",[d("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnVm90ZSBpcyB0aGUgTXNnL1ZvdGUgcmVxdWVzdCB0eXBlLgptZXNzYWdlIE1zZ1ZvdGUgewogIG9wdGlvbiAoY29zbW9zLm1zZy52MS5zaWduZXIpID0gJnF1b3Q7dm90ZXImcXVvdDs7CgogIC8vIHByb3Bvc2FsIGlzIHRoZSB1bmlxdWUgSUQgb2YgdGhlIHByb3Bvc2FsLgogIHVpbnQ2NCBwcm9wb3NhbF9pZCA9IDE7CiAgLy8gdm90ZXIgaXMgdGhlIHZvdGVyIGFjY291bnQgYWRkcmVzcy4KICBzdHJpbmcgdm90ZXIgPSAyIFsoY29zbW9zX3Byb3RvLnNjYWxhcikgPSAmcXVvdDtjb3Ntb3MuQWRkcmVzc1N0cmluZyZxdW90O107CgogIC8vIG9wdGlvbiBpcyB0aGUgdm90ZXIncyBjaG9pY2Ugb24gdGhlIHByb3Bvc2FsLgogIFZvdGVPcHRpb24gb3B0aW9uID0gMzsKCiAgLy8gbWV0YWRhdGEgaXMgYW55IGFyYml0cmFyeSBtZXRhZGF0YSB0byBhdHRhY2hlZCB0byB0aGUgdm90ZS4KICBzdHJpbmcgbWV0YWRhdGEgPSA0OwoKICAvLyBleGVjIGRlZmluZXMgd2hldGhlciB0aGUgcHJvcG9zYWwgc2hvdWxkIGJlIGV4ZWN1dGVkCiAgLy8gaW1tZWRpYXRlbHkgYWZ0ZXIgdm90aW5nIG9yIG5vdC4KICBFeGVjIGV4ZWMgPSA1Owp9"}})],1),a._v(" "),d("p",[a._v("It's expected to fail if:")]),a._v(" "),d("ul",[d("li",[a._v("metadata length is greater than "),d("code",[a._v("MaxMetadataLen")]),a._v(" config.")]),a._v(" "),d("li",[a._v("the proposal is not in voting period anymore.")])]),a._v(" "),d("h2",{attrs:{id:"msg-exec"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#msg-exec"}},[a._v("#")]),a._v(" Msg/Exec")]),a._v(" "),d("p",[a._v("A proposal can be executed with the "),d("code",[a._v("MsgExec")]),a._v(".")]),a._v(" "),d("p",[d("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"Ly8gTXNnVm90ZVJlc3BvbnNlIGlzIHRoZSBNc2cvVm90ZSByZXNwb25zZSB0eXBlLgptZXNzYWdlIE1zZ1ZvdGVSZXNwb25zZSB7fQoKLy8gTXNnRXhlYyBpcyB0aGUgTXNnL0V4ZWMgcmVxdWVzdCB0eXBlLgptZXNzYWdlIE1zZ0V4ZWMgewogIG9wdGlvbiAoY29zbW9zLm1zZy52MS5zaWduZXIpID0gJnF1b3Q7c2lnbmVyJnF1b3Q7OwoKICAvLyBwcm9wb3NhbCBpcyB0aGUgdW5pcXVlIElEIG9mIHRoZSBwcm9wb3NhbC4KICB1aW50NjQgcHJvcG9zYWxfaWQgPSAxOwoKICAvLyBleGVjdXRvciBpcyB0aGUgYWNjb3VudCBhZGRyZXNzIHVzZWQgdG8gZXhlY3V0ZSB0aGUgcHJvcG9zYWwuCiAgc3RyaW5nIGV4ZWN1dG9yID0gMiBbKGNvc21vc19wcm90by5zY2FsYXIpID0gJnF1b3Q7Y29zbW9zLkFkZHJlc3NTdHJpbmcmcXVvdDtdOwp9"}})],1),a._v(" "),d("p",[a._v("The messages that are part of this proposal won't be executed if:")]),a._v(" "),d("ul",[d("li",[a._v("the proposal has not been accepted by the group policy.")]),a._v(" "),d("li",[a._v("the proposal has already been successfully executed.")])]),a._v(" "),d("h2",{attrs:{id:"msg-leavegroup"}},[d("a",{staticClass:"header-anchor",attrs:{href:"#msg-leavegroup"}},[a._v("#")]),a._v(" Msg/LeaveGroup")]),a._v(" "),d("p",[a._v("The "),d("code",[a._v("MsgLeaveGroup")]),a._v(" allows group member to leave a group.")]),a._v(" "),d("p",[d("tm-code-block",{staticClass:"codeblock",attrs:{language:"false",base64:"bWVzc2FnZSBNc2dMZWF2ZUdyb3VwIHsKICBvcHRpb24gKGNvc21vcy5tc2cudjEuc2lnbmVyKSA9ICZxdW90O2FkZHJlc3MmcXVvdDs7CgogIC8vIGFkZHJlc3MgaXMgdGhlIGFjY291bnQgYWRkcmVzcyBvZiB0aGUgZ3JvdXAgbWVtYmVyLgogIHN0cmluZyBhZGRyZXNzID0gMSBbKGNvc21vc19wcm90by5zY2FsYXIpID0gJnF1b3Q7Y29zbW9zLkFkZHJlc3NTdHJpbmcmcXVvdDtdOwoKICAvLyBncm91cF9pZCBpcyB0aGUgdW5pcXVlIElEIG9mIHRoZSBncm91cC4KICB1aW50NjQgZ3JvdXBfaWQgPSAyOwp9"}})],1),a._v(" "),d("p",[a._v("It's expected to fail if:")]),a._v(" "),d("ul",[d("li",[a._v("the group member is not part of the group.")]),a._v(" "),d("li",[a._v("for any one of the associated group policies, if its decision policy's "),d("code",[a._v("Validate()")]),a._v(" method fails against the updated group.")])])])}),[],!1,null,null,null);c.default=g.exports}}]);