# ID_S10194236_OzzyTham_TriviaGameSite
#### Live site: https://ozzywithab.github.io/ID_S10194236_OzzyTham_TriviaGameSite/
#### Github: https://github.com/ozzywithab/ID_S10194236_OzzyTham_TriviaGameSite
##### Site was made on a 24 inch, 1920x1080 monitor. If viewing on a laptop or smaller resolution, zoom out until it looks best/right

### Design process

The original idea for this site was a simple trivia game. It's purpose was for users to learn something new about random facts and the world, making them google and search for the answers they need to get the question correct, and rewarding them with points that they can spend. However, this has evolved into a game site where users are also able to kill time with 2 other simple games in addition to trivia, a game of dice where they guess the value of 2 dice, and blackjack for players to hone their skills, learn the game, and kill time.

### Features

#### Navigation bar

A navigation bar can be found at the top of every page. It provides a links for the user to access any of the four pages without having to go back to the main page.

#### Lottie files

Lottie files animations are used in all 4 pages of the site. It is used as a background in index.html, for win/lose in Blackjack.html and Trivia.html, and as a filler/placeholder for Dice.html before the user selects a value.

#### Deck of Cards API (https://deckofcardsapi.com/)

This API is used in Blackjack.api. It returns a random card, it's values and an image for the card.

#### Open Trivia Database API (https://opentdb.com/)

This API is used in Trivia.html. It returns a random trivia question, 4 answers and the category of question.

#### DeJete API (https://en.dejete.com/api-lancer-des)

This API is used in Dice.html. It returns the random value of a rolled dice.

### Features left to implement

#### Point wallet that carries points over all 3 games

User can earn points from the various games and keep them in a wallet that saves it

#### Virtual store

User can use points earned to buy various items on the site


### Technologies used

#### Javascript & JQuery

Used to fetch API values, and create rules/code for the various games to run.

#### LottieFiles

Used LottieFiles animations in various html pages to "gamify" and make the site more appealing

#### LocalStorage

LocalStorage was used in Trivia.html to keep track of the player's score

### Testing

##### Site was made on a 24 inch, 1920x1080 monitor. If viewing on a laptop or smaller resolution, zoom out until it looks best/right

1. Trivia quiz - playing game normally
   * Scroll down to the bottom of index.html
   * Hit the "Trivia quiz" button OR Click "Trivia" on the navigation bar
   * Players can click any of the 4 button with various answers to answer the question
   * If player clicks wrong answer, move on to next question
   * If player clicks right answer, gain 100 points and move on to next question
     * If player gets 5 questions wrong, end the game
     * Player can play again by clicking "Play again" in modal box pop-up

2. Trivia quiz - Using hints
   * Player clicks on "HINT!" in Trivia.html while doing the quiz
   * 2 Wrong answers are taken away
     * If player clicks right answer, gain 50 points instead of 100 and move on to next question
     * If player clicks wrong answer, move on to next question

3. Dice
   * Scroll down to bottom of index.html
   * Hit the "Dice" button OR Click "Dice" on the navigation bar
   * Players can click any of the 12 buttons to submit a guess as to what the value of 2 dice will be
   * The two dice and their values are shown
     * If they guessed correctly, print "You win!"
     * If they guessed wwrong, print "You lose!"
   * Players can continue playing but selecting a different number which rolls 2 more dice and the game repeats

4. Blackjack
   * Scroll down to bottom of index.html
   * Hit the "Blackjack" button OR Click "Blackjack" on the navigation bar
   * Player is shown 2 pairs of cards, one is theirs and the other is the dealer's
   * If they wish to receive another card, they can press the "Hit" button"
   * Once satisfied with their cards, they can press the "Stay" button, prompting the dealer to draw his own cards
     * The dealer draws his own cards only if his cards are less than 17
   * If player goes over 21 while hitting, player loses
   * If player's value is less than the dealer's, player loses
   * If player "Hit"s 5 cards without going over 21, player wins
   * If the dealer's value is over 21 while drawing, player wins

5. Minor bugs found
   * All 3 API's sometimes fail to fetch
   * Trivia.html's API takes a second for fetch so player can continuously hit the right answer for points
   

### Credits

#### API's 

* Deck of Cards API (https://deckofcardsapi.com/)

* Open Trivia Database API (https://opentdb.com/)

* DeJete API (https://en.dejete.com/api-lancer-des)

#### Media

* LottieFiles (https://lottiefiles.com/)

* Game-icons (https://game-icons.net/)

* All other media are made by myself or with assests from Game-icons
