const {response}=require('express');
const Editorial = require('../models/Editorial');


const efindAll =(req,res)=>{
 
    Editorial.find()
    .then(Editorial =>{
        res.status(200).send(Editorial)
    }).catch(err =>{
        res.status(500).send({
            "message":"ocurrio un problema" || err.message
        })
    })

}

const efindOne =(req,res)=>{
 
    var cod = parseInt(req.params.codigo);
    Editorial.find({"codigo": cod})
    .then(Editorial =>{

        if(Editorial.length==0){
            console.log("no encontro editorial");
            res.status(404).send({
                "message":"no encontro el editorial"
            })
        }else{

            console.log("encontro");
            res.status(200).send(Editorial)
        }
        

    }).catch(err =>{
        res.status(500).send({
            "message":"ocurrio un problema" || err.message
        })
    })

}

const edeletes =(req,res)=>{

    var cod = parseInt(req.params.codigo);
    Editorial.remove({
        "codigo":cod 
    })
        .then(Editorial=>{
            
            if(Editorial.deletedCount==0){
                console.log("no borro");
                res.status(404).send("no encontro el editorial");
            }else{
                res.status(200).send("editorial eliminado eliminado");
            }
        }).catch(err=>{
            res.status(500).send("ocurrio un error");
        })
};



const ecreate =(req,res)=>{

    const editorial= new   Editorial({
        codigo :req.body.codigo,
        nombre :req.body.nombre,
        pais :req.body.pais,
        formato :req.body.formato,
        añoP :req.body.añoP
    });
 
    editorial.save()
    .then(data =>{
        res.status(200).send(data)
    }).catch(err =>{
        res.status(500).send({
            "message":"ocurrio un problema" || err.message
        })
    })

}

const eupdate =(req,res) =>{

    const cod=req.params.codigo;
    Editorial.update(
        {"codigo":cod},
        {
            $set:{
                codigo :req.body.codigo,
                nombre :req.body.nombre,
                pais :req.body.pais,
                formato :req.body.formato,
                año :req.body.añoP
            }
        }

    )
    .then(editorial=>{
        
        res.status(200).send(editorial);
    }).catch(err=>{
        res.status(500).send("ocurrio un error")
    })
}

module.exports={
    efindAll,
    efindOne,
    ecreate,
    edeletes,
    eupdate
}