const mongoose = require('mongoose'),
Schema = mongoose.Schema;

const Palette = new Schema({
   description: String
 });

 const Palette = mongoose.model('Palette', PaletteSchema);

 module.exports = Palette;
