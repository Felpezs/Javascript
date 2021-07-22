/*Abstração: Apenas o necessário para implementação
Necessita de: Modelo (classe), Entidade (objeto), Identidade (objetos únicos), Características (atributos) e Ações (métodos)
*/

class Carro
{
    constructor()
    {
        this.marca = "Volkswagen",
        this.modelo = "Gol",
        this.cor = "Prata",
        this.placa = "EMJ-2565"
    }

    ligar()
    {
        
    }
}

const carro_1 = new Carro()
const carro_2 = new Carro()
carro_2.modelo = "Golf"