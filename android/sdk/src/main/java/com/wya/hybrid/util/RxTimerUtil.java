package com.wya.hybrid.util;

import java.util.concurrent.TimeUnit;

import io.reactivex.Observable;
import io.reactivex.Observer;
import io.reactivex.android.schedulers.AndroidSchedulers;
import io.reactivex.disposables.Disposable;
/**
 * @author :
 */
public class RxTimerUtil {

    private static Disposable mDisposable;

    public static void timer(long millinseconds, final IRxCallable next) {
        Observable.timer(millinseconds, TimeUnit.MILLISECONDS)
                .observeOn(AndroidSchedulers.mainThread())
                .subscribe(
                        new Observer<Long>() {
                            @Override
                            public void onSubscribe(Disposable d) {
                                mDisposable = d;
                            }

                            @Override
                            public void onNext(Long aLong) {
                                if (null != next) {
                                    next.doNext(aLong);
                                }
                            }

                            @Override
                            public void onError(Throwable e) {
                                cancel();
                            }

                            @Override
                            public void onComplete() {
                                cancel();
                            }
                        }
                );
    }

    public static void interval(long milliseconds, final IRxCallable next) {
        Observable.interval(milliseconds, TimeUnit.MICROSECONDS)
                .observeOn(AndroidSchedulers.mainThread())
                .subscribe(
                        new Observer<Long>() {
                            @Override
                            public void onSubscribe(Disposable d) {
                                mDisposable = d;
                            }

                            @Override
                            public void onNext(Long aLong) {
                                if (null != next) {
                                    next.doNext(aLong);
                                }
                            }

                            @Override
                            public void onError(Throwable e) {

                            }

                            @Override
                            public void onComplete() {

                            }
                        }
                );
    }

    public static void cancel() {
        if (null != mDisposable && mDisposable.isDisposed()) {
            mDisposable.dispose();
        }
    }

    public interface IRxCallable {
        void doNext(long aLong);
    }
}
