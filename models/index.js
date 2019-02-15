const mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/express-personal-api", {useMongoClient: true});
mongoose.connect('mongodb://localhost/express-personal-api', { useNewUrlParser: true } );

    module.exports.Palette = require("./palette.js")
// module.exports.Campsite = require("./campsite.js.example");
