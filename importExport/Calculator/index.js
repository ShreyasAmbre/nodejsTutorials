const callModule = require("./calc")

console.log("Module methods => ", callModule)

let addValue = callModule.addition(1,2)
let subValue = callModule.substract(4,1)
let divValue = callModule.division(6, 2)
console.log("Addition value :- ", addValue)
console.log("Subsctraction value :- ", subValue)
console.log("Division value :- ", divValue)
