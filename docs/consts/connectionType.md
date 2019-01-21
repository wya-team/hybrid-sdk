##### 1. 说明

当前网络连接类型，如 2g、3g、4g、wifi 等，字符串类型
- 取值范围
```
unknown         // 未知
ethernet        // 以太网
wifi            // wifi
2g              // 2G网络
3g              // 3G网络
4g              // 4G网络
none            // 无网络
```

##### 2. 示例代码

```javascript
import wya from 'wya-js-sdk';

let connectionType = wya.connectionType;  //比如： wifi
```
##### 3. 可用性
iOS系统，Android系统

---------