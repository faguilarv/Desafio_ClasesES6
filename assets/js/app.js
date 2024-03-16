import { Cliente } from "./cliente.js";
import { Impuestos } from "./impuesto.js";

// construir clientes

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.setNombre = "Francisco"
cliente2.setNombre = "Alexis"

// construir impuestos de clientes

cliente1.impuesto = { montoBrutoAnual: 560000, deducibles: 320000 }
cliente2.impuesto = { montoBrutoAnual: 550000, deducibles: 210000 }

// pintar en consola resultado de Impuesto a pagar

console.log(`Monto de impuesto a pagar anual de ${cliente1.getNombre}:`, cliente1.calcularMontoNetoAnual().toLocaleString("es-ES", { style: "currency", currency: "CLP" }));
console.log(`Monto de impuesto a pagar anual de ${cliente2.getNombre}:`, cliente2.calcularMontoNetoAnual().toLocaleString("es-ES", { style: "currency", currency: "CLP" }));




