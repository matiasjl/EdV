const NAMES = [
  "Si mi Obra fuera...",
  "Caja de herramientas",
  "TOP 10 Referentes",
  "¿Identidad?",
];
const NOMBRES_ARCHIVOS = [
  " ",
  " ",
  " ",
  "EdVidentidad.txt",
];
let lines;  // ----------------------------- GRUPO DE DATOS
let ENCUENTROS = [];
let IDENTIDAD;

// ----------------------------------------- CARGA DE TEXTKS
function cargarTextos(k) {
  //k: cantidad total de txts a levantar
  //i es = 3 porque no estan los otros txt aun y tira error
  for (i = 3; i < k; i++) {
    print(i + ": " + ("assets/" + NOMBRES_ARCHIVOS[i]));
    //let aux = loadStrings("assets/" + NOMBRES_ARCHIVOS[int(id+i-1)] + (id+i) + ".txt");
    ENCUENTROS[i] = loadStrings("assets/" + NOMBRES_ARCHIVOS[i]);
  }
}