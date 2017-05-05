
var express = require('express');
var router = express.Router();
// Import burgers.js 
var burger = require('../models/burger.js');


// Create all routes

// Create index redirect

// router.get("/", function(req, res) {
// 	res.redirect("/index");
// });


router.get("/", function(req, res) {
	burger.selectAll(function(data) {
		var hbsObject = {
			burgers: data
		};
		// console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

//Create New Burger
router.post("/new", function(req, res) {
	burger.insertOne(req.body.burger_name, function() {
		res.redirect("/");
	});
});	

// // Eat The Burger

router.post("/eat/:id", function(req,res) {
	burger.updateOne(req.params.id, function() {
		res.redirect("/");
	});
});

// Export router
module.exports = router;