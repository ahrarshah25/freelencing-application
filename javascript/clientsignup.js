console.log("Client Signup!");

var userFound = localStorage.getItem("userFound" , "true");
var loginType = localStorage.getItem("login");
if(userFound === "true"){
    if(loginType === "client"){
        window.location.href = "/dashboard/client/dashboard.html"
    }else if(loginType === "developer"){
        window.location.href = "/dashboard/developer/dashboard.html"
    }
}



function registerClient(event){
    event.preventDefault();
    var userName = document.getElementById("name").value.trim();
    var userEmail = document.getElementById("email").value.trim();
    var userPassword = document.getElementById("password").value.trim();
    var userConfirmPassword = document.getElementById("confirmPassword").value.trim();
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    if(userName === "" && userEmail === "" && userPassword === "" && userConfirmPassword === ""){
        alert("Please Fill All Required Information To Register Your Account!");
        
    }else if(!regex.test(userEmail)){
        alert("Please Enter Email In Correct Syantax\nFor Example: name@domain.com");
        
    }else if(userName === localStorage.getItem("userName" , userName) && userEmail === localStorage.getItem("userEmail" , userEmail) && userPassword === localStorage.getItem("userPassword" , userPassword) && userConfirmPassword === localStorage.getItem("userConfirmPassword" , userConfirmPassword)){
        alert("Account Already Registered!\nPlease Login");
        window.location.href = "/login/login.html"
        
    }else{
        localStorage.setItem("userName" , userName);
        localStorage.setItem("userEmail" , userEmail);
        localStorage.setItem("userPassword" , userPassword);
        localStorage.setItem("userConfirmPassword" , userConfirmPassword);
        alert("Signup Successfully!");
        window.location.href = "/login/login.html"
    }
};