/*
Arthurzin :D 

fiz a aula de programação condicional hoje (30/05/2023)
*/
//estados do jogo (inicio,jogando,fim_de_jogo)

var estado = "inicio";

var estado = 'fim_de_jogo';

//barrinha do player (raquete)

var Raquete;

//barrinha do pc (raquete)

var raquete_pc;

//bolinha

var bola;

//estradinha (rede)

var rede;

//configurações

function setup()

{

//criar a tela

createCanvas(500,500);

//sprites das raquetes x,y,largura,altura

raquete = createSprite(10,250,10,80);

raquete.shapeColor = "black";

raquete_pc = createSprite(490,250,10,80);

raquete_pc.shapeColor = 'black';

//raquete_pc.velocityY = 8;

//raquete_pc.velocityX = 0;

 

bola = createSprite(250,250,20,20);

bola.shapeColor = 'black';

bola.velocityX = 5;

bola.velocityY = 5;

//paredes

parede_cima = createSprite(250,0,500,5);

parede_cima.shapeColor = "black";

parede_baixo = createSprite(250,500,500,5);

parede_baixo.shapeColor = "black";

}

//acontecer dentro da tela

function draw()

{

 //fundo da tela :)

 background('gray');

 

 

 //valor boleano = verdadeiro(funciona) ou falso (nao funciona)

 // 12 == 1 - iguais (verdadeiros) 

 // 12 === 1 - nao sao iguais (falso) 

 

 console.log(12 === 1);

 

 

 

 if(estado === "inicio")

 {

  fill('red');

  textSize(25);

  text("Aperte espaço para começar",100,100);

 }

 //controle

 raquete.y = World.mouseY;

 //IA

 raquete_pc.y = bola.y;

//programação condicional - IF (se)

/*

if(condição)            if(eu sair)

{                 {

 consequencia            eu vou comer um sorvete

}                 }

*/ 

//se a bola no x for menor que 0 voltar para o inicio

if(bola.x<0)

{

 estado = "inicio";

 bola.x = 250;

 bola.y = 250;

 bola.velocityX = 0;

 bola.velocityY = 0;

}

if(bola.x>500)

{

 estado = "inicio";

 bola.x = 250;

 bola.y = 250;

 bola.velocityX = 0;

 bola.velocityY = 0;

}

//keyDown() - tecla; 

 if(keyDown('space')) 

 {

 estado = 'jogando';

 bola.velocityX = 5;

 bola.velocityY = 5;

 }

 //collide- impede algo de passar

 //bounce - batida

 //bolinha quicar e voltar

 bola.bounceOff(parede_baixo);

 bola.bounceOff(parede_cima);

 bola.bounceOff(raquete_pc);

 bola.bounceOff(raquete);

 //raquete_pc.bounceOff(parede_baixo);

 //raquete_pc.bounceOff(parede_cima);

//aparecer todos os sprites na tela

drawSprites();

}