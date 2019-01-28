package com.wya.hybrid.base;

import android.app.Activity;
import android.app.Application;
import android.os.Bundle;

import java.lang.ref.WeakReference;
import java.util.Stack;
/**
 * Description:
 * activity 全局管理栈
 *
 * @author :
 */
public class ActivityManager {

    private static ActivityManager mInstance;
    private Stack<Activity> mActivityStack;
    private static WeakReference<Activity> mTopActivityWeakRef;
    private boolean mIsForeground;

    public boolean isForeground() {
        return mIsForeground;
    }

    private ActivityManager() {
    }

    private ActivityManager(Application app) {
        app.registerActivityLifecycleCallbacks(new Application.ActivityLifecycleCallbacks() {
            @Override
            public void onActivityCreated(Activity activity, Bundle savedInstanceState) {
                if (mActivityStack == null) {
                    mActivityStack = new Stack<>();
                }
                mActivityStack.add(activity);
                setTopActivityWeakRef(activity);
            }

            @Override
            public void onActivityStarted(Activity activity) {
                setTopActivityWeakRef(activity);
            }

            @Override
            public void onActivityResumed(Activity activity) {
                setTopActivityWeakRef(activity);
                mIsForeground = true;
            }

            @Override
            public void onActivityPaused(Activity activity) {
                if (null == getTopActivity() || getTopActivity() == activity) {
                    mIsForeground = false;
                }
            }

            @Override
            public void onActivityStopped(Activity activity) {
            }

            @Override
            public void onActivitySaveInstanceState(Activity activity, Bundle outState) {

            }

            @Override
            public void onActivityDestroyed(Activity activity) {
                if (null != mActivityStack && !mActivityStack.isEmpty() && null != activity) {
                    mActivityStack.remove(activity);
                }
            }
        });
    }

    public static ActivityManager getInstance() {
        return mInstance;
    }

    public static void init(Application application) {
        if (null == application) {
            return;
        }

        if (null == mInstance) {
            synchronized (ActivityManager.class) {
                mInstance = new ActivityManager(application);
            }
        }
    }

    private static void setTopActivityWeakRef(final Activity activity) {
        if (null == activity || activity.isFinishing()) {
            return;
        }
        if (null == mTopActivityWeakRef || !activity.equals(mTopActivityWeakRef.get())) {
            mTopActivityWeakRef = new WeakReference<>(activity);
        }
    }

    /**
     * Description:
     * 获取当前栈顶Activity，优先取弱引用
     *
     * @return :
     */
    public Activity getTopActivity() {
        if (null == mActivityStack || mActivityStack.isEmpty()) {
            return null;
        }
        try {
            if (null != mTopActivityWeakRef) {
                Activity activity = mTopActivityWeakRef.get();
                if (activity != null) {
                    return activity;
                }
            }
            return mActivityStack.peek();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    /**
     * Description:
     * 获取指定Activity，没有找到则返回null，注意该方法获取的activity要自行规避好内存泄露的风险！！！
     *
     * @param className : 要获取的activity
     * @return :
     */
    public Activity getActivity(Class<?> className) {
        if (null == mActivityStack || mActivityStack.isEmpty()) {
            return null;
        }
        try {
            Activity activity = null;
            for (Activity act : mActivityStack) {
                if (act.getClass().equals(className)) {
                    activity = act;
                    break;
                }
            }
            return activity;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    /**
     * 结束当前栈顶Activity
     */
    public void finishTopActivity() {
        if (null == mActivityStack || mActivityStack.isEmpty()) {
            return;
        }
        try {
            Activity activity = mActivityStack.lastElement();
            if (activity != null) {
                finishActivity(activity);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * 结束指定的Activity(重载)
     */
    public void finishActivity(Activity activity) {
        if (null == mActivityStack || mActivityStack.isEmpty()) {
            return;
        }
        try {
            if (activity != null) {
                activity.finish();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * 关闭指定activity之后入栈的所有act
     *
     * @param className :
     */
    public void popOthersActivity(Class<?> className) {
        if (null == mActivityStack || mActivityStack.isEmpty()) {
            return;
        }
        try {
            for (int i = mActivityStack.size() - 1; i >= 0; --i) {
                Activity act = mActivityStack.get(i);
                if (act.getClass().equals(className)) {
                    return;
                }
                finishActivity(act);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * 关闭所有activity
     */
    public void exitApp() {
        try {
            for (Activity activity : mActivityStack) {
                finishActivity(activity);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
