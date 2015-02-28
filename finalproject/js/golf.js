/**
 * Created by elambke on 15-02-22.
 */

var course = {}

// var scoreformbuttonpt1 = '<select class="scoreselector" id="';
var scoreformbuttonpt1 = '<select name="select-native-2" class="scoreselector" id="';
var scoreformbuttonpt2 = '">';
var scoreformbuttonpt3 = '<option value="0">0</option>';
var scoreformbuttonpt4 = '</select>';

var scoreid;

var file_name = "scorecard.txt";


function createblankscorecard(){
    course = {
        "coursename":"Pitch and Putt",
        "players":["P1","P2","P3","P4"],
        "holes":[
            {"hole":1,"yd":75,"par":3,"playerscores":[3,0,0,0]},
            {"hole":2,"yd":75,"par":3,"playerscores":[0,0,0,0]},
            {"hole":3,"yd":75,"par":3,"playerscores":[0,0,0,0]},
            {"hole":4,"yd":75,"par":3,"playerscores":[0,0,0,0]},
            {"hole":5,"yd":75,"par":3,"playerscores":[0,0,0,0]},
            {"hole":6,"yd":75,"par":3,"playerscores":[0,0,0,0]},
            {"hole":7,"yd":75,"par":3,"playerscores":[0,0,0,0]},
            {"hole":8,"yd":75,"par":3,"playerscores":[0,0,0,0]},
            {"hole":9,"yd":75,"par":3,"playerscores":[0,0,0,0]},
            {"hole":10,"yd":75,"par":3,"playerscores":[0,0,0,0]},
            {"hole":11,"yd":75,"par":3,"playerscores":[0,0,0,0]},
            {"hole":12,"yd":75,"par":3,"playerscores":[0,0,0,0]},
            {"hole":13,"yd":75,"par":3,"playerscores":[0,0,0,0]},
            {"hole":14,"yd":75,"par":3,"playerscores":[0,0,0,0]},
            {"hole":15,"yd":75,"par":3,"playerscores":[0,0,0,0]},
            {"hole":16,"yd":75,"par":3,"playerscores":[0,0,0,0]},
            {"hole":17,"yd":75,"par":3,"playerscores":[0,0,0,0]},
            {"hole":18,"yd":75,"par":3,"playerscores":[0,0,0,0]},
        ],
        "fronttotal":{"yd":0,"par":0,"playerscores":[0,0,0,0]},
        "backtotal":{"yd":0,"par":0,"playerscores":[0,0,0,0]},
        "total":{"yd":0,"par":0,"playerscores":[0,0,0,0]},
    }
    createScoreCard();
}




/*
 Front 9 scorecard
 */




function createScoreCard() {

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

        course.holes[holeindex].playerscores[playerindex] = parseInt(score);


        // alert(scoreid + ": " + course.holes[holeindex].playerscores[playerindex]);

        updatefronttotals();
        updatebacktotals();

        savefile();

    });

    $("#startgame").click(function(){
        course.players[0] = $('#p1name').val();
        course.players[1] = $('#p2name').val();
        course.players[2] = $('#p3name').val();
        course.players[3] = $('#p4name').val();
        createScoreCard();

    });

    $("#startpar72game").click(function(){
        course = {
            "coursename":"Real Golf!",
            "players":["P1","P2","P3","P4"],
            "holes":[
                {"hole":1,"yd":75,"par":5,"playerscores":[0,0,0,0]},
                {"hole":2,"yd":75,"par":5,"playerscores":[0,0,0,0]},
                {"hole":3,"yd":75,"par":5,"playerscores":[0,0,0,0]},
                {"hole":4,"yd":75,"par":5,"playerscores":[0,0,0,0]},
                {"hole":5,"yd":75,"par":5,"playerscores":[0,0,0,0]},
                {"hole":6,"yd":75,"par":5,"playerscores":[0,0,0,0]},
                {"hole":7,"yd":75,"par":5,"playerscores":[0,0,0,0]},
                {"hole":8,"yd":75,"par":5,"playerscores":[0,0,0,0]},
                {"hole":9,"yd":75,"par":5,"playerscores":[0,0,0,0]},
                {"hole":10,"yd":75,"par":5,"playerscores":[0,0,0,0]},
                {"hole":11,"yd":75,"par":5,"playerscores":[0,0,0,0]},
                {"hole":12,"yd":75,"par":5,"playerscores":[0,0,0,0]},
                {"hole":13,"yd":75,"par":5,"playerscores":[0,0,0,0]},
                {"hole":14,"yd":75,"par":5,"playerscores":[0,0,0,0]},
                {"hole":15,"yd":75,"par":5,"playerscores":[0,0,0,0]},
                {"hole":16,"yd":75,"par":5,"playerscores":[0,0,0,0]},
                {"hole":17,"yd":75,"par":5,"playerscores":[0,0,0,0]},
                {"hole":18,"yd":75,"par":5,"playerscores":[0,0,0,0]},
            ],
            "fronttotal":{"yd":0,"par":0,"playerscores":[0,0,0,0]},
            "backtotal":{"yd":0,"par":0,"playerscores":[0,0,0,0]},
            "total":{"yd":0,"par":0,"playerscores":[0,0,0,0]},
        }
        course.players[0] = $('#p1name').val();
        course.players[1] = $('#p2name').val();
        course.players[2] = $('#p3name').val();
        course.players[3] = $('#p4name').val();
        createScoreCard();

    });

    /*
     END event handlers
     */



}




