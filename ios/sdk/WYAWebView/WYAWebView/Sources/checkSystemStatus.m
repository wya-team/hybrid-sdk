//
//  checkSystemStatus.m
//  Alamofire
//
//  Created by 李世航 on 2018/8/17.
//

#import "checkSystemStatus.h"

#import <sys/stat.h>
#import <dlfcn.h>


@implementation checkSystemStatus

int checkInject() {
    int ret;
    Dl_info dylib_info;
    int (*func_stat)(const char*, struct stat*) = stat;
    char *dylib_name = "/usr/lib/system/libsystem_kernel.dylib";
    if ((ret = dladdr(func_stat, &dylib_info)) && strncmp(dylib_info.dli_fname, dylib_name, strlen(dylib_name))) {
        return 0;
    }
    return 1;
}

int checkCydia() {
    struct stat stat_info;
    if (!checkInject()) {
        if (0 == stat("/Applications/Cydia.app", &stat_info)) {
            return 1;
        }
    } else {
        return 1;
    }
    return 0;
}

char* printEnv(void) {
    char *env = getenv("DYLD_INSERT_LIBRARIES");
    NSLog(@"%s", env);
    return env;
}

+ (BOOL)isJailBreak{
    
    NSArray * jailbreak_tool_paths = @[
                                       @"/Applications/Cydia.app",
                                       @"/Library/MobileSubstrate/MobileSubstrate.dylib",
                                       @"/bin/bash",
                                       @"/usr/sbin/sshd",
                                       @"/etc/apt"
                                       ];
    
    for (int i=0; i<jailbreak_tool_paths.count; i++) {
        if ([[NSFileManager defaultManager] fileExistsAtPath:jailbreak_tool_paths[i]]) {
            NSLog(@"The device is jail broken!");
            return YES;
        }
    }
    
    if ([[UIApplication sharedApplication] canOpenURL:[NSURL URLWithString:@"cydia://"]]) {
        NSLog(@"The device is jail broken!");
        return YES;
    }
    
    if ([[NSFileManager defaultManager] fileExistsAtPath:@"User/Applications/"]) {
        NSLog(@"The device is jail broken!");
        NSArray *appList = [[NSFileManager defaultManager] contentsOfDirectoryAtPath:@"User/Applications/" error:nil];
        NSLog(@"appList = %@", appList);
        return YES;
    }
    
    if (checkCydia() == 0) {
        return YES;
    }
    
    if (checkInject() == 0) {
        return YES;
    }
    
    if (printEnv()) {
        return YES;
    }
    
    return NO;
}


@end
