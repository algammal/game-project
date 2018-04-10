/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
const cards = ["diamond", "diamond", "paper-plane", "paper-plane", "anchor", "anchor", "bolt", "bolt", "cube", "cube", "leaf", "leaf", "bicycle", "bicycle", "bomb", "bomb"];
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
console.log("helloworld");
    return array;
};
function shuffleCards(){
	shuffle(cards);
	var icons=document.getElementById("deck").getElementsByClassName('fa');
	for(var i=0 ; i<icons.length;i++){
		icons[i].classList.add("fa-" + cards[i]);
	}
}
var moves=0;
var resetBtn=document.getElementById('restart');
resetBtn.addEventListener("click" ,startGame);
var resetBtn=document.getElementById('popup-yes');
resetBtn.addEventListener("click" ,startGame);
var clickable=true;
var counter=0;
var cardList=document.getElementsByClassName('card');
for (var i=0 ;i<cardList.length;i++){
	cardList[i].addEventListener("click", iconFunction);
}
shuffleCards();
function iconFunction() {
	if (clickable){
	moves++;
	if (moves>=15){
		var stars=document.getElementById('starone');
		stars.classList.add('hidden');
	if (moves>=20){
		var stars=document.getElementById('startwo');
		stars.classList.add('hidden');
	}
	if (moves>=25){
		var stars=document.getElementById('starthree');
		stars.classList.add('hidden');
	}
	}


	document.getElementById('moves-no').innerHTML = moves;
	this.classList.toggle("open");
	this.classList.toggle("show");
	var openCards = document.getElementsByClassName('open');
	if (openCards.length==2){
		
		var icon1=openCards[0].getElementsByTagName('i')[0];
		var icon2=openCards[1].getElementsByTagName('i')[0];
		if (icon1.classList[1]== icon2.classList[1]) {
			for (i=openCards.length-1; i>=0;i--){
			openCards[i].classList.add('match');
			openCards[i].classList.remove('show');
			openCards[i].classList.remove('open');
			
		}
		var win=document.getElementsByClassName('match');
		//condition to launch win popup
			if (win.length==16){
				clearInterval(timer)
				var timeScreen=document.getElementById('popup-timer');
				timeScreen.innerHTML=min + " : " + sec;
				document.getElementById('popup-moves').innerHTML = moves;
				var popUp=document.getElementById('popup');
				
				popUp.classList.add('blocked');
				if (moves>=15){
					var stars=document.getElementById('popstarone');
					stars.classList.add('hidden');
				if (moves>=20){
					var stars=document.getElementById('popstartwo');
					stars.classList.add('hidden');
				}
				if (moves>=25){
					var stars=document.getElementById('popstarthree');
					stars.classList.add('hidden');
				}
				}

			}
		}
		else{
			setTimeout(timingFunction, 1000);
			clickable=false;
		}	
		counter=0;
	}
}
};
//closing function when cards exceed 2 cards wrong
function timingFunction(){
	clickable=true;
	var openCards = document.getElementsByClassName('open')
		for (i=openCards.length-1; i>=0;i--){
			openCards[i].classList.remove('show');	
			openCards[i].classList.remove('open');
		}
}

//timer function
var sec=0;
var min=0;
var timer;
timer= setInterval(timeCalc,1000);
function timeCalc(){
	sec++;
	if (sec>=60){
		min++;
		sec=0;
	}
	var timeScreen=document.getElementById('timer');
	timeScreen.innerHTML=min + " : " + sec;

}
//reset function
function startGame(){
	sec=0;
	min=0;
	var timeScreen=document.getElementById('timer');
	timeScreen.innerHTML=min + " : " + sec;
	clearInterval(timer);
	timer= setInterval(timeCalc,1000);

	for(i=cardList.length-1; i>=0;i--){
			cardList[i].classList.remove('match');
			cardList[i].classList.remove('show');
			cardList[i].classList.remove('open');
			
		}
	moves=0;
	document.getElementById('moves-no').innerHTML = moves;
	var popUp=document.getElementById('popup');
				popUp.classList.remove('blocked');
				var icons=document.getElementById("deck").getElementsByClassName('fa');
	for(var i=0 ; i<icons.length;i++){
		console.log(cards[i], icons[i].classList);
		icons[i].classList.remove("fa-" + cards[i]);
	}
				shuffleCards();
	var stars=document.getElementById('starone');
		stars.classList.remove('hidden');
	var stars=document.getElementById('startwo');
		stars.classList.remove('hidden');
	var stars=document.getElementById('starthree');
		stars.classList.remove('hidden');
	var stars=document.getElementById('popstarone');
		stars.classList.remove('hidden');
	var stars=document.getElementById('popstartwo');
		stars.classList.remove('hidden');
	var stars=document.getElementById('popstarthree');
		stars.classList.remove('hidden');
}
//

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
