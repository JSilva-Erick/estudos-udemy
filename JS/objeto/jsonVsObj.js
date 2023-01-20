const obj = { a:1, b:2, c:3, soma() {return a + b + c}}
console.log(JSON.stringify(obj))

// confirm.log(JSON.parse("{a:1, b:2, c: 3}"))
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"));
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }')); // JSON só aceita os atributos e textos entre aspas duplas
