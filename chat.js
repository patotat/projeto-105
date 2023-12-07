// Configuração do Firebase de seu aplicativo
//ADICIONE OS LINKS DO FIREBASE AQUI
const firebaseConfig = {
  apiKey: "AIzaSyD2fIxSpdQd_1UGE7L0o1-tjBIuvvqgJmI",
  authDomain: "projeto-100-6afb7.firebaseapp.com",
  projectId: "projeto-100-6afb7",
  storageBucket: "projeto-100-6afb7.appspot.com",
  messagingSenderId: "118949140938",
  appId: "1:118949140938:web:8997317313993460ae1733"
};

// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}

    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";