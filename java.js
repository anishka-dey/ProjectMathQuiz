function addUser()
{
player1=document.getElementById("player1_input").value;
player2=document.getElementById("player2_input").value;
localStorage.setItem("player_1" , player1);
localStorage.setItem("player_2" , player2);
window.location="quiz.html";
}