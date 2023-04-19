/*const robotron = document.querySelector('#robotron')


robotron.addEventListener('click',(evento)=>{
    console.log(evento)
    console.log('Cliquei no robô')
})

function dizOi(nome){
    console.log(`Olá ${nome}`)
}
dizOi('victor')*/


const controle = document.querySelectorAll(".controle-ajuste")

controle.forEach((elemento)=>{
    elemento.addEventListener('click',(evento)=>{
        /*o evento.target.parentNode vai relacionar o clique com a div correspondente para que a soma e
        subtração de peças ocorre de forma correta para cada parte.*/
        manipulaDados(evento.target.textContent, evento.target.parentNode)
    })
})

function manipulaDados(operacao,controle){
    const peca = controle.querySelector(".controle-contador")
    if (operacao === '-'){
        if (peca.value <= 0){
            alert('Já não há mais braços !!!')
        }
        else{
        peca.value = parseInt(peca.value) -1
        }
    }
    else if (operacao === '+'){
        peca.value = parseInt(peca.value) +1
    }
}


