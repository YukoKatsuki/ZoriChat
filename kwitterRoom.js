
const firebaseConfig = {
  apiKey: "AIzaSyCXPQ9kuRT_jpQhypz_xvp-TBUVpqNLq9M",
  authDomain: "zori-e91a3.firebaseapp.com",
  databaseURL: "https://zori-e91a3-default-rtdb.firebaseio.com",
  projectId: "zori-e91a3",
  storageBucket: "zori-e91a3.appspot.com",
  messagingSenderId: "659028448583",
  appId: "1:659028448583:web:7a25a5395e56021942e862",
  measurementId: "G-QH7133BG3H"
};

firebase.initializeApp(firebaseConfig);

  userName = localStorage.getItem("userName");

document.getElementById("userName").innerHTML = "Bem-vindo(a) " + userName + "!";

function addRoom()
{
  roomName = document.getElementById("roomName").value;

  firebase.database().ref("/").child(roomName).update({
    purpose : "adicionar nome de sala"
  });


    localStorage.setItem("roomName", roomName);
    
    window.location = "kwitterPage.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("roomName", name);
    window.location = "kwitterPage.html";
}

function logout() {
localStorage.removeItem("userName");
localStorage.removeItem("roomName");
    window.location = "index.html";
}
