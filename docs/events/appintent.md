#### 1. 说明

本应用被其他应用调起来时（Android 平台也可以通过 Activity 打开），收到相关数据的回调，字符串类型

在任意页面中注册该监听后，如果本应用被其他应用调起，将触发该监听函数，同时将传给该应用的数据回调给网页

#### 2. Native传递参数给Client

```javascript
{
	status: 1,
	msg: '调用成功',
	data: {
		iosUrl: ''              // 其他应用打开本应用的url，只iOS有效，字符串类型
		sourceAppId: ''         // 其他应用的包名，iOS平台有可能为空字符串，字符串类型
		appParam: {}            // 其他应用传递过来的参数，JSON或字符串类型
	}
}
```

#### 3. Client端示例代码

```javascript
import wya from 'wya-js-sdk';

// on / once / last / first / off
wya.on('appIntent', () => {

});

// on / once / last / first / off
wya.onAppIntent(() => {

});
```

#### 4. 不引入sdk示例代码

```javascript
// on / once / last / first / off
WYAJSBridge.on('appIntent', () => {

});
```

#### 5. Native端示例代码

```javascript
WYAJSBridge.emit('appIntent', '@Object');
```

#### 6. 可用性

iOS系统，Android系统

---------

