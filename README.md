# :hamburger: :fries: Burger-HW

<img width="1201" alt="screen shot 2017-05-05 at 3 47 27 pm" src="https://cloud.githubusercontent.com/assets/9157149/25767620/fe8783e0-31af-11e7-8f3c-902dc374a65d.png">

## Summary

• Welcome to Bob's Burger, order your burger from our menu of the day or create your own. Once you finish ordering your burger, you can enjoy your meal by clicking devour it. Enjoys your meal!!!

## Live Links

https://ancient-depths-32913.herokuapp.com/

## Technologies Used

• JavaScript

• jQuery

• MySQL

• node.js

• Express.js

• Handlebars

• ORM

• HTML

• Bootstrap

• MVC design pattern

## Execute

Follow the steps below to interact with this site locally using the example data or your own:

1. You can use the sample database inside the db folder or create your own database

2. Create a table to store all the information (see below) inside the database

	• id: an auto incrementing int that serves as the primary key

	• burger_name: a string

	• devoured: a boolean

	• date: a TIMESTAMP

3. Clone this repository with git clone https://github.com/yenla/Burger.git 

4. Install modules with npm install in your terminal.

5. Inside the connection.js change the password of the database to your own password

6. Run node server.js.

4. Go to localhost:3000 in your web browser to interact with the site

## Example code

• Below is example code on how to create your route

	router.get("/", function(req, res) {
	burger.selectAll(function(data) {
			var hbsObject = {
				burgers: data
			};
			// console.log(hbsObject);
			res.render("index", hbsObject);
		});
	);

	router.post("/new", function(req, res) {
		burger.insertOne(req.body.burger_name, function() {
			res.redirect("/");
		});
	});	
