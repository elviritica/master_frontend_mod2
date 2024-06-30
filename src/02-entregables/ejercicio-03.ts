console.log("************** DELIVERABLE 03 *********************");

var a = { name: "Maria", surname: "Ibañez", country: "SPA" };
var b = { name: "Luisa", age: 31, married: true };

function clone(source) {
  return {...source}
}

console.log(clone(a))

function merge(source, target) {
    let cloned = clone(target);
    return {...cloned, ...source};
}


console.log(merge(a, b)); 