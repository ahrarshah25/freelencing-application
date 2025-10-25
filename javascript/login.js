console.log("Login Page!");

var loginType = localStorage.getItem("login");
    var accountLabel = document.getElementById("accountType");

    if (loginType === "client") {
        accountLabel.innerText = "Login As Client!";
        console.log("Client");
        
    }else if (loginType === "developer") {
        accountLabel.innerText = "Login As Developer!";
        console.log("Developer");
        
    }

// var userName = localStorage.getItem("userName");

function loginUser(event){
    var userEmail = localStorage.getItem("userEmail");
    var userPassword = localStorage.getItem("userPassword");

    event.preventDefault();

    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var userEmailInput = document.getElementById("email").value.trim();
    var userPasswordInput = document.getElementById("password").value.trim();

    if(userEmailInput === "" && userPasswordInput === ""){
        alert("Please Enter Your Email And Password To Proceed!");
    }else if(!regex.test(userEmailInput)){
        alert("Please Enter Your Email With Correct Syntax!\nFor Example:name@domain.com");
    }else if(userEmailInput !== userEmail && userPasswordInput !== userPassword){
        alert("Account Not Registered!\nPlease Signup First.")
        window.location.href = "/login/signup.html"
    }else{
        localStorage.setItem("userFound" , "true")
        if(loginType === "client"){
        window.location.href = "/dashboard/client/dashboard.html"
        }else{
            window.location.href = "/dashboard/developer/dashboard.html"
        }
    }
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
