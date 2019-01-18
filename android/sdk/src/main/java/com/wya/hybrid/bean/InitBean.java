package com.wya.hybrid.bean;

/**
 * @author : XuDonglin
 * @time : 2019/01/18
 * @describe :
 */
public class InitBean {
	private String appId;
	private String appName;
	private String appVersion;
	private String systemType = "android";
	private String systemVersion;
	private String deviceId;
	private String deviceToken;
	private String deviceModel;
	private String deviceName;
	private String uiMode;
	private String operatorName;
	private String connectionType;
	private int screenWidth;
	private int screenHeight;

	// TODO: 2019-01-18 没有理解一下参数

	private String winName;
	private String winWidth;
	private String winHeight;
	private String frameName;
	private String frameWidth;
	private String frameHeight;
	private SafeAreaBean safeArea;
	private PageParamBean pageParam;
	private AppParamBean appParam;
	private boolean  statusBarAppearance;
	private String wgtRootDir;
	private String fsDir;
	private String cacheDir;
	private boolean debug;
	private String channel;
	private String jailbreak;

	public static class SafeAreaBean {
		private int left;
		private int top;
		private int right;
		private int bottom;
	}

	public static class PageParamBean {
		private String name;
	}
	public static class WidgetParamBean{
		private String name;
	}
	public static class AppParamBean{
		private String name;
	}



	public String getAppId() {
		return appId;
	}

	public void setAppId(String appId) {
		this.appId = appId;
	}

	public String getAppName() {
		return appName;
	}

	public void setAppName(String appName) {
		this.appName = appName;
	}

	public String getAppVersion() {
		return appVersion;
	}

	public void setAppVersion(String appVersion) {
		this.appVersion = appVersion;
	}

	public String getSystemType() {
		return systemType;
	}

	public void setSystemType(String systemType) {
		this.systemType = systemType;
	}

	public String getSystemVersion() {
		return systemVersion;
	}

	public void setSystemVersion(String systemVersion) {
		this.systemVersion = systemVersion;
	}

	public String getDeviceId() {
		return deviceId;
	}

	public void setDeviceId(String deviceId) {
		this.deviceId = deviceId;
	}

	public String getDeviceToken() {
		return deviceToken;
	}

	public void setDeviceToken(String deviceToken) {
		this.deviceToken = deviceToken;
	}

	public String getDeviceModel() {
		return deviceModel;
	}

	public void setDeviceModel(String deviceModel) {
		this.deviceModel = deviceModel;
	}

	public String getDeviceName() {
		return deviceName;
	}

	public void setDeviceName(String deviceName) {
		this.deviceName = deviceName;
	}

	public String getUiMode() {
		return uiMode;
	}

	public void setUiMode(String uiMode) {
		this.uiMode = uiMode;
	}

	public String getOperatorName() {
		return operatorName;
	}

	public void setOperatorName(String operatorName) {
		this.operatorName = operatorName;
	}

	public String getConnectionType() {
		return connectionType;
	}

	public void setConnectionType(String connectionType) {
		this.connectionType = connectionType;
	}

	public int getScreenWidth() {
		return screenWidth;
	}

	public void setScreenWidth(int screenWidth) {
		this.screenWidth = screenWidth;
	}

	public int getScreenHeight() {
		return screenHeight;
	}

	public void setScreenHeight(int screenHeight) {
		this.screenHeight = screenHeight;
	}

	public String getWinName() {
		return winName;
	}

	public void setWinName(String winName) {
		this.winName = winName;
	}

	public String getWinWidth() {
		return winWidth;
	}

	public void setWinWidth(String winWidth) {
		this.winWidth = winWidth;
	}

	public String getWinHeight() {
		return winHeight;
	}

	public void setWinHeight(String winHeight) {
		this.winHeight = winHeight;
	}

	public String getFrameName() {
		return frameName;
	}

	public void setFrameName(String frameName) {
		this.frameName = frameName;
	}

	public String getFrameWidth() {
		return frameWidth;
	}

	public void setFrameWidth(String frameWidth) {
		this.frameWidth = frameWidth;
	}

	public String getFrameHeight() {
		return frameHeight;
	}

	public void setFrameHeight(String frameHeight) {
		this.frameHeight = frameHeight;
	}

	public SafeAreaBean getSafeArea() {
		return safeArea;
	}

	public void setSafeArea(SafeAreaBean safeArea) {
		this.safeArea = safeArea;
	}

	public PageParamBean getPageParam() {
		return pageParam;
	}

	public void setPageParam(PageParamBean pageParam) {
		this.pageParam = pageParam;
	}

	public AppParamBean getAppParam() {
		return appParam;
	}

	public void setAppParam(AppParamBean appParam) {
		this.appParam = appParam;
	}

	public boolean isStatusBarAppearance() {
		return statusBarAppearance;
	}

	public void setStatusBarAppearance(boolean statusBarAppearance) {
		this.statusBarAppearance = statusBarAppearance;
	}

	public String getWgtRootDir() {
		return wgtRootDir;
	}

	public void setWgtRootDir(String wgtRootDir) {
		this.wgtRootDir = wgtRootDir;
	}

	public String getFsDir() {
		return fsDir;
	}

	public void setFsDir(String fsDir) {
		this.fsDir = fsDir;
	}

	public String getCacheDir() {
		return cacheDir;
	}

	public void setCacheDir(String cacheDir) {
		this.cacheDir = cacheDir;
	}

	public boolean isDebug() {
		return debug;
	}

	public void setDebug(boolean debug) {
		this.debug = debug;
	}

	public String getChannel() {
		return channel;
	}

	public void setChannel(String channel) {
		this.channel = channel;
	}

	public String getJailbreak() {
		return jailbreak;
	}

	public void setJailbreak(String jailbreak) {
		this.jailbreak = jailbreak;
	}

}
