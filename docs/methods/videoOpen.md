#### 1. 说明

打开系统视频播放器

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
url | 本地文件路径（支持fs://路径协议）或者网络资源地址 | str | - | 'fs://res/1.mp4'



#### 4. Client端示例代码

```javascript
import wya from '@wya/js-sdk';

let video = wya.requireModule('video')
video.open({
	// ...
}).then(() => {
	// ...
}).catch(() => {
	// ...
});

// 或者
import wya from '@wya/js-sdk';

wya.video.open({
	// ...
}).then(() => {
	// ...
}).catch(() => {
	// ...
});

// 或者
wya.invoke('video/open', {
	// ...
}).then(() => {
	// ...
}).catch(() => {
	// ...
});
```

#### 5. 不引入sdk示例代码

```javascript
WYAJSBridge.invoke('video/open', {
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

