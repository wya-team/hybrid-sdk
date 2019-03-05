#### 1. 说明

停止录音

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
		path: '', // 字符串，返回的音频地址
		duration: 0 // 数字类型，音频的时长
	}
}
```

#### 4. Client端示例代码

```javascript
import wya from 'wya-js-sdk';

let record = wya.requireModule('record')
record.stop({
	// ...
}).then(() => {
	// ...
}).catch(() => {
	// ...
});

// 或者
import wya from 'wya-js-sdk';

wya.record.stop({
	// ...
}).then(() => {
	// ...
}).catch(() => {
	// ...
});

// 或者
wya.invoke('record/stop', {
	// ...
}).then(() => {
	// ...
}).catch(() => {
	// ...
});
```

#### 5. 不引入sdk示例代码

```javascript
WYAJSBridge.invoke('record/stop', {
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

