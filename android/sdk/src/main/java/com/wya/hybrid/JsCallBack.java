package com.wya.hybrid;

/**
 * @author : XuDonglin
 * @time : 2019/01/17
 * @describe :
 */
public interface JsCallBack {
	/**
	 * 拦截回调
	 * @param data 返回数据
	 * @param id id
	 * @param name
	 */
    void response(String data, int id, String name);
}
