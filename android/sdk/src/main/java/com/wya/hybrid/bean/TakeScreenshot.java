package com.wya.hybrid.bean;

/**
 * @author :
 */
public class TakeScreenshot {
    
    public static final String EVENT_TAKE_SCREENSHOT = "takeScreenshot";
    
    /**
     * // TODO: 2019/1/19 是否回传图片待定
     */
    private String image;
    
    public String getImage() {
        return image;
    }
    
    public void setImage(String image) {
        this.image = image;
    }
    
    @Override
    public String toString() {
        return "TakeScreenshot{" +
                "image='" + image + '\'' +
                '}';
    }
    
}
