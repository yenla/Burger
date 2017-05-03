

// Import connecton.js

var connection = require('./connection.js');

var orm = {
	// selectAll()
	selectAll: function(cb) {
		connection.query("SELECT * FROM burgers", function(err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	// insertOne()
	insertOne: function(burger_name, cb) {
		// Create time stamp
	},
	// updateOne()
	updateOne: function(burgerID, cb) {
		connection.query("UPDATE burgers SET ? WHERE ?", [{devoured: true}, {id:burgerID}], function(err, result) {
			if (err) throw err;
			cb(result);
		});
	}
};

module.exports = orm;