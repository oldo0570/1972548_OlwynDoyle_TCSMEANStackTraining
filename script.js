//var empObj =[];
var empObj = [];
//let size = 0;
function storeInSession() {
    var obj = JSON.stringify(empObj);
    console.log(typeof obj);
    sessionStorage.setItem("projectInfo", obj);
}
function onFormSubmitwindow() {
    var data = readFormDatawindow();
    empObj.push(data);
    console.log(empObj);
}
function onFormSubmitlaptop() {
    var data = readFormDatalaptop();
    empObj.push(data);
}
function onFormSubmitsportscar() {
    var data = readFormDatasportscar();
    empObj.push(data);
}
function onFormSubmitknife() {
    var data = readFormDataknife();
    empObj.push(data);
}
function onFormSubmitpipe() {
    var data = readFormDatapipe();
    empObj.push(data);
}
function onFormSubmitbutterfly() {
    var data = readFormDatabutterfly();
    empObj.push(data);
}
function retrieveFromSession() {
    var obj = sessionStorage.getItem('key');
    console.log(typeof obj);
    insertNewRecord(obj);
}
function readFormDatawindow() {
    var obj = {
        item: document.getElementById("window").innerHTML,
        price: document.getElementById("windowprice").innerHTML
    };
    return obj;
}
function readFormDatalaptop() {
    var obj = {
        item: document.getElementById("laptop").innerHTML,
        price: document.getElementById("laptopprice").innerHTML
    };
    return obj;
}
function readFormDatasportscar() {
    var obj = {
        item: document.getElementById("sportscar").innerHTML,
        price: document.getElementById("sportscarprice").innerHTML
    };
    return obj;
}
function readFormDataknife() {
    var obj = {
        item: document.getElementById("knife").innerHTML,
        price: document.getElementById("knifeprice").innerHTML
    };
    return obj;
}
function readFormDatapipe() {
    var obj = {
        item: document.getElementById("pipe").innerHTML,
        price: document.getElementById("pipeprice").innerHTML
    };
    return obj;
}
function readFormDatabutterfly() {
    var obj = {
        item: document.getElementById("butterfly").innerHTML,
        price: document.getElementById("butterflyprice").innerHTML
    };
    return obj;
}
function insertNewRecord(data) {
    console.log(typeof data);
    var newitem = JSON.parse(data);
    console.log(typeof newitem);
    //for (each in newitem) {
    //for(const [key, val] of Object.entries(data)){
    for (var i = 0; i < sessionStorage.length; i++) {
        console.log(sessionStorage.key(i));
        console.log(sessionStorage.getItem(sessionStorage.key(i)));
        var val = sessionStorage.getItem(sessionStorage.key(i));
        var newerval = JSON.parse(val);
        console.log(newerval);
        //var strLines = val.split("/n");
        //console.log(strLines);
        console.log(newerval[0].item);
        for (i = 0; i < newerval.length; i++) {
            console.log(newerval[i].item);
            //newval = JSON.parse(each);
            //console.log(each.CliName);
            var table = document.getElementById("projectTable");
            var body = table.getElementsByTagName("tbody")[1];
            var newRow = body.insertRow(0); // row created 
            var cell1 = newRow.insertCell(0); // cell created 
            cell1.innerHTML = newerval[i].item; // value placed 
            var cell2 = newRow.insertCell(1); // cell created 
            cell2.innerHTML = newerval[i].price; // value placed
        }
    }
}
