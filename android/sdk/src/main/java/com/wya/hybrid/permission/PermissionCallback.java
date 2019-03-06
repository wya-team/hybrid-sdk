package com.wya.hybrid.permission;

/**
 * @author :
 */
public interface PermissionCallback {
	
	/**
	 * onPermissionGranted
	 *
	 * @param permissionCheck :
	 * @param permissionName  :
	 */
	void onPermissionGranted(PermissionCheck permissionCheck, String[] permissionName);
	
	/**
	 * onPermissionDeclined
	 *
	 * @param permissionCheck :
	 * @param permissionName  :
	 */
	void onPermissionDeclined(PermissionCheck permissionCheck, String[] permissionName);
	
	//void onPermissionPreGranted( String permissionsName);
	
	/**
	 * onPermissionNeedExplanation
	 *
	 * @param permissionCheck :
	 * @param permissionName  :
	 */
	void onPermissionNeedExplanation(PermissionCheck permissionCheck, String permissionName);
	
	/**
	 * onPermissionReallyDeclined
	 *
	 * @param permissionCheck :
	 * @param permissionName  :
	 */
	void onPermissionReallyDeclined(PermissionCheck permissionCheck, String[] permissionName);
}
