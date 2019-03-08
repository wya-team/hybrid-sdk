#### 1. 说明

设备音量键被点击事件

#### 2. Native传递参数给Client

```javascript
{
	status: 1,
	msg: '调用成功',
	data: {
		keyCode: 0                // 被点击的按键
		longPress: false          // 是否是长按
	}
}
```

#### 3. Client端示例代码

```javascript
import wya from 'wya-js-sdk';

// on / once / last / first / off
wya.on('volume', () => {

});

// on / once / last / first / off
wya.onVolume(() => {

});
```

#### 4. 不引入sdk示例代码

```javascript
// on / once / last / first / off
WYAJSBridge.on('volume', () => {

});
```

#### 5. Native端示例代码

```javascript
WYAJSBridge.emit('volume', '@Object');
```

#### 6. 可用性

iOS系统，Android系统

---------

