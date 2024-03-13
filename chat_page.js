// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCjRy-i9ndzWy_1kNMKIjSPEkYuFSPVMMs",
    authDomain: "covid-19bot-yley.firebaseapp.com",
    databaseURL: "https://covid-19bot-yley-default-rtdb.firebaseio.com",
    projectId: "covid-19bot-yley",
    storageBucket: "covid-19bot-yley.appspot.com",
    messagingSenderId: "649370627355",
    appId: "1:649370627355:web:e05ac5efb096777caa77be"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
 user_name
 room_name

 function send()
{
      msg = document.getElementById("msg").ariaValueMax;
      firebase.database().ref(room_name).push({
            name: user_name,
            message:msg,
            like:0      
      });

        document.getElementById("msg").value = "";
    }

    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
//Start code
console.log(message_data);
name = message_data['name'];
message = message_data['messsage'];
like = message_data['like'];
name_with_tag = " <h4>"+ name +"<img class='user_tick' src='tick.png'></h4>";
message_with_tag =  "<h4 class='message_h4'>"+ message + "</h4>";
like_button = "button class='btn btn-warning' id='"+firebase_message-id+"'value='"+like+"' onclick='updateLike(this.id)'>";
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";
row =  name_with_tag+ message_with_tag +like_button + span_with_tag;
//End code'
   } });  }); }
getData();

function redirectToRoomName(name)
 {
       console.log(name);
       localStorage.setItem("room_name", name);
       window.location = "index.html";
 }