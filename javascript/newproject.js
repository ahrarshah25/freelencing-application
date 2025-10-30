console.log("New Project Page!");


function createProject(event){
    event.preventDefault();
    var userBalance = localStorage.getItem("amount");
    var projectName = document.getElementById("projectName").value.trim();
    var projectDesc = document.getElementById("projectDesc").value.trim();
    var projectDeveloper = document.getElementById("projectDeveloper").value.trim();
    var projectBudget = document.getElementById("projectBudget").value.trim();
    var projectDeadline = document.getElementById("projectDeadline").value.trim();
    var projectLang = document.getElementById("projectLang").value.trim();

    if(projectName === "" && projectDesc === "" && projectDeveloper === "" && projectBudget === "" && projectDeadline === "" && projectLang === ""){
        alert("Please Fill All The Fields");
    }else if(userBalance === 0){
        alert("You Don't Have Balance Please Recharge!");
        window.location.href = "/dashboard/client/balance.html"
    }else if(projectDeveloper === "Minhaj Wahid" && userBalance <= 1200 || projectBudget <= 1200){
        alert("You Dont Have Enough Balance To Hire This Developer!\nPlease Recharge OR Make You Budget High!")
    }else{
        localStorage.setItem("newProjectFound" , "true")
        localStorage.setItem("projectName" , projectName);
        localStorage.setItem("projectDesc" , projectDesc);
        localStorage.setItem("projectDeveloper" , projectDeveloper);
        localStorage.setItem("projectBudget" , projectBudget);
        localStorage.setItem("projectDeadline" , projectDeadline);
        localStorage.setItem("projectLang" , projectLang);
        alert("Projected Created Successfully!\n\n\nWaiting For Your Chosen Developer To Accept The Proposal.");
        window.location.href = "/dashboard/client/projects.html";
    }
}
