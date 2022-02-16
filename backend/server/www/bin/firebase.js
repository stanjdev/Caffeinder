var admin = require("firebase-admin");
var serviceAccount = require("../../../caffinder-4e392-firebase-adminsdk-vma96-242717f826.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://caffinder-4e392-default-rtdb.firebaseio.com",
});
const db = admin.firestore();

module.exports = db;
