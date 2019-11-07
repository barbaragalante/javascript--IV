function falarDepoisde(segundos,frase) {
    return new Promise((resolve,reject) =>{
        if (segundos >10) {
            reject('muito tempo para esperar')
        }
        setTimeout(() =>{
            resolve(frase)
        }, segundos*100)
    })
    
}

falarDepoisde(3,"hm esperei para falar")
.then(frase => console.log(`${frase} - vim da promise`))
.catch(e=>console.log(e))

function assarPizza(segundos) {
    return new Promise((resolve,reject) => {
        if (segundos >) {
            
        }
    })
    
}