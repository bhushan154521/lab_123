function validate()
{
    var fname=document.getElementById('fname').value;
    var email=document.getElementById('email').value;
    var number=document.getElementById('number').value;

    if(fname=="")
    {
        document.getElementById('Fname').innerHTML="Enter fields";
        return false;
    }

    if((fname.length>10)||(fname.length<=2))
    {
        document.getElementById('Fname').innerHTML="Enter valid characters";
        return false;
    }

    if(!isNaN(fname))
    {
        document.getElementById('Fname').innerHTML="Enter characters";
        return false;
    }


    if(email=="")
    {
        document.getElementById('Email').innerHTML="*Enter Email";
        return false;
    }

    if((email.charAt(email.length-4)!='.')&&(email.charAt(email.length-3)!='.'))
    {
        document.getElementById('Email').innerHTML="*Enter valid";
        return false;
    }

    if(number.length!=10)
    {
        document.getElementById('Number').innerHTML="*Enter 10 digits";
        return false;
    }


    alert("Successfullyyy!!!!");

}