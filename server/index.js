const express = require('express');
const cors = require ('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config({ path: __dirname + '/.env' });

console.log(__dirname);
console.log(__dirname + '/.env');

const app = express();
app.use(bodyParser.json());

let {
    DB_CONNECTION_STRING,
    PORT
} = process.env;




massive(process.env.DB_CONNECTION_STRING, { scripts: __dirname + '/db' }).then((dbInstance) => {
    app.set('db', dbInstance);
})




app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`)
})