package com.wya.hybrid.methods;

import android.app.Activity;
import android.media.MediaPlayer;
import android.os.Environment;

import com.google.gson.Gson;
import com.wya.hybrid.WYAWebView;
import com.wya.hybrid.methods.bean.audio.AudioBean;

/**
 * @author : XuDonglin
 * @time : 2019/03/07
 * @describe :
 */
public class Audio extends HybridMethods {

    private MediaPlayer mMediaPlayer;
    private String basePath= Environment.getExternalStorageDirectory().getPath();


    public Audio(Activity mContext, WYAWebView webView) {
        super(mContext, webView);
    }

    /**
     * 停止播放本地音频
     */
    public void stopPlay(int id, String data) {
        if (mMediaPlayer == null) {
            return;
        }
        mMediaPlayer.stop();
        mMediaPlayer.release();
        mMediaPlayer = null;
        setData(1, "响应成功", null);
        mWebView.send(id, getData());
    }

    /**
     * 播放本地音频
     */
    public void startPlay(int id, String data) {
        String path = null;
//        try {
//            JSONObject jsonObject = new JSONObject(data.replaceAll("\\\\", ""));
//            path = jsonObject.getString("path");
//        } catch (JSONException e) {
//            e.printStackTrace();
//        }

        AudioBean audioBean = new Gson().fromJson(data, AudioBean.class);
        path = audioBean.getPath();

        mMediaPlayer = new MediaPlayer();
        try {
            mMediaPlayer.setDataSource(basePath+path);
            mMediaPlayer.prepareAsync();
            mMediaPlayer.setOnPreparedListener(new MediaPlayer.OnPreparedListener() {
                @Override
                public void onPrepared(MediaPlayer mp) {
                    mMediaPlayer.start();
                    setData(1, "响应成功", null);
                    mWebView.send(id, getData());
                }
            });

        } catch (Exception e) {
            e.printStackTrace();
            setData(0, "无效的音频地址", null);
            mWebView.send(id, getData());
        }
    }

    public void pause(int id, String data) {

    }

    public void resume(int id, String data) {

    }

    public void restart(int id, String data) {

    }

}
