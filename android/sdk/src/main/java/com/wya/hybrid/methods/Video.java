package com.wya.hybrid.methods;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.support.v4.content.FileProvider;
import android.webkit.MimeTypeMap;

import com.wya.hybrid.WYAWebView;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.File;

/**
 * @author : XuDonglin
 * @time : 2019/03/07
 * @describe :
 */
public class Video extends HybridMethods {

    public Video(Activity mContext, WYAWebView webView) {
        super(mContext, webView);
    }

    /**
     * 打开系统视频播放器
     *
     * @param data
     * @param id
     */
    public void openVideo(int id, String data) {
        String url = "";
        try {
            JSONObject jsonObject = new JSONObject(data.replaceAll("\\\\", ""));
            url = jsonObject.getString("url");
        } catch (JSONException e) {
            e.printStackTrace();
        }

        if (url.startsWith("http://") || url.startsWith("https://")) {

            String extension = MimeTypeMap.getFileExtensionFromUrl(url);
            String mimeType = MimeTypeMap.getSingleton().getMimeTypeFromExtension(extension);
            Intent mediaIntent = new Intent(Intent.ACTION_VIEW);
            mediaIntent.setDataAndType(Uri.parse(url), mimeType);
            mContext.startActivity(mediaIntent);
        } else {
            Uri uri;
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.N) {
                uri = FileProvider.getUriForFile(mContext, mContext.getPackageName() + ".fileprovider", new File(url));
            } else {
                uri = Uri.fromFile(new File(url));
            }
            Intent intent = new Intent(Intent.ACTION_VIEW);
            intent.setDataAndType(uri, "video/*");
            mContext.startActivity(intent);
        }

        setData(1, "响应成功", null);
        mWebView.send(id, getData());
    }

}
