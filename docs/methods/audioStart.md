#### 1. 说明

播放本地音频，支持amr格式

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
path | 文件路径，支持fs://、widget://等文件路径协议 | str | - | -

#### 4. Client端示例代码

```javascript
import wya from 'wya-js-sdk';

let audio = wya.requireModule('audio')
audio.start({
	// ...
}).then(() => {
	// ...
}).catch(() => {
	// ...
});

// 或者
import wya from 'wya-js-sdk';

wya.audio.start({
	// ...
}).then(() => {
	// ...
}).catch(() => {
	// ...
});

// 或者
wya.invoke('audio/start', {
	// ...
}).then(() => {
	// ...
}).catch(() => {
	// ...
});
```

#### 5. 不引入sdk示例代码

```javascript
WYAJSBridge.invoke('audio/start', {
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

