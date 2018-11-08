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
    	res.redirect('/')
    })

        // apply the routes to our application
    app.use('/', mainRoutes)

}