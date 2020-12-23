const mongoose = require('mongoose');

const LibroSchema= mongoose.Schema({

    codigo:{
        type: Number,
        min:1
    },
    nombre:{
        type: String,
        minlength:3,
        require: true
    },
    autor:{
        type: String,
        minlength:3
        
    },

    precio:{
        type:Number,
        min:1
    }

});

module.exports=mongoose.model('Libro',LibroSchema);