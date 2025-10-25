console.log("Profile JS Connected!");



var userFound = localStorage.getItem("userFound" , "true");
var loginType = localStorage.getItem("login");
if(userFound === "true"){
    
}else{
    alert("Please Login First!")
    window.location.href = "/login/login.html"
}



function editProfile() {
    window.location.href = "/dashboard/developer/settings.html";
}

window.onload = function () {
    var userName = localStorage.getItem("userName") || "Meer Quais";
    var userEmail = localStorage.getItem("userEmail") || "meer@example.com";
    var userAbout = localStorage.getItem("userAbout") || "Passionate full-stack developer...";
    var userAge = localStorage.getItem("userAge") || "32";
    var devProfession = localStorage.getItem("devProfession") || "Full Stack Developer • SMIT Trainer";
    var userSkills = localStorage.getItem("userSkills") || "HTML, CSS, JS, React, Node.js";
    var userProjects = localStorage.getItem("userProjects") || "11";
    var userExperience = localStorage.getItem("userExperience") || "5";
    var userEducation = localStorage.getItem("userEducation") || "BS Computer Science — SMIT";
    var devLocation = localStorage.getItem("devLocation") || "Karachi, Pakistan";
    var devLanguages = localStorage.getItem("devLanguages") || "English, Urdu";
    var devEarnings = localStorage.getItem("devEarnings") || "68838";

    document.getElementById("devName").innerText = userName;
    document.getElementById("devEmail").innerText = userEmail;
    document.getElementById("devEmail").href = `mailto:${userEmail}`;
    document.getElementById("hireBtn").href = `mailto:${userEmail}`;
    document.getElementById("devProfession").innerText = devProfession;
    document.getElementById("devAbout").innerText = userAbout;

    document.getElementById("statProjects").innerText = userProjects;
    document.getElementById("statExperience").innerText = userExperience + "y";
    document.getElementById("statEarnings").innerText = "₨ " + devEarnings;

    document.getElementById("detailEmail").innerText = userEmail;
    document.getElementById("detailAge").innerText = userAge;
    document.getElementById("detailEducation").innerText = userEducation;
    document.getElementById("detailLocation").innerText = devLocation;
    document.getElementById("detailLang").innerText = devLanguages;

    var skillsArr = userSkills.split(",").map(skill => skill.trim());
    var skillsContainer = document.getElementById("devSkills");
    skillsContainer.innerHTML = "";
    skillsArr.forEach(skill => {
        var span = document.createElement("span");
        span.classList.add("chip");
        span.innerText = skill;
        skillsContainer.appendChild(span);
    });
};
