function check_password()
{
    var password=document.getElementById("password");
    var error = document.getElementById("messagepass");
        if(/^(.){8,20}$/.test(password.value.trim()))
        {
            error.style.color = "red";
            error.innerHTML = "Strength: Weak";
            if((password.value.trim().match(/[A-Z]/)) && (password.value.trim().match(/[a-z]/)))
            {
                error.style.color = "yellow";
                error.innerHTML = "Strength: Medium";
            }
            if((password.value.trim().match(/[0-9]/)) && (password.value.trim().match(/[\W]/)))
            {
                error.style.color = "rgb(0, 255, 115)";
                error.innerHTML = "Strength: Strong";
            }
        }
        else
        {
            error.style.color = "red";
            error.innerHTML = "Invalid Password";
        }
}

function invalid_name(event)
    {
        let code=event.which;
        if(code>47 && code<58)
            return false;
        else
            return true;
    }
    
    function validate()
    {
       var username=document.getElementById("name");
       var email=document.getElementById("email");
       var password=document.getElementById("password");
       var address=document.getElementById("address");

       const regpass=/^([a-z]+)([A-Z]+)([0-9]+)([a-zA-Z0-9~`!@#\$%\^&\*\(\)-_\+={}\[\]|\;:"<>,.\/?]+)([a-z]+)$/;

       const regemail=/([a-zA-Z0-9\.-]+)@([a-zA-Z]{0,4})\.christuniversity.in$/;
 
       if(username.value.trim()=="")
       {
           alert("Blank Username");
           username.style.border="solid 3px red";
           document.getElementById("erruser").style.visibility="visible";
           return false;
       }
       else{
            username.style.border="solid 5px green";
       }
      
       if(password.value.trim()=="")
       {
           alert("Blank Password");
           password.style.border="solid 3px red";
           return false;
       }
       else if(password.value.trim().length<8)
       {
           alert("Password is too short");
           password.style.border="solid 3px red";
           return false;
       }

       if(!regpass.test(password.value))
        {
            alert("INVALID Password- PassWord should contain minimum of 1 lower case letter [a-z], 1 upper case letter [A-Z] ,1 numeric character [0-9] and 1 special character: ~`!@#$%^&*()-_+={}[]|:<>,./?These character must be EMBEDDED somewhere in the middle lowercase letters");
            password.style.border="solid 3px red";
            return false;
        }
        else{
            password.style.border="solid 5px green";
        }

        if(!regemail.test(email.value))
        {
            alert("Invalid Email ID");
            email.style.border="solid 3px red";
            document.getElementById("lbemail").style.visibility="visible";
            return false;            
        }
        else{
            email.style.border="solid 5px green";
        }

        if(address.value.trim()=="")
       {
           alert("Blank Address");
           address.style.border="solid 3px red";
           return false;
       }
       else{
            address.style.border="solid 5px green";
       }

       alert("Form Submitted Successfully");
    }