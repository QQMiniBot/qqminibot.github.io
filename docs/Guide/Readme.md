# 简介

通过 QQMini.PluginSDK，开发者可以快速、高效的在 QQMini 中开发稳定的插件，实现更多创新且实用的功能。在高效的同时，QQMini.PluginSDK 还支持依赖项打包等功能。为了能快速入门使用 QQMini.PluginSDK，本指南将带以 “复读机” 案例开发一款简易的小插件。

## 特点
- 支持完整的 .NET 特性，通过中间层与QQMini深度集成，支持完整的异常处理，插件热拔插等
  
- 支持与所有 .NET 项目进行交互
  
- 支持依赖压缩打包（在完成编译后，将除已集成在QQMini中的库外，所有的依赖项将进行打包， 保证最终结果只有一个 DLL）
  
- 支持 .NET 4.5 以上所有版本的开发（不含 .NET Core）
  
- 支持 C#、VB.NET、F# 三种语言

## 建议

在使用 QQMini.PluginSDK 之前，建议开发者阅读以下资料，以便在后续的章节中快速理解所描述的内容，提高开发效率。

- [用户协议](UserAgreement.md)
- [下载安装](/Guide/Require/)
- [插件机制](Readme.md)
- [疑难解答]()

## 加速访问

如果遇到各种不可抗力的原因，如: 图片裂开、下载速度慢、网页刷新久等。请在系统 Hosts 文件中加入下列条目以提升速度

```text
192.30.253.112 github.com
192.30.253.119 gist.github.com
151.101.184.133 assets-cdn.github.com
151.101.184.133 raw.githubusercontent.com
151.101.184.133 gist.githubusercontent.com
151.101.184.133 cloud.githubusercontent.com
151.101.184.133 camo.githubusercontent.com
151.101.184.133 avatars0.githubusercontent.com
151.101.184.133 avatars1.githubusercontent.com
151.101.184.133 avatars2.githubusercontent.com
151.101.184.133 avatars3.githubusercontent.com
151.101.184.133 avatars4.githubusercontent.com
151.101.184.133 avatars5.githubusercontent.com
151.101.184.133 avatars6.githubusercontent.com
151.101.184.133 avatars7.githubusercontent.com
151.101.184.133 avatars8.githubusercontent.com
```

## 关于打赏

您的支持是我更新的动力

![](/AliPay.png)
![](/wechatPay.png)