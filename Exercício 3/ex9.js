const numeros = [1, 2, 3, 4, 5];
let somaImpares = 0;

numeros.forEach(num => {
    if (num % 2 !== 0) {
        somaImpares += num;
    }
});

console.log("Soma total dos números ímpares: " + somaImpares);