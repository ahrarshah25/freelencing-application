console.log("Dashboard!");


var userFound = localStorage.getItem("userFound" , "true");
var loginType = localStorage.getItem("login");

if(userFound !== "true"){
    alert("Please Login First!");
    window.location.href = "/login/login.html";
}else if(loginType !== "client"){
    alert("You Are Not A Client!\nYou Have Developer Account.")
    window.location.href = "/dashboard/developer/dashboard.html"
}

function logout(){
    localStorage.removeItem("userFound" , "ture");
    window.location.href = "index.html";
}