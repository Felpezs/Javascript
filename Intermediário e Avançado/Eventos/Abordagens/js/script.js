/*
//Abordagem 2 do DOM
const botao = document.getElementById('botao')
botao.onclick = executar
*/

/*
//Abordagem 2 do DOM por atributos personalizados. Aceita funções anônimas
const botao = document.querySelector('[botao-acao]')
botao.onclick = executar
*/

//Abordagem 3 do DOM por eventlistener (mais usada). Aceita funções anônimas
const botao = document.querySelector('[botao-acao]')
const body = document.querySelector('body')

//O boolean define a ordem de execução dos eventos. True (de fora para dentro) e False (de dentro para fora)
botao.addEventListener('click', executar, false)
body.addEventListener('click', executar2, false)

//Para navegadores antigos
if(botao.addEventListener){
    botao.addEventListener('click', executar, false)
}
else{
    botao.attachEvent('click', executar)            
}

function executar(){
    console.log("executar no botao")
    botao.removeEventListener('click', executar, false)     //Remove o evento
}

function executar2(){
    console.log("executar no body")
}