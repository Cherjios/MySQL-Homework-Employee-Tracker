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
          choices:["Add Department","Add Roles","Add employee",
                  "View departments","View roles","View employees",
                  "Update employee roles","exit",]
      }
  ]).then(userChoices => {
      switch(userChoices.UserChoices){
          case "Add Department":
            addDepartment()
              break;
          case "Add Roles":
            addRoles()
              break;
          case "Add employee":
            addEmployee()
              break;
          case "View departments":
            viewDepartments()
              break;
          case "View roles":
            viewRoles()
              break;
          case "View employees":
            viewEmployees()
              break;
        case "Update employee roles":
            
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
  
function addRoles(){
  inquirer
  .prompt([
    {
        type:"input", 
        name:"titleName",
        message:"What title do you want to add?"
    },
    {
      type:"input", 
      name:"salary",
      message:"How much Salary do you want to add?"
    },
    {
      type:"input", 
      name:"departmentId",
      message:"Which department id?"
    }
    ])
    .then(function (answer){
      connection.query(
        "INSERT INTO rol SET ?",
        {
          title: answer.titleName,
          salary:answer.salary,
          department_id: answer.departmentId
        },
        function(err) {
          if (err) throw err;
          console.log("You inserted a new Rol successfully!");
          // re-prompt the user for if they want to bid or post
          start();
        }        
      );
    });
}

function addEmployee(){
  inquirer
  .prompt([
    {
        type:"input", 
        name:"firstName",
        message:"Employee name?"
    },
    {
      type:"input", 
      name:"lastName",
      message:"Employee last name?"
    },
    {
      type:"input", 
      name:"roleId",
      message:"Any role id?"
    },
    {
      type:"input", 
      name:"managerId",
      message:"Any manager id?"
    }
    ])
    .then(function (answer){
      connection.query(
        "INSERT INTO employee SET ?",
        {
          first_name: answer.firstName,
          last_name:answer.lastName,
          role_id: answer.roleId,
          manager_id: answer.managerId
        },
        function(err) {
          if (err) throw err;
          console.log("You inserted a new employee successfully!");
          // re-prompt the user for if they want to bid or post
          start();
        }        
      );
    });
}

function viewDepartments(){
  connection.query("SELECT * FROM department", function(err, results){
    if (err) throw err;
    console.table(results);
    start();
    })
};

function viewRoles(){
  connection.query("SELECT * FROM rol", function(err, results){
    if (err) throw err;
    console.table(results);
    start();
    })
};

function viewEmployees(){
  let query = "SELECT employee.id, employee.first_name, employee.last_name, rol.title ";
  query+= "FROM employee INNER JOIN rol ON (rol.id =employee.role_id) ";
  connection.query(query, function(err, results){
    if (err) throw err;
    console.table(results);
    start();
    })
};

function UpdateEmployeeRoles(){

}