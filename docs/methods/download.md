#### 1. 说明

下载文件

#### 2. Client传递参数给Native

```javascript
{
	// ....
}
```

属性 | 说明 | 类型 | 默认值 | 如
---|---|---|---|---
url | 下载地址 | str | - | -
encode | 是否对url进行编码 | bool | true | -
savePath | 存储路径，不传时使用自动创建的路径 | str | - | -
report | 下载过程是否上报 | bool | false | -
cache | 是否使用本地缓存 | bool | true | -
allowResume | 是否允许断点续传 | bool | false | -

#### 3. Native传递参数给Client

```javascript
{
	status: 1,
	msg: '调用成功',
	data: {
		fileSize: 0, // 文件大小，数字类型percent:0,                  //下载进度（0-100），数字类型
		state: 0, // 下载状态，数字类型。（0：下载中、1：下载完成、2：下载失败）
		savePath: '' // 存储路径（字符串类型）
	}
}
```

#### 4. Client端示例代码

```javascript
import wya from 'wya-js-sdk';

wya.download({
	// ...
}).then(() => {
	// ...
}).catch(() => {
	// ...
});

// 或者
wya.invoke('download', {
	// ...
}).then(() => {
	// ...
}).catch(() => {
	// ...
});
```

#### 5. 不引入sdk示例代码

```javascript
WYAJSBridge.invoke('download', {
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

