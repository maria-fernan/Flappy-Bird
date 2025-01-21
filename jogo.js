const sprites = new Image();
sprites.src = './sprites.png';

const canvas = document.querySelector('#game-canvas');
const contexto = canvas.getContext('2d');

contexto.fillStyle = '#70c5ce';
contexto.fillRect(0,0, canvas.clientWidth, canvas.height)

const flappyBird = {
    spriteX: 0,
    spriteY: 0,
    largura: 35,
    altura: 25,
    x: 10,
    y: 50,
        desenha(){
            contexto.drawImage(
                sprites,
                flappyBird.spriteX, flappyBird.spriteY, 
                flappyBird.largura, flappyBird.altura,
                flappyBird.x, flappyBird.y,
                flappyBird.largura, flappyBird.altura,
            );
        },
        gravidade: 0.25,
        velocidade: 0,
        atualiza(){
            flappyBird.velocidade += flappyBird.gravidade;
            flappyBird.y = flappyBird.y + flappyBird.velocidade;
        }
}

const fundo = {
    spriteX: 391,
    spriteY: 0,
    largura: 280,
    altura: 202,
    x: 665,
    y: 204,
        desenha(){
            contexto.drawImage(
                sprites,
                fundo.spriteX, fundo.spriteY, 
                fundo.largura, fundo.altura,
                fundo.x, fundo.y,
                fundo.largura, fundo.altura,
            );
        }
}



const inicio = {
    spriteX: 130,
    spriteY: 0,
    largura: 180,
    altura: 152,
    x: 70,
    y: 70,
        desenha(){
            contexto.drawImage(
                sprites,
                inicio.spriteX, inicio.spriteY, 
                inicio.largura, inicio.altura,
                inicio.x, inicio.y,
                inicio.largura, inicio.altura,
            );
        }
}

const TelaInicio = {
    desenha(){
        fundo.desenha();
        chao.desenha();
        flappyBird.desenha();
        inicio.desenha();
    },
    click(){
        telaAtiva = TelaJogo;
    }
}
const TelaJogo = {
    desenha(){
        fundo.desenha();
        chao.desenha();
        flappyBird.desenha();
        flappyBird.atualiza();
    },
    click(){}
}

var telaAtiva = TelaInicio;
function mudaTelaAtiva(){
    telaAtiva.click();
}
window.addEventListener("click", mudaTelaAtiva)

function loop(){
    telaAtiva.desenha()
    requestAnimationFrame(loop);
}
loop();