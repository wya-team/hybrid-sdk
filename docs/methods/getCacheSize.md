#### 1. 说明

获取缓存占用空间大小，缓存包括cache://目录下的文件、拍照临时文件以及网页缓存文件等，计算可能需要花费一些时间


#### 2. Client传递参数给Native

```javascript
{
	// ....
}
```

属性 | 说明 | 类型 | 默认值 | 如
---|---|---|---|---
sync | 执行结果的返回方式。为false时通过callback返回，为true时直接返回 | str | - | -


#### 3. Native传递参数给Client

```javascript
{
	status: 1,
	msg: '调用成功',
	data: {
		size: // 缓存大小，单位为Byte，数字类型。（-1：无存储设备、-2：正在准备USB存储设备、-3：无法访问存储设备）
	}
}
```

#### 4. Client端示例代码

```javascript
import wya from 'wya-js-sdk';

wya.getCacheSize({
	// ...
}).then(() => {
	// ...
}).catch(() => {
	// ...
});

// 或者
wya.invoke('getCacheSize', {
	// ...
}).then(() => {
	// ...
}).catch(() => {
	// ...
});
```

#### 5. 不引入sdk示例代码

```javascript
WYAJSBridge.invoke('getCacheSize', {
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

