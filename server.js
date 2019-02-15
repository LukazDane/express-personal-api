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
 let palettes = [
   {
   _id: 1,
   shade: "warm",
   //coverArt: "https://www.imageurl.com/default/this%20isnt%20a%20url"
   price: 5.99
   },
   {
   _id: 2,
   shade: "cool",
   //coverArt: "https://www.imageurl.com/default/this%20isnt%20a%20url"
   price: 4.99
   },
   {
   _id: 3,
   shade: "neutral",
   //coverArt: "https://www.imageurl.com/default/this%20isnt%20a%20url"
   price: 2.99
   },
 ]

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

// find all
app.get('/api/palettes', (req, res) => {
  db.Palettes.find(err, foundPalettes => {
    if(err) {
      console.log(`index error, $(err)`, () => {
        res.sendStatus(500);
      });
      res.json(foundPalettes);
    }});
// find 1
    app.get('api/palettes/:id', (req, res) => {
      db.Palettes.findOne({_id: req.params.id}, (err, data) => {
      if(err) {
        console.log("All T, no shade. Maybe try a paper bag...");
      }
      res.json(data);
      });
    });

      // TODO: Document all your api endpoints below as a simple hardcoded JSON object.
  // It would be seriously overkill to save any of this to your database.
  // But you should change almost every line of this response.
   res.json({
  //   woopsIForgotToDocumentAllMyEndpoints: true,
     message: "Welcome to my personal api! Here's what you need to know!",
     documentationUrl: "https://github.com/LukazDane/express-personal-api/blob/master/README.md", // CHANGE ME
     baseUrl: "https://fierce-taiga-34325.herokuapp.com/", // CHANGE ME
     endpoints: [
        {method: "GET",
  //       path: "/api",
  //       type: String,
  //       forTone: "These colors look great on" + type + "!",
  //       description: "Describes all available endpoints",
         shade: "cool"}    ]
     });
    });

/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, () => {
  console.log('Express server is up and running on http://localhost:3000/');
});
