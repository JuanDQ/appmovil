const mongoose = require('mongoose');

const ClienteSchema= mongoose.Schema({

    codigo:{
        type: Number,
        min:1
    },
    cedula:{
        type: String,
        minlength:4,
        unique: true
    },
    nombre:{
        type: String,
        minlength:3,
        require: true
    },
    apellido:{
        type: String,
        minlength:3
        
    },

    telefono:{
        type: String,
        minlength:9
    },

    email:{
        type: String,
        minlength:10
        
    }

});

module.exports=mongoose.model('Cliente',ClienteSchema);