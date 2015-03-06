/**
 * Created by elambke on 15-03-04.
 */


// var scoreformbuttonpt1 = '<select class="scoreselector" id="';
var scoreformbuttonpt1 = '<select name="select-native-2" class="scoreselector" id="';
var scoreformbuttonpt2 = '">';
var scoreformbuttonpt3 = '<option value="0">0</option>';
var scoreformbuttonpt4 = '</select>';
var scorecard = new scoreCard();
var scoreid;

/*
 * SETUP SCREEN UI
 */

function continueGame() {
    scorecard.loadgame();
}

function createblankscorecard(){
    scorecard = new scoreCard();
    createScoreCard();
}

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
 * SCORECARD UI *
 */



function createScoreCard() {

    $("h1").html(scorecard.getCourseName());


    $("#frontnine").html("");
    $("#backnine").html("");



    /*
     Front 9 scorecard
     */

    $("#frontnine").append('<tr><th>hole</th><th>' +
        // 'yd</th><th>' +
        // 'par</th><th>' +
    scorecard.getPlayerName(0) + '</th><th>' +
    scorecard.getPlayerName(1) + '</th><th>' +
    scorecard.getPlayerName(2) + '</th><th>' +
    scorecard.getPlayerName(3) + '</th></tr>');

    var scorecardtable = "";

    for (i=0; i<scorecard.getCourseLength()/2; i++) {

        scorecardtable += '<tr><td>' + scorecard.getHoleNumber(i) + '</td>';

        for (j=0; j<scorecard.getNumberOfPlayers(); j++) {

            // alert("button i,j = " + i +"," + j);

            scorecardtable += '<td>' + scoreformbuttonpt1 + 'player_' + j + '_hole_' + i + scoreformbuttonpt2;

            for (k=0; k<=scorecard.getParForHole(i) * 2; k++){
                if(scorecard.getPlayerScoreForHole(i,j) == k){
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
    scorecard.getPlayerName(0) + '</th><th>' +
    scorecard.getPlayerName(1) + '</th><th>' +
    scorecard.getPlayerName(2) + '</th><th>' +
    scorecard.getPlayerName(3) + '</th></tr>');

    scorecardtable = "";

    for (i=9; i<scorecard.getCourseLength(); i++) {

        scorecardtable += '<tr><td>' + scorecard.getHoleNumber(i)+ '</td>';

        for (j=0; j<scorecard.getNumberOfPlayers(); j++) {

            // alert("button i,j = " + i +"," + j);

            scorecardtable += '<td>' + scoreformbuttonpt1 + 'player_' + j + '_hole_' + i + scoreformbuttonpt2;

            for (k=0; k<=scorecard.getParForHole(i) * 2; k++){
                if(scorecard.getPlayerScoreForHole(i,j) == k){
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


    $("#backnine").append(scorecardtable);


    updatebacktotals();

    /*
     End Back 9 scorecard
     */



    function updatebacktotals(){

        scorecard.calculateScores();

        $("#backninetotals").html('<tr><td>Front</td><td>' +
            // course.fronttotal.yd + '</td><td>' +
            // course.fronttotal.par + '</td><td>' +
        scorecard.getFrontTotalForPlayer(0) + '</td><td>' + scorecard.getFrontTotalForPlayer(1) + '</td><td>' +
        scorecard.getFrontTotalForPlayer(2) + '</td><td>' + scorecard.getFrontTotalForPlayer(3) + '</td></tr>');


        $("#backninetotals").append('<tr><td>Back</td><td>' +
            // course.backtotal.yd + '</td><td>' +
            // course.backtotal.par + '</td><td>' +
        scorecard.getBackTotalForPlayer(0) + '</td><td>' + scorecard.getBackTotalForPlayer(1) + '</td><td>' +
        scorecard.getBackTotalForPlayer(2) + '</td><td>' + scorecard.getBackTotalForPlayer(3) + '</td></tr>');

        $("#backninetotals").append('<tr><td>Total</td><td>' +
            // course.backtotal.yd + '</td><td>' +
            // course.backtotal.par + '</td><td>' +
        scorecard.getTotalForPlayer(0) + '</td><td>' + scorecard.getTotalForPlayer(1) + '</td><td>' +
        scorecard.getTotalForPlayer(2) + '</td><td>' + scorecard.getTotalForPlayer(3) + '</td></tr>');

    }

    function updatefronttotals(){

        scorecard.calculateScores();

        $("#frontninetotals").html('<tr><td>Front</td><td>' +
            // course.fronttotal.yd + '</td><td>' +
            // course.fronttotal.par + '</td><td>' +
        scorecard.getFrontTotalForPlayer(0) + '</td><td>' + scorecard.getFrontTotalForPlayer(1) + '</td><td>' +
        scorecard.getFrontTotalForPlayer(2) + '</td><td>' + scorecard.getFrontTotalForPlayer(3) + '</td></tr>');
    }



    /*
     START scorecard event handlers
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

        scorecard.setPlayerScoreForHole(holeindex,playerindex,score);

        updatefronttotals();
        updatebacktotals();

        scorecard.savegame();

    });





    /*
     END event handlers
     */



}
