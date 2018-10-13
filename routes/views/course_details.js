var keystone = require('keystone');
var async = require('async');


exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Init locals
	locals.section = 'Course Details';
	locals.filters = {
		course: req.params.slug
	};
	locals.data = {
		courses: []
	};

	// Load the Course
	view.on('init', function (next) {
		
		var q = keystone.list('Course').model.findOne({
			slug:locals.filters.course
		}).populate('questions');

		q.exec(function(err, result) {
			locals.data.courses	 = result;
			next(err);
		});
	});
	// Render the view
	view.render('course_details');
}; 
