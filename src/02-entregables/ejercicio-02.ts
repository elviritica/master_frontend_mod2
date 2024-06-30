console.log("************** DELIVERABLE 02 *********************");

let saludos = ["hola", "hi", "salut"];
let idiomas = ["spanish", "english", "french"];
let frutas = ["kiwi", "sandia", "nispero"];

const concat = (a, b) => [...a, ...b];

console.log(concat(saludos, idiomas));

const concat2 = (...arrays) => {
  return arrays.reduce((acc, curr) => [...acc, ...curr], []);
};

console.log(concat2(saludos, idiomas, frutas));