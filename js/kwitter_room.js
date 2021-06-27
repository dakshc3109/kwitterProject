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

var user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";

function addRoom(){
  var room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room"
  }) ;

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
};

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   var Room_names = childKey;
 //Start code
    console.log("Room name: "+Room_names);
    var items = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
    document.getElementById("output").innerHTML += items;
 //End code
 });});}
getData();

function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
}