const express = require ('express');
const app = express();
const cors  = require ('cors');
//const fileUpload = require('express-fileupload');
//const cloudinary = require('cloudinary');

//settings - - -
app.set ('port', process.env.PORT || 4001);

//middlewares
app.use (cors()); //cors hace q dos servidores se conecten entre ellos (back y front por ej)
app.use (express.json()); //para q las rutas entiendan json y strings

//Para subir archivos
/*
app.use(fileUpload({      //Este comando tiene que ir arriba de la declaracion de las rutas si o si
    useTempFiles : true,
    tempFileDir : '/temp'
}));*/




//routes


app.use ('/api/notes', require ('./routes/notes')); 
app.use ('/api/users', require ('./routes/users')); 
app.use ('/api/images', require ('./routes/images')); 
app.use ('/api/upload', require ('./routes/upload')); 



//cloudinary
app.use(express.static('public'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));



module.exports = app;

