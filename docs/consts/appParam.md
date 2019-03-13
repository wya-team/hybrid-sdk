##### 1. 说明

当应用被第三方应用打开时，传递过来的参数，字符串类型

建议通过`appintent`事件监听应用被第三方应用调起，并在事件回调里面获取参数进行处理。

##### 2. 示例代码

```javascript
import wya from '@wya/js-sdk';

let appParam = wya.appParam;  //比如： {"name": "API Demo"}
```
##### 3. 可用性
iOS系统，Android系统

---------