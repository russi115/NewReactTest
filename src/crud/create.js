require('../connection')

const Task = require('../models/Task')

const createProduct = async() =>{

    const laptopone = new Task({
        name: 'laptop',
        description: 'htp pavition'
    })
    await laptopone.save();
} 

createProduct()