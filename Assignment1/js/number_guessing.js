
var random_number = Math.floor(Math.random() * 100) + 1;
var count = 0;
var done = false;

// alert(random_number);

$("#submit_guess").click(function () {
	count++;	
	if(done){
		$("#messages").html("Please refresh the page to start again");
	}	
	else if ($("#guess").val() == random_number) {
		if (count==1) {
			$("#messages").html("Wow mind reader, you guessed correctly on your first guess!");
		}
		else if (count > 5){
			$("#messages").html("Not bad it only took you " + count + " guesses to guess the correct number.");
		}
		else {
			$("#messages").html("You guessed correctly. It took you " + count + " guesses to guess the correct number.");
		}
		done = true;
	}
	else if($("#guess").val() < random_number) {
		$("#messages").html("Too low.  Try a higher number");
	}
	else {
		$("#messages").html("Too high. Try a lower number");
	}


});