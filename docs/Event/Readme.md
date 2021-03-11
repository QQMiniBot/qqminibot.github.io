# 事件列表

::: tip 嘿！
请注意一下，以下每个事件方法的参数都有三个基础属性

详见:[基础属性](/Event/#基础属性)
:::

## 当被同意添加为好友
``` csharp
OnBeAgreeAddFriend(QMFriendAddResponseEventArgs)
return QMEventHandlerTypes
```

 **参数**

| 参数名 | 类型 | 描述 |
| ----- | ----- | ----- |
| AppendMessage | String | 指示当前事件的附加消息 |
| FromQQ | [QQ](/Event/#qq) | 指示当前事件的来源QQ |
| SubType | QMFriendAddResponseEventSubTypes | 指示当前事件的子类型 |

**QMFriendAddResponseEventSubTypes**

| 枚举名 |  描述 |
| ----- | ----- |
| AgreeAddFriend |同意添加好友 |
| RefuseAddFriend | 拒绝添加好友 |

**返回**

关于返回值，详见: **[QMEventHandlerTypes](/Event/#qmeventhandlertypes)**

## 当被删除好友
``` csharp
OnBeFriendDelete(QMBeFriendDeleteEventArgs)
return QMEventHandlerTypes
```

**参数**

| 参数名 | 类型 | 描述 |
| ----- | ----- | ----- |
| FromQQ | [QQ](/Event/#qq) | 指示当前事件的来源QQ |
| SubType | QMFriendAddResponseEventSubTypes | 指示当前事件的子类型 |

**QMBeFriendDeleteEventSubTypes**

| 枚举名 |  描述 |
| ----- | ----- |
| BeFriendDelete |被删除好友 |

**返回**

关于返回值，详见: **[QMEventHandlerTypes](/Event/#qmeventhandlertypes)**

## 当被拒绝添加为好友
``` csharp
OnBeRefuseAddFriend(QMFriendAddResponseEventArgs)
return QMEventHandlerTypes
```

**参数**

| 参数名 | 类型 | 描述 |
| ----- | ----- | ----- |
| AppendMessage | String | 指示当前事件的附加消息 |
| FromQQ | [QQ](/Event/#qq) | 指示当前事件的来源QQ |
| SubType | QMFriendAddResponseEventSubTypes | 指示当前事件的子类型 |

**QMFriendAddResponseEventSubTypes**

| 枚举名 |  描述 |
| ----- | ----- |
| AgreeAddFriend |同意添加好友 |
| RefuseAddFriend | 拒绝添加好友 |

**返回**

关于返回值，详见: **[QMEventHandlerTypes](/Event/#qmeventhandlertypes)**

## 当好友添加请求
``` csharp
OnFriendAddRequest(QMFriendAddRequestEventArgs)
return QMEventHandlerTypes
```

**参数**

| 参数名 | 类型 | 描述 |
| ----- | ----- | ----- |
| AppendMessage | String | 指示当前事件的附加消息 |
| FromQQ | [QQ](/Event/#qq) | 指示当前事件的来源QQ |
| Request | [Request](/Event/#request ) | 指示当前事件的请求 |
| SubType | QMFriendAddRequestEventSubTypes | 指示当前事件的子类型 |

**QMFriendAddRequestEventSubTypes**

| 枚举名 |  描述 |
| ----- | ----- |
| FriendAddRequest |好友添加请求 |

**返回**

关于返回值，详见: **[QMEventHandlerTypes](/Event/#qmeventhandlertypes)**

## 当群组匿名被关闭
``` csharp
OnGroupAnonymousClose(QMGroupAnonymousChangeEventArgs)
return QMEventHandlerTypes
```

**参数**

| 参数名 | 类型 | 描述 |
| ----- | ----- | ----- |
| FromGroup | [Group](/Event/#group) | 指示当前事件的来源群号 |
| FromQQ | [QQ](/Event/#qq) | 指示当前事件的开启或关闭群组匿名的操作者QQ |
| SubType | QMFriendAddResponseEventSubTypes | 指示当前事件的子类型 |

**QMGroupAnonymousChangeEventSubTypes**

| 枚举名 |  描述 |
| ----- | ----- |
| GroupAnonymousClose | 群组匿名关闭 |
| GroupAnonymousOpen | 群组匿名开启 |

**返回**

关于返回值，详见: **[QMEventHandlerTypes](/Event/#qmeventhandlertypes)**

## 当群组匿名被开启
``` csharp
OnGroupAnonymousOpen(QMGroupAnonymousChangeEventArgs)
return QMEventHandlerTypes
```

**参数**

| 参数名 | 类型 | 描述 |
| ----- | ----- | ----- |
| FromGroup | [Group](/Event/#group) | 指示当前事件的来源群号 |
| FromQQ | [QQ](/Event/#qq) | 指示当前事件的开启或关闭群组匿名的操作者QQ |
| SubType | QMFriendAddResponseEventSubTypes | 指示当前事件的子类型 |

**QMGroupAnonymousChangeEventSubTypes**

| 枚举名 |  描述 |
| ----- | ----- |
| GroupAnonymousClose | 群组匿名关闭 |
| GroupAnonymousOpen | 群组匿名开启 |

**返回**

关于返回值，详见: **[QMEventHandlerTypes](/Event/#qmeventhandlertypes)**

## 当群组申请加入请求
``` csharp
OnGroupApplyAddRequest(QMGroupAddRequestEventArgs)
return QMEventHandlerTypes
```

**参数**

| 参数名 | 类型 | 描述 |
| ----- | ----- | ----- |
| FromGroup | [Group](/Event/#group) | 指示当前事件的来源群号 |
| FromQQ | [QQ](/Event/#qq) | 指示当前事件的来源QQ |
| OperateQQ | [QQ](/Event/#qq) | 指示当前事件的操作QQ |
| Request | [Request](/Event/#request ) | 指示当前事件的请求 |
| SubType | QMGroupAddRequestEventSubTypes | 指示当前事件的子类型 |

**QMGroupAddRequestEventSubTypes**

| 枚举名 |  描述 |
| ----- | ----- |
| ApplyAddGroup |申请加群 |
| InviteMyAddGroup |邀请加群 |

**返回**

关于返回值，详见: **[QMEventHandlerTypes](/Event/#qmeventhandlertypes)**

## 当群组关闭全体禁言
``` csharp
OnGroupBanSpeakClose(QMGroupBanSpeakEventArgs)
return QMEventHandlerTypes
```

**参数**

| 参数名 | 类型 | 描述 |
| ----- | ----- | ----- |
| FromGroup | [Group](/Event/#group) | 指示当前事件的来源群号 |
| FromQQ | [QQ](/Event/#qq) | 指示当前事件的开启或关闭全体禁言的操作者QQ |
| SubType | QMGroupBanSpeakEventSubTypes | 指示当前事件的子类型 |

**QMGroupBanSpeakEventSubTypes**

| 枚举名 |  描述 |
| ----- | ----- |
| GroupBanSpeakClose |群组禁言关闭 |
| GroupBanSpeakOpen |群组禁言开启 |

**返回**

关于返回值，详见: **[QMEventHandlerTypes](/Event/#qmeventhandlertypes)**

## 当群组开启全体禁言
``` csharp
OnGroupBanSpeakOpen(QMGroupBanSpeakEventArgs)
return QMEventHandlerTypes
```

**参数**

| 参数名 | 类型 | 描述 |
| ----- | ----- | ----- |
| FromGroup | [Group](/Event/#group) | 指示当前事件的来源群号 |
| FromQQ | [QQ](/Event/#qq) | 指示当前事件的开启或关闭全体禁言的操作者QQ |
| SubType | QMGroupBanSpeakEventSubTypes | 指示当前事件的子类型 |

**QMGroupBanSpeakEventSubTypes**

| 枚举名 |  描述 |
| ----- | ----- |
| GroupBanSpeakClose |群组禁言关闭 |
| GroupBanSpeakOpen |群组禁言开启 |

**返回**

关于返回值，详见: **[QMEventHandlerTypes](/Event/#qmeventhandlertypes)**

## 当群组解散
``` csharp
OnGroupDissmiss(QMGroupDissmissEventArgs)
return QMEventHandlerTypes
```

**参数**

| 参数名 | 类型 | 描述 |
| ----- | ----- | ----- |
| FromGroup | [Group](/Event/#group) | 指示当前事件的来源群号 |
| FromQQ | [QQ](/Event/#qq) | 指示当前事件的来源QQ |
| SubType | QMGroupDissmissEventSubTypes | 指示当前事件的子类型 |

**QMGroupDissmissEventSubTypes**

| 枚举名 |  描述 |
| ----- | ----- |
| GroupDissmiss | 群组解散 |

**返回**

关于返回值，详见: **[QMEventHandlerTypes](/Event/#qmeventhandlertypes)**

## 当群组邀请我加入请求
``` csharp
OnGroupInviteMyAddRequest(QMGroupAddRequestEventArgs)
return QMEventHandlerTypes
```

**参数**

| 参数名 | 类型 | 描述 |
| ----- | ----- | ----- |
| FromGroup | [Group](/Event/#group) | 指示当前事件的来源群号 |
| FromQQ | [QQ](/Event/#qq) | 指示当前事件的来源QQ |
| OperateQQ | [QQ](/Event/#qq) | 指示当前事件的操作QQ |
| Request | [Request](/Event/#request ) | 指示当前事件的请求 |
| SubType | QMGroupAddRequestEventSubTypes | 指示当前事件的子类型 |

**QMGroupAddRequestEventSubTypes**

| 枚举名 |  描述 |
| ----- | ----- |
| ApplyAddGroup |申请加群 |
| InviteMyAddGroup | 邀请加群 |

**返回**

关于返回值，详见: **[QMEventHandlerTypes](/Event/#qmeventhandlertypes)**

## 当群组管理员移除成员
``` csharp
OnGroupManagerRemoveMember(QMGroupMemberDecreaseEventArgs)
return QMEventHandlerTypes
```

**参数**

| 参数名 | 类型 | 描述 |
| ----- | ----- | ----- |
| FromGroup | [Group](/Event/#group) | 指示当前事件的来源群号 |
| FromQQ | [QQ](/Event/#qq) | 指示当前事件的来源QQ |
| OperateQQ | [QQ](/Event/#qq) | 指示当前事件的操作QQ |
| SubType | QMGroupMemberDecreaseEventSubTypes | 指示当前事件的子类型 |

**QMGroupMemberDecreaseEventSubTypes**

| 枚举名 |  描述 |
| ----- | ----- |
| GroupManagerRemoveMember | 群管理员移除成员 |
| GroupMemberLeave | 群组成员离开 |

**返回**

关于返回值，详见: **[QMEventHandlerTypes](/Event/#qmeventhandlertypes)**

## 当群组成员被允许入群
``` csharp
OnGroupMemberBeAllowAdd(QMGroupMemberIncreaseEventArgs)
return QMEventHandlerTypes
```

**参数**

| 参数名 | 类型 | 描述 |
| ----- | ----- | ----- |
| FromGroup | [Group](/Event/#group) | 指示当前事件的来源群号 |
| FromQQ | [QQ](/Event/#qq) | 指示当前事件的来源QQ |
| OperateQQ | [QQ](/Event/#qq) | 指示当前事件的操作QQ |
| SubType | QMGroupMemberIncreaseEventSubTypes | 指示当前事件的子类型 |

**QMGroupMemberIncreaseEventSubTypes**

| 枚举名 |  描述 |
| ----- | ----- |
| BeAllowAddGroup | 被批准加入群组 |
| BeInviteAddGroup | 被邀请加入了群组 |
| MyAddGroup | 我加入了群组 |

**返回**

关于返回值，详见: **[QMEventHandlerTypes](/Event/#qmeventhandlertypes)**

## 当群成员成为管理员
``` csharp
OnGroupMemberBecomeManager(QMGroupManagerChangeEventArgs)
return QMEventHandlerTypes
```

**参数**

| 参数名 | 类型 | 描述 |
| ----- | ----- | ----- |
| FromGroup | [Group](/Event/#group) | 指示当前事件的来源群号 |
| FromQQ | [QQ](/Event/#qq) | 指示当前事件的来源QQ |
| SubType | QMGroupManagerChangeEventSubTypes | 指示当前事件的子类型 |

**QMGroupManagerChangeEventSubTypes**

| 枚举名 |  描述 |
| ----- | ----- |
| BecomeManager | 成为管理员 |
| CanceledManager | 取消管理员 |

**返回**

关于返回值，详见: **[QMEventHandlerTypes](/Event/#qmeventhandlertypes)**

## 当群组成员被邀请入群
``` csharp
OnGroupMemberBeInviteAdd(QMGroupMemberIncreaseEventArgs)
return QMEventHandlerTypes
```

**参数**

| 参数名 | 类型 | 描述 |
| ----- | ----- | ----- |
| FromGroup | [Group](/Event/#group) | 指示当前事件的来源群号 |
| FromQQ | [QQ](/Event/#qq) | 指示当前事件的来源QQ |
| OperateQQ | [QQ](/Event/#qq) | 指示当前事件的操作QQ |
| SubType | QMGroupMemberIncreaseEventSubTypes | 指示当前事件的子类型 |

**QMGroupMemberIncreaseEventSubTypes**

| 枚举名 |  描述 |
| ----- | ----- |
| BeAllowAddGroup | 被批准加入群组 |
| BeInviteAddGroup | 被邀请加入了群组 |
| MyAddGroup | 我加入了群组 |

**返回**

关于返回值，详见: **[QMEventHandlerTypes](/Event/#qmeventhandlertypes)**

## 当群成员被取消管理员
``` csharp
OnGroupMemberCanceledManager(QMGroupManagerChangeEventArgs)
return QMEventHandlerTypes
```

**参数**

| 参数名 | 类型 | 描述 |
| ----- | ----- | ----- |
| FromGroup | [Group](/Event/#group) | 指示当前事件的来源群号 |
| FromQQ | [QQ](/Event/#qq) | 指示当前事件的来源QQ |
| SubType | QMGroupManagerChangeEventSubTypes | 指示当前事件的子类型 |

**QMGroupManagerChangeEventSubTypes**

| 枚举名 |  描述 |
| ----- | ----- |
| BecomeManager | 成为管理员 |
| CanceledManager | 取消管理员 |

**返回**

关于返回值，详见: **[QMEventHandlerTypes](/Event/#qmeventhandlertypes)**

## 当群成员修改了新名片
``` csharp
OnGroupMemberCardChange(QMGroupMemberCardChangeEventArgs)
return QMEventHandlerTypes
```

**参数**

| 参数名 | 类型 | 描述 |
| ----- | ----- | ----- |
| FromGroup | [Group](/Event/#group) | 指示当前事件的来源群号 |
| FromQQ | [QQ](/Event/#qq) | 指示当前事件的来源QQ |
| NewCard | String | 指示当前事件的新名片 |
| SubType | QMGroupMemberCardChangeEventSubTypes | 指示当前事件的子类型 |

**QMGroupMemberCardChangeEventSubTypes**

| 枚举名 |  描述 |
| ----- | ----- |
| GroupMemberCardChange | 群组成员名片改变 |

**返回**

关于返回值，详见: **[QMEventHandlerTypes](/Event/#qmeventhandlertypes)**

## 当群组成员离开
``` csharp
OnGroupMemberLeave(QMGroupMemberDecreaseEventArgs)
return QMEventHandlerTypes
```

**参数**

| 参数名 | 类型 | 描述 |
| ----- | ----- | ----- |
| FromGroup | [Group](/Event/#group) | 指示当前事件的来源群号 |
| FromQQ | [QQ](/Event/#qq) | 指示当前事件的来源QQ |
| OperateQQ | [QQ](/Event/#qq) | 指示当前事件的操作QQ |
| SubType | QMGroupMemberDecreaseEventSubTypes | 指示当前事件的子类型 |

**QMGroupMemberDecreaseEventSubTypes**

| 枚举名 |  描述 |
| ----- | ----- |
| GroupManagerRemoveMember | 群管理员移除成员 |
| GroupMemberLeave | 群组成员离开 |

**返回**

关于返回值，详见: **[QMEventHandlerTypes](/Event/#qmeventhandlertypes)**

## 当我加入了群组
``` csharp
OnGroupMemberMyAddGroup(QMGroupMemberIncreaseEventArgs)
return QMEventHandlerTypes
```

**参数**

| 参数名 | 类型 | 描述 |
| ----- | ----- | ----- |
| FromGroup | [Group](/Event/#group) | 指示当前事件的来源群号 |
| FromQQ | [QQ](/Event/#qq) | 指示当前事件的来源QQ |
| OperateQQ | [QQ](/Event/#qq) | 指示当前事件的操作QQ |
| SubType | QMGroupMemberIncreaseEventSubTypes | 指示当前事件的子类型 |

**QMGroupMemberIncreaseEventSubTypes**

| 枚举名 |  描述 |
| ----- | ----- |
| BeAllowAddGroup | 被批准加入群组 |
| BeInviteAddGroup | 被邀请加入了群组 |
| MyAddGroup | 我加入了群组 |

**返回**

关于返回值，详见: **[QMEventHandlerTypes](/Event/#qmeventhandlertypes)**

## 当群组成员被解除禁言
``` csharp
OnGroupMemberRemoveBanSpeak(QMGroupMemberBanSpeakEventArgs)
return QMEventHandlerTypes
```

**参数**

| 参数名 | 类型 | 描述 |
| ----- | ----- | ----- |
| BanSpeakTimeSpan | TimeSpan? | 指示当前事件设置禁言的时长. (如果 SubType 是 GroupMemberRemoveBanSpeak 则为 null) |
| FromGroup | [Group](/Event/#group) | 指示当前事件的来源群号 |
| FromQQ | [QQ](/Event/#qq) | 指示当前事件的被禁言QQ |
| OperateQQ | [QQ](/Event/#qq) | 指示当前事件的设置或解除禁言的管理者QQ |
| SubType | QMGroupMemberBanSpeakEventSubTypes | 指示当前事件的子类型 |

**QMGroupMemberBanSpeakEventSubTypes**

| 枚举名 |  描述 |
| ----- | ----- |
| GroupMemberRemoveBanSpeak | 群组成员解除禁言 |
| GroupMemberSetBanSpeak | 群组成员禁言 |

**返回**

关于返回值，详见: **[QMEventHandlerTypes](/Event/#qmeventhandlertypes)**

## 当群组成员撤回消息
``` csharp
OnGroupMemberRemoveMessage(QMGroupMemberRemoveMessageEventArgs)
return QMEventHandlerTypes
```

**参数**

| 参数名 | 类型 | 描述 |
| ----- | ----- | ----- |
| FromGroup | [Group](/Event/#group) | 指示当前事件的来源群号 |
| FromQQ | [QQ](/Event/#qq) | 指示当前事件的来源QQ号 |
| MessageId | Int32 | 指示当前事件的消息标识 (ID) |
| MessageNumber | Int64 | 指示当前事件的消息序号 |
| SubType | QMGroupMemberRemoveMessageEventSubTypes | 指示当前事件的子类型 |

**QMGroupMemberRemoveMessageEventSubTypes**

| 枚举名 |  描述 |
| ----- | ----- |
| RemoveGroupMessage |撤回群组消息 |

**返回**

关于返回值，详见: **[QMEventHandlerTypes](/Event/#qmeventhandlertypes)**

## 当群组成员被设置禁言
``` csharp
OnGroupMemberSetBanSpeak(QMGroupMemberBanSpeakEventArgs)
return QMEventHandlerTypes
```

**参数**

| 参数名 | 类型 | 描述 |
| ----- | ----- | ----- |
| BanSpeakTimeSpan | TimeSpan? | 指示当前事件设置禁言的时长. (如果 SubType 是 GroupMemberRemoveBanSpeak 则为 null) |
| FromGroup | [Group](/Event/#group) | 指示当前事件的来源群号 |
| FromQQ | [QQ](/Event/#qq) | 指示当前事件的被禁言QQ |
| OperateQQ | [QQ](/Event/#qq) | 指示当前事件的设置或解除禁言的管理者QQ |
| SubType | QMGroupMemberBanSpeakEventSubTypes | 指示当前事件的子类型 |

**QMGroupMemberBanSpeakEventSubTypes**

| 枚举名 |  描述 |
| ----- | ----- |
| GroupMemberRemoveBanSpeak | 群组成员解除禁言 |
| GroupMemberSetBanSpeak | 群组成员禁言 |

**返回**

关于返回值，详见: **[QMEventHandlerTypes](/Event/#qmeventhandlertypes)**

## 当群组名称改变
``` csharp
OnGroupNameChange(QMGroupNameChangeEventArgs)
return QMEventHandlerTypes
```

**参数**

| 参数名 | 类型 | 描述 |
| ----- | ----- | ----- |
| FromGroup | [Group](/Event/#group) | 指示当前事件的来源群号 |
| NewCard | String | 指示当前事件的新名片 |
| SubType | QMGroupNameChangeEventSubTypes | 指示当前事件的子类型 |

**QMGroupNameChangeEventSubTypes**

| 枚举名 |  描述 |
| ----- | ----- |
| GroupNameChange | 群组名称改变 |

**返回**

关于返回值，详见: **[QMEventHandlerTypes](/Event/#qmeventhandlertypes)**

## 当收到讨论组消息
``` csharp
OnReceiveDiscussMessage(QMDiscussMessageEventArgs)
return QMEventHandlerTypes
```

**参数**

| 参数名 | 类型 | 描述 |
| ----- | ----- | ----- |
| FromDiscuss | [Discuss](/Event/#discuss) | 指示当前事件的来源讨论组 |
| FromQQ | [QQ](/Event/#qq) | 指示当前事件的来源QQ |
| Message | [Message](/Event/#message) | 指示当前事件的消息 |
| SubType | QMDiscussMessageEventSubTypes | 指示当前事件的子类型 |

**QMDiscussMessageEventSubTypes**

| 枚举名 |  描述 |
| ----- | ----- |
| Discuss |讨论组消息 |

**返回**

关于返回值，详见: **[QMEventHandlerTypes](/Event/#qmeventhandlertypes)**

## 当收到讨论组临时消息
``` csharp
OnReceiveDiscussTempMessage(QMDiscussPrivateMessageEventArgs)
return QMEventHandlerTypes
```

**参数**

| 参数名 | 类型 | 描述 |
| ----- | ----- | ----- |
| FromDiscuss | [Discuss](/Event/#discuss) | 指示当前事件的来源讨论组 |

**返回**

关于返回值，详见: **[QMEventHandlerTypes](/Event/#qmeventhandlertypes)**

## 当插件收到新事件时调用
``` csharp
OnReceiveEvent(QMEventArgs)
return QMEventHandlerTypes
```

**参数**

| 参数名 | 类型 | 描述 |
| ----- | ----- | ----- |
| RobotQQ | [QQ](/Event/#qq) | 获取接收到当前事件的机器人QQ |
| Type | QMEventTypes | 获取当前实例的事件类型 |

**QMEventTypes**

| 枚举名 |  描述 |
| ----- | ----- |
| BeFriendDelete |被好友删除 |
| DiscussMessage |讨论组消息 |
| FriendAddRequest |好友添加请求 |
| FriendAddResponse |好友添加响应 |
| GroupAddRequest |群组添加请求 |
| GroupAnonymousChange |群匿名改变 |
| GroupBanSpeak |群组禁言 |
| GroupDissmiss |群组被解散 |
| GroupManagerChange | 群组管理员改变 |
| GroupMemberBanSpeak |群组成员禁言 |
| GroupMemberCardChange |群组成员名片改变 |
| GroupMemberDecrease |群组成员离开 |
| GroupMemberInstance |群组成员加入 |
| GroupMemberRemoveMessage |群成员撤回消息 |
| GroupMessage |群组消息 |
| GroupNameChange |群名片改变 |
| PrivateMessage |私聊消息 |

**返回**

关于返回值，详见: **[QMEventHandlerTypes](/Event/#qmeventhandlertypes)**

## 当收到好友消息
``` csharp
OnReceiveFriendMessage(QMPrivateMessageEventArgs)
return QMEventHandlerTypes
```

**参数**

| 参数名 | 类型 | 描述 |
| ----- | ----- | ----- |
| FromQQ | [QQ](/Event/#qq) | 指示当前事件的来源QQ |
| Message | [Message](/Event/#message) | 指示当前事件的消息 |
| SubType | QMPrivateMessageEventSubTypes | 指示当前事件的子类型 |

**QMPrivateMessageEventSubTypes**

| 枚举名 |  描述 |
| ----- | ----- |
| DiscussTemp |讨论组临时消息 |
| Friend |好友消息 |
| FriendVerify |好友验证回复 |
| GroupTemp |群临时消息 |
| OnlineTemp |在线临时消息 |

**返回**

关于返回值，详见: **[QMEventHandlerTypes](/Event/#qmeventhandlertypes)**

## 当收到好友验证回复消息
``` csharp
OnReceiveFriendVerifyMessage(QMPrivateMessageEventArgs)
return QMEventHandlerTypes
```

**参数**

| 参数名 | 类型 | 描述 |
| ----- | ----- | ----- |
| FromQQ | [QQ](/Event/#qq) | 指示当前事件的来源QQ |
| Message | [Message](/Event/#message) | 指示当前事件的消息 |
| SubType | QMPrivateMessageEventSubTypes | 指示当前事件的子类型 |

**QMPrivateMessageEventSubTypes**

| 枚举名 |  描述 |
| ----- | ----- |
| DiscussTemp |讨论组临时消息 |
| Friend |好友消息 |
| FriendVerify |好友验证回复 |
| GroupTemp |群临时消息 |
| OnlineTemp |在线临时消息 |

**返回**

关于返回值，详见: **[QMEventHandlerTypes](/Event/#qmeventhandlertypes)**

## 当收到群组消息
``` csharp
OnReceiveGroupMessage(QMGroupMessageEventArgs)
return QMEventHandlerTypes
```

**参数**

| 参数名 | 类型 | 描述 |
| ----- | ----- | ----- |
| FromGroup | [Group](/Event/#group) | 指示当前事件的来源群组 |
| FromQQ | [QQ](/Event/#qq) | 指示当前事件的来源QQ |
| Message | [Message](/Event/#message) | 指示当前事件的消息 |
| SubType | QMGroupMessageEventSubTypes | 指示当前事件的子类型 |

**QMGroupMessageEventSubTypes**

| 枚举名 |  描述 |
| ----- | ----- |
| Group |群组消息 |

**返回**

关于返回值，详见: **[QMEventHandlerTypes](/Event/#qmeventhandlertypes)**

## 当收到群组临时消息
``` csharp
OnReceiveGroupTempMessage(QMGroupPrivateMessageEventArgs)
return QMEventHandlerTypes
```

**参数**

| 参数名 | 类型 | 描述 |
| ----- | ----- | ----- |
| FromGroup | [Group](/Event/#group) | 指示当前事件的来源群组 |

**返回**

关于返回值，详见: **[QMEventHandlerTypes](/Event/#qmeventhandlertypes)**

## 当收到在线临时消息
``` csharp
OnReceiveOnlineTempMessage(QMPrivateMessageEventArgs)
return QMEventHandlerTypes
```

**参数**

| 参数名 | 类型 | 描述 |
| ----- | ----- | ----- |
| FromQQ | [QQ](/Event/#qq) | 指示当前事件的来源QQ |
| Message | [Message](/Event/#message) | 指示当前事件的消息 |
| SubType | QMPrivateMessageEventSubTypes | 指示当前事件的子类型 |

**QMPrivateMessageEventSubTypes**

| 枚举名 |  描述 |
| ----- | ----- |
| DiscussTemp |讨论组临时消息 |
| Friend |好友消息 |
| FriendVerify |好友验证回复 |
| GroupTemp |群临时消息 |
| OnlineTemp |在线临时消息 |

**返回**

关于返回值，详见: **[QMEventHandlerTypes](/Event/#qmeventhandlertypes)**


## 当插件被初始化时调用
``` csharp
OnInitialize()
```

## 当插件被反初始化时调用
``` csharp
OnUninitialize()
```

## 当插件打开设置菜单时调用
``` csharp
OnOpenSettingMenu()
```

## 通用类型

### 基础属性

| 属性名 | 类型 | 描述 |
| ----- | ----- | ----- |
| type | Int32 | 事件类型 |
| subType | Int32 | 事件子类型 |
| robotQQ | Int64 | 机器人QQ |

### QMEventHandlerTypes

| 枚举名 |  描述 |
| ----- | ----- |
| Continue | 指示框架向后续的插件继续传递事件 |
| Exception | 指示框架当前事件出现了异常, 但是允许向后续的插件传递事件(本值为 .NET 插件专用) |
| Intercept | 指示框架拦截事件, 禁止事件向后续的插件继续传递 |

### Group

| 属性名 | 类型 | 描述 |
| ----- | ----- | ----- |
| Id | Int64 | 获取当前实例的唯一标识 (群组号) |

### Discuss

| 属性名 | 类型 | 描述 |
| ----- | ----- | ----- |
| Id | Int64 | 获取当前实例的唯一标识 (群组号) |

### QQ

| 属性名 | 类型 | 描述 |
| ----- | ----- | ----- |
| Id | Int64 | 获取当前实例的唯一标识 (QQ号) |

### Request

| 属性名 | 类型 | 描述 |
| ----- | ----- | ----- |
| ReaponseFalg | String | 获取当前实例的响应标识 |

### Message

| 属性名 | 类型 | 描述 |
| ----- | ----- | ----- |
| Id | Int32 | 获取当前消息的唯一标识 (ID) |
| Number | Int64 | 获取当前消息的序号 |
| Text | String | 获取当前消息的文本 |