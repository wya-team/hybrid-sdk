#### 1. 说明

安装应用，如果是苹果的AppStore应用地址，将会跳转到AppStore应用详情页面

#### 2. Client传递参数给Native

```javascript
{
	// ....
}
```

属性 | 说明 | 类型 | 默认值 | 如
---|---|---|---|---
appUri | 目标应用的资源文件标识。Android上为apk包的本地路径，如file://xxx.apk；iOS上为应用安装包对应的plist文件地址 | str | - | -

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

#### 4. Client端示例代码

```javascript
import wya from 'wya-js-sdk';

wya.installApp({
	// ...
}).then(() => {
	// ...
}).catch(() => {
	// ...
});

// 或者
wya.invoke('installApp', {
	// ...
}).then(() => {
	// ...
}).catch(() => {
	// ...
});
```

#### 5. 不引入sdk示例代码

```javascript
WYAJSBridge.invoke('installApp', {
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

