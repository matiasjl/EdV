// @redtek 2021
// 07 VERSIÓN ESTABLE FINAL

let tapMe;
//let p;  //en desuso
//let d;  //ni idea
//let FIRST_CLIC;
let ID = 6;  //identificador del texto
let item;
let tam;

let testMouse = 0;

function preload() {
  //lines = loadStrings("assets/" + NOMBRES_ARCHIVOS[6]);
  //lines = loadStrings("assets/" + NOMBRES_ARCHIVOS[6] + "7.txt");

  //TODOS
  //print(NOMBRES_ARCHIVOS.length);
  cargarTextos(int(NOMBRES_ARCHIVOS.length));

  //CONCATENO LOS TXT DE IDENTIDAD
  //const a = ENCUENTROS[6].concat(ENCUENTROS[7]);
  //const b = ENCUENTROS[8].concat(ENCUENTROS[9]);
  //IDENTIDAD = a.concat(b);
}

let w = window.innerWidth;
let h = window.innerHeight;

function setup() {
  canvas = createCanvas(w, h);
  //noCanvas();
  //fullscreen(true);
  //print(lines.length);
  textAlign(CENTER,CENTER);
  rectMode(CENTER);  //RADIUS -> probarsc
  textFont("courier");
  textWrap(WORD);  //por defecto

  //reset();  //pantalla uno
  //seteos iniciales
  welcome();

  //testCaracteres();  //para probar extensión

  setShakeThreshold(10);
  //noLoop();
}

function draw() {
  //en desuso --> VOlVIMO
  let fondo = tapMe ? 255 : 0;
  background(fondo);
  //background(testMouse);
  let texto = tapMe ? 0 : 255;
  textSize(TAMANIOS[tam]);
  fill(texto);
  
  //print(item);
  //text(item, w / 2, h / 2 );
  text(item, w / 2, h/2, w-(w/4) );
  //text(item, w / 2, h / 2, w-(w/4), h-(h/4) );
  
  noLoop();
}

function randomLine() {
  //removeElements();
  //debería hacer una URNA para que no se repitan  -----------> TO_DO

  //tet crear div: no funciona
  //d = createDiv("holi soy un div con class=wrapper");
  //d.style("class", "wrapper");
  //d.style("font-size", "16px");
  //let x = int(random(lines.length));
  let x = int(random(ENCUENTROS[ID].length));
  print(x);
  item = ENCUENTROS[ID][x];
  //p = createP(item);
  tam = int(random(0, 3)); //
  //p.style("font-size", TAMANIOS[t] + "px");

  //en desuso --> VOLVIMO
  tapMe = !tapMe;
  loop();
}

/*
function reset() {
  //en desuso
  removeElements();
  p = createP("¿IDENTIDAD?");
  p.style("font-size", "40px");
  p = createP(" ");
  p.style("font-size", "40px");
  p = createP("< TAP ME >");
  p.style("font-size", "40px");

  //body.style("background", "white");
}
*/

function welcome(){
  //FIRST_CLIC = true;
  item = "¿Identidad?\n<TOUCH*ME>";
  tam = 2;
}

/*
function testCaracteres() {
  removeElements();
  p = createP(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie purus ipsum, et porttitor nibh ornare eu. Phasellus blandit, lectus eu tellus."
  );
  p.style("font-size", "72px");
}
*/

// ----------------------------------------- EVENTOS

function keyPressed() {
  if (key == " ") {
    randomLine();
  }
  if (key == "f") {
    //fullscreen(true);
  }
}
function deviceShaken() {
  //no funca
  //randomLine();
  //reset();
  welcome();
}

function touchStarted() {
//function mousePressed() {
  //if( frameCount < 5 )  
    fullscreen(true);
  if (touches.length == 1) {  //resuelve bug multitaping
    //randomLine();
    //if (FIRST_CLIC) {
      //fullscreen(true);
      //FIRST_CLIC = false;
    //} else {
      randomLine();
    //}
  }
  //else if (touches.length == 2) {
  //  reset();
  //}
}

//testeando bug en iOS
/*
function mousePressed() {
  testMouse = 255;
  if (touches.length == 1) {
    randomLine();
  }
  loop();
}
*/

function windowResized() {
  w = window.innerWidth;
  h = window.innerHeight;
  //resizeCanvas(windowWidth, windowHeight);
  resizeCanvas(w, h);
}
