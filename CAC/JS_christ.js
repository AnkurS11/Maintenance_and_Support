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
       var password=document.getElementById("pass");
       const regpass=/^([a-z]+)([a-zA-Z0-9]+)+([a-zA-Z0-9~`!@#\$%\^&\*\(\)-_\+={}\[\]|\;:"<>,.\/?]+)([a-z]+)$/;

       var email=document.getElementById('email');
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
           return false;
       }
       else if(issue.value.trim()=="")
       {
           alert("Issue can't be Blank");
           return false;
       }
       else if(password.value.trim().length<8)
       {
           alert("Password is too short");
           return false;
       }
       else if(!regpass.test(password.value))
        {
            alert("INVALID Password");
            password.style.border="solid 3px red";
            document.getElementById("lbpass").style.visibility="visible";
            return false;
        }
        else if(!regemail.test(email.value))
        {
            alert("Invalid Email ID");
            email.style.border="solid 3px red";
            document.getElementById("lbemail").style.visibility="visible";
            return false;            
        }
        else if(priority.value<0 || priority.value>4)
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
