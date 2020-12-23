const {Router} = require ('express');
const {model}=require('mongoose');

const router =Router();



const{efindAll,efindOne,ecreate,edeletes,eupdate}=require('../controllers/Editorial.controller');

router.get('/api/editorial', efindAll);
router.get('/api/editorial/:codigo',efindOne)
router.post('/api/editorial',ecreate)
router.delete('/api/editorial/:codigo',edeletes)
router.put('/api/editorial/:codigo',eupdate)

module.exports =router;