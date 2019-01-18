package com.wya.example.control;

import android.content.Context;
import android.database.ContentObserver;
import android.database.Cursor;
import android.graphics.BitmapFactory;
import android.graphics.Point;
import android.net.Uri;
import android.os.Build;
import android.os.Handler;
import android.provider.MediaStore;
import android.text.TextUtils;
import android.util.Log;
import android.view.Display;
import android.view.WindowManager;

import com.wya.example.base.BaseApp;

import java.lang.reflect.Method;

public class ScreenShotListenManager {
	public static final String TAG = ScreenShotListenManager.class.getSimpleName();
	
	private enum Singleton {
		INSTANCE;
		private ScreenShotListenManager singleton;
		
		Singleton() {
			singleton = new ScreenShotListenManager();
		}
		
		public ScreenShotListenManager getInstance() {
			return singleton;
		}
	}
	
	public static ScreenShotListenManager get() {
		return Singleton.INSTANCE.getInstance();
	}
	
	/**
	 * 读取媒体数据库时需要读取的列
	 */
	private static final String[] MEDIA_PROJECTIONS = {
		MediaStore.Images.ImageColumns.DATA,
		MediaStore.Images.ImageColumns.DATE_TAKEN,
	};
	/**
	 * 读取媒体数据库时需要读取的列
	 */
	private static final String[] MEDIA_PROJECTIONS_API_16 = {
		MediaStore.Images.ImageColumns.DATA,
		MediaStore.Images.ImageColumns.DATE_TAKEN,
		MediaStore.Images.ImageColumns.WIDTH,
		MediaStore.Images.ImageColumns.HEIGHT,
	};
	/**
	 * 是否属于截图的关键字判断
	 */
	private static final String[] KEYWORDS = {
		"screenshot", "screen_shot", "screen-shot", "screen shot",
		"screencapture", "screen_capture", "screen-capture", "screen capture",
		"screencap", "screen_cap", "screen-cap", "screen cap"
	};
	private Context mContext;
	private Handler mHandler;
	private Point mScreenRealSize;
	
	private ScreenShotListenManager() {
		mContext = BaseApp.getApp();//application context  自己想办法从自己项目中获取 也可以从外部调用传递
		mHandler = new Handler(BaseApp.getApp().getMainLooper());
		// 获取屏幕真实的分辨率
		if (mScreenRealSize == null) {
			mScreenRealSize = getRealScreenSize();
		}
	}
	
	/**
	 * 内部存储器内容观察者
	 */
	private MediaContentObserver mInternalObserver;
	/**
	 * 外部存储器内容观察者
	 */
	private MediaContentObserver mExternalObserver;
	
	/**
	 * 启动监听
	 */
	public void startListen() {
		Log.e(TAG, "startListen");
		
		// 创建内容观察者
		mInternalObserver = new MediaContentObserver(MediaStore.Images.Media.INTERNAL_CONTENT_URI, mHandler);
		mExternalObserver = new MediaContentObserver(MediaStore.Images.Media.EXTERNAL_CONTENT_URI, mHandler);
		// 注册内容观察者
		mContext.getContentResolver().registerContentObserver(MediaStore.Images.Media.INTERNAL_CONTENT_URI, false, mInternalObserver);
		mContext.getContentResolver().registerContentObserver(MediaStore.Images.Media.EXTERNAL_CONTENT_URI, false, mExternalObserver);
	}
	
