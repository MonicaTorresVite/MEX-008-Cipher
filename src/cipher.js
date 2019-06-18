window.cipher = {

  encode:(offset,string)=> {
  let textoCifrado="";
  offset= parseInt(offset);
  for (let i = 0; i < string.length; i++) {
     let positionAscii = string.charCodeAt(i);
     if (positionAscii === 32) {
           textoCifrado = textoCifrado + ' ';
     }
  else{
    let positionAscii= string.charCodeAt(i);
    let newPositionAscii=(positionAscii-65+offset)%26+65;
    let newCharacter=String.fromCharCode(newPositionAscii);
    textoCifrado= textoCifrado.concat(newCharacter);
  }
 }
 return textoCifrado

 },

  decode: (offset,string)=> {
  let textoDescifrado="";
  offset= parseInt(offset);
  for (let i = 0; i < string.length; i++) {
     let positionAscii = string.charCodeAt(i);
     if (positionAscii === 32) {
           textoDescifrado = textoDescifrado + ' ';
     }
  else{
    let positionAscii= string.charCodeAt(i);
    let newPositionAscii=((positionAscii+65-offset)%26+65);
    let newCharacter=String.fromCharCode(newPositionAscii);
    textoDescifrado= textoDescifrado.concat(newCharacter);
  }
  }
  return textoDescifrado
}
}
