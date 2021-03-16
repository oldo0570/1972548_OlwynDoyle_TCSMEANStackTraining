var empObj =[];
function storeInSession() {
	console.log(empObj);
	obj = JSON.stringify(empObj);
	console.log(typeof obj);
    sessionStorage.setItem("projectInfo",obj)
}
function onFormSubmit(){
	var data = readFormData();
	//var newdata = JSON.stringify(data);
    empObj.push(data);
    resetData();
    //console.log(empObj)
}
function retrieveFromSession(){
	var obj = sessionStorage.getItem("projectInfo");
	console.log(typeof obj);
	//console.log(obj);
	//object = JSON.parse(obj);
	insertNewRecord(obj);
	
}
function readFormData() {
	var obj= {}
	obj.CliName = document.getElementById("Clientname").value;
	obj.ProName = document.getElementById("projName").value;
	obj.budget = document.getElementById("budget").value;
	//console.log(obj);
	return obj;
}
function insertNewRecord(data){
	console.log(typeof data);
	newitem = JSON.parse(data);
	console.log(typeof newitem);
	//for (each in newitem) {
	//for(const [key, val] of Object.entries(data)){
	for (var i =0; i < sessionStorage.length; i++){
		console.log(sessionStorage.key(i))
		console.log(sessionStorage.getItem(sessionStorage.key(i)));
		val = sessionStorage.getItem(sessionStorage.key(i))
		newerval = JSON.parse(val);
		console.log(newerval);
		//var strLines = val.split("/n");
		//console.log(strLines);
		console.log( newerval[0].CliName)
		for (i = 0; i < newerval.length; i++){
			console.log(newerval[i].CliName);
		
			//newval = JSON.parse(each);
			//console.log(each.CliName);
			var table = document.getElementById("projectTable")
			var body = table.getElementsByTagName("tbody")[0];
			var newRow = body.insertRow(body.length);  // row created 
			
			var cell1 = newRow.insertCell(0);          // cell created 
			cell1.innerHTML=newerval[i].CliName;                 // value placed 
			var cell2 = newRow.insertCell(1);          // cell created 
			cell2.innerHTML=newerval[i].ProName;                 // value placed
			var cell3 = newRow.insertCell(2);          // cell created 
			cell3.innerHTML=newerval[i].budget;                 // value placed
		}
	}
}
function forEachKey(callback) {
  for (var i = 0; i < sessionStorage.length; i++) {
    callback(sessionStorage.key(i));
  }
}

function resetData(){
	document.getElementById("Clientname").value="";
	document.getElementById("projName").value="";
	document.getElementById("budget").value="";
}