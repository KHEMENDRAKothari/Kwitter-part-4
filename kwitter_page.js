//YOUR FIREBASE LINKS

const firebaseConfig = {
  apiKey: "AIzaSyD8RzA-QyncdkLrna8oq0ShH6X2BaFyIn4",
  authDomain: "kwitter-2-c7d51.firebaseapp.com",
  projectId: "kwitter-2-c7d51",
  storageBucket: "kwitter-2-c7d51.appspot.com",
  messagingSenderId: "9771450039",
  appId: "1:9771450039:web:9b6fe7ca2651d595821732"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send()
{
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push;({ 
name:user_name,
message:msg,
)}

}
