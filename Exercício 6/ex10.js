function matrizSimetrica(matriz) {
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz.length; j++) {
        if (matriz[i][j] !== matriz[j][i]) {
          console.log("A matriz não é simétrica.");
          return false;
        }
      }
    }
    console.log("A matriz é simétrica.");
    return true;
  }
  