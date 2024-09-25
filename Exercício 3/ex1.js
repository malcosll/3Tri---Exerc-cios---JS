const numeros = [2, 3, 4, 5, 6, 7, 8, 9, 10];
numeros.forEach(num => {
    let isPrimo = num > 1;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrimo = false;
            break;
        }
    }
    if (isPrimo) {
        console.log(num + " é primo.");
    } else {
        console.log(num + " não é primo.");
    }
});