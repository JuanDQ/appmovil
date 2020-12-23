const {Router} = require ('express');
const {model}=require('mongoose');

const router =Router();



const{lfindAll,lfindOne,lcreate,ldeletes,lupdate}=require('../controllers/Libro.controller');

router.get('/api/libros', lfindAll);
router.get('/api/libros/:codigo',lfindOne)
router.post('/api/libros',lcreate)
router.delete('/api/libros/:codigo',ldeletes)
router.put('/api/libros/:codigo',lupdate)

module.exports =router;