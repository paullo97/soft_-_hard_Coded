async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:root@localhost:3306/otb");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

async function includeRows(){
    const conn = await connect();
    const sql = 'INSERT INTO costumers(id, nome) VALUES (?,?);';
    for(var i = 0; i <= 100000; i ++)
    {
        await conn.query(sql,  [i, `USER${i}` ]);
    }
    return;
}

async function selectHardCoded(){
    const conn = await connect();
    for(var i = 0; i <= 100000; i++)
    {
        var sql = 'select nome from costumers where id = ' + i;
        await conn.query(sql);
    }
    return;
}

async function selectSoftCoded(){
    const conn = await connect();
    var sql = 'select nome from costumers where id = ?';
    for(var i = 0; i <= 100000; i++)
    {
        await conn.query(sql, i);
    }
    return;
}
module.exports = {includeRows, selectHardCoded, selectSoftCoded}