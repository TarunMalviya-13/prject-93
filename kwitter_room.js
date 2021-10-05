
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyB7iXvksQ19YbjjxevMOrWdjuQIsg7yl4w",
      authDomain: "kwitter-a29ea.firebaseapp.com",
      databaseURL: "https://kwitter-a29ea-default-rtdb.firebaseio.com",
      projectId: "kwitter-a29ea",
      storageBucket: "kwitter-a29ea.appspot.com",
      messagingSenderId: "524059690670",
      appId: "1:524059690670:web:f4137bf890ea21bfda4f3f"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
