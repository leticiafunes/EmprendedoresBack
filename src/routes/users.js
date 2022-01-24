const {Router} = require ('express');
const router = Router();
const {getUsers,  deleteUser, getUser, createUser, updateUser} = require('../controllers/users.controller');

router.route ('/')
//.get ((req, res) => res.send ('user routes') )


.get (getUsers)
//.post ((req, res) => res.send ('POST user routes') )

.post (createUser )

router.route ('/:id')
.get (getUser)


.delete (deleteUser )

.put (updateUser)


module.exports = router;