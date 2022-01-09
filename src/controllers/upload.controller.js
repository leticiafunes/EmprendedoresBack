const uploadCtrl = {}

//import { cloudinary } from '../cloudinary';

uploadCtrl.createUpload =  async (req, res) => {

try {
    const fileStr = req.files;

    console.log (fileStr)

    const uploadResponse = await cloudinary.uploader.upload(fileStr, {
        upload_preset: 'emprendedores'
    });
    console.log(uploadResponse);
    res.json({ msg: 'yaya' });
} catch (err) {
    console.error(err);
    res.status(500).json({ err: 'Something went wrong' });
}

}


module.exports = uploadCtrl;