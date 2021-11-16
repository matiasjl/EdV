const NOMBRES_ARCHIVOS = [
  " ",
  " ",
  " ",
  " ",
  " ",
  " ",
  "EdVidentidad.txt",
];
const TAMANIOS = [30, 30, 30];
let lines;  // ----------------------------- GRUPO DE DATOS
let ENCUENTROS = [];
let IDENTIDAD;

// ----------------------------------------- CARGA

function cargarTextos(k) {
  //x: cantidad de archivos - id: número desde cual comienza
  //k: cantidad total de txts a levantar
  for (i = 6; i < k; i++) {
    print(i + ": " + ("assets/" + NOMBRES_ARCHIVOS[i]));
    //let aux = loadStrings("assets/" + NOMBRES_ARCHIVOS[int(id+i-1)] + (id+i) + ".txt");
    ENCUENTROS[i] = loadStrings("assets/" + NOMBRES_ARCHIVOS[i]);
    //rint(ENCUENTROS.length);  // ACA NO FUNCIONA: ¿tarda en cargarlo...?
        
    
    //OLDER
    /*
    for (j = 0; j < aux.length; j++) {
      //if(aux[j] != ""){
        print("entro");
        print(aux[j]);
        lines.push(aux[j]);
      //}
    }
  }
  */
  //print("ID #"+id+" = "+lines.length);
  }
}