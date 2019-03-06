#### 1. 说明

设置状态栏样式为白色（适用于深色背景）或黑色（适用于浅色背景），以及设置状态栏背景颜色

#### 2. Client传递参数给Native

```javascript
{
	// ....
}
```

属性 | 说明 | 类型 | 默认值 | 如
---|---|---|---|---
style | 状态栏样式 | str | light | dark,light
color | 状态栏背景颜色，只 Android 5.0 及以上有效 | str | #000 | -
animated | 是否有动画效果，只iOS有效 | bool | true | -


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

let style = wya.requireModule('style')
style.setStatusBar({
	// ...
}).then(() => {
	// ...
}).catch(() => {
	// ...
});

// 或者
import wya from 'wya-js-sdk';

wya.style.setStatusBar({
	// ...
}).then(() => {
	// ...
}).catch(() => {
	// ...
});

// 或者
wya.invoke('style/setStatusBar', {
	// ...
}).then(() => {
	// ...
}).catch(() => {
	// ...
});
```

#### 5. 不引入sdk示例代码

```javascript
WYAJSBridge.invoke('style/setStatusBar', {
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

