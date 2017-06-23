var keystone = require('keystone');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	// locals.section = 'home';

  view.on('init', function(next) {
    var q = keystone.list('Product').model.find();
    q.exec(function(err, respone) {
      console.log('data', respone.length);
      locals.data = respone;
      next();
    });
  });

	// Render the view
	view.render('category');
};
