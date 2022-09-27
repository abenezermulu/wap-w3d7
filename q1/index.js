const express = require("express");
const cookieParser = require('cookie-parser'); 
const path = require('path');
const app = express();

app.use(express.urlencoded({ "extended" : false }));
app.use(cookieParser());

app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'view')); 

let cookies = [];

app.get("/", (req, res) => {
  res.render('addCookie', {cookies: []}); 
});

app.post('/addCookie', (req, res) => {
  let cookie = {'key' : req.body.key, 'value': req.body.value};
  cookies.push(cookie); 
  res.cookie(req.body.key, req.body.value);
  res.render('addCookie', {
    cookies
  });
});

app.listen(3000);