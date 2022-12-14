// funcao sem retorno
function imprimirSoma(a, b){
    console.log(a+b)
}

imprimirSoma(2,3)
imprimirSoma(2)
imprimirSoma(2,10, 23, 1, 4) // pega somente os declarados na função

//funcao com retorno
function soma(a, b=0){
    return a + b
}

console.log(soma(2, 4))
console.log(soma(2))