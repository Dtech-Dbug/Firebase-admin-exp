const admin = require("firebase-admin");
const { credential } = admin;
const { initializeApp } = require("firebase-admin/app");

var serviceAccount = require("./serviceAccountConfigKey.json");

const adminAccount = initializeApp({
	credential: admin.credential.cert(serviceAccount),
});

console.log("AdminAccount-->", adminAccount);
