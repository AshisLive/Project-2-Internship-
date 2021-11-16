const UserModel= require("../models/userModel.js")

const createBook= async function (req, res) {
    var data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})    
}


const getBookData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.createBook= createBook
module.exports.getBookData= getBookData