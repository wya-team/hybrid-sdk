#### 1. 说明

设置是否禁止屏幕休眠

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
keepOn | 是否禁止屏幕休眠 | bool | false | -


#### 4. Client端示例代码

```javascript
import wya from 'wya-js-sdk';

wya.setKeepScreenOn({
	// ...
}).then(() => {
	// ...
}).catch(() => {
	// ...
});

// 或者
wya.invoke('setKeepScreenOn', {
	// ...
}).then(() => {
	// ...
}).catch(() => {
	// ...
});
```

#### 5. 不引入sdk示例代码

```javascript
WYAJSBridge.invoke('setKeepScreenOn', {
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

