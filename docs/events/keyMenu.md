#### 1. 说明

设备 menu 键被点击事件，仅 Android 平台有效

该事件必须在 Window 中注册才有效，Frame 中注册无效，并且只在当前屏幕上的 window 才能收到回调。


#### 2. Native传递参数给Client

```javascript
{
	status: 1,
	msg: '响应成功',
	data: {
		keyCode: 0                // 被点击的按键
		longPress: false          // 是否是长按
	}
}
```

#### 3. Client端示例代码

```javascript
import wya from '@wya/js-sdk';

// on / once / last / first / off
wya.on('keyMenu', () => {

});

// on / once / last / first / off
wya.onKeyMenu(() => {

});
```

#### 4. 不引入sdk示例代码

```javascript
// on / once / last / first / off
WYAJSBridge.on('keyMenu', () => {

});
```

#### 5. Native端示例代码

```javascript
WYAJSBridge.emit('keyMenu', '@Object');
```

#### 6. 可用性

iOS系统，Android系统

---------

