let obj = require("readline");
let fs = require("fs");
let rec = require("./file2");
let r1 = obj.createInterface ({
	input: process.stdin,
	output: process.stdout
});


let empRec = new rec.Record(0,0,0,0);
r1.question("How many records would you like to store?",(numrecs) => {
	console.log("You would like to store " + numrecs + " records");
	for (i=0; i < numrecs+1; i++){
		debugger;
		r1.question("Employee id: ",(id)=> {
			r1.question("Name: ", (name)=> {
				r1.question("Salary: ",(salary)=> {
					empRec.id = id;
					debugger;
					empRec.name = name;
					empRec.salary=salary;
					empRec.date= empRec.getDate();
					var empJson = JSON.stringify(empRec, null, 2);
					fs.writeFile("records.json",empJson,{flag:"a"}, end);
					function end(err) {
						console.log("New record: ",empRec);
					}
					debugger;
					r1.close();
				})
			})
		})
	}
});

