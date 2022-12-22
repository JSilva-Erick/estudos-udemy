function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: ((preco*0.1).toFixed(2))
    }
}

console.log(criarProduto('Bola', 100))
console.log(criarProduto('Peteca', 30.99))