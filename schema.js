const mongoose = require('mongoose');
const menuSchema = new mongoose.Schema({
    name:{
        type: String,
        required : true,
    },
    description:{
        type: String,
        required : true ,
    },
    price:{
       type: Number,
       required: true,
    }
})
    const menuitem = mongoose.model('menuItem',menuSchema);
    module.exports = menuitem;