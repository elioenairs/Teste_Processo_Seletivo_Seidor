class Motoristas{
    #nome

    constructor(nome){
        this.#nome = nome
    }

    getNome(){
        return this.#nome
    }

    setNome(nome){
        this.#nome = nome
    }

}

module.exports = Motoristas