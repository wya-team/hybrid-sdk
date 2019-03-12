#### 1. 说明

获取总存储空间大小
#### 2. Client传递参数给Native

```javascript
{
	// ....
}
```

属性 | 说明 | 类型 | 默认值 | 如
---|---|---|---|---
storageType | `` | str | total, dataDir, storageDir | -


> dataDir(内部存储)；storageDir(外部存储)；total(全部)

#### 3. Native传递参数给Client

```javascript
{
	status: 1,
	msg: '调用成功',
	data: {
		size: '1024',// 缓存大小，单位为Byte
		label: '1KB'
	}
}
```

#### 4. Client端示例代码

```javascript
import wya from '@wya/js-sdk';

let memory = wya.requireModule('memory')
memory.getTotal({
	// ...
}).then(() => {
	// ...
}).catch(() => {
	// ...
});

// 或者
import wya from '@wya/js-sdk';

wya.memory.getTotal({
	// ...
}).then(() => {
	// ...
}).catch(() => {
	// ...
});

// 或者
wya.invoke('memory/getTotal', {
	// ...
}).then(() => {
	// ...
}).catch(() => {
	// ...
});
```

#### 5. 不引入sdk示例代码

```javascript
WYAJSBridge.invoke('memory/getTotal', {
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

