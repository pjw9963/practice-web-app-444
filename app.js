const express = require('express')
const app = express()
const port = 3000
var path = require('path');
const bodyParser = require('body-parser');

 // set the view engine to ejs
 app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/static'));

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.urlencoded({
    extended: true
  }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/static/html/index.html'));
})

app.post('/submit-form', (req, res) => {
    res.render('confirm', {
        fname: req.body.fname,
        lname: req.body.lname,
        address: req.body.address,
        email: req.body.email,
        school: req.body.school,
        date: req.body.date,
        status: req.body.status,
        payment: req.body.payment
      })
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})