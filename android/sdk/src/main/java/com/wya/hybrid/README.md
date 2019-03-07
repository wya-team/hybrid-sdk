# Hybrid SDK
## 目的
- 通过JS注入，实现Web端与Android端的之间可以互相通信

## WebView 与 JS 的交互方式
- 在Android WebView的使用中，与前端h5页面交互的需求十分常见
- Android 与 JS 通过WebView互相调用方法，实际上是：Android 去调用JS的代码 + JS去调用Android的代码

## 交互流程
- 在WYAWebViewClient的onPageFinished中注入JS文件
```
	BridgeUtil.webViewLoadLocalJs(webView, BridgeUtil.WYAJSBRIDGE);
	BridgeUtil.webViewLoadLocalJs(webView, BridgeUtil.WYAMETHOD);  
```  
- 通过WYAWebViewClient的shouldOverrideUrlLoading()回调拦截url
```
	1、url为"command://XXX?id=X"(注册事件 XXX = event/add; 移除事件 XXX = event/remove; debugger事件 XXX = dubgger; 模块方法 XXX = 模块名/方法名;)
	2、拦截url后通过id调用BridgeUtil.getParam()获取参数数据
	3、在HybridManager中获取response回调数据，实现特定事务
``` 

## 常量
	
## 事件注册、移除、debugger 、提交监听内容
- 事件注册
```
	1、command://event/add?id=X
	2、通过id调用getParam获取eventName
	3、根据eventName去注册对应方法，将eventName添加到mEventRegisterMap
	4、通过WYAJSBridge.emit将对应的id(X)传给H5，完成事件注册
```
- 事件移除
```
	1、command://event/remove?id=X
	2、通过id调用getParam获取eventName
	3、将mEventRegisterMap中的eventName移除（因为存在网络监听断开和连接的情况，当移除断开监听时，连接监听还存在，所以不能讲整个网络监听移除）
	4、通过WYAJSBridge.emit将对应的id(X)传给H5，完成事件移除
```
- debugger
```
	1、command://debugger/invoke?id=X
	2、通过id调用getParam获取eventName
	3、通过WYAJSBridge.emit将对应的id(X)传给H5，debugger执行成功
	4、通过WYAJSBridge.emit将对应的eventName传给H5，模拟事件触发执行
```
- 提交监听内容
```
	1、通过mEventRegisterMap判断事件是否注册
	2、如果注册，通过WYAJSBridge.emit将对应的eventName传给H5,提交监听内容
```


## 方法的扩展
- 在example中，通过WYAWebView.register进行方法的重写与扩展, XXX为上面拦截url的部分，name为XXX,id为上面拦截url的X,data为通过id调用getParam获取的Json字符串
- 当XXX在SDK中已存在：example中未注册，默认执行SDK中response回调对应的事务；example中注册，执行example中的response回调，不再执行SDK中response回调（即SDK中无法满足目前需求重写改方法）
- 当XXX在SDK中不存在：example中未注册，添加方法进行扩展
- example中处理完对应事务之后，通过WYAWebView.send(id, data)通知H5执行成功
```
	WYAWebView.register("XXX", new JsCallBack() {
    			@Override
    			public void response(String data, int id, String name) {
    				//TODO 处理对应事务，然后send(id, data)通知H5
    			}
    		});
```
