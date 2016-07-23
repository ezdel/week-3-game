var words = ["loser", "bigly", "yuuuuge", "shlonged", "fired", "tremendous", "lightweight", "pocahontas", "ivanka", "melania", "crooked", "classy", "moron"];
var alphabet = [];
var win = 0;
var loss = 0;
var remain = 10;
var chosen
var answer
var guessed = [];
var blanks = [];
var correct = [];
var match = [];
var gameOver = true;

function gameStart() {
	gameOver = false;
	alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
	remain = 10;
	guessed = [];
	blanks = [];
	match = [];
	correct = [];

	chosen = words[Math.floor(Math.random()*words.length)];
	answer = chosen.toUpperCase();

	for (i=0; i < chosen.length; i++){
		blanks.push("_ ");
		match.splice(i, 1, [answer[i]]);
		
	}
	document.getElementById("word").innerHTML = blanks.join('');
	words.splice(words.indexOf(chosen), 1);
	document.getElementById('restartContainer').style.display = 'none';
	document.getElementById('pic').src= 'assets/images/trump0.gif';
	document.getElementById('loseSong').pause();
	document.getElementById('winSong').pause();
	document.getElementById('loseSong').currentTime=2;
	document.getElementById('winSong').currentTime=0;
	document.getElementById('stats').innerHTML = "<p>WINS</p>" + "<p>" + win + "</p>" + "<p>LOSSES</p>" + "<p>" + loss + "</p>" + "<p>GUESSES LEFT</p>" + "<p>" + remain + "</p>" + "<p>LETTERS GUESSED</p>" + "<p>" + guessed + "</p>";
}
gameStart();

document.onkeyup = function(event) {
	if (gameOver) return;
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	var userGuessIndex = alphabet.indexOf(userGuess);
	if (userGuessIndex < 0) return;
	alphabet.splice(userGuessIndex, 1);
	if (chosen.indexOf(userGuess) > -1) {
	 	correct.push(userGuess);
	 	for (var i = 0; i < chosen.length; i++) {
	 		if (chosen[i] == userGuess) blanks.splice(i, 1, [answer[i]]);
	 	}
	 	if (blanks.indexOf('_ ') < 0) {
	 		gameOver = true;
	 		win++;
	 		document.getElementById('restart').innerHTML = "<p>You defeated Trump!</p><p>Click to Play Again.</p>"
	 		document.getElementById('winSong').play().currentTime=0;
	 		document.getElementById('restartContainer').style.display = 'block';
	 	} 				 
	}
	else {
	 	remain--;
	 	guessed.push(userGuess + ' ');
		document.getElementById('pic').src= 'assets/images/trump' + guessed.length + '.gif';
		if (remain == 0) {
			gameOver = true;
			loss++;
			document.getElementById('loseSong').play().currentTime=2;
			document.getElementById('restart').innerHTML = "<p>You're a loser!</p><p>Click to Play Again.</p>"
	 		document.getElementById('restartContainer').style.display = 'block';
		}	
	}

	document.getElementById("word").innerHTML = blanks.join('');
	document.getElementById("stats").innerHTML = "<p>WINS</p>" + "<p>" + win + "</p>" + "<p>LOSSES</p>" + "<p>" + loss + "</p>" + "<p>GUESSES LEFT</p>" + "<p>" + remain + "</p>" + "<p>LETTERS GUESSED</p>" + "<p>" + guessed.join('').toUpperCase() + "</p>";
}