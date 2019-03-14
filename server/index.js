const express = require('express');
const cors = require ('cors');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config({ path: __dirname + '/.env' });
const controller = require('./controller')

console.log(__dirname);
console.log(__dirname + '/.env');

const app = express();
app.use(bodyParser.json());



let {
    DB_CONNECTION_STRING,
    PORT
} = process.env;




massive(DB_CONNECTION_STRING, { scripts: __dirname + '/db' })
.then((dbInstance) => {
    app.set('db', dbInstance);
}).catch(err => {
    console.log(err)
})




app.get('/api/inventory', controller.getAll);
app.post('/api/products', controller.newProduct);
app.delete('/api/products/:id', controller.removeProduct);
app.get('/api/product/:id', controller.getProduct);
app.put('/api/update/:id', controller.editProduct);



app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`)
})