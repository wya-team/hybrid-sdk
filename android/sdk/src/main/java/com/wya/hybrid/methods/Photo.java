package com.wya.hybrid.methods;

import android.app.Activity;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.media.MediaMetadataRetriever;
import android.net.Uri;
import android.os.Bundle;
import android.os.Environment;

import com.arialyy.aria.core.download.DownloadTask;
import com.google.gson.Gson;
import com.wya.hardware.camera.WYACameraView;
import com.wya.hybrid.WYAWebView;
import com.wya.hybrid.bean.PictureBean;
import com.wya.hybrid.bean.ReturnPictureBean;
import com.wya.hybrid.data.event.PhotoResultEvent;
import com.wya.hybrid.nativeUI.CameraActivity;
import com.wya.uikit.imagepicker.ImagePickerCreator;
import com.wya.uikit.imagepicker.PickerConfig;
import com.wya.utils.utils.FileManagerUtil;

import org.greenrobot.eventbus.Subscribe;
import org.greenrobot.eventbus.ThreadMode;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import static android.app.Activity.RESULT_OK;
import static com.wya.utils.utils.FileManagerUtil.TASK_COMPLETE;
import static com.wya.utils.utils.FileManagerUtil.TASK_FAIL;

/**
 * @author : XuDonglin
 * @time : 2019/03/07
 * @describe :
 */
public class Photo extends HybridMethods {
    private static final int CAMERA_PIC_REQUEST = 100;
    private static final int CAMERA_VIDEO_REQUEST = 101;
    private static final int ALBUM_PIC_REQUEST = 102;
    private static final int ALBUM_VIDEO_REQUEST = 103;

    private boolean saveToPhotoAlbum;
    private PictureBean mPictureBean;
    private int picId;

    public Photo(Activity mContext, WYAWebView webView) {
        super(mContext, webView);
    }

    public void getPicture(int id, String data) {
        picId = id;
        mPictureBean = new Gson().fromJson(data.replaceAll("\\\\", ""), PictureBean.class);
        saveToPhotoAlbum = mPictureBean.isSaveToPhotoAlbum();
        if ("camera".equals(mPictureBean.getSourceType())) {
            switch (mPictureBean.getMediaValue()) {
                case "pic":
                    Intent intent = new Intent(mContext, CameraActivity.class);
                    intent.putExtra("state", WYACameraView.BUTTON_STATE_ONLY_CAPTURE);
                    intent.putExtra("duration", 1000);
                    intent.putExtra("direction", mPictureBean.isDirection());
                    intent.putExtra("videoQuality", mPictureBean.getVideoQuality());
                    mContext.startActivityForResult(intent, CAMERA_PIC_REQUEST);
                    break;
                case "video":
                    Intent intent2 = new Intent(mContext, CameraActivity.class);
                    intent2.putExtra("state", WYACameraView.BUTTON_STATE_ONLY_RECORDER);
                    intent2.putExtra("duration", 10000);
                    intent2.putExtra("direction", mPictureBean.isDirection());
                    intent2.putExtra("videoQuality", mPictureBean.getVideoQuality());
                    mContext.startActivityForResult(intent2, CAMERA_VIDEO_REQUEST);
                    break;
                default:
                    break;
            }
        } else {

            switch (mPictureBean.getMediaValue()) {
                case "pic":
                    ImagePickerCreator
                            .create(mContext)
                            .setMediaType(PickerConfig.MEDIA_IMAGE)
                            .maxImages(1)
                            .forResult(ALBUM_PIC_REQUEST);
                    break;
                case "video":
                    ImagePickerCreator
                            .create(mContext)
                            .setMediaType(PickerConfig.MEDIA_VIDEO)
                            .maxImages(1)
                            .forResult(ALBUM_VIDEO_REQUEST);
                    break;
                default:
                    break;
            }
        }

    }

