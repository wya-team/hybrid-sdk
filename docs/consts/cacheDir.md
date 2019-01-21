##### 1. 说明

cache://协议对应的真实目录，字符串类型

iOS 平台下载的文件一般存放于该目录下，否则提交 AppStore 审核时可能会不通过，且此目录下的内容在手机备份时不会被备份

##### 2. 示例代码

```javascript
import wya from 'wya-js-sdk';

let cacheDir = wya.cacheDir; 
/* 
比如： 
/var/mobile/Containers/Data/Application/4E376FDE-D595-4E08-B0A4-A06561B31000/Library/Caches/APICloud/Cache/XXXXXX
*/
```
##### 3. 可用性
iOS系统，Android系统

---------