const numeros = [1, 5, 3, 9, 2];
let maior = numeros[0];

numeros.forEach(num => {
    if (num > maior) {
        maior = num;
    }
});

console.log("Maior número: " + maior);