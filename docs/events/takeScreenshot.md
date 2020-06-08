#### 1. 说明

应用在前台运行期间，用户屏幕截图事件


#### 2. Native传递参数给Client

```javascript
{
	status: 1,
	msg: '响应成功',
	data: {
		image: '' // 是否回传图片待定
	}
}
```

#### 3. Client端示例代码

```javascript
import wya from '@wya/js-sdk';

// on / once / last / first / off
wya.on('takeScreenshot', () => {

});

// on / once / last / first / off
wya.onTakeScreenshot(() => {

});
```

#### 4. 不引入sdk示例代码

```javascript
// on / once / last / first / off
WYAJSBridge.on('takeScreenshot', () => {

});
```

#### 5. Native端示例代码

```javascript
WYAJSBridge.emit('takeScreenshot', '@Object');
```

#### 6. 可用性

iOS系统，Android系统

---------

