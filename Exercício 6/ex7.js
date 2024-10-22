function multiplicarMatrizes(matriz1, matriz2) {
    let resultado = [];
    for (let i = 0; i < matriz1.length; i++) {
      resultado[i] = [];
      for (let j = 0; j < matriz2[0].length; j++) {
        let soma = 0;
        for (let k = 0; k < matriz1[0].length; k++) {
          soma += matriz1[i][k] * matriz2[k][j];
        }
        resultado[i][j] = soma;
      }
    }
    return resultado;
  }