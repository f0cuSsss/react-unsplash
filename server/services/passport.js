const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');
const User = mongoose.model('google_users');


passport.serializeUser(async (user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (_id, done) => {
    const googleUser = await UserGoogle.findOne({ _id });
    done(null, googleUser)
});

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
}, async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({ googleId: profile.id });
    if(existingUser) {
        done(null, existingUser);
    }

    const user = await new User({ googleId: profile.id });
    done(null, user);
}));