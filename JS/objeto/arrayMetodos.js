const pilotos = ['Vetel', 'Alonso', 'Raikkonen', 'Massa']
console.log(pilotos);
pilotos.pop() // remove o ultimo da array
console.log(pilotos);

pilotos.push('Verstappen') // adciona na ultima posição da array
console.log(pilotos);

pilotos.shift() // remove o primeiro elemento
console.log(pilotos);

pilotos.unshift('Hamilton') // adciona na primeira posição
console.log(pilotos);

// splice pode adicionar e remover elementos

pilotos.splice(2, 0, 'Bottas', 'Massa') // a partir da posição dois, não tira nenhum e adiciona os outros elementos
console.log(pilotos);

//remover
pilotos.splice(3, 1) // a partir do indice 3, removeu 1 elemento
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2) // Cria uma nova array a partir do indice indicado
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // Vai do primeiro indice indicado até o outro, o segundo indice não entra na nova array
console.log(algunsPilotos2);