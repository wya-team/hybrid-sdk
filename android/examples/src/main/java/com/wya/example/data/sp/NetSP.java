package com.wya.example.data.sp;

/**
 * @author :
 */
public class NetSP extends BaseSP {
    
    private static final String KEY_NET = "SP_NET";
    
    private static NetSP INSTANCE;
    
    private NetSP() {
        super(KEY_NET);
    }
    
    public static NetSP get() {
        if (null == INSTANCE) {
            INSTANCE = new NetSP();
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
