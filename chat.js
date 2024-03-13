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

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";

}



