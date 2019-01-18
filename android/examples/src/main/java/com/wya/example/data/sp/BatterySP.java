package com.wya.example.data.sp;

/**
 * @author :
 */
public class BatterySP extends BaseSP {
    
    private static final String KEY_BATTERY = "SP_BATTERY";
    
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
    
    
}
