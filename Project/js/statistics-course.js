/**
 * Created by elambke on 15-03-23.
 */

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

    //calculateStats();

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

    this.getAverageForHole = function(hole) {
        return (this.stats.holes[hole].average).toFixed(2);
    }

    this.getBestForHole = function(hole) {
        return this.stats.holes[hole].bestscore;
    }

    this.getAverageToGreenForHole = function(hole) {
        return (this.stats.holes[hole].averagetogreen).toFixed(2);
    }

    this.getPuttingAverageForHole = function(hole) {
        return (this.stats.holes[hole].averageputts).toFixed(2);
    }

    this.getBestScore = function(){
        return this.stats.total.bestscore;
    }

    this.getAverageScore = function(){
        return (this.stats.total.average).toFixed(2);
    }

    this.getAverageToGreen = function(){
        return (this.stats.total.averagetogreen).toFixed(2);
    }

    this.getPuttingAverage = function() {
        return (this.stats.total.averageputts).toFixed(2);
    }

    this.getFrontBestScore = function(){
        return this.stats.fronttotal.bestscore;
    }

    this.getFrontAverageScore = function(){
        return (this.stats.fronttotal.average).toFixed(2);
    }

    this.getFrontAverageToGreen = function(){
        return (this.stats.fronttotal.averagetogreen).toFixed(2);
    }

    this.getFrontPuttingAverage = function() {
        return (this.stats.fronttotal.averageputts).toFixed(2);
    }

    this.getBackBestScore = function(){
        return this.stats.backtotal.bestscore;
    }

    this.getBackAverageScore = function(){
        return (this.stats.backtotal.average).toFixed(2);
    }

    this.getBackAverageToGreen = function(){
        return (this.stats.backtotal.averagetogreen).toFixed(2);
    }

    this.getBackPuttingAverage = function() {
        return (this.stats.backtotal.averageputts).toFixed(2);
    }

}
