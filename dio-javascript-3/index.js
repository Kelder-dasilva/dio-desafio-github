function valores(n1, n2) {
    var n1 = Number(prompt('Insira o valor de n1: '));
    var n2 = Number(prompt('Insira o valor de n2: '));
    var soma = n1 + n2;
    if(!n1 || !n2) {
        alert('Erro - opção inválida!');
        valores();
    } else {
        (n1 === n2) ? alert('Os valores de n1 e n2 são iguais') : alert('Os valores de n1 e n2 não são iguais'); 
        (soma > 10 && soma < 20) ? alert('A soma dos valores n1 e n2 são maiores que 10 e menores que 20')  : alert('Os valores de n1 e n2 são menor que 10 ou maior que 20');
        novaOperacao();
        function novaOperacao() {
            let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');

            if (opcao == 1) {
                valores();
            } else if (opcao == 2) {
                alert('Até mais!');
            } else {
                alert('Digite uma opção válida!');
                novaOperacao();
            }
        };
    }
}

valores();
