const botonEscribir = document.getElementById ('botonEscribir');
const botonRevelar = document.getElementById('botonRevelar');
const botonCifrar= document.getElementById("botonCifrar");
const botonInicio= document.getElementById("botonInicio");
const botonInicio2= document.getElementById("botonInicio2");
const primerSeccion = document.getElementById('primerSeccion');
const textoCifrar = document.getElementById ('textoCifrar');
const textoCifrado= document.getElementById ("textoCifrado");
const seccionCifrar= document.getElementById ("seccionCifrar");
const textoDescifrar = document.getElementById ('textoDescifrar');
const textoDescifrado= document.getElementById ("textoDescifrado");
const seccionDescifrar= document.getElementById ("seccionDescifrar");
const offset= document.getElementById("offset");

const mostrarSeccionCifrar = ()=> {
  primerSeccion.classList.add ("desaparecer");
  botonEscribir.classList.add ("desaparecer");
  botonRevelar.classList.add ("desaparecer");
  seccionCifrar.classList.remove ("desaparecer");
}
const mostrarTextoCifrado = ()=> {
  textoCifrado.classList.remove ("desaparecer");
}
const botonIniciar = () => {
  seccionCifrar.classList.add ("desaparecer");
  primerSeccion.classList.remove ("desaparecer");
  botonEscribir.classList.remove ("desaparecer");
  botonRevelar.classList.remove ("desaparecer");
  textoCifrado.classList.add ("desaparecer");
}
const mostrarSeccionDescifrar = ()=> {
  primerSeccion.classList.add ("desaparecer");
  botonEscribir.classList.add ("desaparecer");
  botonRevelar.classList.add ("desaparecer");
  seccionDescifrar.classList.remove ("desaparecer");
}
const mostrarTextoDescifrado = ()=> {
  textoDescifrado.classList.remove ("desaparecer");
}
const botonIniciar2 = () => {
  seccionDescifrar.classList.add ("desaparecer");
  primerSeccion.classList.remove ("desaparecer");
  botonEscribir.classList.remove ("desaparecer");
  botonRevelar.classList.remove ("desaparecer");
  textoDescifrado.classList.add ("desaparecer");
}


botonEscribir.addEventListener ("click", mostrarSeccionCifrar);
botonCifrar.addEventListener ("click", mostrarTextoCifrado);
botonInicio.addEventListener ("click", botonIniciar);
botonRevelar.addEventListener ("click", mostrarSeccionDescifrar);
botonDescifrar.addEventListener ("click", mostrarTextoDescifrado);
botonInicio2.addEventListener ("click", botonIniciar2);
