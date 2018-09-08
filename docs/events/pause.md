#### 1. 说明

应用进入后台事件

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
wya.on('pause', () => {

});

// on / once / last / first / off
wya.onPause(() => {

});
```

#### 4. 不引入sdk示例代码

```javascript
// on / once / last / first / off
WYAJSBridge.on('pause', () => {

});
```

#### 5. Native端示例代码

```javascript
WYAJSBridge.emit('pause', '@Object');
```

#### 6. 可用性

iOS系统，Android系统

---------

