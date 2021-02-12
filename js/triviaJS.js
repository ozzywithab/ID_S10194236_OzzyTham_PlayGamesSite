$(document).ready(function(){
    //Setting score to 0
    localStorage.setItem("score", 0)
    
    //The max score is the number of questions done * 100
    localStorage.setItem("maxScore", 0)

    //Hint counter
    let hintCount = 0;

    //Calling for functions
    useApiReqVideoGames()



    //Retrieving questions on video games
    async function useApiReqVideoGames(){
        await fetch ("https://opentdb.com/api.php?amount=1&category=15&type=multiple") //Video games category for now
        .then(Response => Response.json())
        .then(data => questionData = data)
        settingQuestion(questionData);
    }

    //Setting the question using retrieved data
    function settingQuestion(questionData){
        // Math.floor((Math.random() * 3) + 1);
        document.querySelector("#category").innerHTML = `Category: ${questionData.results[0].category}`;
        document.querySelector("#question").innerHTML = `Question: ${questionData.results[0].question}`;
        //For now, answer1 is always correct answer
        document.querySelector("#answer1").innerHTML = questionData.results[0].correct_answer;
        document.querySelector("#answer2").innerHTML = questionData.results[0].incorrect_answers[0];
        document.querySelector("#answer3").innerHTML = questionData.results[0].incorrect_answers[1];
        document.querySelector("#answer4").innerHTML = questionData.results[0].incorrect_answers[2];
    }

    //If the correct answer is clicked, add 100 points and move on to next question
    $("#answer1").on("click", function(){
        console.log("Correct answer selected");

        //Setting new score since question was correct
        let currentScore = parseInt(localStorage.getItem("score"));
        let newScore = currentScore + 100;

        //Setting new max score since 1 more question has been done
        let currentMaxScore = parseInt(localStorage.getItem("maxScore"));
        let newMaxScore = currentMaxScore + 100;

        //Setting new values into the localStorage
        localStorage.setItem("score", newScore);
        localStorage.setItem("maxScore", newMaxScore);

        //Displaying it to user in HTML
        document.querySelector("#score").innerHTML = `Score: ${newScore}/ ${newMaxScore}`
        useApiReqVideoGames();
    })

    //If wrong answer is called, increase max score by 100 and move on to next question
    $("#answer2, #answer3, #answer4").on("click", function(){
        console.log("Wrong answer selected");

        let currentScore = localStorage.getItem("score")

        //Setting new max score since 1 more question has been done
        let currentMaxScore = parseInt(localStorage.getItem("maxScore"));
        let newMaxScore = currentMaxScore + 100;
        
        //Setting new values into localStorage
        localStorage.setItem("maxScore", newMaxScore);

        //Displaying it to user in HTML
        document.querySelector("#score").innerHTML = `Score: ${currentScore}/ ${newMaxScore}`
        if (newMaxScore - currentScore >= 500){
            console.log("testing")
        }
        else{
            useApiReqVideoGames();
        }
    })

    //If player wants hint, take away 2 wrong answer and award only half points for correct answer
    $("#hint").on("click", function(){
        console.log("HINT");
        hint = hint + 1;
        if (document.querySelector("#answer2").innerHTML == questionData.results[0].incorrect_answers[0]){
            console.log("Testing")
            document.querySelector("#answer2").style.visibility = 'hidden';
        }
        //WIP NEEDS TO BE FINISHED AFTER WRONG ASNWERS ARE RANDOMIZED
    })
})