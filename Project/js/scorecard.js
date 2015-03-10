

function scoreCard() {
    this.course = {
        "coursename": "Pitch and Putt",
        "date": "",
        "scorecardtype": "",
        "gamestatus": "open",
        "players": ["P1", "P2", "P3", "P4"],
        "holes": [
            {"hole": 1, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0], "putts": [0, 0, 0, 0]},
            {"hole": 2, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0], "putts": [0, 0, 0, 0]},
            {"hole": 3, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0], "putts": [0, 0, 0, 0]},
            {"hole": 4, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0], "putts": [0, 0, 0, 0]},
            {"hole": 5, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0], "putts": [0, 0, 0, 0]},
            {"hole": 6, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0], "putts": [0, 0, 0, 0]},
            {"hole": 7, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0], "putts": [0, 0, 0, 0]},
            {"hole": 8, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0], "putts": [0, 0, 0, 0]},
            {"hole": 9, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0], "putts": [0, 0, 0, 0]},
            {"hole": 10, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0], "putts": [0, 0, 0, 0]},
            {"hole": 11, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0], "putts": [0, 0, 0, 0]},
            {"hole": 12, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0], "putts": [0, 0, 0, 0]},
            {"hole": 13, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0], "putts": [0, 0, 0, 0]},
            {"hole": 14, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0], "putts": [0, 0, 0, 0]},
            {"hole": 15, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0], "putts": [0, 0, 0, 0]},
            {"hole": 16, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0], "putts": [0, 0, 0, 0]},
            {"hole": 17, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0], "putts": [0, 0, 0, 0]},
            {"hole": 18, "yd": 75, "par": 3, "playerscores": [0, 0, 0, 0], "putts": [0, 0, 0, 0]},
        ],
        "fronttotal": {"yd": 0, "par": 0, "playerscores": [0, 0, 0, 0], "putts": [0, 0, 0, 0]},
        "backtotal": {"yd": 0, "par": 0, "playerscores": [0, 0, 0, 0], "putts": [0, 0, 0, 0]},
        "total": {"yd": 0, "par": 0, "playerscores": [0, 0, 0, 0], "putts": [0, 0, 0, 0]}
    }

    this.calculateScores = function() {

        this.course.fronttotal.yd = 0;
        this.course.fronttotal.par = 0;
        this.course.fronttotal.playerscores[0] = 0;
        this.course.fronttotal.playerscores[1] = 0;
        this.course.fronttotal.playerscores[2] = 0;
        this.course.fronttotal.playerscores[3] = 0;
        this.course.fronttotal.putts[0] = 0;
        this.course.fronttotal.putts[1] = 0;
        this.course.fronttotal.putts[2] = 0;
        this.course.fronttotal.putts[3] = 0;

        for (i = 0; i < this.course.holes.length / 2; i++) {
            this.course.fronttotal.yd += parseInt(this.course.holes[i].yd);
            this.course.fronttotal.par += parseInt(this.course.holes[i].par);
            this.course.fronttotal.playerscores[0] += parseInt(this.course.holes[i].playerscores[0]);
            this.course.fronttotal.playerscores[1] += parseInt(this.course.holes[i].playerscores[1]);
            this.course.fronttotal.playerscores[2] += parseInt(this.course.holes[i].playerscores[2]);
            this.course.fronttotal.playerscores[3] += parseInt(this.course.holes[i].playerscores[3]);
            this.course.fronttotal.putts[0] += parseInt(this.course.holes[i].putts[0]);
            this.course.fronttotal.putts[1] += parseInt(this.course.holes[i].putts[1]);
            this.course.fronttotal.putts[2] += parseInt(this.course.holes[i].putts[2]);
            this.course.fronttotal.putts[3] += parseInt(this.course.holes[i].putts[3]);
        }

        this.course.backtotal.yd = 0;
        this.course.backtotal.par = 0;
        this.course.backtotal.playerscores[0] = 0;
        this.course.backtotal.playerscores[1] = 0;
        this.course.backtotal.playerscores[2] = 0;
        this.course.backtotal.playerscores[3] = 0;
        this.course.backtotal.putts[0] = 0;
        this.course.backtotal.putts[1] = 0;
        this.course.backtotal.putts[2] = 0;
        this.course.backtotal.putts[3] = 0;

        for (i=9; i<this.course.holes.length; i++) {
            this.course.backtotal.yd += parseInt(this.course.holes[i].yd);
            this.course.backtotal.par += parseInt(this.course.holes[i].par);
            this.course.backtotal.playerscores[0] += parseInt(this.course.holes[i].playerscores[0]);
            this.course.backtotal.playerscores[1] += parseInt(this.course.holes[i].playerscores[1]);
            this.course.backtotal.playerscores[2] += parseInt(this.course.holes[i].playerscores[2]);
            this.course.backtotal.playerscores[3] += parseInt(this.course.holes[i].playerscores[3]);
            this.course.backtotal.putts[0] += parseInt(this.course.holes[i].putts[0]);
            this.course.backtotal.putts[1] += parseInt(this.course.holes[i].putts[1]);
            this.course.backtotal.putts[2] += parseInt(this.course.holes[i].putts[2]);
            this.course.backtotal.putts[3] += parseInt(this.course.holes[i].putts[3]);
        }

        this.course.total.yd = 0;
        this.course.total.par = 0;
        this.course.total.playerscores[0] = 0;
        this.course.total.playerscores[1] = 0;
        this.course.total.playerscores[2] = 0;
        this.course.total.playerscores[3] = 0;
        this.course.total.putts[0] = 0;
        this.course.total.putts[1] = 0;
        this.course.total.putts[2] = 0;
        this.course.total.putts[3] = 0;

        for (i=0; i<this.course.holes.length; i++) {
            this.course.total.yd += parseInt(this.course.holes[i].yd);
            this.course.total.par += parseInt(this.course.holes[i].par);
            this.course.total.playerscores[0] += parseInt(this.course.holes[i].playerscores[0]);
            this.course.total.playerscores[1] += parseInt(this.course.holes[i].playerscores[1]);
            this.course.total.playerscores[2] += parseInt(this.course.holes[i].playerscores[2]);
            this.course.total.playerscores[3] += parseInt(this.course.holes[i].playerscores[3]);
            this.course.total.putts[0] += parseInt(this.course.holes[i].putts[0]);
            this.course.total.putts[1] += parseInt(this.course.holes[i].putts[1]);
            this.course.total.putts[2] += parseInt(this.course.holes[i].putts[2]);
            this.course.total.putts[3] += parseInt(this.course.holes[i].putts[3]);
        }
    }

    this.savegame = function () {
        var textToWrite = JSON.stringify(this.course);
        localStorage.setItem(this.course.coursename + " " + this.course.date, textToWrite);
    }

    this.loadgame = function(item) {
        //alert("load: " + String.toString(item));
        this.course = JSON.parse(localStorage.getItem(item));
        createScoreCard();
    }


    /*
    GETTERS AND SETTERS
     */
    this.getCourseName = function() {
        return this.course.coursename;
    }

    this.setPlayerNames = function(p1name, p2name, p3name, p4name){
        this.course.players[0] = p1name;
        this.course.players[1] = p2name;
        this.course.players[2] = p3name;
        this.course.players[3] = p4name;
    }

    this.getPlayerName = function(playerNumber) {
        return this.course.players[playerNumber];
    }

    this.getCourseLength = function() {
        return this.course.holes.length;
    }

    this.setPlayerScoreForHole = function(holeindex,playerindex,score){
        this.course.holes[holeindex].playerscores[playerindex] = parseInt(score);
    }

    this.setPlayerPuttsForHole = function(holeindex,playerindex,putts){
        this.course.holes[holeindex].putts[playerindex] = parseInt(putts);
    }

    this.getPlayerScoreForHole = function(holeindex,playerindex) {
        return this.course.holes[holeindex].playerscores[playerindex];
    }

    this.getPlayerPuttsForHole = function(holeindex,playerindex) {
        return this.course.holes[holeindex].putts[playerindex];
    }

    this.getHoleNumber = function(holeindex) {
        return this.course.holes[holeindex].hole;
    }

    this.getNumberOfPlayers = function() {
        return this.course.players.length;
    }

    this.getParForHole = function(holeindex) {
        return this.course.holes[holeindex].par;
    }

    this.getYardageForHole = function(holeindex) {
        return this.course.holes[holeindex].yd;
    }

    this.getFrontTotalForPlayer = function(playerindex) {
        return this.course.fronttotal.playerscores[playerindex];
    }

    this.getFrontTotalPuttsForPlayer = function(playerindex) {
        return this.course.fronttotal.putts[playerindex];
    }

    this.getFrontTotalPar = function() {
        return this.course.fronttotal.par;
    }

    this.getFrontTotalYardage = function() {
        return this.course.fronttotal.yd;
    }

    this.getBackTotalForPlayer = function(playerindex) {
        return this.course.backtotal.playerscores[playerindex];
    }

    this.getBackTotalPuttsForPlayer = function(playerindex) {
        return this.course.backtotal.putts[playerindex];
    }

    this.getBackTotalPar = function() {
        return this.course.backtotal.par;
    }

    this.getBackTotalYardage = function() {
        return this.course.backtotal.yd;
    }

    this.getTotalForPlayer = function(playerindex) {
        return this.course.total.playerscores[playerindex];
    }

    this.getTotalPuttsForPlayer = function(playerindex) {
        return this.course.total.putts[playerindex];
    }

    this.getTotalPar = function() {
        return this.course.total.par;
    }

    this.getTotalYardage = function() {
        return this.course.total.yd;
    }

    this.setScoreCardType = function(gametype) {
        this.course.scorecardtype = gametype;
    }

    this.getScoreCardType = function() {
        return this.course.scorecardtype;
    }

    this.setGameStatus = function(gamestatus) {
        this.course.gamestatus = gamestatus;
    }

    this.getGameStatus = function() {
        return this.course.gamestatus;
    }

    this.setScoreCardDate = function(gamedate) {
        this.course.date = gamedate;
    }

    this.getScoreCardDate = function() {
        return this.course.date;
    }

    /*
     COURSE TEMPLATES
     */
    this.createPar72 = function() {
        this.course.coursename = "Real Golf!";
        for (var i=0; i <18; i++) {
            this.course.holes[i].par = 5;
        }
    }

    this.createQueenElizabeth = function() {
        this.course.coursename = "Queen Elizabeth Pitch and Putt";
        this.course.holes[0].yd = 70;
        this.course.holes[1].yd = 110;
        this.course.holes[2].yd = 65;
        this.course.holes[3].yd = 40;
        this.course.holes[4].yd = 85;
        this.course.holes[5].yd = 60;
        this.course.holes[6].yd = 90;
        this.course.holes[7].yd = 65;
        this.course.holes[8].yd = 75;
        this.course.holes[9].yd = 70;
        this.course.holes[10].yd = 65;
        this.course.holes[11].yd = 85;
        this.course.holes[12].yd = 80;
        this.course.holes[13].yd = 80;
        this.course.holes[14].yd = 110;
        this.course.holes[15].yd = 90;
        this.course.holes[16].yd = 50;
        this.course.holes[17].yd = 80;
    }

    this.createStanleyPark = function() {
        this.course.coursename = "Stanley Park Pitch and Putt";
        this.course.holes[0].yd = 45;
        this.course.holes[1].yd = 80;
        this.course.holes[2].yd = 65;
        this.course.holes[3].yd = 65;
        this.course.holes[4].yd = 85;
        this.course.holes[5].yd = 70;
        this.course.holes[6].yd = 60;
        this.course.holes[7].yd = 65;
        this.course.holes[8].yd = 50;
        this.course.holes[9].yd = 70;
        this.course.holes[10].yd = 50;
        this.course.holes[11].yd = 50;
        this.course.holes[12].yd = 65;
        this.course.holes[13].yd = 85;
        this.course.holes[14].yd = 43;
        this.course.holes[15].yd = 50;
        this.course.holes[16].yd = 50;
        this.course.holes[17].yd = 80;
    }

    this.createRupertPark = function() {
        this.course.coursename = "Rupert Park Pitch and Putt";
        this.course.holes[0].yd = 70;
        this.course.holes[1].yd = 70;
        this.course.holes[2].yd = 75;
        this.course.holes[3].yd = 75;
        this.course.holes[4].yd = 80;
        this.course.holes[5].yd = 70;
        this.course.holes[6].yd = 65;
        this.course.holes[7].yd = 60;
        this.course.holes[8].yd = 55;
        this.course.holes[9].yd = 60;
        this.course.holes[10].yd = 70;
        this.course.holes[11].yd = 60;
        this.course.holes[12].yd = 50;
        this.course.holes[13].yd = 120;
        this.course.holes[14].yd = 70;
        this.course.holes[15].yd = 90;
        this.course.holes[16].yd = 95;
        this.course.holes[17].yd = 70;
    }


}














