const express = require('express');
const app = express();
const path = require('path')
const db = require('mongoose');

let dbUrl = 'mongodb+srv://michaelbriskin10:4upjf388@cluster0.25opv5f.mongodb.net/SvShop-2'
db.connect(dbUrl).then(()=>console.log('db on'))

app.use(express.static(path.join(__dirname, 'SVshop', 'dist')))









let port = 3000;
app.listen(port, () => {
    console.log(`server works on port ${port}`)
});