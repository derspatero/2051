

// var scoreformbuttonpt1 = '<select class="scoreselector" id="';
var scoreformbuttonpt1 = '<select name="select-native-2" class="scoreselector" id="';
var scoreformbuttonpt2 = '">';
var scoreformbuttonpt3 = '<option value="0">0</option>';
var scoreformbuttonpt4 = '</select>';
var scorecard = new scoreCard();
var scoreid;

function continueGame() {
    scorecard.continuegame();
}

function scoreCard() {
    this.course = {
        "coursename": "Pitch and Putt",
        "date": "",
        "players": ["P1", "P2", "P3", "P4"],
        "holes": [
            {"hole": 1, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0]},
            {"hole": 2, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0]},
            {"hole": 3, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0]},
            {"hole": 4, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0]},
            {"hole": 5, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0]},
            {"hole": 6, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0]},
            {"hole": 7, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0]},
            {"hole": 8, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0]},
            {"hole": 9, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0]},
            {"hole": 10, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0]},
            {"hole": 11, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0]},
            {"hole": 12, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0]},
            {"hole": 13, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0]},
            {"hole": 14, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0]},
            {"hole": 15, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0]},
            {"hole": 16, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0]},
            {"hole": 17, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0]},
            {"hole": 18, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0]},
        ],
        "fronttotal": {"yd": 0, "par": 0, "playerscores": [0, 0, 0, 0]},
        "backtotal": {"yd": 0, "par": 0, "playerscores": [0, 0, 0, 0]},
        "total": {"yd": 0, "par": 0, "playerscores": [0, 0, 0, 0]},

    }

    this.calculateScores = function() {

        this.course.fronttotal.yd = 0;
        this.course.fronttotal.par = 0;
        this.course.fronttotal.playerscores[0] = 0;
        this.course.fronttotal.playerscores[1] = 0;
        this.course.fronttotal.playerscores[2] = 0;
        this.course.fronttotal.playerscores[3] = 0;

        for (i = 0; i < this.course.holes.length / 2; i++) {
            this.course.fronttotal.yd += parseInt(this.course.holes[i].yd);
            this.course.fronttotal.par += parseInt(this.course.holes[i].par);
            this.course.fronttotal.playerscores[0] += parseInt(this.course.holes[i].playerscores[0]);
            this.course.fronttotal.playerscores[1] += parseInt(this.course.holes[i].playerscores[1]);
            this.course.fronttotal.playerscores[2] += parseInt(this.course.holes[i].playerscores[2]);
            this.course.fronttotal.playerscores[3] += parseInt(this.course.holes[i].playerscores[3]);
        }

        this.course.backtotal.yd = 0;
        this.course.backtotal.par = 0;
        this.course.backtotal.playerscores[0] = 0;
        this.course.backtotal.playerscores[1] = 0;
        this.course.backtotal.playerscores[2] = 0;
        this.course.backtotal.playerscores[3] = 0;

        this.course.total.yd = 0;
        this.course.total.par = 0;
        this.course.total.playerscores[0] = 0;
        this.course.total.playerscores[1] = 0;
        this.course.total.playerscores[2] = 0;
        this.course.total.playerscores[3] = 0;


        for (i=9; i<this.course.holes.length; i++) {
            this.course.backtotal.yd += parseInt(this.course.holes[i].yd);
            this.course.backtotal.par += parseInt(this.course.holes[i].par);
            this.course.backtotal.playerscores[0] += parseInt(this.course.holes[i].playerscores[0]);
            this.course.backtotal.playerscores[1] += parseInt(this.course.holes[i].playerscores[1]);
            this.course.backtotal.playerscores[2] += parseInt(this.course.holes[i].playerscores[2]);
            this.course.backtotal.playerscores[3] += parseInt(this.course.holes[i].playerscores[3]);
        }

        for (i=0; i<this.course.holes.length; i++) {
            this.course.total.yd += parseInt(this.course.holes[i].yd);
            this.course.total.par += parseInt(this.course.holes[i].par);
            this.course.total.playerscores[0] += parseInt(this.course.holes[i].playerscores[0]);
            this.course.total.playerscores[1] += parseInt(this.course.holes[i].playerscores[1]);
            this.course.total.playerscores[2] += parseInt(this.course.holes[i].playerscores[2]);
            this.course.total.playerscores[3] += parseInt(this.course.holes[i].playerscores[3]);
        }
    }
    this.setPlayerNames = function(p1name, p2name, p3name, p4name){
        this.course.players[0] = p1name;
        this.course.players[1] = p2name;
        this.course.players[2] = p3name;
        this.course.players[3] = p4name;
    }

    this.savefile = function () {
        var textToWrite = JSON.stringify(scorecard.course);
        localStorage.setItem('scorecard', textToWrite);

    }

    this.continuegame = function() {
        scorecard.course = JSON.parse(localStorage.getItem('scorecard'));
        createScoreCard();
    }

    this.createBlankPar72 = function() {
        this.course = {
            "coursename": "Real Golf!",
            "players": ["P1", "P2", "P3", "P4"],
            "holes": [
                {"hole": 1, "yd": 75, "par": 5, "playerscores": [0, 0, 0, 0]},
                {"hole": 2, "yd": 75, "par": 5, "playerscores": [0, 0, 0, 0]},
                {"hole": 3, "yd": 75, "par": 5, "playerscores": [0, 0, 0, 0]},
                {"hole": 4, "yd": 75, "par": 5, "playerscores": [0, 0, 0, 0]},
                {"hole": 5, "yd": 75, "par": 5, "playerscores": [0, 0, 0, 0]},
                {"hole": 6, "yd": 75, "par": 5, "playerscores": [0, 0, 0, 0]},
                {"hole": 7, "yd": 75, "par": 5, "playerscores": [0, 0, 0, 0]},
                {"hole": 8, "yd": 75, "par": 5, "playerscores": [0, 0, 0, 0]},
                {"hole": 9, "yd": 75, "par": 5, "playerscores": [0, 0, 0, 0]},
                {"hole": 10, "yd": 75, "par": 5, "playerscores": [0, 0, 0, 0]},
                {"hole": 11, "yd": 75, "par": 5, "playerscores": [0, 0, 0, 0]},
                {"hole": 12, "yd": 75, "par": 5, "playerscores": [0, 0, 0, 0]},
                {"hole": 13, "yd": 75, "par": 5, "playerscores": [0, 0, 0, 0]},
                {"hole": 14, "yd": 75, "par": 5, "playerscores": [0, 0, 0, 0]},
                {"hole": 15, "yd": 75, "par": 5, "playerscores": [0, 0, 0, 0]},
                {"hole": 16, "yd": 75, "par": 5, "playerscores": [0, 0, 0, 0]},
                {"hole": 17, "yd": 75, "par": 5, "playerscores": [0, 0, 0, 0]},
                {"hole": 18, "yd": 75, "par": 5, "playerscores": [0, 0, 0, 0]},
            ],
            "fronttotal": {"yd": 0, "par": 0, "playerscores": [0, 0, 0, 0]},
            "backtotal": {"yd": 0, "par": 0, "playerscores": [0, 0, 0, 0]},
            "total": {"yd": 0, "par": 0, "playerscores": [0, 0, 0, 0]},
        }
    }

}


