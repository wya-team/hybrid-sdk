package com.wya.hybrid.data.sp;

/**
 * @author :
 */
public class BatterySP extends BaseSP {

    private static final String KEY_BATTERY = "SP_BATTERY";
    private static final String KEY_LEVEL = "LEVEL";
    private static final String KEY_IS_PLUGGED = "IS_PLUGGED";

    private static BatterySP INSTANCE;

    private BatterySP() {
        super(KEY_BATTERY);
    }

    public static BatterySP get() {
        if (null == INSTANCE) {
            INSTANCE = new BatterySP();
        }
        return INSTANCE;
    }

    public void setLevel(int level) {
        putInt(KEY_LEVEL, level);
    }

    public int getLevel() {
        return getInt(KEY_LEVEL, 0);
    }

    public void setIsPlugged(boolean isPlugged) {
        putBoolean(KEY_IS_PLUGGED, isPlugged);
    }

    public boolean isPlugged() {
        return getBoolean(KEY_IS_PLUGGED, false);
    }

}
