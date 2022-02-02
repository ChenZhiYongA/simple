/*
 * Copyright(C),sira
 * Author: sira  j2922592097@gmail.com
 * Date: 2022-01-27 09:23:26
 * Version: 0.0.0.1
 * Description: test's Mock Data
*/
import Mock from 'mockjs' // import mockjs

const Random = Mock.Random //import 'Mock.Random' generate random data

let data = {
    code:200,
    message:'success',
    data:[]
}

for (let i = 0; i < 10; i++) { //
    let template = {
        'Boolean': Random.boolean, // generate random data type 'Boolean'
        'Natural': Random.natural(1, 10), // generate random 1-100
        'Integer': Random.integer(1, 100), // generate random integer of 1-100
        'Float': Random.float(0, 100, 0, 5), // generate random float of 0.1-0.00001
        'Character': Random.character(), // generate random float of String
        'String': Random.string(2, 10), // generate random String between 2-10
        'Range': Random.range(0, 10, 2), // generate random Array
        'Date': Random.date(), // generate random Date
        'Color': Random.color(), // generate random Colors
        'Paragraph': Random.paragraph(2, 5), //generate random paragraph Text between 2-5
        'Name': Random.name(), // generate random Name
        'Url': Random.url(), // generate random Web Url
        'Address': Random.province() // generate random Address
    }
    data.data.push(template)
}

export default data;
