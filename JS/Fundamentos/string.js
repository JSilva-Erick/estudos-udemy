const escola = 'Cod3r'

console.log(escola.charAt(4));
console.log(escola.charAt(5));
console.log(escola.charCodeAt(3));
console.log(escola.indexOf('C'));

console.log(escola.substring(1));
console.log(escola.substring(0, 3))

console.log('Escola'.concat(escola).concat("!"));
console.log('Escola'+ escola + "!");
console.log(escola.replace(3, 'e')) // /\d/Subistitui todos os digitos pela letra definida

console.log('Ana,Maria,Pedro'.split(','));