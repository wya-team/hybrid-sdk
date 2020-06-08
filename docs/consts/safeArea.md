##### 1. 说明

页面不被其它内容（如状态栏）遮住的区域，JSON对象

通过safeArea能够知道当前页面哪些地方被遮住，从而做出相应的调整，保证页面重要元素不被遮挡住。

比如应对顶部header被状态栏遮住一部分，可以为header增加一个paddingTop，如：
```
header.style.paddingTop = wya.safeArea.top + 'px';

```
在比如在iPhone X上面，底部的导航菜单会被虚拟Home键遮住一部分，可以为footer增加一个paddingBottom，如：


```
footer.style.paddingBottom = wya.safeArea.bottom + 'px';

```
内部字段：

```
{
    top:            // 安全区域上边缘，对于沉浸式下window中该值通常为状态栏高度，全屏或非沉浸式下为0（iPhone X竖屏时全屏状态下也为44）
    left:            // 安全区域左边缘，通常为0（iPhone X横屏时为44）
    bottom:            // 安全区域下边缘，通常为0（iPhone X竖屏时为34，横屏时为21）
    right:            // 安全区域右边缘，通常为0（iPhone X横屏时为44）
}
```
##### 2. 示例代码

```javascript
import wya from '@wya/js-sdk';

let safeArea = wya.safeArea;        // JSON对象，如{top:20, left:0, bottom:0, right:0}
```
##### 3. 可用性
iOS系统，Android系统

---------