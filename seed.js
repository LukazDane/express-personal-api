// This file allows us to seed our application with data
//simply run: `node seed.js` from the root of this project folder.

const db = require('./models');

// remove all records that match {} -- which means remove ALL records
db.Palette.deleteMany({}, function(err, books){
    if(err) {
      console.log('Error occurred in remove', err);
    } else {
      console.log('removed all palettes');
  
      // create new records based on the array books_list
      db.Palette.create(palettes_list, function(err, palettes){
        if (err) { return console.log('err', err); }
        console.log("created", palettes.length, "palettes");
        process.exit();
      });
    }
  });
  
// db.Palette.create(new_palette, function(err, palette){
//   if (err){
//     return console.log("Error:", err);
//   }

//   console.log("Created new palette", palette._id)
//   process.exit(); // we're all done! Exit the program.
// })
