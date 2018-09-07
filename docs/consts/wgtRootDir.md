##### 1. 说明

widget: //协议对应的真实目录，即 widget 网页包的根目录，字符串类型

注意该目录为只读，不要往该目录下面写文件


##### 2. 示例代码

```javascript
import wya from 'wya-js-sdk';

let wgtRootDir = wya.wgtRootDir;  
/* 
比如：  
/private/var/mobile/Containers/Bundle/Application/56218B5B-1B59-48CD-8080-DAC54DB46446/UZApp.app/widget
*/
```
##### 3. 可用性
iOS系统，Android系统

---------