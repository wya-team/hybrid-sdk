#### 1. 说明

通过调用系统默认相机或者图库应用，获取图片以及视频媒体文件。

#### 2. Client传递参数给Native

```javascript
{
	// ....
}
```

属性 | 说明 | 类型 | 默认值 | 如
---|---|---|---|---
sourceType | 图片源类型，从相册、图片库或相机获取图片 | str | camera,album | -
encodingType | 返回图片类型，jpg或png | str | png,jpg | -
mediaType | 媒体类型，图片或视频 | str | pic,viedo | -
destinationType | 返回数据类型，指定返回图片地址或图片经过base64编码后的字符串 | str | url,base64 | -
direction | 选择前置或后置摄像头，取值范围（front、rear）| bool | false | -
~~allowEdit~~ | ~~是否可以选择图片后进行编辑~~| ~~bool~~ | ~~false~~ | -
~~preview~~ | ~~是否选择图片后进行预览~~ | ~~bool~~ | ~~false~~ | -
quality | 图片质量，只针对jpg格式图片（0-100整数） | number | 50 | -
videoQuality | 视频质量，调用相机录制视频时该参数生效 | str | low、medium、high | -
targetWidth | 压缩后的图片宽度，图片会按比例适配此宽度 | number | 原图宽度 | -
targetHeight | 压缩后的图片高度，图片会按比例适配此高度 | number | 原图高度 | -
saveToPhotoAlbum | 拍照或录制视频后是否保存到系统相册目录 | bool | false | -
groupName | 保存图片到自定义分组相册目录，相册不存在则会进行创建 | bool | false | -

```
camera // 相机
album // 相册
```

#### 3. Native传递参数给Client

```javascript
{
	status: 1,
	msg: '调用成功',
	data: {
		list: [
			{
				url: "", // 图片路径
				base64: "", // base64数据，destinationType为base64时返回
				duration: 0 // 视频时长
			}
		]
	}
}
```

#### 4. Client端示例代码

```javascript
import wya from 'wya-js-sdk';

wya.getPicture({
	// ...
}).then(() => {
	// ...
}).catch(() => {
	// ...
});

// 或者
wya.invoke('getPicture', {
	// ...
}).then(() => {
	// ...
}).catch(() => {
	// ...
});
```

#### 5. 不引入sdk示例代码

```javascript
WYAJSBridge.invoke('getPicture', {
	// ...
}).then(() => {
	// ...
}).catch(() => {
	// ...
});
```

#### 6. Native端示例代码

```javascript
WYAJSBridge.emit('[对应的唯一id]', '@Object');
```

#### 7. 可用性

iOS系统，Android系统

---------

