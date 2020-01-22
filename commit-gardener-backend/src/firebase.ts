const admin = require("firebase-admin");
const serviceAccount = require("../commit-gardener-firebase-adminsdk-jexye-935dfb9169.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://commit-gardener.firebaseio.com"
});

export { admin };