    /**
     * 保存图片或视频
     *
     * @param data
     * @param id
     */
    public void savePicture(int id, String data) {
        //参数残缺，缺少判断是否是图片的字段
        String url = null;
        String groupName = null;
        try {
            JSONObject jsonObject = new JSONObject(data.replaceAll("\\\\", ""));
            url = jsonObject.getString("url");
            groupName = jsonObject.getString("groupName");
        } catch (JSONException e) {
            e.printStackTrace();
        }

//		"http://pic43.nipic.com/20140711/19187786_140828149528_2.jpg"
//		Environment.getExternalStorageDirectory().getPath() + "/Recordings/test.jpg"
        FileManagerUtil mFileManagerUtil = new FileManagerUtil();
        mFileManagerUtil.getDownloadReceiver().
                load(url).
                setFilePath(groupName).start();
        mFileManagerUtil.setOnDownLoaderListener(new FileManagerUtil.OnDownLoaderListener() {
            @Override
            public void onDownloadState(int state, DownloadTask task, Exception e) {
                if (state == TASK_COMPLETE) {
                    setData(1, "响应成功", null);
                    mWebView.send(id, getData());
                } else if (state == TASK_FAIL) {
                    setData(0, "下载失败", null);
                    mWebView.send(id, getData());
                }
            }
        });

    }

