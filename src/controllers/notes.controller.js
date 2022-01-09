const notesCtrl = {}

const Note = require ('../models/Note');

notesCtrl.getNotes =  async (req, res) => {
    const notes= await Note.find( );
    res.json (notes);
}




notesCtrl.createNote =  async (req, res) => {

    const { title, content, date, author } = req.body;

    console.log (req.body);


    const newNote = new Note ({
        title,
        content,
        date,
        author})
        
        await newNote.save();
        

    res.json ({message : ['Crear nota']})

}
notesCtrl.deleteNote =  
        async (req, res) => {
            await Note.findByIdAndDelete (req.params.id);
            res.json ({message : ['Borrar Nota']})

        }



notesCtrl.updateNote =  
        async (req, res) => {
            
            const { title, content, date, author } = req.body;
            await Note.findOneAndUpdate (req.params.id,  {title, content, date, author})
           
            res.json ({message : ['Nota Actualizada']})
        }

notesCtrl.getNote= 
        async (req, res) => {
        const note =  await Note.findById (req.params.id);
        res.json (note)
    } 

module.exports = notesCtrl;