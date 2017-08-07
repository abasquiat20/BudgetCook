var logger = require('morgan')
var bodyParser = require('body-parser')
var express = require('express')
var app = express()


var admin = require('firebase-admin')

var serviceAccount = require('./budgetCook-4378dc607b08.json')

var firebaseAdmin = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://budgetcook-e9c19.firebaseio.com/'
})
var database = firebaseAdmin.database()

var unirest = require('unirest')

app.set('view engine', 'ejs')

app.use(express.static('views'))
app.set('views', __dirname + '/views')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(logger('dev'))

// create authentication middleware
function isAuthenticated(request, response, next) {
    // check if user is logged in
    //if they are, attach them to the request object and call next
    //if they are not, send them to the login page
    // with a message saying "login!"

}


app.get('/', function(request, response) {

    response.render('lit.ejs')
})

// app.post('/', function(request, response) {
//     var input = request.body.input

//     var url = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?addRecipeInformation=true'

//     unirest.get(url)
//         .header("X-Mashape-Key", "gw8U3UHuzFmshegAvyLYSWtlahe5p1GP06Wjsn9oYcd1YycUqs")
//         .header("Accept", "application/json")
//         .end(function(result) {
//             console.log(
//                 // result.status,
//                 // result.headers,
//                 result.body)

//             response.render('results.ejs', {
//                 data: result.body
//             })
//         });
// })

app.get('/login', function(request, response) {
    response.render('login.ejs')
})

app.get('/home1', function(request, response) {
    response.render('home1.ejs')
})

app.get('/home3', function(request, response) {
    response.render('home3.ejs')
})

app.get('/groceryList', function(request, response) {
    response.render('groceryList.ejs')
})

app.get('/signup', function(request, response) {
    response.render('signup.ejs')
})


app.get('/stores', function(request, response) {
    response.render('stores.ejs')
})

app.get('/coupons', function(request, response) {
    response.render('coupons.ejs')
})


app.post('/', function(request, response) {
    var input = request.body.location1
    response.render('results.ejs')
})

app.post('/getRecipes', function(request, response) {
    var input = request.body.userinput
    var budget = request.body.userBudget

    var url = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?addRecipeInformation=true&cuisine=american&excludeIngredients=peanut%2C+shellfish%2C+wheat&fillIngredients=true&instructionsRequired=true&intolerances=peanut%2C+shellfish%2C+wheat&limitLicense=false&number=100&offset=0&query=${input}&ranking=1`


    unirest.get(url)
        .header("X-Mashape-Key", "gw8U3UHuzFmshegAvyLYSWtlahe5p1GP06Wjsn9oYcd1YycUqs")
        .header("Accept", "application/json")
        .end(function(result) {
            // console.log(
            // result.status,
            // result.headers,
            // result.body)

            var wantedData = result.body.results.map(function(item) {
                // console.log(Object.keys(item))
                // console.log(item.title)
                console.log(item.analyzedInstructions)
                return {
                    title: item.title,
                    image: item.image,
                    ingredients: item.analyzedInstructions,
                    link: item.sourceUrl,
                    servings: item.servings,
                    pricePerServing: Number(item.pricePerServing / 100).toFixed(2)
                }
            })


            response.render('home1.ejs', {
                data: wantedData,
                budget: budget
            })
        });
})

app.get('/about', function(request, response) {
    response.render('about.ejs')
})



app.post('/getRecipes', function(request, response) {
    var input = request.body.userinput
    var budget = request.body.userBudget
    var id = request.body.id

    var url = `https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/${id}/summary`


    unirest.get(url)
        .header("X-Mashape-Key", "gw8U3UHuzFmshegAvyLYSWtlahe5p1GP06Wjsn9oYcd1YycUqs")
        .header("Accept", "application/json")
        .end(function(result) {
            console.log(
                // result.status,
                // result.headers,
                result.body)

            var wantedData = result.body.results.map(function(item) {
                return {
                    name: item.title,
                    image: item.image,
                    ingredients: item.analyzedInstructions,
                    link: item.sourceUrl,
                    pricePerServing: item.pricePerServing,
                    summary: item.summary
                }
            })


            response.render('home1.ejs', {
                data: wantedData
            })
        });
})


// //summarize recipe (calories, diet info, etc.)
// // These code snippets use an open-source library. http://unirest.io/nodejs
// unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/4632/summary")
//     .header("X-Mashape-Key", "gw8U3UHuzFmshegAvyLYSWtlahe5p1GP06Wjsn9oYcd1YycUqs")
//     .header("Accept", "application/json")
//     .end(function(result) {
//         console.log(result.status, result.headers, result.body);
//     });





var port = process.env.PORT || 8080
app.listen(port, function() {
    console.log(`App running on ${port}.`)
})


// google maps api AIzaSyAZIbnQCKDwe4CV2SgIS_z-s7Eiwu-y_WM
//grocery api 5edf605ff1

//edamam
//Application ID
//eaf73487
//This is the application ID, you should send with each API request.
//Application Keys
//b7b7a39169c06b71925e3d3e8a872c4a—
//These are application keys used to authenticate requests.
