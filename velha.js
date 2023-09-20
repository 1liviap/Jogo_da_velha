var jogador, vencedor = null;

var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');
var jogadorXVitorias = 0;
var jogadorOVitorias = 0;

atualizarPlacar();

mudarJogador('X')

    function mudarJogador(valor) {
        jogador = valor;
        jogadorSelecionado.innerHTML = jogador;

        if (jogador === 'X') {
            jogadorSelecionado.style.color = corFonteJogadorX;
        } else {
            jogadorSelecionado.style.color = corFonteJogadorO;
        }
    }

function escolherQuadro(id){

            if(vencedor !== null){
                return;
            }

    var quadrado = document.getElementById(id);

            if(quadrado.innerHTML !== '-'){
                return;
            }

    quadrado.innerHTML = jogador;
    quadrado.style.color = (jogador === 'X') ? corFonteJogadorX : corFonteJogadorO;

    if(jogador === 'X'){
        jogador = 'O';
    }else {
        jogador = 'X'
    }

    mudarJogador(jogador);

    checaVencedor();
}

function checaVencedor(){
    var quadrado1 = document.getElementById(1);
    var quadrado2 = document.getElementById(2);
    var quadrado3 = document.getElementById(3);
    var quadrado4 = document.getElementById(4);
    var quadrado5 = document.getElementById(5);
    var quadrado6 = document.getElementById(6);
    var quadrado7 = document.getElementById(7);
    var quadrado8 = document.getElementById(8);
    var quadrado9 = document.getElementById(9);

    if(checaSequencia(quadrado1, quadrado2, quadrado3)){
        mudarCorQuadrado(quadrado1, quadrado2, quadrado3);
        mudarVencedor(quadrado1);
        return;
    }

    if(checaSequencia(quadrado4, quadrado5, quadrado6)){
        mudarCorQuadrado(quadrado4, quadrado5, quadrado6);
        mudarVencedor(quadrado4);
        return;
    }

    if(checaSequencia(quadrado7, quadrado8, quadrado9)){
        mudarCorQuadrado(quadrado7, quadrado8, quadrado9);
        mudarVencedor(quadrado7);
        return;
    }

    if(checaSequencia(quadrado1, quadrado4, quadrado7)){
        mudarCorQuadrado(quadrado1, quadrado4, quadrado7);
        mudarVencedor(quadrado1);
        return;
    }

    if(checaSequencia(quadrado2, quadrado5, quadrado8)){
        mudarCorQuadrado(quadrado2, quadrado5, quadrado8);
        mudarVencedor(quadrado2);
        return;
    }

    if(checaSequencia(quadrado3, quadrado6, quadrado9)){
        mudarCorQuadrado(quadrado3, quadrado6, quadrado9);
        mudarVencedor(quadrado3);
        return;
    }

    if(checaSequencia(quadrado1, quadrado5, quadrado9)){
        mudarCorQuadrado(quadrado1, quadrado5, quadrado9);
        mudarVencedor(quadrado1);
        return;
    }

    if(checaSequencia(quadrado3, quadrado5, quadrado7)){
        mudarCorQuadrado(quadrado3, quadrado5, quadrado7);
        mudarVencedor(quadrado3);
        return;
    }

}

function mudarVencedor(quadrado){
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
    jogadorVenceu(vencedor); 
}



function mudarCorQuadrado(quadrado1, quadrado2, quadrado3){
    quadrado1.style.background = '#d3fdc8';
    quadrado2.style.background = '#d3fdc8';
    quadrado3.style.background = '#d3fdc8';
}


function checaSequencia(quadrado1, quadrado2, quadrado3){
    var eIgual = false;

    if(quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML){
        eIgual = true;
    }

    return eIgual;
}

