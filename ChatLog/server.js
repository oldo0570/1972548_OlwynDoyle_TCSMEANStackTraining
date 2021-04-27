let app = require("express")();
let http = require("http").Server(app);   // to load the library we have run port number using hhtp module 
let io = require("socket.io")(http);

let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

io.on("connection", (socket) => {
    console.log("Client connected to application.....");

    socket.on("chat", (input) => {
        mongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
            if (!err) {
                var message = { "Name": input.name, "Message": input.message }
                let db = client.db("meanstack");
                db.collection("Messages").insertOne(message, (err2, result) => {
                    if (!err2) {
                        console.log("Successfully added " + result.insertedCount);
                    } else {
                        console.log("Insert failed " + err2);
                    }
                    client.close();
                });
			}
        })
        //console.log('Hello ' + input.name);
       // console.log('Your message is ' + input.message);
    })
})
http.listen(9090, () => console.log('server running on port number 9090'));