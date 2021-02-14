$(document).ready(function(){
    //totalValue is the totalValue of both dice added up
    //Set outside of rollDice function so event listeners can access
    let totalValue = 0

    rollDice()

    //Roll 2 dice and add the values up
    async function rollDice(){
        //Set value to 0 so the game can be run again by running rollDice()
        //without values of last game affecting results
        totalValue = 0
        await fetch("https://www.dejete.com/api?nbde=2&tpde=6")
        .then(Response => Response.json())
        .then(data => diceData = data)
        console.log(diceData)
        totalValue = diceData[0].value + diceData[1].value
        console.log(totalValue)
    }

    //Check if player wins or loses based on dice values rolled

    //If the player chooses "High", check values of dice and 
    //determine if player wins or not
    $("#High").on("click", function(){
        console.log("High clicked")
        if (totalValue > 6){
            console.log("You win!")
            document.querySelector("#diceTotal").innerHTML = `You rolled a ${totalValue}`
            document.querySelector("#winLoseStatement").innerHTML = `You win!`
            rollDice()
        }
        else{
            console.log("You lost!")
            document.querySelector("#diceTotal").innerHTML = `You rolled a ${totalValue}`
            document.querySelector("#winLoseStatement").innerHTML = `You lost!`
            rollDice()
        }
    })

    $("#Low").on("click", function(){
        console.log("Low clicked")
        if (totalValue <= 6){
            console.log("You win!")
            document.querySelector("#diceTotal").innerHTML = `You rolled a ${totalValue}`
            document.querySelector("#winLoseStatement").innerHTML = `You win!`
            rollDice()
        }
        else{
            console.log("You lost!")
            document.querySelector("#diceTotal").innerHTML = `You rolled a ${totalValue}`
            document.querySelector("#winLoseStatement").innerHTML = `You lost!`
            rollDice()
        }
    })

    $("#1").on("click", function(){
        console.log("1 clicked")
        if (totalValue == 1){
            console.log("You win!")
            document.querySelector("#diceTotal").innerHTML = `You rolled a ${totalValue}`
            document.querySelector("#winLoseStatement").innerHTML = `You win!`
            rollDice()
        }
        else{
            console.log("You lost!")
            document.querySelector("#diceTotal").innerHTML = `You rolled a ${totalValue}`
            document.querySelector("#winLoseStatement").innerHTML = `You lost!`
            rollDice()
        }
    })

    $("#2").on("click", function(){
        console.log("2 clicked")
        if (totalValue == 2){
            console.log("You win!")
            document.querySelector("#diceTotal").innerHTML = `You rolled a ${totalValue}`
            document.querySelector("#winLoseStatement").innerHTML = `You win!`
            rollDice()
        }
        else{
            console.log("You lost!")
            document.querySelector("#diceTotal").innerHTML = `You rolled a ${totalValue}`
            document.querySelector("#winLoseStatement").innerHTML = `You lost!`
            rollDice()
        }
    })

    $("#3").on("click", function(){
        console.log("3 clicked")
        if (totalValue == 3){
            console.log("You win!")
            document.querySelector("#diceTotal").innerHTML = `You rolled a ${totalValue}`
            document.querySelector("#winLoseStatement").innerHTML = `You win!`
            rollDice()
        }
        else{
            console.log("You lost!")
            document.querySelector("#diceTotal").innerHTML = `You rolled a ${totalValue}`
            document.querySelector("#winLoseStatement").innerHTML = `You lost!`
            rollDice()
        }
    })

    $("#4").on("click", function(){
        console.log("4 clicked")
        if (totalValue == 4){
            console.log("You win!")
            document.querySelector("#diceTotal").innerHTML = `You rolled a ${totalValue}`
            document.querySelector("#winLoseStatement").innerHTML = `You win!`
            rollDice()
        }
        else{
            console.log("You lost!")
            document.querySelector("#diceTotal").innerHTML = `You rolled a ${totalValue}`
            document.querySelector("#winLoseStatement").innerHTML = `You lost!`
            rollDice()
        }
    })

    $("#5").on("click", function(){
        console.log("5 clicked")
        if (totalValue == 5){
            console.log("You win!")
            document.querySelector("#diceTotal").innerHTML = `You rolled a ${totalValue}`
            document.querySelector("#winLoseStatement").innerHTML = `You win!`
            rollDice()
        }
        else{
            console.log("You lost!")
            document.querySelector("#diceTotal").innerHTML = `You rolled a ${totalValue}`
            document.querySelector("#winLoseStatement").innerHTML = `You lost!`
            rollDice()
        }
    })

    $("#6").on("click", function(){
        console.log("6 clicked")
        if (totalValue == 6){
            console.log("You win!")
            document.querySelector("#diceTotal").innerHTML = `You rolled a ${totalValue}`
            document.querySelector("#winLoseStatement").innerHTML = `You win!`
            rollDice()
        }
        else{
            console.log("You lost!")
            document.querySelector("#diceTotal").innerHTML = `You rolled a ${totalValue}`
            document.querySelector("#winLoseStatement").innerHTML = `You lost!`
            rollDice()
        }
    })

    $("#7").on("click", function(){
        console.log("7 clicked")
        if (totalValue == 7){
            console.log("You win!")
            document.querySelector("#diceTotal").innerHTML = `You rolled a ${totalValue}`
            document.querySelector("#winLoseStatement").innerHTML = `You win!`
            rollDice()
        }
        else{
            console.log("You lost!")
            document.querySelector("#diceTotal").innerHTML = `You rolled a ${totalValue}`
            document.querySelector("#winLoseStatement").innerHTML = `You lost!`
            rollDice()
        }
    })

    $("#8").on("click", function(){
        console.log("8 clicked")
        if (totalValue == 8){
            console.log("You win!")
            document.querySelector("#diceTotal").innerHTML = `You rolled a ${totalValue}`
            document.querySelector("#winLoseStatement").innerHTML = `You win!`
            rollDice()
        }
        else{
            console.log("You lost!")
            document.querySelector("#diceTotal").innerHTML = `You rolled a ${totalValue}`
            document.querySelector("#winLoseStatement").innerHTML = `You lost!`
            rollDice()
        }
    })

    $("#9").on("click", function(){
        console.log("9 clicked")
        if (totalValue == 9){
            console.log("You win!")
            document.querySelector("#diceTotal").innerHTML = `You rolled a ${totalValue}`
            document.querySelector("#winLoseStatement").innerHTML = `You win!`
            rollDice()
        }
        else{
            console.log("You lost!")
            document.querySelector("#diceTotal").innerHTML = `You rolled a ${totalValue}`
            document.querySelector("#winLoseStatement").innerHTML = `You lost!`
            rollDice()
        }
    })

    $("#10").on("click", function(){
        console.log("10 clicked")
        if (totalValue == 10){
            console.log("You win!")
            document.querySelector("#diceTotal").innerHTML = `You rolled a ${totalValue}`
            document.querySelector("#winLoseStatement").innerHTML = `You win!`
            rollDice()
        }
        else{
            console.log("You lost!")
            document.querySelector("#diceTotal").innerHTML = `You rolled a ${totalValue}`
            document.querySelector("#winLoseStatement").innerHTML = `You lost!`
            rollDice()
        }
    })

    $("#11").on("click", function(){
        console.log("11 clicked")
        if (totalValue == 11){
            console.log("You win!")
            document.querySelector("#diceTotal").innerHTML = `You rolled a ${totalValue}`
            document.querySelector("#winLoseStatement").innerHTML = `You win!`
            rollDice()
        }
        else{
            console.log("You lost!")
            document.querySelector("#diceTotal").innerHTML = `You rolled a ${totalValue}`
            document.querySelector("#winLoseStatement").innerHTML = `You lost!`
            rollDice()
        }
    })

    $("#12").on("click", function(){
        console.log("12 clicked")
        if (totalValue == 12){
            console.log("You win!")
            document.querySelector("#diceTotal").innerHTML = `You rolled a ${totalValue}`
            document.querySelector("#winLoseStatement").innerHTML = `You win!`
            rollDice()
        }
        else{
            console.log("You lost!")
            document.querySelector("#diceTotal").innerHTML = `You rolled a ${totalValue}`
            document.querySelector("#winLoseStatement").innerHTML = `You lost!`
            rollDice()  
        }
    })
})