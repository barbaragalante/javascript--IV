const nomesNoRole =['Adriana',
'Adrielly',
'Aline',
'Ana',
'Angelica',
'Ba',
'Babs',
'Carolzinha',
'Carolzona',
'Cecilia',
'Daiana',
'Emanuelle',
'Jackeline',
'Jennifer',
'Josiane',
'Lia',
'Marcela',
'Monique',
'Priscilla Roiz Garcia',
'Priscilla Soares Alves',
'Raissa',
'Raquel',
'Romênia',
'Rosana',
'Simara',
'Simone',
'Talita',
'Telma',
'Thaís',
'Valdeniza']

const validacao = (nome) => {
 if (nome.trim() === '') throw'o campo esta vazio'
}

const checaPresenca = (nome) => {
    if (nome.trim() === '') throw'o campo esta vazio'
   }


document.getElementById('form-do-role').addEventListener('submit', function(event) {
    event.preventDefault()

    let valorCampo = document.getElementById("nome").value
    if (document.getElementById("nome").classList.contains("is-valid")) {
        document.getElementById("nome").classList.remove("is-valid")
    }

     if (document.getElementById("nome").classList.contains("is-invalid")) {
        document.getElementById("nome").classList.remove("is-invalid")
    }

    try {
        validacao(valorCampo)
        checaPresenca(valorCampo)
    } catch (erro) {
        document.getElementById("status").innerHTML = erro
        document.getElementById("status").classList.add("is-valid")

    }

    
})






























// console.log(nomesNoRole)


// const input = document.getElementById('input');
// const btn = document.getElementById('btn');

// nomesNoRole.forEach((nome,posicao) => {
//     console.log(`Na posicao ${posicao} temos o nome : ${nome}`)
// })

// btn.addEventListener('click', function() {
//     nomesNoRole.filter(nomesNoRole => nomesNoRole === input.value)
//       if(arrAchou.length > 0){
//         alert(`achou o ${input.value}$`)
//       }else{
//         alert(`não achou o ${input.value}$`)
//       }
//     })
