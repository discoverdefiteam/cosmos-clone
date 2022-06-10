(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{852:function(t,e,s){"use strict";s.r(e);var v=s(1),_=Object(v.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"服务提供商-service-providers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务提供商-service-providers"}},[t._v("#")]),t._v(" 服务提供商（Service Providers）")]),t._v(" "),s("p",[t._v("我们将“服务提供商”定义为可以为最终用户提供服务的实体，这些实体涉及与基于 Cosmos-SDK 的区块链（包括 Cosmos Hub）的某种形式的交互。更具体地说，本文档将集中于与 token 的交互。")]),t._v(" "),s("p",[t._v("本节不涉及想要提供"),s("a",{attrs:{href:"https://docs.tendermint.com/master/tendermint-core/light-client.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("轻客户端"),s("OutboundLink")],1),t._v("功能的钱包开发者。服务提供商将作为最终用户的区块链的可信接入点。")]),t._v(" "),s("h2",{attrs:{id:"架构的高级描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#架构的高级描述"}},[t._v("#")]),t._v(" 架构的高级描述")]),t._v(" "),s("p",[t._v("有三个主要部分需要考虑：")]),t._v(" "),s("ul",[s("li",[t._v("全节点：与区块链交互。")]),t._v(" "),s("li",[t._v("Rest Server：它充当 HTTP 调用的中继者。")]),t._v(" "),s("li",[t._v("Rest API：为 Rest Server 定义可用端点。")])]),t._v(" "),s("h2",{attrs:{id:"运行全节点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行全节点"}},[t._v("#")]),t._v(" 运行全节点")]),t._v(" "),s("h3",{attrs:{id:"安装和配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装和配置"}},[t._v("#")]),t._v(" 安装和配置")]),t._v(" "),s("p",[t._v("我们将描述为 Cosmos Hub 运行和交互全节点的步骤。对于其他基于 SDK 的区块链，该过程是类似的。")]),t._v(" "),s("p",[t._v("首先，您需要"),s("RouterLink",{attrs:{to:"/cn/cosmos-hub/installation.html"}},[t._v("安装软件")]),t._v(".")],1),t._v(" "),s("p",[t._v("然后，您可以开始"),s("RouterLink",{attrs:{to:"/cn/cosmos-hub/join-testnet.html"}},[t._v("运行全节点")]),t._v(".")],1),t._v(" "),s("h3",{attrs:{id:"命令行界面-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令行界面-cli"}},[t._v("#")]),t._v(" 命令行界面（CLI）")]),t._v(" "),s("p",[t._v("接下来，您将用一些 CLI 命令与全节点交互。")]),t._v(" "),s("h4",{attrs:{id:"创建秘钥对"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建秘钥对"}},[t._v("#")]),t._v(" 创建秘钥对")]),t._v(" "),s("p",[t._v("生成新秘钥（默认使用 secp256k1 椭圆曲线算法）：")]),t._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWNsaSBrZXlzIGFkZCAmbHQ7eW91cl9rZXlfbmFtZSZndDsK"}}),t._v(" "),s("p",[t._v("系统将要求您为此密钥对输入密码（至少 8 个字符）。该命令返回 4 个信息：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("NAME")]),t._v(": 秘钥名称。")]),t._v(" "),s("li",[s("code",[t._v("TYPE")]),t._v("：秘钥类型，总是"),s("code",[t._v("local")]),t._v("。")]),t._v(" "),s("li",[s("code",[t._v("ADDRESS")]),t._v("：您的地址，用于接收资金。")]),t._v(" "),s("li",[s("code",[t._v("PUBKEY")]),t._v("：您的公钥, 用于验证者.")]),t._v(" "),s("li",[s("code",[t._v("MNEMONIC")]),t._v("： 由 24 个单词组成的助记词。 "),s("strong",[t._v("将这个助记词保存在安全的地方")]),t._v("，它用于在您忘记密码时恢复您的私钥。")])]),t._v(" "),s("p",[t._v("您可以输入以下命令查看所有可用密钥：")]),t._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWNsaSBrZXlzIGxpc3QK"}}),t._v(" "),s("h4",{attrs:{id:"检查您的余额"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#检查您的余额"}},[t._v("#")]),t._v(" 检查您的余额")]),t._v(" "),s("p",[t._v("收到代币到您的地址后，您可以输入以下命令查看帐户的余额：")]),t._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWNsaSBhY2NvdW50ICZsdDtZT1VSX0FERFJFU1MmZ3Q7Cg=="}}),t._v(" "),s("p",[s("em",[t._v("注意：当您查询没有 token 帐户的余额时，您将得到以下错误：找不到地址为<YOUR_ADDRESS>的帐户。这是预料之中的！我们正在努力改进我们的错误提示信息。")])]),t._v(" "),s("h4",{attrs:{id:"通过-cli-发送代币"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过-cli-发送代币"}},[t._v("#")]),t._v(" 通过 CLI 发送代币")]),t._v(" "),s("p",[t._v("以下是通过 CLI 发送代币的命令：")]),t._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWNsaSB0eCBzZW5kICZsdDtmcm9tX2tleV9vcl9hZGRyZXNzJmd0OyAmbHQ7dG9fYWRkcmVzcyZndDsgJmx0O2Ftb3VudCZndDsgXAogICAgLS1jaGFpbi1pZD0mbHQ7bmFtZV9vZl90ZXN0bmV0X2NoYWluJmd0Owo="}}),t._v(" "),s("p",[t._v("参数：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("<from_key_or_address>")]),t._v(": 发送账户的名称或地址。")]),t._v(" "),s("li",[s("code",[t._v("<to_address>")]),t._v(": 接收者地址。")]),t._v(" "),s("li",[s("code",[t._v("<amount>")]),t._v(": 接受"),s("code",[t._v("<value|coinName>")]),t._v("格式的参数，例如 "),s("code",[t._v("10faucetToken")]),t._v("。")])]),t._v(" "),s("p",[t._v("标识：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("--chain-id")]),t._v(": 此标志允许您指定链的 ID，不同的 testnet 链和主链会有不同的 id。")])]),t._v(" "),s("h4",{attrs:{id:"帮助"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#帮助"}},[t._v("#")]),t._v(" 帮助")]),t._v(" "),s("p",[t._v("如果您需要进行其他操作，最合适的命令是：")]),t._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWNsaQo="}}),t._v(" "),s("p",[t._v("它将显示所有可用命令。对于每个命令，您可以使用"),s("code",[t._v("--help")]),t._v("标识来获取更多信息。")]),t._v(" "),s("h2",{attrs:{id:"设置-rest-服务器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置-rest-服务器"}},[t._v("#")]),t._v(" 设置 Rest 服务器")]),t._v(" "),s("p",[t._v("Rest 服务器充当前端点和全节点之间的媒介。 Rest 服务器不必与全节点同一台计算机上运行。")]),t._v(" "),s("p",[t._v("要启动 Rest 服务器：")]),t._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2FpYWNsaSByZXN0LXNlcnZlciAtLW5vZGU9Jmx0O2Z1bGxfbm9kZV9hZGRyZXNzOmZ1bGxfbm9kZV9wb3J0Jmd0Owo="}}),t._v(" "),s("p",[t._v("Flags:")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("--node")]),t._v(": 全节点的 IP 地址和端口。格式为 "),s("code",[t._v("<full_node_address:full_node_port>")]),t._v("。如果全节点在同一台机器上，则地址应为 "),s("code",[t._v("tcp：// localhost：26657")]),t._v("。")]),t._v(" "),s("li",[s("code",[t._v("--laddr")]),t._v(": 此标识允许您指定 Rest 服务器的地址和端口（默认为“1317”）。通常只使用这个标识指定端口，此时只需输入 “localhost” 作为地址，格式为"),s("code",[t._v("<rest_server_address:port>")]),t._v("。")])]),t._v(" "),s("h3",{attrs:{id:"监听入向交易"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#监听入向交易"}},[t._v("#")]),t._v(" 监听入向交易")]),t._v(" "),s("p",[t._v("监听入向交易推荐的方法是通过 LCD 的以下端点定期查询区块链：")]),t._v(" "),s("h2",{attrs:{id:"rest-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rest-api"}},[t._v("#")]),t._v(" Rest API")]),t._v(" "),s("p",[t._v("Rest API 记录了可用于与全节点交互的所有可用端点，您可以在"),s("a",{attrs:{href:"https://cosmos.network/rpc/",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1),t._v("查看。")]),t._v(" "),s("p",[t._v("API 针对每种类别的端点归纳为 ICS 标准。例如，"),s("a",{attrs:{href:"https://cosmos.network/rpc/#/ICS20/",target:"_blank",rel:"noopener noreferrer"}},[t._v("ICS20"),s("OutboundLink")],1),t._v("描述了 API 与 token 的交互。")]),t._v(" "),s("p",[t._v("为了给开发者提供更大的灵活性，我们提供了生成未签名交易、"),s("a",{attrs:{href:"https://cosmos.network/rpc/#/ICS20/post_tx_sign",target:"_blank",rel:"noopener noreferrer"}},[t._v("签名"),s("OutboundLink")],1),t._v("和"),s("a",{attrs:{href:"https://cosmos.network/rpc/#/ICS20/post_tx_broadcast",target:"_blank",rel:"noopener noreferrer"}},[t._v("广播"),s("OutboundLink")],1),t._v("等不同的 API 端点。这允许服务提供商使用他们自己的签名机制。")]),t._v(" "),s("p",[t._v("为了生成一个未签名交易（例如 "),s("a",{attrs:{href:"https://cosmos.network/rpc/#/ICS20/post_bank_accounts__address__transfers",target:"_blank",rel:"noopener noreferrer"}},[t._v("coin transfer"),s("OutboundLink")],1),t._v("），你需要在 "),s("code",[t._v("base_req")]),t._v(" 的主体中使用 "),s("code",[t._v("generate_only")]),t._v(" 字段。")]),t._v(" "),s("h2",{attrs:{id:"cosmos-sdk-交易签名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cosmos-sdk-交易签名"}},[t._v("#")]),t._v(" Cosmos SDK 交易签名")]),t._v(" "),s("p",[t._v("Cosmos SDK 签名是一个相当简单的过程。")]),t._v(" "),s("p",[t._v("每个 Cosmos SDK 交易都有一个规范的 JSON 描述。 "),s("code",[t._v("gaiacli")]),t._v("和 REST 接口为交易提供规范的 JSON 描述，“广播”功能将提供紧凑的 Amino（类似 protobuf 的格式）编码转换。")]),t._v(" "),s("p",[t._v("签名消息时的注意事项：")]),t._v(" "),s("p",[t._v("格式如下")]),t._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICZxdW90O2FjY291bnRfbnVtYmVyJnF1b3Q7OiBYWFgsCiAgJnF1b3Q7Y2hhaW5faWQmcXVvdDs6IFhYWCwKICAmcXVvdDtmZWUmcXVvdDs6IFhYWCwKICAmcXVvdDtzZXF1ZW5jZSZxdW90OzogWFhYLAogICZxdW90O21lbW8mcXVvdDs6IFhYWCwKICAmcXVvdDttc2dzJnF1b3Q7OiBYWFgKfQo="}}),t._v(" "),s("p",[t._v("签名者必须提供 "),s("code",[t._v('"chain_id"')]),t._v("、 "),s("code",[t._v('"account number"')]),t._v(" 和 "),s("code",[t._v('"sequence number"')]),t._v("。")]),t._v(" "),s("p",[t._v("交易构造接口将生成 "),s("code",[t._v('"fee"')]),t._v("、 "),s("code",[t._v('"msgs"')]),t._v(" 和 "),s("code",[t._v('"memo"')]),t._v(" 等字段.")]),t._v(" "),s("p",[t._v("You can load the mempool of a full node or validator with a sequence of uncommitted transactions with incrementing\nsequence numbers and it will mostly do the correct thing.")]),t._v(" "),s("p",[s("code",[t._v('"account_number"')]),t._v(" 和 "),s("code",[t._v('"sequence"')]),t._v(" 字段可以直接从区块链或本地缓存中查询。 错误的获取了这些数值和 chainId，是产生无效签名错误的常见原因。您可以通过加载全节点或验证人中的 mempool 来获取未提交交易的自增序号，这样大大增加成功概率。")]),t._v(" "),s("p",[t._v("您可以使用递增序列号的一系列未提交事务加载完整节点或验证器的 mempool，它将主要执行正确的操作。")]),t._v(" "),s("p",[t._v("在签名之前，所有键都要按字典顺序排序，并从 JSON 输出中删除所有空格。")]),t._v(" "),s("p",[t._v("签名编码是 ECDSArands 的 64 字节连结（即"),s("code",[t._v("r || s")]),t._v("），其中"),s("code",[t._v("s")]),t._v("按字典顺序小于其反转以防止延展性。 这就像以太坊一样，但没有用户公钥恢复的额外字节，因为 Tendermint 假定公钥一定会提供。")]),t._v(" "),s("p",[t._v("已签名交易中的签名和公钥示例:")]),t._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"ewogICZxdW90O3R5cGUmcXVvdDs6ICZxdW90O2Nvc21vcy1zZGsvU3RkVHgmcXVvdDssCiAgJnF1b3Q7dmFsdWUmcXVvdDs6IHsKICAgICZxdW90O21zZyZxdW90OzogWy4uLl0sCiAgICAmcXVvdDtzaWduYXR1cmVzJnF1b3Q7OiBbCiAgICAgIHsKICAgICAgICAmcXVvdDtwdWJfa2V5JnF1b3Q7OiB7CiAgICAgICAgICAmcXVvdDt0eXBlJnF1b3Q7OiAmcXVvdDt0ZW5kZXJtaW50L1B1YktleVNlY3AyNTZrMSZxdW90OywKICAgICAgICAgICZxdW90O3ZhbHVlJnF1b3Q7OiBYWFgKICAgICAgICB9LAogICAgICAgICZxdW90O3NpZ25hdHVyZSZxdW90OzogWFhYCiAgICAgIH0KICAgIF0sCiAgfQp9Cg=="}}),t._v(" "),s("p",[t._v("正确生成签名后，将 JSON 插入生成的交易中，然后调用广播端点进行广播。")])],1)}),[],!1,null,null,null);e.default=_.exports}}]);