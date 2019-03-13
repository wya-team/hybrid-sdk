package com.wya.hybrid.events.battery;

/**
 * @author :
 */
public class Battery {

	/**
	 * 电量监听
	 */
	public static final String EVENT_BATTERY = "battery";

    /**
     * 低电量
     */
    public static final String EVENT_BATTERY_LOW = "batteryLow";

    /**
     * 电池状态
     */
    public static final String EVENT_BATTERY_STATUS = "batteryStatus";
    /**
     * 电池电量（0 - 100）
     */
    private int level;

    /**
     * 是否连接电源
     */
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

    public void setIsPlugged(boolean plugged) {
        isPlugged = plugged;
    }

    @Override
    public String toString() {
        return "Battery{" +
                "level=" + level +
                ", isPlugged=" + isPlugged +
                '}';
    }
}
