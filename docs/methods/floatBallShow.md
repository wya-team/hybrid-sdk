#### 1. 说明

展示一个悬浮框，浮动在屏幕上

#### 2. Client传递参数给Native

```javascript
{
	// ....
}
```

属性 | 说明 | 类型 | 默认值 | 如
---|---|---|---|---
~~preventDefault~~ | ~~是否阻止默认行为，若传true，可以在回调方法里面处理悬浮框点击操作。~~ | bool | false | -
iconPath | 展示在悬浮框中的图片地址。 | str | 应用图标 | 'widget://image/icon.png'
duration | 自动消隐时长。在该时长内不发生触摸悬浮框行为，悬浮框自动消隐至半透状态 | number | 5000 | -

> 默认的行为：1、在主widget调用该方法无效 2、点击后会弹出退出应用提示

#### 3. Native传递参数给Client

```javascript
{
	status: 1,
	msg: '调用成功',
	data: {
		
	}
}
```


#### 4. Client端示例代码

```javascript
import wya from 'wya-js-sdk';

let float = wya.requireModule('float')
float.ballShow({
	// ...
}).then(() => {
	// ...
}).catch(() => {
	// ...
});

// 或者
import wya from 'wya-js-sdk';

wya.float.ballShow({
	// ...
}).then(() => {
	// ...
}).catch(() => {
	// ...
});

// 或者
wya.invoke('float/ballShow', {
	// ...
}).then(() => {
	// ...
}).catch(() => {
	// ...
});
```

#### 5. 不引入sdk示例代码

```javascript
WYAJSBridge.invoke('float/ballShow', {
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

