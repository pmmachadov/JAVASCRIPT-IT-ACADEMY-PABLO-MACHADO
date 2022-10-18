"use strict";

class Cliente {
	constructor(clienteName, clienteCuenta = "sin cuenta asociada") {
		this._clienteName = clienteName;
		this._clienteCuenta = clienteCuenta;
	}
	
	get clienteName() {
		return this._clienteName;
	}
	
	set clienteName(clienteName) {
		this._clienteName = clienteName;
	}
	
	get clienteCuenta() {
		return this._clienteCuenta;
	}
	
	set clienteCuenta(clienteCuenta) {
		this._clienteCuenta = clienteCuenta;
	}
	
	clienteDesc(index, callback = "") {
		return `
		<h3 class="mb-2 d-inline-block">${this.clienteName}</h3> <button onclick="deleteCliente(${index})" class="m-3 btn btn-outline-danger btn-sm position-absolute top-0 end-0" onclick="">Eliminar</button>
		<p class="mb-2">Nº de cuenta: ${this.clienteCuenta}</p>
		${callback}
		${this.clienteButtons(index)}
		`;
	}
	
	clienteDescDiv(index, callback = "") {
		return `
		<div class="shadow-sm position-relative mb-5 p-3 border rounded-3" id="element-${index}">
		<h3 class="mb-2 d-inline-block">${this.clienteName}</h3> <button onclick="deleteCliente(${index})" class="m-3 btn btn-outline-danger btn-sm position-absolute top-0 end-0" onclick="">Eliminar</button>
		<p class="mb-2">Nº de cuenta: ${this.clienteCuenta}</p>
		${callback}
		${this.clienteButtons(index)}
		</div>
		`;
	}
	
	clienteButtons(index) {
		// console.log(typeof this.clienteCuenta);
		if(this.clienteCuenta == "sin cuenta asociada") {
			return `<button class="btn btn-outline-primary btn-sm" onclick="crearCuenta(${index})">Añadir cuenta</button>`;
		} else {
			return `
			<button class="btn btn-outline-success btn-sm" onclick="ingresarCuenta(${index})">Ingresar</button>
			<button class="btn btn-outline-dark btn-sm" onclick="retirarCuenta(${index})">Retirar</button>
			`;
		}
	}
}