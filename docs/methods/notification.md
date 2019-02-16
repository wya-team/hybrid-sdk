#### 1. 说明

向用户发出震动、声音提示、灯光闪烁、手机状态栏通知等提示行为，支持闹钟功能。如果是状态栏通知，当用户点击该通知，页面可以通过监听 noticeclicked 事件获取该通知相关内容。

注：当应用在前台弹出通知提示时，iOS平台的通知将在显示几秒后消失，不会在通知栏保留。

#### 2. Client传递参数给Native

```javascript
{
	// ....
}
```


属性 | 说明 | 类型 | 默认值 | 如
---|---|---|---|---
vibrate | 伴随节奏的震动: 等待-震动-等待-震动 | arr | [100, 500, 100, 500] | -
sound | 提示音 | str | default | 'widget://res/horse.mp3'
light | 设备提示灯是否闪烁 | bool | false | -
notify | 弹出通知到状态栏 | object | { title, content, extra, updateCurrent } | -
alarm | 设置闹铃 | object | { hour, minutes, daysOfWeek, openApp } | -


#### 3. Native传递参数给Client

```javascript
{
	status: 1,
	msg: '调用成功',
	data: {
		id: 1 // 弹出到状态栏通知的id或者设置的闹铃id，可用于取消通知或者闹铃
	}
}
```

#### 4. Client端示例代码

```javascript
import wya from 'wya-js-sdk';

wya.notification({
	// ...
}).then(() => {
	// ...
}).catch(() => {
	// ...
});

// 或者
wya.invoke('notification', {
	// ...
}).then(() => {
	// ...
}).catch(() => {
	// ...
});
```

#### 5. 不引入sdk示例代码

```javascript
WYAJSBridge.invoke('notification', {
	// ...
}).then(() => {
	// ...
}).catch(() => {
	// ...
});
```

#### 6. Native端示例代码

```javascript
WYAJSBridge.emit('[对应的唯一id]', '@Object');
```

#### 7. 可用性

iOS系统，Android系统

---------

