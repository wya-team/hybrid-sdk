#### 1. 说明

打开window
若window已存在，则会把该window显示到最前面，同时若url有变化或者reload参数为true时，页面会重新加载。


#### 2. Client传递参数给Native

```javascript
{
	name: '',
	url: '',
	data: '',
	headers: '',
	useWKWebView: false,
	singleInstance: false,
	historyGestureEnabled: false,
	pageParam: '',
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

#### 4. Client端示例代码

```javascript
import wya from 'wya-js-sdk';

wya.openWin({
	// ...
}).then(() => {
	// ...
}).catch(() => {
	// ...
});

// 或者
wya.invoke('openWin', {
	// ...
}).then(() => {
	// ...
}).catch(() => {
	// ...
});
```

#### 5. 不引入sdk示例代码

```javascript
WYAJSBridge.invoke('openWin', {
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

