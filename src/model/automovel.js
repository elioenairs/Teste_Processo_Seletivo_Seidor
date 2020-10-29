class Automovel {
    #cor
    #marca
    #placa

    constructor(automovel = {}) {
        this.#cor = automovel.cor
        this.#marca = automovel.marca
        this.#placa = automovel.placa
    }

    getPlaca() {
        return this.#placa
    }

    getCor() {
        return this.#cor
    }

    getMarca() {
        return this.#marca
    }

    setPlaca(placa) {
        this.#placa = placa
    }

    setCor(cor) {
        this.#cor = cor
    }

    setMarca(marca) {
        this.#marca = marca
    }

    toJSON(){
        return {
            cor: this.#cor,
            marca: this.#marca,
            placa: this.#placa
        }
    }
}

module.exports = Automovel

