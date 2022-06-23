// Devemos evitar o uso de variáveis globais em nosso escopo
// No Browser tudo fica à mostra no WINDOW
// Vantagem = visível para todo mundo / Desvantagem = sobrescrita indevida
// Ou var é global, ou é privada usando FUNCTION
{ 
    { 
        { 
            { 
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}

console.log(sera)

function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(local)