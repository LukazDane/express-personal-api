// require express and other modules
const express = require('express');
const app = express();
const mongoose = require('mongoose')
// parse incoming urlencoded form data
// and populate the req.body object
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

// const db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */


app.get('/api', (req, res) => {
  // TODO: Document all your api endpoints below as a simple hardcoded JSON object.
  // It would be seriously overkill to save any of this to your database.
  // But you should change almost every line of this response.
  res.json({
    woopsIForgotToDocumentAllMyEndpoints: false,
    message: "Welcome to my personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/LukazDane/express-personal-api/blob/master/README.md", // CHANGE ME
    baseUrl: "https://fierce-taiga-34325.herokuapp.com/", // CHANGE ME
    endpoints: [
        {method: "GET",
      path: "/api",
      type: ["canvas", "primed canvas", "white paper", "acid-free paper", "glass", "any and every thing!!" ], //
      forTone: "These colors look great on" + type + "!",
      description: "Describes all available endpoints",
        shade: {
          cool: ["blue", "sea foam", "periwinkle"],
          warm: ["red", "umber", "yellow"],
          neutral: ["black", "white", "rust", "port-wine", "hunter-green", "bronze", "charcoal"]
      }
    },
        {method: "GET", 
      path: "/api/profile", 
      description: "Data about me"}, 
        {method: "POST", 
      path: "/api/palette", 
      description: "Makes a swatch"}, 
        {method: "PUT", 
      path: "/api/palette", 
      description: "Edit color choices"},
        {method: "DELETE", 
      path: "/api/palette", 
      description: "Deletes entire pallete"},
        {method: "", 
      path: "/api/", 
      description: ""}
    ]
  })
});

/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, () => {
  console.log('Express server is up and running on http://localhost:3000/');
});
