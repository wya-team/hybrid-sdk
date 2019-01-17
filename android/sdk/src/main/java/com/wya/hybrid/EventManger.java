package com.wya.hybrid;

/**
 * @date: 2019/1/17 16:55
 * @author: Chunjiang Mao
 * @classname: EventManger
 * @describe:
 */
public interface EventManger {
	/**
	 * 向后台发送数据
	 * @param event
	 * @param data
	 */
	void emit(String event, Object data);

	/**
	 * 向后台发送请求
	 * @param event
	 */
	void emit(String event);
}
