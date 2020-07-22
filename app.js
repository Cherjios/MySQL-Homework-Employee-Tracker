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
      switch(userChoices.UserChoices){
          case "Add Department":
            addDepartment()
                    
              break;
          case "Add Roles":
              
              break;
          case "Add employee":
              
              break;
          case "exit":
              connection.end()
              break;
          default:
                  
      }
  })

}

function addDepartment(){
  inquirer
  .prompt([
    {
        type:"input", 
        name:"DepartmentName",
        message:"What department do you want to add?"
    }
    ])
    .then(function (answer){
      connection.query(
        "INSERT INTO department SET ?",
        {
          name: answer.DepartmentName
        },
        function(err) {
          if (err) throw err;
          console.log("You inserted a new department successfully!");
          // re-prompt the user for if they want to bid or post
          start();
        }        
      );
    });
}
  


 