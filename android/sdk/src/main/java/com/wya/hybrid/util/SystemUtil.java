package com.wya.hybrid.util;

import android.annotation.SuppressLint;
import android.app.ActivityManager;
import android.content.ComponentName;
import android.content.Context;
import android.content.pm.PackageManager;
import android.net.wifi.WifiInfo;
import android.net.wifi.WifiManager;
import android.os.Build;
import android.telephony.TelephonyManager;
import android.text.TextUtils;

import com.wya.hybrid.base.BaseApp;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.LineNumberReader;
import java.io.Reader;
import java.net.InetAddress;
import java.net.NetworkInterface;
import java.net.SocketException;
import java.util.Enumeration;
import java.util.List;

/**
 * @author :
 */
public class SystemUtil {

    private static final String KEY_VERSION_EMUI = "ro.build.version.emui";

    /**
     * 是否在主进程
     *
     * @param processName ：
     * @return ：
     */
    public static boolean isProcess(String processName) {
        ActivityManager actMgr = (ActivityManager) BaseApp.getApp().getSystemService(Context.ACTIVITY_SERVICE);
        List<ActivityManager.RunningAppProcessInfo> appList = actMgr.getRunningAppProcesses();
        if (appList != null) {
            for (ActivityManager.RunningAppProcessInfo info : appList) {
                if (info.pid == android.os.Process.myPid() && processName.equals(info.processName)) {
                    return true;
                }
            }
        }
        return false;
    }

