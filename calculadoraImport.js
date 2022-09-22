export function sumar(a, b) {
    console.log(`El resultado de ${a} + ${b} es ${a+b}`)
}

export function restar(a, b) {
    console.log(`El resultado de ${a} - ${b} es ${a-b}`)
}

export function dividir(a, b) {
    console.log(`El resultado de ${a} / ${b} es ${a/b}`)
}

export function multiplicar(a, b) {
    console.log(`El resultado de ${a} * ${b} es ${a*b}`)
}

export let nombre = 'daniel'

function porDefecto() {
    console.log('esta funcion fue exportada por defecto')
}

// export default porDefecto
