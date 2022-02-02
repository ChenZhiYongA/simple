/*
 * Copyright(C),sira
 * Author: sira  j2922592097@gmail.com
 * Date: 2022-01-26 23:14:58
 * Version: 0.0.0.1
 * Description: The Test Api Page
*/
import request from '@/utils/request'
export function test(data) {
    return request({
        url: 'mock/test',
        method: 'post',
        data
    })
}
