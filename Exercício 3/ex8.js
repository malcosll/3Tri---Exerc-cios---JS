const numeros = [1, 2, 3, -4, 5];
let todosPositivos = true;

for (let num of numeros) {
    if (num < 0) {
        todosPositivos = false;
        break;
    }
}

if (todosPositivos) {
    console.log("Todos os números são positivos.");
} else {
    console.log("Há um número negativo.");
}