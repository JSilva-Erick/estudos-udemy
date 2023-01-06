function resto(dividendo, divisor) {
    console.log(`Resultado: ${dividendo/divisor}`)
    resultado = dividendo % divisor
    return `Resto: ${resultado}` 
}

console.log(resto(11,4))