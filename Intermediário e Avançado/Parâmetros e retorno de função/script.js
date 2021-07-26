//Parâmetros padrão
/*
function somar(numero1, numero2){
    //Verifica se o valor é um número, retornando false se for e true se não for um número
    numero1 = isNaN(numero1) ? 0 : numero1
    numero2 = isNaN(numero2) ? 0 : numero2
    return numero1 + numero2
}
*/

//Valor padrão do es2015
function somar(numero1=0, numero2=5){
    return numero1 + numero2
}

//Exibe 7 pois utiliza o valor 5 como padrão para o valor 2, que não foi passado
console.log(somar(2))

//Parâmetros e retornos opcionais

function calcularSalario(salario, desconto){
    desconto = isNaN(desconto) ? 0 : desconto
    return salario - desconto
}

let resultado = calcularSalario(100)
console.log(resultado)