#### 1. 说明

云修复使用静默修复时，更新完毕事件。可通过监听此事件来通知用户做是否强制重启应用等操作或者提示，以使更新生效，字符串类型

如果是提示修复，则不会触发该事件

#### 2. Native传递参数给Client

```javascript
{
	status: 1,
	msg: '响应成功',
	data: {
		value: '' // 在控制台云修复里面进行静默修复时填写的附加信息，字符串类型
	}
}
```

#### 3. Client端示例代码

```javascript
import wya from 'wya-js-sdk';

// on / once / last / first / off
wya.on('smartUpdateFinish', () => {

});

// on / once / last / first / off
wya.onSmartUpdateFinish(() => {

});
```

#### 4. 不引入sdk示例代码

```javascript
// on / once / last / first / off
WYAJSBridge.on('smartUpdateFinish', () => {

});
```

#### 5. Native端示例代码

```javascript
WYAJSBridge.emit('smartUpdateFinish', '@Object');
```

#### 6. 可用性

iOS系统，Android系统

---------

