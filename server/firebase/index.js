const admin = require("firebase-admin");
const { credential } = admin;
const { initializeApp } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

var serviceAccount = require("./serviceAccountConfigKey.json");

const adminAccount = initializeApp({
	credential: admin.credential.cert(serviceAccount),
});

const db = getFirestore(adminAccount);

db.collection("users2").doc("todos").update({
	8: "test again",
});

db.collection("users2")
	.doc("todos")
	.get()
	.then((res) => console.log("docs from FB Firestore-->", res.data()));

db.collection("images")
	.get()
	.then((res) =>
		// res.forEach((doc) =>
		// 	console.log("gteiing docs from images collection-->", doc.data())
		// )
		console.log("res->", res)
	);
