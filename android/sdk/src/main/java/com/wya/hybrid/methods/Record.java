package com.wya.hybrid.methods;

import android.app.Activity;
import android.media.MediaPlayer;
import android.media.MediaRecorder;
import android.text.TextUtils;

import com.wya.hybrid.WYAWebView;
import com.wya.hybrid.bean.RecordBean;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;

/**
 * @author : XuDonglin
 * @time : 2019/03/07
 * @describe :
 */
public class Record extends HybridMethods {

    private String recordPath;

    private MediaRecorder mRecorder;
    public Record(Activity mContext, WYAWebView webView) {
        super(mContext, webView);
    }

    /**
     * 开始录音
     */
    public void startRecording( int id, String data) {
        String path = null;
        try {
            JSONObject jsonObject = new JSONObject(data);
            path = jsonObject.getString("url");
        } catch (JSONException e) {
            e.printStackTrace();
        }
        path = TextUtils.isEmpty(path) ? "/storage/emulated/0/Recordings/" + System.currentTimeMillis() + ".amr"
                : path + System.currentTimeMillis() + ".amr";

        mRecorder = new MediaRecorder();
        mRecorder.setAudioSource(MediaRecorder.AudioSource.MIC);
        //设置封装格式
        mRecorder.setOutputFormat(MediaRecorder.OutputFormat.THREE_GPP);
        mRecorder.setOutputFile(path);
        //设置编码格式
        mRecorder.setAudioEncoder(MediaRecorder.AudioEncoder.AMR_NB);

        try {
            mRecorder.prepare();
        } catch (IOException e) {
//			Log.e(TAG, "prepare() failed");
        }
        //录音
        mRecorder.start();

        recordPath = path;
        RecordBean recordBean = new RecordBean();
        recordBean.setPath(path);
        setData(1, "响应成功", recordBean);
        mWebView.send(id, getData());
    }

    /**
     * 停止录音
     */
    public void stopRecording(int id, String data) {
        if (mRecorder == null) {
            return;
        }
        mRecorder.stop();
        mRecorder.release();
        mRecorder = null;
        MediaPlayer mediaPlayer = new MediaPlayer();
        try {
            mediaPlayer.setDataSource(recordPath);
            mediaPlayer.prepare();
        } catch (IOException e) {
            e.printStackTrace();
        }
        int duration = mediaPlayer.getDuration();

        RecordBean recordBean = new RecordBean();
        recordBean.setPath(recordPath);
        recordBean.setDuration(duration);
        setData(1, "响应成功", recordBean);
        mWebView.send(id, getData());
    }


    public void pause(int id, String data) {

    }

    public void resume(int id, String data) {

    }

    public void restart(int id, String data) {

    }
}
