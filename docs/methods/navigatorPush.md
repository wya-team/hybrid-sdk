#### 1. 说明

打开window
若window已存在，则会把该window显示到最前面，同时若url有变化或者reload参数为true时，页面会重新加载。


#### 2. Client传递参数给Native

```javascript
{
	url: '/home/main',
	pageParam: {},
	// ....
}
```


属性 | 说明 | 类型 | 默认值 | 如
---|---|---|---|---
name | window名字 | str | - | 'root'
title | navigationBar上的标题 | str | - | -
url | 页面地址 | str | - | `/home/main`, `https:**.com/`
pageParam | 页面参数 | object | - | -
~~scrollToTop~~ | ~~当点击状态栏，页面是否滚动到顶部~~ | ~~bool~~ | ~~false~~ | ~~-~~
vScrollBarEnabled | 是否显示垂直滚动条 | bool | true | -
hScrollBarEnabled | 是否显示水平滚动条 | bool | true | -
scaleEnabled | 页面是否可以缩放 | bool | false | -
hideTopBar | 是否隐藏原生navigationBar控件 | bool | true | ~~-~~
hideBottomBar | 是否隐藏原生tabBar控件 | bool | true | -
animation | 动画参数，不传时使用默认动画 | str | card,modal,none | -
replace | 是否先执行pop操作 | bool | false | -

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
import wya from '@wya/js-sdk';

let navigator = wya.requireModule('navigator')
navigator.push({
	// ...
}).then(() => {
	// ...
}).catch(() => {
	// ...
});

// 或者
import wya from '@wya/js-sdk';

wya.navigator.push({
	// ...
}).then(() => {
	// ...
}).catch(() => {
	// ...
});

// 或者
wya.invoke('navigator/push', {
	// ...
}).then(() => {
	// ...
}).catch(() => {
	// ...
});
```

#### 5. 不引入sdk示例代码

```javascript
WYAJSBridge.invoke('navigator/push', {
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

