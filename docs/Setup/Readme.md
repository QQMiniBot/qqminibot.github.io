# 项目搭建
本章节将叙述如何创建一个 QQMini插件

## 插件信息
在 QQMini插件 的V3机制中，我们采用了更完善的插件信息结构，用于插件区分、授权、开发者信息绑定以及插件商城(未来)。具体的插件信息模型见 [插件模型]()
| 名称          | 类型          | 注释 |
| ------------- |:-------------:| :----- |
| PackageID | String | 	插件包ID，作为框架区分插件的唯一标识。应使用域名反写作为包ID。例: com.jiegg.demo |
| Name | String |   插件包ID，作为框架区分插件的唯一标识 |
| Version | Version |    	插件版本，插件的唯一版本号，格式: 主板本号.次版本号.编译版本号.修订号 |
| Author | String |    插件作者，作为显示在框架中插件作者的名字 |
| Description | String |    	插件说明，请写上插件的简要说明 |
| SDKVersion | Int32 |    SDK版本，用于切换插件在框架中的运行机制 |
| DeveloperKey | String |    开发人员序列号。该序列号会影响到插件部分Api或事件的使用。请勿随意修改，错误的序列号将导致插件被拒绝载入 |

## 步骤
1.确定自己的插件的 PackageID，例如: com.jiegg.demo
2.打开 Visual Studio 创建类库项目
请搜索 “类库” 项目，并选择 类库(.NET Framework) 的项目进行创建
