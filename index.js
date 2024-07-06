import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select oneof the operators to perform action",
        type: "list",
        name: "operation",
        choices: ["+", "-", "*", "/"]
    },
]);
// Conditional Statement:
if (answer.operation === "+") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operation === "-") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operation === "*") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operation === "/") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please select a valid operator");
}
