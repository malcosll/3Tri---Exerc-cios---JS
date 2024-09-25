const numeros = [1, 2, 3, 4, 5];
const numeroBuscado = 3;
let encontrado = false;

for (let num of numeros) {
    if (num === numeroBuscado) {
        console.log(numeroBuscado + " encontrado!");
        encontrado = true;
        break;
    }
}

if (!encontrado) {
    console.log(numeroBuscado + " não está no array.");
}