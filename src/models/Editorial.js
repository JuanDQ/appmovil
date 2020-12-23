const mongoose = require('mongoose');

const EditorialSchema= mongoose.Schema({

    codigo:{
        type: Number,
        min:1
    },
    nombre:{
        type: String,
        minlength:3,
        require: true
    },
    pais:{
        type: String,
        minlength:3
        
    },

    formato:{
        type:String,
        min:3
    },

    añoP:{
        type:String,
        minlength:4
    }

});

module.exports=mongoose.model('Editorial',EditorialSchema);