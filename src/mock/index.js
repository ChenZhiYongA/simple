/*
 * Copyright(C),sira
 * Author: sira  j2922592097@gmail.com
 * Date: 2022-01-27 09:10:27
 * Version: 0.0.0.1
 * Description: package to Mock Data
*/
import Mock from 'mockjs'
import tableData from './test/index'
import articleList from './article/index'
import articleInfo from './article/articleDetails'
Mock.mock('mock/test', 'post', tableData)
Mock.mock('mock/article', 'get', articleList)
Mock.mock('mock/articleInfo', 'get', articleInfo)
