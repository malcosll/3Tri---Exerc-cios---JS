let numero = 123; // você pode mudar o número aqui
let soma = 0;
while (numero > 0) {
    soma += numero % 10;
    numero = Math.floor(numero / 10);
}
console.log(soma);