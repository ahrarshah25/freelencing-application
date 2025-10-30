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

function myProjects(){
    window.location.href = "/dashboard/client/projects.html"
};

function hiredDevelopers(){
    window.location.href = "/dashboard/client/hired.html"
};

function clientBalanceAdd(){
    window.location.href = "/dashboard/client/balance.html"
}

function logout(){
    alert("Logout Successfully!")
    localStorage.removeItem("userFound" , "ture");
    window.location.href = "/index.html";
}

var userName = localStorage.getItem("userName");
var clientName = document.getElementById("clientName").innerText = "Welcome, " + userName + " 👋";

var amount = localStorage.getItem("amount");
var userBalance = document.getElementById("userBalance").innerText = "💰 Balance: " + amount;