
function handleButtonClick(){

    alert('Hey I am in Click Event');

    callme();
}


function callme(){

    var userinfo = document.getElementById('GetUserInfo');
    var txt = document.getElementById('txtKeyPress');

    if(txt.value == "Reston") {
        userinfo.style.display = "inline";
    }

}


function handleKeyPress(){
    console.log('a Key Pressed');
}


var btn = document.getElementById('btnSubmit');
btn.addEventListener('click', handleButtonClick);

var txt = document.getElementById('txtKeyPress');
txt.addEventListener('keypress', handleKeyPress);



