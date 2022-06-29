function dividir(a, b) {
    if(b <= 0) {
        throw {
            motivo: 'Valor Inválido',
            descricao: 'Não é possível dividir por 0'
        }
    }
    return a / b
}

try {
    console.log(dividir(2,0))
} catch(erro) {
    console.log(erro)
}
console.log('Seguimos a vida!')