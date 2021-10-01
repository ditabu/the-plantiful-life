const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
//Require your User Model here!
const Plantista = require('../models/plantista');

// configuring Passport!
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK,
  },

  function(accessToken, refreshToken, profile, cb) {
    // a user has logged in via OAuth!
    // refer to the lesson plan from earlier today in order to set this up
    console.log(profile, "Profile")


    Plantista.findOne({'googleId': profile.id}, function (err, plantistaDoc){
      if (err) return cb(err);
      if (plantistaDoc) {
        return cb(null, plantistaDoc);
      } else {
        const newPlantista = new Plantista({
          name: profile.displayName,
          email: profile.emails[0].value,
          googleId: profile.id,
        });

        newPlantista.save(function(err) {
          if (err) return cb(err);
          return cb(null, newPlantista);
        });
      }
    });
  } 
));

passport.serializeUser(function(plantista, done) {
  done(null, plantista.id);
});

passport.deserializeUser(function(id, done) {
  // Find your User, using your model, and then call done(err, whateverYourUserIsCalled)
  // When you call this done function passport assigns the user document to req.user, which will 
  // be availible in every Single controller function, so you always know the logged in user
  Plantista.findById(id, function (err, plantistaDoc) {
    done(err, plantistaDoc);
  });
});



