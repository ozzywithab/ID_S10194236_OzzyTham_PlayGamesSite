$(document).ready(function(){

    //Deck count is the number of cards remaining in the deck
    //Set to 0 as new deck is generated everytime
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
        //Draws 4 cards from current deck
        await fetch ("https://deckofcardsapi.com/api/deck/" +deckID+ "/draw/?count=4")
        .then(Response => Response.json())
        .then(data => cardDraw = data)

        //From this draw, deal first card to dealer, second to player as shown cards
        dealerShow = cardDraw.cards[0];
        playerShow = cardDraw.cards[1];

        //Deal the next 2 cards the same way but as hidden cards
        dealerHidden = cardDraw.cards[2]
        playerHidden = cardDraw.cards[3]

        console.log(dealerShow, playerShow, dealerHidden, playerHidden)
    }
})