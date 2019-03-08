#### 1. 说明

监听设备断开/连接网络的事件，字符串类型

#### 2. Native传递参数给Client

```javascript
{
	status: 1,
	msg: '调用成功',
	data: {
		type: 'offline', // online 
	}
}
```

#### 3. Client端示例代码

```javascript
import wya from 'wya-js-sdk';

// on / once / last / first / off
wya.on('network', () => {

});

// on / once / last / first / off
wya.onNetwork(() => {

});
```

#### 4. 不引入sdk示例代码

```javascript
// on / once / last / first / off
WYAJSBridge.on('network', () => {

});
```

#### 5. Native端示例代码

```javascript
WYAJSBridge.emit('network', '@Object');
```

#### 6. 可用性

iOS系统，Android系统

---------

