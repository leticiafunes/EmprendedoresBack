const {Router} = require ('express');
const router = Router();
const {createUpload} = require ('../controllers/upload.controller');



router.route ('/nueva')
.post (createUpload)



module.exports = router;