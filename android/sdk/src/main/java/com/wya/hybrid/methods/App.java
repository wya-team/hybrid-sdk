package com.wya.hybrid.methods;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.os.Environment;

import com.arialyy.aria.core.download.DownloadTask;
import com.google.gson.Gson;
import com.wya.hybrid.WYAWebView;
import com.wya.hybrid.methods.bean.installapp.InstallAppData;
import com.wya.hybrid.methods.bean.installed.InstalledData;
import com.wya.hybrid.methods.bean.openapp.OpenAppData;
import com.wya.utils.utils.FileManagerUtil;
import com.wya.utils.utils.PhoneUtil;

import java.io.File;

import static com.wya.utils.utils.FileManagerUtil.TASK_COMPLETE;
import static com.wya.utils.utils.FileManagerUtil.TASK_FAIL;

/**
 * @author : XuDonglin
 * @time : 2019/03/07
 * @describe :
 */
public class App extends HybridMethods {

    private String fileRootPath = Environment.getExternalStorageDirectory().getAbsolutePath();

    public App(Activity mContext, WYAWebView webView) {
        super(mContext, webView);
    }

    /**
     * 判断app是否下载
     *
     * @param id
     * @param data
     */
    public void appInstalled(int id, String data) {
        boolean isAppInstalled = false;
        InstalledData mInstalledAppData = new Gson().fromJson(data, InstalledData.class);
        mInstalledAppData.setScheme("com.wya.shanda");
        if (mInstalledAppData != null && mInstalledAppData.getScheme() != null && !mInstalledAppData.getScheme().equals("")) {
            isAppInstalled = PhoneUtil.getInstance().isApkInstalled(mContext, mInstalledAppData.getScheme());
        }
        setData(1, "响应成功", null);
        mWebView.send(id, getData());
    }

    /**
     * 打开app
     *
     * @param id
     * @param data
     */
    public void openApp(int id, String data) {
        OpenAppData mOpenAppData = new Gson().fromJson(data, OpenAppData.class);
        if (mOpenAppData != null && mOpenAppData.getScheme() != null && !mOpenAppData.getScheme().equals("")) {
            Intent intent = mContext.getPackageManager().getLaunchIntentForPackage(mOpenAppData.getScheme());
            if (intent != null) {
                mContext.startActivity(intent);
                setData(1, "响应成功", null);
                mWebView.send(id, getData());
            } else {
                setData(0, "未安装应用", null);
                mWebView.send(id, getData());
            }
        } else {
            setData(0, "响应失败", null);
            mWebView.send(id, getData());
        }
    }

    /**
     * 下载app
     *
     * @param id
     * @param data
     */
    public void installApp(int id, String data) {
        InstallAppData mInstallAppData = new Gson().fromJson(data, InstallAppData.class);
        FileManagerUtil mFileManagerUtil = new FileManagerUtil();
        if (mInstallAppData != null && mInstallAppData.getUrl() != null && !mInstallAppData.getUrl().equals("") && mInstallAppData.getUrl().contains(".apk")) {
            String fileName = mInstallAppData.getUrl().split("/")[mInstallAppData.getUrl().split("/").length - 1];
            mFileManagerUtil.getDownloadReceiver().load(mInstallAppData.getUrl()).setFilePath(fileRootPath + "/" + fileName).start();
            mFileManagerUtil.setOnDownLoaderListener(new FileManagerUtil.OnDownLoaderListener() {
                @Override
                public void onDownloadState(int state, DownloadTask task, Exception e) {
                    if (state == TASK_COMPLETE) {
                        installAPK(fileRootPath + "/" + fileName);
                        setData(1, "响应成功", null);
                        mWebView.send(id, getData());
                    } else if (state == TASK_FAIL) {
                        setData(0, "下载失败", null);
                        mWebView.send(id, getData());
                    }
                }
            });
        } else {
            setData(0, "下载地址不正确", null);
            mWebView.send(id, getData());
        }
    }

    /**
     * 下载到本地后执行安装
     */
    private void installAPK(String filePath) {
        File apkFile = new File(filePath);
        if (!apkFile.exists()) {
            return;
        }
        Intent intent = new Intent(Intent.ACTION_VIEW);
        // 安装完成后，启动app（源码中少了这句话）
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        Uri uri = Uri.parse("file://" + apkFile.toString());
        intent.setDataAndType(uri, "application/vnd.android.package-archive");
        mContext.startActivity(intent);
    }


    public void uninstall() {

    }

    public void reboot() {

    }
}
