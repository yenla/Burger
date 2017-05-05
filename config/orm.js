
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
	    var d = new Date();
	    var timestamp = ''+ d.getFullYear() + '-'; 
	    var month = '' + (d.getMonth() + 1);
	      // handle 1 digit months
	      if(month.length == 1){
	        month = '0' + month;
	      }
	    timestamp += month + '-';
	    var day = '' + d.getDate();
	      // handle 1 digit day of month
	      if(day.length == 1){
	        day = '0' + day;
	      }
	    timestamp += day + ' ';
	    var hour = '' + d.getHours();
	      // handle 1 digit hour
	      if(hour.length == 1){
	        hour = '0' + hour;
	      }
	    timestamp += hour + ':';
	    var minute = '' + d.getMinutes();
	      // handle 1 digit minute
	      if(minute.length == 1){
	        minute = '0' + minute;
	      }
	    timestamp += minute + ':';
	    var second = '' + d.getSeconds(); 
	      // handle 1 digit second
	      if(second.length == 1){
	        second = '0' + second;
	      }
	    timestamp += second;

	    // Run MySQL Query
	    connection.query('INSERT INTO burgers SET ?', {
	      burger_name: burger_name,
	      devoured: false,
	      date: timestamp
	    }, function (err, result) {
	      if (err) throw err;
	      cb(result);
	    });

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