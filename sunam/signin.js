function signIn(){
    var x,y;
    x=document.forms["myForm"]["fname"].value;
    y=document.forms["myForm"]["fpassword"].value;
    if (x==null||x==""){
        alert("需要输入用户名");
        return false;
    }
    if(y==null||y==""){
        alert("需要输入密码");
        return false;
    }
    else{
        alert("Welcome!");
        window.location.href="homepage.html";
        window.event.returnValue=false;
    }
}