function reiniciar(){
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    // var quadrado1 = document.getElementById(1);
    // quadrado1.style.background = 'lightgray';
    // quadrado1.style.color = 'lightgray';
    // quadrado1.innerHTML = '-'

    // var quadrado2 = document.getElementById(2);
    // quadrado2.style.background = 'lightgray';
    // quadrado2.style.color = 'lightgray';
    // quadrado2.innerHTML = '-'

    // var quadrado3 = document.getElementById(3);
    // quadrado3.style.background = 'lightgray';
    // quadrado3.style.color = 'lightgray';
    // quadrado3.innerHTML = '-'

    // var quadrado4 = document.getElementById(4);
    // quadrado4.style.background = 'lightgray';
    // quadrado4.style.color = 'lightgray';
    // quadrado4.innerHTML = '-'

    // var quadrado5 = document.getElementById(5);
    // quadrado5.style.background = 'lightgray';
    // quadrado5.style.color = 'lightgray';
    // quadrado5.innerHTML = '-'

    // var quadrado6 = document.getElementById(6);
    // quadrado6.style.background = 'lightgray';
    // quadrado6.style.color = 'lightgray';
    // quadrado6.innerHTML = '-'

    // var quadrado7 = document.getElementById(7);
    // quadrado7.style.background = 'lightgray';
    // quadrado7.style.color = 'lightgray';
    // quadrado7.innerHTML = '-'

    // var quadrado8 = document.getElementById(8);
    // quadrado8.style.background = 'lightgray';
    // quadrado8.style.color = 'lightgray';
    // quadrado8.innerHTML = '-'

    // var quadrado9 = document.getElementById(9);
    // quadrado9.style.background = 'lightgray';
    // quadrado9.style.color = 'lightgray';
    // quadrado9.innerHTML = '-'

    var i = 1;

    while (i <= 9) {
        var quadrado = document.getElementById(i);
        quadrado.style.background = corSelecionada;
        quadrado.style.color = corSelecionada;
        quadrado.innerHTML = '-';

        i++;
    }

    mudarJogador('X');
}

function mudarCor(){
    corFonteJogadorX = '#ff71e7';
    corFonteJogadorO = '#ff71e7';
    corSelecionada = '#fdc8f4';
    var i = 1;

    while (i <= 9){
        var quadrado = document.getElementById(i);
        quadrado.style.background =  '#fdc8f4';
        quadrado.style.color =  '#fdc8f4';
        geral.style.background = '#ffe1fa';
        reinicia.style.background =  '#fdc8f4';

        i++;
    }
        
}

function mudarCor2(){
    corFonteJogadorX = '#717aff';
    corFonteJogadorO = '#717aff';
    corSelecionada = '#a9abff';
    var i = 1;

    while (i <= 9){
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#a9abff';
        quadrado.style.color = '#a9abff';
        geral.style.background = '#c6c7ff'
        reinicia.style.background = '#a9abff';

        i++;
    }
        
}

function mudarCor3(){
    corFonteJogadorX = '#bf71ff';
    corFonteJogadorO = '#bf71ff';
    corSelecionada = '#d6b1ff';
    var i = 1; 

    while (i <= 9){
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#d6b1ff';
        quadrado.style.color = '#d6b1ff';
        geral.style.background = '#e6d1ff'
        reinicia.style.background = '#d6b1ff';

        i++;
    }
        
}

function mudarCor4(){
    corFonteJogadorX = 'gray';
    corFonteJogadorO = 'gray';
    corSelecionada = 'lightgray';
    var i = 1; 

    while (i <= 9){
        var quadrado = document.getElementById(i);
        quadrado.style.background = 'lightgray';
        quadrado.style.color = 'lightgray';
        geral.style.background = 'white'
        reinicia.style.background = 'lightgray';

        i++;
    }
        
}

function jogadorVenceu(jogador) {
    if (jogador === 'X') {
        jogadorXVitorias++;
    } else {
        jogadorOVitorias++;
    }
    atualizarPlacar(); 
}


function atualizarPlacar() {
    document.getElementById('placar-jogador-x').textContent = 'Jogador X: ' + jogadorXVitorias;
    document.getElementById('placar-jogador-o').textContent = 'Jogador O: ' + jogadorOVitorias;
}

