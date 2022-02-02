/*
 * Copyright(C),sira
 * Author: sira  j2922592097@gmail.com
 * Date: 2022-02-01 20:32:12
 * Version: 0.0.0.1
 * Description: article Apis
*/
import request from '@/utils/request'
export function article(data) {
  return request({
    url: 'mock/article',
    method: 'GET',
    params:data
  })
}
