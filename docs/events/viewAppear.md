#### 1. 说明

Window 显示到屏幕的事件，字符串类型。收到 viewappear 事件回调，即标识当前 Window 已经动画结束，并且完全显示到屏幕上。

该事件的作用对象为 Window，Frame 的显示不会收到事件

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
wya.on('viewAppear', () => {

});

// on / once / last / first / off
wya.onViewAppear(() => {

});
```

#### 4. 不引入sdk示例代码

```javascript
// on / once / last / first / off
WYAJSBridge.on('viewAppear', () => {

});
```

#### 5. Native端示例代码

```javascript
WYAJSBridge.emit('viewAppear', '@Object');
```

#### 6. 可用性

iOS系统，Android系统

---------

