var inquirer = require("inquirer");
var mysql = require("mysql");
var resultsArr = [];
var itemsToPick = [];
var quantityArr = [];
var priceArr = [];

var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,

  user: "root",
  password: "root",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  connection.query('SELECT * FROM products', function(err, results) {
    for(j = 0; j < results.length; j++) {
      resultsArr.push(results[j]);
      console.log(results[j]);
    }
    for(i = 0; i < results.length; i++) {
      itemsToPick.push(results[i].product_name);
    }
    for(k = 0; k < results.length; k++) {
      quantityArr.push(results[k].stock_quantity);  // I"VE CREATED ALL OF THESE EXTRA ARRAYS TO FIGURE OUT THE PRICE PROBLEM
    }
    for(l = 0; l < results.length; l++) {
      priceArr.push(results[l].price);
      console.log(parseInt(priceArr[i])); // PRICE WON'T SHOW UP NO MATTER HOW HARD I TRY
    }
  // console.log(results);
  questionPrompt();
  })
  // connection.end();
});

  function questionPrompt() {

    inquirer.prompt([
      {
        type: "list",
        name: "buy",
        message: "Which item would you like to buy?",
        choices: itemsToPick
      },
      {
        type: "number",
        name: "quantity",
        message: "how many would you like to buy?",
      }
    ]).then(function(answers) {
        for (i = 0; i < resultsArr.length; i++) {
          console.log(resultsArr[i]);
          console.log(resultsArr[i].price);
        }
        for (j = 0; j < quantityArr.length; j++) {
          console.log(quantityArr[j]);
        }
        if (answers.quantity > quantityArr) {
          console.log("Insufficient quantity!" + "\n--------------");
          questionPrompt();
        } else {
          quantityArr[i] +- answers.quantity // subtract number the user ordered from total
          console.log("Have successfully purchesed " + answers.quantity + " of this item.  Your total cost will be: " + (resultsArr[i].price * answers.quantity));
          // connection.end();
          }
      })
  } 