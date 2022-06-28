const peso1 = 1.0;
const peso2 = Number("2.0");

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

const avalicao1 = 9.75;
const avaliacao2 = 9.26;

const total  = avalicao1 * peso1 + avaliacao2 * peso2;
const media = total/(peso1 + peso2);

console.log(media.toFixed(2));
console.log(media.toString(2));
console.log(typeof media);
console.log(typeof Number);

let exp = Math.pow(2, 3) //base = 2   expoente = 3
console.log(exp)

let expo = 2 ** 3 //nova forma de exponencial
console.log(expo)

let base = 2
base **= 3
console.log(base)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.includes("Manga"))
//ECMAScript2016
