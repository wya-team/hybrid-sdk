#### 1. 说明

在应用内打开系统通讯录界面选择联系人

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
		list: [
			{
				name: "", // 姓名
				phone: "", // 电话号码
			},
			{
				name: "", // 姓名
				phone: "", // 电话号码
			}
		]
	}
}
```

#### 4. Client端示例代码

```javascript
import wya from '@wya/js-sdk';

let system = wya.requireModule('system')
system.contacts({
	// ...
}).then(() => {
	// ...
}).catch(() => {
	// ...
});

// 或者
import wya from '@wya/js-sdk';

wya.system.contacts({
	// ...
}).then(() => {
	// ...
}).catch(() => {
	// ...
});

// 或者
wya.invoke('system/contacts', {
	// ...
}).then(() => {
	// ...
}).catch(() => {
	// ...
});
```

#### 5. 不引入sdk示例代码

```javascript
WYAJSBridge.invoke('system/contacts', {
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

