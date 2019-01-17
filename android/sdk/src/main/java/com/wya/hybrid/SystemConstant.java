package com.wya.hybrid;

/**
 * @date: 2019/1/17 11:33
 * @author: Chunjiang Mao
 * @classname: SystemConstant
 * @describe: 系统常量
 */
public class SystemConstant {
	/**
	 * 1 成功 ， 0 失败
	 */
	private int status;
	/**
	 * 版本号
	 */
	private String version;

	public int getStatus() {
		return status;
	}

	public void setStatus(int status) {
		this.status = status;
	}

	public String getVersion() {
		return version;
	}

	public void setVersion(String version) {
		this.version = version;
	}
}
