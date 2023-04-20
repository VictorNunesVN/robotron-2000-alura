/*const robotron = document.querySelector('#robotron')


robotron.addEventListener('click',(evento)=>{
    console.log(evento)
    console.log('Cliquei no robô')
})

function dizOi(nome){
    console.log(`Olá ${nome}`)
}
dizOi('victor')*/

/**
 * Usando o data-attributes no html para desvincular o javaScript do css. no querySelectorAll, a informação 
 * é buscada por "[]", diferente do "." para as classes
 */
const controle = document.querySelectorAll("[data-controle]")
//variável pecas é um objeto que tem cinco itens 
const estatisticas = document.querySelectorAll("[data-estatistica]")
const pecas = {
    "braco":{
        "forca" : 29,
        "poder" : 35,
        "energia": -21,
        "velocidade" : -5
    },
    "blindagem":{
        "forca" : 41,
        "poder" : 20,
        "energia": 0,
        "velocidade" : -20
    },
    "nucleos":{
        "forca" : 0,
        "poder" : 7,
        "energia": 48,
        "velocidade" : -4
    },
    "pernas":{
        "forca" : 27,
        "poder" : 21,
        "energia": -32,
        "velocidade" : 43
    },
    "foguetes":{
        "forca" : 0,
        "poder" : 28,
        "energia": 0,
        "velocidade" : -2
    }

}
controle.forEach((elemento)=>{
    elemento.addEventListener('click',(evento)=>{
        /*o evento.target.parentNode vai relacionar o clique com a div correspondente para que a soma e
        subtração de peças ocorre de forma correta para cada parte.*/
        /*Como tem o data-controle, não é mais necessário buscar o sinal de + e - no texo, e sim no data-attribute.Então o .textContent é substituido por .dataset.controle*/ 
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)

        atualizaEstatisticas(evento.target.dataset.pecas)
    })
})

function manipulaDados(operacao,controle){
    /*O uso do data-attribute também se aplica no contador.*/
    const peca = controle.querySelector("[data-contador]")
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

function atualizaEstatisticas(peca){
    console.log(pecas[peca])
    estatisticas.forEach((elemento) =>{
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        
    })
}



