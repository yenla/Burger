
// Import ORM

var orm = require('../config/orm.js');

var burger = {
	selectAll: function(cb) {
		orm.selectAll(function(res) {
			cb(res);
		});
	},

	insertOne: function(burger_name, cb) {
		orm.insertOne(burger_name, function(res) {
			cb(res);
		});
		// Create time stamp
	},
	updateOne: function(burger_id, cb) {
		orm.updateOne(burger_id, function(res) {
			cb(res);
		});
	}

};

// Export at the end of the burger.js file.
module.exports = burger;


// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.


// module.exports = burgers;