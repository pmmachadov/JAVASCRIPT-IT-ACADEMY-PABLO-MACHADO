// Esta línea de código: 

// let numRandom = Math.floor(Math.random() * (4 - 1)) + 1
// Devuelve un número aleatorio entre min incluido (1) y máx. excluido (4).


// Para saber más

// -> https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math/random

// Escribe un programa que te permita jugar piedra, papel o tijera con el ordenador.

// Para ello el ordenador deberá generar un número aleatorio entre 1 y 3 que represente piedra, papel o tijera respectivamente, y el usuario deberá responder a su vez con un número entre el 1 y el 3 después que mostrar la siguiente pantalla:

// Jugamos a piedra, papel o tijera:

// 1. Piedra

// 2. Papel

// 3. Tijera

// Elección (1-3):


// Si el usuario indica algún número distinto del solicitado, deberá aparecer el siguiente mensaje:
// «Entiendo que no quieres jugar. Adiós»
// En caso contrario, indicar al ganador/a de la siguiente forma:

// Yo xxx y tú xxx. ¡He ganado!, o ¡Has ganado!

// Según sea el caso.

// Ejemplo:

// «Yo papel y tú tijera. ¡Has ganado!»



function jugar() {
    let numRandom = Math.floor(Math.random() * (4 - 1)) + 1
    let numUsuario = parseInt(prompt("Jugamos a piedra, papel o tijera: \n\n1. Piedra \n2. Papel \n3. Tijera \n\nElección (1-3):"))
    let resultado = ""

    if (numUsuario == 1) {
        if (numRandom == 1) {
            resultado = "Yo piedra y tú piedra. ¡Empate!"
        } else if (numRandom == 2) {
            resultado = "Yo papel y tú piedra. ¡He ganado!"
        } else {
            resultado = "Yo tijera y tú piedra. ¡Has ganado!"
        }
    } else if (numUsuario == 2) {
        if (numRandom == 1) {
            resultado = "Yo piedra y tú papel. ¡Has ganado!"
        } else if (numRandom == 2) {
            resultado = "Yo papel y tú papel. ¡Empate!"
        } else {
            resultado = "Yo tijera y tú papel. ¡He ganado!"
        }
    } else if (numUsuario == 3) {
        if (numRandom == 1) {
            resultado = "Yo piedra y tú tijera. ¡He ganado!"
        } else if (numRandom == 2) {
            resultado = "Yo papel y tú tijera. ¡Has ganado!"
        } else {
            resultado = "Yo tijera y tú tijera. ¡Empate!"
        }
    } else {
        resultado = "Entiendo que no quieres jugar. Adiós"
    }

    alert(resultado)
}

jugar()