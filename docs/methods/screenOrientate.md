#### 1. 说明

设置屏幕旋转方向

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
orientation | 旋转屏幕到指定方向 | str | - | -

```
portraitUp // 竖屏时，屏幕在home键的上面
portraitDown // 竖屏时，屏幕在home键的下面，部分手机如iPhone X系列不支持
landscapeLeft // 横屏时，屏幕在home键的左边
landscapeRight // 横屏时，屏幕在home键的右边
auto // 屏幕根据重力感应在横竖屏间自动切换
autoPortrait // 屏幕根据重力感应在竖屏间自动切换
autoLandscape // 屏幕根据重力感应在横屏间自动切换
```

#### 4. Client端示例代码

```javascript
import wya from 'wya-js-sdk';

let screen = wya.requireModule('screen')
screen.orientate({
	// ...
}).then(() => {
	// ...
}).catch(() => {
	// ...
});

// 或者
import wya from 'wya-js-sdk';

wya.screen.orientate({
	// ...
}).then(() => {
	// ...
}).catch(() => {
	// ...
});

// 或者
wya.invoke('screen/orientate', {
	// ...
}).then(() => {
	// ...
}).catch(() => {
	// ...
});
```

#### 5. 不引入sdk示例代码

```javascript
WYAJSBridge.invoke('screen/orientate', {
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

