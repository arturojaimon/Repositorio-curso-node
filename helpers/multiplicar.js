const fs = require("fs");
const crearArchivo = async (numero, listar = false, hasta) => {
  try {
    let salida = "";
    for (let i = 1; i <= hasta; i++) {
      let resultado = numero * i;
      salida += `${resultado}\n`;
    }
    if(listar === true){
      console.log(salida)
    }
    fs.writeFileSync(`tabla-${numero}.txt`, salida);
    return `tabla del ${numero}.txt`;
  }
  catch(err){
    throw err
  } 
};
module.exports = { crearArchivo };
