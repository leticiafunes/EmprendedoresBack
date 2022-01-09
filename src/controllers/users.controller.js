const usersCtrl = {}

const User = require ('../models/User');

usersCtrl.getUsers =  async (req, res) => { 
    
    const users = await User.find( );
    res.json (users);
}





usersCtrl.createUser =  async (req, res) => {


    const {username, nombre, apellido} = req.body;
    const newUser = new User ({
        username, 
        nombre, 
        apellido});
    await  newUser.save ();
    res.json ('Usuario Creado');
}



usersCtrl.deleteUser =  async (req, res) => {
    
    await User.findByIdAndDelete (req.params.id);
    res.json ({message : ['Borrar Usuario']})

   }


   usersCtrl.getUser  =  async (req, res) => { 
    const user = await  User.findById (req.params.id);
    res.json ({message : ['Un Usuario']})

}




module.exports = usersCtrl;


