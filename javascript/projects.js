console.log("Projects Page!");


function newProject(){
    window.location.href = "/dashboard/client/newproject.html"
};


var newProjectFound = localStorage.getItem("newProjectFound" , "true");

var projectName = localStorage.getItem("projectName" , projectName);
var projectDesc = localStorage.getItem("projectDesc" , projectDesc);
var projectDeveloper = localStorage.getItem("projectDeveloper" , projectDeveloper);
var projectBudget = localStorage.getItem("projectBudget" , projectBudget);
var projectDeadline = localStorage.getItem("projectDeadline" , projectDeadline);
var projectLang = localStorage.getItem("projectLang" , projectLang);

if(newProjectFound === "true"){
    document.getElementById("newProjectDiv").style.display = "block";
}

var userProjectName = document.getElementById("userProjectName").innerText = projectName;
var userProjectDesc = document.getElementById("userProjectDesc").innerText = projectDesc;
var userProjectDeveloper = document.getElementById("userProjectDeveloper").innerText = projectDeveloper;
var userProjectBudget = document.getElementById("userProjectBudget").innerText = projectBudget;

function viewDetails(){
    document.getElementById("modalTitle").innerText = "Details For " + projectName;
    document.getElementById("modal-details").innerHTML = "<b>Name Of Project: </b>" + projectName + " <br><b> Project Description: </b>" + projectDesc + "<br><b>Developer Chosen: </b>" + projectDeveloper + "<br><b>Your Budget: </b>" + projectBudget + "<br><b>Project Deadline / Last Date Of Submition: </b>" + projectDeadline + "<br><b>Project Language You Selected: </b>" + projectLang;
}

function projectCancel(){
    alert("Project Canceled Successfully!")
    document.getElementById("newProjectDiv").style.display = "none";
        localStorage.removeItem("newProjectFound" , "true")
        localStorage.removeItem("projectName" , projectName);
        localStorage.removeItem("projectDesc" , projectDesc);
        localStorage.removeItem("projectDeveloper" , projectDeveloper);
        localStorage.removeItem("projectBudget" , projectBudget);
        localStorage.removeItem("projectDeadline" , projectDeadline);
        localStorage.removeItem("projectLang" , projectLang);

}