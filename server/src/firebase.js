const admin = require("firebase-admin");
const serviceKey = require("./serviceFirebase.json");

const firebase = admin.initializeApp({
    credential: admin.credential.cert(serviceKey),
    databaseURL: 'https://console.firebase.google.com/project/pitchperfect-f9320/database'
})

module.exports = {firebase,admin};
