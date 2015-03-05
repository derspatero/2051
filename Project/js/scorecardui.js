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
    var course = scorecard.course;

    $("h1").html(course.coursename);


    $("#frontnine").html("");
    $("#backnine").html("");



    /*
     Front 9 scorecard
     */

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
        // alert(scoreid + ": " + course.holes[holeindex].playerscores[playerindex]);
        // alert("new score: " + score);

        scorecard.course.holes[holeindex].playerscores[playerindex] = parseInt(score);


        // alert(scoreid + ": " + course.holes[holeindex].playerscores[playerindex]);

        updatefronttotals();
        updatebacktotals();

        scorecard.savegame();

    });





    /*
     END event handlers
     */



}
