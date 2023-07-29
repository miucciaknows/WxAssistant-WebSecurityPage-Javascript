/* 
Import: Before use, fill your credentials files in the indexedDB.html file, and fill your public and private keys in Keys folder. 
For more informations, read the README.md file */

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


function mocklogin() {
    const payload = {
        /*
         * If unauthenticated user, add a userID in the sub claim that can be used.
         * This ID will help keep tracking "unique users". 
         */
        sub: 'sub', 
        iss: 'iss' 
    };
    var privateKey = fs.readFileSync('keys/key.pem', {encoding:'utf-8'});
	var token = jwt.sign(payload, privateKey, { algorithm: 'RS256', expiresIn: '2d'});
	console.log('Generated JWT:')
	console.log(token)
	return token
	}


module.exports = mocklogin;