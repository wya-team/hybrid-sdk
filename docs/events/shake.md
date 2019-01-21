#### 1. 说明

设备摇动事件，字符串类型。设置该监听后，当前 APP 将立即开启摇动检测功能。

可用于实现摇一摇功能

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
wya.on('shake', () => {

});

// on / once / last / first / off
wya.onShake(() => {

});
```

#### 4. 不引入sdk示例代码

```javascript
// on / once / last / first / off
WYAJSBridge.on('shake', () => {

});
```

#### 5. Native端示例代码

```javascript
WYAJSBridge.emit('shake', '@Object');
```

#### 6. 可用性

iOS系统，Android系统

---------

