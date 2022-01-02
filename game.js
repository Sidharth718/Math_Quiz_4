    player1=localStorage.getItem("player1")
    player2=localStorage.getItem("player2")
    score1=0
    score2=0
    document.getElementById("player1_score_name").innerHTML=player1+" :";
    document.getElementById("player2_score_name").innerHTML=player2+" :";
    document.getElementById("player1_score").innerHTML=score1;
    document.getElementById("player2_score").innerHTML=score2;
    document.getElementById("player_question").innerHTML="Question turn:"+name1;
    document.getElementById("player_answer").innerHTML="Answer turn:"+name2;

function send(){
    
    number1=document.getElementById("number1").value
    number2=document.getElementById("number2" ).value
    real_answer = number1 * number2 
    question_number="<h4>" + number1 + " x " + number2 + "</h4>" ;
    text_input="<br>Answer : <input type='text' id='input_check_box'>";
    check_button="<br> <br> <button class='btn btn-info' onclick='check("+real_answer+")'>CHECK</button>";
    div=question_number+text_input+check_button;
    document.getElementById("output").innerHTML=div;d
 }
 question_turn=player1;
 answer_turn=player2;
 function check(real_answer){
   
    question_turn=player1;
    answer_turn=player2;

     get_answer=document.getElementById("input_check_box").value;
     
     if(real_answer == get_answer ){
        
        if(answer_turn == "player1"){
            
            update_score1==score1+1;
            document.getElementById("player1_score").innerHTML =  update_score1;
        }
        else
        {
        update_score2=score2+1;
        document.getElementById("player2_score").innerHTML =  update_score2;
        }

     }
     if(question_turn == "player1"){
        question_turn="player2";
        document.getElementById("player_question").innerHTML="Question turn:"+player2;
    }
    else{
        question_turn="player1"
        document.getElementById("player_question").innerHTML="Question turn:"+player1;
 
    }
    if(answer_turn == "player2"){
        answer_turn="player1"
        document.getElementById("player_answer").innerHTML="Answer turn:"+player1;
    }
    else{
     answer_turn="player2"
     document.getElementById("player_answer").innerHTML="Answer turn:"+player2;
    }
    document.getElementById("output").innerHTML="";

 }
