function filtrarEMultiplicarPares(numeros, multiplicador) {
    var res_vector = [];
    for (var i = 0; i < numeros.length; i++) {
        if (numeros[i]%2 == 0) {
            res_vector.push(multiplicador*numeros[i]);
        }
    }
    return res_vector;
}

// Exemplo de entrada
let numeros = [1, 2, 3, 4, 5, 6];

// Chamada da função
let resultado = filtrarEMultiplicarPares(numeros, 3);

// Resultado esperado
console.log(resultado);
// Saída esperada [6, 12, 18]