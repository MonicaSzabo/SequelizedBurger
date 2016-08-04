var express = require('express');
var router = express.Router();
var db = require('../models/index.js');

router.get('/', function (req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
	db.burger.findAll().then(function (data) {
		var hbsObject = { burgers: data };
		res.render('index', hbsObject);
	});
});

router.post('/burgers/create', function (req, res) {
	burger.findOne(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], function () {
		res.redirect('/burgers');
	});
});

router.put('/burgers/update/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	burger.update({ devoured: req.body.devoured }, condition, function () {
		res.redirect('/burgers');
	});
});

router.delete('/burgers/delete/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	burger.destroy('burgers', condition, function() {
		res.redirect('/burgers');
	});
});

module.exports = router;