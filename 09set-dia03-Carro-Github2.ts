declare function require(msg : string) : any;
var readline = require('readline-sync') ;

import {Carro} from './09set-dia03-Carro-Github' ;

let usuario : number = Number (readline.question("Escolha uma opção: \n 1 - embarcar \n 2 -abastecer \n 3 - andar \n 4 - desembarcar"))
