console.log("Signup Page");


var loginType = localStorage.getItem("login");

if (loginType === "client") {
        window.location.href = "/login/clientsignup.html"
} else if (loginType === "developer") {
        window.location.href = "/login/developersignup.html"
}

