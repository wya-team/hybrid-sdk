package com.wya.hybrid.methods.bean.notification.bean;

import java.io.Serializable;

/**
 * @date: 2019/2/21 14:24
 * @author: Chunjiang Mao
 * @classname: Notify
 * @describe:
 */
public class Notify implements Serializable {
	/**
	 * 标题，Android中默认值为应用名称，支持Android和iOS 8.2以上系统
	 */
	private String title;
	/**
	 * 内容，默认值为'有新消息'
	 */
	private String content;
	/**
	 * 附加信息key/value，页面可以监听noticeclicked事件得到点击的通知的附加信息
	 */
	private Extra extra;
	/**
	 * 是否覆盖更新已有的通知，取值范围true|false。只Android有效
	 */
	private boolean cover;

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

	public Extra getExtra() {
		return extra;
	}

	public void setExtra(Extra extra) {
		this.extra = extra;
	}

	public boolean isCover() {
		return cover;
	}

	public void setCover(boolean cover) {
		this.cover = cover;
	}
}
