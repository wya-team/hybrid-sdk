package com.wya.hybrid.bean;

/**
 * @date: 2019/1/17 15:53
 * @author: Chunjiang Mao
 * @classname: BatteryLow
 * @describe:
 */
public class BatteryLow {
	private int level;
	private boolean isPlugged;

	public int getLevel() {
		return level;
	}

	public void setLevel(int level) {
		this.level = level;
	}

	public boolean isPlugged() {
		return isPlugged;
	}

	public void setPlugged(boolean plugged) {
		isPlugged = plugged;
	}
}
