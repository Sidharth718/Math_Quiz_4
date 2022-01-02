function game_start(){
 var playername1=document.getElementById("Player1Name").value;   
 var playername2=document.getElementById("Player2Name").value;  
 localStorage.setItem("player1",playername1);
 localStorage.setItem("player2",playername2); 
 window.location="main_game.html";
}  