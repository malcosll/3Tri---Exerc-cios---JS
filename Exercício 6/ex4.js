function todosPositivos(matriz) {
    for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] <= 0) {
          console.log("Nem todos os números são positivos.");
          return false;
        }
      }
    }
    console.log("Todos os números são positivos.");
    return true;
  }