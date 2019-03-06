package com.wya.hybrid.methods.notification.bean;

/**
 * @date: 2019/2/23 8:54
 * @author: Chunjiang Mao
 * @classname: NotificationEmit
 * @describe:
 */
public class NotificationEmit {
	/**
	 * 调用 notification 方法时返回的 id， 这边用时间戳作为id
	 */
	private long id;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}
}
