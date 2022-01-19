const imagesCtrl = {}

const Image = require ('../models/Image');

imagesCtrl.getImages =  async (req, res) => {
    
    res.json ('images routes')
}




imagesCtrl.createImage =  async (req, res) => {

    

    const {file} = req.files;

    
    res.json ('Images post')

}

imagesCtrl.deleteImage =  
        async (req, res) => {
            await Image.findByIdAndDelete (req.params.id);
            res.json ({message : ['Borrar images']})

        }




        imagesCtrl.getImage= 
        async (req, res) => {
        const note =  await Image.findById (req.params.id);
        res.json (image)
    } 

module.exports = imagesCtrl;