$(document).ready(function(){
    //Setting the deck ID so all functions can access
    let deckID = ""

    //Saving the image link for the dealer's hidden card
    //Needed because the card needs to be shown so it has to be available to all functions
    let dealerFirstImage = ""
    let dealerSecondImage = ""

    //Counts the number of cards that player has drawn
    let cardsDrawn = 0

    //Setting player total and dealer total outside so all functions have access
    let playerTotal = 0
    let dealerTotal = 0

    //Counts number of aces drawn, if any
    //For player
    let acesDrawn = 0
    //For dealer
    let acesDrawnDealer = 0

    createNewDeck()

    //Function to create a new deck of cards
    async function createNewDeck(){
        await fetch ("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6")
        .then(Response => Response.json())
        .then(data => deckData = data)

        //Setting relevant values pertaining to new deck
        deckID = deckData.deck_id;
        deckCount = deckData.remaining
        
        //Calling function to deal cards to dealer and player
        dealCards(deckID);
    }

    //Function to deal cards to both player and dealer
    async function dealCards(deckID){
        //Draws 4 cards from current deck
        await fetch ("https://deckofcardsapi.com/api/deck/" +deckID+ "/draw/?count=4")
        .then(Response => Response.json())
        .then(data => cardDraw = data)

        //From this draw, deal first card to dealer, second to player as shown cards
        dealerShow = cardDraw.cards[0];
        playerFirst = cardDraw.cards[1];

        //Deal the next 2 cards the same way
        dealerHidden = cardDraw.cards[2]
        playerSecond = cardDraw.cards[3]

        //Player has drawn 2 cards
        cardsDrawn += 2

        console.log(dealerShow, playerFirst, dealerHidden, playerSecond)

        //Clearing away previous round's cards
        $("#dealerCards").empty();
        $("#playerCards").empty();

        //Showing player this round's cards
        $("#dealerCards").append("<img src='" + dealerShow.image + "'>");
        $("#dealerCards").append("<img src='images/hiddenCard.png'>");
        $("#playerCards").append("<img src='" + playerFirst.image + "'>");
        $("#playerCards").append("<img src='" + playerSecond.image + "'>");
        //Setting the public variable to this so it can be used later
        //Since .empty() will be used and dealerCards ID will be empty
        dealerFirstImage = "<img src='" + dealerShow.image + "'>"
        dealerSecondImage = "<img src='" + dealerHidden.image + "'>"

        //If player has 2 aces, he wins
        if (playerFirst.value == "ACE" && playerSecond.value == "ACE"){
            console.log("You win!")
            document.querySelector("#endStatementPlayer").innerHTML = `Your hand: DOUBLE ACES!`
            document.querySelector("#endStatementDealer").innerHTML = `Dealer's hand: -`
            document.querySelector("#modalBoxWin").style.display = "flex"
        }

        //Calculating value of player's hand

        //If first card are King, Queen, Jack or 10, add 10 to value of player's hand. Else, add the face value of card
        if (playerFirst.value == "KING" || playerFirst.value == "QUEEN" || playerFirst.value == "JACK" || parseInt(playerFirst.value == 10)){
            playerTotal += 10
        }
        else if (playerFirst.value == "ACE"){
            playerTotal += 11
            acesDrawn += 1
        }
        else{
            playerTotal += parseInt(playerFirst.value)
        }

        //If second card are King, Queen, Jack or 10, add 10 to value of player's hand. Else, add the face value of card
        if (playerSecond.value == "KING" || playerSecond.value == "QUEEN" || playerSecond.value == "JACK" || parseInt(playerSecond.value == 10)){
            playerTotal += 10
        }
        else if (playerSecond.value == "ACE"){
            playerTotal += 11
            acesDrawn += 1
        }
        else{
            playerTotal += parseInt(playerSecond.value)
        }

        //If by end of both if/else statements, playerTotal == 21, they have a blackjack
        if (playerTotal == 21){
            console.log("Blackjack!")
        }
        console.log(playerTotal)

        //Calculating value of dealer's hand

        //If dealer has 2 aces, he wins
        if (dealerShow.value == "ACE" && dealerHidden.value == "ACE"){
            console.log("Dealer wins!")
            document.querySelector("#endStatementPlayer").innerHTML = `Your hand: ${playerTotal}`
            document.querySelector("#endStatementDealer").innerHTML = `Dealer's hand: DOUBLE ACES!`
            document.querySelector("#modalBoxLose").style.display = "flex"
            // ADD END GAME POP UP HERE
        }

        //If first card are King, Queen, Jack or 10, add 10 to value of player's hand. Else, add the face value of card
        if (dealerShow.value == "KING" || dealerShow.value == "QUEEN" || dealerShow.value == "JACK" || parseInt(dealerShow.value == 10)){
            dealerTotal += 10
        }
        else if (dealerShow.value == "ACE"){
            dealerTotal += 11
            acesDrawnDealer += 1
        }
        else{
            dealerTotal += parseInt(dealerShow.value)
        }

        //If second card are King, Queen, Jack or 10, add 10 to value of player's hand. Else, add the face value of card
        if (dealerHidden.value == "KING" || dealerHidden.value == "QUEEN" || dealerHidden.value == "JACK" || parseInt(dealerHidden.value == 10)){
            dealerTotal += 10
        }
        else if (dealerHidden.value == "ACE"){
            dealerTotal += 11
            acesDrawnDealer += 1
        }
        else{
            dealerTotal += parseInt(dealerHidden.value)
        }
    }

    //If player chooses to "Hit"(Draw a card)
    $("#hit").on("click", async function(){
        //Fetching card from deck
        await fetch ("https://deckofcardsapi.com/api/deck/" +deckID+ "/draw/?count=1")
        .then(Response => Response.json())
        .then(data => hitCard = data)
        console.log(hitCard)

        //Showing player the newly drawn card
        $("#playerCards").append("<img src='" + hitCard.cards[0].image + "'>");

        //Another card has been drawn
        cardsDrawn += 1

        //Adding value to player based on card
        if (hitCard.cards[0].value == "KING" || hitCard.cards[0].value == "QUEEN" || hitCard.cards[0].value == "JACK" || parseInt(hitCard.cards[0].value == 10)){
            playerTotal += 10
        }

        //If player draws another ace in addition to existing ones, the value is taken to be 1 as aces can be taken as 1 or 11, as 2 or more 11's would exceed 21
        else if (hitCard.cards[0].value == "ACE" && acesDrawn > 0){
            playerTotal += 1
        }
        //If the player doesn't have an existing ace, the first one is taken as an 11
        else if (hitCard.cards[0].value == "ACE"){
            playerTotal += 11
        }
        //Else, take the face value of card
        else{
            playerTotal += parseInt(hitCard.cards[0].value)
        }

        //If after the card is drawn and the value is over 21, bust
        if (playerTotal > 21){
            console.log("Bust")
            document.getElementById("hit").disabled = true;
            document.getElementById("stay").disabled = true;
            setTimeout(function() {
                document.querySelector("#endStatementPlayerLose").innerHTML = `Your hand: ${playerTotal}`
                document.querySelector("#endStatementDealerLose").innerHTML = `Dealer's hand: ${dealerTotal}`
                document.querySelector("#modalBoxLose").style.display = "flex"
              }, 1500);
        }

        //If the player has 5 cards in his hand, he wins
        if (cardsDrawn >= 5){
            console.log("You won")
            setTimeout(function() {
                document.querySelector("#endStatementPlayer").innerHTML = `Your hand: ${playerTotal}`
                document.querySelector("#endStatementDealer").innerHTML = `Dealer's hand: -`
                document.querySelector("#modalBoxWin").style.display = "flex"
            }, 1500);
        }

    })

    //If player chooses to Stay
    $("#stay").on("click", function(){
        //Player no longer allowed to draw any cards
        document.getElementById("hit").disabled = true;

        //Player cannot hit stay button so code does not mess up
        document.getElementById("stay").disabled = true;

        //Clearing away and showing player the hidden card from the first draw
        $("#dealerCards").empty();
        $("#dealerCards").append(dealerFirstImage);
        $("#dealerCards").append(dealerSecondImage);

        //Function for dealer to draw cards
        dealerTurn()
    })

    async function dealerTurn(){
        //If dealer's hand's value is less than or equals to 16, draw a card
        if (dealerTotal <= 16){
            //Fetches a card for the dealer
            await fetch ("https://deckofcardsapi.com/api/deck/" +deckID+ "/draw/?count=1")
            .then(Response => Response.json())
            .then(data => dealerDraw = data)
            console.log(dealerDraw)

            //Showing dealer's new card
            $("#dealerCards").append("<img src='" + dealerDraw.cards[0].image + "'>");

            //Adding value to player based on card
            if (dealerDraw.cards[0].value == "KING" || dealerDraw.cards[0].value == "QUEEN" || dealerDraw.cards[0].value == "JACK" || parseInt(dealerDraw.cards[0].value == 10)){
                dealerTotal += 10
            }

            //If player draws another ace in addition to existing ones, the value is taken to be 1 as aces can be taken as 1 or 11, as 2 or more 11's would exceed 21
            else if (dealerDraw.cards[0].value == "ACE" && acesDrawnDealer > 0){
                dealerTotal += 1
                acesDrawnDealer += 1
            }

            //If the player doesn't have an existing ace, the first one is taken as an 11
            else if (dealerDraw.cards[0].value == "ACE"){
                dealerTotal += 11
                acesDrawnDealer += 1
            }
            //Else, take the face value of card
            else{
                dealerTotal += parseInt(dealerDraw.cards[0].value)
            }
            console.log(dealerTotal)
            //Call function again
            dealerTurn()
        }
        //If dealer's total hand is more than 21, he loses
        else if (dealerTotal >21){
            console.log(dealerTotal)
            console.log("Player wins")
            setTimeout(function() {
                document.querySelector("#endStatementPlayer").innerHTML = `Your hand: ${playerTotal}`
                document.querySelector("#endStatementDealer").innerHTML = `Dealer's hand: ${dealerTotal}`
                document.querySelector("#modalBoxWin").style.display = "flex"
            }, 1500);
        }
        //If dealer's hand is less than 21 but more than 16, compare values
        else if (dealerTotal > 16){
            if (dealerTotal > playerTotal){
                console.log("Dealer wins!")
                setTimeout(function() {
                    document.querySelector("#endStatementPlayerLose").innerHTML = `Your hand: ${playerTotal}`
                    document.querySelector("#endStatementDealerLose").innerHTML = `Dealer's hand: ${dealerTotal}`
                    document.querySelector("#modalBoxLose").style.display = "flex"
                }, 1500);
            }
            else if (dealerTotal == playerTotal){
                console.log("Draw!")
                setTimeout(function() {
                    document.querySelector("#endStatementPlayerDraw").innerHTML = `Your hand: ${playerTotal}`
                    document.querySelector("#endStatementDealerDraw").innerHTML = `Dealer's hand: ${dealerTotal}`
                    document.querySelector("#modalBoxDraw").style.display = "flex"
                }, 1500);
            }
            else{
                console.log("Player wins")
                setTimeout(function() {
                    document.querySelector("#endStatementPlayer").innerHTML = `Your hand: ${playerTotal}`
                    document.querySelector("#endStatementDealer").innerHTML = `Dealer's hand: ${dealerTotal}`
                    document.querySelector("#modalBoxWin").style.display = "flex"
                }, 1500);
            }
        }
    }
})