    @Subscribe(threadMode = ThreadMode.MAIN)
    public void onEvent(PhotoResultEvent photoResultEvent) {
        onActivityResult(photoResultEvent.getRequestCod(),photoResultEvent.getResultCode(),photoResultEvent.getData());
    }

    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        switch (requestCode) {
            case CAMERA_PIC_REQUEST:
                if (resultCode == RESULT_OK) {
                    String path = data.getStringExtra("path");

                    if (saveToPhotoAlbum) {
                        final File file = new File(path);
                        mContext.sendBroadcast(new Intent(Intent.ACTION_MEDIA_SCANNER_SCAN_FILE, Uri.fromFile(file)));
                    }

                    ReturnPictureBean returnPictureBean = new ReturnPictureBean();
                    ReturnPictureBean.PictureUrl pictureUrl = new ReturnPictureBean.PictureUrl();
                    pictureUrl.setUrl(saveTransferImage(path));
                    List<ReturnPictureBean.PictureUrl> list = new ArrayList<>();
                    list.add(pictureUrl);
                    returnPictureBean.setList(list);
                    setData(1, "响应成功", returnPictureBean);
                    mWebView.send(picId, getData());
                }
                break;
            case CAMERA_VIDEO_REQUEST:
                if (resultCode == RESULT_OK) {
                    String path = data.getStringExtra("url");
                    if (saveToPhotoAlbum) {
                        final File file = new File(path);
                        mContext.sendBroadcast(new Intent(Intent.ACTION_MEDIA_SCANNER_SCAN_FILE, Uri.fromFile(file)));
                    }
                    ReturnPictureBean returnPictureBean = new ReturnPictureBean();
                    ReturnPictureBean.PictureUrl pictureUrl = new ReturnPictureBean.PictureUrl();
                    pictureUrl.setUrl(path);
                    MediaMetadataRetriever metadataRetriever = new MediaMetadataRetriever();
                    metadataRetriever.setDataSource(path);
                    String duration = metadataRetriever.extractMetadata(android.media.MediaMetadataRetriever
                            .METADATA_KEY_DURATION);
                    pictureUrl.setDuration(Long.parseLong(duration));
                    metadataRetriever.release();
                    List<ReturnPictureBean.PictureUrl> list = new ArrayList<>();
                    list.add(pictureUrl);
                    returnPictureBean.setList(list);
                    setData(1, "响应成功", returnPictureBean);
                    mWebView.send(picId, getData());
                }
                break;
            case ALBUM_PIC_REQUEST:
                if (resultCode == RESULT_OK) {
                    if (data != null && data.hasExtra(PickerConfig.IMAGE_SELECTED)) {
                        Bundle extras = data.getExtras();
                        ArrayList<String> lists = extras.getStringArrayList(PickerConfig.IMAGE_SELECTED);

                        ReturnPictureBean returnPictureBean = new ReturnPictureBean();
                        ReturnPictureBean.PictureUrl pictureUrl = new ReturnPictureBean.PictureUrl();
                        List<ReturnPictureBean.PictureUrl> list = new ArrayList<>();
                        for (String path : lists) {
                            pictureUrl.setUrl(saveTransferImage(path));
                            list.add(pictureUrl);
                        }
                        returnPictureBean.setList(list);
                        setData(1, "响应成功", returnPictureBean);
                        mWebView.send(picId, getData());
                    }
                }
                break;
            case ALBUM_VIDEO_REQUEST:
                if (resultCode == RESULT_OK) {
                    if (data != null && data.hasExtra(PickerConfig.IMAGE_SELECTED)) {
                        Bundle extras = data.getExtras();
                        ArrayList<String> lists = extras.getStringArrayList(PickerConfig.IMAGE_SELECTED);

                        ReturnPictureBean returnPictureBean = new ReturnPictureBean();
                        ReturnPictureBean.PictureUrl pictureUrl = new ReturnPictureBean.PictureUrl();
                        List<ReturnPictureBean.PictureUrl> list = new ArrayList<>();

                        pictureUrl.setUrl(lists.get(0));
                        list.add(pictureUrl);
                        MediaMetadataRetriever metadataRetriever = new MediaMetadataRetriever();
                        metadataRetriever.setDataSource(lists.get(0));
                        String duration = metadataRetriever.extractMetadata(android.media.MediaMetadataRetriever
                                .METADATA_KEY_DURATION);
                        pictureUrl.setDuration(Long.parseLong(duration));
                        metadataRetriever.release();
                        returnPictureBean.setList(list);
                        setData(1, "响应成功", returnPictureBean);
                        mWebView.send(picId, getData());
                    }
                }
                break;
            default:
                break;
        }
    }

    /**
     *
     * 保存指定类型的图片
     * @param path
     * @return
     */
    private String saveTransferImage(String path) {
        String encodingType = mPictureBean.getEncodingType();
        BitmapFactory.Options newOpts = new BitmapFactory.Options();
        // 开始读入图片，此时把options.inJustDecodeBounds 设回true了
        newOpts.inJustDecodeBounds = true;
        Bitmap bitmap = BitmapFactory.decodeFile(path, newOpts);
        newOpts.inJustDecodeBounds = false;
        int w = newOpts.outWidth;
        int h = newOpts.outHeight;
        // 现在主流手机比较多是800*480分辨率，所以高和宽我们设置为
        float hh = Float.parseFloat(mPictureBean.getTargetHeight());
        float ww = Float.parseFloat(mPictureBean.getTargetWidth());
        // 缩放比。由于是固定比例缩放，只用高或者宽其中一个数据进行计算即可
        int be = 1;
        if (w > h && w > ww) {
            be = (int) (newOpts.outWidth / ww);
        } else if (w < h && h > hh) {
            be = (int) (newOpts.outHeight / hh);
        }
        if (be <= 0) {
            be = 1;
        }
        newOpts.inSampleSize = be;
        // 重新读入图片，注意此时已经把options.inJustDecodeBounds 设回false了
        bitmap = BitmapFactory.decodeFile(path, newOpts);

        String changePath = null;
        try {

            switch (encodingType) {
                case "png":
                    File file = new File(Environment.getExternalStorageDirectory().getPath() + "/Recordings/" + System.currentTimeMillis() + ".png");
                    FileOutputStream out = new FileOutputStream(file);
                    changePath = file.getPath();
                    bitmap.compress(Bitmap.CompressFormat.PNG, 100, out);
                    out.flush();
                    out.close();
                    break;
                case "jpg":
                    File file1 = new File(Environment.getExternalStorageDirectory().getPath() + "/Recordings/" + System.currentTimeMillis() + ".jpg");
                    FileOutputStream out1 = new FileOutputStream(file1);
                    changePath = file1.getPath();
                    bitmap.compress(Bitmap.CompressFormat.JPEG, mPictureBean.getQuality(), out1);
                    out1.flush();
                    out1.close();
                    break;
                default:
                    break;
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

        return changePath;
    }

}
