let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  function somarLinhas(matriz) {
    matriz.forEach((linha, index) => {
      let soma = linha.reduce((acc, elemento) => acc + elemento, 0);
      console.log(Soma da linha ${index + 1}: ${soma});
    });
  }
  
  somarLinhas(matriz);