// @redtek 2021
// 09 VERSIÓN ESTABLE FINAL EN HTML x 4

let lines = [];
let tapMe;
let item;
let tam;
let d;
let p;
let t;

function preload() {
  //CARGA LAS LINEAS DEL TEXTO EN UN ARRAY
  lines = loadStrings("assets/" + NOMBRE_ARCHIVO);
}

function setup() {
  noCanvas();

  //seteos iniciales
  d = document.getElementsByClassName("contenedor")[0];
  p = document.getElementById("haiku");
  t = document.getElementById("titulo");
  welcome( NAME );

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
  let x = int(random(lines.length));
  item = lines[x];
  p.style.fontSize = "24pt";

  dibujar();
}

function welcome(name){
  //INICIALIZO TITLE Y P
  t.innerText = name;
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
  welcome( NAME );
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