//
//  WYASortAddressBook.h
//  AFNetworking
//
//  Created by 李俊恒 on 2019/2/20.
//

#import <Foundation/Foundation.h>

NS_ASSUME_NONNULL_BEGIN

@interface WYASortAddressBook : NSObject

/**
 获取排序后的数组

 @param array 需要排序的数组存放对象为字典
 @return 返回一个排序号的数组
 */
- (NSArray *)wya_dealDataWithArray:(NSArray *)array;
@end

NS_ASSUME_NONNULL_END
