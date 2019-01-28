package com.wya.hybrid.data.sp;

/**
 * @author :
 */
public class LifecycleSP extends BaseSP {

    private static final String KEY_LIFECYCLE = "SP_LIFECYCLE";

    private static LifecycleSP INSTANCE;

    private LifecycleSP() {
        super(KEY_LIFECYCLE);
    }

    public static LifecycleSP get() {
        if (null == INSTANCE) {
            INSTANCE = new LifecycleSP();
        }
        return INSTANCE;
    }

    private static final String KEY_IS_PAUSE = "IS_PAUSE";
    private static final String KEY_IS_RESUME = "IS_RESUME";

    public boolean isPause() {
        return getBoolean(KEY_IS_PAUSE, false);
    }

    public void setIsPause(boolean isPause) {
        putBoolean(KEY_IS_PAUSE, isPause);
    }

    public boolean isResume() {
        return getBoolean(KEY_IS_RESUME, false);
    }

    public void setIsResume(boolean isResume) {
        putBoolean(KEY_IS_RESUME, isResume);
    }
}