    /**
     * Description:<b>判断app是否在前台
     *
     * @param context：
     * @return ：
     */
    @Deprecated
    public static boolean isAppOnForeground(Context context) {
        try {
            // Returns a list of application processes that are running on the
            ActivityManager activityManager = (ActivityManager) context.getSystemService(Context.ACTIVITY_SERVICE);
            String packageName = context.getPackageName();
            List<ActivityManager.RunningAppProcessInfo> appProcesses = activityManager.getRunningAppProcesses();
            if (appProcesses == null) {
                return false;
            }
            for (ActivityManager.RunningAppProcessInfo appProcess : appProcesses) {
                // The name of the process that this object is associated with.
                if (appProcess.processName.equals(packageName) && appProcess.importance == ActivityManager.RunningAppProcessInfo.IMPORTANCE_FOREGROUND) {
                    return true;
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return false;
    }

    /**
     * 根据名称判断服务是否已经存在
     *
     * @param context   ：
     * @param className ：
     * @return ：
     */
    public static boolean isServiceExisted(Context context, String className) {
        try {
            ActivityManager activityManager = (ActivityManager) context.getSystemService(Context.ACTIVITY_SERVICE);
            List<ActivityManager.RunningServiceInfo> serviceList = activityManager.getRunningServices(Integer.MAX_VALUE);
            if (!(serviceList.size() > 0)) {
                return false;
            }
            for (int i = 0; i < serviceList.size(); i++) {
                ActivityManager.RunningServiceInfo serviceInfo = serviceList.get(i);
                ComponentName serviceName = serviceInfo.service;
                if (serviceName.getClassName().equals(className)) {
                    return true;
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }

    /**
     * 返回运营商
     * 需要加入权限 <uses-permission android:name="android.permission.READ_PHONE_STATE"/>
     *
     * @param context
     * @return 0 -- 移动,1 -- 联通 ,2 -- 电信 , -1 -- default
     */
    public static int getOperators(Context context) {
        int operatorName = -1;
        String imsi = getIMSI(context);
        if (CheckUtil.isEmpty(imsi)) {
            return operatorName;
        }

        if (imsi.startsWith("46000") || imsi.startsWith("46002") || imsi.startsWith("46007")) {
            operatorName = 0;
        } else if (imsi.startsWith("46001") || imsi.startsWith("46006")) {
            operatorName = 1;
        } else if (imsi.startsWith("46003") || imsi.startsWith("46005")) {
            operatorName = 2;
        }
        return operatorName;
    }

    @SuppressLint("MissingPermission")
    private static String getIMSI(Context context) {
        TelephonyManager telephonyManager = (TelephonyManager) context.getSystemService(Context.TELEPHONY_SERVICE);
        String imsi = "";
        try {
            if (telephonyManager != null) {
                imsi = telephonyManager.getSubscriberId();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return imsi;
    }

    /**
     * getprop  ro.build.version.emui 不为空则为华为设备
     *
     * @return
     */
    public static boolean isEMUI() {
        return CheckUtil.isNotEmpty(getProp(KEY_VERSION_EMUI));
    }

    private static String getProp(String key) {
        String property;
        BufferedReader bufferedReader = null;
        try {
            Process process = Runtime.getRuntime().exec("getprop " + key);
            bufferedReader = new BufferedReader(new InputStreamReader(process.getInputStream()), 1024);
            property = bufferedReader.readLine();
            bufferedReader.close();
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        } finally {
            if (bufferedReader != null) {
                try {
                    bufferedReader.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
        return property;
    }

    /**
     * 获取手机的MAC地址,兼容android 6.0
     *
     * @return :
     */
    public static String getMac() {
        String strMac = null;
        try {
            if (Build.VERSION.SDK_INT < Build.VERSION_CODES.M) {
                strMac = getLocalMacAddressFromWifiInfo(BaseApp.getApp());
            } else if (Build.VERSION.SDK_INT < Build.VERSION_CODES.N && Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
                strMac = getMacAddress(BaseApp.getApp());
            } else if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
                if (!TextUtils.isEmpty(getMacAddress())) {
                    strMac = getMacAddress();
                } else if (!TextUtils.isEmpty(getMachineHardwareAddress())) {
                    strMac = getMachineHardwareAddress();
                } else {
                    strMac = getLocalMacAddressFromBusybox();
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return CheckUtil.isNotEmpty(strMac) ? strMac : "02:00:00:00:00:00";
    }

    /**
     * 根据wifi信息获取本地mac
     *
     * @param context
     * @return
     */
    public static String getLocalMacAddressFromWifiInfo(Context context) {
        try {
            WifiManager wifi = (WifiManager) context.getSystemService(Context.WIFI_SERVICE);
            @SuppressLint("MissingPermission") WifiInfo winfo = wifi.getConnectionInfo();
            String mac = winfo.getMacAddress();
            return mac;
        } catch (Exception e) {
            e.printStackTrace();
            return "";
        }
    }

    /**
     * android 6.0及以上、7.0以下 获取mac地址
     *
     * @param context
     * @return
     */
    public static String getMacAddress(Context context) {
        // 如果是6.0以下，直接通过wifimanager获取
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.M) {
            String macAddress0 = getMacAddress0(context);
            if (!TextUtils.isEmpty(macAddress0)) {
                return macAddress0;
            }
        }
        String str = "";
        String macSerial = "";
        try {
            Process pp = Runtime.getRuntime().exec("cat /sys/class/net/wlan0/address");
            InputStreamReader ir = new InputStreamReader(pp.getInputStream());
            LineNumberReader input = new LineNumberReader(ir);
            for (; null != str; ) {
                str = input.readLine();
                if (str != null) {
                    // 去空格
                    macSerial = str.trim();
                    break;
                }
            }
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        if (CheckUtil.isEmpty(macSerial)) {
            try {
                return loadFileAsString("/sys/class/net/eth0/address").toUpperCase().substring(0, 17);
            } catch (Exception e) {
                e.printStackTrace();
            }

        }
        return macSerial;
    }

    @SuppressLint("MissingPermission")
    private static String getMacAddress0(Context context) {
        try {
            if (isAccessWifiStateAuthorized(context)) {
                WifiManager wifiMgr = (WifiManager) context.getSystemService(Context.WIFI_SERVICE);
                WifiInfo wifiInfo = null;
                try {
                    wifiInfo = wifiMgr.getConnectionInfo();
                    return wifiInfo.getMacAddress();
                } catch (Exception e) {
                    e.printStackTrace();
                }

            }
            return "";
        } catch (Exception e) {
            e.printStackTrace();
            return "";
        }
    }

    /**
     * Check whether accessing wifi state is permitted
     *
     * @param context
     * @return
     */
    private static boolean isAccessWifiStateAuthorized(Context context) {
        return PackageManager.PERMISSION_GRANTED == context.checkCallingOrSelfPermission("android.permission.ACCESS_WIFI_STATE");
    }

    private static String loadFileAsString(String fileName) throws Exception {
        FileReader reader = new FileReader(fileName);
        String text = loadReaderAsString(reader);
        reader.close();
        return text;
    }

    private static String loadReaderAsString(Reader reader) throws Exception {
        StringBuilder builder = new StringBuilder();
        char[] buffer = new char[4096];
        int readLength = reader.read(buffer);
        while (readLength >= 0) {
            builder.append(buffer, 0, readLength);
            readLength = reader.read(buffer);
        }
        return builder.toString();
    }

    /**
     * 根据IP地址获取MAC地址
     *
     * @return
     */
    public static String getMacAddress() {
        String strMacAddr = null;
        try {
            // 获得IpD地址
            InetAddress ip = getLocalInetAddress();
            byte[] b = NetworkInterface.getByInetAddress(ip)
                    .getHardwareAddress();
            StringBuffer buffer = new StringBuffer();
            for (int i = 0; i < b.length; i++) {
                if (i != 0) {
                    buffer.append(':');
                }
                String str = Integer.toHexString(b[i] & 0xFF);
                buffer.append(str.length() == 1 ? 0 + str : str);
            }
            strMacAddr = buffer.toString().toUpperCase();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return strMacAddr;
    }

    /**
     * 获取移动设备本地IP
     *
     * @return
     */
    private static InetAddress getLocalInetAddress() {
        InetAddress ip = null;
        try {
            // 列举
            Enumeration<NetworkInterface> en_netInterface = NetworkInterface
                    .getNetworkInterfaces();
            // 是否还有元素
            while (en_netInterface.hasMoreElements()) {
                // 得到下一个元素
                NetworkInterface ni = en_netInterface.nextElement();
                // 得到一个ip地址的列举
                Enumeration<InetAddress> en_ip = ni.getInetAddresses();
                while (en_ip.hasMoreElements()) {
                    ip = en_ip.nextElement();
                    if (!ip.isLoopbackAddress() && !ip.getHostAddress().contains(":")) {

                        break;
                    } else {
                        ip = null;
                    }
                }

                if (ip != null) {
                    break;
                }
            }
        } catch (SocketException e) {

            e.printStackTrace();
        }
        return ip;
    }

    /**
     * android 7.0及以上 （2）扫描各个网络接口获取mac地址
     * 获取设备HardwareAddress地址
     *
     * @return :
     */
    public static String getMachineHardwareAddress() {
        Enumeration<NetworkInterface> interfaces = null;
        try {
            interfaces = NetworkInterface.getNetworkInterfaces();
        } catch (SocketException e) {
            e.printStackTrace();
        }
        String hardWareAddress = null;
        NetworkInterface iF = null;
        if (interfaces == null) {
            return null;
        }
        while (interfaces.hasMoreElements()) {
            iF = interfaces.nextElement();
            try {
                hardWareAddress = bytesToString(iF.getHardwareAddress());
                if (hardWareAddress != null) {
                    break;
                }
            } catch (SocketException e) {
                e.printStackTrace();
            }
        }
        return hardWareAddress;
    }

    /***
     * byte转为String
     *
     * @param bytes
     * @return
     */
    private static String bytesToString(byte[] bytes) {
        if (bytes == null || bytes.length == 0) {
            return null;
        }
        StringBuilder buf = new StringBuilder();
        for (byte b : bytes) {
            buf.append(String.format("%02X:", b));
        }
        if (buf.length() > 0) {
            buf.deleteCharAt(buf.length() - 1);
        }
        return buf.toString();
    }

    /**
     * 根据busybox获取本地Mac
     *
     * @return
     */
    public static String getLocalMacAddressFromBusybox() {
        String result = "";
        String mac = "";
        try {
            result = callCmd("busybox ifconfig", "HWaddr");
            // 如果返回的result == null，则说明网络不可取
            if (result == null) {
                return "";
            }
            if (result.length() > 0 && result.contains("HWaddr") == true) {
                mac = result.substring(result.indexOf("HWaddr") + 6, result.length() - 1);
                result = mac;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }

    private static String callCmd(String cmd, String filter) {
        String result = "";
        String line = "";
        try {
            Process proc = Runtime.getRuntime().exec(cmd);
            InputStreamReader is = new InputStreamReader(proc.getInputStream());
            BufferedReader br = new BufferedReader(is);

            while ((line = br.readLine()) != null && line.contains(filter) == false) {
                result += line;
            }

            result = line;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return result;
    }

}
