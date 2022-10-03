// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input", 
        name: "title",
        message: "please enter the title of your project"
    },{
        type: "list",
        name: "license",
        message: "please select your license",
        choices: ["MIT","Apache 2.0","Frameworx", "no license"]
    },{
        type: "input", 
        name: "description",
        message: "please enter a short description of your project"
    },{
        type: "input", 
        name: "installation",
        message: "please enter important installation information"
    },{
        type: "input", 
        name: "usage",
        message: "please enter important usage information"
    },{
        type: "input", 
        name: "contributing",
        message: "please enter any contribution guidelines"
    },{
        type: "input", 
        name: "test",
        message: "please enter any test information"
    },{
        type: "input", 
        name: "github",
        message: "please enter your github username"
    },{
        type: "input", 
        name: "email",
        message: "please enter your email address"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(__dirname, "/dist/",fileName),data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt (questions).then(function(answers){
        console.log(answers);
        writeToFile("README.md", generateMarkdown(answers));
    })
}

// Function call to initialize app
init();
