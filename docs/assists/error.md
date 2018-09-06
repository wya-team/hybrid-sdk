#### 1. 说明

异常信息捕获

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

wya.onError((msg) => {

});
```

#### 5. 不引入sdk示例代码

```javascript
WYAJSBridge.on('_error_', (msg) => {

})
// 或者
window.addEventListener('_error_', () => {

})
```

#### 6. Native端示例代码

```javascript
WYAJSBridge.emit('_error_', '@String')
```

#### 7. 可用性

iOS系统，Android系统

---------
