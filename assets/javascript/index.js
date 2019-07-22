const questionsNanswers=[
    {
        q:"Which of these is not one of the three domains of life?",
        pa:["Siberia","Bacteria", "Eukaria"],
        ca:"Siberia"
    },
    {
        q:"2 of these is not one of the three domains of life?",
        pa:["Siberia","Bacteria", "Eukaria"],
        ca:"Siberia"
    },
    {
        q:"3 of these is not one of the three domains of life?",
        pa:["Siberia","3Bacteria", "Eukaria"],
        ca:"3Bacteria"    
    }
]

var win = 0;
var loss = 0; 
//todo: Timer
function gameStart(){
    function assignQnA(){
        //assign a random object to randomquestion index var
        var randomQuestion = Math.floor(Math.random() * (questionsNanswers.length));
        var possibleAnswers = questionsNanswers[randomQuestion].pa;
        
        $("#question-display").append("<h2>Question:</h2>");
        $("#question-display").append("<h2 class='bg-dark rounded text-light m-2'>"+questionsNanswers[randomQuestion].q+"</h2>");
        $("#answers").append("<h2>Answers</h2>");   
        for (var i = 0;i<possibleAnswers.length;i++){
            
            var correctAnswer = questionsNanswers[randomQuestion].ca;
            console.log("correct answer"+correctAnswer);
            $("#answers").append('<h2 class="bg-dark rounded text-light m-2" id='+possibleAnswers[i]+">"+possibleAnswers[i]+"</h2>");
           
        }
        //find all the elements and add on click function
        $("#answers").find("h2").each(function(){ 
            //click event .
            $(this).on('click',function(){
                console.log("clicked " +this.id);
                //if write or wrong statement
                if (this.id === correctAnswer){
                    alert("correct");
                    win++;
                    $("#win").html("correct: "+win);
                    clearAll();
                    assignQnA();
                    //display correct banner, btn next question
                }else{
                    alert("wrong");
                    //display correct answer 

                }
            }) 
        });
    }
    
   
    assignQnA();
}

//clear next
function clearAll(){
    $("#question-display").html("");
    $("#answers").html("");
}

 

//Start game
$("#startBtn").on('click',function(){
    $("#startBtn").hide("slow");
    //assign first question
    gameStart();
})





