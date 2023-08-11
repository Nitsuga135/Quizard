const express = require ('express');
const router = express.Router();
const lolQuizController = require ('../controllers/lolQuizController')

router.get('/', lolQuizController.index)
router.get('/not-found', lolQuizController.error)


module.exports = router; 