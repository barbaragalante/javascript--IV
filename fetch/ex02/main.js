const cepInput = document.getElementById("cep")
// const logradouroInput = document.getElementById("logradouro")
// const complementoInput = document.getElementById("complemento")
// const bairroInput = document.getElementById("bairro")
// const localidadeInput = document.getElementById("localidade")
// const ufInput = document.getElementById("uf")
// const exibeEnderecoInput = document.getElementById("exibeEndereco")
cepInput.addEventListener("blur",() =>{
    if(cepInput.value){
        fetch(`https://viacep.com.br/ws/${cepInput.value}/json`).then(response =>{
            return response.json()
        }).then(json =>{
            const logradouroInput = document.getElementById("logradouro")
            logradouroInput.value = json.logradouro
            const complementoInput = document.getElementById("complemento")
            complementoInput.value = json.complemento
            const bairroInput = document.getElementById("bairro")
            bairroInput.value = json.bairro
            const localidadeInput = document.getElementById("localidade")
            localidadeInput.value = json.localidade
            const ufInput = document.getElementById("uf")
            ufInput.value = json.uf
            // const exibeEnderecoInput = document.getElementById("exibeEndereco")
            // exibeEnderecoInput.value = json.exibeEndereco
        })
    }
})