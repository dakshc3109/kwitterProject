  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCioJeVP0k_t6vmzpKKD0vmaw3bHgVT-S0",
    authDomain: "kwitterproject-c8877.firebaseapp.com",
    databaseURL: "https://kwitterproject-c8877-default-rtdb.firebaseio.com",
    projectId: "kwitterproject-c8877",
    storageBucket: "kwitterproject-c8877.appspot.com",
    messagingSenderId: "176560672610",
    appId: "1:176560672610:web:28292681a039ab07f7e63b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var room_name = localStorage.getItem("room_name");
  var user_name = localStorage.getItem("user_name");

  function send(){
    var message = document.getElementById("message").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: message,
        like: 0
    });
    document.getElementById("message").value = "";
  }

  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
