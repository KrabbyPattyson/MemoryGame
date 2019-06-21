var inc = 0; //Used later on to check how many cards have been flipped over (increment)
var firstCard, secondCard, timeout; 
var onPause = false;
var cardBack = "cardBack.png";

function faceDown(){ //Flip all the cards face down
    for(var i = 0; i < document.getElementsByTagName("img").length; i++){ 
        document.getElementsByTagName("img")[i].src = cardBack;
    }
}

function shuffleCards(){
    faceDown();
    var elms = document.getElementsByTagName("img"); //Get the img elements
    elms.sort(function(a, b){return 0.5 - Math.random()}); //Shuffle the img elements
    for(var i = 0; i < 7; i++){ //Assign a number to the img elements - store it in attribute data-num
        for(var j = 0; j < 4; j++){ //Assign a letter to the img elements - store it in attribute data-letter and data-img
            elms[i].data-num = i;
            elms[i].data-let = j;
            elms[i].data-img = elms[i].data-num + "" + elms[i].data-let + ".png";
        }
    }
}

function check(elm){
    if(!onPause && elm.style.visibility !== "hidden"){ //Make sure that the selected card isn't already taken away, or that two cards are not already being shown
        switch(inc % 2){
            case 0: //This means the first card has been selected - we need to flip the card and wait for the next selection
                firstCard = elm;
                break;
            case 1: //This means the second card has been selected - we need to flip the card and check if they are the same kind
                secondCard = elm;
                if(firstCard.data-num === secondCard.data-num && firstCard !== secondCard){
                    onPause = true;
                    timeout = setTimeout(function(){
                        onPause = false;
                    },3000)
                }
                break;
        }
    }
}
