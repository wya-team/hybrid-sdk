package com.wya.hybrid.bean;

import java.util.List;

/**
 * @author : XuDonglin
 * @time : 2019/02/21
 * @describe :
 */
public class ReturnPictureBean {
	private List<PictureUrl> list;

	public List<PictureUrl> getList() {
		return list;
	}

	public void setList(List<PictureUrl> list) {
		this.list = list;
	}

	public static class PictureUrl {
		private String url;
		private String base64;
		private long duration;

		public String getUrl() {
			return url;
		}

		public void setUrl(String url) {
			this.url = url;
		}

		public String getBase64() {
			return base64;
		}

		public void setBase64(String base64) {
			this.base64 = base64;
		}

		public long getDuration() {
			return duration;
		}

		public void setDuration(long duration) {
			this.duration = duration;
		}
	}
}
