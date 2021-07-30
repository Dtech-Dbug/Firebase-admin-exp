const express = require("express");

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
	res.send("<h1>WOW! Learning to create a server, aint you?</h1>");
});

app.listen(PORT, () => {
	console.log(`Server Running On Port : ${PORT}`);
});
