// application/routes.js
module.exports = function(app, express) 
{

    // get an instance of the router for main routes
    const mainRoutes = express.Router()

    mainRoutes.get('/', function(req, res)
    {
        res.render('index')
    })

    mainRoutes.post('/fetchpost', function(req, res){
    	console.log('received a post on /fetchpost')
    	body = req.body
    	console.log("body : " + body)
    	console.log("body.keys : " + Object.keys(body))
    	console.log("body.email : " + body.email)
    	res.redirect('/')
    })

        // apply the routes to our application
    app.use('/', mainRoutes)

}