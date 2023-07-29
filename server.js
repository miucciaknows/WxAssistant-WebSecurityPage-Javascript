
const fs = require('fs')
let jwt = require('jsonwebtoken')

const bodyparser = require('body-parser');
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/'));
app.use(bodyparser.urlencoded({extended:true}));
app.engine('html', require('ejs').renderFile);
app.set('view engine','html');
app.set('views', __dirname);

const mocklogin = require("./Helpers/helpers.js")

const port = 8080;


jwt = mocklogin()


app.get('/Assistant', function(req, res) {
	res.render('index.html', {jwt:jwt});
});



app.listen(port, () => {
    console.log(`localhost:${port}`)

})
