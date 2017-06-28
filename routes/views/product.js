/**
 *
 */

var keystone = require('keystone');
var Cart = keystone.list('Cart').model;

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

  var id = req.params.id;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	// locals.section = 'home';

  view.on('init', function(next) {
    var q = keystone.list('Product').model.findOne({
      _id: id
    });

    q.exec(function(err, respone) {
      console.log('data', respone);
      locals.data = respone;
      next();
    });
  });

  view.on('post', function(next) {
    var data = req.body;
    var cartRecord = new Cart(data);

    cartRecord.save(function(err, r) {
      console.log('Cart record', err, r);
      next();
    });
  });

	// Render the view
	view.render('product');
};
