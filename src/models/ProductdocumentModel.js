const mongoose=require('mongoose')
const productdocSchema =new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String
    },
    price: {
        type: Number,
        required: true
    }
}, {timestamps: true} )

module.exports=mongoose.model('productdoc',productdocSchema)