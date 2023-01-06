function formatarValor(valor){
    valorEmReais = `R$ ${valor.toFixed(2).toString().replace('.', ',')}`
    return valorEmReais
}
console.log(formatarValor(0.1+0.2))