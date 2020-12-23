const {response}=require('express');
const Cliente = require('../models/Cliente');


const findAll =(req,res)=>{
 
    Cliente.find()
    .then(Clientes =>{
        res.status(200).send(Clientes)
    }).catch(err =>{
        res.status(500).send({
            "message":"ocurrio un problema" || err.message
        })
    })

}

const findOne =(req,res)=>{
 
    var cod = parseInt(req.params.codigo);
    Cliente.find({"codigo": cod})
    .then(Cliente =>{

        if(Cliente.length==0){
            console.log("no encontro cliente");
            res.status(404).send({
                "message":"no encontro el cliente"
            })
        }else{

            console.log("encontro");
            res.status(200).send(Cliente)
        }
        

    }).catch(err =>{
        res.status(500).send({
            "message":"ocurrio un problema" || err.message
        })
    })

}

const deletes =(req,res)=>{

    var cod = parseInt(req.params.codigo);
    Cliente.remove({
        "codigo":cod 
    })
        .then(Cliente=>{
            
            if(Cliente.deletedCount==0){
                console.log("ho borro");
                res.status(404).send("no encontro el cliente");
            }else{
                res.status(200).send("cliente eliminado");
            }
        }).catch(err=>{
            res.status(500).send("ocurrio un error");
        })
};



const create =(req,res)=>{

    const cliente=new   Cliente({
        codigo :req.body.codigo,
        cedula :req.body.cedula,
        nombre :req.body.nombre,
        apellido :req.body.apellido,
        telefono :req.body.telefono,
        email:req.body.email

    });
 
    cliente.save()
    .then(data =>{
        res.status(200).send(data)
    }).catch(err =>{
        res.status(500).send({
            "message":"ocurrio un problema" || err.message
        })
    })

}

const update =(req,res) =>{

    const cod=req.params.codigo;
    Cliente.update(
        {"codigo":cod},
        {
            $set:{
                codigo:req.body.codigo,
                cedula:req.body.cedula,
                nombre: req.body.nombre,
                apellido:req.body.apellido,
                telefono:req.body.telefono,
                email: req.body.email
            }
        }

    )
    .then(cliente=>{
        
        res.status(200).send(cliente);
    }).catch(err=>{
        res.status(500).send("ocurrio un error")
    })
}

module.exports={
    findAll,
    findOne,
    create,
    deletes,
    update
}