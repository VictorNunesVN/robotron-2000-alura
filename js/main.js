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
        console.log(evento.target.textContent)
        
    })
})

somar.addEventListener('click',() => {
    manipulaDados('somar')
})

subtrair.addEventListener('click',() => {
    manipulaDados('subtrair')
})

function manipulaDados(operacao){
    if (operacao === '-'){
        if (braco.value <= 0){
            alert('Já não há mais braços !!!')
        }
        else{
        console.log(parseInt(braco.value --))
        }
    }
    else if (operacao === '+'){
        console.log(parseInt(braco.value ++))
    }
}


