/**
 * Created by elambke on 15-03-10.
 */
var statistics = {
    "number_of_games": 0,
    "average": 0,
    "average_of_last20": 0,
    "best_score": 0,
    "worst_score": 0
}

statistics.number_of_games = localStorage.length;

$("#number_of_games").html(statistics.number_of_games);

calculateStats();

function calculateStats() {
    if (localStorage.length > 0 ){

        for (var i = localStorage.length - 1; i >= 0; i--) {
            var game = JSON.parse(localStorage.getItem(localStorage.key(i)));
            statistics.average = parseInt(statistics.average) + parseInt(game.total.playerscores[0]);
            alert(game.total.playerscores[0]);

            if (parseInt(game.total.playerscores[0]) < parseInt(statistics.best_score) || statistics.best_score == 0){
                statistics.best_score = parseInt(game.total.playerscores[0]);
            }
        }

        statistics.average = parseInt(statistics.average)/localStorage.length;

        $("#average_score_total").html(statistics.average);

        $("#best_score").html(statistics.best_score);


    }

}