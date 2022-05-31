function encontrarCarros(lista, posicao) {
    const resultado = lista.slice(posicao, posicao + 3).join(' - ');
    console.log(resultado);
}
const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];

encontrarCarros(nomes, 3);