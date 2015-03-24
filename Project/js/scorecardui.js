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
var statistics;

/*
 * SETUP SCREEN UI
 */

createSavedGameDirectory();

$("#continuegame").click(function(){


    scorecard.loadgame($("#gameselector").val());

    if (scorecard.getScoreCardType() == "single"){
        statistics = new coursestatistics(scorecard.getCourseName(),5);
        statistics.calculateCourse();
        createSinglePlayerScoreCard();
    }
    else {
        createScoreCard();
    }
});

$("#deletegame").click(function(){
    localStorage.removeItem($("#gameselector").val());
    //createSavedGameDirectory();

});

$("#courseselector").change(function() {

    if($(this).val() == 'par3') {
        scorecard = new scoreCard();
    }
    if($(this).val() == 'par72') {
        scorecard = new scoreCard();
        scorecard.createPar72();
    }
    if($(this).val() == 'QE') {
        scorecard = new scoreCard();
        scorecard.createQueenElizabethPark();
    }
    if($(this).val() == 'Stanley') {
        scorecard = new scoreCard();
        scorecard.createStanleyPark();
    }
    if($(this).val() == 'Rupert') {
        scorecard = new scoreCard();
        scorecard.createRupertPark();
    }
    if($(this).val() == 'Kensington') {
        scorecard = new scoreCard();
        scorecard.createKensingtonPark();
    }
    if($(this).val() == 'Central') {
        scorecard = new scoreCard();
        scorecard.createCentralPark();
    }
    if($(this).val() == 'Ambleside') {
        scorecard = new scoreCard();
        scorecard.createAmblesidePark();
    }
});

$("#scorecardtypeselector").change(function (){
   if ($(this).val() == "4player"){
       $("#playernamesinput").css("display","block");
   }
    else {
       $("#playernamesinput").css("display","none");
   }
});

$("#creategame").click(function (){
    if ($("#scorecardtypeselector").val() == "4player"){
        scorecard.setPlayerNames($('#p1name').val(),$('#p2name').val(),$('#p3name').val(),$('#p4name').val());
        scorecard.setScoreCardType("4player");
        scorecard.setScoreCardDate(new Date());
        createScoreCard();
    }
    else {
        scorecard.setScoreCardType("single");
        scorecard.setScoreCardDate(new Date());
        statistics = new coursestatistics(scorecard.getCourseName(),5);
        statistics.calculateCourse();
        createSinglePlayerScoreCard();
    }
});


function createSavedGameDirectory() {
    if (localStorage.length > 0 ){
        var directory = '<label for="select-native-2"></label><select name="select-native-2" id="gameselector">';
        for (var i = localStorage.length - 1; i >= 0; i--) {

            directory += '<option value="' + localStorage.key(i) + '">' + localStorage.key(i) + ' (' + JSON.parse(localStorage.getItem(localStorage.key(i))).gamestatus + ')' + '</option>';

        }
        directory += '</select>';


        directory  += '<p><a href="#one" id="continuegame" class="ui-btn ui-shadow ui-corner-all">Continue Selected Game</a></p>';
        directory += '<p><a href="." id="deletegame" class="ui-btn ui-shadow ui-corner-all">Delete Selected Game</a></p>';

        $("#file_directory").html(directory);
    }

}


/*
 * SCORECARD UI *
 */



