package com.wya.hybrid.data.event;

/**
 * @author :
 */
public class ForegroundEvent {

    /**
     * 应用进入后台
     */
    private boolean isPause;

    /**
     * 应用从后台回到前台
     */
    private boolean isResume;

    public boolean isPause() {
        return isPause;
    }

    public void setPause(boolean pause) {
        isPause = pause;
    }

    public boolean isResume() {
        return isResume;
    }

    public void setResume(boolean resume) {
        isResume = resume;
    }

}
