/**
 * node.js 操作数据库之查询数据
 */
const mysql = require('mysql');

function weiboTop(num) {
    let connection = mysql.createConnection({
        host: 'rm-bp1q71mq22179i29wmo.mysql.rds.aliyuncs.com',
        user: 'root',
        password: 'yxl981204@',
        port: '3306',
        database: 'cet4'
    });

    connection.connect();
    let sql = 'SELECT word,trans,phonetic,tags FROM cet4';
//查
    connection.query(sql, function (err, result) {
        if (err) {
            console.log('[SELECT ERROR] - ', err.message);
            return;
        }
        //const num = Math.floor(Math.random() * (4412 - 1 + 1) + 1);
        console.log(num);
        console.log('--------------------------SELECT----------------------------');
        console.log(result[num]);
        console.log('------------------------------------------------------------\n');
    });
    connection.end();
};
const data = Math.floor(Math.random() * (4412 - 1 + 1) + 1);
weiboTop(data);
