package com.wya.example;

import com.wya.example.data.sp.BatterySP;
import com.wya.example.util.log.DebugLogger;
import com.wya.hybrid.bean.BaseEmitData;
import com.wya.hybrid.bean.BatteryLow;
import com.wya.hybrid.bean.BatteryStatus;
import com.wya.hybrid.bean.NetState;
/**
 * @author :
 */
public class EventManager {
	
	private static EventManager INSTANCE;
	
	private EventManager() {
	}
	
	public static EventManager get() {
		synchronized (EventManager.class) {
			if (null == INSTANCE) {
				INSTANCE = new EventManager();
			}
		}
		return INSTANCE;
	}
	
	private BaseEmitData<Object> mEmitData = new BaseEmitData<>();
	
	public BaseEmitData<Object> getBatteryLow() {
		if (null == mEmitData) {
			mEmitData = new BaseEmitData<>();
		}
		
		mEmitData.setMsg("响应成功");
		int status = 0;
		
		BatteryLow data = new BatteryLow();
		data.setLevel(BatterySP.get().getLevel());
		data.setIsPlugged(BatterySP.get().isPlugged());
		
		if (null != data) {
			mEmitData.setData(data);
			status = 1;
		}
		mEmitData.setStatus(status);
		DebugLogger.logBattery(mEmitData.toString());
		
		return mEmitData;
	}
	
	public BaseEmitData<Object> getBatteryStatus() {
		if (null == mEmitData) {
			mEmitData = new BaseEmitData<>();
		}
		mEmitData.setMsg("响应成功");
		int status = 0;
		
		BatteryStatus data = new BatteryStatus();
		data.setLevel(BatterySP.get().getLevel());
		data.setIsPlugged(BatterySP.get().isPlugged());
		
		if (null != data) {
			mEmitData.setData(data);
			status = 1;
		}
		mEmitData.setStatus(status);
		DebugLogger.logBattery(mEmitData.toString());
		
		return mEmitData;
	}
	
	public BaseEmitData<Object> getOffline() {
		if (null == mEmitData) {
			mEmitData = new BaseEmitData<>();
		}
		mEmitData.setMsg("响应成功");
		int status = 0;
		
		NetState data = new NetState();
		if (null != data) {
			mEmitData.setData(data);
			status = 1;
		}
		mEmitData.setStatus(status);
		DebugLogger.logBattery(mEmitData.toString());
		
		return mEmitData;
	}
	
	public void postShake() {
	
	}
	
}
