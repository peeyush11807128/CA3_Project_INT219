function emailvalidate()
{
var emailTextBox=document.getElementById("email");
var email=emailTextBox.value;
var emailMatch=/^([a-z0-9\.-]+)@([a-z0-9-]+)\.([a-z]{2,5})(.[a-z]{2,3})?$/
emailTextBox.style.color="white";
if(emailMatch.test(email))
{
emailTextBox.style.backgroundColor="green";
return true;
}
else
{
emailTextBox.style.backgroundColor="red";
return false;
}
}


function fnamevalidate()
{ 
var nameTextBox=document.getElementById("fname");
var letters = /^[A-Za-z]+$/;
nameTextBox.style.color="white";
if(fname.value.match(letters))
{
nameTextBox.style.backgroundColor="green";
return true;

}
else
{
alert('Name must have alphabet characters only');
nameTextBox.style.backgroundColor="red";
return false;
}
}

function lnamevalidate()
{ 
var nameTextBox=document.getElementById("lname");
var letters = /^[A-Za-z]+$/;
nameTextBox.style.color="white";
if(lname.value.match(letters))
{
nameTextBox.style.backgroundColor="green";
return true;
}
else
{
alert('Name must have alphabet characters only');
nameTextBox.style.backgroundColor="red";
return false;
}
}


function ophonenumber()
{
	var phone=document.getElementById("ophone");
  	var phoneno = /^[0-9]{10,10}$/;
	phone.style.color="white";

 	 if(phone.value.match(phoneno))
        {
		phone.style.backgroundColor="green";
		return true;
        }
      else
        {
		phone.style.backgroundColor="red";
		return false;
        }
}

function hphonenumber()
{
	var phone=document.getElementById("hphone");
  	var phoneno = /^[0-9]{10,10}$/;
	phone.style.color="white";

 	 if(phone.value.match(phoneno))
        {
		phone.style.backgroundColor="green";
		return true;
        }
      else
        {
		phone.style.backgroundColor="red";
		return false;
        }
}
