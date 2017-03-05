import passport from 'passport';
import { Strategy } from 'passport-steam';

passport.use(
    new Strategy({
        returnURL: 'http://localhost:3000/auth/steam/return',
        realm: 'http://localhost:3000/',
        apiKey: 'ED2B0F46956652F070167FDB14DD2D91'
    },
    (identifier, profile, done) => {
        process.nextTick(() => {
            profile.identifier = identifier;

            console.log(profile);

            return done(null, profile);
        });
    }
));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((obj, done) => {
    done(null, obj);
});

export default passport;
