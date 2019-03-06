#### 1. 说明

Native日志信息捕获

#### 2. Client传递参数给Native

```javascript
// 不需要传递
```
#### 3. Native 传递参数给 Client

```javascript
// 直接返回信息
```

#### 4. Client端示例代码

```javascript
import wya from 'wya-js-sdk';

wya.onLog((msg) => {

});
```

#### 5. 不引入sdk示例代码

```javascript
WYAJSBridge.on('_log_', (msg) => {

})
// 或者
window.addEventListener('_log_', () => {

})
```

#### 6. Native端示例代码

```javascript
WYAJSBridge.emit('_log_', '@String')
```

#### 7. 可用性

iOS系统，Android系统

---------
