player1_name=localStorage.getItem("player_1");
player2_name=localStorage.getItem("player_2");

player1_score=0;
player2_score=0;

document.getElementById("player1name").innerHTML = player1_name + " : " ;
document.getElementById("player2name").innerHTML = player2_name + " : " ;

document.getElementById("player1score").innerHTML =player1_score;
document.getElementById("player2score").innerHTML = player2_score;

document.getElementById("question_name").innerHTML="Question Turn - "+ player1_name;
document.getElementById("answer_name").innerHTML="Answer Turn - "+ player2_name;


function send(){
    number1= document.getElementById("number1").value;
    number2= document.getElementById("number2").value;

    actual_answer= parseInt(number1) * parseInt(number2);

    question_number= "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box="<br> Answer: <input type='text' id='input_check_box'>";
    check_btn="<br><br><br> <button class='btn-info' onclick='check()'> Check </button>";
    row= question_number+input_box+check_btn;

    document.getElementById("output").innerHTML= row;

    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}
question_turn="player1";
answer_turn="player2";

function check(){
    answer=document.getElementById("input_check_box").value;
    console.log(answer);

    if(answer==actual_answer){

        if(answer_turn=="player1"){
            player1_score=player1_score+1;
            document.getElementById("player1score").innerHTML=player1_score;
        }
        else{
            player2_score=player2_score+1;
            document.getElementById("player2score").innerHTML=player2_score;
        }

    }

    if(question_turn=="player1"){
        question_turn="player2";
        document.getElementById("question_name").innerHTML="Question Turn- " + player2_name;
    }
    else{
        question_turn="player1";
        document.getElementById("question_name").innerHTML="Question Turn- " + player1_name;
    }

    if(answer_turn=="player1"){
        answer_turn="player2";
        document.getElementById("answer_name").innerHTML="Answer Turn- " + player2_name;
    }
    else{
        answer_turn="player1";
        document.getElementById("answer_name").innerHTML="Answer Turn- " + player1_name;
    }
    document.getElementById("output").innerHTML="";
}