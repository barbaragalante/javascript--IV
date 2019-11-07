//FETCH

// fetch("rainbow.jpg").then(response =>{
//     console.log(response)
//     return response.blob()
// })

// .then(blob =>{
//     console.log(blob)
//     document.getElementById("rainbow").src = 
//     //criando a url para a imagem aparecer.
//     URL.createObjectURL(blob)
// }) 

// .catch(error => {
//     console.log(error)
// })

//ASYNC-AWAIT

async function pegaArcoIro() {
    const response = await fetch ('rainbow.jpg')
    const blob = await response.blob()
    console.log(response)
    console.log(blob)
}

pegaArcoIro()
.then(()=> console.log('carregou'))
.catch(()=>console.log('não carregou'))

// Fazer a chamada usando fetch para pegar uma imagem - OK
// colocar a imagem criando uma tag img no body
// lidando com erros

// fetch("rainbow.jpg").then(response => {
//     return response.blob()
// }).then(blob => {
//     console.log(blob)
//     document.getElementById("rainbow").src = URL.createObjectURL(blob)
// }).catch( errpr => {
//     console.log(error)
// })

//async await

async function pegaArcoIro(){
 try {
     const response = await fetch('rainbows.jpg')
     if(!response.ok) throw 'Deu ruim'
     const blob = await response.blob()
     console.log(response)
     console.log(blob)
     document.getElementById("rainbow").src = URL.createObjectURL(blob)
 }
 catch(e){
    console.log(e)
 }
}

