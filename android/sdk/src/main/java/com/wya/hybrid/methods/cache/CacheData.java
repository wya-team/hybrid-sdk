package com.wya.hybrid.methods.cache;

/**
 * @date: 2019/2/20 9:07
 * @author: Chunjiang Mao
 * @classname: CacheData
 * @describe:
 */
public class CacheData {
	/**
	 * 缓存路径
	 */
	private String path;

	/**
	 * 获取存储类型
	 * dataDir(内部存储)；storageDir(外部存储)；total(全部)
	 */
	private String type;

	public String getPath() {
		return path;
	}

	public void setPath(String path) {
		this.path = path;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

}
