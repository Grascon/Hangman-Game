document.addEventListener('DOMContentLoaded', function(){
	//array of words
	var words = ["aubameyang", 
			"bale", 
			"dybala", 
			"ronaldo", 
			"messi",
			"ozil", 
			"suarez"];
	
	var randomWord = words[Math.floor(Math.random() * words.length)];
	
	var underScore = [];
	document.getElementById("underscores").innerHTML = createUnderscore();
	
	var wins = 0;
	document.getElementById("victories").innerHTML = "Wins: " + wins;
	
	var losses = 0;
	document.getElementById("defeats").innerHTML = "Losses: " + losses;

	var guessedLetters = [];
	document.getElementById("userGuesses").innerHTML = "Letters Already Guessed: " + guessedLetters;

	var guesses = 10;
	document.getElementById("userGuessesLeft").innerHTML = "Guesses Left: 10";

	//creates underscores equal to the number of letters in the word that is choosen randomly and pushes them to the array underscore
	function createUnderscore() {
		for (i = 0; i < randomWord.length; i++) {
			underScore.push("_");
	
		}
		return underScore;
	}
	
	//array for underscores depending on length of the letter choosen randomly


function resetGame () {
	randomWord = words[Math.floor(Math.random() * words.length)];
	underScore = [];
	document.getElementById("underscores").innerHTML = createUnderscore();
	guesses = 10;
	document.getElementById("userGuessesLeft").innerHTML = "Guesses Left: 10";
	guessedLetters.length = 0;
	guessedLetters = [];
	document.getElementById("userGuesses").innerHTML = "Letters Already Guessed: " + guessedLetters;
}

function win () {
	wins++;
	document.getElementById("victories").innerHTML = "Wins: " + wins;
	resetGame();
}

function loss (){
	losses++;
	document.getElementById("defeats").innerHTML = "Losses: " + losses;
	document.getElementById("soccer-player").setAttribute("src","assets/images/Placeholder.jpg");
	resetGame();
}
//user pushes a letter
document.onkeyup = function(event) {
	
	//letter pushed becomes the guess
	var userGuess = event.key;
	
	//guess is pushed to guessedLetters
	guessedLetters.push(userGuess);
	document.getElementById("userGuesses").innerHTML = "Letters Already Guessed: " + guessedLetters;
	
	//if userGuess is correct, guess replaces the underscore
	for (var i = 0; i < randomWord.length; i++){
		if (randomWord[i] === userGuess){
			underScore[i] = userGuess;
			document.getElementById("underscores").innerHTML = underScore;
	}
}
if (underScore.join("") === randomWord) {
		if (underScore.join("") === randomWord && underScore.join("") === "messi"){
			document.getElementById("soccer-player").setAttribute("src","assets/images/Messi.jpg");
			alert("Goal! You guessed Lionel Messi");
		}
		if (underScore.join("") === randomWord && underScore.join("") === "ozil"){
			document.getElementById("soccer-player").setAttribute("src","assets/images/Ozil.jpg");
			alert("Goal! You guessed Mesut Ozil");	
		}
		if (underScore.join("") === randomWord && underScore.join("") === "aubameyang"){
			document.getElementById("soccer-player").setAttribute("src","assets/images/Aubameyang.jpg");
			alert("Goal! You guessed Pierre Emick Aubameyang");	
		}
		if (underScore.join("") === randomWord && underScore.join("") === "ronaldo"){
			document.getElementById("soccer-player").setAttribute("src","assets/images/C.Ronaldo.jpg");
			alert("Goal! You guessed Cristiano Ronaldo");	
		}
		if (underScore.join("") === randomWord && underScore.join("") === "dybala"){
			document.getElementById("soccer-player").setAttribute("src","assets/images/Dybala.jpg");
			alert("Goal! You guessed Paulo Dybala");	
		}
		if (underScore.join("") === randomWord && underScore.join("") === "suarez"){
			document.getElementById("soccer-player").setAttribute("src","assets/images/Suarez.jpg");
			alert("Goal! You guessed Luis Suarez");	
		}
		if (underScore.join("") === randomWord && underScore.join("") === "bale"){
			document.getElementById("soccer-player").setAttribute("src","assets/images/Bale.jpg");
			alert("Goal! You guessed Gareth Bale");
		}
		win();
	}
else {
		guesses--;
		document.getElementById("userGuessesLeft").innerHTML = "Guesses Left: " + guesses;
	}
		
if (guesses === 0){
		alert("You lose");
		loss();
	}
}
});
