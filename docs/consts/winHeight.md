##### 1. 说明

当前 window 高度，数字类型

> 此属性值不同于屏幕的分辨率，比如 iPhone 5 的分辨率为 640*1136，但是其 winHeight 为 568（若不使用iOS7风格则为 548），因此前端需根据 winWidth 和 winHeight 来进行布局

##### 2. 示例代码

```javascript
import wya from 'wya-js-sdk';

let winHeight = wya.winHeight;  // 比如： 568
```
##### 3. 可用性
iOS系统，Android系统

---------
