// application/routes.js
module.exports = function(app, express) 
{

    // get an instance of the router for main routes
    const mainRoutes = express.Router()

    mainRoutes.get('/', function(req, res)
    {
        res.send("hello world")
    })

        // apply the routes to our application
    app.use('/', mainRoutes)

}