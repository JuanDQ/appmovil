const {response}=require('express');
const Libro = require('../models/Libro');


const lfindAll =(req,res)=>{
 
    Libro.find()
    .then(Libro =>{
        res.status(200).send(Libro)
    }).catch(err =>{
        res.status(500).send({
            "message":"ocurrio un problema" || err.message
        })
    })

}

const lfindOne =(req,res)=>{
 
    var cod = parseInt(req.params.codigo);
    Libro.find({"codigo": cod})
    .then(Libro =>{

        if(Libro.length==0){
            console.log("no encontro cliente");
            res.status(404).send({
                "message":"no encontro el cliente"
            })
        }else{

            console.log("encontro");
            res.status(200).send(Libro)
        }
        

    }).catch(err =>{
        res.status(500).send({
            "message":"ocurrio un problema" || err.message
        })
    })

}

const ldeletes =(req,res)=>{

    var cod = parseInt(req.params.codigo);
    Libro.remove({
        "codigo":cod 
    })
        .then(Libro=>{
            
            if(Libro.deletedCount==0){
                console.log("ho borro");
                res.status(404).send("no encontro el cliente");
            }else{
                res.status(200).send("cliente eliminado");
            }
        }).catch(err=>{
            res.status(500).send("ocurrio un error");
        })
};



const lcreate =(req,res)=>{

    const libro= new   Libro({
        codigo :req.body.codigo,
        nombre :req.body.nombre,
        autor :req.body.autor,
        precio :req.body.precio
    });
 
    libro.save()
    .then(data =>{
        res.status(200).send(data)
    }).catch(err =>{
        res.status(500).send({
            "message":"ocurrio un problema" || err.message
        })
    })

}

const lupdate =(req,res) =>{

    const cod=req.params.codigo;
    Libro.update(
        {"codigo":cod},
        {
            $set:{
                codigo:req.body.codigo,
                nombre: req.body.nombre,
                autor:req.body.autor,
                precio: req.body.precio
            }
        }

    )
    .then(libro=>{
        
        res.status(200).send(libro);
    }).catch(err=>{
        res.status(500).send("ocurrio un error")
    })
}

module.exports={
    lfindAll,
    lfindOne,
    lcreate,
    ldeletes,
    lupdate
}