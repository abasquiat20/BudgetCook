var express = require('express')
var logger = require('morgan')
var bodyParser = require('body-parser')


//create a new instance
var app = express()

// set up ejs
app.set('view engine', 'ejs') // behind scenes requires ejs
//allows us to put css and images inside views folder
app.use(express.static('views'))
// tell app hwere to find folder
app.set('views', __dirname + '/views')

app.get('/', function(request, response){
response.render('home.ejs')
})
app.get('/profile', function(request, response){
    response.render('profile.ejs')
})

var port = process.env.PORT

app.listen(port, function() {
    console.log(`App runnning on ${port} money.`)
})
