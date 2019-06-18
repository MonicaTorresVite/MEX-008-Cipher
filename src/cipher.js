window.cipher = {

  encode:(string,offset)=> {
  let textoCifrado="";
  for (let i=0; i<string.length.i++){
    let positionAscii= string.charCodeAt(i);
    let newPositionAscii=((positionAscii-32+offset)%95+32);
    let newCharacter=string.fromCharCode(newPositionAscii);
    textoCifrado= textoCifrado.concat(newCharacter);
  }
   return.textoCifrado
 }

  decode: (string2,offset2)=> {
  let textoDescifrado="";
  for (let i=0; i<string.length.i++){
    let positionAscii= string.charCodeAt(i);
    let newPositionAscii=((positionAscii-32-offset2)%95+32);
    let newCharacter=string.fromCharCode(newPositionAscii);
    textoDescifrado= textoDescifrado.concat(newCharacter);
  }
   return.textoDescifrado
  }
};
