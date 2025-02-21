const { Validator } = require('node-input-validator');

exports.documentHasAllData = async (document) => {
    //console.log(document)
    const validator = new Validator(document, {
        
        name: 'required|maxLength:100|minLength:5',
        description: 'required|maxLength:100|minLength:5' ,
        price: 'required',
        category_id: 'required',
    });
    
    const isValid = await validator.check()

    if(!isValid)  console.log( validator.errors);

    return isValid;
}