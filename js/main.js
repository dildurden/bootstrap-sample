function Register(){
    uname = document.getElementById("user")
    email = document.getElementById("email")
    userName = document.getElementById("userName")
    pwd = document.getElementById("pass")
    phone = document.getElementById("mobile")
    phoneformat = /^\d{10}$/
    if(uname.value==""){
        alert("Please enter your name")
        }
    else if(email.value=="")
    {
        alert("Please enter the email address")
    } 
    else if(userName.value=="")
    {
        alert("Please enter the Username")
    }
    else if(pwd.value=="")
    {
        alert("Please enter the password")
    } 
    else if(mobile.value=="")
    {
        alert("Please enter mobile number")
    }
    if(mobile.value.match(phoneformat))
    {
        console.log(true)
    }  
    else
    {
        alert("Enter a valid mobile number")
    }
}
