var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

exports.setup = function (User, config) {
  passport.use(new GoogleStrategy({
      clientID: '180588592656-jb71k5ja1qg0dk63u68io7np334ksjl0.apps.googleusercontent.com',
      clientSecret: 'MSba_P3mwJvnOdoMTSm6Uwbu',
      callbackURL: '/'//config.google.callbackURL
  },
    function(accessToken, refreshToken, profile, done) {
      User.findOne({
        'google.id': profile.id
      }, function(err, user) {
        if (!user) {
          user = new User({
            name: profile.displayName,
            email: profile.emails[0].value,
            role: 'user',
            username: profile.username,
            provider: 'google',
            google: profile._json
          });
          user.save(function(err) {
            if (err) done(err);
            return done(err, user);
          });
        } else {
          return done(err, user);
        }
      });
    }
  ));
};