function createScoreCard() {

    $("h1").html(scorecard.getCourseName() + "<br />" + scorecard.getScoreCardDate());


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


/*
 Single player scorecard
 */

function createSinglePlayerScoreCard() {

    $("h1").html(scorecard.getCourseName() + "<br />" + scorecard.getScoreCardDate());


    $("#frontnine").html("");
    $("#backnine").html("");



    /*
     Front 9 scorecard
     */

    if (statistics.getBestScore() != 0) {
        $("#frontnine").append('<tr><th>hole</th><th>par</th><th>yd</th><th>strokes</th><th>putts</th><th>avg</th><th>best</th><th>green</th><th>putts</th></tr>');
    }
    else {
        $("#frontnine").append('<tr><th>hole</th><th>par</th><th>yd</th><th>strokes</th><th>putts</th></tr>');
    }

    var scorecardtable = "";

    for (i=0; i<scorecard.getCourseLength()/2; i++) {

        scorecardtable += '<tr><td>' + scorecard.getHoleNumber(i) + '</td>'
            + '<td>' + scorecard.getParForHole(i) + '</td>'
            + '<td>' + scorecard.getYardageForHole(i) + '</td>';


        scorecardtable += '<td>' + scoreformbuttonpt1 + 'strokes_hole_' + i + scoreformbuttonpt2;

        for (k=0; k<=scorecard.getParForHole(i) * 2; k++){
            if(scorecard.getPlayerScoreForHole(i,0) == k){
                scorecardtable += '<option value="' + k + '" selected="selected">' + k + '</option>';
            }
            else {
                scorecardtable += '<option value="' + k + '">' + k + '</option>';
            }
        }

        scorecardtable += scoreformbuttonpt4 + '</td>';

        scorecardtable += '<td>' + scoreformbuttonpt1 + 'putts_hole_' + i + scoreformbuttonpt2;

        for (k=0; k<=scorecard.getParForHole(i) * 2; k++){
            if(scorecard.getPlayerPuttsForHole(i,0) == k){
                scorecardtable += '<option value="' + k + '" selected="selected">' + k + '</option>';
            }
            else {
                scorecardtable += '<option value="' + k + '">' + k + '</option>';
            }
        }

        scorecardtable += scoreformbuttonpt4 + '</td>';

        if (statistics.getBestScore() != 0) {
            scorecardtable += '<td>' + statistics.getAverageForHole(i) + '</td>'
            + '<td>' + statistics.getBestForHole(i) + '</td>'
            + '<td>' + statistics.getAverageToGreenForHole(i) + '</td>'
            + '<td>' + statistics.getPuttingAverageForHole(i) + '</td>';
        }

        scorecardtable += '</tr>';

    }

    $("#frontnine").append(scorecardtable);
    updatefronttotals();

    function updatefronttotals() {
        scorecard.calculateScores();

        var tablestring = '<tr><th>hole</th><th>par</th><th>yd</th><th>strokes</th><th>putts</th><th>avg</th><th>best</th><th>green</th><th>putts</th></tr>' +
            '<tr></tr><td>Front</td><td>' +
            scorecard.getFrontTotalPar() + '</td><td>' + scorecard.getFrontTotalYardage() + '</td><td>' +
            scorecard.getFrontTotalForPlayer(0) + '</td><td>' + scorecard.getFrontTotalPuttsForPlayer(0) + '</td>';


        if (statistics.getBestScore() != 0) {
            tablestring += '<td>' + statistics.getFrontAverageScore() + '</td>'
            + '<td>' + statistics.getFrontBestScore() + '</td>'
            + '<td>' + statistics.getFrontAverageToGreen() + '</td>'
            + '<td>' + statistics.getFrontPuttingAverage() + '</td>';
        }

        tablestring += '</tr>';
        $("#frontninetotals").html(tablestring);
    }

    /*
     End Front 9 scorecard
     */


    /*
     Start Back 9 scorecard
     */

    if (statistics.getBestScore() != 0) {
        $("#backnine").append('<tr><th>hole</th><th>par</th><th>yd</th><th>strokes</th><th>putts</th><th>avg</th><th>best</th><th>green</th><th>putts</th></tr>');
    }
    else {
        $("#backnine").append('<tr><th>hole</th><th>par</th><th>yd</th><th>strokes</th><th>putts</th></tr>');
    }
    var scorecardtable = "";

    for (i=9; i<scorecard.getCourseLength(); i++) {

        scorecardtable += '<tr><td>' + scorecard.getHoleNumber(i) + '</td>'
        + '<td>' + scorecard.getParForHole(i) + '</td>'
        + '<td>' + scorecard.getYardageForHole(i) + '</td>';


        scorecardtable += '<td>' + scoreformbuttonpt1 + 'strokes_hole_' + i + scoreformbuttonpt2;

        for (k=0; k<=scorecard.getParForHole(i) * 2; k++){
            if(scorecard.getPlayerScoreForHole(i,0) == k){
                scorecardtable += '<option value="' + k + '" selected="selected">' + k + '</option>';
            }
            else {
                scorecardtable += '<option value="' + k + '">' + k + '</option>';
            }
        }

        scorecardtable += scoreformbuttonpt4 + '</td>';

        scorecardtable += '<td>' + scoreformbuttonpt1 + 'putts_hole_' + i + scoreformbuttonpt2;

        for (k=0; k<=scorecard.getParForHole(i) * 2; k++){
            if(scorecard.getPlayerPuttsForHole(i,0) == k){
                scorecardtable += '<option value="' + k + '" selected="selected">' + k + '</option>';
            }
            else {
                scorecardtable += '<option value="' + k + '">' + k + '</option>';
            }
        }

        scorecardtable += scoreformbuttonpt4 + '</td>';

        if (statistics.getBestScore() != 0) {
            scorecardtable += '<td>' + statistics.getAverageForHole(i) + '</td>'
            + '<td>' + statistics.getBestForHole(i) + '</td>'
            + '<td>' + statistics.getAverageToGreenForHole(i) + '</td>'
            + '<td>' + statistics.getPuttingAverageForHole(i) + '</td>';
        }
        scorecardtable += '</tr>'
    }

    $("#backnine").append(scorecardtable);

    updatebacktotals();

    function updatebacktotals() {

        scorecard.calculateScores();

        var tablestring = '<tr><th>hole</th><th>par</th><th>yd</th><th>strokes</th><th>putts</th><th>avg</th><th>best</th><th>green</th><th>putts</th></tr>' +
            '<tr></tr><td>Front</td><td>' +
            scorecard.getFrontTotalPar() + '</td><td>' + scorecard.getFrontTotalYardage() + '</td><td>' +
            scorecard.getFrontTotalForPlayer(0) + '</td><td>' + scorecard.getFrontTotalPuttsForPlayer(0) + '</td>';

        if (statistics.getBestScore() != 0) {
            tablestring += '<td>' + statistics.getFrontAverageScore() + '</td>'
            + '<td>' + statistics.getFrontBestScore() + '</td>'
            + '<td>' + statistics.getFrontAverageToGreen() + '</td>'
            + '<td>' + statistics.getFrontPuttingAverage() + '</td>';
        }

        tablestring += '</tr>';

        tablestring += '<tr></tr><td>Back</td><td>' +
        scorecard.getBackTotalPar() + '</td><td>' + scorecard.getBackTotalYardage() + '</td><td>' +
        scorecard.getBackTotalForPlayer(0) + '</td><td>' + scorecard.getBackTotalPuttsForPlayer(0) + '</td>';

        if (statistics.getBestScore() != 0) {
            tablestring += '<td>' + statistics.getBackAverageScore() + '</td>'
            + '<td>' + statistics.getBackBestScore() + '</td>'
            + '<td>' + statistics.getBackAverageToGreen() + '</td>'
            + '<td>' + statistics.getBackPuttingAverage() + '</td>';
        }

        tablestring += '</tr>';

        tablestring += '<tr></tr><td>Total</td><td>' +
        scorecard.getTotalPar() + '</td><td>' + scorecard.getTotalYardage() + '</td><td>' +
        scorecard.getTotalForPlayer(0) + '</td><td>' + scorecard.getTotalPuttsForPlayer(0) + '</td>';

        if (statistics.getBestScore() != 0) {
            tablestring += '<td>' + statistics.getAverageScore() + '</td>'
            + '<td>' + statistics.getBestScore() + '</td>'
            + '<td>' + statistics.getAverageToGreen() + '</td>'
            + '<td>' + statistics.getPuttingAverage() + '</td>';
        }

        tablestring += '</tr>';

        $("#backninetotals").html(tablestring);
    }



    /*
     End Back 9 scorecard
     */


    /*
     START scorecard event handlers
     */


    $(".scoreselector").change(function() {

        // alert("on click");
        scoreid = $(this).attr("id");
        //alert("scoreid: " + scoreid);

        var score = $(this).val();

        var scoretype = String(scoreid.split("_")[0]);
        var holeindex = String(scoreid.split("_")[2]);

        //alert('type ' + scoretype + 'hole ' + holeindex + ' score: ' + score);

        if (scoretype == "strokes") {
            scorecard.setPlayerScoreForHole(holeindex,0,score);
        }
        else {
            scorecard.setPlayerPuttsForHole(holeindex,0,score);
        }

        scorecard.savegame();
        updatebacktotals();
        updatefronttotals();

    });





    /*
     END event handlers
     */



}