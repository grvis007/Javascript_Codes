

function buildNames(){
var firstName = document.getElementById('lblFirstName');
firstName.innerHTML  = "First Name:";

 var lastName = document.getElementById('lblLastName');
 lastName.innerHTML = "Last Name : ";

var txtFirstName = document.getElementById('txtFirstName');
var txtLastName = document.getElementById('txtLastName');
    txtFirstName.value = "Lakshmi";
    txtLastName.value = "Kumari";

    firstName.style.fontSize = "25px";
    lastName.style.fontSize = "25px";
    //setStyles();
}

function setStyles(){

    var lables = document.getElementsByTagName('lable');
    var input = document.getElementsByTagName('input');

    console.log(lables.length);
    for(var i = 0; i<lables.length; i++) {
       //console.log(lables[i]);
       lables[i].style.backgroundColor = "Red";
    }
    for(var i = 0; i<input.length; i++) {
        //console.log(lables[i]);
        input[i].style.backgroundColor = "black";
    }
}


buildNames();

function printNames(){
  var   firstName =  document.getElementById('txtFirstName');
  var   lastName = document.getElementById('txtLastName');

    console.log(firstName.value);
    console.log(lastName.value);

    var printDiv = document.getElementById('divPrint');
    printDiv.innerHTML = " My Name is : " +  firstName.value + " " +lastName.value;
    //printDiv.style.backgroundColor = "Red"

}



function setNameInfo(){

    var   firstName =  document.getElementById('txtFirstName');
    var   lastName = document.getElementById('txtLastName');


    firstName.style.backgroundColor = "Red";
    lastName.style.backgroundColor = "Red";




}

