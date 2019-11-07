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

