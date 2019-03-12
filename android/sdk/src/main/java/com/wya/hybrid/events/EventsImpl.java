package com.wya.hybrid.events;

import com.wya.hybrid.bean.BaseEmitData;

/**
 * @date: 2019/3/8 15:32
 * @author: Chunjiang Mao
 * @classname: EventsImpl
 * @describe:
 */
public interface EventsImpl {
	void setData(int status,String message,Object data);

	BaseEmitData getData();
}
