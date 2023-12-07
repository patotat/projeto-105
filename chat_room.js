function getData()
{
    firebase.database().ref("/").on('value', function(snapshot)
    {document.getElementById("output") .innerHTML =
"";snapshot.forEach(function(childsnapshot) {childkey  =
childsnapshot.key;
                  Room_names = childkey;
                row ="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
            });
})
}