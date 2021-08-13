const admin = require("firebase-admin");
const { credential } = admin;
const { initializeApp } = require("firebase-admin/app");
const { getFirestore, QuerySnapshot } = require("firebase-admin/firestore");
const { getAuth, Auth } = require("firebase-admin/auth");

var serviceAccount = require("./serviceAccountConfigKey.json");

const adminAccount = initializeApp({
  credential: credential.cert(serviceAccount),
});

const db = getFirestore(adminAccount);

//create a collection in cloud firestore
db.collection("Todos").doc("Tasks").set({
  1: "Eat",
  2: "Sleep",
  3: "Code",
  4: "Repeat",
  5: "Hello",
  6: "test",
  7: "hello",
});

//read the collection of a single doc
db.collection("Todos")
  .doc("Tasks")
  .get()
  .then((res) => console.log("Collection of todos->", res.data()));

//read the docs of a collection

// db.collection('Todos').get().then(querySnapshot => {
// 	querySnapshot.forEach(doc => console.log('DOC ID-->' , doc.data()))
// }).catch(err => console.log('ERROR-->' , err.message))

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
// getAuth().createCustomToken('Hmm').then(res=> console.log('res->', res))

//create user

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

// getAuth().createUser({
// 	name : 'helloWorld2',
// 	email : 'hello2@world.com'
// }).then(res=> console.log('USer creatd with ID->' , res.email))

//send email links
//create config object
// const actionCodeSettings = {
// 	// URL you want to redirect back to. The domain (www.example.com) for
// 	// this URL must be whitelisted in the Firebase Console.
// 	url: 'https://www.example.com/checkout?cartId=1234',
// 	// This must be true for email link sign-in.
// 	handleCodeInApp: true,
// 	iOS: {
// 	  bundleId: 'com.example.ios',
// 	},
// 	android: {
// 	  packageName: 'com.example.android',
// 	  installApp: true,
// 	  minimumVersion: '12',
// 	},
// 	// FDL custom domain.
// 	dynamicLinkDomain: 'coolapp.page.link',
//   };

//   const emailUser = 'dwaipayandc2@gmail.com'

//   getAuth().generateEmailVerificationLink(emailUser , actionCodeSettings).then(res => console.log('Link generated->' , res)).catch(err => console.log('err-->', err.message))