function updatebacktotals(){

    course.backtotal.yd = 0;
    course.backtotal.par = 0;
    course.backtotal.playerscores[0] = 0;
    course.backtotal.playerscores[1] = 0;
    course.backtotal.playerscores[2] = 0;
    course.backtotal.playerscores[3] = 0;

    course.total.yd = 0;
    course.total.par = 0;
    course.total.playerscores[0] = 0;
    course.total.playerscores[1] = 0;
    course.total.playerscores[2] = 0;
    course.total.playerscores[3] = 0;


    for (i=9; i<course.holes.length; i++) {
        course.backtotal.yd += parseInt(course.holes[i].yd);
        course.backtotal.par += parseInt(course.holes[i].par);
        course.backtotal.playerscores[0] += parseInt(course.holes[i].playerscores[0]);
        course.backtotal.playerscores[1] += parseInt(course.holes[i].playerscores[1]);
        course.backtotal.playerscores[2] += parseInt(course.holes[i].playerscores[2]);
        course.backtotal.playerscores[3] += parseInt(course.holes[i].playerscores[3]);
    }

    for (i=0; i<course.holes.length; i++) {
        course.total.yd += parseInt(course.holes[i].yd);
        course.total.par += parseInt(course.holes[i].par);
        course.total.playerscores[0] += parseInt(course.holes[i].playerscores[0]);
        course.total.playerscores[1] += parseInt(course.holes[i].playerscores[1]);
        course.total.playerscores[2] += parseInt(course.holes[i].playerscores[2]);
        course.total.playerscores[3] += parseInt(course.holes[i].playerscores[3]);
    }



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

    course.fronttotal.yd = 0;
    course.fronttotal.par = 0;
    course.fronttotal.playerscores[0] = 0;
    course.fronttotal.playerscores[1] = 0;
    course.fronttotal.playerscores[2] = 0;
    course.fronttotal.playerscores[3] = 0;

    for (i=0; i<course.holes.length/2; i++) {
        course.fronttotal.yd += parseInt(course.holes[i].yd);
        course.fronttotal.par += parseInt(course.holes[i].par);
        course.fronttotal.playerscores[0] += parseInt(course.holes[i].playerscores[0]);
        course.fronttotal.playerscores[1] += parseInt(course.holes[i].playerscores[1]);
        course.fronttotal.playerscores[2] += parseInt(course.holes[i].playerscores[2]);
        course.fronttotal.playerscores[3] += parseInt(course.holes[i].playerscores[3]);
    }

    $("#frontninetotals").html('<tr><td>Front</td><td>' +
        // course.fronttotal.yd + '</td><td>' +
        // course.fronttotal.par + '</td><td>' +
    course.fronttotal.playerscores[0] + '</td><td>' + course.fronttotal.playerscores[1] + '</td><td>' +
    course.fronttotal.playerscores[2] + '</td><td>' + course.fronttotal.playerscores[3] + '</td></tr>');
}

function savefile(){
    var textToWrite = JSON.stringify(course);
    writeFile(file_name, textToWrite);
}












