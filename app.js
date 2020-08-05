const express = require("express");
const path = require("path")
const app = express();
const port = 3000;

//Static
app.use('/static', express.static('static'))

//PUG
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))



app.get('/', (req, res) => {
    const params = {}
    res.status(200).render('home.pug', params)
})
app.get('/home', (req, res) => {
    const params = {}
    res.status(200).render('home.pug', params)
})
app.get('/contact', (req, res) => {
    const params = {}
    res.status(200).render('contact.pug', params)
})

app.listen(port, () => {
    console.log(`This app is running on port ${port}`)
});