package com.wya.hybrid.data.sp;

/**
 * @author :
 */
public class ScreenSp extends BaseSp {

    private static final String KEY_SCREEN = "SP_SCREEN";

    private static ScreenSp INSTANCE;

    private ScreenSp() {
        super(KEY_SCREEN);
    }

    public static ScreenSp get() {
        if (null == INSTANCE) {
            INSTANCE = new ScreenSp();
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
