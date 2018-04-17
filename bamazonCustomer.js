var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    afterConnection();
});

function afterConnection() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    // console.log(res);
    // connection.end();
    runSearch();
  });
}
// Use console.Table... where?

// The first should ask them the ID of the product they would like to buy.
function runSearch() {
    inquirer
      .prompt({
        name: "action",
        type: "rawlist",
        message: "What item would you like to buy?",
        choices: [
          "SELECT * FROM products"
        ]
      })
      .then(function(answer) {
        switch (answer.action) {
        case "Find songs by artist":
          artistSearch();
          break;
  
        case "Find all artists who appear more than once":
          multiSearch();
          break;
        }
      });
  }


// The second message should ask how many units of the product they would like to buy.

// Customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
// If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.


// However, if your store does have enough of the product, you should fulfill the customer's order.
// This means updating the SQL database to reflect the remaining quantity.
// Once the update goes through, show the customer the total cost of their purchase.
