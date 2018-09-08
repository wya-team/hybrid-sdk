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
wya.on('noticeClick', () => {

});

// on / once / last / first / off
wya.onNoticeClick(() => {

});
```

#### 4. 不引入sdk示例代码

```javascript
// on / once / last / first / off
WYAJSBridge.on('noticeClick', () => {

});
```

#### 5. Native端示例代码

```javascript
WYAJSBridge.emit('noticeClick', '@Object');
```

#### 6. 可用性

iOS系统，Android系统

---------

