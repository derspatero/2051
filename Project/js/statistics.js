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
        var handicapscores = [0];
        for (var i = localStorage.length - 1; i >= 0; i--) {
            var game = JSON.parse(localStorage.getItem(localStorage.key(i)));
            console.log(game);

            if (game.gamestatus == "closed") {
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

                //calculate putting and GIR
                if (last20index < 20) {
                    var putts =0;
                    for (var j = 0; j < game.holes.length; j++){
                        putts += game.holes[j].putts[0];
                    }
                    statistics.putting += putts/game.holes.length;
                }

                last20index++;
            }
        }

        statistics.average = parseInt(statistics.average)/statistics.number_of_games;
        statistics.average_of_last20 = parseInt(statistics.average_of_last20)/statistics.number_of_games;
        statistics.putting = statistics.putting/statistics.number_of_games;

        //calculate handicap
        for (var i=0; i < handicapscores.length && i < 10; i++){
            statistics.handicap += handicapscores[i];
        }
        if (handicapscores.length < 10){
            statistics.handicap = statistics.handicap/handicapscores.length;
        }
        else {
            statistics.handicap = statistics.handicap/10;
        }


        //display stats
        $("#average_score_total").html(statistics.average);
        $("#average_score_last20").html(statistics.average_of_last20);
        $("#best_score").html(statistics.best_score);
        $("#worst_score").html(statistics.worst_score);
        $("#handicap").html(statistics.handicap);
        $("#number_of_games").html(statistics.number_of_games);
        $("#putting_average").html(statistics.putting);

    }

}