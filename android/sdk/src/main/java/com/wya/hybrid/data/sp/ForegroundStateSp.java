package com.wya.hybrid.data.sp;

/**
 * @author :
 */
public class ForegroundStateSp extends BaseSp {

    private static final String KEY_NET = "SP_NET";

    private static ForegroundStateSp INSTANCE;

    private ForegroundStateSp() {
        super(KEY_NET);
    }

    public static ForegroundStateSp get() {
        if (null == INSTANCE) {
            INSTANCE = new ForegroundStateSp();
        }
        return INSTANCE;
    }

    /**
     * 应用进入后台
     */
    private static final String KEY_IS_PAUSE = "IS_PAUSE";
    /**
     * 应用从后台回到前台
     */
    private static final String KEY_IS_RESUME = "IS_RESUME";

    public boolean isPause() {
        return getBoolean(KEY_IS_PAUSE, true);
    }

    public void setIsPause(boolean isPause) {
        putBoolean(KEY_IS_PAUSE, isPause);
    }

    public boolean isResume() {
        return getBoolean(KEY_IS_RESUME, true);
    }

    public void setIsResume(boolean isResume) {
        putBoolean(KEY_IS_RESUME, isResume);
    }

}
