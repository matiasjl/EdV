// @redtek 2021
// 10 VERSIÓN ESTABLE v1.1
// updates: urna, tamaño texto dinámico, limpieza de código

let lines = [];
let tapMe;//boolean para definición de colores
let item; //linea de texto seleccionada (temporal)
let d;    //div contenedor
let p;    //id haiku
let u;    //urna para evitar repetición
let t;    //contenido de la etiqueta html <title>

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

  //INICIALIZA CLASE URNA CON CANTIDAD DE DATOS
  u = new Urna( lines.length );

  setShakeThreshold(30);
}

function dibujar(){
  tapMe = !tapMe;

  d.style.backgroundColor = tapMe ? "white" : "black";
  p.style.color = tapMe ? "black" : "white";
  p.innerText = item; //así cambio el texto en la etiqueta p con id "haiku"
}

function randomLine() {
  let x = u.sacar();  //aleatoriedad resuelta con urna 
  item = lines[x];

  //let mp = int( map( item.length, 0, 150, 500, 200 ) ); //funciones de p5...
  //p.style.fontSize = mp + "%";
  let mp = int( map( item.length, 0, 150, 60, 24 ) ); //funciones de p5...
  p.style.fontSize = mp + "pt"; 

  dibujar();
}

function welcome(name){
  //INICIALIZO TITLE Y P
  t.innerText = name;
  p.style.fontSize = "48" + "pt";
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

function deviceShaken() { //NO funciona en todos los navegadores
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