// crear clase de cliente
export class Cliente {
    #nombre
    #impuesto
    constructor(nombre, impuesto) {
        this.#nombre = nombre;
        this.#impuesto = impuesto;
    }
    get getNombre() {
        return this.#nombre
    }
    set impuesto(valor) {
        this.#impuesto = valor
    }

    set setNombre(valor) {
        if (typeof valor === "string") {
            this.#nombre = valor
        } else {
            console.log("El valor no es String crea el cliente con un nombre real")
        }
    }

    // Método para calcular el monto neto anual después de aplicar los deducibles
    calcularMontoNetoAnual() {
        return ((this.#impuesto.montoBrutoAnual - this.#impuesto.deducibles) * 0.21);
    }



}