// Creu una altra que imprimeixi per pantalla el que
// llegeixi d'un fitxer.

const fs = require('fs');

fs.readFile('./readWhat.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});