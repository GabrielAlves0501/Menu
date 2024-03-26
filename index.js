/*Pegar os botões individualmente */
let allButton = document.getElementById('all');
let breakfastButton = document.getElementById('breakfast');
let lunchButton = document.getElementById('lunch');
let shakesButton = document.getElementById('shakes');
let dinnerButton = document.getElementById('dinner');


/*Método para selecionar um botão por vez*/
function selecionarBotao(botao) {
    // Remover a classe 'selecionado' de todos os botões
    let buttons = document.querySelectorAll('.filtros');
    buttons.forEach(function(b) {
        b.classList.remove('clicado');
    });

    // Adicionar a classe 'selecionado' apenas ao botão clicado
    botao.classList.add('clicado');
}
/*Fim método*/

/*Pegar os itens do cardapio */
let lunch1 = document.querySelector('#lunch1');
let lunch2 = document.querySelector('#lunch2');
let shakes1 = document.querySelector('#shakes1');
let dinner1 = document.querySelector('#dinner1');
let breakfast1 = document.querySelector('#breakfast1');
let breakfast2 = document.querySelector('#breakfast2');
let cardapioCompleto = document.querySelectorAll('.itens');

/*Tornar visivel ou invisivel de acordo com o filtro */
allButton.addEventListener('click', function(){
    cardapioCompleto.forEach(function(c){
        c.style.display = 'flex';
    })
})

breakfastButton.addEventListener('click', function(){
    if((breakfast1.style.display = 'none') && (breakfast2.style.display = 'none')){
        breakfast1.style.display = 'flex';
        breakfast2.style.display = 'flex';
    }

    lunch1.style.display = 'none';
    lunch2.style.display = 'none';
    shakes1.style.display = 'none';
    dinner1.style.display = 'none';
})

lunchButton.addEventListener('click', function(){
    if((lunch1.style.display = 'none') && (lunch2.style.display = 'none')){
        lunch1.style.display = 'flex';
        lunch2.style.display = 'flex';
    }

    breakfast1.style.display = 'none';
    breakfast2.style.display = 'none';
    shakes1.style.display = 'none';
    dinner1.style.display = 'none';
})

shakesButton.addEventListener('click', function(){
    if(shakes1.style.display = 'none'){
        shakes1.style.display = 'flex';
    }

    breakfast1.style.display = 'none';
    breakfast2.style.display = 'none';
    dinner1.style.display = 'none';
    lunch1.style.display = 'none';
    lunch2.style.display = 'none';
})

dinnerButton.addEventListener('click', function(){
    if(dinner1.style.display = 'none'){
        dinner1.style.display = 'flex';
    }

    breakfast1.style.display = 'none';
    breakfast2.style.display = 'none';
    shakes1.style.display = 'none';
    lunch1.style.display = 'none';
    lunch2.style.display = 'none';
})


