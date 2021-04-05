class Record {
	constructor(id,name,salary,date){
		this.id = id;
		this.name = name;
		this.salary = salary;
		this.date = date;
	}
	getDate(){
		let date1 = new Date();
		//let formatted = (date1.year + "-" + date1.month + "-" +date1.date + " " + date1.hours + ":" + date1.minutes + ":" + date1.seconds)
		//console.log(formatted);
		return date1;
	}
}
/*var recursiveAsk = function(num) {
	if (num <= 0){
		r1.close();
	} else{
	r1.question("Employee id: ",(id)=> {
			r1.question("Name: ", (name)=> {
				r1.question("Salary: ",(salary)=> {
					empRec.id = id;
					empRec.name = name;
					empRec.salary=salary;
					var empJson = JSON.stringify(empRec, null, 2);
					fs.writeFile("records.json",empJson,{flag:"a"}, end);
					function end(err) {
						console.log("New record: ",empRec);
					}
					
				})
			})
		})
		recursiveAsk(num-1);
	}
}*/

module.exports={Record}

