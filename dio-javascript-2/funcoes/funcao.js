// Tipos de funções

// declarativas
function funcao() {
    console.log('Sou uma mensagem de uma função declarativa');
}
funcao();

// expressão de função
// com nomeação
var funcao = function funcao() {
    console.log('Sou uma mensagem de função de expressão!');
}
funcao();
// sem nomeação
var funcao1 = function() {
    console.log('Sou uma mensagem de função sem expressão!');
}
funcao1();

// Arrow function
var funcaoArrow = () => {
    console.log('Sou uma arrow function!');
}
funcaoArrow();

