const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const __seconds = 50000;

app.use(cookieParser());

const sendResponse = () => {
    return '<h1>You got it</h1>';
}

app.get('/', (req, res, next)=>{
    res.cookie('myCookie', 'looks Good', {maxAge : __seconds});
    res.send(sendResponse()); // can send anything as reponse
});
app.get('/removecookie', (req, res, next)=>{
    res.clearCookie('myCookie');
    res.end('Cookie Vanished');
});

app.get('/findmoreoncookie', (req, res, next)=>{
    res.cookie('myCookie', 'is now with 302', {maxAge : __seconds});
    // one redirect at a time
    res.status(302).redirect('https://www.howtogeek.com/119458/htg-explains-whats-a-browser-cookie/');
});

app.listen(5000, ()=>{
    console.log('Listning');
});