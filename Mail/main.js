'use strict';

const listaMail = [
    "antonio",
    "giovanni",
    "marco",
    "paolo"
];


const mailUtente = prompt('Inserisci mail').toLowerCase();
let inLista = false;

for (let i = 0; i < listaMail.length; i++){
    if(mailUtente===listaMail[i]){
        inLista=true;
        break;
    }
}
if(inLista) console.log('Utente in lista');
else        console.log('Utente non in lista');


