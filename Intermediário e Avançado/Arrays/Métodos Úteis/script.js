const estados = ["São Paulo", "Ceará", "Rio de Janeiro", "Bahia", "Minas Gerais"]

//Remove o último elemento do array (MG)
estados.pop()

//Remove o primeiro elemento do array (SP)
estados.shift()

//Adiciona Maranhão no inicio do array
estados.unshift("Maranhão")

//Remove 2 itens iniciando pela posição 0, retornando os itens removidos. Também aceita adição de novos elementos nas posições definidas 
const novo = estados.splice(0, 2, "Piaui")

//Remove itens iniciando pela posição 0 e indo até a posição 2. Também retorna os itens removidos
const new_estados = estados.slice(0, 2)

const usuarios = ["Felipe", "Marcio", "Ana"]

//Converte um array para texto
let texto = usuarios.join()