var mysql = require("mysql");
var inquirer = require("inquirer");
var cTable = require("console.table");

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
    listProducts();
});

function listProducts() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.table(res);
    runSearch();
  });
}
// Use console.Table... where?

// The first should ask them the ID of the product they would like to buy.
function runSearch() {
  console.log("Welcome to Bamazon, anything is possible!")
    inquirer
      .prompt([{
        name: "itemId",
        type: "input",
        message: "Select an item by the item_id for purchase:",
        }, {
          type: "input",
          message: "Select how many items for purchase?",
          name: "quantityItem"
        }])
      .then(function(answer) {
        connection.query("SELECT stock_quantity FROM products WHERE item_id = ?", [answer.itemId], function(err, res) {
          if (err) throw err;
          var stock = parseInt(res[0].stock);
            if (inquirer.quantityItem > stock) {
              console.log("Sorry, out of stock");
            printProducts();
            }
            else {
              stock = stock - parseInt(answer.quantityItem);
              connection.query("UPDATE products SET ? WHERE ?", [{"stock_quantity": stock}, {"item_id": answer.itemId}], function(err, res){
                if (err) throw err;
                console.log("Thank you, your " + answer.stock + res[0].product_name + " will be shipped in 1-2 business days.")
                inquirer.prompt({
                  type: "list",
                  message: "Continue shopping?",
                  choices: ["y","n"],
                  name: "userChoice" 
                }).then(function(answer) {
                  if (answer.userChoice === "y") {
                    printProducts();
                  } else {
                    console.log("You did it! We knew you could do it, join our newsletter.");
                    connection.end();
                  }
                })
              })
            }
        })
      });
  }


// The second message should ask how many units of the product they would like to buy.

// Customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
// If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.


// However, if your store does have enough of the product, you should fulfill the customer's order.
// This means updating the SQL database to reflect the remaining quantity.
// Once the update goes through, show the customer the total cost of their purchase.
