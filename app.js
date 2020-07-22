var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "companyDB"
});

connection.connect(function(err) {
  if (err) throw err;
  start();
});

function start(){
  inquirer.prompt([
      {
          type:"list", 
          name:"UserChoices",
          message:"What do you want to do?",
          choices:["Add Department","Add Roles","Add employee","exit",]
      }
  ]).then(userChoices => {
      switch(userChoices.TeamChoices){
          case "Add Department":
              
              break;
          case "Add Roles":
              
              break;
          case "Add employee":
              
              break;
          case "exit":
              
              break;
          default:
              createTeam()    
      }
  })

}