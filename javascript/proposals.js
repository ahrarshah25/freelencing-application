var userFound = localStorage.getItem("userFound" , "true");
var loginType = localStorage.getItem("login");
if(userFound === "true"){
    
}else{
    alert("Please Login First!")
    window.location.href = "/login/login.html"
}