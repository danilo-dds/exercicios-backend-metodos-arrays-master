function atendimento(lista, operacao, nome) {
    if (operacao === "atender") {
        lista.shift();
    }

    if (operacao === "agendar") {
        lista.push(nome);
    }
    console.log(lista.join(', '));
}
const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

atendimento(pacientes, 'atender');
atendimento(pacientes, 'atender');
atendimento(pacientes, 'agendar', 'Danilo');
atendimento(pacientes, 'atender');