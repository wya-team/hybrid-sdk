package com.wya.hybrid.data.sp;

/**
 * @author :
 */
public class NetSp extends BaseSp {

    private static final String KEY_NET = "SP_NET";

    private static NetSp INSTANCE;

    private NetSp() {
        super(KEY_NET);
    }

    public static NetSp get() {
        if (null == INSTANCE) {
            INSTANCE = new NetSp();
        }
        return INSTANCE;
    }

    /**
     * 网络是否连接
     */
    private static final String KEY_IS_ONLINE = "IS_ONLINE";

    public boolean isOnline() {
        return getBoolean(KEY_IS_ONLINE, true);
    }

    public void setIsOnline(boolean isOnline) {
        putBoolean(KEY_IS_ONLINE, isOnline);
    }

}
