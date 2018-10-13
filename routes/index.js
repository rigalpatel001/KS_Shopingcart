/**
 * This file is where you define your application routes and controllers.
 *
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 *
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 *
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 *
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 *
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);

// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
};

// Setup Route Bindings
exports = module.exports = function (app) {
	// Views
	app.get('/', routes.views.index);
	app.all('/contact', routes.views.contact);
	app.all('/products/:category?', routes.views.products);
	app.all('/details/:slug', routes.views.product_details);
	app.all('/cart/:action?', routes.views.cart);
	app.all('/register', routes.views.register);
	app.all('/signin', routes.views.signin);
	app.all('/signout', routes.views.signout);
	app.all('/forgotpassword', routes.views.forgotpassword);
    app.all('/resetpassword/:key', routes.views.resetpassword);
	app.all('/search/', routes.views.search);
	app.all('/courses/', routes.views.courses);
	app.all('/courses/:slug', routes.views.course_details);
	app.all('/result/', routes.views.result);
	
	

	// NOTE: To protect a route so that only admins can see it, use the requireUser middleware:
	// app.get('/protected', middleware.requireUser, routes.views.protected);

};
