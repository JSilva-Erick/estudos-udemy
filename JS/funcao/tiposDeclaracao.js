console.log(soma(3,4));

// function declaration - pode ser declarada depois do programa
function soma(x,y){
    return x+y
}

//function expression - deve ser declarada antes do programa
const sub = function (x,y){
    return x - y
}
console.log(sub(3,4));

// named function expression - deve ser declarada antes do programa
const mult = function mult (x, y){
    return x * y
}
console.log(mult(3,4));