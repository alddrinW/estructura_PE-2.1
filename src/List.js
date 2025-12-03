class List {

    //añadir elementos al final de una lista
    add(element) {
        throw new Error("Funcionalidad pendiente de implementar");
    }

    //metodo para añadir elemento en una posición en específico O(1)
    insert(index, element) {
        throw new Error("Funcionalidad pendiente de implementar");
    }

    remove(index) {
        throw new Error("Funcionalidad pendiente de implementar");
    }

    get(index) {
        throw new Error("Funcionalidad pendiente de implementar");
    }

    size() {
        throw new Error("Funcionalidad pendiente de implementar");
    }

    isEmpty() {
        return this.size() === 0;
    }

    clear() {
        throw new Error("Funcionalidad pendiente de implementar");
    }

    [Symbol.iterator]() {
        throw new Error("Funcionalidad pendiente de implementar");
    }
}

module.exports = List;
