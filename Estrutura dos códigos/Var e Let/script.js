/*
    -Var: .Escopo global em blocos
          .Escopo local em funções
    -Let: .Escopo local em blocos e funções
*/

{
    var variavel = 5
}

{
    let variavel = 2
}

//Exibe variavel = 5 pois Var tem escopo global em blocos
console.log(variavel)

function exibir()
{
    var num1 = 1
    let num2 = 2
}

exibir()

//Gera um erro pois Var e Let tem escopo local em funções 
console.log(num1 + " " +num2)