/*Escreva uma função que verifique se uma palavra é um palíndromo (ou seja, 
pode ser lida da mesma forma da esquerda para a direita e vice-versa).*/

function verificarPalindromo(palavra) {
    // Remover espaços em branco e converter para letras minúsculas
    palavra = palavra.toLowerCase().replace(/\s/g, '');
  
    // Inverter a palavra
    let palavraInvertida = palavra.split('').reverse().join('');
  
    // Verificar se a palavra original é igual à palavra invertida
    if (palavra === palavraInvertida) {
      return true; // É um palíndromo
    } else {
      return false; // Não é um palíndromo
    }
  }
  