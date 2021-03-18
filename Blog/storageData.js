var empObj =[];

function onFormSubmit(){
	var data = readFormData();
    empObj.push(data);
    console.log(data);
    resetData();
    storeInSession();
    retrieveFromSession();
}
function storeInSession() {
	console.log(empObj);
	obj = JSON.stringify(empObj);
	//console.log(typeof obj);
    sessionStorage.setItem("blogpost",obj)
}

function retrieveFromSession(){
	var obj = sessionStorage.getItem("blogpost");
	console.log(typeof obj);
	insertNewRecord(obj);
	
}

function readFormData() {
	var obj= {}
	obj.title = document.getElementById("title").value;
	obj.desc = document.getElementById("desc").value;
	obj.image = document.getElementById("image").files[0].name;
	return obj;
}
function insertNewRecord(data){
	console.log(typeof data);
	newitem = JSON.parse(data);
	console.log(typeof newitem);
	for (var i =0; i < sessionStorage.length; i++){
		console.log(sessionStorage.key(i))
		console.log(sessionStorage.getItem(sessionStorage.key(i)));
		val = sessionStorage.getItem(sessionStorage.key(i))
		newerval = JSON.parse(val);
		console.log(newerval);
		for (i = 0; i < newerval.length; i++){
			var input = document.getElementById("blogposts")

			var img = document.createElement('img');
			img.src = newerval[i].image;  
			img.style.height = "400px";
			document.getElementById('blogposts').prepend(img); 
			
			var text2 = document.createElement('p');
			text2.innerHTML = newerval[i].desc;
			document.getElementById('blogposts').prepend(text2);

			var text1 = document.createElement('h3');
			text1.innerHTML = newerval[i].title;
			document.getElementById('blogposts').prepend(text1);
		}
	}
	sessionStorage.clear();
	empObj =[];
}
function resetData(){
	document.getElementById("title").value="";
	document.getElementById("desc").value="";
	document.getElementById("image").value="";
}
