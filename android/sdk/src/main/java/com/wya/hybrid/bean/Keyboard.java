package com.wya.hybrid.bean;

/**
 * @date: 2019/1/21 11:23
 * @author: Chunjiang Mao
 * @classname: Keyboard
 * @describe:
 */
public class Keyboard {
	/**
	 * 软件盘影藏
	 */
	public static final String EVENT_KEYBOARD_HIDE = "keyboardHide";
	/**
	 * 软件盘显示
	 */
	public static final String EVENT_KEYBOARD_SHOW = "keyboardShow";

	private int height;

	public int getHeight() {
		return height;
	}

	public void setHeight(int height) {
		this.height = height;
	}
}
