package com.wya.hybrid.events.keyback;

/**
 * @date: 2019/1/17 15:59
 * @author: Chunjiang Mao
 * @classname: KeyBack
 * @describe: 返回
 */
public class KeyBack {
	/**
	 * 返回按钮
	 */
	public static final String EVENT_KEY_BACK = "keyBack";
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
