$(document).ready(function(){
    //Setting score to 0
    localStorage.setItem("score", 0)
    
    //The max score is the number of questions done * 100
    localStorage.setItem("maxScore", 0)

    //Making answer variables outside of functions so all functions and eventListeners can use
    let correct = ""
    let wrong1 = ""
    let wrong2 = ""
    let wrong3 = ""

    //Hint counter to check if player has used a hint
    let hintCounter = 0

    //Calling for functions
    useApiReqVideoGames()



    //Retrieving questions on video games
    async function useApiReqVideoGames(){
        //Returning hint counter to 0 in case hint was used for last question
        hintCounter = 0

        //Showing all answers in case hint was used for last question
        document.querySelector("#answer1").style.visibility = 'visible';
        document.querySelector("#answer2").style.visibility = 'visible';
        document.querySelector("#answer3").style.visibility = 'visible';
        document.querySelector("#answer4").style.visibility = 'visible';

        await fetch ("https://opentdb.com/api.php?amount=1&type=multiple")
        .then(Response => Response.json())
        .then(data => questionData = data)
        settingQuestion(questionData);
    }

    //Setting the question using retrieved data
    function settingQuestion(questionData){
        //Showing user the category of question and the question
        document.querySelector("#category").innerHTML = `Category: ${questionData.results[0].category}`;
        document.querySelector("#question").innerHTML = `Question: ${questionData.results[0].question}`;

        //Setting variables to be the answers
        correct = questionData.results[0].correct_answer;
        wrong1 = questionData.results[0].incorrect_answers[0];
        wrong2 = questionData.results[0].incorrect_answers[1];
        wrong3 = questionData.results[0].incorrect_answers[2];

        //Adding answers into array
        questionArray = [correct, wrong1, wrong2, wrong3]
        console.log("First answer correct")
        console.log(questionArray)

        //Randomizing the answers' position
        questionArray.sort(() => Math.random() - 0.5);
        console.log("Randomized answers")
        console.log(questionArray)

        //Prints correct answer for testing purposes
        console.log("Correct answer")
        console.log(correct)

        //Answers have been randomized in questionArray, print the answers in HTML for user
        document.querySelector("#answer1").innerHTML = questionArray[0];
        document.querySelector("#answer2").innerHTML = questionArray[1];
        document.querySelector("#answer3").innerHTML = questionArray[2];
        document.querySelector("#answer4").innerHTML = questionArray[3];
    }

    $("#answer1").on("click", function(){
        console.log("Answer 1 selected");

        //If the correct answer is clicked, add 100 points and move on to next question
        if (document.querySelector("#answer1").innerHTML == correct){
            console.log("Correct answer selected")

            //If hint was used, only award half points
            if (hintCounter > 0){
                //Setting new score since question was correct
                let currentScore = parseInt(localStorage.getItem("score"));
                let newScore = currentScore + 50;

                //Setting new max score since 1 more question has been done
                let currentMaxScore = parseInt(localStorage.getItem("maxScore"));
                let newMaxScore = currentMaxScore + 100;

                //Setting new values into the localStorage
                localStorage.setItem("score", newScore);
                localStorage.setItem("maxScore", newMaxScore);

                //Displaying it to user in HTML
                document.querySelector("#score").innerHTML = `Score: ${newScore}/ ${newMaxScore}`
                useApiReqVideoGames();
            }
            //Else, award full points
            else{
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
            }
        }
        //Else, it is the wrong answer
        else{
            console.log("Wrong answer selected");

            let currentScore = localStorage.getItem("score")

            //Setting new max score since 1 more question has been done
            let currentMaxScore = parseInt(localStorage.getItem("maxScore"));
            let newMaxScore = currentMaxScore + 100;
        
            //Setting new values into localStorage
            localStorage.setItem("maxScore", newMaxScore);

            //Displaying it to user in HTML
            document.querySelector("#score").innerHTML = `Score: ${currentScore} / ${newMaxScore}`

            //If they've gotten 5 questions wrong, the game is over
            if (newMaxScore - currentScore >= 500){
                console.log("Game over")
                document.querySelector(".modalBox").style.display = "flex"
                document.querySelector("#endScore").innerHTML = `Score: ${currentScore} / ${newMaxScore}`
            }
            else{
                useApiReqVideoGames();
            }
        }
    })

    $("#answer2").on("click", function(){
        console.log("Answer 2 selected");

        //If the correct answer is clicked, add 100 points and move on to next question
        if (document.querySelector("#answer2").innerHTML == correct){
            console.log("Correct answer selected")
            if (hintCounter > 0){
                //Setting new score since question was correct
                let currentScore = parseInt(localStorage.getItem("score"));
                let newScore = currentScore + 50;

                //Setting new max score since 1 more question has been done
                let currentMaxScore = parseInt(localStorage.getItem("maxScore"));
                let newMaxScore = currentMaxScore + 100;

                //Setting new values into the localStorage
                localStorage.setItem("score", newScore);
                localStorage.setItem("maxScore", newMaxScore);

                //Displaying it to user in HTML
                document.querySelector("#score").innerHTML = `Score: ${newScore}/ ${newMaxScore}`
                useApiReqVideoGames();
            }
            //Else, award full points
            else{
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
            }
        }
        //Else, it is the wrong answer
        else{
            console.log("Wrong answer selected");

            let currentScore = localStorage.getItem("score")

            //Setting new max score since 1 more question has been done
            let currentMaxScore = parseInt(localStorage.getItem("maxScore"));
            let newMaxScore = currentMaxScore + 100;
        
            //Setting new values into localStorage
            localStorage.setItem("maxScore", newMaxScore);

            //Displaying it to user in HTML
            document.querySelector("#score").innerHTML = `Score: ${currentScore} / ${newMaxScore}`

            //If they've gotten 5 questions wrong, the game is over
            if (newMaxScore - currentScore >= 500){
                console.log("Game over")
                document.querySelector(".modalBox").style.display = "flex"
                document.querySelector("#endScore").innerHTML = `Score: ${currentScore} / ${newMaxScore}`
            }
            else{
                useApiReqVideoGames();
            }
        }
    })

    $("#answer3").on("click", function(){
        console.log("Answer 3 selected");

        //If the correct answer is clicked, add 100 points and move on to next question
        if (document.querySelector("#answer3").innerHTML == correct){
            console.log("Correct answer selected")
            if (hintCounter > 0){
                //Setting new score since question was correct
                let currentScore = parseInt(localStorage.getItem("score"));
                let newScore = currentScore + 50;

                //Setting new max score since 1 more question has been done
                let currentMaxScore = parseInt(localStorage.getItem("maxScore"));
                let newMaxScore = currentMaxScore + 100;

                //Setting new values into the localStorage
                localStorage.setItem("score", newScore);
                localStorage.setItem("maxScore", newMaxScore);

                //Displaying it to user in HTML
                document.querySelector("#score").innerHTML = `Score: ${newScore}/ ${newMaxScore}`
                useApiReqVideoGames();
            }
            //Else, award full points
            else{
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
            }
        }
        //Else, it is the wrong answer
        else{
            console.log("Wrong answer selected");

            let currentScore = localStorage.getItem("score")

            //Setting new max score since 1 more question has been done
            let currentMaxScore = parseInt(localStorage.getItem("maxScore"));
            let newMaxScore = currentMaxScore + 100;
        
            //Setting new values into localStorage
            localStorage.setItem("maxScore", newMaxScore);

            //Displaying it to user in HTML
            document.querySelector("#score").innerHTML = `Score: ${currentScore} / ${newMaxScore}`

            //If they've gotten 5 questions wrong, the game is over
            if (newMaxScore - currentScore >= 500){
                console.log("Game over")
                document.querySelector(".modalBox").style.display = "flex"
                document.querySelector("#endScore").innerHTML = `Score: ${currentScore} / ${newMaxScore}`
            }
            else{
                useApiReqVideoGames();
            }
        }
    })

    $("#answer4").on("click", function(){
        console.log("Answer 4 selected");

        //If the correct answer is clicked, add 100 points and move on to next question
        if (document.querySelector("#answer4").innerHTML == correct){
            if (hintCounter > 0){
                //Setting new score since question was correct
                let currentScore = parseInt(localStorage.getItem("score"));
                let newScore = currentScore + 50;

                //Setting new max score since 1 more question has been done
                let currentMaxScore = parseInt(localStorage.getItem("maxScore"));
                let newMaxScore = currentMaxScore + 100;

                //Setting new values into the localStorage
                localStorage.setItem("score", newScore);
                localStorage.setItem("maxScore", newMaxScore);

                //Displaying it to user in HTML
                document.querySelector("#score").innerHTML = `Score: ${newScore}/ ${newMaxScore}`
                useApiReqVideoGames();
            }
            //Else, award full points
            else{
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
            }
        }
        //Else, it is the wrong answer
        else{
            console.log("Wrong answer selected");

            let currentScore = localStorage.getItem("score")

            //Setting new max score since 1 more question has been done
            let currentMaxScore = parseInt(localStorage.getItem("maxScore"));
            let newMaxScore = currentMaxScore + 100;
        
            //Setting new values into localStorage
            localStorage.setItem("maxScore", newMaxScore);

            //Displaying it to user in HTML
            document.querySelector("#score").innerHTML = `Score: ${currentScore} / ${newMaxScore}`

            //If they've gotten 5 questions wrong, the game is over
            if (newMaxScore - currentScore >= 500){
                console.log("Game over")
                document.querySelector(".modalBox").style.display = "flex"
                document.querySelector("#endScore").innerHTML = `Score: ${currentScore} / ${newMaxScore}`
            }
            else{
                useApiReqVideoGames();
            }
        }
    })

    //If player wants hint, take away 2 wrong answer and award only half points for correct answer
    $("#hint").on("click", function(){
        console.log("HINT");

        //Records down that hint has been used
        hintCounter += 1

        //To count number of answers has been hidden for hint
        let hintDone = 0
        
        //Setting variables to querySelectors for ease of coding
        let a1Condition = document.querySelector("#answer1")
        let a2Condition = document.querySelector("#answer2")
        let a3Condition = document.querySelector("#answer3")
        let a4Condition = document.querySelector("#answer4")

        //Adding variables for querySelectors to array
        answerArrayHint = [a1Condition, a2Condition, a3Condition, a4Condition]

        for (i = 0; i < 4; i++) {
            //If innerHTML of various id's match any of the wrong answers and less than 2 answers have been taken away,
            //remove that answser
            if ((answerArrayHint[i].innerHTML == wrong1 || answerArrayHint[i].innerHTML == wrong2 || answerArrayHint[i].innerHTML == wrong3) && hintDone < 2){
                answerArrayHint[i].style.visibility = "hidden";
                hintDone += 1
            }
        }
    })
})