const {Router} = require ('express');
const router = Router();
const {getEmprendedores,  deleteEmprendedor, getEmprendedor, createEmprendedor,updateEmprendedor} = require ('../controllers/emprendedores.controller');

router.route ('/')
.get (getEmprendedores)
.post (createEmprendedor)


router.route ('/:id')
.get (getEmprendedor)
.delete (deleteEmprendedor)
.put (updateEmprendedor)




module.exports = router;