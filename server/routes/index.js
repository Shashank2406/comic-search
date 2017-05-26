var express = require('express');
var router = express.Router();

var userController = require('../controllers/user');

// router.route('/users')
//   .post(userController.postUsers)
//   .get(userController.getUsers);

// router.route('/users/update/:id')
// 	.put(userController.updateUsers)
// 	.delete(userController.deleteUsers) 
//   .get(userController.idsearch);

// router.route('/users/search/:reg')
//   .get(userController.regexsearch);
router.route('/user')
 .post(userController.postuser)
 .get(userController.getuser)

router.route('/user/verify')
 .post(userController.searchuser) 


router.route('/series')
 .post(userController.postseries)
 .get(userController.getseries)

 router.route('/season')
 .post(userController.postseason)
 .get(userController.getseason)

 router.route('/comic')
 .post(userController.postcomic)
 .get(userController.getcomic)

 router.route('/comic/:reg')
 .get(userController.searchcomic)

module.exports = router;

