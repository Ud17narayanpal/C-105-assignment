function getData()  {firebase.database().ref("/").on('value',
 function(snapshot) {document.getElementById("output").innerHTML =
  "";snapshot.forEach(function (childSnapshot) {childKey  =  
    childSnapshot.key ; childData = childSnapshot.val();if(childKey != "purpose"){
      firebase_message_id = childKey;
      message_data =childData;
    }
    Room_names = childKey;
    //Start code
    
    //End code
 });});}

 getData();
 function addRoom()
{
      room_name = document.getElementById("room_name").ariaValueMax;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

 