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
  console.log(cookies);
  res.render('addCookie', {
    cookies
  });
});

// app.get('/result', (req, res) => {
//   console.log(req.query.cookies)
//   res.render('addCookie', {
//     cookies: req.query.cookies
//   });
// });

app.listen(3000);