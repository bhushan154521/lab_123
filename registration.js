function validate(){
            
    var fname= document.getElementById('fname').value;
    var lname= document.getElementById('lname').value;
    var mail= document.getElementById('mail').value;
    var number= document.getElementById('number').value;
    var pass=document.getElementById('pass').value;
    
    if(fname=="")
    {
        document.getElementById('Fname').innerHTML="*Please fill the field";
        return false;
    }
    if((fname.length<=2) || (fname.length>20))
    {
        document.getElementById('Fname').innerHTML="*Length Must be 2 to 20";
        return false;   
           
    }
    if(!isNaN(fname))
    {   
        document.getElementById('Fname').innerHTML="*Enter Valid name";
        return false; 
    }


    if(lname=="")
    {
        document.getElementById('Lname').innerHTML="*Please fill the field";
        return false;
    }
    if((lname.length<=2) || (lname.length>20))
    {
        document.getElementById('Lname').innerHTML="*Length Must be 2 to 20";
        return false;   
           
    }
    if(!isNaN(lname))
    {
        document.getElementById('Lname').innerHTML="*Enter Valid name";
        return false; 
    }


    if(mail=="")
    {
        document.getElementById('Mail').innerHTML="*Please fill the field";
        return false;
    }
    if(mail.indexOf('@')<=0)
    {
        document.getElementById('Mail').innerHTML="*Invalid Email";
        return false;
    }
    if((mail.charAt(mail.length-4)!='.') && (mail.charAt(mail.length-3)!='.') )
    {
        document.getElementById('Mail').innerHTML="*Invalid Email";
        return false;
    }
    
    if(number=="")
    {
        document.getElementById('Number').innerHTML="*Please fill the field";
        return false;
    }
    if(isNaN(number))
    {
        document.getElementById('Number').innerHTML="*Enter Digits";
        return false;   
    }
    if(number.length!=10)
    {
        document.getElementById('Number').innerHTML="*Enter 10 Digits";
        return false;   
    }

    if(pass=="")
    {
        document.getElementById('Pass').innerHTML="*Please fill the field";
        return false;
    }

   

    if(pass.length<6)
    {
        document.getElementById('Pass').innerHTML="*Minimum 6 characters";
        return false;
    }

    

    alert("Sucessfully Registered!!!!");

}   