//Procedural

const verificarDisponibilidade = (quartos, ocupados) => quartos - ocupados

let total_quartos =  20
let total_ocupados = 5

let res = verificarDisponibilidade(total_quartos, total_ocupados)

console.log(res)

//POO

//Notação literal
const hotel = 
{
    //Atributos

    dormitorios: 20,
    dormitorios_ocupados: 10,

    //Método

    verificarDisp: function()
    {
        return this.dormitorios - this.dormitorios_ocupados
    }
}

console.log(hotel.verificarDisp())

//Alteração de valores
/*
    hotel.dormitorios = 50
    delete hotel.dormitorios

console.log(hotel.verificarDisp())
*/

//Notação de construtor (Objeto em branco)

const hostel = new Object()
    hotel.dormitorios_ocupados = 10
    hotel.dormitorios = 20
    hotel.verificarDisp = function()
    {
        return this.dormitorios - this.dormitorios_ocupados
    }

//Classes

class Casa
{

    constructor()
    {
        this.quartos = 2
        this.ocupados = 1
    }

    verificarDisponibilidade()
    {
        return this.quartos - this.ocupados
    }
}
 
const casa_1 = new Casa()

console.log(casa_1.verificarDisponibilidade())