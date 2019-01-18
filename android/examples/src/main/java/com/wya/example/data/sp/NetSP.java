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
    private static final String KEY_NET_IS_CONNECTED = "NET_IS_CONNECTED";
    
    public boolean isNetConnected() {
        return getBoolean(KEY_NET_IS_CONNECTED, true);
        // TODO: 2019/1/17 ZCQ TEST
    }
    
    public void setNetConnected(boolean isConnected) {
        putBoolean(KEY_NET_IS_CONNECTED, isConnected);
    }
    
}
