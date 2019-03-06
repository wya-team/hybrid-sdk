package com.wya.hybrid.bean;

/**
 * @date: 2019/1/17 15:59
 * @author: Chunjiang Mao
 * @classname: VolumeUp
 * @describe: 音量加按钮
 */
public class VolumeUp {
	/**
	 * 音量加按钮
	 */
	public static final String EVENT_VOLUME_UP = "volumeUp";
	private int keyCode;
	private boolean longPress;

	public int getKeyCode() {
		return keyCode;
	}

	public void setKeyCode(int keyCode) {
		this.keyCode = keyCode;
	}

	public boolean isLongPress() {
		return longPress;
	}

	public void setLongPress(boolean longPress) {
		this.longPress = longPress;
	}
}
