#### 1. 说明

Window 离开屏幕的事件，字符串类型。收到 viewdisappear 事件回调，即标识当前 Window 已经动画结束，并且完全从屏幕上移除。

该事件的作用对象为 Window，Frame 的隐藏不会收到事件

若是 Window 被关闭，此事件不会再回调

#### 2. Native传递参数给Client

```javascript
{
	status: 1,
	msg: '响应成功',
	data: {
		// ....
	}
}
```

#### 3. Client端示例代码

```javascript
import wya from '@wya/js-sdk';

// on / once / last / first / off
wya.on('viewDisappear', () => {

});

// on / once / last / first / off
wya.onViewDisappear(() => {

});
```

#### 4. 不引入sdk示例代码

```javascript
// on / once / last / first / off
WYAJSBridge.on('viewDisappear', () => {

});
```

#### 5. Native端示例代码

```javascript
WYAJSBridge.emit('viewDisappear', '@Object');
```

#### 6. 可用性

iOS系统，Android系统

---------

