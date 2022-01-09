const {Router} = require ('express');
const router = Router();
const {getImages,  deleteImage, getImage, createImage} = require ('../controllers/images.controller');

router.route ('/')
.get (getImages)

router.route ('/upload')
.post (createImage)

router.route ('/:id')
.get (getImage)
.delete (deleteImage)










module.exports = router;