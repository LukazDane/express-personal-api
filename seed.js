// This file allows us to seed our application with data
//simply run: `node seed.js` from the root of this project folder.

const db = require('./models');

const new_palette = {description: "Shade out of nowhere."}

db.Palette.create(new_palette, function(err, palette){
  if (err){
    return console.log("Error:", err);
  }

  console.log("Created new palette", palette._id)
  process.exit(); // we're all done! Exit the program.
})
