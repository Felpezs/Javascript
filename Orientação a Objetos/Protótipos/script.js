//obj é descendente de Objects
const obj =
{

}

//Mesmo sem ter esse método (.toString()), obj consegue executar pois é um método de Object, da qual obj herda as características

console.log(obj.toString())

//True
console.log(obj.__proto__ == Object.prototype)

class Carro{
    constructor(){
        this.placa = "AMP-1234"
    }
}

class Bmw extends Carro{
    constructor()
    {
        super()
        this.nome = "BMW 320i"
    }
}

const objBmw = new Bmw()
console.log(`Por meio de Herança comum: ${objBmw.placa}`)
console.log(`Por meio de Herança comum: ${objBmw.nome}`)

const carro = {
    placa: "AMP-1230"
}

const bmw = {
    nome:"BMW 320i",
    //Definição do protótipo de carro, ou seja, herda de carro
    __proto__: carro
}

console.log(`Por meio de protótipos: ${bmw.placa}`)
