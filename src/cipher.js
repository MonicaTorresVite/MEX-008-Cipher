window.cipher = {

  encode:(string,offset)=> {
  let nuevaCadena="";
  for (let i=0; i<string.length.i++){
    let positionAscii= string.charCodeAt(i);
    let newPositionAscii=((positionAscii-32+offset)%95+32);
    let newCharacter=string.fromCharCode(newPositionAscii);
    nuevaCadena= nuevaCadena.concat(newCharacter);
  }
   return.nuevaCadena
  }

  decode: (string2,offset2)=> {
  let nuevaCadena2="";
  for (let i=0; i<string.length.i++){
    let positionAscii= string.charCodeAt(i);
    let newPositionAscii=((positionAscii-32-offset2)%95+32);
    let newCharacter=string.fromCharCode(newPositionAscii);
    nuevaCadena2= nuevaCadena2.concat(newCharacter);
  }
   return.nuevaCadena2
  }
};
