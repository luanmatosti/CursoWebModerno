function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 //ambos darem certo ou apenas um for true
    const comprarTv50 = trabalho1 && trabalho2 //ambos darem certo(true)
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 //se apenas um da certo, porém não funciona se ambas forem true igual acima
    const manterSaudavel = !comprarSorvete // operador unário / quando comprarSorvete der F

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))