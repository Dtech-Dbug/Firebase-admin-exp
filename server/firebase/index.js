const admin = require("firebase-admin");
const { credential } = admin;
const { initializeApp } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const { getAuth , Auth } = require("firebase-admin/auth");

var serviceAccount = require("./serviceAccountConfigKey.json");

const adminAccount = initializeApp({
	credential: admin.credential.cert(serviceAccount),
});

// const db = getFirestore(adminAccount);

// //create a collection in cloud firestore
// db.collection("Testing").doc("Stacks").set({
// 	Platform: "Firebase",
// 	Services: "Auth / Firestore / Storage",
// });

// //read the collection programatically
// db.collection("Testing")
// 	.doc("Stacks")
// 	.get()
// 	.then((res) => console.table(res.data()))
// 	.catch((err) => console.log("Error->", err));

// //update
// db.collection("Testing").doc("Stacks").update({
// 	otherStacks: "NodeJs",
// });

// //delete operations
// db.collection("Testing").doc("Stacks").delete();

//create custom token
const u_id = "some-uid";

// getAuth()
// 	.createUser({
// 		name: "Dee",
// 		email: "Dee@Dee.com",
// 		address: "India",
// 	})
// 	.then((res) => {
// 		console.log("resposen from custom token", res);
// 	})
// 	.catch((err) => console.log("Error->", err));

const uid = 'mpgYXxv3f5VCNwldHiywIsB6LQl1'

getAuth().createUser({
	name : 'hello'
}).then(res=> console.log('USer creatd with ID->' , res))

getAuth().createCustomToken('Hmm').then(res=> console.log('res->', res))