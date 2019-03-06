package com.wya.hybrid.methods;

import com.wya.hybrid.bean.BaseEmitData;

/**
 * @author : XuDonglin
 * @time : 2019/03/06
 * @describe :
 */
public interface MethodsImpl {
    void setData(int status,String message,Object data);

    BaseEmitData getData();

}
