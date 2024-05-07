'use strict';

const facceDado = 6;

const numeroUtente = tiraDado(facceDado);
console.log(`Utente ha tirato: ${numeroUtente}`);
const numeroComputer = tiraDado(facceDado);
console.log(`Il computer ha tirato: ${numeroComputer}`);

if (numeroUtente>numeroComputer)
    console.log('Utente vince');
else if (numeroUtente<numeroComputer)
    console.log('Computer vince');
else console.log('Pareggio');


function tiraDado(numeroFacce){
    return Math.ceil(Math.random()*numeroFacce);
}