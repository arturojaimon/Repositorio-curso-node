const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    describe: 'es la base de la tabla de multiplicar'
                })
                .option('l',{
                  alias: 'listar',
                  type: 'boolean',
                  default: 'false',
                  describe: 'lista la tabla de multiplicar'
                })
                .option('h',{
                  alias: 'hasta',
                  type: 'number',
                  describe: 'marca el limite de numeros a multiplicar',
                  default: 10
                })
                .check((argv, options) =>{
                    console.log('yargs', argv)
                    if(isNaN(argv.base)){
                      throw 'la base tiene que ser un numero'
                    }
                    return true
                })
                .argv;
module.exports = argv;                