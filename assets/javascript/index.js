const questionsNanswers=[
    {
        q:"Which of these is not one of the three domains of life?",
        pa:["Siberia","Bacteria", "Eukaria"],
        ca:"Siberia"
    },
    {
        q:"Wich U.S state borders more Canadian provinces than any other state?",
        pa:["Montana","New York", "Wisconsin"],
        ca:"Montana"
    },
    {
        q:"Piraeus serves as the port for the city that is the chief commercial and transportation center of Greece. Name this city.",
        pa:["Nicosia","Instanbul", "Athens"],
        ca:"Athens"    
    },
    {
        q:"Which of the following countries has the longest coastline?",
        pa:["Virginia","Iran", "Brazil"],
        ca:"Iran"    
    },
    {
        q:"how long did it take to get to the moon in 1969?",
        pa:["42_Days","2_Days", "One_week"],
        ca:"42_Days"    
    }
]
//var queryURL = "../json/index.json";
var win = 0;
var loss = 0; 
var timer;
var count = 30;
//function load() {
   // var someData_notJSON = JSON.parse(queryURL);
   // console.log(someData_notJSON[0]);
   // }
//load();
//todo: Timer

function gameStart(){
    $("#score-display").append("<h2>Score:</h2>");
    $("#score-display").append("<h2 class='rounded text-light m-2' id='timer'>Timer :"+count+"</h2>");
    $("#score-display").append("<h2 class='rounded text-light m-2' id='correct'>Correct :"+win+"</h2>");
    $("#score-display").append("<h2 class='rounded text-light m-2'id='incorrect'>Incorrect :"+loss+"</h2>");
    
    function assignQnA(){
        console.log(questionsNanswers.length);
        if(questionsNanswers.length <= 0){
            
            clearAll();
            $("#answers").append("<h1>GAME OVER!</h1>");
            $("#answers").append("<h1>Best Score "+win+" !</h1>");
            $("#answers").append("<h3 id='reStartBtn'  class='btn-dark rounded mt-3'>Start Game</h3>");
            
            clearInterval(timer);
            //reStart game
            $("#reStartBtn").on('click',function(){
                console.log("clicked")
                clearInterval(timer);
                //$("#reStartBtn").hide();
                clearAll();
                location.reload();

            })
            $("#score-display").html("");

        }else{
        count = 30;
        timer = setInterval(timeOut,1000);
        //assign a random object to randomquestion index var
        var randomQuestion = Math.floor(Math.random() * questionsNanswers.length);
        var possibleAnswers = questionsNanswers[randomQuestion].pa;
        //setup graphics
        $("#question-display").append("<h2>Question:</h2>");
        $("#question-display").append("<h2 class='rounded text-light m-2'>"+questionsNanswers[randomQuestion].q+"</h2>");
        $("#answers").append("<h2>Answers</h2>");  
        //for  
        for (var i = 0;i<possibleAnswers.length;i++){
            var correctAnswer = questionsNanswers[randomQuestion].ca;
            console.log("correct answer"+correctAnswer);
            $("#answers").append('<h2 class=" rounded text-light m-2" id='+possibleAnswers[i]+">"+possibleAnswers[i]+"</h2>");   
       
        }
        //find all the elements and add on click function
        $("#answers").find("h2").each(function(){ 
            //click event . this refers to h2 element.id
            $(this).on('click',function(){
                console.log("clicked " +this.id);
                //if write or wrong statement
                if (this.id === correctAnswer){
                    
                    clearInterval(timer);
                    questionsNanswers.splice(randomQuestion,1);
                    win++;
                    $("#correct").html("correct: "+win);
                    clearAll();
                    assignQnA();
                    //display correct banner, btn next question
                }else{
                    clearInterval(timer);
                    questionsNanswers.splice(randomQuestion,1);
                    loss++;
                    //display correct answer
                    $("#incorrect").html("wrong :"+loss);
                    clearAll();
                    assignQnA();
                    
                     

                }
            }) 
        });
    }
}


 
    assignQnA();
}




//clear next
function clearAll(){
    $("#question-display").html("");
    $("#answers").html("");
    
    
}
function timeOut(){
    
    count--;
    $("#timer").html("<h2 class='rounded text-light m-2'>"+count+"</h2>");
    console.log("time up! ");
    if(count === 0){
        loss++;
        $("#incorrect").html("<h2 class='rounded text-light m-2'>Incorrect :"+loss+"</h2>");
        clearInterval(timer);
    }
}
function restartGame(){
    gameStart();
}

//Start game
let startBtn = $("#startBtn");
$(startBtn).on('click',function(){
    $(startBtn).hide("slow");
    //assign first question
    gameStart();
})
