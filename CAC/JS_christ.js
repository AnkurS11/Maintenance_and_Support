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
                password.style.border="solid 5px green";
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

       const regemail=/([a-zA-Z0-9\.-]+)@([a-zA-Z]{0,4})\.christuniversity.in$/;
        
       var priority=document.getElementById("pri");
       var issue=document.getElementById("issue");

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
        
        if(priority.value<0 || priority.value>4)
        {
            alert("Invalid Priority");
            priority.style.border="solid 3px red";
            document.getElementById("lbpri").style.visibility="visible";
            return false;
        }

        var number=document.getElementById("phone");
        const regnum=/^[0-9]{10}$/;

        if(regnum.test(number.value))
            {
                return true;  
            }
        else
            {
                alert("Invalid Phone Number");
                return false;
            }   
  
    }