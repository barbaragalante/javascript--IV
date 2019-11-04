const comidas = ['lasanha','batata','bacon']

// console.log(comidas[2])

comidas.forEach((comida,posicao) => {
    // console.log(`Na posicao ${posicao} temos a comida : ${comida}`)
})

//concat - faz a cópia do array e add o elemento como argumento.

let outrasComidas = comidas.concat("Jiló")
// console.log(outrasComidas)

//join - cria uma string do array e ele utiliza o argumento como separador.

let stringDoArray = comidas.join(',')
// console.log(stringDoArray)

//shift - remove o primeiro elemento do array e retorna qual foi removido.

// console.log(comidas.shift())
// console.log(comidas)

//pop - arranca o ultimo elemento do array e retorna qual foi removido.
// Modifica permanente o array.
console.log(comidas.pop())
console.log(comidas)

//add um item na primeira poisição do array 
// Modifica permanente o array.

comidas.unshift("Macarrão")
console.log(comidas)

//add um item na ultima posioção do array
// Modifica permanente o array.
comidas.push("strogonoff")
console.log(comidas)

//inverte o array
comidas.reverse()
console.log(comidas)

//slice - faz copia simples delimitando o começo e o final.
let cortarAlimentos = comidas.slice(1,2)
console.log(cortarAlimentos)
console.log(comidas)

//splice. 
comidas.splice(1,0, "Alface")
console.log(comidas)

//sort - coloca em ordem
comidas.sort()
console.log(comidas)

//map - modifica 
let mapArray = comidas.map((comida) => `${comida}Gostosa`)
console.log(mapArray)

//filter - retorna com todos os valores encontrados.
let arrayProcura = comidas.filter((comida)=> comida ==='Batata')
console.log(arrayProcura)

//reduce - retorna um único valor.
let juntaComida = comidas.reduce((esq,dir)=>{
    return `${esq} e ${dir}`
}) 
console.log(juntaComida)

// let somaNumero = numero.reduce((esq,dir)=>{
//     return esq + dir

// })
// console.log(somaNumero)

console.log(numeros.find(numero => numero === 1))
console.log(numeros.findIndex(numero => numero === 1))

menorQueDez = (algumValor) => algumValor < 10
console.log(numeros.every(numero =>menorQueDez(numero)))





