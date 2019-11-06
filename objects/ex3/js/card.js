class card {
    constructor(receita){
        this.receita = receita
    }
    render(){
        const card = `<div class = "card">
        <img class = "imagem" src=${this.receita.imagem}/>
        <h2>${this.receita.titulo}$</h2>
        <p class="ingredientes">${this.receita.ingredientes}$</p>
        `
       
    }
}
