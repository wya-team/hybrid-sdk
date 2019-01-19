package com.wya.hybridexample.permission;

public interface PermissionCallback {
    
    /**
     * @param permissionCheck :
     * @param permissionName  :
     */
    void onPermissionGranted(PermissionCheck permissionCheck, String[] permissionName);
    
    /**
     * @param permissionCheck :
     * @param permissionName  :
     */
    void onPermissionDeclined(PermissionCheck permissionCheck, String[] permissionName);
    
    //void onPermissionPreGranted( String permissionsName);
    
    /**
     * @param permissionCheck :
     * @param permissionName  :
     */
    void onPermissionNeedExplanation(PermissionCheck permissionCheck, String permissionName);
    
    /**
     * the user ever thick-ed the "don't show again"
     */
    void onPermissionReallyDeclined(PermissionCheck permissionCheck, String[] permissionName);
}
