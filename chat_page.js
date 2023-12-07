
const firebaseConfig = {
    apiKey: "AIzaSyD2fIxSpdQd_1UGE7L0o1-tjBIuvvqgJmI",
    authDomain: "projeto-100-6afb7.firebaseapp.com",
    projectId: "projeto-100-6afb7",
    storageBucket: "projeto-100-6afb7.appspot.com",
    messagingSenderId: "118949140938",
    appId: "1:118949140938:web:8997317313993460ae1733"
  };

  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    linke:0
  })

 Sende()
 function getData(){
  firebase.database().ref("/"+room_name).on('value',function(snapshot) {
    document.getElementById("output").innerHTML="";
    snapshot.forEach(function(childSnapshot) {
      childKey =childSnapshot.key;childData=childSnapshot.val();
      if(childKey !="purpose") {
        firebase_message_id=childKey;
        message_data=childData;
        console.log(firebase_message_id);
	       console.log(message_data);
	       name = message_data['name'];
	       message = message_data['message'];
         like = message_data['like'];
         name_with_tag = "<h4> "+ name +"</h4>";
         message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>Curtidas: "+ like +"</button>";

        row = name_with_tag + message_with_tag +like_button;       
        document.getElementById("output").innerHTML += row;
//Termine de programar aqui
      }
    });
      
    });
  }

getData();

function updateLike(message_id)
{
  console.log("clicou no botão Curtidas - " + message_id);
	button_id = message_id;
	likes = document.getElementById(button_id).value;
	updated_likes = Number(likes) + 1;
	console.log(updated_likes);

	firebase.database().ref(room_name).child(message_id).update({
		like : updated_likes  
	 });

}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("index.html");
}

  
 