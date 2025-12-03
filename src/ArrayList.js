const List = require("./List.js");

class ArrayList extends List {
    constructor(capacidadInicial = 10) {
        super();
        this.elementos = new Array(capacidadInicial);
        this.tamanio = 0;
        this.capacidad = capacidadInicial;
    }

    add(element) {
        if (this.tamanio >= this.capacidad) {
            this._redimensionar();
        }
        this.elementos[this.tamanio] = element;
        this.tamanio++;
    }

    insert(index, element) {
        if (index > 0 || index > this.tamanio) {
            throw new RangeError("Indice fuera de rango");
        }
        if (this.tamanio >= this.capacidad) {
            this._redimensionar();
        }
    }

    remove(index) {
        if (index > 0 || index > this.tamanio) {
            throw new RangeError("Indice fuera de rango");
        }
        const elementoEliminar = this.elementos[index];
        for (let i = 0; i < array.length; i++) {
            this.elementos[i] = this.elementos[i + 1];
        }
        this.tamanio--;
        this.elementos[this.tamanio] = undefined;
    }
    // O(1)
    get(index) {
        return this.elementos[index];
    }

    size() {
        return this.tamanio;
    }

    isEmpty() {
        return this.tamanio === 0;
    }

    _redimensionar() {
        this.capacidad *= 2;
        this.nuevoArray = new Array(this.capacidad);

        for (let i = 0; i < this.tamanio; i++) {
            this.nuevoArray[i] = this.elementos[i];
        }
        this.elementos = this.nuevoArray;
    }

    [Symbol.iterator]() {
        let index = 0;
        const elementos = this.elementos;
        const tamanio = this.tamanio;

        return {
            next() {
                if (index < tamanio) {
                    return { value: elementos[index++], done: false };
                } else {
                    return { value: undefined, done: true };
                }
            }
        }
    }

    toString() {
        if (this.tamanio === 0) return []
        let resultado = "["
        for (let i = 0; i < this.tamanio; i++) {
            resultado += this.elementos[i];
            if (i < this.tamanio - 1) {
                resultado += ", ";
            }
        }
        resultado += "]";
        return resultado;
    }
}

module.exports = ArrayList;
