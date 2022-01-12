const emprendedorCtrl = {}

const Emprendedor = require ('../models/Emprendedor');




emprendedorCtrl.getEmprendedores =  async (req, res) => {
    const emprendedores= await Emprendedor.find( );
    res.json (emprendedores);

}


emprendedorCtrl.createEmprendedor =  async (req, res) => {

    console.log (req.body);

    const {  nombre, activo, tags, resena, telefono, mail, redes, imagen, nombre_emprendimiento } = req.body;

      const newEmprendedor= new Emprendedor ({
        nombre, 
        activo, 
        tags, 
        resena, 
        telefono, 
        mail, 
        redes, 
        imagen,
        nombre_emprendimiento})
        
        await newEmprendedor.save();
        


    res.json ({message : ['Crear emprendedor']})

}
emprendedorCtrl.deleteEmprendedor =  
        async (req, res) => {
            await Emprendedor.findByIdAndDelete (req.params.id);
            res.json ({message : ['Borrar Emprendedor']})

        }

emprendedorCtrl.updateEmprendedor=  
        async (req, res) => {
            
           
            const {  nombre, activo, tags, resena, telefono, mail, redes, imagen, nombre_emprendimiento} = req.body;
                  
           
            await Emprendedor.findOneAndUpdate (req.params.id,  { nombre, activo, tags, resena, telefono, mail, redes, imagen,nombre_emprendimiento })
            
          
            res.json ({message : ['Emprendedor Actualizado']})
        }


        



emprendedorCtrl.getEmprendedor= 
        async (req, res) => {
        const emprendedor=  await Emprendedor.findById (req.params.id);
        res.json (emprendedor)
    } 

module.exports = emprendedorCtrl;