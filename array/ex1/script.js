let listaFrutas = ["banana","morango","limão","laranja"]
console.log(listaFrutas)

const input = document.getElementById('input');
const btn = document.getElementById('btn');

// document.getElementById("btn").addEventListener("click", listaFrutas);
// function listaFrutas(){
//     document.getElementById("buscar").innerHTML = Array();
//   }

btn.addEventListener('click', function() {
listaFrutas.filter(listaFrutas => listaFrutas === input.value)
  if(arrAchou.length > 0){
    alert(`achou o ${input.value}$`)
  }else{
    alert(`não achou o ${input.value}$`)
  }
})