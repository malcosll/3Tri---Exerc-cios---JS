function ePalindromo(str) {
    const formatada = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const invertida = formatada.split('').reverse().join('');
    return formatada === invertida;
}