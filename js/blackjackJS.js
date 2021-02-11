$(document).ready(function(){

    //Deck count is the number of cards remaining in the deck
    let deckCount = 0

    createNewDeck()

    //Function to create a new deck of cards
    async function createNewDeck(){
        await fetch ("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=6")
        .then(Response => Response.json())
        .then(data => deckData = data)
        //Setting relevant values pertaining to new deck
        let deckID = deckData.deck_id;
        deckCount = deckData.remaining
        
        //Calling function to deal cards to dealer and player
        dealCards(deckID);
    }

    async function dealCards(deckID){
        //Draws 2 cards from current deck
        await fetch ("https://deckofcardsapi.com/api/deck/" +deckID+ "/draw/?count=2")
        .then(Response => Response.json())
        .then(data => firstDraw = data)

        //From this draw, deal first card to dealer, second to player
        dealerFirst = firstDraw.cards[0];
        playerFirst = firstDraw.cards[1];

        await fetch ("https://deckofcardsapi.com/api/deck/" +deckID+ "/draw/?count=2")
        .then(Response => Response.json())
        .then(data => secondDraw = data)

        //From this draw, deal first card to dealer, second to player
        dealerSecond = secondDraw.cards[0];
        playerSecond = secondDraw.cards[1];
    }
})