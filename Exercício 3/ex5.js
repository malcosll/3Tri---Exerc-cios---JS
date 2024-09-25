const numeros = [1, 2, 3, 2, 4, 2];
const valorBuscado = 2;
let contagem = 0;

numeros.forEach(num => {
    if (num === valorBuscado) {
        contagem++;
    }
});

console.log("O valor " + valorBuscado + " aparece " + contagem + " vezes.");