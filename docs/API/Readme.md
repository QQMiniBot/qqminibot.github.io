# API列表

## GetBkn(Int64)

获取指定QQ用于操作网页的 G_tk 或 bkn 值

**参数**

| 参数名 | 类型 | 描述 |
| ----- | ----- | ----- |
| robotQQ | Int64 | 要获取 G_tk 或 bkn 值的QQ号 |

**返回**

| 类型 | 描述 |
| ----- | :----- |
| String | 要获取 G_tk 或 bkn 值的QQ号 |

## GetCookies(Int64)

获取指定QQ用于操作网页的 Cookies

**参数**

| 参数名 | 类型 | 描述 |
| ----- | ----- | ----- |
| robotQQ | Int64 | 要获取 Cookies 的QQ号 |

**返回**

| 类型 | 描述 |
| ----- | :----- |
| String | 用于操作网页的 Cookies |

## GetFrameworkTimpStmap()

获取当前 QQMini 框架的时间戳

**参数**

::: tip 提示
本方法无需参数
:::

**返回**

| 类型 | 描述 |
| ----- | :----- |
| Int64 | 如果获取成功返回以 "秒" 为单位的时间戳 |

## GetFrameworkType()

获取当前 QQMini 框架的框架类型

**参数**

::: tip 提示
本方法无需参数
:::

**返回**

| 类型 | 描述 |
| ----- | :----- |
| QQMiniFrameworkTypes | 如果获取成功返回 QQMiniFrameworkTypes 枚举的值 |

**QQMiniFrameworkTypes**

| 枚举名 |  描述 |
| ----- | ----- |
| QQMiniAir |表示当前运行的是 QQMini Air 版本 |
| QQMiniPro | 表示当前运行的是 QQMini Pro 版本 |

## GetFriendVerifyMode(Int64, Int64)

获取指定QQ的好友验证方式

**参数**

| 参数名 | 类型 | 描述 |
| ----- | ----- | ----- |
| robotQQ | Int64 | 机器人QQ号 |
| targetQQ | Int64 | 指定的QQ号 |

**返回**

| 类型 | 描述 |
| ----- | :----- |
| FriendVerifyTypes | 好友验证方式的枚举 |

**FriendVerifyTypes**

| 枚举名 |  描述 |
| ----- | ----- |
| AlreadyFriend | 已成为好友 |
| Authentication | 需身份验证 |
| NeedAnswers | 需回答问题 |
| NeetCorrectAnswer | 需正确答案 |
| NoVerify | 无验证 |

## GetGroupBanStatus(Int64, Int64)

获取指定群组禁言的状态

**参数**

| 参数名 | 类型 | 描述 |
| ----- | ----- | ----- |
| robotQQ | Int64 | 用来获取在线状态的QQ号 |
| targetGroup | Int64 | 要获取其禁言状态的群组 |

**返回**

| 类型 | 描述 |
| ----- | :----- |
| Boolean | 如果群组处于禁言状态返回 true; 否则返回 false |

## GetGroupMemberBanStatus(Int64, Int64, Int64)

获取指定群组成员禁言的状态

**参数**

| 参数名 | 类型 | 描述 |
| ----- | ----- | ----- |
| robotQQ | Int64 | 用来获取在线状态的QQ号 |
| targetGroup | Int64 | 要获取其禁言状态的群组 |
| targetQQ | Int64 | 要获取其禁言状态的QQ号 |

**返回**

| 类型 | 描述 |
| ----- | :----- |
| Boolean | 如果群组处于禁言状态返回 true; 否则返回 false |

## GetIsOnline(Int64, Int64)

获取指定QQ是否在线

**参数**

| 参数名 | 类型 | 描述 |
| ----- | ----- | ----- |
| robotQQ | Int64 | 用来获取在线状态的QQ号 |
| targetQQ | Int64 | 要获取其是否在线的QQ号 |

**返回**

| 类型 | 描述 |
| ----- | :----- |
| Boolean |如果指定的QQ是在线的, 返回 true; 否则返回 false |

## GetOnlineStatus(Int64, Int64)

获取指定QQ号的QQ在线状态

**参数**

| 参数名 | 类型 | 描述 |
| ----- | ----- | ----- |
| robotQQ | Int64 | 用来获取在线状态的QQ号 |
| targetQQ | Int64 | 要获取其是否在线的QQ号 |

