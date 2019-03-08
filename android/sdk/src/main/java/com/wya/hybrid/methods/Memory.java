package com.wya.hybrid.methods;

import android.app.Activity;
import android.content.Context;
import android.os.Environment;
import android.os.StatFs;
import android.text.format.Formatter;

import com.google.gson.Gson;
import com.wya.hybrid.WYAWebView;
import com.wya.hybrid.methods.bean.cache.CacheData;
import com.wya.hybrid.methods.bean.cache.SpaceData;
import com.wya.utils.utils.DataCleanUtil;

import java.io.File;

/**
 * @author : XuDonglin
 * @time : 2019/03/07
 * @describe :
 */
public class Memory extends HybridMethods {

    private CacheData mCacheData;

    public Memory(Activity mContext, WYAWebView webView) {
        super(mContext, webView);
    }

    /**
     * 清理缓存
     *
     * @param id
     * @param data
     */
    public  void clearCache( int id, String data) {
        CacheData mCacheData = new Gson().fromJson(data, CacheData.class);
        if (mCacheData != null && mCacheData.getPath() != null && !mCacheData.getPath().equals("")) {
            DataCleanUtil.cleanCustomCache(mCacheData.getPath());
            setData(1, "响应成功", null);
            mWebView.send(id, getData());
        } else {
            setData(0, "路径错误", null);
            mWebView.send(id, getData());
        }
    }

    /**
     * 获取缓存占用空间大小
     *
     * @param id
     * @param data
     */
    public void getCacheSize(int id, String data) {
        mCacheData = new Gson().fromJson(data, CacheData.class);
        if (mCacheData != null && mCacheData.getPath() != null && !mCacheData.getPath().equals("")) {
            File file = new File(mCacheData.getPath());
            if (file.exists()) {
                long size = DataCleanUtil.getFolderSize(file);
                setData(1, "响应成功", null);
                mWebView.send(id, getData());
            } else {
                setData(0, "文件不存在", null);
                mWebView.send(id, getData());
            }
        } else {
            setData(0, "路径错误", null);
            mWebView.send(id, getData());
        }
    }


    /**
     * `
     * 获取剩余存储空间
     *
     * @param id
     * @param data
     */
    public void getFreeDiskSpace( int id, String data) {
        mCacheData = new Gson().fromJson(data, CacheData.class);
        if (mCacheData != null && mCacheData.getType() != null && !mCacheData.getType().equals("")) {
            long freeDiskSpace = 0;
            SpaceData freeDiskSpaceData = new SpaceData();
            switch (mCacheData.getType()) {
                case "dataDir":
                    freeDiskSpace = getAvailableInternalMemorySize(mContext);
                    freeDiskSpaceData.setSize(String.valueOf(freeDiskSpace));
                    freeDiskSpaceData.setLabel(Formatter.formatFileSize(mContext, freeDiskSpace));
                    setData(1, "响应成功", null);
                    mWebView.send(id, getData());
                    break;
                case "storageDir":
                    if (isExternalStorageAvailable()) {
                        freeDiskSpace = getAvailableExternalMemorySize(mContext);
                        freeDiskSpaceData.setSize(String.valueOf(freeDiskSpace));
                        freeDiskSpaceData.setLabel(Formatter.formatFileSize(mContext, freeDiskSpace));
                        setData(1, "响应成功", null);
                        mWebView.send(id, getData());
                    } else {
                        setData(0, "SD卡异常", null);
                        mWebView.send(id, getData());
                    }
                    break;
                case "total":
                    freeDiskSpace = getAvailableExternalMemorySize(mContext) + getAvailableInternalMemorySize(mContext);
                    freeDiskSpaceData.setSize(String.valueOf(freeDiskSpace));
                    freeDiskSpaceData.setLabel(Formatter.formatFileSize(mContext, freeDiskSpace));
                    setData(1, "响应成功", null);
                    mWebView.send(id, getData());
                    break;
                default:
                    break;
            }
        } else {
            setData(0, "路径错误", null);
            mWebView.send(id, getData());
        }
    }

