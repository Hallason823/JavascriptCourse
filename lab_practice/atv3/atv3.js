function dividirMultiplosDeNumero(numeros, divisor = 5) {
    for (var i = numeros.length-1; i >= 0; i--) {
        if(numeros[i]%divisor == 0) {
            numeros[i] = numeros[i]/divisor;
        }
        else {
            numeros.splice(i, 1);
        }
    }
    return numeros;
}

// Exemplo de entrada
let numeros = [5, 12, 15, 22, 30, 7, 50];

// Chamada da função
let resultado = dividirMultiplosDeNumero(numeros);

// Resultado esperado
console.log(resultado); // [1, 3, 6, 10]