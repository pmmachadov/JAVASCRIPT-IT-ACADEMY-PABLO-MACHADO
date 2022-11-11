let numero = Math.floor(Math.random() * 500) + 1;
let intentos = 0;
function comprobar() {
    let numeroUsuario = document.getElementById("numero").value;
    let resultado = document.getElementById("resultado");
    if (numeroUsuario == numero) {
        resultado.innerHTML = "¡Has acertado! El número era " + numero + ". Lo has conseguido en " + intentos + " intentos.";
    } else {
        if (Math.abs(numero - numeroUsuario) >= 50) {
            resultado.innerHTML = "Fred, frío: tu número es " + (
                numeroUsuario > numero ? "mayor" : "menor");
        } else if (Math.abs(numero - numeroUsuario) >= 15) {
            resultado.innerHTML = "Tebi, Tebi: tu número es " + (
                numeroUsuario > numero ? "mayor" : "menor");
        } else {
            resultado.innerHTML = "Caliente, caliente: tu número es " + (
                numeroUsuario > numero ? "mayor" : "menor");
        }
        intentos++;
    }
}