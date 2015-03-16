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
            //console.log(game);

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

                //calculate putting and averagetogreen
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

function coursestatistics(course, history) {
    this.stats = {
        "coursename": course,
        "numberofgames": 0,
        "gamesincludedinstats": parseInt(history),
        "holes": [
            {"hole": 1, "bestscore": 0, "average": 0, "averagetogreen": 0, "averageputts": 0},
            {"hole": 2, "bestscore": 0, "average": 0, "averagetogreen": 0, "averageputts": 0},
            {"hole": 3, "bestscore": 0, "average": 0, "averagetogreen": 0, "averageputts": 0},
            {"hole": 4, "bestscore": 0, "average": 0, "averagetogreen": 0, "averageputts": 0},
            {"hole": 5, "bestscore": 0, "average": 0, "averagetogreen": 0, "averageputts": 0},
            {"hole": 6, "bestscore": 0, "average": 0, "averagetogreen": 0, "averageputts": 0},
            {"hole": 7, "bestscore": 0, "average": 0, "averagetogreen": 0, "averageputts": 0},
            {"hole": 8, "bestscore": 0, "average": 0, "averagetogreen": 0, "averageputts": 0},
            {"hole": 9, "bestscore": 0, "average": 0, "averagetogreen": 0, "averageputts": 0},
            {"hole": 10, "bestscore": 0, "average": 0, "averagetogreen": 0, "averageputts": 0},
            {"hole": 11, "bestscore": 0, "average": 0, "averagetogreen": 0, "averageputts": 0},
            {"hole": 12, "bestscore": 0, "average": 0, "averagetogreen": 0, "averageputts": 0},
            {"hole": 13, "bestscore": 0, "average": 0, "averagetogreen": 0, "averageputts": 0},
            {"hole": 14, "bestscore": 0, "average": 0, "averagetogreen": 0, "averageputts": 0},
            {"hole": 15, "bestscore": 0, "average": 0, "averagetogreen": 0, "averageputts": 0},
            {"hole": 16, "bestscore": 0, "average": 0, "averagetogreen": 0, "averageputts": 0},
            {"hole": 17, "bestscore": 0, "average": 0, "averagetogreen": 0, "averageputts": 0},
            {"hole": 18, "bestscore": 0, "average": 0, "averagetogreen": 0, "averageputts": 0},
        ],
        "fronttotal": {"bestscore": 0, "average": 0, "averagetogreen": 0, "averageputts": 0},
        "backtotal": {"bestscore": 0, "average": 0, "averagetogreen": 0, "averageputts": 0},
        "total": {"bestscore": 0, "average": 0, "averagetogreen": 0, "averageputts": 0},
    }

    this.calculateCourse = function() {
        var gamecounter = 0;
        if (localStorage.length > 0) {
            for (var i = localStorage.length - 1; i >= 0; i--) {
                var game = JSON.parse(localStorage.getItem(localStorage.key(i)));
                if (game.gamestatus == "closed" && game.coursename == this.stats.coursename) {
                    this.stats.numberofgames += 1;
                    if (gamecounter < this.stats.gamesincludedinstats) {
                        for (var j = 0; j < game.holes.length; j++) {
                            if (this.stats.holes[j].bestscore < parseInt(game.holes[j].playerscores[0]) || this.stats.holes[j].bestscore == 0){
                                this.stats.holes[j].bestscore = parseInt(game.holes[j].playerscores[0]);
                            }
                            this.stats.holes[j].average += parseInt(game.holes[j].playerscores[0]);
                            this.stats.holes[j].averageputts += parseInt(game.holes[j].putts[0]);
                            this.stats.holes[j].averagetogreen += (parseInt(game.holes[j].playerscores[0]) - parseInt(game.holes[j].putts[0]));
                        }
                        gamecounter++;
                    }
                    if (this.stats.fronttotal.bestscore < game.fronttotal.playerscores[0] || this.stats.fronttotal.bestscore == 0) {
                        this.stats.fronttotal.bestscore = game.fronttotal.playerscores[0];
                    }
                    if (this.stats.backtotal.bestscore < game.backtotal.playerscores[0] || this.stats.backtotal.bestscore == 0) {
                        this.stats.backtotal.bestscore = game.backtotal.playerscores[0];
                    }
                    if (this.stats.total.bestscore < game.total.playerscores[0] || this.stats.total.bestscore == 0) {
                        this.stats.total.bestscore = game.total.playerscores[0];
                    }


                }

            }
            this.stats.gamesincludedinstats = gamecounter;
            for (var j = 0; j < this.stats.holes.length; j++) {
                this.stats.holes[j].average = this.stats.holes[j].average / this.stats.gamesincludedinstats;
                this.stats.holes[j].averageputts = this.stats.holes[j].averageputts / this.stats.gamesincludedinstats;
                this.stats.holes[j].averagetogreen = this.stats.holes[j].averagetogreen / this.stats.gamesincludedinstats;
                if (j < 9) {
                    this.stats.fronttotal.average += this.stats.holes[j].average;
                    this.stats.fronttotal.averageputts += this.stats.holes[j].averageputts;
                    this.stats.fronttotal.averagetogreen += this.stats.holes[j].averagetogreen;
                    this.stats.total.average += this.stats.holes[j].average;
                    this.stats.total.averageputts += this.stats.holes[j].averageputts;
                    this.stats.total.averagetogreen += this.stats.holes[j].averagetogreen;
                }
                else {
                    this.stats.backtotal.average += this.stats.holes[j].average;
                    this.stats.backtotal.averageputts += this.stats.holes[j].averageputts;
                    this.stats.backtotal.averagetogreen += this.stats.holes[j].averagetogreen;
                    this.stats.total.average += this.stats.holes[j].average;
                    this.stats.total.averageputts += this.stats.holes[j].averageputts;
                    this.stats.total.averagetogreen += this.stats.holes[j].averagetogreen;
                }
            }
            this.stats.fronttotal.averageputts = this.stats.fronttotal.averageputts / this.stats.holes.length * 2;
            this.stats.fronttotal.averagetogreen = this.stats.fronttotal.averagetogreen / this.stats.holes.length * 2;
            this.stats.backtotal.averageputts = this.stats.backtotal.averageputts / this.stats.holes.length * 2;
            this.stats.backtotal.averagetogreen = this.stats.backtotal.averagetogreen / this.stats.holes.length * 2;
            this.stats.total.averageputts = this.stats.total.averageputts / this.stats.holes.length;
            this.stats.total.averagetogreen = this.stats.total.averagetogreen / this.stats.holes.length;
        }

    }
    console.log(this.stats);
}