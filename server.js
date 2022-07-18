
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
app.use(express.static(path.join(__dirname, '/build')));
//app.use(express.static(path.join(__dirname, '/react-app/build')));


app.get("/*", (req,res)=>{
    res.sendFile(__dirname+"/build/index.html")     
})

// app.get("/react", (req,res)=>{
//     res.sendFile(__dirname+"/react-app/build/index.html")
// })

app.get("/trydo", (req,res)=>{
    res.sendFile(__dirname+"/html/index.html")
})


app.listen(PORT, (error) =>{
	if(!error)
		console.log("Server is Successfully Running, and App is listening on port "+ PORT)
	else
		console.log("Error occurred, server can't start", error);
	}
);
