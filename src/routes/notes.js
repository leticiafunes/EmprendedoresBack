const {Router} = require ('express');
const router = Router();
const {getNotes,  deleteNote, getNote, updateNote, createNote} = require ('../controllers/notes.controller');

router.route ('/')
//.get ((req, res) => res.send ('notes routes') )
.get (getNotes )
//.post ((req, res) => res.send ('POST notes routes') )
.post (createNote )

router.route ('/:id')
.get (getNote )
.put (updateNote )
.delete (deleteNote )




module.exports = router;