package com.wya.hybridexample.data.sp;

/**
 * @author :
 */
public class ScreenSP extends BaseSP {
    
    private static final String KEY_SCREEN = "SP_SCREEN";
    
    private static ScreenSP INSTANCE;
    
    private ScreenSP() {
        super(KEY_SCREEN);
    }
    
    public static ScreenSP get() {
        if (null == INSTANCE) {
            INSTANCE = new ScreenSP();
        }
        return INSTANCE;
    }
    
    private static final String KEY_SCREEN_STATE = "SCREEN_STATE";
    
    public int getScreenState() {
        return getInt(KEY_SCREEN_STATE, -1);
    }
    
    public void setScreenState(int state) {
        putInt(KEY_SCREEN_STATE, state);
    }
    
}
