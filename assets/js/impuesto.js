// crear clase de impuestos
export class Impuestos {
    #montoBrutoAnual
    #deducibles
    constructor(montoBrutoAnual, deducibles) {
        this.#montoBrutoAnual = montoBrutoAnual;
        this.#deducibles = deducibles;
    }
    get montoBrutoAnual() {
        return this.#montoBrutoAnual
    }
    get deducibles() {
        return this.#deducibles
    }
}