var keystone = require('keystone');

 exports = module.exports = function(req, res) {

    var view = new keystone.View(req, res);
	var locals = res.locals;
    

	locals.formData = req.body || {};
    locals.validationErrors = {};

    view.on('post', function(next) {
       
       
        if (!req.body) {
            req.flash('error', 'Please select questions !!!');
            return next();
        }
        res.redirect('back');
       
    });
    // Render the view
	view.render('course_details');
 };