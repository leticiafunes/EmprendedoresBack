const emprendedorCtrl = {}

const Emprendedor = require ('../models/Emprendedor');




emprendedorCtrl.getEmprendedores =  async (req, res) => {
    const emprendedores= await Emprendedor.find( );
    res.json (emprendedores);

}


emprendedorCtrl.createEmprendedor =  async (req, res) => {

    

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

        //Primer commit

emprendedorCtrl.updateEmprendedor=  
        async (req, res) => {
            
           
            const {  nombre, activo, tags, resena, telefono, mail, redes, imagen, nombre_emprendimiento} = req.body;
        
            const filter =  { "_id" : req.params.id }
            const respuesta = await Emprendedor.findOneAndUpdate (filter,  { nombre, activo, tags, resena, telefono, mail, redes, imagen,nombre_emprendimiento })
            
        
            res.json ({message : ['Emprendedor Actualizado']})
        }





        



emprendedorCtrl.getEmprendedor= 
        async (req, res) => {
        const emprendedor=  await Emprendedor.findById (req.params.id);
        res.json (emprendedor)
    } 

module.exports = emprendedorCtrl;