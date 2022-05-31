const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];
let frutasInversa = "";
frutasInversa = frutas.reverse().join(', ');
console.log(frutasInversa);
frutas.reverse();
frutas.splice(-1, 1, "melão");
frutas.shift();
console.log(frutas);