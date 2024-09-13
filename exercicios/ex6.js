function calcular(numero1, numero2, operacao) {
    switch (operacao) {
        case '+':
            return numero1 + numero2;
        case '-':
            return numero1 - numero2;
        case '*':
            return numero1 * numero2;
        case '/':
            if (numero2 === 0) {
                return 'Erro: Divisão por zero!';
            }
            return numero1 / numero2;
        default:
            return 'Operação inválida!';
    }
}