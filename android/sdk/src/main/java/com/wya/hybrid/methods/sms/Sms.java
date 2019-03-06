package com.wya.hybrid.methods.sms;

import java.util.List;

/**
 * @date: 2019/2/22 9:16
 * @author: Chunjiang Mao
 * @classname: Sms
 * @describe:
 */
public class Sms {
	/**
	 * 电话号码
	 */
	private List<String> numbers;
	/**
	 * 文本内容
	 */
	private String text;
	/**
	 * 是否后台发送，只支持Android
	 */
	private boolean silent;

	public List<String> getNumbers() {
		return numbers;
	}

	public void setNumbers(List<String> numbers) {
		this.numbers = numbers;
	}

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public boolean isSilent() {
		return silent;
	}

	public void setSilent(boolean silent) {
		this.silent = silent;
	}
}
