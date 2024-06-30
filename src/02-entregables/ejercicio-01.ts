console.log("************** DELIVERABLE 01 *********************");

let saludo : string[] = ["hola", "hi", "salut"];

const head = ([first] : string[]) => first ; 

console.log(head(saludo));

const tail = ([_, ...rest]: string[]) => rest;

console.log(tail(saludo));

const init = (array) => array.slice(0, -1);

console.log(init(saludo));

const last = (array) => array.slice(-1);

console.log(last(saludo));