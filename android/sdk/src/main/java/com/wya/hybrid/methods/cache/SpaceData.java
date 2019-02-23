package com.wya.hybrid.methods.cache;

/**
 * @date: 2019/2/20 16:03
 * @author: Chunjiang Mao
 * @classname: SpaceData
 * @describe:
 */
public class SpaceData {
	/**
	 * 缓存空间大小 单位byte
	 */
	private String size;
	/**
	 * 缓存空间大小 已转化
	 */
	private String label;

	public String getSize() {
		return size;
	}

	public void setSize(String size) {
		this.size = size;
	}

	public String getLabel() {
		return label;
	}

	public void setLabel(String label) {
		this.label = label;
	}
}
