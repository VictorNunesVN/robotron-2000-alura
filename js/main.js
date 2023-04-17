/*const robotron = document.querySelector('#robotron')


robotron.addEventListener('click',(evento)=>{
    console.log(evento)
    console.log('Cliquei no robô')
})

function dizOi(nome){
    console.log(`Olá ${nome}`)
}
dizOi('victor')*/

const subtrair = document.querySelector('#subtrair')
const somar = document.querySelector('#somar')
const braco = document.querySelector('#braco')
const controle = document.querySelectorAll('.controle-ajuste')
console.log(controle)

controle.forEach((elemento)=>{
    elemento.addEventListener('click',(evento)=>{
        manipulaDados(evento.target.textContent)
    })
})



function manipulaDados(operacao){
    if (operacao === '-'){
        if (braco.value <= 0){
            alert('Já não há mais braços !!!')
        }
        else{
        braco.value = parseInt(braco.value) -1
        }
    }
    else if (operacao === '+'){
        braco.value = parseInt(braco.value)+1
    }
}


