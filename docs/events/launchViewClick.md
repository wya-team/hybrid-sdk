#### 1. 说明

启动页被点击后的回调

#### 2. Native传递参数给Client

```javascript
{
	status: 1,
	msg: '响应成功',
	data: {
		value: ''        // 附加信息，字符串类型
	}
}
```

#### 3. Client端示例代码

```javascript
import wya from 'wya-js-sdk';

// on / once / last / first / off
wya.on('launchViewClick', () => {

});

// on / once / last / first / off
wya.onLaunchViewClick(() => {

});
```

#### 4. 不引入sdk示例代码

```javascript
// on / once / last / first / off
WYAJSBridge.on('launchViewClick', () => {

});
```

#### 5. Native端示例代码

```javascript
WYAJSBridge.emit('launchViewClick', '@Object');
```

#### 6. 可用性

iOS系统，Android系统

---------

