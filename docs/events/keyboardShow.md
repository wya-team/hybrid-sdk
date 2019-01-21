#### 1. 说明

系统键盘弹出的回调

#### 2. Native传递参数给Client

```javascript
{
	status: 1,
	msg: '响应成功',
	data: {
		height: 260        // 键盘高度，数字类型
	}
}
```

#### 3. Client端示例代码

```javascript
import wya from 'wya-js-sdk';

// on / once / last / first / off
wya.on('keyboardShow', () => {

});

// on / once / last / first / off
wya.onKeyboardShow(() => {

});
```

#### 4. 不引入sdk示例代码

```javascript
// on / once / last / first / off
WYAJSBridge.on('keyboardShow', () => {

});
```

#### 5. Native端示例代码

```javascript
WYAJSBridge.emit('keyboardShow', '@Object');
```

#### 6. 可用性

iOS系统，Android系统

---------

