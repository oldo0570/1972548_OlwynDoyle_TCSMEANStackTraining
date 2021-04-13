let app = require("express")();
let http = require("http").Server(app);   // to load the library we have run port number using hhtp module 
let io = require("socket.io")(http);

app.get("/",(req,res)=> {
    res.sendFile(__dirname+"/index.html");
})

io.on("connection",(socket)=> {
    console.log("Client connected to application.....");
    
    socket.on("chat",(input)=> {
        console.log('Hello ' + input.name);
        console.log('Your message is ' + input.message);
    })
})
http.listen(9090,()=>console.log('server running on port number 9090'));