"use strict";

// Formatear cantidades en EUR
const formatEUR = new Intl.NumberFormat("es-ES", {style:"currency", currency:"EUR"})

class Cuenta {
	static counter = Math.floor(Math.random() * 1000000);
	
	constructor(saldo = 0) {
		this._numCuenta = "IT-0000013" + "01" + Cuenta.counter++;
		this._saldo = saldo;
	}
	
	get numCuenta() {
		return this._numCuenta;
	}
	
	get saldo() {
		return this._saldo;
	}
	
	set saldo(saldo) {
		this._saldo = saldo;
	}
	
	cuentaDesc() {
		return `
		<p class="mb-2">Saldo: ${formatEUR.format(this.saldo)}</p>
		`;
	}
}