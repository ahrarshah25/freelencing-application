console.log("JS Connected!");


function clientBalance(event){
    event.preventDefault();
    var transactionId = document.getElementById("transactionId").value.trim();
    var amount = document.getElementById("amount").value.trim();

    if(transactionId <= 12 || transactionId <=   14){
        alert("Please Enter Correct Transaction Id!")
        transactionId.value = "";
    }else if(transactionId === "" || amount === ""){
        alert("Please Enter Amount And Transaction Id!")
    }else{
        localStorage.setItem("amount" , amount)
        alert("Thank you! Your payment is verified! Transaction ID: " + transactionId + ", Amount: PKR " + amount);
    }
};