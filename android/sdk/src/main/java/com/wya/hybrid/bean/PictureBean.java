package com.wya.hybrid.bean;

/**
 * @author : XuDonglin
 * @time : 2019/02/21
 * @describe :
 */
public class PictureBean {
	private String sourceType = "camera";
	private String encodingType = "png";
	private String mediaValue = "pic";
	private String destinationType = "url";
	private boolean direction = true;
	private int quality = 50;
	private String videoQuality = "high";
	private int targetWidth = 600;
	private int targetHeight = 600;
	private boolean saveToPhotoAlbum = true;
	private String groupName = "Recordings";

	public String getSourceType() {
		return sourceType;
	}

	public void setSourceType(String sourceType) {
		this.sourceType = sourceType;
	}

	public String getEncodingType() {
		return encodingType;
	}

	public void setEncodingType(String encodingType) {
		this.encodingType = encodingType;
	}

	public String getMediaValue() {
		return mediaValue;
	}

	public void setMediaValue(String mediaValue) {
		this.mediaValue = mediaValue;
	}

	public String getDestinationType() {
		return destinationType;
	}

	public void setDestinationType(String destinationType) {
		this.destinationType = destinationType;
	}

	public boolean isDirection() {
		return direction;
	}

	public void setDirection(boolean direction) {
		this.direction = direction;
	}

	public int getQuality() {
		return quality;
	}

	public void setQuality(int quality) {
		this.quality = quality;
	}

	public String getVideoQuality() {
		return videoQuality;
	}

	public void setVideoQuality(String videoQuality) {
		this.videoQuality = videoQuality;
	}

	public int getTargetWidth() {
		return targetWidth;
	}

	public void setTargetWidth(int targetWidth) {
		this.targetWidth = targetWidth;
	}

	public int getTargetHeight() {
		return targetHeight;
	}

	public void setTargetHeight(int targetHeight) {
		this.targetHeight = targetHeight;
	}

	public boolean isSaveToPhotoAlbum() {
		return saveToPhotoAlbum;
	}

	public void setSaveToPhotoAlbum(boolean saveToPhotoAlbum) {
		this.saveToPhotoAlbum = saveToPhotoAlbum;
	}

	public String isGroupName() {
		return groupName;
	}

	public void setGroupName(String groupName) {
		this.groupName = groupName;
	}
}
