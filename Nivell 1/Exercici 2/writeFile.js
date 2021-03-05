// Creu una funció que, en executar-la, escrigui el seu 
// nom en un fitxer.

const fs = require('fs');

fs.writeFile('./nom.txt', 'Hello, the file name is: nom', (err) => {
    if(err){
        console.log(err);
    }
    console.log('File created');
});
