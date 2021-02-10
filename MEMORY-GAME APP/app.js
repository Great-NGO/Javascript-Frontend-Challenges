//Adding our DOM event Listener
document.addEventListener('DOMContentLoaded', () => {

    //Card options Array

    const cardArray = [{
            name: 'winkEmoji',
            img: 'images/Img1-wink-emoji.png'
        },
        {
            name: 'winkEmoji',
            img: 'images/Img1-wink-emoji.png'
        },
        {
            name: 'lovy-eyes-Emoji',
            img: 'images/Img2-love-hearts-eyes-emoji.png'
        },
        {
            name: 'lovy-eyes-Emoji',
            img: 'images/Img2-love-hearts-eyes-emoji.png'
        },
        {
            name: 'cool-Emoji',
            img: 'images/Img3-smiling-face-with-sunglasses-cool-emoji.png'
        },
        {
            name: 'cool-Emoji',
            img: 'images/Img3-smiling-face-with-sunglasses-cool-emoji.png'
        },
        {
            name: 'smiley-thumbsUp',
            img: 'images/Img4-smiley-hd-thumbsUp-emoji.png'
        },
        {
            name: 'smiley-thumbsUp',
            img: 'images/Img4-smiley-hd-thumbsUp-emoji.png'
        },
        {
            name: 'emoticon',
            img: 'images/Img5-emoticon-signal-smiley-thumb.png'
        },
        {
            name: 'emoticon',
            img: 'images/Img5-emoticon-signal-smiley-thumb.png'
        },
        {
            name: 'angel',
            img: 'images/Img6-angel-blushing-smile-emoji.png'
        },
        {
            name: 'angel',
            img: 'images/Img6-angel-blushing-smile-emoji.png'
        }

    ]

    //randomize the cards
    cardArray.sort(() => 0.5 - Math.random())


    const grid = document.querySelector('.cardContainer');
    const resultDisplay = document.querySelector('#scoreSpan');
    const triedAttempts = document.querySelector('#attemptSpan');

    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []
    let count = 0; //Count variable to store the amount of time the game is played

    //Creating Game elements
    function createGameBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipcard);
            grid.appendChild(card);
        }
    }

    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match!');
            cards[optionOneId].setAttribute('src', 'images/white.png');
            cards[optionTwoId].setAttribute('src', 'images/white.png');
            cardsWon.push(cardsChosen);
        } else {
            count += 1;
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length //Score (how many times won)
        triedAttempts.textContent = count; //how many attempted trial

        //If all the cards has been clicked
        if (cardsWon.length === cardArray.length / 2) {
            alert('Congratulations! You found them all');

            setTimeout(() => {
                var question = prompt("Want to play again?")
                if (question === "yes" || question !== null) {
                    window.location.reload();
                }
            }, 500);

        }
    }

    //flip your card
    function flipcard() {
        var cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img)

        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    createGameBoard();

})


//function toggle.. let that image innerHtml be hidden when the card is clicked

//check if the image source is the same with another, if they are then the game is won, else try again

//Score is for how many times the game is won

// tried attempts.. the total number of clicks (when two images are checked)

// for every time the game is not won