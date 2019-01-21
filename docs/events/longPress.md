> web/native均可处理

#### 1. 说明

页面全局长按事件，字符串类型

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
import wya from 'wya-js-sdk';

// on / once / last / first / off
wya.on('longPress', () => {

});

// on / once / last / first / off
wya.onLongPress(() => {

});
```

#### 4. 不引入sdk示例代码

```javascript
// on / once / last / first / off
WYAJSBridge.on('longPress', () => {

});
```

#### 5. Native端示例代码

```javascript
WYAJSBridge.emit('longPress', '@Object');
```

#### 6. 可用性

iOS系统，Android系统

---------

