let fs = require("fs");
let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";

let callData = fs.readFileSync("call_data.json");
console.log("Connected");
let callJson = JSON.parse(callData);
mongoClient.connect(url,{ useUnifiedTopology: true }, (err, client) => {
	if (!err) {
		let db = client.db("meanstack");
		db.collection("Records").insertMany(callJson, (err2, result) => {
			if (!err2) {
				console.log("Successfully added " + result.insertedCount);
			} else {
				console.log("Insert failed " + err2);
			} 
			client.close();
		});
		console.log("connected successfully");
	} else {
		console.log("Error " + err);
	}
})