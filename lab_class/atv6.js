
//const prompt = require(`prompt-sync`)();
//const receptor = prompt("minha mensagem", "meu texto");
let my_text = "\""

carros = new Array();
carros[0] = "Volvo";
carros[5] = "BMN";
carros[7] = "Volkswagen";
//document.write(carros[4]);

function funX(n) {
    if (n == 0) return (n);
    else return ((n-1)*funX(n-1));
}

console.log(funX(5));

console.log(0 != "0");
console.log(0 !== "0");

var num = 1;

try {
    num.toPrecision(50000);
}
catch(err) {
    document.getElementById("demo").innerHTML = err.name;
}