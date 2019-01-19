package com.wya.hybridexample.data.event;

/**
 * @author :
 */
public class BatteryEvent {
    
    /**
     * 是否低电量
     */
    private boolean isBatteryLow;
    
    private int level;
    
    private boolean isPlugged;
    
    public boolean isBatteryLow() {
        return isBatteryLow;
    }
    
    public void setBatteryLow(boolean batteryLow) {
        isBatteryLow = batteryLow;
    }
    
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
    
}
