function contarVogais(str) {

    const vogais = 'aeiouAEIOU';

    const quantidadeVogais = str.split('').filter(char => vogais.includes(char)).length;
    return quantidadeVogais;
}

const frase = "Hello, World!";
console.log(contarVogais(frase));