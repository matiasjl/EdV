// URNA original en Java de Emiliano Causa, adaptación a js por Matias JL - 2021

class Urna {

    //int cantidad;
    //boolean urn[];
    //int sacados;
    //int cont;
  
    //-------------------------------------
    constructor( cantidad_ ) {
  
      this.cantidad = cantidad_;
      this.urn = [];
      this.sacados = 0;
      this.cont = 0;
      
      this.reset();
    }
  
    //-------------------------------------
    sacar() {
      this.resultado = -1;
      if ( ! this.vacia() ) {
        
        this.tirada = parseInt( Math.random() * this.cantidad );
        this.incrementar( this.tirada );

        if ( ! this.urn[ this.cont ] ) {
  
          this.urn[ this.cont ] = true;
          this.sacados ++;
          this.resultado = this.cont;
        }
        else {
          this.encontro = false;
  
          for (this.i=0; this.i<this.cantidad && !this.encontro; this.i++) {
  
            this.incrementar( 1 );
            if ( ! this.urn[this.cont] ) {
              this.urn[this.cont] = true;
              this.sacados++;
              this.resultado = this.cont;
              this.encontro = true;
            }
          }
        }
        //aquí mod para que sea infinita | JL
        if ( this.vacia() ){
          this.reset();
        }
      }
      return this.resultado;
    }
    //----------------------------
    vacia() {
      return this.sacados >= this.cantidad;
    }
    //----------------------------
    incrementar( valor ) {
    this.cont = (this.cont+valor) % this.cantidad;
    }
  
    //--------------------------------
    reset() {
      for (this.i=0; this.i < this.cantidad; this.i++) {
        this.urn [this.i] = false;
      }
      this.sacados = 0;
      this.cont = 0;
    }
  }