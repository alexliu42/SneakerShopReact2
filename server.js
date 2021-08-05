var express = require('express');
var app = express();
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var mongoURI= "mongodb+srv://alexliu42:jal561234@cluster0.dlpvz.mongodb.net/freshkicks?retryWrites=true&w=majority"

mongoose.connect(mongoURI);


app.use(express.static(__dirname + '/src'));
app.use(express.urlencoded());


app.get('/hello',function(request, response){
	response.send('Hellow, World');
});

const UserSchema = new Schema({
	name:{type:String, required:true},
	size:{type:Number, required:true},
	phone:{type:Number, required:true},
	shoes1:{type:String, required:false},
	shoes1quantity:{type:String, required:false},
	shoes2:{type:String, required:false},
	shoes2quantity:{type:String, required:false},
	shoes3:{type:String, required:false},
	shoes3quantity:{type:String, required:false},
	shoes4:{type:String, required:false},
	shoes4quantity:{type:String, required:false},
	shoes5:{type:String, required:false},
	shoes5quantity:{type:String, required:false},
	
});

let Client = mongoose.model("clients", UserSchema);

app.post("/",(req,res)=>{
	let name = req.body.name;
	let size = req.body.size;
	let phone = req.body.phonenumber;
	let shoes1 = req.body.shoes1;
	let shoes1quantity = req.body.shoes1quantity;
	let shoes2 = req.body.shoes2;
	let shoes2quantity = req.body.shoes2quantity;
	let shoes3 = req.body.shoes3;
	let shoes3quantity = req.body.shoes3quantity;
	let shoes4 = req.body.shoes4;
	let shoes4quantity = req.body.shoes4quantity;
	let shoes5 = req.body.shoes5;
	let shoes5quantity = req.body.shoes5quantity;
	let client = new Client({name:name, size:size, phone:phone, shoes1:shoes1, shoes1quantity:shoes1quantity,shoes2:shoes2, shoes2quantity:shoes2quantity,shoes3:shoes3, shoes3quantity:shoes3quantity,shoes4:shoes4, shoes4quantity:shoes4quantity,shoes5:shoes5, shoes5quantity:shoes5quantity})
	addClient(client, req,res);
});

let addClient = async (client, req,res) =>{
	await client.save();
	res.send("Thank you for your reservation!")
}
app.listen(3000, function(){
	console.log("Server is running on port 3000");
});