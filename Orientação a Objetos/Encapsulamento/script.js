/*Encapsulamento: Oculta detalhes, controlando o acesso a atributos é métodoso da classe
Modificadores de acesso e getters e setters
*/

class Carro{
    constructor()
    {
        this.modelo = "Gol"
        this.cor = "Vermelho"
    }

    frear()
    {
        console.log("Parar o carro")
    }
}

const carro = new Carro ()

carro.frear()

//Em JS, os modificadores de acesso não existem. É uma boa prática colocar um underscore antes do atributo que deve ser privado

class ContaBancaria
{
    constructor()
    {
        this._numeroConta = 20
        this.saldo = 0
    }

    get numeroConta()
    {
        return this._numeroConta
    }

    set numeroConta(numero)
    {
        this._numeroConta = numero
    }
}

const contaBanco = new ContaBancaria()

contaBanco.nmeroConta = 60
console.log(contaBanco.numeroConta)