/*
 * Copyright(C),sira
 * Author: sira  j2922592097@gmail.com
 * Date: 2022-02-02 12:16:08
 * Version: 0.0.0.1
 * Description: Get ArticleDetails info's Api
*/

import Mock from 'mockjs' // import mockjs

const Random = Mock.Random //import 'Mock.Random' generate random data

let data = {
    code:200,
    message:'success',
    data:{
        'title': Random.string(2, 10), // generate random String between 2-10
        'date': Random.date(), // generate random Date
        'content': Random.paragraph(2, 300), //generate random paragraph Text between 2-5
        'Name': Random.name(), // generate random Name
        'url': Random.url(), // generate random Web Url
        'address': Random.province() // generate random Address
    }
}

export default data;
