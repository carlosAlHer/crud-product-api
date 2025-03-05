const { Validator } = require('node-input-validator');

const rules = {
    name: 'required|string|maxLength:100|minLength:2',
    description: 'required|string|maxLength:100|minLength:2' ,
    price: 'required|numeric',
    category_id: 'required|numeric'
}

const documentHasAllData = async (data) => {
    
    const validator = new Validator(data, rules)
    
    const isValid = await validator.check()

    if(!isValid)  console.log( validator.errors);

    return isValid;
}
module.exports =  { documentHasAllData } ;