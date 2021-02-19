const mongoose = require('mongoose')
const feld = {
    title:String,
    content:String,
    major:String
}
//自动添加更新时间创建时间:
let personSchema = new mongoose.Schema(feld, {timestamps: {createdAt: 'created', updatedAt: 'updated'}})
module.exports= mongoose.model('arti',personSchema)
