function logIn(){
    var user_name = document.getElementById("user_name").value;
    if(user_name == ""){
        alert("Enter your name")
    }
    else{
        localStorage.setItem("user_name", user_name);
        window.location = "kwitter_room.html";
    }
}
