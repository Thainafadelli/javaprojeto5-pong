let xbola = 300; //coordenada x bola
let ybola = 200; //coordenada y bola
let diametro = 20; //diâmetro bola
let raio = diametro/2; 
let xvb = 6;
let yvb = 6;
let xr = 5;
let yr = 150;
let lr = 7;

let ar = 80;
let xri = 585;
let yri = 150;

let meuspontos = 0;
let pontosdoinimigo = 0;

let colidiu = false

function setup() {
  createCanvas(600, 500)
}

function draw() {
  background("#993E8B");
  mostrabola();
  mexebola();
  quicabola();
  mostraraquete(xr,yr);
  mostraraquete(xri,yri);
  mexeraqueteinimigo();
  mexeraquete();
  quicaraquetebola(xri, yri);
  quicaraquetebola(xr, yr);
  pontos();
  placar();
  texto();
}

function preload(){
  ponto = loadSound("ponto.wav")
  raquete = loadSound("raquete.mp3")
}

function mostrabola(){
 circle(xbola,ybola,diametro);
}
function mexebola(){
  xbola += xvb;
  ybola += yvb;
}
function quicabola(){
  if (xbola + raio > width  || xbola - raio < 0){
    xvb *= -1
  }
  
  if (ybola + raio > height  || ybola - raio < 0){
    yvb *= -1
  }
  
}

function mostraraquete(x,y) {
  rect(x,y,lr,ar);
}

function mexeraquete() {
  if (keyIsDown(UP_ARROW))
    yr -=10;
  
  if (keyIsDown(DOWN_ARROW))
    yr +=10;
}

function mexeraqueteinimigo(){
  if (keyIsDown(87))
    yri -=10;
  
  if (keyIsDown(83)) //w
    yri += 10;
}

function quicaraquetebola(x,y){
  colidiu = collideRectCircle(x,y,lr, ar, xbola, ybola, raio);
  
  if(colidiu){
    xvb *= -1;
    raquete.play()
  }
}

function pontos(){
  if (xbola>590){
    meuspontos += 1
    ponto.play()
  }
   if (xbola<10){
    pontosdoinimigo += 1
     ponto.play()
  }
}


function placar(){
  stroke("white");
  textAlign(CENTER);
  textSize(20);
  fill("rgb(228,113,228)");
  rect(150,10,40,20);
  fill("rgb(255,255,255)");
  text(meuspontos,170,12.5);
  fill("lightblue");
  rect(430,10,40,20);
  fill("rgb(250,247,247)");
  text(pontosdoinimigo,450,12.5);
 }

function texto(){
  let frase = "MEUS PONTOS"
  let xf = 90;
  let yf = 40;
  textSize(20);
  textAlign(LEFT, TOP);
  fill("rgb(255,253,253)");
  text(frase, xf, yf);
  
  let frase2 = "PONTOS DO INIMIGO"
  let xf2 = 330;
  let yf2 = 40;
  textSize(20);
  textAlign(LEFT, TOP);
  fill("white");
  text(frase2, xf2, yf2);
  
  
  
}

