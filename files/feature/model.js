function jsUcfirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
let model = {

  defaultmodel: function () {
    const dmodel = `const mongoose = require('mongoose');

        const Schema = mongoose.Schema;
        
        const passportLocalMongoose = require('passport-local-mongoose');
        
        const User = new Schema({
        
          username: String,
          password: String,
          OauthId: String,
          OauthToken: String,
          firstname: {
            type: String,
            default: ''
          },
          lastname: {
            type: String,
            default: ''
          },
          admin: {
            type: Boolean,
            default: false
          },
          resetToken: {
            type: String,
            default: ''
          }
        
        }
        
        );
        User.plugin(passportLocalMongoose);
        
        module.exports = mongoose.model(\`User\`, User);
        
    `;
    return dmodel;
  },
  addNewModal: function (name, modelData) {

    model = `
    const mongoose = require('mongoose');\n
    const Schema = mongoose.Schema;\n
    const passportLocalMongoose = require('passport-local-mongoose');\n
    
    const ${jsUcfirst(name)} = new Schema({\n
    
    `;

    for (const data in modelData) {
      model += `${modelData[data].name}  : `;
      model += modelData[data].type;
      model += `,\n`;
    }

    model += `});\n
    
    module.exports = mongoose.model(\`${jsUcfirst(name)}\`, ${jsUcfirst(name)});\n`;

    return model;
  }
};

module.exports = model;
