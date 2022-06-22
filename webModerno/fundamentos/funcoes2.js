// Armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)


// Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {    // => significa FUNCTION
    return a + b
}
console.log(soma(2, 3))


// retorno implícito
const subtracao = (a, b) => a - b // dessa forma não precisa escrever return
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a) //é possível reduzir mais ainda
imprimir2('Legal!!!')