var userFound = localStorage.getItem("userFound" , "true");
var loginType = localStorage.getItem("login");
if(userFound === "true"){
    if(loginType === "client"){
        window.location.href = "/dashboard/client/dashboard.html"
    }else if(loginType === "developer"){
        window.location.href = "/dashboard/developer/dashboard.html"
    }
}else{
    alert("Please Login First!")
    window.location.href = "/login/login.html"
}