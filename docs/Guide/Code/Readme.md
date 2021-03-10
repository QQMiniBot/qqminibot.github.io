# 插件编写
本章节将继续完成 QQMini插件 “复读机” 的编写

## 步骤
1.使用 override 关键字，重写 OnReceiveMessage 事件，并调用接口发送消息。要查看 QQMini.PluginSDK 实现的事件列表，请阅读 [事件列表](/Event/)
``` csharp
public override QMEventHandlerTypes OnReceiveGroupMessage (QMGroupMessageEventArgs e)
{
    QMApi.SendGroupMessage (e.RobotQQ, e.FromGroup, e.Message);
    return QMEventHandlerTypes.Continue;	// 返回继续执行时, 后续的插件将会接收到此消息
}
```
<details>
<summary>VB.NET</summary>

``` vbnet
Public Overrides Function OnReceiveGroupMessage(e As QMGroupMessageEventArgs) As QMEventHandlerTypes
 	QMApi.SendGroupMessage(e.RobotQQ, e.FromGroup, e.Message)
 	Return QMEventHandlerTypes.Continue ' 返回继续时, 后续的插件将会接收到此消息
 End Function
```

</details>

---

至此，“复读机” 插件的编写工作已经完毕。这时选中创建的项目，右键打开菜单，选择重新生成。如果没有弹出错误与警告。表示已经编译成功