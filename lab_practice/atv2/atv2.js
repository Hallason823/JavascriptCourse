function filtrarEConverterMaiusculo(palavras, tamanho_limite = 6) {
    for (var i = palavras.length-1; i >= 0; i--){
        if (palavras[i].length < tamanho_limite) {
            palavras.splice(i, 1);
        }
        else {
            palavras[i] = palavras[i].toUpperCase();
        }
    }
    return palavras;
}

// Exemplo de entrada
let palavras = ["casa", "computador", "sol", "programação", "lua"];

// Chamada da função
let resultado = filtrarEConverterMaiusculo(palavras);

// Resultado esperado
console.log(resultado); // ["COMPUTADOR", "PROGRAMAÇÃO"]