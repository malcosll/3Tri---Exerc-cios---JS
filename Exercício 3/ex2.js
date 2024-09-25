const numeros = [1, 2, 3, 4, 5, 6];
let contagemPares = 0;

numeros.forEach(num => {
    if (num % 2 === 0) {
        contagemPares++;
    }
});

if (contagemPares > 0) {
    console.log("Números pares encontrados: " + contagemPares);
} else {
    console.log("Não há números pares.");
}