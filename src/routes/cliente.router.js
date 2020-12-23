const {Router} = require ('express');
const {model}=require('mongoose');

const router =Router();



const{findAll,findOne,create,deletes,update}=require('../controllers/Cliente.controller');

router.get('/api/clientes', findAll);
router.get('/api/clientes/:codigo',findOne)
router.post('/api/clientes',create)
router.delete('/api/clientes/:codigo',deletes)
router.put('/api/clientes/:codigo',update)

module.exports =router;