console.log("JS Connected!");

var userFound = localStorage.getItem("userFound" , "true");
var loginType = localStorage.getItem("login");
if(userFound === "true"){
    if(loginType === "client"){
        window.location.href = "/dashboard/client/dashboard.html"
    }else if(loginType === "developer"){
        window.location.href = "/dashboard/developer/dashboard.html"
    }
}


function registerDeveloper(event){
    event.preventDefault()
    var userName = document.getElementById("name").value.trim();
    var userEmail = document.getElementById("email").value.trim();
    var userPassword = document.getElementById("password").value.trim();
    var userConfirmPassword = document.getElementById("confirmPassword").value.trim();
    var userAge = document.getElementById("age").value.trim();
    var userOption = document.getElementById("option").value.trim();
    var userSkills = document.getElementById("skills").value.trim();
    var userEducation = document.getElementById("education").value.trim();
    var userExperience = document.getElementById("experience").value.trim()
    var userProjects = document.getElementById("projects").value.trim();
    var userAbout = document.getElementById("about").value.trim();

    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(userName === "" && userEmail === "" && userPassword === "" && userConfirmPassword === "" && userAge === "" && userOption === "" && userSkills === "" && userEducation === "" && userExperience === "" && userProjects === "" && userAbout === ""){
        alert("Please Fill All The Fields To Register Your Account As Developer!")
        return;
    }else if(!regex.test(userEmail)){
        alert("Please Enter Email In Correct Syantax\nFor Example: name@domain.com");
        return;
    }else if(userName === localStorage.getItem("userName" , userName) && userEmail === localStorage.getItem("userEmail" , userEmail) && userPassword === localStorage.getItem("userPassword" , userPassword) && userConfirmPassword === localStorage.getItem("userConfirmPassword" , userConfirmPassword)){
        alert("User Already Exist Please Login!")
        window.location.href = "/login/login.html"
        return;
    }else{
            localStorage.setItem("userName" , userName);
            localStorage.setItem("userEmail" , userEmail);
            localStorage.setItem("userPassword" , userPassword);
            localStorage.setItem("userConfirmPassword" , userConfirmPassword);
            localStorage.setItem("userAge" , userAge);
            localStorage.setItem("userOption" , userOption);
            localStorage.setItem("userSkills" , userSkills);
            localStorage.setItem("userEducation" , userEducation);
            localStorage.setItem("userExperience" , userExperience);
            localStorage.setItem("userProjects" , userProjects);
            localStorage.setItem("userAbout" , userAbout);
        alert("Signup Successfully!");
        window.location.href = "/login/login.html"
    }
};