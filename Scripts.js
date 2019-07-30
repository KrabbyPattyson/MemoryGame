//Get pesky variables out of the way
var cardBackground = "https://cdn.shopify.com/s/files/1/0200/7616/products/playing-cards-bicycle-rider-back-1_grande.png";
var inc = 0; // Used to track how many cards have been clicked so far
var totalCards = document.getElementsByTagName("img").length; // Used to reference the total amount of cards
var cardsTakenAway = 0;
var onPause = false;
var shuffledCards = []; // Used to hold the shuffled cards
var selectedCard1 = "";
var selectedCard2 = "";

//This variable holds all the different kinds of cards
var numberedCards = ["https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Playing_card_club_2.svg/2000px-Playing_card_club_2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Playing_card_club_3.svg/2000px-Playing_card_club_3.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Playing_card_club_4.svg/2000px-Playing_card_club_4.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Playing_card_club_5.svg/2000px-Playing_card_club_5.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Playing_card_club_6.svg/2000px-Playing_card_club_6.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Playing_card_club_7.svg/2000px-Playing_card_club_7.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Playing_card_club_8.svg/2000px-Playing_card_club_8.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Playing_card_club_2.svg/2000px-Playing_card_club_2.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Playing_card_club_3.svg/2000px-Playing_card_club_3.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Playing_card_club_4.svg/2000px-Playing_card_club_4.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Playing_card_club_5.svg/2000px-Playing_card_club_5.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Playing_card_club_6.svg/2000px-Playing_card_club_6.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Playing_card_club_7.svg/2000px-Playing_card_club_7.svg.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Playing_card_club_8.svg/2000px-Playing_card_club_8.svg.png"]; 

function shuffle(){ // Used to shuffle all current cards, then flip them over
	c = []; //Start with a blank array
	for(var i = 0; i < Math.round(document.getElementsByClassName("row").length / 2); i++){ //Check how many rows of cards we have, and for every two rows we will add 14 cards to the deck
		for(var j = 0; j < 14; j++){
			c.push(j);
		}
	}
	for(var i = 0; i <= 3; i++){ //Shuffle the cards three times - should make it even more random
		c.sort(function(a, b){return 0.5 - Math.random()});
	}
	return c;
}

var shuffledCards = shuffle();

for(var i = 0; i <= document.getElementsByTagName("img").length-1; i++){ // Assign attributes to each card - I just don't feel like doing it in html
	document.getElementsByTagName("img")[i].onclick = function(){checkCard(this)}
	document.getElementsByTagName("img")[i].style.visibility = "visible";
	document.getElementsByTagName("img")[i].id = i;
}

function checkCard(card){
	if(!onPause && card.style.visibility === "visible"){
		card.src = numberedCards[(shuffledCards[card.id] % 14)];
		console.log(card.id + " shuffledCards: " + shuffledCards[card.id]);
		inc++;
		if(inc % 2 === 0){
			selectedCard2 = card;
			if(selectedCard1.src == selectedCard2.src && selectedCard1 !== selectedCard2){
				onPause = true;
				var myTimeout = setTimeout(function(){
					onPause = false;
					selectedCard1.style.visibility = "hidden";
					selectedCard2.style.visibility = "hidden";
					cardsTakenAway+=2;
					console.log(cardsTakenAway + " - " + totalCards);					
					if(cardsTakenAway >= totalCards){
						gameOver();
					}
				},500);
				console.log("Correct cards!");
			}
			if(selectedCard1.src != selectedCard2.src && selectedCard1 !== selectedCard2){
				onPause = true;
				var myTimeout = setTimeout(function(){
					onPause = false;
					selectedCard1.src = cardBackground;
					selectedCard2.src = cardBackground;
				},500);
				console.log("Wrong cards.");				
			}
		}
		if(inc % 2 === 1){
			selectedCard1 = card;
		}
	}
}

function gameOver(){
	document.getElementsByTagName("main")[0].style.display = "none";
	var gO = document.getElementById("gameOver");
	gO.style.display = "block";
	document.getElementById("score").innerText = inc;
}








