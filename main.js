function addUser(){
    player1_name=document.getElementById("player1_name_input").value;
    player2_name=document.getElementById("player2_name_input").value;
    localStorage.setItem("Player1_Name", player1_name);
    localStorage.setItem("Player2_Name", player2_name);
    window.location="mathpage.html";
}