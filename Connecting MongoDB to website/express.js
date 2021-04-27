let app = require("express")();
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
let mongoClient = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";
/*
index.html                  get 
retreive all course         get
create, delete and update   post 
z*/
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/main.html");
})
app.get("/add", (req, res) => {
    res.sendFile(__dirname + +"/add.html");
})
app.post("/storeCDetails", (req, res) => {
    var cid = req.body.cid;
    var cname = req.body.cname;
    var cdesc = req.body.cdesc;
    var camount = req.body.camount;
    var courseDetails = { "_id": cid, "cname": cname, "cdesc": cdesc, "camount": camount }
    mongoClient.connect(url, { useUnifiedTopology: true }, (err1, client) => {
        if (!err1) {
            let db = client.db("meanstack");
            db.collection("Classes").insertOne(courseDetails, (err2, result) => {
                if (!err2) {
                    console.log("Course details added.")
                } else {
                    console.log("Error, course details failed to add, " + err2);
                }
                client.close();
            });
        }
        
    });
    /*
    retreive data from body part 
    connected to database 
    store in database. 
        res.sendFile(__dirname+"/index.html")
    */
    res.sendFile(__dirname + "/main.html")
})

app.get("/update", (req, res) => {
    res.sendFile(__dirname + "/update.html");
})
app.post("/updateCDetails", (req, res) => {
    var cid = req.body.cid;
    var camount = req.body.camount;
    var courseDetails = { "_id": cid, "camount": camount }
    mongoClient.connect(url, { useUnifiedTopology: true }, (err1, client) => {
        if (!err1) {
            let db = client.db("meanstack");
            db.collection("Classes").updateOne({ _id: courseDetails._id }, { $set: { camount: courseDetails.camount } }, (err2, result) => {
                if (!err2) {
                    console.log("Course details updated " + result.modifiedCount);
                } else {
                    console.log("Error, course details failed to update, " + err2);
                }
                client.close();
            });
        }

    });
    /*
    retreive data from body part 
    connected to database 
    store in database. 
        res.sendFile(__dirname+"/index.html")
    */
    res.sendFile(__dirname + "/main.html")
})

app.get("/delete", (req, res) => {
    res.sendFile(__dirname + "/delete.html");
})
app.post("/deleteCDetails/:cid", (req, res) => {
    var cid = req.body.cid;
    var deleteCourse = { "_id": cid }
    mongoClient.connect(url, { useUnifiedTopology: true }, (err1, client) => {
        if (!err1) {
            let db = clientdb("meanstack");
            db.collection("Classes").deleteOne({ _id: deleteCourse._id }, (err2, result) => {
                if (!err2) {
                    console.log("Course deleted " + result.deletedCount);
                } else {
                    console.log("Error, course details failed to find and delete, " + err2);
                }
                client.close();
            });
        }
    })
    /*
    retreive data from body part 
    connected to database 
    store in database. 
        res.sendFile(__dirname+"/index.html")
    */
    res.sendFile(__dirname + "/main.html")
})

app.get("/list", (req, res) => {
    res.sendFile(__dirname + "/list.html");
})
app.post("/listCDetails", (req, res) => {
    let courses = [];
    mongoClient.connect(url, { useUnifiedTopology: true }, (err1, client) => {
        if (!err1) {
            let db = client.db("meanstack");
            let cursor = db.collection("Classes").find();
            //const allCourse = await cursor.toArray();
            results.forEach((result, i) => {
                courses.push(result);
            })

        }
        client.close();
        

    });
    res.json(courses);
})

app.listen(9090, () => console.log("running.."));