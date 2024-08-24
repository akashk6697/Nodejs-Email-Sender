const express = require("express");
const app = express();
const PORT = 5000;

const sendMail = require("./sendMail");
app.get("/",(req,res)=>{
 res.send("Welcome to the Server");
});

app.get("/mail",sendMail);
const start = async()=>{
	try{
		app.listen(PORT,()=>{
			console.log(`I am live in port no. ${PORT}`);
		});
	}
	catch(error){}
};

start();
