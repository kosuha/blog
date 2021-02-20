const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const connection = require('./lib/conn.js');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/app/index.html');
});

app.get('/index.js', (request, response) => {
    response.sendFile(__dirname + '/app/index.js');
});

app.get('/get', (request, response) => {  
    connection.query('SELECT * FROM ranking', function (error, rows, fields) {
        response.json(rows[0]);
    });
});

app.post('/post', (request, response) => {
    console.log(request.body);
    connection.query('SELECT * FROM ranking', function (error, rows, fields) {
        response.json(rows[0]);
    });
});

app.listen(3000, () => {
    console.log('app run!')
});