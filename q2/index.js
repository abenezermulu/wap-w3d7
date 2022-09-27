const express = require('express');
const path = require('path');
const session = require('express-session');
const app = express();

app.use(express.urlencoded({ "extended" : false }));

app.use(session({
    secret: "keyforencryption"
}));

const date_ob = new Date();
const hour = date_ob.getHours();

if(hour > 6 && hour < 18){
    app.use('/css', express.static(path.join(__dirname, 'css', 'day.css')));
}else {
    app.use('/css', express.static(path.join(__dirname, 'css', 'night.css')));
}

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html>
        <head>
            <link href="/css" rel="stylesheet"/>
        </head>

        <body>
            <form method='POST' action='/result'>
                <label>Name</label>
                <input type='text' name='name' />
                
                <label>Age</label>
                <input type='text' name='age' />
                
                <input type='submit' value='Submit' />
            </form> 
        </body>
    </html>
    `);
});

app.post("/result", (req, res) => {
    req.session.name = req.body.name; 
    req.session.age = req.body.age; 
    res.redirect(303, '/output');
});

app.get("/output", (req, res) => {
    let name = req.session.name; 
    let age = req.session.age; 
    res.send(`Welcome ${name}, ${age}`);
});

app.listen(3000);