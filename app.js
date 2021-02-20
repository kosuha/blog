const express = require('express');
const app = express();
const connection = require('./lib/conn.js');

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/app/index.html');
});

connection.query('SELECT * FROM ranking', function (err, rows, fields) {
    console.log(rows);
});

app.listen(3000, () => {
    console.log('app run!')
});