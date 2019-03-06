package com.wya.hybrid.bean;

import java.util.List;

/**
 * @author : XuDonglin
 * @time : 2019/02/23
 * @describe :
 */
public class ContactsBean {
	private List<Contacts> list;

	public List<Contacts> getList() {
		return list;
	}

	public void setList(List<Contacts> list) {
		this.list = list;
	}

	public static class Contacts {
		private String name;
		private String phone;

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public String getPhone() {
			return phone;
		}

		public void setPhone(String phone) {
			this.phone = phone;
		}
	}
}
