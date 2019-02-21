//
//  WYASortAddressBook.m
//  AFNetworking
//
//  Created by 李俊恒 on 2019/2/20.
//

#import "WYASortAddressBook.h"
@interface WYASortAddressBook()
@property(nonatomic, strong) NSMutableArray * dataSource;
@end
@implementation WYASortAddressBook
- (NSString *)returnFirstWordWithString:(NSString *)str{
    NSMutableString * muStr = [NSMutableString stringWithString:str];
    // 将muStr中的汉字转化为带音标的拼音（如果是汉字就转，不是就保持原样）
    CFStringTransform((__bridge CFMutableStringRef)muStr, NULL, kCFStringTransformMandarinLatin, NO);
    //将带有音标的拼音转换成不带音标的拼音（这一步是从上一步的挤出来的，所以这两句话一句也不能少）
    CFStringTransform((__bridge CFMutableStringRef)muStr, NULL, kCFStringTransformStripCombiningMarks, NO);
    if (muStr.length > 0 && ![muStr isEqualToString:@""]) {
        // 全部转换为大写 取出首字母并返回
        NSString * res = [[muStr uppercaseString] substringToIndex:1];
        return res;
    }
    return @" ";
}

- (NSArray *)wya_dealDataWithArray:(NSArray *)array{

    self.dataSource = [NSMutableArray array];

    NSMutableArray * tempArray = [NSMutableArray array];
    // 创建分组
    for (NSInteger i = 0; i < 27; i++) {
        // 给临时数组中创建27个数组作为元素，用来存放A-Z和#开头的联系人
        NSMutableArray * valueArray = [NSMutableArray array];
        [tempArray addObject:valueArray];
    }


    // 遍历分组
    for (NSDictionary * dict in array) {
        NSString * name = [[dict allValues] firstObject];
        NSString * nickName = [self returnFirstWordWithString:name];
        int firstWord = [nickName characterAtIndex:0];
        // 把字典放到对应的数组中
        if (firstWord >= 65 && firstWord <=90) {
            // 如果是A~Z直接放到对应的数组中去
            NSMutableArray * tepArray = tempArray[firstWord - 65];
            [tepArray addObject:dict];
        }else{
            // 放到最后一个代表#的数组中
            NSMutableArray * tepArray =[tempArray lastObject];
            [tepArray addObject:dict];
        }
    }

    // 遍历数组删掉空数组
    for (NSMutableArray * tepArray in tempArray) {
        // 如果数组不为空就添加到数据源中
        if (tepArray.count != 0) {
            [self.dataSource addObject:tepArray];
        }
    }
    
    return [self.dataSource copy];
}

@end
