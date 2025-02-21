const { Validator } = require('node-input-validator');

exports.documentHasAllData = async (document) => {
    const validator = new Validator(document, {
        name: 'required|minLength:5',
    
    });

    return await validator.check();
}