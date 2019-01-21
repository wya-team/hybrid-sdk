#### 1. 说明

设备电池状态改变事件，如电量变化或正在充电

#### 2. Native传递参数给Client

```javascript
{
	status: 1,
	msg: '响应成功',
	data: {
		level: 100,            // 电池电量（0-100）
		isPlugged: true        // 是否连接电源
	}
}
```

#### 3. Client端示例代码

```javascript
import wya from 'wya-js-sdk';

// on / once / last / first / off
wya.on('batteryStatus', () => {

});

// on / once / last / first / off
wya.onBatteryStatus(() => {

});
```

#### 4. 不引入sdk示例代码

```javascript
// on / once / last / first / off
WYAJSBridge.on('batteryStatus', () => {

});
```

#### 5. Native端示例代码

```javascript
WYAJSBridge.emit('batteryStatus', '@Object');
```

#### 6. 可用性

iOS系统，Android系统

---------

