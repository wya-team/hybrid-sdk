package com.wya.hybrid.methods.openwin.bean;

import java.io.Serializable;

/**
 * @date: 2019/2/18 10:44
 * @author: Chunjiang Mao
 * @classname: OpenWinData
 * @describe: Client传递参数给Native
 */
public class OpenWinData implements Serializable {
	/**
	 * window名字
	 */
	private String name;
	/**
	 * navigationBar上的标题
	 */
	private String title;
	/**
	 * 页面地址
	 */
	private String url;
//	/**
//	 * 页面参数
//	 */
//	private PageParam pageParam;
	/**
	 * 是否显示垂直滚动条
	 */
	private boolean vScrollBarEnabled;
	/**
	 * 是否显示水平滚动条
	 */
	private boolean hScrollBarEnabled;
	/**
	 * 页面是否可以缩放
	 */
	private boolean scaleEnabled;
	/**
	 * 是否隐藏原生navigationBar控件
	 */
	private boolean hideTopBar;
	/**
	 * 是否隐藏原生tabBar控件
	 */
	private boolean hideBottomBar;
	/**
	 * 动画参数，不传时使用默认动画
	 */
	private String animation;

	/**
	 * 是否结束当前页面
	 */
	private boolean replace = false;

	public boolean isReplace() {
		return replace;
	}

	public void setReplace(boolean replace) {
		this.replace = replace;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

//	public PageParam getPageParam() {
//		return pageParam;
//	}
//
//	public void setPageParam(PageParam pageParam) {
//		this.pageParam = pageParam;
//	}

	public boolean isvScrollBarEnabled() {
		return vScrollBarEnabled;
	}

	public void setvScrollBarEnabled(boolean vScrollBarEnabled) {
		this.vScrollBarEnabled = vScrollBarEnabled;
	}

	public boolean ishScrollBarEnabled() {
		return hScrollBarEnabled;
	}

	public void sethScrollBarEnabled(boolean hScrollBarEnabled) {
		this.hScrollBarEnabled = hScrollBarEnabled;
	}

	public boolean isScaleEnabled() {
		return scaleEnabled;
	}

	public void setScaleEnabled(boolean scaleEnabled) {
		this.scaleEnabled = scaleEnabled;
	}

	public boolean isHideTopBar() {
		return hideTopBar;
	}

	public void setHideTopBar(boolean hideTopBar) {
		this.hideTopBar = hideTopBar;
	}

	public boolean isHideBottomBar() {
		return hideBottomBar;
	}

	public void setHideBottomBar(boolean hideBottomBar) {
		this.hideBottomBar = hideBottomBar;
	}

	public String getAnimation() {
		return animation;
	}

	public void setAnimation(String animation) {
		this.animation = animation;
	}
}
