const mysql = require("/usr/local/lib/node_modules/mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'roottoor',
    database: 'FSM'
});

connection.connect();

connection.query('SELECT * FROM testNodejs', function(error, results, fields) {
    if (error) throw error;
    let firstData = results[0];
    console.log(firstData);
    console.log(firstData.LastName);
});