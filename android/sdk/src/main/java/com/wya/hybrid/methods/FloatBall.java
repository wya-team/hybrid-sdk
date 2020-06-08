package com.wya.hybrid.methods;

import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.view.View;
import android.view.animation.AccelerateInterpolator;
import android.widget.ImageView;
import android.widget.Toast;

import com.bumptech.glide.Glide;
import com.bumptech.glide.request.RequestOptions;
import com.wya.hybrid.R;
import com.wya.hybrid.WYAWebView;
import com.wya.hybrid.floatwindow.FloatWindow;
import com.wya.hybrid.floatwindow.IFloatWindow;
import com.wya.hybrid.floatwindow.MoveType;
import com.wya.hybrid.floatwindow.PermissionUtil;
import com.wya.hybrid.floatwindow.Screen;
import com.wya.utils.utils.ScreenUtil;

/**
 * @author : XuDonglin
 * @time : 2019/03/07
 * @describe :
 */
public class FloatBall extends HybridMethods {
    public FloatBall(Activity mContext, WYAWebView webView) {
        super(mContext, webView);
    }

    /**
     * 显示悬浮球
     * @param id
     * @param data
     */
    public void showFloatBox(int id, String data) {
        if (PermissionUtil.hasPermission(mContext)) {
            IFloatWindow old = FloatWindow.get("old");
            if (old == null) {
                IFloatWindow cancel2 = FloatWindow.get("cancel2");
                if (cancel2 == null) {
                    FloatWindow
                            .with(mContext.getApplicationContext())
                            .setTag("cancel2")
                            .setView(R.layout.layout_window)
                            .setCancelParam2(320)
                            .setMoveType(MoveType.inactive, 0, 0)
                            .setDesktopShow(false)
                            .build();
                }
                IFloatWindow cancel = FloatWindow.get("cancel");
                if (cancel == null) {
                    FloatWindow
                            .with(mContext.getApplicationContext())
                            .setTag("cancel")
                            .setView(R.layout.layout_window)
                            .setCancelParam2(300)
                            .setMoveType(MoveType.inactive, 0, 0)
                            .setDesktopShow(false)
                            .build();
                }

                ImageView imageView = new ImageView(mContext);
                RequestOptions requestOptions = RequestOptions.circleCropTransform();
                Glide.with(mContext.getApplicationContext())
                        .load("http://pic43.nipic.com/20140711/19187786_140828149528_2.jpg")
                        .apply(requestOptions).into(imageView);

                FloatWindow
                        .with(mContext.getApplicationContext())
                        .setTag("old")
                        .setView(imageView)
                        .setMoveType(MoveType.slide, 0, 0)
                        .setWidth(60)
                        .setFilter(false, mContext.getClass())
                        .setHeight(60)
                        .setX(Screen.width, 0.8f)
                        .setY(ScreenUtil.getScreenHeight(mContext) / 3)
                        .setParentHeight(ScreenUtil.getScreenHeight(mContext))
                        .setMoveStyle(300, new AccelerateInterpolator())
                        .setDesktopShow(false)
                        .build();
                imageView.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        v.getContext().startActivity(new Intent(mContext.getApplicationContext(), mContext.getClass()));
                    }
                });
                mContext.finish();
            } else {
                mContext.finish();
            }
            setData(1, "响应成功", null);
            mWebView.send(id, getData());
        } else {
            Toast.makeText(mContext, "没有浮窗权限！", Toast.LENGTH_SHORT).show();
            Intent localIntent = new Intent();
            localIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            if (Build.VERSION.SDK_INT >= 9) {
                localIntent.setAction("android.settings.APPLICATION_DETAILS_SETTINGS");
                localIntent.setData(Uri.fromParts("package", mContext.getPackageName(), null));
            } else if (Build.VERSION.SDK_INT <= 8) {
                localIntent.setAction(Intent.ACTION_VIEW);
                localIntent.setClassName("com.android.settings", "com.android.settings.InstalledAppDetails");
                localIntent.putExtra("com.android.settings.ApplicationPkgName", mContext.getPackageName());
            }
            mContext.startActivity(localIntent);
        }

    }
    public void hideFloatBox(int id, String data) {
    }
}
