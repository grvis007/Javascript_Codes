

function bindClickEvent(){

    var btn = document.getElementById("btnSubmit");
    btn.addEventListener('click', printName);

    var fisrtName = document.getElementById("txtFirstName");
    fisrtName.addEventListener('blur', showFirstNameMessage);

    var lastName = document.getElementById("txtLastName");
    lastName.addEventListener('blur', showLastNameMessage);

}

function printName(){
    var fisrtName = document.getElementById("txtFirstName");
    //fisrtName.addEventListener('blur', showFirstNameMessage);

        var lastName = document.getElementById("txtLastName");
    //lastName.addEventListener('focus', showFirstNameMessage);
    var fullName = document.getElementById("lblfullName");

    fullName.innerHTML = fisrtName.value + " "  + lastName.value;

}

function showFirstNameMessage() {

    var fisrtName = document.getElementById("txtFirstName");
    var firstNameValidation = document.getElementById("reqiredFirstName");
    var flag=0;

    if (fisrtName.value == "") {
        firstNameValidation.style.display = 'block';
        firstNameValidation.style.color = 'red';
        //flag=1;
    }
    else {
        firstNameValidation.style.display = 'none';
        //if(flag==0)
       // printName();

    }
}
function showLastNameMessage(){
    var lastName = document.getElementById("txtLastName");
    var lastNameValidation = document.getElementById("reqiredLastName");

    if(lastName.value == "")
    {
        lastNameValidation.style.display= 'block';
        lastNameValidation.style.color='red';
    }
    else{
        lastNameValidation.style.display= 'none';
        printName();

    }

}



bindClickEvent();
