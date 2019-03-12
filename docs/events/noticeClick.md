#### 1. 说明

状态栏通知被用户点击后的回调

#### 2. Native传递参数给Client

```javascript
{
	status: 1,
	msg: '响应成功',
	data: {
		type: 0,            // 内容来源类型， 待定
		value: ''           // 内容，收到的推送内容
	}
}
```

#### 3. Client端示例代码

```javascript
import wya from '@wya/js-sdk';

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

