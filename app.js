const express = require('express');
const app = express();
//const bcryptjs = require('bycriptjs');






app.set("view.engine", "ejs");
app.use(express.urlencoded({ extended: false}));


app.get('/', (reg, res) => {
    res.render("index.ejs")
});


app.get('/contact', (reg, res) => {
    res.render("contact.ejs")
});

app.get('/forex1', (reg, res) => {
    res.render("forex1.ejs")
});

app.get('/forex2', (reg, res) => {
    res.render("forex2.ejs")
});

app.get('/forexDetail', (reg, res) => {
    res.render("forexDetail.ejs")
});

app.get('/gedmentor', (reg, res) => {
    res.render("gedmentor.ejs")
});

app.get('/gedSchool', (reg, res) => {
    res.render("gedSchool.ejs")
});

app.get('/speakmentor', (reg, res) => {
    res.render("speakmentor.ejs")
});

app.get('/stage3', (reg, res) => {
    res.render("stage3.ejs")
});

// static files

app.use(express.static('public'))
app.use('/assests', express.static(__dirname = 'public/assets'))
app.use('/css', express.static(__dirname = 'public/css'))
app.use('/gedforex', express.static(__dirname = 'public/gedforex'))
app.use('/js', express.static(__dirname = 'public/js'))
app.use('/gedschool', express.static(__dirname = 'public/gedschool'))


// starting server
app.listen(3000);


