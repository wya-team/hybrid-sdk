package com.wya.hybrid.data.sp;

/**
 * @author :
 */
public class LifecycleSp extends BaseSp {

    private static final String KEY_LIFECYCLE = "SP_LIFECYCLE";

    private static LifecycleSp INSTANCE;

    private LifecycleSp() {
        super(KEY_LIFECYCLE);
    }

    public static LifecycleSp get() {
        if (null == INSTANCE) {
            INSTANCE = new LifecycleSp();
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
