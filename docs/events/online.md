#### 1. 说明

监听设备连接到网络的事件

#### 2. Native传递参数给Client

> 取值范围参考常量

```javascript
{
	status: 1,
	msg: '响应成功',
	data: {
		connectionType: '' // 当前网络连接类型，如2g、3g、4g、wifi等
	}
}
```

#### 3. Client端示例代码

```javascript
import wya from 'wya-js-sdk';

// on / once / last / first / off
wya.on('online', () => {

});

// on / once / last / first / off
wya.onOnline(() => {

});
```

#### 4. 不引入sdk示例代码

```javascript
// on / once / last / first / off
WYAJSBridge.on('online', () => {

});
```

#### 5. Native端示例代码

```javascript
WYAJSBridge.emit('online', '@Object');
```

#### 6. 可用性

iOS系统，Android系统

---------

