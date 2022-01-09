require('dotenv').config();
const URI = process.env.MONGODB_URI ? process.env.MONGODB_URI :'mongodb://localhost/databasetest';
console.log ('URI: ' + process.env.MONGODB_URI);

const app = require ('./app');
const database= require ('./database');



function main () {

    app.listen (app.get ('port')); 
    console.log ('Server on port: ' + app.get ('port'));
    
}


main();
