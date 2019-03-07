package com.wya.hybrid.methods.bean.notification.bean;

import java.io.Serializable;

/**
 * @date: 2019/2/21 14:22
 * @author: Chunjiang Mao
 * @classname: NotificationData
 * @describe:
 */
public class NotificationData implements Serializable {
	/**
	 * 伴随节奏的震动: 等待-震动-等待-震动
	 */
	private long[] vibrate;
	/**
	 * 提示音
	 */
	private String  sound;
	/**
	 * 设备提示灯是否闪烁
	 */
	private boolean light;
	/**
	 * 弹出通知到状态栏
	 */
	private Notify notify;
	/**
	 * 设置时间戳，单位ms
	 */
	private long timestamp;

	public long[] getVibrate() {
		return vibrate;
	}

	public void setVibrate(long[] vibrate) {
		this.vibrate = vibrate;
	}

	public String getSound() {
		return sound;
	}

	public void setSound(String sound) {
		this.sound = sound;
	}

	public boolean isLight() {
		return light;
	}

	public void setLight(boolean light) {
		this.light = light;
	}

	public Notify getNotify() {
		return notify;
	}

	public void setNotify(Notify notify) {
		this.notify = notify;
	}

	public long getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(long timestamp) {
		this.timestamp = timestamp;
	}
}
