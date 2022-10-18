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

class Ordinador {
	constructor(brand, model, proc, ram, ssd) {
		this._brand = brand;
		this._model = model;
		this._proc = proc;
		this._ram = ram;
		this._ssd = ssd;
	}
l
	get brand() {
		return this._brand;
	}

	get model() {
		return this._model;
	}

	get proc() {
		return this._proc;
	}

	get ram() {
		return this._ram;
	}

	get ssd() {
		return this._ssd;
	}

	set brand(brand) {
		this._brand = brand;
	}

	set model(model) {
		this._model = model;
	}

	set proc(proc) {
		this._proc = proc;
	}

	set ram(ram) {
		this._ram = ram;
	}

	set ssd(ssd) {
		this._ssd = ssd;
	}
	
	appInExec(app) {
		return `En aquests moments s\'està executant: ${app}`;
	}

	productDesc(separator = "") {
		let desc = `
		
		Marca: ${this.brand} ${separator}
		Modelo: ${this.model} ${separator}
		Procesador: ${this.proc} ${separator}
		Memoria: ${this.ram} ${separator}
		SSD: ${this.ssd} ${separator}
		`
		return desc;
	}
}
