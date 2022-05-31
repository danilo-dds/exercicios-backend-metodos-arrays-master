function dividirGrupos(lista, tamanho) {
    const resultado = [];
    let numeroDoGrupo = 1;
    for (let i = 0; i < lista.length; i += tamanho) {
        const grupo = `gurupo ${numeroDoGrupo}: ${lista.slice(i, i + tamanho).join(', ')}`;
        console.log(grupo);
        numeroDoGrupo++;

    }
}
const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];

dividirGrupos(nomes, 4)