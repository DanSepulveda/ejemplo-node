function sumar(a, b) {
    console.log(`El resultado de ${a} + ${b} es ${a+b}`)
}

function restar(a, b) {
    console.log(`El resultado de ${a} - ${b} es ${a-b}`)
}

function dividir(a, b) {
    console.log(`El resultado de ${a} / ${b} es ${a/b}`)
}

 function multiplicar(a, b) {
    console.log(`El resultado de ${a} * ${b} es ${a*b}`)
}

module.exports = {
    sumar,
    restar,
    dividir,
    multiplicar
}
