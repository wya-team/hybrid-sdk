#### 1. 说明

清除缓存，包括cache://目录下的文件、拍照临时文件、网页缓存文件等，清除时可能需要消耗一定时间。


#### 2. Client传递参数给Native

```javascript
{
	// ....
}
```

属性 | 说明 | 类型 | 默认值 | 如
---|---|---|---|---
path | 缓存路径 | str | app的缓存路径 | -


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

let memory = wya.requireModule('memory')
memory.clearCache({
	// ...
}).then(() => {
	// ...
}).catch(() => {
	// ...
});

// 或者
import wya from 'wya-js-sdk';

wya.memory.clearCache({
	// ...
}).then(() => {
	// ...
}).catch(() => {
	// ...
});

// 或者
wya.invoke('memory/clearCache', {
	// ...
}).then(() => {
	// ...
}).catch(() => {
	// ...
});
```

#### 5. 不引入sdk示例代码

```javascript
WYAJSBridge.invoke('memory/clearCache', {
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