**返回**

| 类型 | 描述 |
| ----- | :----- |
| OnlineStatusTypes | QQ在线状态的枚举 |

**OnlineStatusTypes**

| 枚举名 |  描述 |
| ----- | ----- |
| Busy |忙碌 |
| Invisible | 隐身 |
| Leave | 离开 |
| NoDisturb | 请勿打扰 |
| Online | 在线 |
| QMe | Q我吧 |

## GetPluginDataDirectory()

获取当前插件的数据目录

**参数**

::: tip 提示
本方法无需参数
:::

**返回**

| 类型 | 描述 |
| ----- | :----- |
| String | 如果获取成功返回数据目录 |

## SendDiscussMessage(Int64, Int64, String)

向指定的讨论组发送一条消息

**参数**

| 参数名 | 类型 | 描述 |
| ----- | ----- | ----- |
| robotQQ | Int64 | 响应此请求的QQ |
| sendDiscuss | Int64 | 接收消息的目标讨论组 |
| message | String | 要发送的消息内容 |

**返回**

| 类型 | 描述 |
| ----- | :----- |
| [Message](/Event/#message) | 返回发送的消息 Message 实例 |

## SendDiscussTempMessage(Int64, Int64, Int64, String)

向指定的QQ发送一条讨论组临时消息

**参数**

| 参数名 | 类型 | 描述 |
| ----- | ----- | ----- |
| robotQQ | Int64 | 响应此请求的QQ |
| fromDiscuss | Int64 | 目标QQ所在的群组 |
| sendQQ | Int64 | 接收消息的目标QQ |
| message | String | 要发送的消息内容 |

**返回**

| 类型 | 描述 |
| ----- | :----- |
| [Message](/Event/#message) | 返回发送的消息 Message 实例 |


## SendFriendMessage(Int64, Int64, String)

向指定的指定的QQ好友发送一条消息

**参数**

| 参数名 | 类型 | 描述 |
| ----- | ----- | ----- |
| robotQQ | Int64 | 响应此请求的QQ |
| sendQQ | Int64 | 接收消息的目标QQ |
| message | String | 要发送的消息内容 |

**返回**

| 类型 | 描述 |
| ----- | :----- |
| [Message](/Event/#message) | 返回发送的消息 Message 实例 |


## SendFriendResponseMessage(Int64, Int64, String)

向指定的QQ发送好友验证回应消息

**参数**

| 参数名 | 类型 | 描述 |
| ----- | ----- | ----- |
| robotQQ | Int64 | 响应此请求的QQ |
| sendQQ | Int64 | 接收消息的目标QQ |
| message | String | 要发送的消息内容 |

**返回**

| 类型 | 描述 |
| ----- | :----- |
| [Message](/Event/#message) | 返回发送的消息 Message 实例 |


## SendGroupMessage(Int64, Int64, String)

向指定的群组发送一条消息

**参数**

| 参数名 | 类型 | 描述 |
| ----- | ----- | ----- |
| robotQQ | Int64 | 响应此请求的QQ |
| sendGroup | Int64 | 接收消息的目标群组 |
| message | String | 要发送的消息内容 |

**返回**

| 类型 | 描述 |
| ----- | :----- |
| [Message](/Event/#message) | 返回发送的消息 Message 实例 |

## SendGroupTempMessage(Int64, Int64, Int64, String)

向指定的QQ发送一条群组临时消息

**参数**

| 参数名 | 类型 | 描述 |
| ----- | ----- | ----- |
| robotQQ | Int64 | 响应此请求的QQ |
| sendGroup | Int64 | 接收消息的目标群组 |
| sendQQ | Int64 | 接收消息的目标QQ |
| message | String | 要发送的消息内容 |

**返回**

| 类型 | 描述 |
| ----- | :----- |
| [Message](/Event/#message) | 返回发送的消息 Message 实例 |

## SendOnlineTempMessage(Int64, Int64, String)

向指定的QQ发送一条在线临时消息

**参数**

| 参数名 | 类型 | 描述 |
| ----- | ----- | ----- |
| robotQQ | Int64 | 响应此请求的QQ |
| sendQQ | Int64 | 接收消息的目标QQ |
| message | String | 要发送的消息内容 |

**返回**

| 类型 | 描述 |
| ----- | :----- |
| [Message](/Event/#message) | 返回发送的消息 Message 实例 |