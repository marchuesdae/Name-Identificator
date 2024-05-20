function success(){
    var username = document.getElementById("name").value;
    var Message = "Welcome! Mr & Ms "+ username + "!";
    
    document.getElementById("welcome").innerText = Message;
}
