import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        type: "number",
        name: "num1",
        message: "Enter First Number?",
    },
    {
        message: "Enter Second Number",
        type: "number",
        name: "num2",
    },
    {
        message: "Select what operation you need to perform",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    },
]);
if (answer.operator === "Addition") {
    let result = answer.num1 + answer.num2;
    console.log(`the result is ${result}`);
}
else if (answer.operator === "Subtraction") {
    let result = answer.num1 - answer.num2;
    console.log(`the result is ${result}`);
}
else if (answer.operator === "Multiplication") {
    let result = answer.num1 * answer.num2;
    console.log(`the result is ${result}`);
}
else if (answer.operator === "Division") {
    let result = answer.num1 / answer.num2;
    console.log(`the result is ${result}`);
}
