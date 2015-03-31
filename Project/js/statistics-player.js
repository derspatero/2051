/**
 * Created by elambke on 15-03-10.
 */
var statistics = {
    "number_of_games": 0,
    "average": 0,
    "average_of_last20": 0,
    "best_score": 0,
    "worst_score": 0,
    "handicap": 0,
    "greens": 0,
    "putting": 0
}


calculateStats();

function calculateStats() {


    if (localStorage.length > 0 ){
        var last20index = 0;
        var handicapscores = [];
        for (var i = localStorage.length - 1; i >= 0; i--) {
            var game = JSON.parse(localStorage.getItem(localStorage.key(i)));
            //console.log(game);

            if (game.gamestatus == "closed" && game.scorecardtype == "single") {
                statistics.number_of_games += 1;

                //calculate total average score
                statistics.average = parseInt(statistics.average) + parseInt(game.total.playerscores[0]);

                //calculate last 20 average score
                if (last20index < 20) {
                    statistics.average_of_last20 = parseInt(statistics.average_of_last20) + parseInt(game.total.playerscores[0]);
                }

                //calculate best score
                if (parseInt(game.total.playerscores[0]) < parseInt(statistics.best_score) || statistics.best_score == 0) {
                    statistics.best_score = parseInt(game.total.playerscores[0]);
                }

                //calculate worst score
                if (parseInt(game.total.playerscores[0]) > parseInt(statistics.worst_score)) {
                    statistics.worst_score = parseInt(game.total.playerscores[0]);
                }

                //calculate handicap
                if (last20index < 20) {
                    handicapscores.push(game.total.playerscores[0] - game.total.par);
                    handicapscores.sort();
                    //alert(game.total.playerscores[0] + " " + handicapscores);
                }

                //calculate putting and averagetogreen
                if (last20index < 20) {
                    var putts =0;
                    var drives = 0
                    for (var j = 0; j < game.holes.length; j++){
                        putts += game.holes[j].putts[0];
                        drives += game.holes[j].playerscores[0] - game.holes[j].putts[0];
                    }
                    statistics.putting += putts/game.holes.length;
                    statistics.greens += drives/game.holes.length;
                }

                last20index++;
            }
        }

        statistics.average = (parseInt(statistics.average)/statistics.number_of_games).toFixed(2);
        statistics.average_of_last20 = (parseInt(statistics.average_of_last20)/statistics.number_of_games).toFixed(2);
        statistics.putting = (statistics.putting/statistics.number_of_games).toFixed(2);
        statistics.greens = (statistics.greens/statistics.number_of_games).toFixed(2);

        //calculate handicap
        for (var i=0; i < handicapscores.length && i < 10; i++){
            statistics.handicap += handicapscores[i];
        }
        if (handicapscores.length < 10){
            //alert(handicapscores);
            statistics.handicap = (statistics.handicap/handicapscores.length).toFixed(2);
        }
        else {
            statistics.handicap = (statistics.handicap/10).toFixed(2);
        }
        statistics.handicap *= -1;

        //display stats

        console.log("number of games: " + parseInt(statistics.number_of_games));

        $("#playerstatstable").css("display","block");

        $("#average_score_total").html(statistics.average);
        $("#average_score_last20").html(statistics.average_of_last20);
        $("#best_score").html(statistics.best_score);
        $("#worst_score").html(statistics.worst_score);
        $("#handicap").html(statistics.handicap);
        $("#number_of_games").html(statistics.number_of_games);
        $("#green_average").html(statistics.greens);
        $("#putting_average").html(statistics.putting);


    }


}

