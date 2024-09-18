function verificarVogal(caractere) {
    const vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    
    if (vogais.includes(caractere)) {
        console.log(caractere + " é uma vogal.");
    } else {
        console.log(caractere + " não é uma vogal.");
    }
}