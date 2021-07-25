/*
class Hotel
{

}
*/


//É igual a:
const Hotel = function()
{
    this.nome = "Hotelzinho"
    this.qntdSuites = 30
    this.suitesOcupadas = 25

    this.reservar = function()
    {
        this.suitesOcupadas++
    }
}

const hotel = new Hotel()
console.log(typeof Hotel)

hotel.reservar()

console.log(hotel.suitesOcupadas)