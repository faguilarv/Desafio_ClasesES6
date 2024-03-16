"use strict";

var _cliente = require("./cliente.js");
var _impuesto = require("./impuesto.js");
// construir clientes

var cliente1 = new _cliente.Cliente();
var cliente2 = new _cliente.Cliente();
cliente1.setNombre = "Francisco";
cliente2.setNombre = "Alexis";

// construir impuestos de clientes

cliente1.impuesto = {
  montoBrutoAnual: 560000,
  deducibles: 320000
};
cliente2.impuesto = {
  montoBrutoAnual: 550000,
  deducibles: 210000
};

// pintar en consola resultado de Impuesto a pagar

console.log("Monto de impuesto a pagar anual de ".concat(cliente1.getNombre, ":"), cliente1.calcularMontoNetoAnual().toLocaleString("es-ES", {
  style: "currency",
  currency: "CLP"
}));
console.log("Monto de impuesto a pagar anual de ".concat(cliente2.getNombre, ":"), cliente2.calcularMontoNetoAnual().toLocaleString("es-ES", {
  style: "currency",
  currency: "CLP"
}));