function createblankscorecard(){

	createScoreCard();
}




/*
Front 9 scorecard
*/




function createScoreCard() {
    var course = scorecard.course;

	$("h1").html(course.coursename);


	$("#frontnine").html("");
	$("#backnine").html("");

	$("#frontnine").append('<tr><th>hole</th><th>' + 
		// 'yd</th><th>' +
		// 'par</th><th>' + 
		course.players[0] + '</th><th>' + 
		course.players[1] + '</th><th>' + 
		course.players[2] + '</th><th>' + 
		course.players[3] + '</th></tr>');

	var scorecardtable = "";

	for (i=0; i<course.holes.length/2; i++) {

		scorecardtable += '<tr><td>' + course.holes[i].hole + '</td>';

		for (j=0; j<course.players.length; j++) {

			// alert("button i,j = " + i +"," + j);

			scorecardtable += '<td>' + scoreformbuttonpt1 + 'player_' + j + '_hole_' + i + scoreformbuttonpt2;

			for (k=0; k<=course.holes[i].par * 2; k++){
				if(course.holes[i].playerscores[j] == k){
					scorecardtable += '<option value="' + k + '" selected="selected">' + k + '</option>';
					// alert('<option value="' + k + '" selected="selected">' + k + '</option>');
				}
				else {
					scorecardtable += '<option value="' + k + '">' + k + '</option>';
				}
			}

			scorecardtable += scoreformbuttonpt4 + '</td>';
		}
		scorecardtable += '</tr>';

	}
			// alert(scorecardtable);

	$("#frontnine").append(scorecardtable);

	updatefronttotals();

	/*
	End Front 9 scorecard
	*/


	/*
	Start Back 9 scorecard
	*/


	$("#backnine").append('<tr><th>hole</th><th>' + 
		// 'yd</th><th>' +
		// 'par</th><th>' + 
		course.players[0] + '</th><th>' + 
		course.players[1] + '</th><th>' + 
		course.players[2] + '</th><th>' + 
		course.players[3] + '</th></tr>');

	scorecardtable = "";

	for (i=9; i<course.holes.length; i++) {

		scorecardtable += '<tr><td>' + course.holes[i].hole + '</td>';

		for (j=0; j<course.players.length; j++) {

			// alert("button i,j = " + i +"," + j);

			scorecardtable += '<td>' + scoreformbuttonpt1 + 'player_' + j + '_hole_' + i + scoreformbuttonpt2;

			for (k=0; k<=course.holes[i].par * 2; k++){
				if(course.holes[i].playerscores[j] == k){
					scorecardtable += '<option value="' + k + '" selected="selected">' + k + '</option>';
				}
				else {
					scorecardtable += '<option value="' + k + '">' + k + '</option>';
				}
			}

			scorecardtable += scoreformbuttonpt4 + '</td>';
		}
		scorecardtable += '</tr>';

	}
			// alert(scorecardtable);

	$("#backnine").append(scorecardtable);


	updatebacktotals();

	/*
	End Back 9 scorecard
	*/



    function updatebacktotals(){
        var course = scorecard.course;

        scorecard.calculateScores();

        $("#backninetotals").html('<tr><td>Front</td><td>' +
            // course.fronttotal.yd + '</td><td>' +
            // course.fronttotal.par + '</td><td>' +
        course.fronttotal.playerscores[0] + '</td><td>' + course.fronttotal.playerscores[1] + '</td><td>' +
        course.fronttotal.playerscores[2] + '</td><td>' + course.fronttotal.playerscores[3] + '</td></tr>');


        $("#backninetotals").append('<tr><td>Back</td><td>' +
            // course.backtotal.yd + '</td><td>' +
            // course.backtotal.par + '</td><td>' +
        course.backtotal.playerscores[0] + '</td><td>' + course.backtotal.playerscores[1] + '</td><td>' +
        course.backtotal.playerscores[2] + '</td><td>' + course.backtotal.playerscores[3] + '</td></tr>');

        $("#backninetotals").append('<tr><td>Total</td><td>' +
            // course.backtotal.yd + '</td><td>' +
            // course.backtotal.par + '</td><td>' +
        course.total.playerscores[0] + '</td><td>' + course.total.playerscores[1] + '</td><td>' +
        course.total.playerscores[2] + '</td><td>' + course.total.playerscores[3] + '</td></tr>');

    }

    function updatefronttotals(){

        var course = scorecard.course;

        scorecard.calculateScores();


        $("#frontninetotals").html('<tr><td>Front</td><td>' +
            // course.fronttotal.yd + '</td><td>' +
            // course.fronttotal.par + '</td><td>' +
        course.fronttotal.playerscores[0] + '</td><td>' + course.fronttotal.playerscores[1] + '</td><td>' +
        course.fronttotal.playerscores[2] + '</td><td>' + course.fronttotal.playerscores[3] + '</td></tr>');
    }



    /*
    START event handlers
    */


	$(".scoreselector").change(function() {

		// alert("on click");
		scoreid = $(this).attr("id");
		// alert("scoreid: " + scoreid);

		var playernumber = scoreid.split("_")[1];
		var holenumber = scoreid.split("_")[3];

	    var score = $(this).val(); 

	    // var score = $("#scoreselector :radio:checked").val();

	    var playerindex = String(scoreid.split("_")[1]);
	    var holeindex = String(scoreid.split("_")[3]);
		// alert(scoreid + ": " + course.holes[holeindex].playerscores[playerindex]);
		// alert("new score: " + score);

	    scorecard.course.holes[holeindex].playerscores[playerindex] = parseInt(score);


	    // alert(scoreid + ": " + course.holes[holeindex].playerscores[playerindex]);

	    updatefronttotals();
	    updatebacktotals();

	    scorecard.savefile();

	});

    $("#startgame").click(function(){
        scorecard.setPlayerNames($('#p1name').val(),$('#p2name').val(),$('#p3name').val(),$('#p4name').val());
        createScoreCard();
        
    });

    $("#startpar72game").click(function(){
        scorecard.createBlankPar72();
        scorecard.setPlayerNames($('#p1name').val(),$('#p2name').val(),$('#p3name').val(),$('#p4name').val());
        createScoreCard();
        
    });



/*
END event handlers
*/



}














