// Object.preventExtensions - não deixa adicionar mais atributos, pode excluir, mas não adicionar

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log(produto)
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
console.log(produto)
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal - Objeto fica selado, não sendo possivel acrescentar mais propriedades, somente alterar
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constante