	/**
	 * 获取屏幕真实分辨率
	 */
	private Point getRealScreenSize() {
		Point screenSize = null;
		try {
			screenSize = new Point();
			WindowManager windowManager = (WindowManager) mContext.getSystemService(Context.WINDOW_SERVICE);
			Display defaultDisplay = windowManager.getDefaultDisplay();
			if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN_MR1) {
				defaultDisplay.getRealSize(screenSize);
			} else {
				try {
					Method mGetRawW = Display.class.getMethod("getRawWidth");
					Method mGetRawH = Display.class.getMethod("getRawHeight");
					screenSize.set(
						(Integer) mGetRawW.invoke(defaultDisplay),
						(Integer) mGetRawH.invoke(defaultDisplay)
					);
				} catch (Exception e) {
					screenSize.set(defaultDisplay.getWidth(), defaultDisplay.getHeight());
					e.printStackTrace();
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return screenSize;
	}
	
	/**
	 * 处理媒体数据库的内容改变
	 */
	private void handleMediaContentChange(Uri contentUri) {
		Cursor cursor = null;
		try {
			// 数据改变时查询数据库中最后加入的一条数据
			cursor = mContext.getContentResolver().query(
				contentUri,
				Build.VERSION.SDK_INT < 16 ? MEDIA_PROJECTIONS : MEDIA_PROJECTIONS_API_16,
				null,
				null,
				MediaStore.Images.ImageColumns.DATE_ADDED + " desc limit 1"
			);
			if (cursor == null) {
				Log.e(TAG, "Deviant logic.");
				return;
			}
			if (!cursor.moveToFirst()) {
				Log.d(TAG, "Cursor no data.");
				return;
			}
			// 获取各列的索引
			int dataIndex = cursor.getColumnIndex(MediaStore.Images.ImageColumns.DATA);
			int dateTakenIndex = cursor.getColumnIndex(MediaStore.Images.ImageColumns.DATE_TAKEN);
			int widthIndex = -1;
			int heightIndex = -1;
			if (Build.VERSION.SDK_INT >= 16) {
				widthIndex = cursor.getColumnIndex(MediaStore.Images.ImageColumns.WIDTH);
				heightIndex = cursor.getColumnIndex(MediaStore.Images.ImageColumns.HEIGHT);
			}
			// 获取行数据
			String data = cursor.getString(dataIndex);
			long dateTaken = cursor.getLong(dateTakenIndex);
			int width = 0;
			int height = 0;
			if (widthIndex >= 0 && heightIndex >= 0) {
				width = cursor.getInt(widthIndex);
				height = cursor.getInt(heightIndex);
			} else {
				// API 16 之前, 宽高要手动获取
				Point size = getImageSize(data);
				width = size.x;
				height = size.y;
			}
			// 处理获取到的第一行数据
			handleMediaRowData(data, dateTaken, width, height);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (cursor != null && !cursor.isClosed()) {
				cursor.close();
			}
		}
	}
	
	/**
	 * 判断指定的数据行是否符合截屏条件
	 */
	private boolean checkScreenShot(String data, long dateTaken, int width, int height) {
		/*
		 * 1:根据图片的尺寸判断
		 */
		if (mScreenRealSize != null) {
			// 如果图片尺寸超出屏幕, 则认为当前没有截屏
			if (!((width <= mScreenRealSize.x && height <= mScreenRealSize.y)
				||
				(height <= mScreenRealSize.x && width <= mScreenRealSize.y))) {
				return false;
			}
		}
		/*
		 * 2:根据路径判断
		 */
		if (TextUtils.isEmpty(data)) {
			return false;
		}
		/**
		 * 3:根据关键字判断
		 */
		data = data.toLowerCase();
		// 判断图片路径是否含有指定的关键字之一, 如果有, 则认为当前截屏了
		for (String keyWork : KEYWORDS) {
			if (data.contains(keyWork)) {
				/**
				 * 4:根据app的可视情况判断
				 * 这个说明一下 ActivityManager 是我自己管理的 类似的东西百度一下就好 我这里就不上传ActivityManager的代码了。就是在baseactivity生命周期中加入的监听
				 */
				// TODO: 2019/1/18 ZCQ TET
				//				if (ActivityManager.getInstance().appIsResume()) {//当前app处于可视状态
				//					return true;
				//				}
				return false;
			}
		}
		return false;
	}
	
	/**
	 * 处理获取到的一行数据
	 */
	private void handleMediaRowData(String data, long dateTaken, int width, int height) {
		if (checkScreenShot(data, dateTaken, width, height)) {
			Log.d(TAG, "ScreenShot: path = " + data + "; size = " + width + " * " + height
				+ "; date = " + dateTaken);
			//			handlerShotImg(data, width, height);
		} else {
			// 如果在观察区间媒体数据库有数据改变，又不符合截屏规则，则输出到 log 待分析
			Log.w(TAG, "Media content changed, but not screenshot: path = " + data
				+ "; size = " + width + " * " + height + "; date = " + dateTaken);
		}
	}
	
	/**
	 * 截屏的图片 处理
	 *
	 * @param data
	 * @param width
	 * @param height
	 */
	//	private void handlerShotImg(String data, int width, int height) {
	//		//ThreadPool.getInstance().execute 替换为开一个新线程即可
	//		ThreadPool.getInstance().execute(8, () -> {
	//			int topHeight = height;
	//			if (AppUtils.hasNavigationBar() && AppUtils.isNavigationBarShow()) {
	//				//有虚拟键 并且虚拟键在显示
	//				topHeight -= AppUtils.getNavigationBarHeight();
	//			}
	//			int padding = DensityUtil.dip2px(15);
	//			//处理图片
	//			//缩放图片至和屏幕宽度一致
	//			Bitmap watermarkBitmap = BitmapFactory.decodeResource(mContext.getResources(), R.mipmap.xpro_ic_snap_logo);
	//			Bitmap sourceBitmap = BitmapFactory.decodeFile(data);
	//			float scale = (width - padding * 2.0f) / watermarkBitmap.getWidth();
	//			int bottomHeight = (int) (watermarkBitmap.getHeight() * scale);
	//			int totalHeight = topHeight + bottomHeight + padding * 2;
	//			Bitmap bitmap = Bitmap.createBitmap(width, totalHeight, Bitmap.Config.ARGB_8888);
	//			Canvas canvas = new Canvas(bitmap);
	//			Paint whitePaint = new Paint();
	//			whitePaint.setColor(Color.WHITE);
	//			canvas.drawBitmap(sourceBitmap, 0, 0, null);
	//			canvas.drawRect(0, topHeight, width, totalHeight, whitePaint);
	//			Matrix matrix = new Matrix();
	//			matrix.postScale(scale, scale);
	//			matrix.postTranslate(padding, padding + topHeight);
	//			canvas.drawBitmap(watermarkBitmap, matrix, null);
	//			// 保存
	//			canvas.save(Canvas.ALL_SAVE_FLAG);
	//			// 存储
	//			canvas.restore();
	//			FileOutputStream fos;
	//			try {
	//				File file = new File(CacheFileManager.get().getFile("screenHot"), System.currentTimeMillis() + ".jpg");
	//				fos = new FileOutputStream(file);
	//				bitmap.compress(Bitmap.CompressFormat.JPEG, 100, fos);
	//				fos.flush();
	//				fos.close();
	//				mHandler.post(() -> {
	//					AppUtils.startActivity(ActivityManager.getInstance().getTopActivity(),
	//						ScreenShotShowActivity.class, "data", file.getAbsolutePath());
	//				});
	//			} catch (Exception e) {
	//				e.printStackTrace();
	//			}
	//		});
	//	}
	
	/**
	 * 获取图片尺寸
	 *
	 * @param imagePath
	 * @return
	 */
	private Point getImageSize(String imagePath) {
		BitmapFactory.Options options = new BitmapFactory.Options();
		options.inJustDecodeBounds = true;
		BitmapFactory.decodeFile(imagePath, options);
		return new Point(options.outWidth, options.outHeight);
	}
	
	/**
	 * 媒体内容观察者(观察媒体数据库的改变)
	 */
	private class MediaContentObserver extends ContentObserver {
		private Uri mContentUri;
		
		public MediaContentObserver(Uri contentUri, Handler handler) {
			super(handler);
			mContentUri = contentUri;
		}
		
		@Override
		public void onChange(boolean selfChange) {
			super.onChange(selfChange);
			handleMediaContentChange(mContentUri);
		}
	}
}
