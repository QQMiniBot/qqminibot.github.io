# 事件列表

## 当被同意添加为好友
``` csharp
OnBeAgreeAddFriend(QMFriendAddResponseEventArgs)
return QMEventHandlerTypes
```

 **QMFriendAddResponseEventArgs**

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

**[QMEventHandlerTypes](/Event/#qmeventhandlertypes)**

## 当被删除好友
``` csharp
OnBeFriendDelete(QMBeFriendDeleteEventArgs)
```

## 当被拒绝添加为好友
``` csharp
OnBeRefuseAddFriend(QMFriendAddResponseEventArgs)
```

## 当好友添加请求
``` csharp
OnFriendAddRequest(QMFriendAddRequestEventArgs)
```

## 当群组匿名被关闭
``` csharp
OnGroupAnonymousClose(QMGroupAnonymousChangeEventArgs)
```

## 当群组匿名被开启
``` csharp
OnGroupAnonymousOpen(QMGroupAnonymousChangeEventArgs)
```

## 当群组申请加入请求
``` csharp
OnGroupApplyAddRequest(QMGroupAddRequestEventArgs)
```

## 当群组关闭全体禁言
``` csharp
OnGroupBanSpeakClose(QMGroupBanSpeakEventArgs)
```

## 当群组开启全体禁言
``` csharp
OnGroupBanSpeakOpen(QMGroupBanSpeakEventArgs)
```

## 当群组解散
``` csharp
OnGroupDissmiss(QMGroupDissmissEventArgs)
```

## 当群组邀请我加入请求
``` csharp
OnGroupInviteMyAddRequest(QMGroupAddRequestEventArgs)
```

## 当群组管理员移除成员
``` csharp
OnGroupManagerRemoveMember(QMGroupMemberDecreaseEventArgs)
```

## 当群组成员被允许入群
``` csharp
OnGroupMemberBeAllowAdd(QMGroupMemberIncreaseEventArgs)
```

## 当群成员成为管理员
``` csharp
OnGroupMemberBecomeManager(QMGroupManagerChangeEventArgs)
```

## 通用类型

### QMEventHandlerTypes

| 枚举名 |  描述 |
| ----- | ----- |
| Continue | 指示框架向后续的插件继续传递事件 |
| Exception | 指示框架当前事件出现了异常, 但是允许向后续的插件传递事件(本值为 .NET 插件专用) |
| Intercept | 指示框架拦截事件, 禁止事件向后续的插件继续传递 |

### QQ

| 属性名 | 类型 | 描述 |
| ----- | ----- | ----- |
| Id | Int64 | 获取当前实例的唯一标识 (QQ号) |
