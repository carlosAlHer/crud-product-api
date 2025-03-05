const { Validator } = require('node-input-validator');

const documentHasAllData = async (data) => {
    const validator = new Validator(data, {
        name: 'required|minLength:2',
    
    });

    return await validator.check();
}
module.exports = { documentHasAllData }