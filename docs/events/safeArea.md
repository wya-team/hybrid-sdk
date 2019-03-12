#### 1. 说明

安全区域发生变化的回调

#### 2. Native传递参数给Client

```javascript
{
	status: 1,
	msg: '响应成功',
	data: {
		top: 0,           // 安全区域上边缘，数字类型
		left: 0,          // 安全区域左边缘，数字类型
		bottom: 0,        // 安全区域下边缘，数字类型
		right: 0          // 安全区域右边缘，数字类型
	}
}
```

#### 3. Client端示例代码

```javascript
import wya from '@wya/js-sdk';

// on / once / last / first / off
wya.on('safeAreaChange', () => {

});

// on / once / last / first / off
wya.onSafeAreaChange(() => {

});
```

#### 4. 不引入sdk示例代码

```javascript
// on / once / last / first / off
WYAJSBridge.on('safeAreaChange', () => {

});
```

#### 5. Native端示例代码

```javascript
WYAJSBridge.emit('safeAreaChange', '@Object');
```

#### 6. 可用性

iOS系统，Android系统

---------

