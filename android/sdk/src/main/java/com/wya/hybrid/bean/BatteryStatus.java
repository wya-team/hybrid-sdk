package com.wya.hybrid.bean;


/**
 * @author :
 */
public class BatteryStatus {
    
    public static final String EVENT_BATTERY_STATUS = "batteryStatus";
    
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
    
    public void setIsPlugged(boolean plugged) {
        isPlugged = plugged;
    }
    
    @Override
    public String toString() {
        return "BatteryLow{" +
                "level=" + level +
                ", isPlugged=" + isPlugged +
                '}';
    }
    
}
