const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    item:{
        type:String,
        required:[true,'Please insert item name']
    },
    category:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    foto:{
        type:String,
        required:false
    },
    timestamp:{
        type:Date,
        default:Date.now
    }
});

const products = mongoose.model('products', productSchema);
module.exports = products;