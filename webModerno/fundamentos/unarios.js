let num1 = 1
let num2 = 2

num1++ //forma mais lenta
console.log(num1)
--num1 //forma mais rápida
console.log(num1)

console.log(++num1 === num2--) // num1 adicionou 1 antes do num2 remover 1, por isso true / Não fazer um incremento
//dentro de uma comparação - NUNCA FAZER ISSO
console.log(num1 === num2)