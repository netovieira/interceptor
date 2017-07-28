// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth': {
        'clientID': '2103606816332140', // your App ID
        'clientSecret': '5c215f64f00139c8794636811723c3d0', // your App Secret
        'callbackURL': 'http://localhost:3000/auth/facebook/callback',
        'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email'

    },

    'googleAuth': {
        'clientID': '999867183901-1o08kov25bg91mh962sjf46q4ftg7ral.apps.googleusercontent.com',
        'clientSecret': '3DfHGUqE39XTLTS7S1-eFcgx',
        'callbackURL': 'http://localhost:3000/auth/google/callback'
    }

};
