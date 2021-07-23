//Herança: Herdar atributos ou métodos de uma classe genérica.

class Animal
{
    constructor()
    {
        this.tamanho = 0
        this.peso = 0
    }

    correr()
    {
        console.log("Correu")
    }

    dormir()
    {
        console.log("Dormiu")
    }
}

//Cachorro herda atributos e métodos de Animal

class Cachorro extends Animal
{
    constructor()
    {
        super()
        this.tamanho_orelha = 0
    }

    latir()
    {
        console.log("Latiu")
    }

    correr()
    {
        super.correr()
        console.log("Como um cão")
    }
}

//Papagaio herda atributos e métodos de Animal
class Papagaio extends Animal
{
    voar()
    {
        console.log("Voou")
    }
}

const papagaio_1 = new Papagaio()
const cachorro_1 = new Cachorro()

cachorro_1.correr()

papagaio_1.voar()
papagaio_1.correr()