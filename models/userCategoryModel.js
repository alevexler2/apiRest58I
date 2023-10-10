const { Schema, model } = require('mongoose');

const userCategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  users: [{
    type: Schema.Types.ObjectId,
    ref: 'User', // Utiliza el nombre del modelo, no el nombre de la colección
  }],
});

module.exports = model('UserCategory', userCategorySchema);
