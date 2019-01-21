#### 1. 说明

系统键盘隐藏的回调

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
wya.on('keyboardHide', () => {

});

// on / once / last / first / off
wya.onKeyboardHide(() => {

});
```

#### 4. 不引入sdk示例代码

```javascript
// on / once / last / first / off
WYAJSBridge.on('keyboardHide', () => {

});
```

#### 5. Native端示例代码

```javascript
WYAJSBridge.emit('keyboardHide', '@Object');
```

#### 6. 可用性

iOS系统，Android系统

---------

