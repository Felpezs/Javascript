//Herança: Herdar atributos ou métodos de uma classe genérica.

class Animal
{
    //Construtor com inicialização de atributos por meio de parâmetros
    constructor(atam, apes)
    {
        this.tamanho = atam
        this.peso = apes
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
    constructor(atam, apes, ctam)
    {
        //Utilização do construtor da classe genérica com alocação de atributos
        super(atam, apes)
        this.tamanho_orelha = ctam
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
        //Utilização do método da classe pai
        super.dormir()
        console.log("Voou")
    }
}

const papagaio_1 = new Papagaio()
const cachorro_1 = new Cachorro(20, 60, 5)

cachorro_1.correr()

papagaio_1.voar()
papagaio_1.correr()

console.log(cachorro_1.tamanho)