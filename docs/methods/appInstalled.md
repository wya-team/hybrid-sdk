#### 1. 说明

判断设备上面是否已安装指定应用

注意：iOS9中系统对检测应用是否安装的方法做了限制，若想得到期望的结果，需要在config.xml里面[配置可被检测的URL Scheme](//docs.apicloud.com/Dev-Guide/app-config-manual#14-4)。


#### 2. Client传递参数给Native

```javascript
{
	// ....
}
```

#### 3. Native传递参数给Client

```javascript
{
	status: 1,
	msg: '调用成功',
	data: {
		// ....
	}
}
```
属性 | 说明 | 类型 | 默认值 | 如
---|---|---|---|---
sync | 执行结果的返回方式。为false时通过callback返回，为true时直接返回。 | bool | false | -
appBundle | Android 平台为应用包名，iOS 平台为应用定义的 URL Scheme。iOS 中的 URL Scheme 与包名不一样，一个应用只有一个包名，但是可以配置多个 URL Scheme | str | - | -

#### 4. Client端示例代码

```javascript
import wya from 'wya-js-sdk';

wya.appInstalled({
	// ...
}).then(() => {
	// ...
}).catch(() => {
	// ...
});

// 或者
wya.invoke('appInstalled', {
	// ...
}).then(() => {
	// ...
}).catch(() => {
	// ...
});
```

#### 5. 不引入sdk示例代码

```javascript
WYAJSBridge.invoke('appInstalled', {
	// ...
}).then(() => {
	// ...
}).catch(() => {
	// ...
});
```

#### 6. Native端示例代码

```javascript
WYAJSBridge.emit('[对应的唯一id]', '@Object');
```

#### 7. 可用性

iOS系统，Android系统

---------

