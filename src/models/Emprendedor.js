const {Schema, model} = require ('mongoose'); 
const emprendedorSchema = new Schema  ({
   
    nombre:{
        type: String,
        required: true 
    },
    nombre_emprendimiento: {
        type: String,
        required: true
    },
    rubro: {
        type: String
        
    },
    descripcioncorta: {
        type: String
    },
    imagen:{
        type: String,
        required: true
    },
    activo: {
        type: Boolean,
        required: true    
    },
    tags: {
        type: []        
    },
    resena: {
        type: String,
        required: true    
    },
    telefono: {
        type: String
       
    },
    mail: {
        type: String,
        required: true
    },
    redes: {
        type: []        
    }

},
    { timestamps: true
   
     

});

module.exports =  model ('Emprendedor', emprendedorSchema);