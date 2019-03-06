package com.wya.hybrid.control;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.BatteryManager;

import com.wya.hybrid.data.event.BatteryEvent;
import com.wya.hybrid.data.sp.BatterySp;
import com.wya.hybrid.util.log.DebugLogger;

import org.greenrobot.eventbus.EventBus;

/**
 * @author :
 */
public class BatteryReceiver extends BroadcastReceiver {
	
	private static final String KEY_LEVEL = "level";
	private static final String KEY_SCALE = "scale";
	private static final String KEY_STATUS = "status";
	private static final String KEY_HEALTH = "health";
	private static final int LOW_BATTERY = 20;
	
	@Override
	public void onReceive(Context context, Intent intent) {
		
		int rawLevel = intent.getIntExtra(KEY_LEVEL, -1);
		int scale = intent.getIntExtra(KEY_SCALE, -1);
		int status = intent.getIntExtra(KEY_STATUS, -1);
		int health = intent.getIntExtra(KEY_HEALTH, -1);
		int level = -1;
		if (rawLevel >= 0 && scale > 0) {
			level = (rawLevel * 100) / scale;
		}
		
		boolean isCharging = status == BatteryManager.BATTERY_STATUS_CHARGING
			|| status == BatteryManager.BATTERY_STATUS_FULL;
		
		BatterySp.get().setIsPlugged(isCharging);
		BatterySp.get().setLevel(level);
		
		DebugLogger.logBattery("onReceive level = %s", level);
		DebugLogger.logBattery("onReceive isPlugged = %s", !isCharging);
		
		BatteryEvent event = new BatteryEvent();
		event.setIsPlugged(isCharging);
		event.setLevel(level);
		
		if (BatteryManager.BATTERY_HEALTH_OVERHEAT == health) {
			DebugLogger.logBattery(" === BATTERY_HEALTH_OVERHEAT === ");
		} else {
			switch (status) {
				case BatteryManager.BATTERY_STATUS_UNKNOWN:
					DebugLogger.logBattery("no battery.");
					break;
				case BatteryManager.BATTERY_STATUS_CHARGING:
					if (level <= LOW_BATTERY) {
						DebugLogger.logBattery("is charging, battery level is low" + "[" + level + "]");
						event.setBatteryLow(true);
					} else {
						event.setBatteryLow(false);
					}
					break;
				case BatteryManager.BATTERY_STATUS_DISCHARGING:
				case BatteryManager.BATTERY_STATUS_NOT_CHARGING:
					if (level == 0) {
						DebugLogger.logBattery("needs charging right away.");
					} else if (level > 0 && level <= LOW_BATTERY) {
						DebugLogger.logBattery("is about ready to be recharged, battery level is low" + "[" + level + "]");
						event.setBatteryLow(true);
					} else {
						event.setBatteryLow(false);
						DebugLogger.logBattery("s battery level is" + "[" + level + "]");
					}
					break;
				case BatteryManager.BATTERY_STATUS_FULL:
					DebugLogger.logBattery("is fully charged.");
					break;
				default:
					DebugLogger.logBattery("s battery is indescribable!");
					break;
			}
		}
		EventBus.getDefault().postSticky(event);
	}
}
