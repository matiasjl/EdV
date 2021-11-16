// @redtek 2021
// 08 VERSIÓN ESTABLE FINAL EN HTML

let ID = 1; //0 a 3: unidad de ejercicio a ejecutar

let tapMe;
let item;
let tam;
let d;
let p;

function preload() {
  //CARGA DE TODOS LOS TEXTOS
  cargarTextos(int(NOMBRES_ARCHIVOS.length));
}

function setup() {
  noCanvas();

  //seteos iniciales
  d = document.getElementsByClassName("contenedor")[0];
  p = document.getElementById("haiku");
  welcome( NAMES[ID] );

  setShakeThreshold(30);
}

function dibujar(){
  tapMe = !tapMe;
  d.style.backgroundColor = tapMe ? "white" : "black";
  p.style.color = tapMe ? "black" : "white";
  p.style.color = tapMe ? "black" : "white";
  p.innerText = item; //así cambio el texto en la etiqueta p con id "haiku"
}

function randomLine() {
  let x = int(random(ENCUENTROS[ID].length));
  item = ENCUENTROS[ID][x];
  p.style.fontSize = "24pt";

  dibujar();
}

function welcome(name){
  p.style.fontSize = "48pt";  
  item = name + "\n\n<TOUCH*ME>";
  dibujar();
}

//
// ----------------------------------------- EVENTOS DE INPUT

function keyPressed() {
  if (key == " ") {
    openFullscreen();
    randomLine();
  }
}

function deviceShaken() {
  welcome( NAMES[ID] );
}

//function mousePressed() {
function touchStarted() {
  if (touches.length == 1) { //resuelve bug multitaping
    openFullscreen();
    randomLine();
  }
}

//
// ----------------------------------------- FULLSCREEN

/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

// variable que me devuelve true si ya estoy en fullScreen
var isInFullScreen = (document.fullscreenElement && document.fullscreenElement !== null) ||
(document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
(document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
(document.msFullscreenElement && document.msFullscreenElement !== null);

/* View in fullscreen */
function openFullscreen() {
  //if (!isInFullScreen) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
      elem.msRequestFullscreen();
    //} else if (element.mozRequestFullScreen) {  /* Firefox */
    //  element.mozRequestFullScreen(); //me tiro error en chrome de iOS
    }
  //}
}