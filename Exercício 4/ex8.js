let a = 0, b = 1, contador = 0;
while (contador < 10) {
    console.log(a);
    let proximo = a + b;
    a = b;
    b = proximo;
    contador++;
}