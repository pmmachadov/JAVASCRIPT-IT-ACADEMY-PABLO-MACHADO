// Crea una classe en JavaScript anomenada "Ordinador", en un fitxer anomenat ordinador.js

// Aquesta classe tindrà com a atributs la marca, el model, el processador, la quantitat de memòria RAM i la capacitat del disc dur.

// A més del constructor, ha de disposar dels següents mètodes:

//     mètodes que permetin consultar cadascun dels atributs
//     mètodes que permetin modificar el processador, la quantitat de memòria ram i la capacitat del disc dur
//     un mètode que rebrà un paràmetre i retornarà un frase que digui:
//     "En aquests moments s'està executant: 'X'" (X és el paràmetre rebut pel mètode i que normalment serà el nom d'un programa)
//     Exemple: "En aquests moments s'està executant: Chrome"
//     un mètode que retornarà una descripció completa de l'ordinador (toString()).

// En un altre fitxer anomenat main.js, crea la funció crearOrdinadors().

// Dintre d'aquesta funció, demanarem a l'usuari mitjançant promtps les dades de dos ordinadors.

// Un cop introduïdes les dades dels dos ordinadors, crida als mètodes de la classe Ordinador per comprovar que funcionen correctament.
"use strict";

let tools = new Tools();

const ORDENADORES = [];

let brand, model, proc, ram, ssd;

let crearOrdinadors = () => {
	brand = prompt("Introduce la marca");
	model = prompt("Introduce el modelo");
	proc = prompt("Introduce el procesador");
	ram = prompt("Introduce la memoria ram");
	ssd = prompt("Introduce el almacenamiento");

	let ordenador = new Ordinador(brand, model, proc, ram, ssd);

	ORDENADORES.push(ordenador);
	
	mostrarOrdinadors();
};

let mostrarOrdinadors = () => {
	
	if(ORDENADORES.length === 0) {
		tools.printToPage("Lo sentimos, no hay articulos registrados");
		return;
	}
	
	let result = "";
	for (let i = 0; i < ORDENADORES.length; i++) {
		if(i > 0) {result += "<br>";}
		result += ORDENADORES[i].productDesc("<br>");
	}

	tools.printToPage(result);
};

let clearPage = () => {
	tools.clearPage();
};

let borrarItem = () => {
	
	ORDENADORES.pop();
	
	mostrarOrdinadors();
}

