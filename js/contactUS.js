function contactTrigger(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var message=document.getElementById("message").value;

    var mailformat =  /\S+@\S+\.\S+/;

    if(name==""){
        alert("Invalid Name")
        document.getElementById("name").value="";
        document.getElementById("name").focus()

    }
    else if(! mailformat.test(email)){
        alert("Invalid Email")
        document.getElementById("email").value="";
        document.getElementById("email").focus()
    }
    else{
        var string = message.replace(/\s\s+/g, ' ');
        var arr=string.trim().split(/\n| /)
        if(arr.length <10 && arr.length<150){
            alert("Message should be of 10-150 words")
            console.log(arr)
            
        }
        else{
            console.log(name)
            console.log(email)
            console.log(message)
        }
    }

}