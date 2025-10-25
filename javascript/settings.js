console.log("Settings JS Connected!");

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

var developerName = localStorage.getItem("userName") || "Developer";
document.getElementById("developerName").innerText = developerName + "'s Profile Settings";

function saveDeveloperSettings() {
    var userName = document.getElementById("devName").value.trim();
    var userEmail = document.getElementById("devEmail").value.trim();
    var userAbout = document.getElementById("devAbout").value.trim();
    var userAge = document.getElementById("devAge").value.trim();
    var devProfession = document.getElementById("devProfession").value.trim();
    var userSkills = document.getElementById("devSkills").value.trim();
    var userProjects = document.getElementById("devProjects").value.trim();
    var userExperience = document.getElementById("devExperience").value.trim();
    var userEducation = document.getElementById("devEducation").value.trim();
    var devLocation = document.getElementById("devLocation").value.trim();
    var devLanguages = document.getElementById("devLanguages").value.trim();
    var devEarnings = document.getElementById("devEarnings").value.trim();

    if (
        !userName || !userEmail || !userAbout || !userAge ||
        !devProfession || !userSkills || !userProjects ||
        !userExperience || !userEducation || !devLocation ||
        !devLanguages || !devEarnings
    ) {
        alert("⚠️ Please fill all the fields before saving.");
        return;
    }
    localStorage.setItem("userName", userName);
    localStorage.setItem("userEmail", userEmail);
    localStorage.setItem("userAbout", userAbout);
    localStorage.setItem("userAge", userAge);
    localStorage.setItem("devProfession", devProfession);
    localStorage.setItem("userSkills", userSkills);
    localStorage.setItem("userProjects", userProjects);
    localStorage.setItem("userExperience", userExperience);
    localStorage.setItem("userEducation", userEducation);
    localStorage.setItem("devLocation", devLocation);
    localStorage.setItem("devLanguages", devLanguages);
    localStorage.setItem("devEarnings", devEarnings);

    alert("✅ Profile changes saved successfully!");
    window.location.href = "/dashboard/developer/profile.html";
}
