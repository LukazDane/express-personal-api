 const mongoose = require('mongoose');
 const Schema = mongoose.Schema;
 const PaletteSchema = new Schema({
    _id: Number,
    shade: String,
    // coverart: "",
    price: Number,
  });

  const Palette = mongoose.model('Palette', PaletteSchema);

 module.exports = Palette;
