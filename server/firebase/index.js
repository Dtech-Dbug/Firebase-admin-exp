const admin = require("firebase-admin");
const { credential } = admin;
const { initializeApp } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

var serviceAccount = require("./serviceAccountConfigKey.json");

const adminAccount = initializeApp({
	credential: admin.credential.cert(serviceAccount),
});

const db = getFirestore(adminAccount);

//create a collection in cloud firestore
db.collection("Testing").doc("Stacks").set({
	Platform: "Firebase",
	Services: "Auth / Firestore / Storage",
});

//read the collection programatically
db.collection("Testing")
	.doc("Stacks")
	.get()
	.then((res) => console.table(res.data()))
	.catch((err) => console.log("Error->", err));

//update
db.collection("Testing").doc("Stacks").update({
	otherStacks: "NodeJs",
});

//delete operations
db.collection("Testing").doc("Stacks").delete();
