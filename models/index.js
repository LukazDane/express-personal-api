const mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/personal-api", {useMongoClient: true});

    module.exports.Palette = require("./palette.js")
// module.exports.Campsite = require("./campsite.js.example");
