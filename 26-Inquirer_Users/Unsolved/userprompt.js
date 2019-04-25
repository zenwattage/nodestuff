// Create a basic command line Node application using the inquirer package.
var inquirer = require("inquirer");
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

var password = "PASS";

//    - Basic input,
inquirer
  .prompt([
    //    - Password,
    {
      type: "password",
      message: "What is your password?",
      name: "password"
    },
    //    - List,
    {
      type: "list",
      message: "Which car do you choose?",
      choices: ["Pinto", "Gremlin", "LeBaron"],
      name: "car"
    },
    //    - Checkbox,
    {
      type: "checkbox",
      name: "seatbelt",
      message: "Weaing a seatbelt?",
      choices: ["Seatbelt ON", "Seatbelt OFF","What's a seatbelt?"]

    },

    //    - and Confirm
    {
      type: "confirm",
      message: "Are you sure?",
      name: "confirm",
      default: true
    }
  ]).then(function (inquirerResponse) {

    if (inquirerResponse.confirm) {

      console.log(inquirerResponse);
      var userPW = inquirerResponse.password;
      if (userPW === password) {
        console.log("Congrats! You chose the correct password: " + userPW);
      } else {
        console.log("That's the wrong password");
      }


    }
  })
// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text.
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
