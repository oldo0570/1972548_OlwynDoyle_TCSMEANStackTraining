let http = require("http");
let url = require("url");
let fs = require("fs");

let formpage = `
<head>
</head>
<body>
<form action="/store" method="get"> 
	<label> Employee Id: 
	<input type="number" name="id"><br><br>
	<label> Task Id: 
	<input type="number" name="taskId"><br><br>
	<label> Task Details: 
	<input type="string" name="taskInfo"><br><br>
	<label> Deadline: 
	<input type="date" name="deadline"><br><br>
	<input type="submit" name="Add Task" value="Add Task">		
</form>
<br>
<br>
<br> 
<form action="/delete" method="get">
	<label> Task Id to be Deleted: 
	<input type= "number" name="taskId"> <br>
	<input type="submit" name="Delete Task" value="Delete Task">
</form>

<br><br><br>
<form action="/display" method="get">
	<input type="submit" name="Show Existing Tasks" value="Show Existing Tasks">
</form>
</body>
`

let port=9999;

class Task{
	constructor(id,taskId,taskInfo,deadline) {
		this.id = id;
		this.taskId = taskId;
		this.taskInfo = taskInfo;
		this.deadline = deadline;
	}
}
let tasks = new Array(); // create array Task array 
let server = http.createServer((req,res)=> {
    if(req.url != "/favicon.ico"){
    	res.write(formpage);
    	var pathInfo = url.parse(req.url,true).pathname;
    	urlDetails = req.url;
        if(pathInfo=="/store"){ //has to be pathInfo as opposed to req.url because otherwise the query will make this statement false!!

        	let fromFile = fs.readFileSync("tasks.json");
            let temp = fromFile.toString();
            let Jdata = JSON.parse(temp); 

            let data = url.parse(urlDetails,true).query;
            let val = new Task(Number(data.id), Number(data.taskId), data.taskInfo, data.deadline); // take the value from url 
       		let jval = JSON.stringify(val);
       		// convert to object  
            tasks = Jdata;
            tasks.push(val); // store records in object using push method 
            var stringTasks = JSON.stringify(tasks, null, 2); //converet to string 
            fs.writeFileSync("tasks.json",stringTasks);
            res.end();
        }else if(pathInfo=="/delete"){
            let data = url.parse(urlDetails,true).query; // read from file 
            let fromFile = fs.readFileSync("tasks.json");
            let Jdata = JSON.parse(fromFile); // convert to json 
            let found = false;
            for (var i = 0; i < Jdata.length; i++) {
            	if (Jdata[i].taskId == data.taskId){
            		Jdata.splice(i,1);
            			// delete using array method's 
            	}
            } 
            var stringTasks = JSON.stringify(Jdata, null, 2); //converet to string 
            fs.writeFileSync("tasks.json",stringTasks);
             // store in file using fs module. 
            if (found == false){
            	console.log("Task could not be deleted because the task in question does not exist");
            } //if task id not available display error message. 
            res.end();
        }else if(pathInfo=="/display"){
        	let data = url.parse(urlDetails,true).query; // read from file 
            let fromFile = fs.readFileSync("tasks.json");
            let temp = fromFile.toString();
            let Jdata = JSON.parse(temp); // convert to json 
            let taskTable = `
            <table border="1" id="ttable">
			  <tr>
			    <th>Employee Id</th>
			    <th>Task Id</th>
			    <th>Task Information</th>
			    <th>Deadline</th>
			  </tr>
            `
            for (let j = 0; j < Jdata.length; j++){
            	taskTable += `<tr>
            		<td>${Jdata[j].id}</td>
            		<td>${Jdata[j].taskId}</td>
            		<td>${Jdata[j].taskInfo}</td>
            		<td>${Jdata[j].deadline}</td>
            		</tr>`
            };
            taskTable +=`</table>`
                //iterator loop 
                // create tableData variable using backticks 
                /*
                    <table>
                    <tr>
                            <td>${variableName}</td>
                    </tr>
                    </table>
                    res.end(tableDatavariable);
                */
            res.write(taskTable);
            res.end();
        }
    }
    
});

server.listen(port,()=>console.log(`Server running on port number ${port}`));