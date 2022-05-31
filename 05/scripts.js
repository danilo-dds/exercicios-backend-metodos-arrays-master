function agendarPaciente(lista, nome) {
    lista.push(nome);
    console.log(lista.join(', '));

}

function atenderPaciente(lista) {
    lista.shift();
    console.log(lista.join(', '));

}

function cancelarAtendimento(lista, nome) {
    lista.splice(lista.indexOf(nome), 1);
    console.log(lista.join(', '));

}
const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

agendarPaciente(pacientes, "Danilo");
atenderPaciente(pacientes);
cancelarAtendimento(pacientes, "Danilo");
cancelarAtendimento(pacientes, "Ana");