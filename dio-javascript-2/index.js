// // TIPOS PRIMITIVOS

// // BOOLEAN
// var vOuF = false;
// console.log(vOuF);
// console.log(typeof(vOuF));

// // NUMBER
// var vNumber = 1;
// console.log(vNumber);
// console.log(typeof(vNumber));

// // STRING
// var vNome = 'Kelder';
// console.log(vNome);
// console.log(typeof(vNome));

// // FUNCTION 
// var vFuncao = function() {};
// console.log(vFuncao);
// console.log(typeof(vFuncao));

// VETORES OU ARRAYS

// let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4'],];
// console.log(array);
// console.log(array[3]);

// // forEach
// array.forEach(function(item, index){console.log(item, index)});

// // push
// array.push('novo item');
// console.log(array);

// // pop
// array.pop();
// console.log(array);

// // shift
// array.shift();
// console.log(array);

// // unshift
// array.unshift('novo item no inicio');
// console.log(array);

// // indexOf
// console.log(array.indexOf(true));

// // splice
// array.splice(0, 2);
// console.log(array);

// // slice
// let novoArray = array.slice(0, 3);
// console.log(novoArray);

// // objetos
// let object = {string: 'string', number: 1, boolean: true, array: ["array"], objectInterno: {objectInterno: 'objeto interno'}};
// console.log(object.boolean)

var jogador1 = 0;
var jogador2 = 0;
var placar;  

switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('jogador1 ganhou');
        break;
        case placar = jogador2 > jogador1:
            console.log('jogador2 ganhou');
            break;
    default:
        console.log('Ninguem ganhou');
}

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
let object = { propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'};

// for - executa uma instruçao ate que ela seja falsa
for(let indice = 0; indice < array.length; indice++) {
    console.log(indice);
}

// for/in executa repetiçao a partir de uma propriedade // com array
for(let i in array) {
    console.log(i);
} 
// com object
for( i in object) {
    console.log(i);
} 

// for of - executa repetiçao a partir de um valor
// com array
for(i of array) {
    console.log(i);
}

// while
var a = 0;
while (a < 10) {
    a++;
    console.log(a);
};

do {
    a++;
    console.log(a);
} while (a < 10);