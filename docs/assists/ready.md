#### 1. 说明

初始化后执行

#### 2. Client传递参数给Native

```javascript
{
    // ...
}
```
#### 3. Native 传递参数给 Client

```javascript
// 直接返回异常信息
```

#### 4. Client端示例代码

```javascript
import wya from 'wya-js-sdk';

wya.ready(() => {

});
```

#### 5. 不引入sdk示例代码

```javascript
window.addEventListener('_ready_', (e) => {
	// 这个只被允许执行一次
})
```

#### 6. Native端示例代码

```javascript
WYAJSBridge.emit('_ready_', '@Object');
```

#### 7. 可用性

iOS系统，Android系统

---------

