
const { Schema, model } = require ('mongoose');

const taskSchema = new Schema({
    name : {
        type: String,
        unique: true,
        require: true,
        
    },
    done: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: new Date()
    },
    delete:{
        type: Boolean,
        default: false
    },
})

module.exports = model('Task', taskSchema)