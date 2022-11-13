let altura = parseInt(prompt("Introduce la altura de la L: "));
let base = parseInt(altura/2) + 1;
let asterisco = "*";
let espacio = " ";
let resultado = "";

for (let i = 0; i < altura; i++) {
    resultado += asterisco + "<br>";
}
for (let i = 0; i < base; i++) {
    resultado += asterisco;
}
document.write(`<p>${resultado}</p>`);