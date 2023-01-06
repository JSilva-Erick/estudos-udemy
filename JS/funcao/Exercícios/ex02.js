function triangulo (a, b, c) {
    if (a == b && b == c) {
        console.log('Equilátero');
    }
    else if (a == b || b == c || a == c){
        console.log('Isósceles')
    }
    else console.log('Escaleno')
}

triangulo(4, 4, 4)