console.log("JS Connected!");


function developerLogin(){
    localStorage.setItem("login" , "developer");
    window.location.href = "/login/login.html"
};


function clientLogin(){
    localStorage.setItem("login" , "client");
    window.location.href = "/login/login.html"
};


var userFound = localStorage.getItem("userFound" , "true");
var loginType = localStorage.getItem("login");
if(userFound === "true"){
    if(loginType === "client"){
        window.location.href = "/dashboard/client/dashboard.html"
    }else if(loginType === "developer"){
        window.location.href = "/dashboard/developer/dashboard.html"
    }
}