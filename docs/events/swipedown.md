#### 1. 说明

~

#### 2. Native传递参数给Client

```javascript
{
	status: 1,
	msg: '调用成功',
	data: {
		// ....
	}
}
```

#### 3. Client端示例代码

```javascript
import wya from 'wya-js-sdk';

// on / once / last / first / off
wya.on('swipeDown', () => {

});

// on / once / last / first / off
wya.onSwipeDown(() => {

});
```

#### 4. 不引入sdk示例代码

```javascript
// on / once / last / first / off
WYAJSBridge.on('swipeDown', () => {

});
```

#### 5. Native端示例代码

```javascript
WYAJSBridge.emit('swipeDown', '@Object');
```

#### 6. 可用性

iOS系统，Android系统

---------

