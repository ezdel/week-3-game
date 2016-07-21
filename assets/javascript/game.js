var words = ["loser", "bigly", "yuuuuge", "shlonged", "fired", "tremendous", "lightweight", "pocahontas", "ivanka", "melania", "crooked", "classy", "moron"];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var win = 0;
var loss = 0;
var remain = 10;
var chosen
var inPlay
var answer
var wordArea
var guessed = [];
var blanks = [];
var correct = [];
var match = [];
var unique
var check


function gameStart() {
remain = 10;
guessed = [];
blanks = [];
match = [];
correct = [];
unique = "";
check = "";

chosen = words[Math.floor(Math.random()*words.length)];
inPlay = chosen.split('').join('');
answer = inPlay.toUpperCase().split('').join('');
wordArea = document.getElementById("word");


	for (i=0; i < inPlay.length; i++){
		blanks.push("_ ");
		match.push("_ ");
		
	}

wordArea.innerHTML = blanks.join("");
for (var i=0; i<match.length; i++){
	match.splice(i, 1, [answer[i]]);
}

}
gameStart();

var remove = words.indexOf(chosen);
words.splice(remove, 1);

var output = document.getElementById("stats");
var outputStr = "<p>WINS</p>" + "<p>" + win + "</p>" + "<p>LOSSES</p>" + "<p>" + loss + "</p>" + "<p>GUESSES LEFT</p>" + "<p>" + remain + "</p>" + "<p>LETTERS GUESSED</p>" + "<p>" + guessed + "</p>";
output.innerHTML = outputStr;

unique = chosen.replace(/[^\w\s]|(.)(?=\1)/gi);


document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	var a = alphabet.indexOf(userGuess);
	if ( a < 0) {
		return;
	}

	else {
		alphabet.splice(a, 1);
		var choice = chosen.indexOf(userGuess);
	 		if (choice > -1) {
	 			correct.push(userGuess);
	 			for (var i=0; i < inPlay.length; i++){
	 				if (inPlay[i] == userGuess) {

	 					blanks.splice(i, 1, [answer[i]]);
	 				}
	 				check = unique.replace(/[^\w\s]|(.)(?=\1)/gi);
				}
	 		
	 		 if (check.length === correct.length) {
	 		 		win++;
	 		 		gameStart();
	 		 		}			
	 			
	 		}
	 

	 		else {
	 		guessed.push(userGuess + ' ');
	 		remain = remain - 1;


	if (guessed.length == 0) {
		document.getElementById('pic').src= 'assets/images/trump0.gif';
	}
	if (guessed.length == 1) {
		document.getElementById('pic').src= 'assets/images/trump1.gif';
	}
	if (guessed.length == 2) {
		document.getElementById('pic').src= 'assets/images/trump2.gif';
	}
	if (guessed.length == 3) {
		document.getElementById('pic').src= 'assets/images/trump3.gif';
	}
	if (guessed.length == 4) {
		document.getElementById('pic').src= 'assets/images/trump4.gif';
	}
	if (guessed.length == 5) {
		document.getElementById('pic').src= 'assets/images/trump5.gif';
	}
	if (guessed.length == 6) {
		document.getElementById('pic').src= 'assets/images/trump6.gif';
	}
	if (guessed.length == 7) {
		document.getElementById('pic').src= 'assets/images/trump7.gif';
	}
	if (guessed.length == 8) {
		document.getElementById('pic').src= 'assets/images/trump8.gif';
	}
	if (guessed.length == 9) {
		document.getElementById('pic').src= 'assets/images/trump9.gif';
	}
	 if (guessed.length == 10) {
		document.getElementById('pic').src= 'assets/images/trump10.gif';
		document.getElementById('song').play();
	 	loss++;
	 	gameStart();
	}

	 		}

var wordArea = document.getElementById("word");



	
wordArea.innerHTML = blanks.join("");	 	
	}

var output = document.getElementById("stats");
var outputStr = "<p>WINS</p>" + "<p>" + win + "</p>" + "<p>LOSSES</p>" + "<p>" + loss + "</p>" + "<p>GUESSES LEFT</p>" + "<p>" + remain + "</p>" + "<p>LETTERS GUESSED</p>" + "<p>" + guessed.join('').toUpperCase() + "</p>";
output.innerHTML = outputStr;

}