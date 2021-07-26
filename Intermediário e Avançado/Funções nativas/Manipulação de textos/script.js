let nome = "Casa do Felipe"

//Retorna qntd de caracteres
nome.length

//Retorna caracter na posição denominada
nome.charAt(1)

//Troca a primeira string pela segunda, retornando a nova string
let new_nome = nome.replace("Felipe", "Marcelo")

//Retorna a string da posição 0 deslocando 4 letras
let res = nome.substr(0, 4)

//Retorna um array de strings feito com a separação no carácter desejado
let new_res = nome.split(" ")

//Retorna a string cortada na posição 7 deslocando 6 caracteres 
let nome_slice = nome.slice(7, 6)

//Converte a string para maiúsculas
let upper_nome = nome.toUpperCase()

//Converte a string para minúsculas
let lower_nome = nome.toLowerCase()

//Remove espaçamentos a esquerda e a direita
nome.trim()

//Concatena strings

let a = "Olá"
let b = "Mundo"

a.concat(" ", b)