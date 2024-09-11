function impar_ou_par(num) {
    if (num %2 === 0){
        return "Esse número é par.";
    } else { 
        return "Esse número é ímpar.";
    }
}
        
console.log(impar_ou_par(2))