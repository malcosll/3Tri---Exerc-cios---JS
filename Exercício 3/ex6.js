const numeros = [1, 2, -3, 4, 5];
let encontrado = false;

for (let num of numeros) {
    if (num < 0) {
        console.log("Primeiro número negativo: " + num);
        encontrado = true;
        break;
    }
}

if (!encontrado) {
    console.log("Não há números negativos.");
}