    /**
     * 获取总存储空间大小
     *
     * @param id
     * @param data
     */
    public void getTotalSpace( int id, String data) {
        mCacheData = new Gson().fromJson(data, CacheData.class);
        if (mCacheData != null && mCacheData.getType() != null && !mCacheData.getType().equals("")) {
            long totalSpace = 0;
            SpaceData totalSpaceData = new SpaceData();
            switch (mCacheData.getType()) {
                case "dataDir":
                    totalSpace = getInternalMemorySize(mContext);
                    totalSpaceData.setSize(String.valueOf(totalSpace));
                    totalSpaceData.setLabel(Formatter.formatFileSize(mContext, totalSpace));
                    setData(1, "响应成功", null);
                    mWebView.send(id, getData());
                    break;
                case "storageDir":
                    if (isExternalStorageAvailable()) {
                        totalSpace = getExternalMemorySize(mContext);
                        totalSpaceData.setSize(String.valueOf(totalSpace));
                        totalSpaceData.setLabel(Formatter.formatFileSize(mContext, totalSpace));
                        setData(1, "响应成功", null);
                        mWebView.send(id, getData());
                    } else {
                        setData(0, "SD卡异常", null);
                        mWebView.send(id, getData());
                    }
                    break;
                case "total":
                    totalSpace = getExternalMemorySize(mContext) + getInternalMemorySize(mContext);
                    totalSpaceData.setSize(String.valueOf(totalSpace));
                    totalSpaceData.setLabel(Formatter.formatFileSize(mContext, totalSpace));         setData(1, "响应成功", null);
                    mWebView.send(id, getData());
                    break;
                default:
                    break;
            }
        } else {
            setData(0, "路径错误", null);
            mWebView.send(id, getData());
        }
    }

    /**
     * 判断sd卡是否可用
     */
    private boolean isExternalStorageAvailable() {
        return Environment.getExternalStorageState().equals(
                Environment.MEDIA_MOUNTED);
    }

    /**
     * 获取手机内部存储空间
     *
     * @param context
     * @return 以B为单位的容量
     */
    private long getInternalMemorySize(Context context) {
        File file = Environment.getDataDirectory();
        StatFs statFs = new StatFs(file.getPath());
        long blockSizeLong = statFs.getBlockSizeLong();
        long blockCountLong = statFs.getBlockCountLong();
        long size = blockCountLong * blockSizeLong;
        return size;
    }

    /**
     * 获取手机内部可用存储空间
     *
     * @param context
     * @return 以B为单位的容量
     */
    private long getAvailableInternalMemorySize(Context context) {
        File file = Environment.getDataDirectory();
        StatFs statFs = new StatFs(file.getPath());
        long availableBlocksLong = statFs.getAvailableBlocksLong();
        long blockSizeLong = statFs.getBlockSizeLong();
        long size = availableBlocksLong * blockSizeLong;
        return size;
    }

    /**
     * 获取手机外部存储空间
     *
     * @param context
     * @return 以B为单位的容量
     */
    public long getExternalMemorySize(Context context) {
        File file = Environment.getExternalStorageDirectory();
        StatFs statFs = new StatFs(file.getPath());
        long blockSizeLong = statFs.getBlockSizeLong();
        long blockCountLong = statFs.getBlockCountLong();
        long size = blockSizeLong * blockCountLong;
        return size;
    }

    /**
     * 获取手机外部可用存储空间
     *
     * @param context
     * @return 以B单位的容量
     */
    private long getAvailableExternalMemorySize(Context context) {
        File file = Environment.getExternalStorageDirectory();
        StatFs statFs = new StatFs(file.getPath());
        long availableBlocksLong = statFs.getAvailableBlocksLong();
        long blockSizeLong = statFs.getBlockSizeLong();
        long size = blockSizeLong * availableBlocksLong;
        return size;
    }

}
