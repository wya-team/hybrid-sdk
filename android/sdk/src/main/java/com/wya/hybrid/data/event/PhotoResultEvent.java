package com.wya.hybrid.data.event;

import android.content.Intent;

/**
 * @author : XuDonglin
 * @time : 2019/03/07
 * @describe :
 */
public class PhotoResultEvent {
    private int requestCod;
    private int resultCode;
    private Intent data;

    public PhotoResultEvent(int requestCod, int resultCode, Intent data) {
        this.requestCod = requestCod;
        this.resultCode = resultCode;
        this.data = data;
    }

    public int getRequestCod() {
        return requestCod;
    }

    public void setRequestCod(int requestCod) {
        this.requestCod = requestCod;
    }

    public int getResultCode() {
        return resultCode;
    }

    public void setResultCode(int resultCode) {
        this.resultCode = resultCode;
    }

    public Intent getData() {
        return data;
    }

    public void setData(Intent data) {
        this.data = data;
    }
}
