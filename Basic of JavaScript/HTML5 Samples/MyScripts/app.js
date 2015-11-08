

//alert('Hi.. All.. Welcome to JavaScript Demo');

// declaring the variables
// functions or methods declaration
// conditional - statements -  if , else
// loops
// data types

var lastName = "Lakshmi"; // declaring  variable - string
var phoneNumber  = 9703606226; // Number
var isMale = false; // bool

//functions declaration
/* function <functionName> (){
}
 */

function welcomeGuys()
{
 //alert('Hi.. All.. Welcome to JavaScript Demo');
  var gender;

    if(isMale == true)
    {
        gender = "Male";
    }
    else
    {
        gender = "Female";
    }

   var welcomeMessage =
       "Name:" + lastName +
       " PhoneNumber:" + phoneNumber +
       " Gender : " + gender;

    //alert(welcomeMessage);

    document.write(welcomeMessage);

}

welcomeGuys(); // calling  function
