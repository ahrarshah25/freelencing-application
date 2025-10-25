console.log("Dev Dashboard!");

var userFound = localStorage.getItem("userFound" , "true");
var loginType = localStorage.getItem("login");
if(userFound !== "true"){
    alert("Please Login First!");
    window.location.href = "/login/login.html";
}else if(loginType !== "developer"){
    alert("You Are Not A Developer!\nYou Have Client Account.")
    window.location.href = "/dashboard/client/dashboard.html"
}

var developerName = localStorage.getItem("userName");

var userNameDisplay = document.getElementById("userName").innerText = "Welcome, "+ developerName + "👋";

var balance = document.getElementById("balance").innerText = "💵 Total Earnings: 68,838";

function userLogout(){
    localStorage.removeItem("userFound" , "true");
    window.location.href = "/index.html"
};

function myProposals(){
    window.location.href = "/dashboard/developer/proposals.html"
};

function activeProjects(){
    window.location.href = "/dashboard/developer/activeprojects.html"
};

function earnings(){
    window.location.href = "/dashboard/developer/earnings.html"
};

function profile(){
    window.location.href = "/dashboard/developer/profile.html"
}