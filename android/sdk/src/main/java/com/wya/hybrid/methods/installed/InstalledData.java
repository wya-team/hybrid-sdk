package com.wya.hybrid.methods.installed;

/**
 * @date: 2019/2/19 15:56
 * @author: Chunjiang Mao
 * @classname: InstalledData
 * @describe:
 */
public class InstalledData {
	/**
	 * 执行结果的返回方式。为false时通过callback返回，为true时直接返回。
	 */
	private boolean sync;
	/**
	 * scheme 或 包名
	 */
	private String scheme;

	public boolean isSync() {
		return sync;
	}

	public void setSync(boolean sync) {
		this.sync = sync;
	}

	public String getScheme() {
		return scheme;
	}

	public void setScheme(String scheme) {
		this.scheme = scheme;
	}
}
