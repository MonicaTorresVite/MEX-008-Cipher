const botonEscribir = document.getElementById ('botonEscribir');
const botonRevelar = document.getElementById('botonRevelar');
const botonCifrar= document.getElementById("botonCifrar");
const botonDescifrar= document.getElementById("botonDescifrar")
const botonInicio= document.getElementById("botonInicio");
const botonInicio2= document.getElementById("botonInicio2");
const primerSeccion = document.getElementById('primerSeccion');
const string = document.getElementById ('textoCifrar');
const nuevaCadena= document.getElementById ("textoCifrado");
const seccionCifrar= document.getElementById ("seccionCifrar");
const string2 = document.getElementById ('textoDescifrar');
const nuevaCadena2= document.getElementById ("textoDescifrado");
const seccionDescifrar= document.getElementById ("seccionDescifrar");
const offset= document.getElementById("offset");
const offset2= document.getElementById("offset2");

const mostrarSeccionCifrar = ()=> {
  primerSeccion.classList.add ("desaparecer");
  botonEscribir.classList.add ("desaparecer");
  botonRevelar.classList.add ("desaparecer");
  seccionCifrar.classList.remove ("desaparecer");
}
const mostrarTextoCifrado = ()=> {
  nuevaCadena.classList.remove ("desaparecer");
  let textoCifrado = window.cipher.encode(offset.value,string.value);
  nuevaCadena.value= textoCifrado;

}
const botonIniciar = () => {
  seccionCifrar.classList.add ("desaparecer");
  primerSeccion.classList.remove ("desaparecer");
  botonEscribir.classList.remove ("desaparecer");
  botonRevelar.classList.remove ("desaparecer");
  nuevaCadena.classList.add ("desaparecer");
}
const mostrarSeccionDescifrar = ()=> {
  primerSeccion.classList.add ("desaparecer");
  botonEscribir.classList.add ("desaparecer");
  botonRevelar.classList.add ("desaparecer");
  seccionDescifrar.classList.remove ("desaparecer");
}
const mostrarTextoDescifrado = ()=> {
  nuevaCadena2.classList.remove ("desaparecer");
  let textoDescifrado = window.cipher.decode(offset2.value,string2.value);
  nuevaCadena2.value= textoDescifrado;
}
const botonIniciar2 = () => {
  seccionDescifrar.classList.add ("desaparecer");
  primerSeccion.classList.remove ("desaparecer");
  botonEscribir.classList.remove ("desaparecer");
  botonRevelar.classList.remove ("desaparecer");
  nuevaCadena2.classList.add ("desaparecer");
}


botonEscribir.addEventListener ("click", mostrarSeccionCifrar);
botonCifrar.addEventListener ("click", mostrarTextoCifrado);
botonInicio.addEventListener ("click", botonIniciar);
botonRevelar.addEventListener ("click", mostrarSeccionDescifrar);
botonDescifrar.addEventListener ("click", mostrarTextoDescifrado);
botonInicio2.addEventListener ("click", botonIniciar2);
