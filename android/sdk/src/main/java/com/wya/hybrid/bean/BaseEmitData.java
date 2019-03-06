package com.wya.hybrid.bean;

/**
 * @date: 2019/1/17 15:55
 * @author: Chunjiang Mao
 * @classname: BaseEmitData
 * @describe:
 */
public class BaseEmitData<T> {
    /**
     * 默认成功
     */
    private int status = 1;
    
    /**
     * 默认响应成功
     */
    private String msg = "响应成功";
    
    private T data;
    
    public int getStatus() {
        return status;
    }
    
    public void setStatus(int status) {
        this.status = status;
    }
    
    public String getMsg() {
        return msg;
    }
    
    public void setMsg(String msg) {
        this.msg = msg;
    }
    
    public T getData() {
        return data;
    }
    
    public void setData(T data) {
        this.data = data;
    }
    
    @Override
    public String toString() {
        return "BaseEmitData{" +
                "status=" + status +
                ", msg='" + msg + '\'' +
                ", data=" + data +
                '}';
    }
    
}
